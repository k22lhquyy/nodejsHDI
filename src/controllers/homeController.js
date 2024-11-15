const connection = require("../config/database")


const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getQuyIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateNewUser = (req, res) => {
    console.log(req.body)
    const { email, name, city } = req.body
    connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,
        [email, name, city],
        function(err, result){
            console.log(result)
            res.send("create new user success")
        }
    )
    // res.send("create new user")

}

module.exports = {
    getHomePage,
    getQuyIT,
    postCreateNewUser
}