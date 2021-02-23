const mongoose = require('mongoose');


//Connecting our application to mongodb using mongoose ORM
module.exports = async () => {
    try {
        await mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.5jofo.mongodb.net/todoApplication?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log("Database Connected")
    } catch (error) {
        console.log(error.message)
    }
}