import React from 'react'
import { useLocation } from 'react-router-dom'

//translate
import { useTranslation } from "react-i18next";
import '../../i18n'

// State
import { useTabs } from '../../store/tabs'

// Styled
import { StyledTabs, StyledTab } from './styled'

// Icons
import { CloseIcon } from '../../assets/icons'

const Tabs = () => {
   const location = useLocation()
   const { tabs, switchTab, removeTab } = useTabs()
   const { t } = useTranslation();
   return (
      <StyledTabs>
         {tabs.map((tab, index) => (
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
                     title={t("components.Tabs.CloseTab")}
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
