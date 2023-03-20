import { getDesserts, setDessert, getDessertStock, getOrderBuilder } from "./database.js"
import { getFoodPrice } from "./foods.js"
import { getDrinkPrice } from "./drinks.js"


const desserts = getDesserts()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "desserts") {
            setDessert(parseInt(clickEvent.target.value))
        }
    }
)

export const Desserts = () => {


    let html = '<select id="desserts">'
    html += '<option value="0">Select a dessert</option>'

    const arrayOfOptions = desserts.map((dessert) => {

        const arrayOfDessertStock = getDessertStock()
        const currentOrder = getOrderBuilder()

        for (const dessertStock of arrayOfDessertStock) {
            let matchingId = null
            let matchingQuantity = 0
            if (dessertStock.locationId === currentOrder.locationId && dessertStock.quantity > 0) {
                matchingId = dessertStock.dessertId
                matchingQuantity = dessertStock.quantity
            }
            if (matchingId === dessert.id) {
                if (matchingQuantity === 1000) {
                    return `<option value="${dessert.id}">${dessert.name}</option>`
                } else {
                    return `<option value="${dessert.id}">${dessert.name} - ${matchingQuantity} in stock</option>`
                }
            }
        }
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

let dessertPrice = 0

export const getDessertPrice = () => {
    return dessertPrice
}

document.addEventListener("change", (event) => {
    if (event.target.id === "desserts") {
        let matchedDessert = null
        for (const singleDessert of desserts) {
            if (singleDessert.id === parseInt(event.target.value)) {
                matchedDessert = singleDessert
                setDessert(singleDessert.id)
            }
        }

        dessertPrice = matchedDessert.price
        const foodPrice = getFoodPrice()
        const drinkPrice = getDrinkPrice()
        const currentSubtotal = foodPrice + drinkPrice + dessertPrice
        let subtotalString = currentSubtotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        })

        let priceString = matchedDessert.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        })
        //if location is selected, display address
        if(matchedDessert !== null){
            document.querySelector('#dessert-order').innerHTML = `
            <img class="dessert" style="width:100px" src="${matchedDessert.img}" alt="dessert">
            <div class="dessert-name">${matchedDessert.name}</div> 
            <div class="dessert-price">${priceString}</div> 
            <div class="dessert-desc">${matchedDessert.desc}</div> `
        }
        
        
        //if null, order-location is blank
        else { document.querySelector('#dessert-order').innerHTML = '' }

        document.querySelector('#subtotal').innerHTML = `Subtotal: ${subtotalString}`
    }
})
