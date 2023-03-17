import { createLocationList } from "./locations.js"
import { generateFoodHTML } from "./foods.js"



export const createHTML = () => {

    return `
        <h1>Ya'll Hungry!?</h1>

        <article id='locations'>
            <h2>Locations</h2>
            ${createLocationList()}
        </article>
        
        <article id='foods'>
            <h2>Foods</h2>
            ${generateFoodHTML()}
        </article>
        
        <article id='drinks'>
            <h2>Drinks</h2>
            *PUT DRINK DROPDOWN HERE*
        </article>
        
        <article id='desserts'>
            <h2>Desserts</h2>
            *PUT DESSERT DROPDOWN HERE*
        </article>
     
        <article>
            <button id="orderButton">Place Order</button>
        </article>

        <article id='order-location'>
        </article>

        <article id="orders">
            <h2>Orders</h2>
            *PUT ORDERS LIST HERE*
        </article>
    `
}