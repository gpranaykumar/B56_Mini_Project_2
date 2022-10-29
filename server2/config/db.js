require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {

    // mongoose.connect(process.env.MONGO_URL, {
    //     useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,
    //     useFindAndModify: true
    // });
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) console.log("Error: ",err);
        console.log("Connected to mongodb")
    })
    const connection = mongoose.connection;
    // connection.on("error", console.error.bind(console, "connection error: "));
    connection.once('open' , () => {
        console.log('Database connected.')
    })


}

module.exports = connectDB