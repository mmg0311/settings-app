import React from 'react'

// State
import { Context } from '../../../store/tabs'

// Components
import {
   TextButton,
   IconButton,
   ClearIcon,
   Text,
   ButtonTile,
   Tunnels,
   Tunnel,
   useTunnel,
   ListItem,
   List,
   ListOptions,
   ListSearch,
   useMultiList,
   Avatar,
} from '@dailykit/ui'

// Styled
import {
   StyledWrapper,
   StyledHeader,
   StyledForm,
   StyledRow,
   StyledHeading,
   StyledSection,
   StyledTunnelHeader,
   StyledTunnelMain,
} from '../styled'
import { StyledSelect, StyledAppItem, StyledRolesHeading } from './styled'

const UserForm = () => {
   const { dispatch } = React.useContext(Context)
   const [selectedApp, setSelectedApp] = React.useState({})
   const [appsTunnels, openAppsTunnel, closeAppsTunnel] = useTunnel(1)
   const [rolesTunnels, openRolesTunnel, closeRolesTunnel] = useTunnel(1)
   const [form, setForm] = React.useState({
      firstname: '',
      lastname: '',
      email: '',
      phoneCode: '',
      phoneNo: '',
      apps: [],
   })
   const [search, setSearch] = React.useState('')

   const [list, selected, selectOption] = useMultiList([
      {
         id: 1,
         title: 'Ingredient App',
         icon: '',
      },
      {
         id: 2,
         title: 'Recipe App',
         icon: '',
      },
      {
         id: 3,
         title: 'Inventory App',
         icon: '',
      },
      {
         id: 4,
         title: 'Settings App',
         icon: '',
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
      setForm(form => ({
         ...form,
         [name]: value,
      }))
   }
   return (
      <StyledWrapper>
         <StyledHeader>
            <h1>New User</h1>
            <TextButton type="solid">Publish</TextButton>
         </StyledHeader>
         <StyledForm>
            <StyledRow>
               <Text
                  name="firstname"
                  label="First Name"
                  value={form.firstname || ''}
                  onChange={e => handleChange(e)}
               />
               <Text
                  name="lastname"
                  label="Last Name"
                  value={form.lastname || ''}
                  onChange={e => handleChange(e)}
               />
            </StyledRow>
            <StyledRow>
               <Text
                  name="email"
                  label="Email"
                  value={form.email || ''}
                  onChange={e => handleChange(e)}
               />
            </StyledRow>
            <StyledRow>
               <StyledSelect
                  name="phoneCode"
                  value={form.phoneCode}
                  onChange={e => handleChange(e)}
               >
                  <option value="91">+91</option>
                  <option value="102">+102</option>
                  <option value="68">+68</option>
                  <option value="72">+72</option>
               </StyledSelect>
               <Text
                  name="phoneNo"
                  label="Phone Number"
                  value={form.phoneNo || ''}
                  onChange={e => handleChange(e)}
               />
            </StyledRow>
            <StyledSection>
               <StyledHeading>Apps</StyledHeading>
               {form.apps.length > 0 &&
                  form.apps.map(option => (
                     <StyledAppItem key={option.id}>
                        <div>
                           <div>
                              <Avatar
                                 withName
                                 type="round"
                                 url={option.icon}
                                 title={option.title}
                              />
                           </div>
                           <TextButton
                              type="ghost"
                              onClick={() => {
                                 setSelectedApp(option)
                                 openRolesTunnel(1)
                              }}
                           >
                              Configure
                           </TextButton>
                        </div>
                     </StyledAppItem>
                  ))}
               <div onClick={() => openAppsTunnel(1)}>
                  <ButtonTile
                     noIcon
                     size="sm"
                     type="secondary"
                     text="Select Apps"
                  />
               </div>
            </StyledSection>
            <StyledSection>
               <StyledHeading>Devices</StyledHeading>
               <div>
                  <ButtonTile
                     noIcon
                     size="sm"
                     type="secondary"
                     text="Select Devices"
                  />
               </div>
            </StyledSection>
            <Tunnels tunnels={appsTunnels}>
               <Tunnel layer={1}>
                  <StyledTunnelHeader>
                     <div>
                        <IconButton
                           type="ghost"
                           onClick={() => closeAppsTunnel(1)}
                        >
                           <ClearIcon size={20} />
                        </IconButton>
                        <h1>Configure Apps</h1>
                     </div>
                     <TextButton
                        type="solid"
                        onClick={() => {
                           closeAppsTunnel(1)
                           setForm(form => ({ ...form, apps: [...selected] }))
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
                                    type="MSL1101"
                                    key={option.id}
                                    content={{
                                       icon: option.icon,
                                       title: option.title,
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
            <Tunnels tunnels={rolesTunnels}>
               <Tunnel layer={1}>
                  <StyledTunnelHeader>
                     <div>
                        <IconButton
                           type="ghost"
                           onClick={() => closeRolesTunnel(1)}
                        >
                           <ClearIcon size={20} />
                        </IconButton>
                        <h1>{selectedApp.title}</h1>
                     </div>
                     <TextButton
                        type="solid"
                        onClick={() => {
                           closeRolesTunnel(1)
                        }}
                     >
                        Save
                     </TextButton>
                  </StyledTunnelHeader>
                  <StyledTunnelMain>
                     <StyledRolesHeading>
                        Roles for role: {form.roleName || 'Untitled'}
                     </StyledRolesHeading>
                  </StyledTunnelMain>
               </Tunnel>
            </Tunnels>
         </StyledForm>
      </StyledWrapper>
   )
}

export default UserForm
