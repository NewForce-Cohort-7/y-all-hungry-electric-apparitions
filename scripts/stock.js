import { getOrderBuilder, getFoodStock, reduceFoodQuantity } from "./database.js"

// function to reduce quantities of food stock every time a food item is ordered with the complete order button
export const reduceQuantities = () => {
    const currentOrder = getOrderBuilder()
    const arrayOfFoodStock = getFoodStock()
    for(const singleFoodStock of arrayOfFoodStock){
        if(singleFoodStock.locationId === currentOrder.locationId && singleFoodStock.foodId === currentOrder.foodId){
            reduceFoodQuantity(singleFoodStock.id)
        }
    }
}
