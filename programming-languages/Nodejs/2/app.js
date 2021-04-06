const express = require('express')
const app = express()
const port = 6985
const logger = require('morgan')

const about = require('./routes/about')

// handling errors
app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.use(logger('dev'))

app.use('/test',express.static('test'))

app.get('/',(req,res) => {
    res.send("Hello World")
})

app.listen(port,() => {
    console.log('Server running at http://localhost:6985')
})

app.use('/about',about)