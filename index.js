const app = require('express')()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


const productRoute = require('./routes/muly')
app.use('/muly', productRoute)


const PORT = process.env.PORT || 4000
app.listen(PORT, console.log('Server started'))