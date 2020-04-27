import React from 'react'
import { useHistory } from 'react-router-dom'

// Components
import {
   ButtonGroup,
   Text,
   TextButton,
} from '@dailykit/ui'

// State
import { useTabs } from '../../../store/tabs'

// Styled
import { StyledWrapper, StyledHeader } from '../styled'

const Languages = () => {
   const history = useHistory()
   const { tabs } = useTabs()
   React.useEffect(() => {
      const tab = tabs.find(item => item.path === `/languages`) || {}
      if (!Object.prototype.hasOwnProperty.call(tab, 'path')) {
         history.push('/')
      }
   }, [history, tabs])
   const data = ["en", "fr", "Greek"];
   function handleClick(lang) {
      localStorage.setItem("language", lang);
   }
   return (
      <StyledWrapper>
         <StyledHeader>
            <Text as="h2">Languages</Text>
         </StyledHeader>
         <ButtonGroup align="left">
            {data.map(lang => (
               <TextButton type="ghost" onClick={() => handleClick(lang)}>{lang}</TextButton>
            ))}
         </ButtonGroup>
      </StyledWrapper>
   )
}

export default Languages
