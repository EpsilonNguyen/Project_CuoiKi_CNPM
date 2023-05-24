import db from "../models/index";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let user = await db.Account.findOne({
                attributes: ['id', 'email', 'password'],
                where: { email: email },
                raw: true
            });

            if (user) {
                //compare password
                userData.errCode = 0;
                userData.errMessage = "Succeed!"
                userData.user = user;
            }

            resolve(userData);
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
}