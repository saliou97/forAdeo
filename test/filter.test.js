const filterByAnimalName = require("../src/filter");

const expectedOutput = [
  {
    name: "Uzuzozne",
    people: [
      {
        name: "Lillie Abbott",
        animals: [
          {
            name: "John Dory",
          },
        ],
      },
    ],
  },
  {
    name: "Satanwi",
    people: [
      {
        name: "Anthony Bruno",
        animals: [
          {
            name: "Oryx",
          },
        ],
      },
    ],
  },
];

describe("filter", () => {
  it("should retrieve results with only animal name contains 'ry'", () => {
    expect(filterByAnimalName("ry")).toEqual(expectedOutput);
  });
});
