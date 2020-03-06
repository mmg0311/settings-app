import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

// Components
import {
   TextButton,
   IconButton,
   ClearIcon,
   Input,
   ButtonTile,
   Tunnels,
   Tunnel,
   useTunnel,
   ListItem,
   List,
   ListOptions,
   ListSearch,
   useMultiList,
   Text,
   RadioGroup,
} from '@dailykit/ui'

// State
import { Context } from '../../../store/tabs'

import doesTabExists from '../../../utils/doesTabExists'

// Styled
import {
   StyledWrapper,
   StyledHeader,
   StyledForm,
   StyledSection,
   StyledTunnelHeader,
   StyledTunnelMain,
} from '../styled'
import { StyledDevicesList } from './styled'

const StationForm = () => {
   const params = useParams()
   const history = useHistory()
   const { state, dispatch } = React.useContext(Context)
   const [devicesTunnels, openDevicesTunnel, closeDevicesTunnel] = useTunnel(1)
   const [form, setForm] = React.useState({
      name: '',
      devices: [],
      type: {},
   })
   const [devicesSearch, setDevicesSearch] = React.useState('')

   React.useEffect(() => {
      const tab = doesTabExists(state.tabs, `/stations/${params.name}`)
      if (Object.prototype.hasOwnProperty.call(tab, 'path')) {
         return setForm(form => ({ ...form, tab }))
      }
      return history.push('/stations')
   }, [state.tabs, params.name, history])

   const [devicesList, selectedDevices, selectDevice] = useMultiList([
      {
         id: 1,
         title: 'Weighing Scale',
         description: 'WST-001',
      },
      {
         id: 2,
         title: 'Terminal',
         description: 'T-002',
      },
      {
         id: 3,
         title: 'Label Printer',
         description: 'LP-001',
      },
   ])

   React.useEffect(() => {
      dispatch({
         type: 'SET_FORM_DATA',
         payload: {
            data: form,
            view: 'user',
            type: 'forms',
            title: 'User Form',
         },
      })
   }, [dispatch, form])

   const handleChange = e => {
      const { name, value } = e.target
      setForm({ ...form, [name]: value })
   }
   return (
      <StyledWrapper>
         <StyledHeader>
            <Input
               type="text"
               name="name"
               style={{ width: '320px' }}
               value={form.name || ''}
               onChange={e => handleChange(e)}
               placeholder="Enter the station name"
            />
            <TextButton type="solid">Publish</TextButton>
         </StyledHeader>
         <StyledForm>
            <Text as="title">Select station type</Text>
            <RadioGroup
               options={[
                  { id: 1, title: 'Packaging' },
                  { id: 2, title: 'Assembly' },
               ]}
               active={1}
               onChange={option => setForm({ ...form, type: option })}
            />
            <StyledSection>
               <Text as="title">Devices</Text>
               {form.devices.length > 0 && (
                  <StyledDevicesList>
                     {form.devices.map(device => (
                        <li key={device.id}>
                           <Text as="title">{device.title}</Text>
                           <Text as="subtitle">{device.description}</Text>
                        </li>
                     ))}
                  </StyledDevicesList>
               )}
               <ButtonTile
                  noIcon
                  size="sm"
                  type="secondary"
                  text="Select Devices"
                  onClick={() => openDevicesTunnel(1)}
               />
            </StyledSection>
            <Tunnels tunnels={devicesTunnels}>
               <Tunnel layer={1}>
                  <StyledTunnelHeader>
                     <div>
                        <IconButton
                           type="ghost"
                           onClick={() => closeDevicesTunnel(1)}
                        >
                           <ClearIcon size={20} />
                        </IconButton>
                        <Text as="h2">Select devices for the user</Text>
                     </div>
                     <TextButton
                        type="solid"
                        onClick={() => {
                           closeDevicesTunnel(1)
                           setForm({ ...form, devices: [...selectedDevices] })
                        }}
                     >
                        Add
                     </TextButton>
                  </StyledTunnelHeader>
                  <StyledTunnelMain>
                     <List>
                        <ListSearch
                           onChange={value => setDevicesSearch(value)}
                           placeholder="type what you’re looking for..."
                        />
                        <ListOptions>
                           {devicesList
                              .filter(option =>
                                 option.title
                                    .toLowerCase()
                                    .includes(devicesSearch)
                              )
                              .map(option => (
                                 <ListItem
                                    type="MSL2"
                                    key={option.id}
                                    content={{
                                       title: option.title,
                                       description: option.description,
                                    }}
                                    onClick={() =>
                                       selectDevice('id', option.id)
                                    }
                                    isActive={selectedDevices.find(
                                       item => item.id === option.id
                                    )}
                                 />
                              ))}
                        </ListOptions>
                     </List>
                  </StyledTunnelMain>
               </Tunnel>
            </Tunnels>
         </StyledForm>
      </StyledWrapper>
   )
}

export default StationForm
