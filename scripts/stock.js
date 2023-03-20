import { getOrderBuilder, getFoodStock, reduceFoodQuantity, getDrinkStock, reduceDrinkQuantity } from "./database.js"

// function to reduce quantities of food stock every time a food item is ordered with the complete order button
export const reduceQuantities = () => {
    const currentOrder = getOrderBuilder()
    const arrayOfFoodStock = getFoodStock()
    for(const singleFoodStock of arrayOfFoodStock){
        if(singleFoodStock.locationId === currentOrder.locationId && singleFoodStock.foodId === currentOrder.foodId){
            reduceFoodQuantity(singleFoodStock.id)
        }
    }
    const arrayOfDrinkStock = getDrinkStock()
    for (const singleDrinkStock of arrayOfDrinkStock) {
        if (singleDrinkStock.locationId === currentOrder.locationId && singleDrinkStock.drinkId === currentOrder.drinkId) {
            reduceDrinkQuantity(singleDrinkStock.id)
        }
    }
}
