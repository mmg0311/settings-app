import React from 'react'

// State
import { Context } from '../../store/tabs'

// Views
import { Home } from '../../views'

const Main = () => {
   const { state } = React.useContext(Context)
   if (state.listings.length === 0 && state.forms.length === 0) return <Home />
}

export default Main
