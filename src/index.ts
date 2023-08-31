import { v4 as uuidv4 } from "uuid";

type Item = {
    id:string
    name:string
    price:number
    description:string
}

type User = {
    id:string
    name:string
    age:number
    cart: Item[]

}

function createUser(name:string, age:number){
    let user:User = {
        id:uuidv4(),
        name,
        age,
        cart:[]
    }
    return user
}

function createItem(name:string, price:number, description:string){
    let item:Item = {
        id:uuidv4(),
        name,
        price,
        description
    }
    return item
}


function addToCart(item:Item, user:User){
    console.log(`${user.name} has added ${item.name} to cart\n`)
    user.cart.push(item)
}

function removeFromCart(shopItem:Item, user:User){
    let count = user.cart.filter(item => item === shopItem).length
    user.cart.splice(user.cart.indexOf(shopItem), count)
    console.log(`Removing all ${shopItem.name}'s from cart...\n`)
}

function removeQuanity(shopItem:Item, user:User, quantity:number){
    user.cart.splice(user.cart.indexOf(shopItem), quantity)
    console.log(`Removing x${quantity} ${shopItem.name}'s from cart...\n`)
}


function calcTotal(user:User){
    let total = 0
    user.cart.forEach(item => {
        total += item.price
    })
    return `${user.name}'s total is: ${total}\n`
}


function printCart(user:User){
    console.log(`${user.name}'s Cart: `)
    user.cart.forEach(item => {
        console.log("      " + item.name)
    })
    console.log(" ")
}

let user1 = createUser('Trevon', 28)
let miniBoard = createItem('Tech Deck', 5.99, 'Do you have what it takes to be the best?!?')
let saber = createItem('Light Saber', 39.99, 'May the force be with your')
let chess = createItem('Chess Board', 105.99, 'Board signed by Magnus Carlsen - World Champion')

addToCart(miniBoard, user1)
printCart(user1)
console.log(calcTotal(user1))

addToCart(saber, user1)
addToCart(saber, user1)
addToCart(saber, user1)
printCart(user1)
console.log(calcTotal(user1))

addToCart(chess, user1)
addToCart(chess, user1)
addToCart(chess, user1)
printCart(user1)
console.log(calcTotal(user1))

removeFromCart(saber, user1)
printCart(user1)
console.log(calcTotal(user1))

removeQuanity(chess, user1, 2)
printCart(user1)
console.log(calcTotal(user1))