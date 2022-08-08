import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TextField, Button } from '@mui/material'
import { useAuthActions } from '../../context/AuthContext'
import MainContainer from '../../containers/MainContainer'
import Title from '../../components/common/title'
import styles from './Signup.module.scss'
import Link from 'next/link'
import Router from 'next/router'

const SignUp = () => {
  const dispatch = useAuthActions()

  const SignInSchema = Yup.object().shape({
      name: Yup.string().required('پر کردن این فیلد الزامی است'),
      email: Yup.string().required('پر کردن این فیلد الزامی است'),
      phoneNumber: Yup.string().required('پر کردن این فیلد الزامی است'),
      password: Yup.string().required('پر کردن این فیلد الزامی است')
  })

  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    },
    validateOnMount: true,
    validationSchema: SignInSchema,
    onSubmit: values => {
      dispatch({type: "SIGNUP", payload: values})
    },
  });

  useEffect(() => {
    if(user?.user) Router.push('/')
  }, [user])

  return (
    <MainContainer>
    <div className={styles.signin_container}>
      <Title> ثبت نام </Title>
      <form onSubmit={formik.handleSubmit} >
        <TextField id="name" label="نام" variant="outlined" margin="normal" {...formik.getFieldProps('name')} />
        <TextField id="email" label="ایمیل" variant="outlined" margin="normal" {...formik.getFieldProps('email')} />
        <TextField id="phoneNumber" label="شماره تماس" variant="outlined" margin="normal" {...formik.getFieldProps('phoneNumber')} />
        <TextField id="password" label="رمز عبور" variant="outlined" margin="normal" {...formik.getFieldProps('password')} />
        <div className={styles.actions}>
          <Button variant="contained" type='submit'>ثبت نام</Button>
          <Link href='/sign-up'><a>ورود</a></Link>
        </div>
      </form>
    </div>
    </MainContainer>
  )
}

export default SignUp