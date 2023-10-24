const { user } = require("../models/user.schema")

const signup = async(req,res)=>{
    try {
        const data = await user.findOne({email : req.body.email})
    if(data){
        res.send('account already exist')
    }
    else{
        const data = await user.create(req.body)
        res.send(data)
    }
    } catch (error) {
        res.send(error.message)
    }
} 

const signin = async(req,res)=>{
    // try {
    //     let data = await user.findOne({email : req.body.email})
    //     if(!data){
    //        return res.send('account not exist')
    //     }
    //     if(data.password != req.body.password){
    //         return res.send('wrong pasword')
    //     }
    //         return res.send('logged in sucessfully')
        
    // } catch (error) {
    //     res.send(error.message)
    // }
    res.redirect('/user/')
}

const getsignin = (req,res)=>{
    res.render('login')
}

const getUser =async(req,res)=>{
    const data = await user.find()
    res.send(data)
}

const home = (req,res)=>{
    res.render('home')
}

const logout = (req,res)=>{
    req.logout((err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send('logged out')
}

module.exports = {signup,signin,getsignin,getUser,home,logout}