const { factory, expect, serverConfig } = require("../../helpers");

let request, response, books;

describe("GET /api/books", () => {
  before((done) => {
    request = serverConfig(done);
  });

  beforeEach(async () => {
    books = await factory.createMany("Book", 5, [
      { title: "Bible", author: "God" },
    ]);
    response = await request.get("/api/books/");
  });

  it("is expected to respond with status 200", () => {
    expect(response.status).to.equal(200);
  });

  it("is expected to respond with a list of 1 resource", () => {
    expect(response.body["books"].length).to.equal(5);
  });

  describe("resource properties", () => {
    it("is expected to include an id and title", () => {
      const expectedJson = {
        id: books[0].id,
        title: "Bible",
      };

      expect(response.body["books"][0]).to.deep.equal(expectedJson);
    });
  });
});
