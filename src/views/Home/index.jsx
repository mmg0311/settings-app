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
            <StyledCard>
               <h2>Users</h2>
               <p>23 created so far</p>
               <span data-type="status">All available</span>
               <span data-type="link" onClick={() => addTab('Users', 'users')}>
                  Go to Users >
               </span>
            </StyledCard>
            <StyledCard>
               <h2>Roles</h2>
               <p>4 created so far</p>
               <span data-type="status">All active</span>
               <span data-type="link" onClick={() => addTab('Roles', 'roles')}>
                  Go to Roles >
               </span>
            </StyledCard>
            <StyledCard>
               <h2>Apps</h2>
               <p>6 created so far</p>
               <span data-type="status">All available</span>
               <span data-type="link" onClick={() => addTab('Apps', 'apps')}>
                  Go to Apps >
               </span>
            </StyledCard>
            <StyledCard>
               <h2>Devices</h2>
               <p>4 created so far</p>
               <span data-type="status">All active</span>
               <span
                  data-type="link"
                  onClick={() => addTab('Devices', 'devices')}
               >
                  Go to Devices >
               </span>
            </StyledCard>
         </StyledCardList>
      </StyledHome>
   )
}

export default Home
