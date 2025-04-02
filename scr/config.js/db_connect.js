const mongoose = require("mongoose")


const DBConnection = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,

    })
 }
 
 module.exports = DBConnection