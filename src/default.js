const { data } = require("./constants/data");
const News = require("./model/news");

const defaultData = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(data);
    console.log("data imported successfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};

module.exports = defaultData;
