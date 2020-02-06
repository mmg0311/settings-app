import React from 'react'

// Components
import {
   ButtonGroup,
   IconButton,
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   Avatar,
   TagGroup,
   Tag,
} from '@dailykit/ui'

// Styled
import { StyledWrapper, StyledIconGroup, StyledIcon } from '../styled'

// Icons
import { EditIcon, DeleteIcon } from '../../../assets/icons'

const UsersListing = () => {
   const data = [
      {
         user: {
            name: 'Marky Mark',
            imageUrl: '',
         },
         apps: ['', '', ''],
         roles: ['Admin', 'Chef'],
      },
      {
         user: {
            name: 'Alex Tod',
            imageUrl: '',
         },
         apps: ['', ''],
         roles: ['Admin', 'Moderator'],
      },
   ]
   return (
      <StyledWrapper>
         <h1>Roles</h1>
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>Users</TableCell>
                  <TableCell>Apps Configured</TableCell>
                  <TableCell>Roles</TableCell>
                  <TableCell align="right">Actions</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((row, index) => (
                  <TableRow key={index}>
                     <TableCell>
                        <Avatar title={row.user.name} withName />
                     </TableCell>
                     <TableCell>
                        <StyledIconGroup>
                           {row.apps.map((app, index) => (
                              <StyledIcon key={index} />
                           ))}
                        </StyledIconGroup>
                     </TableCell>
                     <TableCell>
                        <TagGroup>
                           {row.roles.map(role => (
                              <Tag key={role}>{role}</Tag>
                           ))}
                        </TagGroup>
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

export default UsersListing
