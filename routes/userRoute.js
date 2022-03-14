const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../middlewares/verifyToken");

// register
router.post("/register", userController.registerUser);

// login
router.post("/login", userController.loginUser);

// verify
router.get("/verify", verifyToken, userController.auth);

module.exports = router;
