const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validateText = (elementName: string, value: string, minLength: number = 2) => {
    if (value.length == 0)
        return `${elementName} is requied`
    else if (value.length < minLength)
        return `Your ${elementName} must contain at least ${minLength} characters`
    else
        return ''
}


export const validateEmail = (elementName: string, value: string, regex: RegExp = regex_email ) => {
    if (value.length == 0)
        return `${elementName} is requied`
    else if (!regex.test(value))
        return `Your ${elementName} must be a valid e-mail address (eg. name@domain.com)`
    else
        return ''
}

