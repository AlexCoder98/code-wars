function whatTimeIsIt(angle) {
    let hours = 0;
    let minutes = 0;
    for (let i = Math.floor(angle * 2); i > 0; i--) {
        minutes++;
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }
    return `${angle < 30 ? `12` : hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

const result = whatTimeIsIt(4.011984490065448);
// console.log(result);