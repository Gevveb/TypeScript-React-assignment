import React, { useEffect, useState } from 'react'
import { email, password } from '../utilities/UserValidation'
import AlertNotification from '../components/AlertNotification'
import { SignInType } from '../models/userModels'


const SignInSection: React.FC = () => {
  const signUpInForm_default: SignInType = { email: '', password: '' }
  const [signUpInForm, setSignUpInForm] = useState<SignInType>(signUpInForm_default)
  const [errors, setErrors] = useState<SignInType>(signUpInForm_default)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
  let webToken;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setSignUpInForm({ ...signUpInForm, [id]: value })

    if (id === 'email')
      setErrors({ ...errors, [id]: email(id, value) })

    if (id === 'password')
      setErrors({ ...errors, [id]: password(id, value) })
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)
    setIsLoggedIn(false)

    if (signUpInForm.email !== '' && signUpInForm.password !== '')
      if (errors.email === '' && errors.password === '') {

        const result = await fetch('http://localhost:5000/api/authentication/signin', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(signUpInForm)
        })

        if (result.status === 200) {
          setSubmitted(true)
          setSignUpInForm(signUpInForm_default) 
          setIsLoggedIn(true)

          setTimeout(() => {
            window.location.reload()
          }, 2000);
          

        } else {
          setSubmitted(false)
          setFailedSubmit(true)

        }

        webToken = await result.json()
        localStorage.setItem('accessToken', webToken.accessToken)
      }
  }

  useEffect(() => {
    if (localStorage.getItem('accessToken') !== null) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
  }, [])

  const handelSignOut = () => {
    localStorage.removeItem('accessToken')
    window.location.reload()

  }


  return (
    <section className="contact">
      <div className="container">

        {submitted ? (<AlertNotification alertType='success' title='You are logged in!' text='' />) : (<></>)}
        {failedSubmit ? (<AlertNotification alertType='danger' title='Something went wrong when you tried to logg in to your account!' text="please try again later" />) : (<></>)}

        <h2>LOGIN</h2>
        <form onSubmit={(e) => handleSignIn(e)} className="contact-form" noValidate>
          <div>
            <input id="email" className={(errors?.email ? 'error' : '')} value={signUpInForm.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your e-mail address" />
            <div className="errorMessage">{errors?.email}</div>
          </div>
          <div>
            <input id="password" className={(errors?.password ? 'error' : '')} value={signUpInForm.password} onChange={(e) => handleChange(e)} type="password" placeholder="Password" />
            <div className="errorMessage">{errors?.password}</div>
          </div>

          <button type="submit" className="btn __btn-theme mb-5">LOG IN</button>
        </form>
        <button type="submit" onClick={handelSignOut} className={(isLoggedIn ? 'btn __btn-theme' : 'hidden-btn')}>LOG OUT</button>
      </div>
    </section>
  )
}

export default SignInSection