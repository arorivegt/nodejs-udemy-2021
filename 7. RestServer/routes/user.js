const { Router } = require('express');
const { body, check  } = require('express-validator');
const { 
        getUsers, 
        putUsers, 
        postUsers, 
        deleteUsers, 
        patchUsers 
     } = require('../controllers/user.controller');
const { isValidRol, existEmail, existUserByID } = require('../helpers/db-validators');
const { fieldValidator } = require('../middlewares/field-validator');

const router = Router();

        //usually to get something
        router.get('/', getUsers);

        //usually to update something
        router.put('/:id',[
                check('id','is not a valid id').isMongoId(),
                check('id').custom(  existUserByID ),  
                body('rol').custom(  isValidRol ), 
                fieldValidator
        ], putUsers)

        //usually to create something, Here we can define a middleware to validate something
        router.post('/', [
                body('name', 'The name is mandatory').not().isEmpty(),
                body('password', 'The password is mandatory and more thatn six letter').isLength( {min:6} ),
                body('email', 'The email is not valid').isEmail(),
                body('email').custom(  existEmail ), 
                body('rol').custom(  isValidRol ), // intead of do that (rol) => isValidRol(rol) whe can do this isValidRol because we have only one argument
                fieldValidator
        ], postUsers)

        ///usually to delete or change status to something
        router.delete('/:id',[
                check('id','is not a valid id').isMongoId(),
                fieldValidator
        ], deleteUsers)

        ///usually to update someting
        router.patch('/', patchUsers)

module.exports = router;