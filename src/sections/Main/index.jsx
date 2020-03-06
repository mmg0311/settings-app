import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Views
import {
   Home,
   AppsListing,
   RolesListing,
   UsersListing,
   DevicesListing,
   UserForm,
   RoleForm,
   DeviceForm,
   StationsListing,
   StationForm,
} from '../../views'

const Main = () => {
   return (
      <main>
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route path="/apps" exact>
               <AppsListing />
            </Route>
            <Route path="/users" exact>
               <UsersListing />
            </Route>
            <Route path="/users/:name">
               <UserForm />
            </Route>
            <Route path="/roles" exact>
               <RolesListing />
            </Route>
            <Route path="/roles/:name">
               <RoleForm />
            </Route>
            <Route path="/devices" exact>
               <DevicesListing />
            </Route>
            <Route path="/devices/:name">
               <DeviceForm />
            </Route>
            <Route path="/stations" exact>
               <StationsListing />
            </Route>
            <Route path="/stations/:name">
               <StationForm />
            </Route>
         </Switch>
      </main>
   )
}

export default Main
