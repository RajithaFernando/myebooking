const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const nameRegex = /^[a-zA-Z]+$/;

export const validateEmail = (email) => {
    console.log(emailRegex.test(email))
    if (!emailRegex.test(email)) {
        return 'Invalid Email'
    }
    else {
        return ''
    }
}

export const validateName = (name) => {
    console.log(nameRegex.test(name))
    if (!nameRegex.test(name)) {
        return 'Invalid First Name'
    }
    else {
        return ''
    }
}
