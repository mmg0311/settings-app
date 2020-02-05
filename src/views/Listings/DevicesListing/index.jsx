import React from 'react'

// Components
import {
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   AvatarGroup,
   Avatar,
   Tags,
   Tag,
} from '../../../components'

// Styled
import { StyledWrapper } from '../styled'

const DevicesListing = () => {
   const data = [
      {
         name: 'Weighing Scale Terminal',
         stations: ['Station 1', 'Station 2'],
         users: [
            { title: 'Jack' },
            { title: 'Back Bones' },
            { title: 'Stack Cue Stones' },
         ],
      },
      {
         name: 'Terminal',
         stations: ['Station 2'],
         users: [{ title: 'Stack Cue Stones' }, { title: 'Back Bones' }],
      },
   ]
   return (
      <StyledWrapper>
         <h1>Roles</h1>
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>Devices</TableCell>
                  <TableCell>Stations</TableCell>
                  <TableCell>Users Assigned</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((row, index) => (
                  <TableRow key={index}>
                     <TableCell>{row.name}</TableCell>
                     <TableCell>
                        <Tags>
                           {row.stations.map((station, index) => (
                              <Tag key={station}>{station}</Tag>
                           ))}
                        </Tags>
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

export default DevicesListing
