const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("news", newsSchema);
