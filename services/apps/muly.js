const config = require('../../helpers/config')
const axios = require('axios')

const makeRequest = (url, method, payload, token) => {
    return new Promise((resolve) => {
        const headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'V/3 CFNetwork/1197 Darwin/20.0.0',
            'Accept': '*/*',
            'Accept-Language': 'en-us',
            'Cache-Control': 'no-cache'
        }
        token && (headers.server_token = token)
        const auth_options = {
            method,
            headers,
            data: payload,
            url
        };

        axios(auth_options).then((auth_responses) => {
            resolve(auth_responses)   
        }).catch((error) => {
                resolve(error)
        })

    })
}
exports.toGenerateOtp = async (payload) => {
    const authData = {
        'email': payload
    }
    const otpUrl = `${config.mulyNormal.URL}/login/email/otp`
    const otpResp = await makeRequest(otpUrl, 'POST', authData, payload)
    console.log('otpResp', otpResp)
    const result = {}
    if(otpResp.status === 200) result.type = otpResp.data.exists === true ? 'log in' : 'sign up'
    result.status = otpResp && otpResp.status === 200
    return result
}
exports.login = async (payload) => {
    const regData = {
        'otp': payload.otp,
        'email': payload.email,
    }
    payload && payload.name ? regData.name : payload.name
    const regUrl = `${config.mulyNormal.URL}/login/email`
    const regResp = await makeRequest(regUrl, 'POST', regData)
    const result = {}
    if(regResp.status === 200) result.type = regResp.data.existing === true ? 'login' : 'signup'
    result.status = regResp.data.token && regResp && regResp.status === 200 
    return result
}
exports.updateProfile = async (payload) => {
    const regData = payload.login
    payload && payload.name ? regData.name : payload.name
    const loginResponse = await makeRequest(regUrl, 'POST', regData)
    const token = loginResponse.data.token
    const response = {}
    if(token) {
        const profileData = payload.profile
        const profileUrl = `${config.mulyNormal.URL}/profile`
        const updatedProfile = await makeRequest(profileUrl, 'POST', profileData, token)
        response.status = updatedProfile && updatedProfile.status === 200
        response.type = 'profile update'
    } else {
        response.otp = payload.otp
        response.status = false
        response.type = 'sign up'
    }
    return response
}
//remove console log
//document profile change
//change server config


