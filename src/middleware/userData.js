import { loginTokens, users } from "../data/users.js";

export function userData(req, res, next) {
    req.user = {
        username: '',
        isLoggedIn: false,
    };

    if (!req.cookies.loginToken || req.cookies.loginToken.length !== 20) {
        return next();
    }

    let userLoginToken = null;

    for (const cookieTokens of loginTokens) {
        if (cookieTokens.randomString === req.cookies.loginToken) {
            userLoginToken = cookieTokens;
            break;
        }
    }

    if (!userLoginToken) {
        return next();
    }

    for (const userObj of users) {
        if (userObj.id === userLoginToken.userId) {
            req.user.username = userObj.username;
            req.user.isLoggedIn = true;
            break;
        }
    }

    return next();
}