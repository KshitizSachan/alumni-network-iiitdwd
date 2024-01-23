const router = require('express').Router();

router.post("/create", create); // Job Creation
router.get("/get", get); // Get Job By ID
router.get("/getAll", getAll); // Get All Jobs
router.put("/edit", edit); // Edit Job Info
router.delete("/delete", deleteUser); // Delete Job

moudle.exports = router;