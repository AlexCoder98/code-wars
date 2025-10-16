function luckCheck(ticket) {
    if (ticket.length == 0 || ticket.match(/\D/g)) {
        throw new Error;
    } else {
        const arr = ticket.split("").map(el => +el);
        const mid = Math.floor(ticket.length / 2);
        const firstPart = arr.slice(0, mid);
        const secondPart = arr.slice(ticket.length - mid);
        return firstPart.reduce((acc, curr) => acc + curr) === secondPart.reduce((acc, curr) => acc + curr);
    }
}

const result = luckCheck("683179");
// console.log(result);