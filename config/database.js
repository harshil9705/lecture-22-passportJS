const { default: mongoose } = require("mongoose");
require('dotenv').config()
const connection = ()=>{
    let url = process.env.db_url
    mongoose.connect(url)
    console.log('database connected');
}

module.exports = {connection}