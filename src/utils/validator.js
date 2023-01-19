const { check } = require('express-validator')
const { validateResult } = require('./validateHelper')
const axios = require('axios')

const validateCreate = [
    check('name')
    .exists()
    .not()
    .isEmpty(),
    check('status')
    .exists(),
    check('gender')
    .exists()
    .custom((value, { req } )=> {
        if(value != "female" || value != "male" || value != "non binary"){
            throw new Error('Elija otro genero')
        }
            return true
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = { validateCreate };
