const { Router } = require ('express');
const router = Router();

const authController = require( "../Controller/authController.js");

router.post('/',authController.handelLogin)

module.exports = router;

