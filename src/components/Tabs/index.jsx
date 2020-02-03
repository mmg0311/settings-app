import React from 'react'

// Styled
import { StyledTabs, StyledTab } from './styled'

// Icons
import { CloseIcon } from '../../assets/icons'

const Tab = ({ active, title, ...props }) => (
   <StyledTab active={active} {...props}>
      <span title={title}>{title}</span>
      {active && (
         <div title="Close Tab">
            <CloseIcon color="#000" size="20" />
         </div>
      )}
   </StyledTab>
)

const Tabs = ({ tabs = [] }) => {
   return (
      <StyledTabs>
         {tabs.map(tab => (
            <Tab {...tab} />
         ))}
      </StyledTabs>
   )
}

export default Tabs
