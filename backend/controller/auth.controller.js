// const dotenv = require("dotenv").config();
const constant = require("../constants/constants.json");
const authServies = require("../services/auth.services");
const userServices = require("../services/user.services");
const authMiddleware = require("../middleware/auth.middleware");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth.middleware");
const authController = {
  signUp: async (req, res) => {
    const firstName = req.body.firstName.trim().toLowerCase()
      ? req.body.firstName.trim().toLowerCase()
      : "";
    const lastName = req.body.lastName.trim().toLowerCase()
      ? req.body.lastName.trim().toLowerCase()
      : "";
    const email = req.body.email.trim().toLowerCase()
      ? req.body.email.trim().toLowerCase()
      : "";
    const mobile = req.body.mobile ? req.body.mobile : "";
    const password = req.body.password ? req.body.password : "";
    const confirmPassword = req.body.confirmPassword
      ? req.body.confirmPassword
      : "";
    let response = {};
    try {
      if (password !== confirmPassword) {
        response.statusCode = constant.UnauthorizedCode;
        response.error = constant.NotValidCredentials;
        response.message = constant.IS_PASSWORD_CONFIRMPASSWORD;
        return res.json(response);
      }
      // const isEmail = await userServices.getUsers({
      //   where: { email: email, deleted_at: null },
      // });

      // if (isEmail && isEmail.email == email) {
      //   response.statusCode = constant.DUPLICATE_ENTRY_CODE;
      //   response.error = constant.DUPLICATE_ENTRY;
      //   response.message = constant.EMAIL_EXISTED;
      //   return res.json(response);
      // }
      // const isMobile = await userServices.getUsers({
      //   where: { mobile: mobile, deleted_at: null },
      // });
      // if (isMobile && isMobile.mobile == mobile) {
      //   response.statusCode = constant.DUPLICATE_ENTRY_CODE;
      //   response.error = constant.DUPLICATE_ENTRY;
      //   response.message = constant.MOBILE_EXISTED;
      //   return res.json(response);
      // }
      const hashPassword = await bcrypt.hashSync(password, constant.SALT_ROUND);
      let data = {
        firstName,
        lastName,
        email,
        password: hashPassword,
        mobile,
      };
      const user = await authServies.signUp(data);

      if (!user) {
        response.status = constant.SOMTHING_WRONG_CODE;
        response.error = "SOMTHING_WRONG_CODE";
        response.message = constant.SOMTHING_WENT_WRONG_MESSAGE;
        return res.json(response);
      }
      // token expire in 3 hours
      const expirationTime = Math.floor(Date.now() / 1000) + 180 * 60;
      let payload = {
        userName: user.firstName + " " + user.lastName,
        email: user.email,
        role: user.role,
        type: "Bearer",
        expiredAt: expirationTime,
      };
      const refExpiredAt =
        Math.floor(Date.now() / 1000) + 1000 * 60 * 60 * 24 * 7;
      let refPayload = {
        userName: user.firstName + " " + user.lastName,
        email: user.email,
        role: user.role,
        type: "Refresh",
        expiredAt: refExpiredAt,
      };

      let accessToken = await authMiddleware.accessToken(payload);
      let refreshToken = await authMiddleware.refreshToken(payload);
      if (!accessToken.status || !refreshToken.status) {
        response.error = constant.SOMTHING_WENT_WRONG_MESSAGE;
        response.errorMessage = constant.SOMTHING_WENT_WRONG_MESSAGE;
        res.statusCode = constant.SOMTHING_WRONG_CODE;
        return res.json(response);
      }

      res
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "strict",
        })
        .header("Authorization", accessToken, {
          httpOnly: true,
          sameSite: "strict",
        });
      response.status = "success";
      res.status = constant.STATUS_CODE;
      response.statusCode = constant.STATUS_CODE;
      response.accessToken = accessToken.token;
      response.expirationTime = expirationTime;
      response.refreshToken = refreshToken.token;
      return res.json(response);
    } catch (error) {
      console.log(error.message, "__________controller error");
    }
  },
  login: async (req, res) => {
    let response = {};
    try {
      let email = req.body.email ? req.body.email.trim().toLowerCase() : "";
      let password = req.body.password ? req.body.password : "";
      const isUser = await userServices.getUsers({
        where: { email: email, deletedAt: null },
      });
      if (!isUser) {
        res.status = constant.NOT_FOUND_CODE;
        response.error = constant.NOT_FOUND;
        response.message = constant.NOT_FOUND_MESSAGE;
        return res.json(response);
      }
      const verifyPassword = await bcrypt.compare(password, isUser.password);
      if (!verifyPassword) {
        response.error = constant.NotValidCredentials;
        res.status = constant.NotValidCredentials_Code;
        response.statusCode = constant.NotValidCredentials_Code;
        response.message = constant.INVALID_PASSWORD;
        return res.json(response);
      }
      // token expire in 3 hours
      const expirationTime = Math.floor(Date.now() / 1000) + 180 * 60;
      let payload = {
        email: isUser.email,
        status: isUser.status,
        role: isUser.role,
        type: "Bearer",
        expirationTime: expirationTime,
      };
      const accessToken = await auth.accessToken(payload);
      const refreshToken = await auth.refreshToken({
        ...payload,
        type: "Refresh",
      });
      if (!accessToken.token || !refreshToken.status) {
        response.error = constant.SOMTHING_WENT_WRONG_MESSAGE;
        response.errorMessage = constant.SOMTHING_WENT_WRONG_MESSAGE;
        res.statusCode = constant.SOMTHING_WRONG_CODE;
        return res.json(response);
      }
      res.status = 201;
      res
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "strict",
        })
        .header("Authorization", accessToken, {
          httpOnly: true,
          sameSite: "strict",
        });
      response.status = "success";
      response.type = "Bearer";
      response.expiredAt = expirationTime;
      response.token = {
        accessToken: accessToken.token,
        refreshToken: refreshToken.token,
      };
      return res.json(response);
    } catch (error) {
      console.log(error, "__________login error controller");
    }
  },
};
module.exports = authController;
