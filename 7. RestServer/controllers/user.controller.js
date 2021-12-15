const { response, request } = require('express');

const getUsers = (req = request, res = response) => {

    const { q, name, apiKey = "Key Not Found" } = req.query;
    //res.status(200).json({ add status to return
    res.json({
        message: "API get => controller",
        q,
        name,
        apiKey
    })
}

const postUsers = (req, res = response) => {

    const { name, City } = req.body;
    

    //res.status(200).json({ add status to return
    res.json({
        message: "API post => controller",
        name,
        City
    })
}

const putUsers = (req, res = response) => {

    const id = req.params.id;
    //res.status(200).json({ add status to return
    res.json({
        message: "API put => controller",
        id
    })
}

const deleteUsers = (req, res = response) => {
    //res.status(200).json({ add status to return
    res.json({
        message: "API delete => controller"
    })
}

const patchUsers = (req, res = response) => {
    //res.status(200).json({ add status to return
    res.json({
        message: "API patch => controller"
    })
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
}