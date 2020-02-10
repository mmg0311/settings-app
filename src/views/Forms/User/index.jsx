import React from 'react'

// State
import { Context } from '../../../store/tabs'

// Components
import { TextButton, Text } from '@dailykit/ui'

// Styled
import { StyledWrapper, StyledHeader, StyledForm, StyledRow } from '../styled'

const UserForm = () => {
   const { state, dispatch } = React.useContext(Context)
   const [form, setForm] = React.useState({
      firstname: '',
      lastname: '',
      email: '',
   })

   React.useEffect(() => {
      const { data } = state.forms.find(tab => tab.view === 'user')
      setForm({ ...data })
   }, [state.forms])

   React.useEffect(() => {
      dispatch({
         type: 'SET_FORM_DATA',
         payload: {
            data: form,
            view: 'user',
            type: 'forms',
            title: 'User Form',
         },
      })
   }, [dispatch, form])

   const handleChange = e => {
      const { name, value } = e.target
      setForm(form => ({
         ...form,
         [name]: value,
      }))
   }
   return (
      <StyledWrapper>
         <StyledHeader>
            <h1>New User</h1>
            <TextButton type="solid">Publish</TextButton>
         </StyledHeader>
         <StyledForm>
            <StyledRow>
               <Text
                  name="firstname"
                  label="First Name"
                  value={form.firstname || ''}
                  onChange={e => handleChange(e)}
               />
               <Text
                  name="lastname"
                  label="Last Name"
                  value={form.lastname || ''}
                  onChange={e => handleChange(e)}
               />
            </StyledRow>
            <StyledRow>
               <Text
                  name="email"
                  label="Email"
                  value={form.email || ''}
                  onChange={e => handleChange(e)}
               />
            </StyledRow>
         </StyledForm>
      </StyledWrapper>
   )
}

export default UserForm
