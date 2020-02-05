import React from 'react'

// State
import { Context } from '../../store/tabs'

// Styled
import {
   StyledSidebar,
   StyledList,
   StyledListItem,
   StyledHeading,
} from './styled'

const Sidebar = ({ visible }) => {
   const { dispatch } = React.useContext(Context)
   const addTab = (title, view) => {
      dispatch({ type: 'ADD_TAB', payload: { type: 'listings', title, view } })
   }
   return (
      <StyledSidebar visible={visible}>
         <StyledHeading>Listings</StyledHeading>
         <StyledList>
            <StyledListItem onClick={() => addTab('Users', 'users')}>
               Users
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Devices', 'devices')}>
               Devices
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Roles', 'roles')}>
               Roles
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Apps', 'apps')}>
               Apps
            </StyledListItem>
         </StyledList>
      </StyledSidebar>
   )
}

export default Sidebar
