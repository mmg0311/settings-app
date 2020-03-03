import React from 'react'
import { useHistory } from 'react-router-dom'

// State
import { Context } from '../../store/tabs'

// Styled
import {
   StyledSidebar,
   StyledList,
   StyledListItem,
   StyledHeading,
} from './styled'

const Sidebar = ({ visible, toggleSidebar }) => {
   const history = useHistory()
   const { dispatch } = React.useContext(Context)
   const addTab = (title, path) => {
      toggleSidebar(!visible)
      dispatch({
         type: 'ADD_TAB',
         payload: { title, path, history },
      })
   }
   return (
      <StyledSidebar visible={visible}>
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
         </StyledList>
      </StyledSidebar>
   )
}

export default Sidebar
