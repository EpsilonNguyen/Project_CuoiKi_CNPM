import homeService from "../services/homeService";

let getHome = (req, res) => {
    return res.render("home.ejs");
}

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
        })
    }

    let userData = await homeService.handleUserLogin(email, password);

    //check email exist
    //compare password
    //return userInfor
    //access_token: JWT json web token
    return res.status(200).json({
        errCode: userData.errCode,
        user: userData.user ? userData.user : {}
    })
}

module.exports = {
    getHome: getHome,
    handleLogin: handleLogin,
}