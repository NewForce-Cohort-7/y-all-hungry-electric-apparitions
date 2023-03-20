import { getFood, getDrinks, getDesserts, getOrders, getFoodStock } from "./database.js"

const foods = getFood()
const drinks = getDrinks()
const desserts = getDesserts()

const buildOrderListItem = (order) => {

    const foundFood = foods.find(
        (food) => {
            return food.id === order.foodId
        }
    )

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

    // const foodStock = getFoodStock()

    // const foundFoodStock = foodStock.find(
    //     (stock) => {
    //         return stock.id === stock.foodId
    //     }
    // )

    // foundFoodStock.quantity--

    let totalCost = (foundFood.price + foundDrink.price + foundDessert.price) * 1.06

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