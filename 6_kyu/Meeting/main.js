function meeting(s) {
    return s.split(";").map(el => el.split(":").map(el => el.toUpperCase())).sort((a, b) => {
        return a[1] !== b[1] ? (a[1] < b[1] ? -1 : 1) : (a[0] < b[0] ? -1 : 1);
    }).map(el => `(${el[1]}, ${el[0]})`).join("");
}

const result = meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn");
// console.log(result);