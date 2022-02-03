const { factory, expect, serverConfig } = require("../../helpers");

let book, response, request;

describe("GET /api/books/:id", () => {
  before((done) => {
    request = serverConfig(done);
  });

  afterEach(async () => {
    await factory.cleanUp();
  });

  beforeEach(async () => {
    book = await factory.create("Book", { title: "Fun with Sequalizer" });
    response = await request.get(`/api/books/${book.id}`);
  });
  it("is expected to respond with status 200", () => {
    expect(response.status).to.equal(200);
  });
  it("include title", () => {
    expect(response.body["book"].title).to.equal("Fun with Sequalizer");
  });
});
