const Account = require('../models/Account');


// Create a new account
exports.createAccount = async (req, res) => {
 try {
   const { accountNumber, cardPin, balance, atmCardNo, holderName } = req.body;
   const newAccount = new Account({ accountNumber, cardPin, balance, atmCardNo, holderName });
   await newAccount.save();
   res.status(201).json(newAccount);
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
};

//get all accounts

exports.getAllAccounts=async (req,res) => {
    try {
        const accounts=await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

exports.getAccountById=async (req,res)=>{
    try {
        const account=await Account.findById(req.params.id);
        if(!account)
        {
            return res.status(404).json({message:"Account not found"});
        }
        res.status(200).json(account);
    } catch (error) {
         res.status(500).json({message:error.message});
    }
}

exports.updateAccount=async(req,res)=>{
    try {
        const account=await Account.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!account)
        {
            return res.status(404).json({message:"Account not found"});

        }
         res.status(200).json(account);
    } catch (error) {
            res.status(500).json({message:error.message});

    }
}

exports.deleteAccount = async (req, res) => {
try {
const account = await Account.findByIdAndDelete(req.params.id);
if (!account) {
return res.status(404).json({ message: 'Account not found' });
}
res.status(200).json({ message: 'Account deleted successfully' });
} catch (error) {
res.status(500).json({ message: error.message });
}};