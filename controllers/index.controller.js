//import model
const userM = require("../models/user.model");


let getM = (req, res) => {
    console.log("in get method");
    res.send("in get method.");
}

let create = (req, res) => {
    console.log("in post method");
    console.log(req.body);
    let newUser = new userM(req.body);
    newUser.save();
    res.send("in post method.");
}

//export modules
module.exports = {
    getM,
    create
}