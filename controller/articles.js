const { mapDtoFromSchema } = require("../dtos/response/articles");
const {
  createArticle,
  findArticleById,
  findgetAllArticle,
  updateArticleById,
  deleteArticleById,
} = require("../services/articles");

const getAllArticles = async (req, res) => {
  try {
    const article = await findgetAllArticle(req.body);
    const mappedArticles = article.map((article) => mapDtoFromSchema);
    res.status(200).send({ articles: mappedArticles });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

const getAllArticleById = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await findArticleById(id);
    res.status(302).send(mapDtoFromSchema(article));
  } catch (err) {
    console.log(err);
    if (err.cause?.status) {
      return res.status(err.status).send({ message: err.message });
    }
    return res.status(500).send(err);
  }
};

const addArticle = async (req, res) => {
  try {
    const article = await createArticle(req.body);
    res.status(201).send(mapDtoFromSchema(article));
  } catch (err) {
    return res.status(500).send(err);
  }
};

const editArticleById = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await updateArticleById(id, req.body);
    res.status(200).send(mapDtoFromSchema(article));
  } catch (err) {
    console.log(err);
    if (err.cause?.status) {
      return res.status(err.status).send({ message: err.message });
    }
    return res.status(500).send(err);
  }
};
const removeArticleByID = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await deleteArticleById(id);
    res.status(200).send({ message });
  } catch (err) {
    console.log(err);
    if (err.cause?.status) {
      return res.status(err.status).send({ message: err.message });
    }
    return res.status(500).send(err);
  }
};

module.exports = {
  addArticle,
  getAllArticles,
  getAllArticleById,
  editArticleById,
  removeArticleByID,
};
