const Joi = require('joi')
const responseHandler = require('../responseHandler')
const validate = (schema, property = 'body') => {

  return (req, res, next) => {
    const {error} = schema.validate(req[property]);
    if (!error) {
      next()
    } else {
      const {details} = error
      console.log('error', error)
      const message = details.map(i => i.message && i.message.replace(/['"]/g, '').replace(/mongo/g, '')).join(' and ')
      return responseHandler.send(res, {statusCode: 422, success: false, msg: message, data: {}})
    }
  }
}
module.exports = validate;
