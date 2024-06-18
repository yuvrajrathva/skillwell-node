const express = require("express");
const router = express.Router();
const { handleRegisterUser } = require("../controllers/user");

router.post("/", handleRegisterUser);

module.exports = router;
