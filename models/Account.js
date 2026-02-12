const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  cardPin: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  atmCardNo: {
    type: String,
    required: true,
    unique: true
  },
  holderName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Account", accountSchema);