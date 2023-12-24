const { login } = require("../controllers/user");
const router = require("express").Router();

router.post("/login", login);

module.exports = router;
