const express = require('express')
const router = express.Router()
const productController = require('../controllers/muly')
const validate = require('../helpers/validations/index')
const mulySchema = require('../helpers/validations/muly')

router.post('/otp/generate', validate(mulySchema.generate), productController.generateOtp)
router.post('login', validate(mulySchema.submit), productController.register)
router.post('/profile/update', validate(mulySchema.profile), productController.updateProfile)

module.exports = router