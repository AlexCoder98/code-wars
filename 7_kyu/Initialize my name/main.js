function initializeNames(name) {
    const arrAsName = name.split(" ");
    if (arrAsName.length > 2) {
        const mid = arrAsName.slice(1, -1).map(el => `${el[0]}.`).join(" ");
        return `${arrAsName[0]} ${mid} ${arrAsName[arrAsName.length - 1]}`;
    } else {
        return name;
    }
}

const result = initializeNames('Alice Betty Catherine Davis');
// const result = initializeNames('Alice');
console.log(result);