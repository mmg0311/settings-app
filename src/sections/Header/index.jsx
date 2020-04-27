import React from 'react'
import { useHistory } from 'react-router-dom'

//translate
import { useTranslation } from "react-i18next";
import '../../i18n'

// Components
import { Tabs } from '../../components'

// Styled
import { StyledHeader, StyledMenu, StyledNav } from './styled'

// Icons
import { MenuIcon, LeftIcon, RightIcon } from '../../assets/icons'

const Header = ({ toggleSidebar }) => {
   const history = useHistory();
   const { t } = useTranslation();
   return (
      <StyledHeader>
         <StyledMenu
            title="Menu"
            tabIndex="0"
            role="button"
            onClick={() => toggleSidebar(visible => !visible)}
            onKeyPress={e =>
               e.charCode === 32 && toggleSidebar(visible => !visible)
            }
         >
            <MenuIcon color="#000" size="24" />
         </StyledMenu>
         <StyledNav>
            <button
               type="button"
               title={t("sections.Header.GoBack")}
               onClick={() => history.goBack()}
            >
               <LeftIcon color="#000" size="22" />
            </button>
            <button
               type="button"
               title={t("sections.Header.GoForward")}
               onClick={() => history.goForward()}
            >
               <RightIcon color="#000" size="22" />
            </button>
         </StyledNav>
         <Tabs />
      </StyledHeader>
   )
}

export default Header
