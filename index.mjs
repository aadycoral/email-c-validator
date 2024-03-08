import Validate from 'latest-c-validator-js'

const schema = {
    email: 'required|email'
}

let validateMail = function (email) {
    const [value, errors] = Validate(schema, { email: email })
    return {
        value,
        errors
    }
}

module.exports = {
    validateMail
}