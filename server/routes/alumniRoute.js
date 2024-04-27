const router = require("express").Router();
const { alumniVerify } = require('../middlewares/jwtAuth');
const { getAll } = require('../controllers/alumniController/getAllController');
router.get("/getAll",alumniVerify, getAll); // Get All Users
module.exports = router;
