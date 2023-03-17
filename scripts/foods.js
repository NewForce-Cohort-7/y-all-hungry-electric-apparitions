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

    document.addEventListener("change", (event) => {
        if (event.target.id === "foods") {
            let matchedFood = null
            for(const singleFood of arrayOfFood){
                if(singleFood.id === parseInt(event.target.value)){
                    matchedFood = singleFood.name
                    console.log(matchedFood)
                }
            }
    
            //if food is selected, display hot dog name
            if(matchedFood !== null){
                document.querySelector('#food-order').innerHTML = `${matchedFood}`
            }
    
            //if null, order-food is blank
            else{document.querySelector('#food-order').innerHTML = ''}
        }
    })





