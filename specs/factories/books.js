module.exports = (factory, Models) => {
  factory.define("Book", Models.Book, {
    title: "Les Miserables",
    belongsTo: "author",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
