exports.internalError = (res) => {
    return res.status(500).send({
      status: 'error',
      message: 'Internal server error. Something went wrong.'
    })
  }

exports.send = (res, data) => {
    const statusCode = data.statusCode || (data.status ? 200 : 400)
    return res.status(statusCode).send({
        status: data && data.status ? 'success' : 'error',
        message: data.msg,
        data: data.data
    })
}