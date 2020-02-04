import React from 'react'

// Styled
import { StyledAvatarGroup, StyledAvatar } from './styled'

const AvatarGroup = ({ children, ...props }) => (
   <StyledAvatarGroup {...props}>{children}</StyledAvatarGroup>
)
const Avatar = ({ title, url, ...props }) => {
   const getInitials = title => {
      const length = title.split(' ').length
      const first = title.split(' ')[0][0]
      const last = length > 1 ? title.split(' ')[length - 1][0] : ''
      return `${first}${last}`
   }
   return (
      <StyledAvatar title={title} {...props}>
         {url ? <img src={url} alt={title} /> : `${getInitials(title)}`}
      </StyledAvatar>
   )
}

export { AvatarGroup, Avatar }
