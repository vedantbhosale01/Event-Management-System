const express = require('express')
const router = express.Router()


const {signup, login, logout, getloggedInUserDetails, adminAllUser } = require('../controllers/userController')

const {isLoggedIn, customRole } = require("../middlewares/user")

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/userdashboard').get(isLoggedIn, getloggedInUserDetails)

router.route('/admin/users').get(isLoggedIn,customRole('manager'), adminAllUser)

module.exports = router;