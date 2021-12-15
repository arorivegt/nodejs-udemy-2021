const { Router } = require('express');
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

        //usually to create something
        router.post('/', postUsers)

        ///usually to delete or change status to something
        router.delete('/', deleteUsers)

        ///usually to update someting
        router.patch('/', patchUsers)

module.exports = router;