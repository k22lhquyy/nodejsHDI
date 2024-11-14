const connection = require("../config/database")


const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getQuyIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateNewUser = (req, res) => {
    console.log(req.body)
    res.send("create new user")

}

module.exports = {
    getHomePage,
    getQuyIT,
    postCreateNewUser
}