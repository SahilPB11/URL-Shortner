import Url from "../models/url.js";
import ErrorHandler from "../utils/errorHandler.js";
import shortid from "shortid";
export const newShortUrl = async (req, res, next) => {
  try {
    let { OrignalUrl } = req.body;
    if (!OrignalUrl) return next(new ErrorHandler("Url is required", 400));
    // here we will check first that if url already exist or not in database
    let url = await Url.findOne({ OrignalUrl });
    // here i check that if url is already exist in that case i am sending the url
    if (url) return res.status(200).send(url);
    // here i am making a short id
    const shortUrl = shortid();

    url = await Url.create({
      orignalUrl: OrignalUrl,
      shortUrl: shortUrl,
    });
    res.status(200).send(url);
  } catch (error) {
    next(error);
  }
};
