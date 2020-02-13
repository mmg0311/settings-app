import React from 'react'

// State
import { Context } from '../../store/tabs'

import { StyledHome, StyledCardList, StyledCard } from './styled'

const Home = () => {
   const { dispatch } = React.useContext(Context)
   const addTab = (title, view) => {
      dispatch({ type: 'ADD_TAB', payload: { type: 'listings', title, view } })
   }
   return (
      <StyledHome>
         <h1>Settings App</h1>
         <StyledCardList>
            <StyledCard onClick={() => addTab('Users', 'users')}>
               <h2>Users</h2>
               <p>23 created so far</p>
               <span data-type="status">All available</span>
               <span data-type="link">Go to Users ></span>
            </StyledCard>
            <StyledCard onClick={() => addTab('Roles', 'roles')}>
               <h2>Roles</h2>
               <p>4 created so far</p>
               <span data-type="status">All active</span>
               <span data-type="link">Go to Roles ></span>
            </StyledCard>
            <StyledCard onClick={() => addTab('Apps', 'apps')}>
               <h2>Apps</h2>
               <p>6 created so far</p>
               <span data-type="status">All available</span>
               <span data-type="link">Go to Apps ></span>
            </StyledCard>
            <StyledCard onClick={() => addTab('Devices', 'devices')}>
               <h2>Devices</h2>
               <p>4 created so far</p>
               <span data-type="status">All active</span>
               <span data-type="link">Go to Devices ></span>
            </StyledCard>
         </StyledCardList>
      </StyledHome>
   )
}

export default Home
