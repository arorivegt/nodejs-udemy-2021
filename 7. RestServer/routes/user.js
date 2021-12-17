const { Router } = require('express');
const { body  } = require('express-validator')
const { 
        getUsers, 
        putUsers, 
        postUsers, 
        deleteUsers, 
        patchUsers 
     } = require('../controllers/user.controller');
const { fieldValidator } = require('../middlewares/field-validator');
const Role = require('../models/role');

const router = Router();

        //usually to get something
        router.get('/', getUsers);

        //usually to update something
        router.put('/:id', putUsers)

        //usually to create something, Here we can define a middleware to validate something
        router.post('/', [
                body('name', 'The name is mandatory').not().isEmpty(),
                body('password', 'The password is mandatory and more thatn six letter').isLength( {min:6} ),
                body('email', 'The email is not valid').isEmail(),
                // before -> body('rol', 'Is not a valid rol').isIn(['ADMIN', 'USER']),
                body('rol').custom( async ( rol = '') => {
                        const existRol = await Role.findOne( { rol });
                        if ( !existRol ){
                                throw new Error(`rol => ${ rol } doesn't exist`)
                        }
                }),
                fieldValidator
        ], postUsers)

        ///usually to delete or change status to something
        router.delete('/', deleteUsers)

        ///usually to update someting
        router.patch('/', patchUsers)

module.exports = router;