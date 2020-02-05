import React from 'react'

// Components
import {
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   Avatar,
   Tags,
   Tag,
} from '../../components'

// Styled
import { StyledWrapper, StyledIconGroup, StyledIcon } from './styled'

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
                        <Tags>
                           {row.roles.map(role => (
                              <Tag key={role}>{role}</Tag>
                           ))}
                        </Tags>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </StyledWrapper>
   )
}

export default UsersListing
