const router = require('express').Router();
const { jwtAuth } = require('../middlewares/jwtAuth');
const { create } = require('../controllers/newsController/createController');
const { remove } = require('../controllers/newsController/deleteController');
const { edit } = require('../controllers/newsController/editController');
const { get } = require('../controllers/newsController/getController');
const { getAll } = require('../controllers/newsController/getAllController');
router.post("/create",jwtAuth, create); // News Creation
router.get("/get",jwtAuth, get); // Get News By ID
router.get("/getAll", getAll); // Get All News
router.put("/edit",jwtAuth, edit); // Edit News Info
router.post("/delete",jwtAuth, remove); // Delete News

module.exports = router;