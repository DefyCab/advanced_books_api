module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "Victor Hugo",
    hasMany: "books",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
