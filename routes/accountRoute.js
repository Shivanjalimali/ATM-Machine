const express = require("express");
const router = express.Router();

const accountController = require("../controller/accountController.js");

// create new account
router.post("/accounts", accountController.createAccount);
router.get("/accounts", accountController.getAllAccounts);
router.get("/accounts/:id", accountController.getAccountById);
router.put("/accounts/:id", accountController.updateAccount);
router.delete("/accounts/:id", accountController.deleteAccount);

module.exports = router;

