import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

// Components
import {
   TextButton,
   IconButton,
   Text,
   Dropdown,
   ButtonTile,
   Tunnels,
   Tunnel,
   useTunnel,
   ClearIcon,
   ListItem,
   List,
   ListOptions,
   ListSearch,
   useMultiList,
   Avatar,
} from '@dailykit/ui'

import { Context } from '../../../store/tabs'

import doesTabExists from '../../../utils/doesTabExists'

// Styled
import {
   StyledWrapper,
   StyledHeader,
   StyledSection,
   StyledTunnelHeader,
   StyledTunnelMain,
} from '../styled'
import { StyledSelectedUsers, StyledStationsList } from './styled'

const DeviceForm = () => {
   const params = useParams()
   const history = useHistory()
   const { state } = React.useContext(Context)
   const [usersTunnels, openUsersTunnel, closeUsersTunnel] = useTunnel(1)
   const [stationsTunnels, openStationsTunnel, closeStationsTunnel] = useTunnel(
      1
   )
   const [search, setSearch] = React.useState('')
   const [stationSearch, setStationsSearch] = React.useState('')
   const [form, setForm] = React.useState({
      type: {},
      users: [],
      stations: [],
   })

   React.useEffect(() => {
      const tab = doesTabExists(state.tabs, `/devices/${params.name}`)
      if (Object.prototype.hasOwnProperty.call(tab, 'path')) {
         return setForm(form => ({ ...form, tab }))
      }
      return history.push('/devices')
   }, [state.tabs, params.name, history])

   const [list, selected, selectOption] = useMultiList([
      { id: 1, title: 'Praveen Bisht', img: '' },
      { id: 2, title: 'Marky Mark', img: '' },
      { id: 3, title: 'Peter Parker', img: '' },
   ])
   const [stations, selectedStations, selectStation] = useMultiList([
      { id: 1, title: 'Meat', description: 'STA-001' },
      { id: 2, title: 'Spices', description: 'STA-002' },
   ])
   const [options] = React.useState([
      { id: 1, title: 'Option1', img: 'This is option 1' },
      { id: 2, title: 'Option2', img: 'This is option 2' },
      { id: 3, title: 'Option3', img: 'This is option 3' },
      { id: 4, title: 'Option4', img: 'This is option 4' },
      { id: 5, title: 'Option5', img: 'This is option 5' },
      { id: 6, title: 'Option6', img: 'This is option 6' },
   ])
   const selectedOption = option => setForm({ ...form, type: option })
   return (
      <StyledWrapper>
         <StyledHeader>
            <Text as="h2">Configure Device: HP-W-124</Text>
            <TextButton type="solid">Configure</TextButton>
         </StyledHeader>
         <div style={{ width: '480px', paddingTop: '48px' }}>
            <Dropdown
               type="single"
               options={options}
               selectedOption={selectedOption}
               placeholder="Select or search device type"
            />
            <StyledSection>
               <Text as="title">Label Template</Text>
               <ButtonTile
                  noIcon
                  size="sm"
                  type="secondary"
                  text="Select label templates"
               />
            </StyledSection>
            <StyledSection>
               <Text as="title">Stations</Text>
               {form.stations.length > 0 && (
                  <StyledStationsList>
                     {form.stations.map(station => (
                        <li key={station.id}>
                           <Text as="title">{station.title}</Text>
                           <Text as="subtitle">{station.description}</Text>
                        </li>
                     ))}
                  </StyledStationsList>
               )}
               <ButtonTile
                  noIcon
                  size="sm"
                  type="secondary"
                  text="Select stations to route the device"
                  onClick={() => openStationsTunnel(1)}
               />
            </StyledSection>
            <Tunnels tunnels={stationsTunnels}>
               <Tunnel layer={1}>
                  <StyledTunnelHeader>
                     <div>
                        <IconButton
                           type="ghost"
                           onClick={() => closeStationsTunnel(1)}
                        >
                           <ClearIcon size={20} />
                        </IconButton>
                        <Text as="h2">Select devices for the user</Text>
                     </div>
                     <TextButton
                        type="solid"
                        onClick={() => {
                           closeStationsTunnel(1)
                           setForm({ ...form, stations: [...selectedStations] })
                        }}
                     >
                        Add
                     </TextButton>
                  </StyledTunnelHeader>
                  <StyledTunnelMain>
                     <List>
                        <ListSearch
                           onChange={value => setStationsSearch(value)}
                           placeholder="type what you’re looking for..."
                        />
                        <ListOptions>
                           {stations
                              .filter(option =>
                                 option.title
                                    .toLowerCase()
                                    .includes(stationSearch)
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
                                       selectStation('id', option.id)
                                    }
                                    isActive={selectedStations.find(
                                       item => item.id === option.id
                                    )}
                                 />
                              ))}
                        </ListOptions>
                     </List>
                  </StyledTunnelMain>
               </Tunnel>
            </Tunnels>
            <StyledSection>
               <Text as="title">Users</Text>
               {form.users?.length > 0 && (
                  <StyledSelectedUsers>
                     {form.users.map(user => (
                        <Avatar
                           withName
                           key={user.id}
                           url={user.img}
                           title={user.title}
                        />
                     ))}
                  </StyledSelectedUsers>
               )}
               <ButtonTile
                  noIcon
                  size="sm"
                  type="secondary"
                  text="Select and assign users"
                  onClick={() => openUsersTunnel(1)}
               />
               <Tunnels tunnels={usersTunnels}>
                  <Tunnel layer={1}>
                     <StyledTunnelHeader>
                        <div>
                           <IconButton
                              type="ghost"
                              onClick={() => closeUsersTunnel(1)}
                           >
                              <ClearIcon size={20} />
                           </IconButton>
                           <Text as="h2">Configure Apps</Text>
                        </div>
                        <TextButton
                           type="solid"
                           onClick={() => {
                              closeUsersTunnel(1)
                              setForm({ ...form, users: selected })
                           }}
                        >
                           Add
                        </TextButton>
                     </StyledTunnelHeader>
                     <StyledTunnelMain>
                        <List>
                           <ListSearch
                              onChange={value => setSearch(value)}
                              placeholder="type what you’re looking for..."
                           />
                           <ListOptions>
                              {list
                                 .filter(option =>
                                    option.title.toLowerCase().includes(search)
                                 )
                                 .map(option => (
                                    <ListItem
                                       type="MSL111"
                                       content={{
                                          img: option.img,
                                          title: option.title,
                                          roles: [],
                                       }}
                                       onClick={() =>
                                          selectOption('id', option.id)
                                       }
                                       isActive={selected.find(
                                          item => item.id === option.id
                                       )}
                                    />
                                 ))}
                           </ListOptions>
                        </List>
                     </StyledTunnelMain>
                  </Tunnel>
               </Tunnels>
            </StyledSection>
         </div>
      </StyledWrapper>
   )
}

export default DeviceForm
