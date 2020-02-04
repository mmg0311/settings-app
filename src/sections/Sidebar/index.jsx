import React from 'react'

// Styled
import {
   StyledSidebar,
   StyledList,
   StyledListItem,
   StyledHeading,
} from './styled'

const Sidebar = ({ visible }) => {
   return (
      <StyledSidebar visible={visible}>
         <StyledHeading>Listings</StyledHeading>
         <StyledList>
            <StyledListItem>Users</StyledListItem>
            <StyledListItem>Devices</StyledListItem>
            <StyledListItem>Roles</StyledListItem>
            <StyledListItem>Apps</StyledListItem>
         </StyledList>
      </StyledSidebar>
   )
}

export default Sidebar
