const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const Shop = require("../model/Shop");
const YKError = require("../utils/error");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) {
      return next(new YKError("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    if (!req.user) {
      res.clearCookie("token");
      return next(new YKError("Token is not valid! Login to continue", 401));
    }
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.clearCookie("token");
      return next(new YKError(error.message, 401));
    }
    return next(new YKError(error.message, 500));
  }
});

exports.isSeller = catchAsyncErrors(async (req, res, next) => {
  const { shop_token } = req.cookies;
  try {
    if (!shop_token) {
      return next(new YKError("The Shop token is not in the cookie", 401));
    }

    const decoded = jwt.verify(shop_token, process.env.JWT_SECRET);

    req.shop = await Shop.findById(decoded.id);

    if (!req.shop) {
      res.clearCookie("shop_token");
      return next(new YKError("Token is not valid! Login to continue", 401));
    }

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.clearCookie("shop_token");
      return next(new YKError(error.message, 401));
    }
    return next(new YKError(error.message, 500));
  }
});
