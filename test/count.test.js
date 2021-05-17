const count = require("../src/count");
const countDataMock = require("../data/count.data.json");

describe("count", () => {
  it("Count animals for each owner, and people for each country ", () => {
    expect(count()).toEqual(countDataMock);
  });
});
