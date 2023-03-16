import { createHTML } from "./create-html.js"

const mainContainer = document.querySelector("main")

const renderAllHTML = () => {
    mainContainer.innerHTML = createHTML()
}

renderAllHTML()