const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
export const firstName = (elementName: string, value:string, minLength: number = 2) => {
    if (value.length === 0)
        return `You need to insert a first name in order to create an account.`
    else if (value.length < minLength)
        return `Your ${elementName} must contain at least ${minLength} characters`
    else 
        return ''
}

export const lastName = (elementName: string, value: string, minLength: number = 2) => {
    if (value.length === 0)
        return `You need to insert a last name in order to create an account.`
    else if (value.length < minLength)
        return `Your ${elementName} must contain at least ${minLength} characters`
    else 
        return ''
}

export const email = (elementName: string, value: string, regex: RegExp = regex_email ) => {
    if (value.length === 0)
        return `You need to insert an email address in order to create an account.`
    else if (!regex.test(value))
        return `Your ${elementName} must be a valid e-mail address (eg. name@domain.com)`
    else 
        return ''
}

export const password = (elementName: string, value: string, regex: RegExp = regex_password ) => {
    if (value.length === 0)
        return `You need to insert a password in order to create an account.`
    else if (!regex.test(value))
        return `Your ${elementName} must contain at least 8 characters and max 16, contain both upper and lowercase letters, atleast one number and a special character`
    else 
        return ''
}


