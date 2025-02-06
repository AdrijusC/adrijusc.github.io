const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const signToken = (id) => {
    return jwt.sign({id:id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
} 

exports.signup = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
        })

        const token = jwt.sign(
            {id: newUser._id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN},
        )

        res.status(201).json({
            status: 'success',
            data: newUser,
            token
        })
    } catch(err){
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

exports.login = async (req, res) => {
    try{
    const {email, password} = req.body;
    //check email and password
    if(!email || !password){
            throw new Error('Please provide email and password')
        }
        //check if user exists and password is correct
        const user = await User.findOne({email}).select('+password');
        if(!user || !(await user.correctPassword(password, user.password))){
            throw new Error('Incorrect email or password')
        }

        const token = signToken(user._id);

        //if everything is ok, send data to client

        res.status(201).json({
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        })
    }catch(err){
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}
    

exports.protect = async (req, res, next) => {
    //1.get token
    let token;
    try{
        if(req.headers.authorization && 
           req.headers.authorization.startsWith('Bearer')
        ){
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token){
            throw new Error('User not authenticated')
        }

        //2. Token verification

        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

        //3. Check if user in DB
        const currentUser = await User.findById(decoded.id);

        if(!currentUser){
            throw new Error('User not found')
        }

        //4. Check if user changed password after token was issued

        if(currentUser.changedPasswordAfter(decoded.iat)){
            throw new Error('User recently changed password! Please log in again')
        }

        //5. Grant access

        req.user = currentUser;
        next()
    }catch(err){
        res.status(400).json({
            status: 'Failed',
            error: err.message
        })
    }

}