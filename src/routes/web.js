const {getHomePage, getQuyIT, postCreateNewUser, getCreate} = require("../controllers/homeController")
const express = require("express")
const router = express.Router();

router.get('/', getHomePage)

router.get('/quyit', getQuyIT)

router.get('/create', getCreate)

router.post('/create-user', postCreateNewUser)

module.exports = router;
