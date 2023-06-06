const express = require("express");
const router = express.Router();
const {
  addArticle,
  getAllArticles,
  getAllArticleById,
  editArticleById,
  removeArticleByID,
} = require("../controller/articles");
router.get("/", getAllArticles);
router.get("/", getAllArticleById);
router.post("/", addArticle);
router.put("/", editArticleById);
router.delete("/", removeArticleByID);

module.exports = router;
