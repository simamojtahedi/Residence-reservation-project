import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TextField, Button } from '@mui/material'
import { useAuth, useAuthActions } from '../../context/AuthContext'
import MainContainer from '../../containers/MainContainer'
import Title from '../../components/common/title'
import styles from './Signin.module.scss'
import Link from 'next/link'
import Router from 'next/router'

const SignIn = () => {
  const dispatch = useAuthActions()
  const user = useAuth()

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
      dispatch({type: "SIGNIN", payload: values})
    },
  });

  useEffect(() => {
    if(user?.user) Router.push('/')
  }, [user])

  return (
    <MainContainer>
    <div className={styles.signin_container}>
      <Title> ورود </Title>
      <form onSubmit={formik.handleSubmit} >
        <TextField id="email" label="ایمیل" variant="outlined" margin="normal" {...formik.getFieldProps('email')} />
        <TextField id="password" label="رمز عبور" variant="outlined" margin="normal" {...formik.getFieldProps('password')} />
        <div className={styles.actions}>
          <Button variant="contained" type='submit'>ورود</Button>
          <Link href='/sign-up'><a>ثبت نام</a></Link>
        </div>
      </form>
    </div>
    </MainContainer>
  )
}

export default SignIn