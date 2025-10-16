function latestClock(a, b, c, d) {
    const hours = [...arguments].map((el, index, array) => {
        return array.map((innerEl, innerIndex) => {
            if (index != innerIndex) return el.toString() + innerEl;
        })
    }).flat().filter(el => el <= "59").sort((a, b) => b - a);
    for (const hour of hours) {
        let newNumbers = [...arguments];
        if (hour <= "24") {
            const hoursSplitted = hour.split("").map(hour => +hour);
            for (let i = 0; i < hoursSplitted.length; i++) {
                const splittedHourIndex = newNumbers.indexOf(hoursSplitted[i]);
                newNumbers.splice(splittedHourIndex, 1);
            }
            const minutes = newNumbers.map((el, index, array) => {
                return array.map((innerEl, innerIndex) => {
                    if (index != innerIndex) return el.toString() + innerEl;
                })
            }).flat().filter(el => el != undefined).sort((a, b) => b - a);
            for (let minute of minutes) {
                if (hour <= "23" && minute <= "59") return `${hour}:${minute}`;
            }
        }
    }
}



// const result = latestClock(1, 9, 8, 3);
// const result = latestClock(9, 1, 2, 5);
// const result = latestClock(1, 2, 8, 9);
// const result = latestClock(0, 0, 0, 0);
const result = latestClock(2, 4, 0, 0);
console.log(result);