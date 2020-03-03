import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

// State
import { Context } from '../../store/tabs'

// Styled
import { StyledTabs, StyledTab } from './styled'

// Icons
import { CloseIcon } from '../../assets/icons'

const Tabs = () => {
   const history = useHistory()
   const location = useLocation()
   const { state, dispatch } = React.useContext(Context)
   const switchTab = path => {
      dispatch({
         type: 'SWITCH_TAB',
         payload: { path, history },
      })
   }
   const removeTab = (e, { tab, index }) => {
      e.stopPropagation()
      dispatch({ type: 'DELETE_TAB', payload: { tab, index, history } })
   }
   return (
      <StyledTabs>
         {state.tabs.map((tab, index) => (
            <StyledTab
               key={tab.title}
               onClick={() => switchTab(tab.path)}
               active={tab.path === location.pathname}
            >
               <span title={tab.title}>{tab.title}</span>
               {tab.path === location.pathname && (
                  <div
                     role="button"
                     tabIndex={0}
                     title="Close Tab"
                     onClick={e => removeTab(e, { tab, index })}
                     onKeyPress={e =>
                        e.charCode === 32 && removeTab(e, { tab, index })
                     }
                  >
                     <CloseIcon color="#000" size="20" />
                  </div>
               )}
            </StyledTab>
         ))}
      </StyledTabs>
   )
}

export default Tabs
