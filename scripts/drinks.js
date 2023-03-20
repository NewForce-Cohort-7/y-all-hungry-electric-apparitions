import { getDrinks, setDrink, getDrinkStock, getOrderBuilder} from "./database.js"
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

    const arrayOfOptions = drinks.map(drink => {

        const arrayOfDrinkStock = getDrinkStock()
        const currentOrder = getOrderBuilder()

        for(const drinkStock of arrayOfDrinkStock) {
            let matchingId = null
            let matchingQuantity = null
            if(drinkStock.locationId === currentOrder.locationId && drinkStock.quantity > 0){
                matchingId = drinkStock.drinkId}
            if( matchingId === drink.id){
                return `<option value="${drink.id}">${drink.name}</option>`
            }
        }
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
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

        let priceString = matchedDrink.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        })

        //if location is selected, display address
        if(matchedDrink !== null){
            document.querySelector('#drink-order').innerHTML = `${matchedDrink.name} - ${priceString}`
        }

        //if null, order-location is blank
        else{document.querySelector('#drink-order').innerHTML = ''}
    }
})
