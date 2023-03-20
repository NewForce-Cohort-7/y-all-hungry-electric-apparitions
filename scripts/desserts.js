import { getDesserts, setDessert, getDessertStock, getOrderBuilder } from "./database.js"

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
    
    const arrayOfOptions = desserts.map( (dessert) => {
    
        const arrayOfDessertStock = getDessertStock()
        const currentOrder = getOrderBuilder()

        for(const dessertStock of arrayOfDessertStock) {
            let matchingId = null
            let matchingQuantity = null
            if(dessertStock.locationId === currentOrder.locationId && dessertStock.quantity > 0){
                matchingId = dessertStock.dessertId}
            if( matchingId === dessert.id){
                return `<option value="${dessert.id}">${dessert.name}</option>`
            }
        }
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

document.addEventListener("change", (event) => {
    if (event.target.id === "desserts") {
        let matchedDessert = null
        for(const singleDessert of desserts){
            if(singleDessert.id === parseInt(event.target.value)){
                matchedDessert = singleDessert
                setDessert(singleDessert.id)
            }
        }
        
        let priceString = matchedDessert.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        })
        //if location is selected, display address
        if(matchedDessert !== null){
            document.querySelector('#dessert-order').innerHTML = `${matchedDessert.name} - ${priceString}`
        }
        
        //if null, order-location is blank
        else{document.querySelector('#dessert-order').innerHTML = ''}
        }
        })
        
    

//     // Join all of the strings in the array into a single string
//     html += arrayOfOptions.join("")
//     html += "</select>"

//     return html
// }

// document.addEventListener("change", (event) => {
//     if (event.target.id === "desserts") {
//         let matchedDessert = null
//         for(const singleDessert of desserts){
//             if(singleDessert.id === parseInt(event.target.value)){
//                 matchedDessert = singleDessert.name
//                 console.log(matchedDessert)
//             }
//         }
