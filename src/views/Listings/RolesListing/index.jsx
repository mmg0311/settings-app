import React from 'react'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'

// Components
import {
   ButtonGroup,
   IconButton,
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   AvatarGroup,
   Avatar,
   Text,
} from '@dailykit/ui'

// State
import { useTabs } from '../../../store/tabs'

// Styled
import { StyledWrapper, StyledHeader } from '../styled'

// Icons
import { EditIcon, DeleteIcon, AddIcon } from '../../../assets/icons'

const RolesListing = () => {
   const history = useHistory()
   const { tabs, addTab } = useTabs()

   const createTab = () => {
      const hash = `untitled${uuid().split('-')[0]}`
      addTab(hash, `/roles/${hash}`)
   }

   React.useEffect(() => {
      const tab = tabs.find(item => item.path === `/roles`) || {}
      if (!Object.prototype.hasOwnProperty.call(tab, 'path')) {
         history.push('/')
      }
   }, [history, tabs])

   const data = [
      {
         role: 'Admin',
         apps: [
            { title: 'Recipe App', url: '' },
            { title: 'Inventory App', url: '' },
            { title: 'Ingredient App', url: '' },
         ],
      },
      {
         role: 'Operator',
         apps: [
            { title: 'Inventory App', url: '' },
            { title: 'Recipe App', url: '' },
            { title: 'Ingredient App', url: '' },
         ],
      },
   ]
   return (
      <StyledWrapper>
         <StyledHeader>
            <Text as="h2">Roles</Text>
            <IconButton type="solid" onClick={() => createTab()}>
               <AddIcon color="#fff" size={24} />
            </IconButton>
         </StyledHeader>
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>Roles</TableCell>
                  <TableCell>Apps Configured</TableCell>
                  <TableCell align="right">Actions</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map(row => (
                  <TableRow key={row.role}>
                     <TableCell>{row.role}</TableCell>
                     <TableCell>
                        <AvatarGroup>
                           {row.apps.map(app => (
                              <Avatar
                                 url={app.url}
                                 key={app.title}
                                 title={app.title}
                              />
                           ))}
                        </AvatarGroup>
                     </TableCell>
                     <TableCell align="right">
                        <ButtonGroup align="right">
                           <IconButton type="outline">
                              <EditIcon />
                           </IconButton>
                           <IconButton type="outline">
                              <DeleteIcon />
                           </IconButton>
                        </ButtonGroup>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </StyledWrapper>
   )
}

export default RolesListing
