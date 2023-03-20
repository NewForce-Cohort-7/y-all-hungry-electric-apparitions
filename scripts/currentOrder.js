import { getOrderBuilder, getLocations, getFood, getDrinks, getDesserts } from "./database.js"

const arrayOfLocations = getLocations()
const arrayOfFood = getFood()
const arrayOfDrinks = getDrinks()
const arrayOfDesserts = getDesserts()

export const createCurrentOrderHTML = () => {

    const currentOrder = getOrderBuilder()

    const currentLocation = arrayOfLocations.find((obj) => {
        return obj.id === currentOrder.locationId
    })

    const currentFood = arrayOfFood.find((obj) => {
        return obj.id === currentOrder.foodId
    })

    const currentDrink = arrayOfDrinks.find((obj) => {
        return obj.id === currentOrder.drinkId
    })

    const currentDessert = arrayOfDesserts.find((obj) => {
        return obj.id === currentOrder.dessertId
    })

    let HTMLString =  `<h2> Current Order </h2>`

    if (currentLocation !== undefined){
        HTMLString += `<section id='current-order-location'>${currentLocation.address}</section>`
    }   

    if (currentFood !== undefined){
        HTMLString += `<section id="current-order-food">${currentFood.name}</section>`
    }
    
    if (currentDrink !== undefined){
        HTMLString += `<section id="current-order-drink">${currentDrink.name}</section>`
    }
                
    if (currentDessert !== undefined){
        HTMLString += `<section id="current-order-dessert">${currentDessert.name}</section>`
    }

    if (subtotal !== undefined){
        HTMLString += `<section id="current-order-subtotal">${subtotal}</section>`
    }

    return HTMLString


}