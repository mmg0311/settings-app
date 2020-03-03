import React from 'react'

const Context = React.createContext()

const state = {
   listings: [],
   forms: [{ type: 'forms', title: 'Device Form', view: 'device' }],
   current: { type: 'forms', title: 'Device Form', view: 'device' },
}

const reducers = (state, { type, payload }) => {
   switch (type) {
      case 'SET_FORM_DATA': {
         const index = state[payload.type].findIndex(
            tab => tab.type === payload.type && tab.view === payload.view
         )
         state[payload.type][index] = payload
         return state
      }
      // Add Tab
      case 'ADD_TAB': {
         const alreadyExists = state[payload.type].find(
            tab => tab.title === payload.title
         )

         if (alreadyExists) {
            return { ...state, current: { ...payload } }
         } else {
            return {
               ...state,
               current: { ...payload },
               [payload.type]: [...state[payload.type], { ...payload }],
            }
         }
      }
      // Delete Tab
      case 'DELETE_TAB': {
         const type = payload.type
         const tabs = state[type].filter(
            (tab, index) =>
               tab.title !== payload.title && index !== payload.index
         )

         const listingsLength = state.listings.length
         const formsLength = state.forms.length

         // Listings

         // Switch to right tab
         if (type === 'listings' && listingsLength > 1 && payload.index === 0) {
            state.current = state.listings[payload.index + 1]
         }
         // Switch to left tab
         if (type === 'listings' && listingsLength > 1 && payload.index > 0) {
            state.current = state.listings[payload.index - 1]
         }
         // Switch to first tab in forms
         if (
            type === 'listings' &&
            listingsLength === 1 &&
            formsLength >= 1 &&
            payload.index === 0
         ) {
            state.current = state.forms[0]
         }

         // Forms

         // Switch to right tab
         if (type === 'forms' && formsLength > 1 && payload.index === 0) {
            state.current = state.forms[payload.index + 1]
         }
         // Switch to left tab
         if (type === 'forms' && formsLength > 1 && payload.index > 0) {
            state.current = state.forms[payload.index - 1]
         }
         // Switch to last tab in listings
         if (
            type === 'forms' &&
            formsLength === 1 &&
            listingsLength >= 1 &&
            payload.index === 0
         ) {
            state.current = state.listings[listingsLength - 1]
         }

         return { ...state, [type]: tabs }
      }
      // Switch Tab
      case 'SWITCH_TAB': {
         return { ...state, current: { ...payload } }
      }
      default:
         return state
   }
}

export { Context, state, reducers }
