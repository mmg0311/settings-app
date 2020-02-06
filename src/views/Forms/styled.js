import styled from 'styled-components'

export const StyledWrapper = styled.div`
   margin: 0 auto;
   max-width: 1280px;
   h1 {
      color: #555b6e;
      font-size: 20px;
      font-weight: 500;
      line-height: 23px;
   }
   table {
      width: 980px;
      margin: 0 auto;
   }
`

export const StyledHeader = styled.div`
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid #d8d8d8;
`

export const StyledForm = styled.div`
   padding: 40px 0;
`

export const StyledRow = styled.div`
   display: flex;
   > div {
      width: 280px;
      margin-right: 24px;
      margin-bottom: 24px;
      input {
         font-weight: 400 !important;
      }
   }
`
