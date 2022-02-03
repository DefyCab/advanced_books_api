module.exports = (factory, Models) => {
  factory.define("Book", Models.Book, {
    title: "My book",
    author: "Guy Guy",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
