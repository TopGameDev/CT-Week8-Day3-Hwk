"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    let user = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return user;
}
function createItem(name, price, description) {
    let item = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
    return item;
}
function addToCart(item, user) {
    console.log(`${user.name} has added ${item.name} to cart\n`);
    user.cart.push(item);
}
function removeFromCart(shopItem, user) {
    let count = user.cart.filter(item => item === shopItem).length;
    user.cart.splice(user.cart.indexOf(shopItem), count);
    console.log(`Removing all ${shopItem.name}'s from cart...\n`);
}
function removeQuanity(shopItem, user, quantity) {
    user.cart.splice(user.cart.indexOf(shopItem), quantity);
    console.log(`Removing x${quantity} ${shopItem.name}'s from cart...\n`);
}
function calcTotal(user) {
    let total = 0;
    user.cart.forEach(item => {
        total += item.price;
    });
    return `${user.name}'s total is: ${total}\n`;
}
function printCart(user) {
    console.log(`${user.name}'s Cart: `);
    user.cart.forEach(item => {
        console.log("      " + item.name);
    });
    console.log(" ");
}
let user1 = createUser('Trevon', 25);
let miniBoard = createItem('Tech Deck', 5.99, 'Do you have what it takes to be the best?!?');
let saber = createItem('Light Saber', 39.99, 'May the force be with your');
let chess = createItem('Chess Board', 105.99, 'Board signed by Magnus Carlsen - World Champion');
addToCart(miniBoard, user1);
printCart(user1);
console.log(calcTotal(user1));
addToCart(saber, user1);
addToCart(saber, user1);
addToCart(saber, user1);
printCart(user1);
console.log(calcTotal(user1));
addToCart(chess, user1);
addToCart(chess, user1);
addToCart(chess, user1);
printCart(user1);
console.log(calcTotal(user1));
removeFromCart(saber, user1);
printCart(user1);
console.log(calcTotal(user1));
removeQuanity(chess, user1, 2);
printCart(user1);
console.log(calcTotal(user1));
