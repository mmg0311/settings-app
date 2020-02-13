import React from 'react'

// Components
import { TextButton } from '@dailykit/ui'

// Styled
import { StyledWrapper, StyledHeader } from '../styled'

const DeviceForm = () => {
   return (
      <StyledWrapper>
         <StyledHeader>
            <h1>Device Form</h1>
            <TextButton type="solid">Configure</TextButton>
         </StyledHeader>
      </StyledWrapper>
   )
}

export default DeviceForm
