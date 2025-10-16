function askForMissingDetails(list) {
    return list.filter(el => {
        return Object.values(el).includes(null);
    }).map(obj => {
        const nullishProperty = Object.entries(obj).find(prop => prop[1] === null)[0];
        obj.question = `Hi, could you please provide your ${nullishProperty}.`;
        return obj;
    });
};

var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
]

const result = askForMissingDetails(list1);
console.log(result);