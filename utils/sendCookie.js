import jwt from "jsonwebtoken";

// i am using this for send token in cookie
const sendCookie = (res, user, statusCode = 201, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.jwt_Secret);
  return res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      message: message,
    });
};

export default sendCookie;
