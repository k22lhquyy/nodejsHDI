const {getHomePage, getQuyIT} = require("../controllers/homeController")
const express = require("express")
const router = express.Router();

router.get('/', getHomePage)

router.get('/quyit', getQuyIT)

module.exports = router;
