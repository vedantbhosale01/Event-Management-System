const User = require('../models/user')
const BigPromise = require('../middlewares/bigPromise')
const CustomError = require('../utils/customErrors')
const cookieToken = require('../utils/cookieToken')
const fileUploader = require('express-fileupload')
const cloudinary = require('cloudinary')

exports.signup = BigPromise(async (req, res, next) => {

    let result;
    if (req.files) {
        let file = req.files.photo
        result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: "users",
            width: 150,
            crop: "scale"
        })
    }

    const { name, email, password } = req.body

    if (!email || !name || !password) {
        return next(new CustomError('all fields are necessary', 400))
    }

    const user = await User.create({
        name,
        email,
        password,
        // photo:{
        //     id: result.public_id,
        //     secure_url: result.secure_url,
        // }
    })

    cookieToken(user, res);

})

exports.login = BigPromise(async (req, res, next) => {
    const { email, password } = req.body

    // check for pressence of email and password 
    if (!email || !password) {
        return next(new CustomError('please provide email and password', 400))
    }

    // get user form db
    const user = await User.findOne({ email }).select("+password")

    // if user not found in db
    if (!user) {
        return next(new CustomError('you are not registered', 400))
    }

    // match the password
    const isPasswordCorrect = await user.isValidatedPassword(password)

    // if password does not match
    if (!isPasswordCorrect) {
        return next(new CustomError('email and password does not match', 400))
    }

    // we all goes good we are sending the token
    cookieToken(user, res);

})

exports.logout = BigPromise(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "user has been successfully logout"
    })
})

exports.getloggedInUserDetails = BigPromise(async (req, res, next) => {

    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        user,
    })
})

exports.adminAllUser = BigPromise(async (req, res, next) => {

    const users = await User.find({})

    res.status(200).json({
        success: true,
        users,
    })
})