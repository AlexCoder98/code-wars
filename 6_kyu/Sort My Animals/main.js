function sortByAnimals(animals) {
    // FIRST SOLUTION
    const sortedByNumberOfLegs = animals.sort((a, b) => a.numberOfLegs - b.numberOfLegs);
    const sortedByName = sortedByNumberOfLegs.sort((a, b) => {
        if (a.numberOfLegs == b.numberOfLegs) {
            return a.name.localeCompare(b.name);
        }
    })
    return sortedByName;
}

const result = sortByAnimals([
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
]);
console.log(result);