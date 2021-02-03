const express = require("express");
const indexR = express.Router();

//import modules
const indexC = require("../controllers/index.controller");

//apis
indexR.get("/", indexC.getM);
indexR.post("/", indexC.create);

//export modules
module.exports = indexR;