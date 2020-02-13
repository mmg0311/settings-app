import React from 'react'

// State
import { Context } from '../../../store/tabs'

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
   TagGroup,
   Tag,
} from '@dailykit/ui'

// Styled
import { StyledWrapper, StyledHeader } from '../styled'

// Icons
import { EditIcon, DeleteIcon, AddIcon } from '../../../assets/icons'

const DevicesListing = () => {
   const { dispatch } = React.useContext(Context)
   const addTab = (title, view) => {
      dispatch({ type: 'ADD_TAB', payload: { type: 'forms', title, view } })
   }
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
         <StyledHeader>
            <h1>Devices</h1>
            <IconButton
               type="solid"
               onClick={() => addTab('Device Form', 'device')}
            >
               <AddIcon color="#fff" size={24} />
            </IconButton>
         </StyledHeader>
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
                        <TagGroup>
                           {row.stations.map((station, index) => (
                              <Tag key={station}>{station}</Tag>
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
