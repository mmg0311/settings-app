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

const Sidebar = ({ visible, toggleSidebar }) => {
   const { addTab } = useTabs()
   const { t } = useTranslation();

   //   function handleClick(lang) {
   //     i18next.changeLanguage(lang);
   //   }

   return (
      <StyledSidebar visible={visible} onClick={() => toggleSidebar(false)}>
         <StyledHeading>{t('SideBar.Listings')}</StyledHeading>
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
         </StyledList>
      </StyledSidebar>
   )
}

export default Sidebar
