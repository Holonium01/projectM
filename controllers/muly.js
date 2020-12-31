const responseHandler = require('../helpers/responseHandler')
exports.generateOtp = async (req, res) => {
    try {
        console.log('payload of getData', req.body)
        const app = req.baseUrl.substring(1)
        const {toGenerateOtp} = require(`../services/apps/${app}`)
        console.log('payload of getData2', toGenerateOtp, app)
        const data = await toGenerateOtp(req.body.email)
        const response = {
            status: data.status,
            msg: data && data.type ? `Check your email for your OTP to ${data.type}` : 'Error occured please try again',
            data: {}
        }
        responseHandler.send(res, response)
    } catch (error) {
        responseHandler.internalError(res)
    }

}
exports.register = async (req, res) => {
    try {
        const app = req.baseUrl.substring(1)
        console.log('payload of getData', !!req.originalUrl, !!req.baseUrl)
        const { login } = require(`../services/apps/${app}`)
        console.log('payload of getData', req.originalUrl, req.baseUrl, login)
        const data = await login(req.body)
        const response = {
            status: data.status,
            msg: data && data.type && data.status ? `${data.type} succesful` : 'Error occured during please try again',
            data: {}
        }
        responseHandler.send(res, response)
    } catch (error) {
        responseHandler.internalError(res)
    }
}
exports.updateProfile = async (req, res) => {
    try {
        console.log('payload of getData', req.body)
        const app = req.baseUrl.substring(1)
        const { updateProfile } = require(`../services/apps/${app}`)
        const data = await updateProfile(req.body)
        const response = {
            status: data.status,
            msg: data ? 'profile succesfully updated': 'Error updating profile',
            msg: data && data.type && data.status ? 'profile succesfully updated' : `Error occured during ${data.type} please retry`,
            data: {}
        }
        !data.status && (response.data.otp = data.otp)
        responseHandler.send(res, response)
    } catch (error) {
        responseHandler.internalError(res)
    }
}

//dowloaded the app and registered
//downloaded charles proxy to intercept requests going through the app
//documented each request with their headers and payload
//replicated the request with axios

//implement validation for the update profil
