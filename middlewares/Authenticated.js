import User from "../models/user.js";
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decodedData = jwt.verify(token, process.env.jwt_Secret);
  req.user = await User.findById(decodedData._id);
  next();
};

export default isAuthenticated;
