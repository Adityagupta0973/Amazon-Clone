import { TrendingDeals } from "./TrendingDeals.js";
console.log(TrendingDeals)

let blockbusters_deal_product_listEl = document.querySelector(".blockbusters_deal_product_list")
console.log(blockbusters_deal_product_listEl)

let blockbuster_deal_productHTML = ""
let blockbuster_deal_product_length = TrendingDeals.length
for(let i = 0 ; i < blockbuster_deal_product_length  ; i++ ){
    // console.log(TrendingDeals[i])
    blockbuster_deal_productHTML += `
    <div class="blockbusters_deals_product_item">
                    <img src=${TrendingDeals[i].img}>
                    <div class="discount_container">
                        <a href="a"> ${TrendingDeals[i].discount} </a> 
                        <a href="a"> ${TrendingDeals[i].GreatIndianFestival} </a>
                    </div>
                    <div class="alt">
                        <p> ${TrendingDeals[i].desc} </p>
                    </div>
                </div>
    `
}
blockbusters_deal_product_listEl.innerHTML = blockbuster_deal_productHTML
// console.log(blockbuster_deal_productHTML)
let blockbuster_deals_button_prevEl = document.getElementById("blockbuster_deals_button_prev")
let blockbuster_deals_button_nextEl = document.getElementById("blockbuster_deals_button_next")
let blockbusters_deals_product_itemEl = document.querySelectorAll(".blockbusters_deals_product_item")

let startTrendingDeals = 0;
blockbuster_deals_button_prevEl.addEventListener("click",()=>{
    // alert("preve")
    
    if(startTrendingDeals < 0) {
        startTrendingDeals += 300;
    }
    if(startTrendingDeals > -1500) {
        blockbusters_deals_product_itemEl.forEach(e1 => {
            e1.style.transform=`translateX(${startTrendingDeals}%)`
        })
    }
})

blockbuster_deals_button_nextEl.addEventListener("click",()=>{
    // alert("next")
    
    if(startTrendingDeals > -900) {
        startTrendingDeals -= 300;    
    }
    blockbusters_deals_product_itemEl.forEach(e1 => {
        e1.style.transform=`translateX(${startTrendingDeals}%)`
    })
    
})