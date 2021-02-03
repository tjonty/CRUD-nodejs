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
    newUser.save((err, doc) => {
        if (err) return console.log(err);
        res.send("Document inserted successfully." + doc);
    });
}

let read = async (req, res) => {
    console.log("in read");
    console.log(req.body);
    await userM.find({}, (err, docs) => {
        if (err) res.send({ success: false, msg: "failed to retrive data" });
        res.send(docs);
    });    
}

let update = async (req, res) => {
    console.log("in update");
    console.log(req.body);
    await userM.updateOne({ email: req.body.email }, { $set: { name: req.body.updatename } }, (err, docs) => {
        if (err) res.send("failed to update");
        res.send("successfully update.");
    });
} 

//export modules
module.exports = {
    getM,
    create,
    read,
    update
}