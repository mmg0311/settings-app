import React from 'react'

// Components
import { TextButton } from '@dailykit/ui'

// Styled
import { StyledWrapper, StyledHeader } from '../styled'

const RoleForm = () => {
   return (
      <StyledWrapper>
         <StyledHeader>
            <h1>Role Form</h1>
            <TextButton type="solid">Publish</TextButton>
         </StyledHeader>
      </StyledWrapper>
   )
}

export default RoleForm
