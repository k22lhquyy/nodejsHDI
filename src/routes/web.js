const {getHomePage, getQuyIT, postCreateNewUser} = require("../controllers/homeController")
const express = require("express")
const router = express.Router();

router.get('/', getHomePage)

router.get('/quyit', getQuyIT)

router.post('/create-user', postCreateNewUser)

module.exports = router;
