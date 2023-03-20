import { getDesserts, setDessert } from "./database.js"

const desserts = getDesserts()

export const Desserts = () => {


   let html = '<select id="desserts">'
    html += '<option value="0">Select a dessert</option>'
    
    const arrayOfOptions = desserts.map( (dessert) => {
        return `<option value="${dessert.id}">${dessert.name}</option>`
    })

    // Join all of the strings in the array into a single string
    html += arrayOfOptions.join("")
    html += "</select>"

    return html
}

document.addEventListener("change", (event) => {
    if (event.target.id === "desserts") {
        let matchedDessert = null
        for(const singleDessert of desserts){
            if(singleDessert.id === parseInt(event.target.value)){
                matchedDessert = singleDessert.name
                console.log(matchedDessert)
                setDessert(singleDessert.id)
            }
        }

        //if location is selected, display address
        if(matchedDessert !== null){
            document.querySelector('#dessert-order').innerHTML = `${matchedDessert}`
        }

        //if null, order-location is blank
        else{document.querySelector('#dessert-order').innerHTML = ''}
    }
})