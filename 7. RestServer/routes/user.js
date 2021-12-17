const { Router } = require('express');
const { body  } = require('express-validator')
const { 
        getUsers, 
        putUsers, 
        postUsers, 
        deleteUsers, 
        patchUsers 
     } = require('../controllers/user.controller');

const router = Router();

        //usually to get something
        router.get('/', getUsers);

        //usually to update something
        router.put('/:id', putUsers)

        //usually to create something, Here we can define a middleware to validate something
        router.post('/', [
                body ('name', 'The name is mandatory').not().isEmpty(),
                body ('password', 'The password is mandatory').not().isEmpty(),
                body ('email', 'The email is not valid').isEmail()
        ], postUsers)

        ///usually to delete or change status to something
        router.delete('/', deleteUsers)

        ///usually to update someting
        router.patch('/', patchUsers)

module.exports = router;