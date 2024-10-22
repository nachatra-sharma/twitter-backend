const TweetServices = require("../services/tweet-services");

async function createTweet(req, res) {
  try {
    const data = req.body;
    const response = await TweetServices.create(data);
    return res.status(200).json({
      success: true,
      message: "successfully created a new tweet",
      data: response,
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createTweet,
};
