import { TextField, Button } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const login = () => {
    const SignInSchema = Yup.object().shape({
        email: Yup.string().required('پر کردن این فیلد الزامی است'),
        password: Yup.string().required('پر کردن این فیلد الزامی است')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: values => {
          axios.post('http://localhost:5000/api/user/signin', {data: values}, {headers: {
            withCredential: true
          }})
          // .then(res => console.log(res))
          // .catch(err => console.log(err))
        },
    });

  return (
    <div>ورود


  <Box component="form" autoComplete="off" onSubmit={formik.handleSubmit} >
    <TextField id="email" label="ایمیل" variant="outlined" margin="normal" {...formik.getFieldProps('email')} />
    <TextField id="password" label="رمز عبور" variant="outlined" margin="normal" {...formik.getFieldProps('password')} />
    <Button variant="contained" type='submit'>Contained</Button>
  </Box>

    </div>
  )
}

export default login