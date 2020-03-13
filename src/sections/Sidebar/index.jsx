import React from 'react'

// State
import { useTabs } from '../../store/tabs'

// Styled
import {
   StyledSidebar,
   StyledList,
   StyledListItem,
   StyledHeading,
} from './styled'

const Sidebar = ({ visible, toggleSidebar }) => {
   const { addTab } = useTabs()
   return (
      <StyledSidebar visible={visible} onClick={() => toggleSidebar(false)}>
         <StyledHeading>Listings</StyledHeading>
         <StyledList>
            <StyledListItem onClick={() => addTab('Users', '/users')}>
               Users
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Devices', '/devices')}>
               Devices
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Roles', '/roles')}>
               Roles
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Apps', '/apps')}>
               Apps
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Stations', '/stations')}>
               Station
            </StyledListItem>
         </StyledList>
      </StyledSidebar>
   )
}

export default Sidebar
