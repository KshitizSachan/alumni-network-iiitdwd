const router = require('express').Router();
const { jwtAuth } = require('../middlewares/jwtAuth');
const { create } = require('../controllers/jobController/createController');
const { getAll } = require('../controllers/jobController/getAllController');
const { get } = require('../controllers/jobController/getController');
const { remove } = require('../controllers/jobController/deleteController');
const { edit } = require('../controllers/jobController/editController');
router.post("/create", create); // Job Creation
router.get("/get", jwtAuth, get); // Get Job By ID
router.get("/getAll", getAll); // Get All Jobs
router.put("/edit", jwtAuth, edit); // Edit Job Info
router.delete("/delete", jwtAuth, remove); // Delete Job

module.exports = router;