const secretKey = process.env.SECKERT_KEY;
const JWT = require("jsonwebtoken");
const auth = {
  accessToken: async (payload) => {
    try {
      let accessToken = await JWT.sign(payload, secretKey, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
      });
      return {
        token: accessToken,
        status: true,
        expirAt: payload.expirAt,
      };
      // return accessToken;
    } catch (error) {
      return {
        token: "",
        status: false,
      };
      console.log("access token middleware failed-----", error);
    }
  },
  refreshToken: async (payload) => {
    try {
      let refreshToken = await JWT.sign(payload, secretKey, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
      });
      return {
        status: true,
        token: refreshToken,
        expirAt: process.env.REFRESH_TOKEN_EXPIRE,
      };
    } catch (error) {
      console.log("refresh-token failed.......", error);
      return {
        status: false,
        token: "",
      };
    }
  },
};
module.exports = auth;
