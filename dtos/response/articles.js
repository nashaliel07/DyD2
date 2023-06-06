const mapDtoFromSchema = (schemas) => {
  const { _v, _id, ...article } = this.toOject();
  article.is = _id;
  return article;
};

module.exports = {
  mapDtoFromSchema,
};
