import styled from 'styled-components'

export const StyledAvatarGroup = styled.div`
   display: flex;
`
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
   + div {
      margin-left: -8px;
   }
`
