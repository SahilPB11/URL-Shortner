import Url from "../models/url.js";
import ErrorHandler from "../utils/errorHandler.js";
import shortid from "shortid";

// this is for creating a new short url
export const newShortUrl = async (req, res, next) => {
  try {
    let { OrignalUrl } = req.body;
    if (!OrignalUrl) return next(new ErrorHandler("Url is required", 400));
    // here we will check first that if url already exist or not in database
    let url = await Url.findOne({ OrignalUrl });
    // here i check that if url is already exist in that case i am sending the url
    console.log(url);
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

// with the help of short url  can take orignal url from database
export const getOrignalUrl = async (req, res, next) => {
  try {
    const shortId = req.params.shortId;
    const data = await Url.findOneAndUpdate(
      {
        shortUrl: shortId,
      },
      {
        $push: {
          visitHistory: {
            timestap: Date.now(),
          },
        },
      }
    );

    // Redirect the user to the original URL
    if (data && data.orignalUrl) {
      return res.redirect(data.orignalUrl);
    } else {
      // If no data found or original URL is not present
      return next(new ErrorHandler("Original URL not found", 404));
    }
  } catch (error) {
    next(error);
  }
};
