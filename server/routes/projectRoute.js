const router = require("express").Router();
const { jwtAuth } = require('../middlewares/jwtAuth');
const { create } = require('../controllers/projectController/createController');
const { getAll } = require('../controllers/projectController/getAllController');
const { get } = require('../controllers/projectController/getController');
const { remove } = require('../controllers/projectController/deleteController');
const { edit } = require('../controllers/projectController/editController');
router.post("/create", jwtAuth, create); // Project Creation
router.get("/get", jwtAuth, get); // Get Project By ID
router.get("/getAll", getAll); // Get All Projects
router.put("/edit", jwtAuth, edit); // Edit Project Info
router.delete("/delete", jwtAuth, remove); // Delete Project

module.exports = router;
