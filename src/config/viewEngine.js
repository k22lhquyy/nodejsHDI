const path = require("path")
const express = require('express')

const configViewEngine = (app) => {
    // view engine
    app.set('views', path.join("./src", 'views'));
    app.set('view engine', 'ejs')

    // static files
    app.use(express.static(path.join("./src", 'public')))

    app.use(express.json()) // for json
    app.use(express.urlencoded({ extended: true })) // for form data
}

module.exports = configViewEngine;