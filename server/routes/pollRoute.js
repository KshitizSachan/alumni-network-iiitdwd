const router = require('express').Router();
const { jwtAuth } = require('../middlewares/jwtAuth');
const {getRank} = require('../middlewares/getRank');

const { create } = require('../controllers/pollsController/createController');
const { remove } = require('../controllers/pollsController/deleteController');
const { castVote } = require('../controllers/pollsController/castVoteController');
const { getAll } = require('../controllers/pollsController/getAllController');
const { get } = require('../controllers/pollsController/getController');

router.post("/create", create); // Poll Creation
router.get("/get", jwtAuth, get); // Get Poll By ID
router.get("/getAll", getRank, getAll); // Get All Polls
router.put("/castVote", getRank, castVote); // Cast vote
router.post("/delete", jwtAuth, remove); // Delete Poll

module.exports = router;