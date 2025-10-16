function titleCase(str, minorStr) {
    const strAsArray = str.split(" ");
    if (minorStr) {
        const minorStrAsArray = minorStr.split(" ");
        const newArr = [];
        for (let i = 0; i < strAsArray.length; i++) {
            let mainEl = strAsArray[i];
            let mainElLowered = mainEl.toLowerCase();
            for (let j = 0; j < minorStrAsArray.length; j++) {
                const minorEl = minorStrAsArray[j];
                const minorElLowered = minorEl.toLowerCase();
                if (mainElLowered === minorElLowered) {
                    if (i == 0) {
                        mainEl = mainEl.length > 1 ? `${mainEl[0].toUpperCase()}${mainElLowered.slice(1)}` : mainEl.toUpperCase();
                    } else {
                        mainEl = mainElLowered;
                    }
                    break;
                } else {
                    mainEl = `${mainEl[0].toUpperCase()}${mainElLowered.slice(1)}`;
                }
            }
            newArr.push(mainEl);
        }
        return newArr.join(" ");
    } else {
        return strAsArray.map(el => `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`).join(" ");
    }
}

// const result = titleCase('a clash of KINGS', 'a an the of');
// const result = titleCase('THE WIND IN THE WILLOWS', 'The In');
// const result = titleCase("", "")
const result = titleCase('the quick brown fox');
console.log(result);