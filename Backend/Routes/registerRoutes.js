const { Router } = require ('express');
const router = Router();

const registerContriller = require( "../Controller/regController");

router.post('/',registerContriller.handelNewUser)

module.exports = router;

