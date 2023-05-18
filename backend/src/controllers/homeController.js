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
            errMessage: 'Missing inputs paramenter!'
        })
    }

    let userData = await homeService.handleUserLogin(email, password);

    //check email exist
    //compare password
    //return userInfor
    //access_token: JWT json web token
    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let handleGetListCamera = async (req, res) => {
    try {
        let result = await homeService.handleGetListCamera();

        if (result) {
            return res.status(200).json({
                errCode: result.errCode,
                errMessage: result.errMessage,
                listCamera: result.list ? result.list : []
            })
        }

        return res.status(500).json({
            errCode: 2,
            errMessage: 'No data!'
        })

    } catch (error) {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Error from server!'
        })
    }
}

module.exports = {
    getHome: getHome,
    handleLogin: handleLogin,
    handleGetListCamera: handleGetListCamera,
}