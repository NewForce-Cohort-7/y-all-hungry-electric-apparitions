import { getDrinks, setDrinks } from "./database.js"

const drinks = getDrinks()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "drinks") {
            setDrinks(parseInt(clickEvent.target.value))
        }
    }
)

export const Drinks = () => {
    let html = "<h2>Drinks</h2>"

    html += '<select id="drinks">'
    html += '<option value="0">Select a drink</option>'

    const arrayOfOptions = drinks.map( (drink) => {
            return `<option value="${drink.id}">${drink.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

document.addEventListener("change", (event) => {
    if (event.target.id === "drinks") {
        let matchedDrink = null
        for(const singleDrink of drinks){
            if(singleDrink.id === parseInt(event.target.value)){
                matchedDrink = singleDrink.name
                console.log(matchedDrink)
            }
        }

        //if location is selected, display address
        if(matchedDrink !== null){
            document.querySelector('#drink-order').innerHTML = `${matchedDrink}`
        }

        //if null, order-location is blank
        else{document.querySelector('#drink-order').innerHTML = ''}
    }
})
