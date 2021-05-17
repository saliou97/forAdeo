const data = require("../data/data");

/**
 * Get results where animals name match with input text
 * @param text
 */
const filterByAnimalName = (text) => {
  return data.data.reduce((accCountry, curCountry) => {
    const filteredPeoples = curCountry.people.reduce((accPeople, curPeople) => {
      const filteredAnimals = curPeople.animals.filter((animal) =>
        animal.name.includes(text)
      );
      if (filteredAnimals.length) {
        accPeople.push(
          Object.assign({}, curPeople, {
            animals: filteredAnimals,
          })
        );
      }
      return accPeople;
    }, []);
    if (filteredPeoples.length) {
      accCountry.push(
        Object.assign({}, curCountry, {
          people: filteredPeoples,
        })
      );
    }
    return accCountry;
  }, []);
};

module.exports = filterByAnimalName;
