const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3000
app.use(express.static('public'))
const connectDB = require('./config/db')
connectDB()

const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
    //['htttp://localhost:3000','http://localhost:4000']
}
app.use(cors(corsOptions))

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use('/api/files', require('./routes/files'))
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})