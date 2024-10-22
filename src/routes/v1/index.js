const express = require("express");
const router = express.Router();
const { createTweet } = require("../../controllers/tweet-controllers");

router.post("/tweet", createTweet);

module.exports = createTweet;
