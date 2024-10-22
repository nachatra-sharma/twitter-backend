const Tweet = require("../models/tweet-models");

async function create(data) {
  try {
    const tweet = await Tweet.create(data);
    return tweet;
  } catch (error) {
    console.log(error);
  }
}

async function get(id) {
  try {
    const tweet = await Tweet.findById(id);
    return tweet;
  } catch (error) {
    console.log(error);
  }
}

async function getAll(limit, offset) {
  try {
    const tweets = await Tweet.find({}).skip(offset).limit(limit);
    return tweets;
  } catch (error) {
    console.log(error);
  }
}

async function destroy(id) {
  try {
    const tweet = await Tweet.findByIdAndDelete(id);
    return tweet;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  create,
  get,
  getAll,
  destroy,
};
