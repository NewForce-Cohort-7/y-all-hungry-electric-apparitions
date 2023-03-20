import { getFood, getDrinks, getDesserts, getOrders, getFoodStock } from "./database.js"

const foods = getFood()
const drinks = getDrinks()
const desserts = getDesserts()


const buildOrderListItem = (order) => {

    const foundFood = foods.find(
        (food) => {
            return food.id === order.foodId
        })

    const foundDrink = drinks.find(
        (drink) => {
            return drink.id === order.drinkId
        }
    )

    const foundDessert = desserts.find(
        (dessert) => {
            return dessert.id === order.dessertId
        }
    )

    //conditional that makes sure a food, drink, and dessert have been selected. otherwise, request selection from user and refresh
    if(!foundFood || !foundDrink || !foundDessert){
        window.alert('Please select an option from each dropdown menu before submitting an order.')
        location.reload()
        return
    }

    let totalCost = (foundFood.price + foundDrink.price + foundDessert.price) * 1.06

       //conditional that makes sure cost exceeds .99
       if(totalCost < 1){
        window.alert('Please select at least one item for your order.')
        location.reload()
        return
    }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
            Order #${order.id} total: ${costString} (incl tax)
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}