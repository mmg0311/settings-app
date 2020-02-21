import React from 'react'

// State
import { Context } from '../../../store/tabs'

// Components
import {
   TextButton,
   IconButton,
   Text,
   ButtonTile,
   Tunnels,
   Tunnel,
   useTunnel,
   ClearIcon,
   useMultiList,
   ListItem,
   List,
   ListOptions,
   ListSearch,
} from '@dailykit/ui'

// Styled
import {
   StyledWrapper,
   StyledHeader,
   StyledHeading,
   StyledSection,
   StyledTunnelHeader,
   StyledTunnelMain,
} from '../styled'

const RoleForm = () => {
   const { state, dispatch } = React.useContext(Context)
   const [tunnels, openTunnel, closeTunnel] = useTunnel(1)
   const [form, setForm] = React.useState({
      roleName: '',
   })
   const [search, setSearch] = React.useState('')

   const [list, selected, selectOption] = useMultiList([
      { id: 1, title: 'Ingredient App', icon: '' },
      { id: 2, title: 'Recipe App', icon: '' },
      { id: 3, title: 'Inventory App', icon: '' },
      { id: 4, title: 'Settings App', icon: '' },
   ])

   React.useEffect(() => {
      const tab = state.forms.find(tab => tab.view === 'role')
      setForm({ ...tab?.data })
   }, [state.forms])

   React.useEffect(() => {
      dispatch({
         type: 'SET_FORM_DATA',
         payload: {
            data: form,
            view: 'role',
            type: 'forms',
            title: 'Role Form',
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
            <Text
               name="roleName"
               style={{ width: '320px' }}
               value={form.roleName || ''}
               onChange={e => handleChange(e)}
               placeholder="Enter the role name"
            />
            <TextButton type="solid">Publish</TextButton>
         </StyledHeader>
         <StyledSection>
            <StyledHeading>Apps</StyledHeading>
            <div onClick={() => openTunnel(1)}>
               <ButtonTile
                  noIcon
                  size="sm"
                  type="secondary"
                  text="Select and Configure Apps"
               />
            </div>
         </StyledSection>
         <Tunnels tunnels={tunnels}>
            <Tunnel layer={1}>
               <StyledTunnelHeader>
                  <div>
                     <IconButton type="ghost" onClick={() => closeTunnel(1)}>
                        <ClearIcon size={20} />
                     </IconButton>
                     <h1>Configure Apps</h1>
                  </div>
                  <TextButton type="solid" onClick={() => closeTunnel(1)}>
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
                                 content={{
                                    icon: option.icon,
                                    title: option.title,
                                 }}
                                 onClick={() => selectOption('id', option.id)}
                                 isActive={selected.find(
                                    item => item.id === option.id
                                 )}
                              >
                                 <TextButton
                                    type="ghost"
                                    onClick={() => openTunnel(2)}
                                 >
                                    CONFIGURE
                                 </TextButton>
                              </ListItem>
                           ))}
                     </ListOptions>
                  </List>
               </StyledTunnelMain>
            </Tunnel>
            <Tunnel layer={2}>
               <StyledTunnelHeader>
                  <div>
                     <IconButton type="ghost" onClick={() => closeTunnel(2)}>
                        <ClearIcon size={20} />
                     </IconButton>
                     <h1>Permissions</h1>
                  </div>
                  <TextButton type="solid" onClick={() => closeTunnel(2)}>
                     Save
                  </TextButton>
               </StyledTunnelHeader>
               <StyledTunnelMain>Permission List</StyledTunnelMain>
            </Tunnel>
         </Tunnels>
      </StyledWrapper>
   )
}

export default RoleForm
