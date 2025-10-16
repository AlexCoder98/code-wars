function reverse(str) {
    return str.split(" ").filter(el => el != "").map((el, i) => i % 2 == 0 ? el : el.split("").reverse().join("")).join(" ");
}

const result = reverse("Reverse this string, please!");
// console.log(result);