import React, { useState } from 'react'
import AlertNotification from '../components/AlertNotification'
import { validateEmail, validateText } from '../utilities/validation'


interface FormDataType {
    name: string
    email: string
    comments: string
}

const ContactFormSection: React.FC = () => {
    const default_values: FormDataType = { name: '', email: '', comments: '' }

    const [formData, setFormData] = useState<FormDataType>(default_values)
    const [errors, setErrors] = useState<FormDataType>(default_values)
    const [submitted, setSubmitted] = useState<Boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<Boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })

        if (id === 'name')
            setErrors({ ...errors, [id]: validateText(id, value) })
        if (id === 'email')
            setErrors({ ...errors, [id]: validateEmail(id, value) })


    }
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
        if (id === 'comments')
            setErrors({ ...errors, [id]: validateText(id, value, 5) })

    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFailedSubmit(false)
        setSubmitted(false)

        if (formData.name !== '' && formData.email !== '' && formData.comments !== '') {
            if (errors.name === '' && errors.email === '' && errors.comments === '') {

                const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                if (res.status === 200) {
                    setSubmitted(true)
                    setFormData(default_values)
                } else {
                    setSubmitted(false)
                    setFailedSubmit(true)
                }
            } 
        } 
        if(formData.name === '' && formData.email === '' && formData.comments === '') {
            setSubmitted(false)
        }
    }

    return (
        <section className="contact">
            <div className="container">

                {submitted ? (<AlertNotification alertType="success" title="Thank you for your comments" text="We will contact you as soon as possible." />) : (<></>)}
                {failedSubmit ? (<AlertNotification alertType="danger" title="Something went wrong!" text="We couldn't submit your comments right now." />) : (<></>)}

                <h2>Come in Contact with Us</h2>
                <form onSubmit={(e) => handleSubmit(e)} className="contact-form" noValidate>
                    <div>
                        <input id="name" className={(errors.name ? 'error' : '')} type="text" placeholder="Your Name" value={formData.name} onChange={(e) => handleChange(e)} />
                        <div id="nameErrorMessage" className="errorMessage">{errors.name} </div>
                    </div>
                    <div>
                        <input id="email" className={(errors.email ? 'error' : '')} type="email" placeholder="Your Mail" value={formData.email} onChange={(e) => handleChange(e)} />
                        <div id="emailErrorMessage" className="errorMessage">{errors.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comments" className={(errors.comments ? 'error' : '')} placeholder="Comments" value={formData.comments} onChange={(e) => handleTextAreaChange(e)} ></textarea>
                        <div id="commentErrorMessage" className="errorMessage">{errors.comments}</div>
                    </div>
                    <button type="submit">Post Comments</button>
                </form>
            </div>

        </section>
    )
}

export default ContactFormSection
