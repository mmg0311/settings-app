import React from 'react'

const Context = React.createContext()

const initialState = {
   tabs: [],
}

const reducers = (state, { type, payload }) => {
   switch (type) {
      // Add Tab
      case 'ADD_TAB': {
         const tabExists = state.tabs.find(tab => tab.path === payload.path)
         if (tabExists) {
            payload.history.push(payload.path)
            return state
         }
         payload.history.push(payload.path)
         return {
            ...state,
            tabs: [...state.tabs, { title: payload.title, path: payload.path }],
         }
      }
      // Delete Tab
      case 'DELETE_TAB': {
         const tabsCount = state.tabs.length
         // closing last remaining tab
         if (payload.index === 0 && tabsCount === 1) {
            payload.history.push('/')
         }
         // closing first tab when there's more than one tab
         else if (payload.index === 0 && tabsCount > 1) {
            payload.history.push(state.tabs[payload.index + 1].path)
         }
         // closing any tab when there's more than one tab
         else if (payload.index > 0 && tabsCount > 1) {
            payload.history.push(state.tabs[payload.index - 1].path)
         }

         return {
            ...state,
            tabs: state.tabs.filter((_, index) => index !== payload.index),
         }
      }
      // Switch Tab
      case 'SWITCH_TAB': {
         payload.history.push(payload.path)
         return state
      }
      default:
         return state
   }
}

export { Context, initialState, reducers }
