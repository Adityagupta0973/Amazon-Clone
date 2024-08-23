import { ShopDeals } from "./ShopDeals.js";
console.log(ShopDeals)

let shopdealsProductListEl = document.querySelectorAll(".shopdeals_product_list")
console.log(shopdealsProductListEl)

let shopdealsHTML = ""
let shopdealslength = ShopDeals.length
for(let i = 0 ; i < shopdealslength ; i++ ){
    // console.log(ShopDeals[i])
    shopdealsHTML += `<img src=${ShopDeals[i].img}>`;
}
shopdealsProductListEl.innerHTML = shopdealsHTML
// console.log(shopdealsHTML)

let shopdeals_button_prevEl = document.getElementById("shopdeals_button_prev")
let shopdeals_button_nextEl = document.getElementById("shopdeals_button_next")

let startshopdeals = 0;
shopdeals_button_prevEl.addEventListener("click",()=>{
   // alert("preve")
    if(startshopdeals < 0){
        startshopdeals += 30
    }
    

    if(startshopdeals > -260){
        shopdealsProductListEl.forEach(e1 => {
            e1.style.transform = `translate(${startshopdeals}%)`
        })
    }
})

shopdeals_button_nextEl.addEventListener("click",()=>{
    // alert("next")
    
    if(startshopdeals > -40){
        startshopdeals -= 30
    }
    shopdealsProductListEl.forEach(e1 => {
        e1.style.transform = `translate(${startshopdeals}%)`
    })
})