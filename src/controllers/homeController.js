
const getHomePage = (req, res) => {
    res.send('Hello World!')
}

const getQuyIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getQuyIT
}