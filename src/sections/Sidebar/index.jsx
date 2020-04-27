import React from 'react'

//translate
import { useTranslation } from "react-i18next";
import '../../i18n'

// State
import { useTabs } from '../../store/tabs'

// Styled
import {
   StyledSidebar,
   StyledList,
   StyledListItem,
   StyledHeading,
} from './styled'
import i18next from 'i18next';

const Sidebar = ({ visible, toggleSidebar }) => {
   const { addTab } = useTabs()
   const { t } = useTranslation();
   // const handleLang = () => {
   //    localStorage.getItem("language") && i18next.changeLanguage(localStorage.getItem("language"))
   // }
   return (
      < StyledSidebar visible={visible} onClick={() => toggleSidebar(false)}>
         <StyledHeading>{t('sections.SideBar.Listings')}</StyledHeading>
         <StyledList>
            <StyledListItem onClick={() => addTab('Users', '/users')}>
               {t('sections.SideBar.Users')}
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Devices', '/devices')}>
               {t('sections.SideBar.Devices')}
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Roles', '/roles')}>
               {t('sections.SideBar.Roles')}
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Apps', '/apps')}>
               {t('sections.SideBar.Apps')}
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Stations', '/stations')}>
               {t('sections.SideBar.Station')}
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Languages', '/languages')}>
               Languages
            </StyledListItem>
         </StyledList>
      </StyledSidebar >
   )
}

export default Sidebar
