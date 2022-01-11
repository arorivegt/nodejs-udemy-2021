const { Router } = require('express');
const { body, check  } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth.controllers');
const { fieldValidator } = require('../middlewares/field-validator');

const router = Router();

/**
 * {{url}}/api/category
 */

//get all categories
router.get('/', ( req, res) => {
    res.json({
        msj : "get"
    })
});

//get a category by id - public
router.get('/:id', ( req, res) => {
    res.json({
        msj : "get id"
    })
});

//create category - private - everyone with a valid token
router.post('/', ( req, res) => {
    res.json({
        msj : "post"
    })
});

//update category - private - everyone with a valid token
router.put('/', ( req, res) => {
    res.json({
        msj : "put"
    })
});

//deelete category - private - everyone with a valid token and if it's admin
router.delete('/', ( req, res) => {
    res.json({
        msj : "delete"
    })
});

module.exports = router;