const router = require("express").Router();

router.post("/signup", signup); // User Signup
router.post("/login", login); // User Login
router.get("/get", get); // Get User By ID
router.get("/getAll", getAll); // Get All Users
router.put("/edit", edit); // Edit User Info
router.delete("/delete", deleteUser);// Delete User

module.exports = router;
