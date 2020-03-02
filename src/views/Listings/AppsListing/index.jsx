import React from 'react'

// Components
import {
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   TagGroup,
   Tag,
   AvatarGroup,
   Avatar,
   Text,
} from '@dailykit/ui'

// Styled
import { StyledWrapper, StyledIcon, StyledHeader } from '../styled'

const AppsListing = () => {
   const data = [
      {
         roles: ['Admin', 'Chef'],
         users: [
            { title: 'Jack' },
            { title: 'Back Bones' },
            { title: 'Stack Cue Stones' },
         ],
      },
      {
         roles: ['Admin', 'Chef', 'Operator'],
         users: [
            { title: 'Back Bones' },
            { title: 'Stack Cue Stones' },
            { title: 'Jack' },
         ],
      },
      {
         roles: ['Admin', 'Chef', 'Moderator'],
         users: [{ title: 'Back Bones' }, { title: 'Jack' }],
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
                  <TableCell>Roles Managed</TableCell>
                  <TableCell>Users Assigned</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((row, index) => (
                  <TableRow key={index}>
                     <TableCell>
                        <StyledIcon />
                     </TableCell>
                     <TableCell>
                        <TagGroup>
                           {row.roles.map(role => (
                              <Tag key={role}>{role}</Tag>
                           ))}
                        </TagGroup>
                     </TableCell>
                     <TableCell>
                        <AvatarGroup>
                           {row.users.map(user => (
                              <Avatar key={user.title} title={user.title} />
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
