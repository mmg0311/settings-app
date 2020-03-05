import React from 'react'
import { useHistory } from 'react-router-dom'

// State
import { Context } from '../../../store/tabs'

// Components
import {
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   AvatarGroup,
   Avatar,
   Text,
} from '@dailykit/ui'

// Styled
import { StyledWrapper, StyledHeader } from '../styled'

const AppsListing = () => {
   const history = useHistory()
   const { state } = React.useContext(Context)
   React.useEffect(() => {
      const tab = state.tabs.find(item => item.path === `/apps`) || {}
      if (!Object.prototype.hasOwnProperty.call(tab, 'path')) {
         history.push('/')
      }
   }, [history, state.tabs])
   const data = [
      {
         title: 'Ingredient',
         url: '',
         users: [
            { url: '', title: 'Jack' },
            { url: '', title: 'Back Bones' },
            { url: '', title: 'Stack Cue Stones' },
         ],
      },
      {
         title: 'Recipe',
         url: '',
         users: [
            { url: '', title: 'Back Bones' },
            { url: '', title: 'Stack Cue Stones' },
            { url: '', title: 'Jack' },
         ],
      },
      {
         title: 'Inventory',
         url: '',
         users: [
            { url: '', title: 'Back Bones' },
            { url: '', title: 'Jack' },
         ],
      },
   ]
   return (
      <StyledWrapper>
         <StyledHeader>
            <Text as="h2">Apps</Text>
         </StyledHeader>
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>Apps</TableCell>
                  <TableCell>Users Assigned</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((row, index) => (
                  <TableRow key={index}>
                     <TableCell>
                        <AvatarGroup>
                           <Avatar
                              withName
                              type="round"
                              url={row.url}
                              title={row.title}
                           />
                        </AvatarGroup>
                     </TableCell>
                     <TableCell>
                        <AvatarGroup>
                           {row.users.map(user => (
                              <Avatar
                                 key={user.title}
                                 title={user.title}
                                 url={user.url}
                              />
                           ))}
                        </AvatarGroup>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </StyledWrapper>
   )
}

export default AppsListing
