const router = require("express").Router();
const { alumniVerify } = require('../middlewares/jwtAuth');
const { getAll } = require('../controllers/alumniController/getAllController');
const {getRank} = require('../middlewares/getRank');


router.get("/getAll", getRank, getAll); // Get All Users
module.exports = router;
