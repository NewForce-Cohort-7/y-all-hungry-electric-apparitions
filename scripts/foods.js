import { getFood, setFood, getFoodStock, getOrderBuilder } from "./database.js"
import { getDrinkPrice } from "./drinks.js"
import { getDessertPrice } from "./desserts.js"

const arrayOfFood = getFood()

export const generateFoodHTML = () => {
    let html = `<select id="foods">
    <option value="0">Pick Your Dawg</option>`

    const arrayOfOptions = arrayOfFood.map(food => {

        const arrayOfFoodStock = getFoodStock()
        const currentOrder = getOrderBuilder()


        for (const foodStock of arrayOfFoodStock) {
            let matchingId = null
            let matchingQuantity = 0
            if (foodStock.locationId === currentOrder.locationId && foodStock.quantity > 0) {
                matchingId = foodStock.foodId
                matchingQuantity = foodStock.quantity
            }
            if (matchingId === food.id) {
                if (matchingQuantity === 1000) {
                    return `<option value="${food.id}">${food.name}`
                } else {
                    return `<option value="${food.id}">${food.name} - ${matchingQuantity} in stock</option>`
                }
            }
        }
    })
    html += arrayOfOptions.join("")
    html += `</select>`

    return html
}

let foodPrice = 0

export const getFoodPrice = () => {
    return foodPrice
}

document.addEventListener("change", (event) => {
    if (event.target.id === "foods") {
        let matchedFood = null
        for (const singleFood of arrayOfFood) {
            if (singleFood.id === parseInt(event.target.value)) {
                matchedFood = singleFood
                setFood(singleFood.id)
            }
        }

        foodPrice = matchedFood.price
        const drinkPrice = getDrinkPrice()
        const dessertPrice = getDessertPrice()
        const currentSubtotal = foodPrice + drinkPrice + dessertPrice
        let subtotalString = currentSubtotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        })

        let priceString = matchedFood.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        })

        //if food is selected, display hot dog name
        if (matchedFood !== null) {
            document.querySelector('#food-order').innerHTML = `
            <img class="hot_dog" style="width:100px" src="${matchedFood.img}" alt="hotdog">
            <div class="food-name">${matchedFood.name}</div> 
            <div class="food-price">${priceString}</div> 
            <div class="food-desc">${matchedFood.desc}</div> `
        }

        //if null, order-food is blank
        else { document.querySelector('#food-order').innerHTML = '' }

        document.querySelector('#subtotal').innerHTML = `Subtotal: ${subtotalString}`
    }
})