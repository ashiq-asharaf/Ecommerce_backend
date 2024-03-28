const db = require("../db")

function userLogin(req, res, next) {
    const args=[];
    const argVals = [];
    let argCount = 1;
    argCount.push(`c_user_email => $${argCount} :: text`);
    argVals.push(req.body.userEmail);
    argCount += 1;
    args.push(`c_user_pwd => $${argCount} :: text`);
    argVals.push(req.body.memberPwd);
    argCount += 1;
    db.any(`SELECT * FROM ec_fn_user_login(${args.join(",")})`, argVals)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
}

module.exports = {
    userLogin
}