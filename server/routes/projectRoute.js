const router = require("express").Router();

router.post("/create", create); // Project Creation
router.get("/get", get); // Get Project By ID
router.get("/getAll", getAll); // Get All Projects
router.put("/edit", edit); // Edit Project Info
router.delete("/delete", deleteUser); // Delete Project

moudle.exports = router;
