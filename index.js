const express =require('express')
const passport = require('passport')
const cookie = require('cookie-parser')
const session = require('express-session')
const { connection } = require('./config/database')
const { router } = require('./routes/user.route')
const { localAuth } = require('./helper/local')

const app = express()

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.static(__dirname+'/public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())

app.use(session({secret:'privete-key'}))
app.use(passport.initialize())
app.use(passport.session())
localAuth(passport)

app.use('/user',router)


app.listen(8090,()=>{
    console.log('port running on 8090');
    connection()
})