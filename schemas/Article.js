const { Schema, model } = require("monngoose");

const ArticleSchemas = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = model("article", ArticleSchemas);
