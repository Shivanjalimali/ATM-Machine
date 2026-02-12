const express = require("express");
const router = express.Router();

const accountController = require("../controller/accountController.js");

// create new account
router.post("/account", accountController.createAccount);

module.exports = router;
