const TweetRepository = require("../repository/tweet-repository");
const HashtagRepository = require("../repository/hashtag-repository");

async function create(data) {
  try {
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g);
    tags = tags.map((tag) => tag.substring(1)).map((tag) => tag.toLowerCase());
    const tweet = await TweetRepository.create(data);
    let alreadyPresentTags = await HashtagRepository.findByName(tags);

    let titleOfPresentedTags = alreadyPresentTags.map((tag) => tag.title);
    let newTags = tags.filter((tag) => !titleOfPresentedTags.includes(tag));

    newTags = newTags.map((tag) => {
      return {
        title: tag,
        tweets: [tweet.id],
      };
    });

    await HashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  create,
};
