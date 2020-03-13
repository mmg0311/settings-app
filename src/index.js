import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { TabProvider } from './store/tabs'

import './index.css'

ReactDOM.render(
   <TabProvider>
      <App />
   </TabProvider>,
   document.getElementById('root')
)
