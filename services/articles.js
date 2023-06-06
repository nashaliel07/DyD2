const Articles = require("../schemas/Article");
const { mapDtoFromSchema } = require("../dtos/response/articles");
const BasesException = require("../execeptions/BaseExeception");

const findgetAllArticle = async (req, res) => {
  const articles = await Article.find();
  return articles;
};

const findArticleById = async (id) => {
  const article = await Article.findById(id);
  if (!article) throw new BasesException("Article not found", 404);
  return article;
};

const createArticle = async (request) => {
  const article = new Articles({ ...request });
  await article.save();
  return mapDtoFromSchema(article);
};
const updateArticleById = async (id, request) => {
  const article = await Article.findByIdAndUpdate(id, request, { new: true });
  if (!article) throw new BasesException("Article not found", 404);
  return article;
};

const deleteArticleById = async (id, request) => {
  const article = await Article.findByIdAndDelete(id);
  console.log(article);
  if (!article) throw new BasesException("Article not found", 404);
  return "borrado correctamente";
};

mosude.export = {
  createArticle,
  findgetAllArticle,
  findArticleById,
  updateArticleById,
  deleteArticleById,
};
