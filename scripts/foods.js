import { getFood} from "./database.js"

const arrayOfFood = getFood()




export const generateFoodHTML = () => {
    let html = `<select id="foods">
    <option value="0">Pick Your Dawg</option>`

   
    for (const foodObject of arrayOfFood) {
        html +=  `<option value="${foodObject.id}"> ${foodObject.name}</option>`
    }

    html += `</select>`
   
    return html
}