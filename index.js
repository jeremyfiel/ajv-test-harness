const Ajv = require('ajv')
const betterAjvErrors = require('better-ajv-errors').default

let _ajvOptions = {
    strict: false,
    messages: true,
    AllErrors: true
}

const data = {
    // data to validate
}

const schema = {
    // schema to validate against
}


try {
    let ajv = new Ajv(_ajvOptions)
    // defaults to draft-07, use $schema inside the schema to define a different draft
    let validate = ajv.compile(schema)

    valid = validate(data)

    console.log({
        valid: valid,
        error: betterAjvErrors(schema, data, validate.errors, { format: "js", indent: 4 })
    })

}
catch (err) {
    console.error({
        error: err.message

    })
}