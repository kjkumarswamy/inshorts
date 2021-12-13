const News = require("../model/news");

exports.getNews = async (req, res) => {
  try {
    const size = Number(req.query.size);
    const skip = Number(req.query.page);
    const data = await News.find({})
      .limit(size)
      .skip(size * skip);
    res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
