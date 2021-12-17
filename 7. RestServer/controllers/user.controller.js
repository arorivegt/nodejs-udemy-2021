const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const getUsers =  (req = request, res = response) => {

    const { q, name, apiKey = "Key Not Found" } = req.query;
    //res.status(200).json({ add status to return
    res.json({
        message: "API get => controller",
        q,
        name,
        apiKey
    })
}

const postUsers = async (req, res = response) => {
    
    const { name, email, password, rol } = req.body;
    const user = new User({ name, email, password, rol });

    //encrypt password
    //by default I have 10 salt, if a set more the password i more secure but it takes a long time
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password , salt );

    // verificar si el cooreo existe
    const existEmail = await User.findOne({ email });

    if( existEmail ){
        return res.status(400).json({
            message: 'The email is in use'
        })
    }

    //save data in mongo database
    await user.save();

    //res.status(200).json({ add status to return
    res.json({
        user
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