import React, { useState } from 'react'
import { firstName, lastName, email, password } from '../utilities/UserValidation'
import AlertNotificationType from '../components/AlertNotification'
import { SignUpType } from '../models/userModels'


const SignUpSection: React.FC = () => {
    const signUpForm_default: SignUpType = { firstName: '', lastName: '', email: '', password: '' }
    const [signInForm, setSignInForm] = useState<SignUpType>(signUpForm_default)
    const [errors, setErrors] = useState<SignUpType>(signUpForm_default)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

    const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setSignInForm({ ...signInForm, [id]: value })

        if (id === 'firstName')
            setErrors({ ...errors, [id]: firstName(id, value) })

        if (id === 'lastName')
            setErrors({ ...errors, [id]: lastName(id, value) })

        if (id === 'email')
            setErrors({ ...errors, [id]: email(id, value) })

        if (id === 'password')
            setErrors({ ...errors, [id]: password(id, value) })
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(false)
        setFailedSubmit(false)

        if (signInForm.firstName !== '' && signInForm.lastName !== '' && signInForm.email !== '' && signInForm.password !== '')
            if (errors.firstName === '' && errors.lastName === '' && errors.email === '' && errors.password === '') {

                const result = await fetch('http://localhost:5000/api/authentication/signup', {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(signInForm)
                })

                if (result.status === 201) {
                    setSubmitted(true)
                    setSignInForm(signUpForm_default)
                } else {
                    setSubmitted(false)
                    setFailedSubmit(true)
                    console.log(result.status)
                }

                const token = await result.json()
                console.log(token)
            }
        else if (signInForm.firstName === '' && signInForm.lastName === '' && signInForm.email === '' && signInForm.password === ''){
            setSubmitted(false)
        }
    }


    return (
        <section className="contact">
            <div className="container">

                {submitted? (<AlertNotificationType alertType='success' title='Your account has been registered!' text='Now you can logg in.' />) : (<></>)}
                {failedSubmit ? (<AlertNotificationType alertType='danger' title='Something went wrong when you tried to create an account!' text="please try again later" />) : (<></>)}

                <h2>SIGN UP (EMPLOYEES ONLY)</h2>
                <form onSubmit={(e) => handleSignUp(e)} className="contact-form" noValidate>
                    <div>
                        <input id="firstName" className={(errors?.firstName ? 'error' : '')} value={signInForm.firstName} onChange={(e) => handleSignUpChange(e)} type="text" placeholder="Your first name" />
                        <div className="errorMessage">{errors?.firstName}</div>
                    </div>
                    <div>
                        <input id="lastName" className={(errors?.lastName ? 'error' : '')} value={signInForm.lastName} onChange={(e) => handleSignUpChange(e)} type="text" placeholder="Your last name" />
                        <div className="errorMessage">{errors?.lastName}</div>
                    </div>
                    <div>
                        <input id="email" className={(errors?.email ? 'error' : '')} value={signInForm.email} onChange={(e) => handleSignUpChange(e)} type="email" placeholder="Your e-mail address" />
                        <div className="errorMessage">{errors?.email}</div>
                    </div>
                    <div>
                        <input id="password" className={(errors?.password ? 'error' : '')} value={signInForm.password} onChange={(e) => handleSignUpChange(e)} type="password" placeholder="Password" />
                        <div className="errorMessage">{errors?.password}</div>
                    </div>

                     <button type="submit" className="btn __btn-theme">SIGN UP</button>
                    
                </form>
            </div>
        </section>
    )
}

export default SignUpSection