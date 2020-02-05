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
   Tags,
   Tag,
} from '../../../components'

// Styled
import { StyledWrapper } from '../styled'

// Icons
import { EditIcon, DeleteIcon } from '../../../assets/icons'

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
                  <TableCell align="right">Actions</TableCell>
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

export default DevicesListing
