import React from 'react'

// State
import { Context } from '../../store/tabs'

// Views
import { Home, AppsListing, RolesListing } from '../../views'

const renderComponent = (type, view) => {
   if (type === 'listings' && view === 'apps') return <AppsListing />
   if (type === 'listings' && view === 'roles') return <RolesListing />
}

const Main = () => {
   const { state } = React.useContext(Context)
   if (state.listings.length === 0 && state.forms.length === 0) return <Home />
   return <main>{renderComponent(state.current.type, state.current.view)}</main>
}

export default Main
