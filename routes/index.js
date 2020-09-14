const router = require("express").Router();
const UserController = require("../controllers/userController");
const { authentication } = require("../middlewares/auth");

router.get("/users", authentication ,UserController.fetchUser)
router.post("/register", UserController.register)
router.post("/login", UserController.login)

module.exports = router;