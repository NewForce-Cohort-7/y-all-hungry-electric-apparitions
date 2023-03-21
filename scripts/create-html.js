import { Desserts } from "./desserts.js"
import { createLocationList } from "./locations.js"
import { generateFoodHTML } from "./foods.js"
import { Drinks } from "./drinks.js"
import { Orders } from "./orders.js"
import { completeOrder} from "./database.js"
import { reduceQuantities } from "./stock.js"

document.addEventListener("click",
    (event) => {
        if (event.target.id.startsWith("orderButton")) {
            reduceQuantities()
            completeOrder()
        }
    })

export const createHTML = () => {

    return `
        
    <div class = 'menu'>
    <article>
        <class='options__locations' "form-select mx-auto" style="width: 250px;">
            <h2>Locations</h2>
            <h6>Please select a location first to view the items available<h6>
            ${createLocationList()}
        </article>
        <article id='options__foods' class='me'>
            <h2>Foods</h2>
            ${generateFoodHTML()}
        </article>
        
        <article id='options__drinks' class='me'>
            ${Drinks()}
        </article>
        
        <article id='options__desserts' class='me'>
            <h2>Desserts</h2>
            ${Desserts()}
        </article>
        </div>

        <article id="currentOrder">
            <h2> Current Order </h2>
            <section id='order-location'></section>
            <div id="card-container" class="row justify-content-center align-items-center">
                <section id="food-order" class="col w-2 h-2 m-4 p-1"></section>
                <section id="drink-order" class="col w-2 m-4 p-1"></section>
                <section id="dessert-order" class="col w-2 m-4 p-1"></section>
            </div>
        </article>
     
        <div class=final>
        <article>
            <div id='subtotal'></div>
            <button id="orderButton" class="btn btn-lg btn-light">Place Order</button>
        </article>

        <article id="orders">
            <h2>Orders</h2>
            ${Orders()}
        </article>
        </div>
    `
}