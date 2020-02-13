import React from 'react'

// State
import { Context } from '../../store/tabs'

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
} from '../../views'

const renderComponent = (type, view) => {
   // Listings
   if (type === 'listings' && view === 'apps') return <AppsListing />
   if (type === 'listings' && view === 'roles') return <RolesListing />
   if (type === 'listings' && view === 'users') return <UsersListing />
   if (type === 'listings' && view === 'devices') return <DevicesListing />
   // Forms
   if (type === 'forms' && view === 'user') return <UserForm />
   if (type === 'forms' && view === 'role') return <RoleForm />
   if (type === 'forms' && view === 'device') return <DeviceForm />
}

const Main = () => {
   const { state } = React.useContext(Context)
   if (state.listings.length === 0 && state.forms.length === 0) return <Home />
   return <main>{renderComponent(state.current.type, state.current.view)}</main>
}

export default Main
