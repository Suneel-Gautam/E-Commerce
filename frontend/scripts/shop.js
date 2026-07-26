import { productCard } from "../components/product.js";
import { products } from "../components/product.js";


const cards = document.querySelector('.cards')



let card = ""
products.forEach((item) => (
    card += productCard(
        item.image,
        item.category,
        item.title,
        item.tags,
        item.description,
        item.price,
    )))

cards.innerHTML = card




