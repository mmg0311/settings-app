import React from 'react'

import { StyledTags, StyledTag } from './styled'

const Tags = ({ children, ...props }) => (
   <StyledTags {...props}>{children}</StyledTags>
)
const Tag = ({ children, ...props }) => (
   <StyledTag {...props}>{children}</StyledTag>
)

export { Tags, Tag }
