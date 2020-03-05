import styled from 'styled-components'

export const StyledSelectedUsers = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   > div {
      margin: 0 8px 8px 0;
   }
`

export const StyledStationsList = styled.ul`
   margin: 12px 0;
   flex-wrap: wrap;
   display: inline-flex;
   li {
      height: 64px;
      display: flex;
      padding: 0 16px;
      list-style: none;
      margin-right: 16px;
      background: #f3f3f3;
      flex-direction: column;
      justify-content: center;
   }
`
