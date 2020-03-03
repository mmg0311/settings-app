import React from 'react'

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

// Styled
import {
   StyledWrapper,
   StyledHeader,
   StyledSection,
   StyledTunnelHeader,
   StyledTunnelMain,
} from '../styled'
import { StyledSelectedUsers } from './styled'

const DeviceForm = () => {
   const [usersTunnels, openUsersTunnel, closeUsersTunnel] = useTunnel(1)
   const [search, setSearch] = React.useState('')
   const [form, setForm] = React.useState({
      type: '',
      users: [],
   })
   const [list, selected, selectOption] = useMultiList([
      { id: 1, title: 'Praveen Bisht', img: '' },
      { id: 2, title: 'Marky Mark', img: '' },
      { id: 3, title: 'Peter Parker', img: '' },
   ])
   const [options] = React.useState([
      { id: 1, title: 'Option1', img: 'This is option 1' },
      { id: 2, title: 'Option2', img: 'This is option 2' },
      { id: 3, title: 'Option3', img: 'This is option 3' },
      { id: 4, title: 'Option4', img: 'This is option 4' },
      { id: 5, title: 'Option5', img: 'This is option 5' },
      { id: 6, title: 'Option6', img: 'This is option 6' },
   ])
   const selectedOption = option => console.log(option)
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
               <ButtonTile
                  noIcon
                  size="sm"
                  type="secondary"
                  text="Select stations to route the device"
               />
            </StyledSection>
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
