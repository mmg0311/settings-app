import React from 'react'

import { StyledHome, StyledCardList, StyledCard } from './styled'

const Home = () => {
   return (
      <StyledHome>
         <h1>Settings App</h1>
         <StyledCardList>
            <StyledCard>
               <h2>Users</h2>
               <p>23 created so far</p>
               <span data-type="status">All available</span>
               <span data-type="link">Go to Users ></span>
            </StyledCard>
            <StyledCard>
               <h2>Roles</h2>
               <p>4 created so far</p>
               <span data-type="status">All active</span>
               <span data-type="link">Go to Roles ></span>
            </StyledCard>
            <StyledCard>
               <h2>Apps</h2>
               <p>6 created so far</p>
               <span data-type="status">All available</span>
               <span data-type="link">Go to Apps ></span>
            </StyledCard>
            <StyledCard>
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
