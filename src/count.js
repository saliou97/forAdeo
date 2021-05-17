const data = require("../data/data");

/**
 * Count animals for each owner, and people for each country
 */
const count = () => {
  const countries = data.data.map((country) => ({
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map((p) => ({
      name: `${p.name} [${p.animals.length}]`,
      animals: p.animals,
    })),
  }));
  return countries;
};

module.exports = count;
