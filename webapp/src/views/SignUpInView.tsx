import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import SignInSection from '../sections/SignInSection'
import SignUpSection from '../sections/SignUpSection'

const SignUpInView = () => {
    return (
        <div>
            <MainMenuSection />
            <div>
                <SignInSection />
                <SignUpSection />
            </div>

        </div>
    )
}

export default SignUpInView