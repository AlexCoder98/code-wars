function cakes(recipe, available) {
    if (Object.keys(recipe).length > Object.keys(available).length) return 0;
    const filtered = Object.entries(available).filter(el => recipe.hasOwnProperty(el[0]));
    return Math.floor(Math.min(...filtered.map(el => el[1] / recipe[el[0]])));
}

// const result = cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 });
const result = cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
console.log(result);