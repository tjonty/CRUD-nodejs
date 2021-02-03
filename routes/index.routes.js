const express = require("express");
const indexR = express.Router();

//import modules
const indexC = require("../controllers/index.controller");

//apis
indexR.get("/", indexC.getM);
indexR.post("/C", indexC.create);
indexR.get("/R", indexC.read);
indexR.put("/U", indexC.update);

//export modules
module.exports = indexR;