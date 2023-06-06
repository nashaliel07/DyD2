const { Schema, model } = require("monngoose");

const ArticleSchema = Schema({
  username: {
    type: String,
    required: [true, "Email requerido"],
    unique: true,
  },
  passowrd: {
    type: Number,
    required: [true, "Password requerido"],
  },
});

module.exports = model("article", ArticleSchema);
