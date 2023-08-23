const fs = require("fs");
const path = require("path");

// Json(array)

const productFilePath = path.join(__dirname, "../data/productsDataBase.json");

const controller = {
    index: (req, res) => {


        res.render("index")
    },
    login: (req, res) => {

        res.render("login")
    },
    register: (req, res) => {

        res.render("register")
    },
    productCart: (req, res) => {

        res.render("productCart")
    },
    productDetail: (req, res) => {

        res.render("productDetail")
    }
}

module.exports = controller;