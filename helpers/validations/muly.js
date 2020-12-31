const Joi = require('joi');

const schemas = {
    generate: Joi.object().keys({
        email: Joi.string().email().required()
    }),
    submit: Joi.object().keys({
        otp: Joi.string().max(6).required(),
        email: Joi.string().email().required(),
        name: Joi.string()
    }),
    profile: Joi.object().keys({
        bio: Joi.string(),
        name: Joi.string(),
        phone: Joi.string(),
        email: Joi.string().email(),
        username: Joi.string()
    })
   };

module.exports = schemas;