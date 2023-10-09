require('dotenv').config();
const express = require('express')
const app = express();
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')
const cors = require('cors')

// ------------------------------------------------------------------------------------------------------------
// temp check 
app.set("view engine", "ejs")

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})) 

// cookies and file middleware
app.use(cookieParser());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

// morgan middleware
app.use(morgan('tiny'))


// ------------------------------------------------------------------------------------------------------------
app.use(cors());
// ----------------------------------
// import all the routes here
const home = require('./routes/home')
const user = require('./routes/user')
const product =require('./routes/product')

// router middleware
app.use('/api/v1', home)
app.use('/api/v1', user)
app.use('/api/v1', product)

// test route
app.get('/signuptest', (req, res) => {
    res.render('signuptest')
})

// exports app 
module.exports = app ;