import { Desserts } from "./desserts.js"
import { createLocationList } from "./locations.js"
import { generateFoodHTML } from "./foods.js"
import { Drinks } from "./drinks.js"
import { Orders } from "./orders.js"
import { completeOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
             
        const itemClicked = event.target

        if (itemClicked.id.startsWith("orderButton")) {

            completeOrder()
        }
    }
)



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
            ${Drinks()}
        </article>
        
        <article id='desserts'>
            <h2>Desserts</h2>
            ${Desserts()}
        </article>

        <article id="current-order">
        </article>

        <article id="currentOrder">
            <h2> Current Order </h2>
            <section id='order-location'></section>
            <section id="food-order"></section>
            <section id="drink-order"></section>
            <section id="dessert-order"></section>
        </article>
     
        <article>
            <button id="orderButton">Place Order</button>
            <div id='subtotal'></div>
        </article>



        <article id="orders">
            <h2>Orders</h2>
            ${Orders()}
        </article>

     
        
        
     
    `

}