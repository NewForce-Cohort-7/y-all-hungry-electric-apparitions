import { getDrinks, setDrink, getDrinkStock, getOrderBuilder} from "./database.js"
import { getFoodPrice } from "./foods.js"
import { getDessertPrice } from "./desserts.js"

const drinks = getDrinks()


document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "drinks") {
            setDrink(parseInt(clickEvent.target.value))
        }
    }
)

export const Drinks = () => {
    let html = "<h2>Drinks</h2>"

    html += '<select id="drinks">'
    html += '<option value="0">Select a drink</option>'

    const arrayOfOptions = drinks.map((drink) => {

        const arrayOfDrinkStock = getDrinkStock()
        const currentOrder = getOrderBuilder()

        for(const drinkStock of arrayOfDrinkStock) {
            let matchingId = null
            let matchingQuantity = 0
            if(drinkStock.locationId === currentOrder.locationId && drinkStock.quantity > 0){
                matchingId = drinkStock.drinkId
                matchingQuantity = drinkStock.quantity}
            if( matchingId === drink.id){
                if (drink.id === 99) {
                return `<option value="${drink.id}">${drink.name}`
            } else {
                return `<option value="${drink.id}">${drink.name} - ${matchingQuantity} in stock</option>`
            }
        }
    }
})

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

let drinkPrice = 0

export const getDrinkPrice = () => {
    return drinkPrice
}

document.addEventListener("change", (event) => {
    if (event.target.id === "drinks") {
        let matchedDrink = null
        for(const singleDrink of drinks){
            if(singleDrink.id === parseInt(event.target.value)){
                matchedDrink = singleDrink
                setDrink(singleDrink.id)
            }
        }

        drinkPrice = matchedDrink.price
        const foodPrice = getFoodPrice()
        const dessertPrice = getDessertPrice()
        const currentSubtotal = foodPrice + drinkPrice + dessertPrice
        let subtotalString = currentSubtotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        })


        let priceString = matchedDrink.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        })

        //if location is selected, display address
        if(matchedDrink !== null){
            document.querySelector('#drink-order').innerHTML = `${matchedDrink.name} - ${priceString}`
        }

        //if null, order-location is blank
        else{document.querySelector('#drink-order').innerHTML = ''}

        document.querySelector('#subtotal').innerHTML = `Subtotal: ${subtotalString}`
    }
})
