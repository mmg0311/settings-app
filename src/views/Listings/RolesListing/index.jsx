import React from 'react'

// Components
import { ButtonGroup, IconButton } from '@dailykit/ui'
import {
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   AvatarGroup,
   Avatar,
} from '../../../components'

// Styled
import { StyledWrapper, StyledIconGroup, StyledIcon } from '../styled'

// Icons
import { EditIcon, DeleteIcon } from '../../../assets/icons'

const RolesListing = () => {
   const data = [
      {
         role: 'Admin',
         apps: ['', '', ''],
         users: [
            { title: 'Jack' },
            { title: 'Back Bones' },
            { title: 'Stack Cue Stones' },
         ],
      },
      {
         role: 'Operator',
         apps: ['', ''],
         users: [{ title: 'Stack Cue Stones' }, { title: 'Back Bones' }],
      },
   ]
   return (
      <StyledWrapper>
         <h1>Roles</h1>
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>Roles</TableCell>
                  <TableCell>Apps Configured</TableCell>
                  <TableCell>Users Assigned</TableCell>
                  <TableCell align="right">Actions</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((row, index) => (
                  <TableRow key={index}>
                     <TableCell>{row.role}</TableCell>
                     <TableCell>
                        <StyledIconGroup>
                           {row.apps.map((app, index) => (
                              <StyledIcon key={index} />
                           ))}
                        </StyledIconGroup>
                     </TableCell>
                     <TableCell>
                        <AvatarGroup>
                           {row.users.map(user => (
                              <Avatar key={user.title} title={user.title} />
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