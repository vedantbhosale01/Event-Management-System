const express = require('express')
const { home, dummy } = require('../controllers/homeController')
const router = express.Router();

router.route("/").get(home)
router.route("/dummy").get(dummy)


module.exports = router