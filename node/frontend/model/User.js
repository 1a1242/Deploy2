const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    limit: {type: Number},
});



module.exports = mongoose.model("User", userSchema);