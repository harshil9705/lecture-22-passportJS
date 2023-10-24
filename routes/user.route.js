const {Router} = require('express')
const {  signup, signin, getsignin, getUser, home, logout } = require('../controllers/user.controller')
const passport = require('passport')
const { isothanticat } = require('../middleware/user.middleware')
const router = Router()

router.get('/getuser',isothanticat,getUser)
router.post('/signup',signup)
router.get('/login',getsignin)
router.get('/logout',logout)
router.post('/login',passport.authenticate('local'),signin)
router.get('/',home)
module.exports = {router}   