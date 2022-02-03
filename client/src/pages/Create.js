import { Container, Typography, Button, TextField, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormInfo } from '../components/FormInfo'
import { createProduct } from '../services/api'
import { useNavigate } from "react-router-dom"
import { Backdrop } from '../components/Backdrop'
import { ActionButton } from '../components/ActionButton'

export const Create = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmited, setIsSubmited] = useState(false)

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmited) {
      createProduct(formData).then((res) => {
        if (res.status === 201) navigate('/create/success');
      })
    }
    setIsSubmited(false)
  }, [formErrors])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validateForm(formData))
    setIsSubmited(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value.replace(/\s+/g, ' ').trim() }))
  }

  const validateForm = (data) => {
    const errors = {}
    const requiredErrorText = 'Пожалуйста, заполните это поле.'
    if (!data.name) {
      errors.name = requiredErrorText
    }
    if (!data.description) {
      errors.description = requiredErrorText
    }
    return errors
  }

  return (
    <Container maxWidth="md">
      {isSubmited && <Backdrop />}
      <Box py={5}>
        <Typography className="header"
          variant="h6"
          color="textSecondary"
          align="center"
          component="h1"
        >
          Новый товар
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField sx={{ mt: 5 }}
            label="Название"
            variant="standard"
            multiline
            fullWidth
            name="name"
            onChange={handleChange}
            error={!(formErrors.name === undefined)}
            helperText={formErrors.name ? formErrors.name : ' '}
            required />
          <Typography
            variant="body1"
            mt={5}
          >
            Описание
          </Typography>
          <TextField sx={{ mt: 2 }}
            multiline
            rows={4}
            name="description"
            onChange={handleChange}
            error={!(formErrors.description === undefined)}
            helperText={formErrors.description ? formErrors.description : 'Добавьте детальное описание товара'}
            required
            fullWidth />

          <FormInfo setFormData={setFormData} />
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 5
          }} >
            <ActionButton label='Создать' type="submit" />
          </Box>

        </form>
      </Box >
    </Container >
  )
}