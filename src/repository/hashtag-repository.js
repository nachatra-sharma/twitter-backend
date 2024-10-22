const Hashtag = require("../models/hashtag-models");

async function create(data) {
  try {
    const tag = await Hashtag.create(data);
    return tag;
  } catch (error) {
    console.log(error);
  }
}

async function bulkCreate(data) {
  try {
    const tags = await Hashtag.insertMany(data);
    return tags;
  } catch (error) {
    console.log(error);
  }
}

async function get(id) {
  try {
    const tag = await Hashtag.findById(id);
    return tag;
  } catch (error) {
    console.log(error);
  }
}

async function getAll() {
  try {
    const tags = await Hashtag.find({});
    return tags;
  } catch (error) {
    console.log(error);
  }
}

async function destroy(id) {
  try {
    const tag = await Hashtag.findByIdAndDelete(id);
    return tag;
  } catch (error) {
    console.log(error);
  }
}

async function findByName(title) {
  try {
    const tag = await Hashtag.find({
      title: title,
    });
    return tag;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  create,
  get,
  getAll,
  destroy,
  bulkCreate,
  findByName,
};
