const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDservice");


const getHomePage = async (req, res) => {
    const results = await getAllUser()
    return res.render('home.ejs', {
        listUsers : results
    })
}

const getQuyIT = (req, res) => {
    res.render('sample.ejs')
}

const getCreate = (req, res) => {
    res.render('create.ejs')
}

const postCreateNewUser = async (req, res) => {
    console.log(req.body)
    const { email, name, city } = req.body
    const [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,[email, name, city]
    )
    res.send("create new user")

}

const getUpdatePage = (req, res) => {
    res.render('edit.ejs')
}

module.exports = {
    getHomePage,
    getQuyIT,
    postCreateNewUser,
    getCreate,
    getUpdatePage
}