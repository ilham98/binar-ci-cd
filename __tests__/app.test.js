const app = require("../src/app");
const request = require("supertest");

describe("Get valid response", () => {
  it("return hello world", async () => {
    const response = await request(app).get("/");
    expect(response.body.message).toBe("Hello World!");
  });
});
