const express = require("express");
var cors = require("cors");
const v = require("./validate");
const s = require("./schema");

const router = express.Router();


//Route for Login
router.post(
    "/ec_user_login",
    v.validatePublic(s.checkLogin),
    db.userLogin
)