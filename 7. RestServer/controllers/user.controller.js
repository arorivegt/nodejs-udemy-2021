const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const getUsers =  async (req = request, res = response) => {

    const { limit = 5, until = 0 } = req.query;
    const query = {status :true};

    console.time('promise-timer');
    const [ users, total ] = await Promise.all( [
        User.find( query )
            .limit( Number(limit) )
            .skip( Number(until) ),
        User.countDocuments( query )
    ] )
    console.timeEnd('promise-timer');

    //res.status(200).json({ add status to return
    res.json({
        users,
        total
    })
}

const postUsers = async (req, res = response) => {
    
    const { name, email, password, rol } = req.body;
    const user = new User({ name, email, password, rol });

    //encrypt password
    //by default I have 10 salt, if a set more the password i more secure but it takes a long time
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password , salt );


    //save data in mongo database
    await user.save();

    //res.status(200).json({ add status to return
    res.json({
        user
    })
}

const putUsers = async (req, res = response) => {
    
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if ( password ){
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync( password , salt );
    }

    //.find( { email: 'fernando@gmail.com }).exec( err, data => .... ==> find user by email
    const userDB = await  User.findByIdAndUpdate( id, rest )
    //res.status(200).json({ add status to return
    res.json({
        message: "API put => controller",
        userDB
    })
}

const deleteUsers = async (req, res = response) => {
    const { id } = req.params;

    //const user = await User.findByIdAndDelete( id ); => //this is not recommended because we need to delete the all reference in the database
    const user = await User.findByIdAndUpdate( id , { status : false } );
    res.json({
        user
    })
}

const patchUsers = (req, res = response) => {
    //res.status(200).json({ add status to return
    res.json({
        message: "API patch => controller",
    })
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
}