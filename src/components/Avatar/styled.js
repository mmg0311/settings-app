import styled, { css } from 'styled-components'

export const StyledAvatarGroup = styled.div`
   display: flex;
`

export const StyledWrapper = styled.div(
   ({ withName }) => css`
      display: flex;
      align-items: center;
      ${withName &&
         css`
            > div {
               margin-right: 8px;
            }
         `}

      + div {
         margin-left: -8px;
      }
   `
)

export const StyledAvatar = styled.div`
   color: #fff;
   width: 36px;
   height: 36px;
   display: flex;
   border-radius: 24px;
   align-items: center;
   background: #e6c02a;
   border: 1px solid #fff;
   justify-content: center;
`
