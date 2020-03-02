import React from 'react'

// State
import { Context } from '../../store/tabs'

import { DashboardTile, Text } from '@dailykit/ui'

import { StyledHome, StyledCardList } from './styled'

const Home = () => {
   const { dispatch } = React.useContext(Context)
   const addTab = (title, view) => {
      dispatch({ type: 'ADD_TAB', payload: { type: 'listings', title, view } })
   }
   return (
      <StyledHome>
         <Text as="h1">Settings App</Text>
         <StyledCardList>
            <DashboardTile
               title="Users"
               count="23"
               conf="All available"
               onClick={() => addTab('Users', 'users')}
            />
            <DashboardTile
               title="Roles"
               count="4"
               conf="All available"
               onClick={() => addTab('Roles', 'roles')}
            />
            <DashboardTile
               title="Apps"
               count="6"
               conf="All available"
               onClick={() => addTab('Apps', 'apps')}
            />
            <DashboardTile
               title="Devices"
               count="4"
               conf="All active"
               onClick={() => addTab('Devices', 'devices')}
            />
         </StyledCardList>
      </StyledHome>
   )
}

export default Home
