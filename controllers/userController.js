import User from "../models/user.js";
import bcrypt from "bcrypt";
import ErrorHandler from "../utils/errorHandler.js";
import sendCookie from "../utils/sendCookie.js";
// SignUp User
export const signUp = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (!user) return next(new ErrorHandler("User Already Exist", 404));

    const hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({ username, password: hashPassword });

    // calling function for send the response from utils
    sendCookie(res, user, 201, "Registerd Succesfully");
  } catch (error) {
    next();
  }
};
