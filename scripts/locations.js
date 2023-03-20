import { getLocations, setLocation, getOrderBuilder } from "./database.js"
const arrayOfLocations = getLocations()

export const createLocationList = () => {
    let html = `<select id="dropdown-locations">
                    <option value="0">Select a Location</option>`

    // Use .map() for converting objects to <option> elements
    const listItemsArray = arrayOfLocations.map(location => {

        const currentOrder = getOrderBuilder()

        if (location.id === currentOrder.locationId) {
            return `<option value="${location.id}" selected>${location.name}</option>`
        }

        else { return `<option value="${location.id}">${location.name}</option>` }
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"

    return html
}

document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-locations") {
        let matchedLocation = null
        for (const singleLocation of arrayOfLocations) {
            if (singleLocation.id === parseInt(event.target.value)) {
                matchedLocation = singleLocation.address
                console.log(matchedLocation)
                setLocation(singleLocation.id)
            }
        }

        //if location is selected, display address
        if (matchedLocation !== null) {
            document.querySelector('#order-location').innerHTML = `You're picking up your order at ${matchedLocation}`
        }

        //if null, order-location is blank
        else { document.querySelector('#order-location').innerHTML = '' }
    }
})
