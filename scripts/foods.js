import { getFood, setFood, getFoodStock, getOrderBuilder } from "./database.js"

const arrayOfFood = getFood()

export const generateFoodHTML = () => {
    let html = `<select id="foods">
    <option value="0">Pick Your Dawg</option>`

    const arrayOfOptions = arrayOfFood.map(food => {

        const arrayOfFoodStock = getFoodStock()
        const currentOrder = getOrderBuilder()


        for (const foodStock of arrayOfFoodStock) {
            let matchingId = null
            let matchingQuantity = null
            if (foodStock.locationId === currentOrder.locationId && foodStock.quantity > 0) {
                matchingId = foodStock.foodId
            }
            if (matchingId === food.id) {
                
                return `<option value="${food.id}">${food.name}</option>`
            }

        }
    }
    )
    html += arrayOfOptions.join("")
    html += `</select>`

    return html
}

document.addEventListener("change", (event) => {
    if (event.target.id === "foods") {
        let matchedFood = null
        for (const singleFood of arrayOfFood) {
            if (singleFood.id === parseInt(event.target.value)) {
                matchedFood = singleFood.name
                console.log(matchedFood)
            }
        }

        //if food is selected, display hot dog name
        if (matchedFood !== null) {
            document.querySelector('#food-order').innerHTML = `${matchedFood}`
        }

        //if null, order-food is blank
        else { document.querySelector('#food-order').innerHTML = '' }
    }
}
)



