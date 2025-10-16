function humanReadable(seconds) {
    const hours = Math.floor(seconds / 60 / 60);
    const minutes = new Date(seconds * 1000).getMinutes()
    const secs = new Date(seconds * 1000).getSeconds();
    return `${hours <= 9 ? `0${hours}` : hours}:${minutes <= 9 ? `0${minutes}` : minutes}:${secs <= 9 ? `0${secs}` : secs}`;
}

const result = humanReadable(359999);
// console.log(result);