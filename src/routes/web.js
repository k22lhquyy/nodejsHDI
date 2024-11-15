const {getHomePage, getQuyIT, postCreateNewUser, getCreate, getUpdatePage} = require("../controllers/homeController")
const express = require("express")
const router = express.Router();

router.get('/', getHomePage)

router.get('/quyit', getQuyIT)

router.get('/create', getCreate)

router.get('/update', getUpdatePage)

router.post('/create-user', postCreateNewUser)

module.exports = router;
