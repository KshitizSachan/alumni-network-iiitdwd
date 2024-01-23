const router = require('express').Router();

router.post("/create", create); // News Creation
router.get("/get", get); // Get News By ID
router.get("/getAll", getAll); // Get All News
router.put("/edit", edit); // Edit News Info
router.delete("/delete", deleteUser); // Delete News

moudle.exports = router;