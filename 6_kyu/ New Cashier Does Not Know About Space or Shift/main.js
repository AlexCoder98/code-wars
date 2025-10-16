function getOrder(input) {
    const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"].map(item => item.toLowerCase());
    let orderItem = "", order = [];
    for (let i = 0; i < input.length; i++) {
        orderItem += input[i];
        if (menu.includes(orderItem)) {
            order.push(orderItem);
            orderItem = "";
        }
    }
    return order.sort((a, b) => menu.indexOf(a) - menu.indexOf(b)).map(el => `${el[0].toUpperCase()}${el.slice(1)}`).join(" ");
}

const result = getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza");
console.log(result);