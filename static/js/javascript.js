import { smartwatches } from "./smartwatches.js"

console.log(smartwatches)
let smartwatchesProductListEl = document.querySelectorAll(".smartwatches_product_list")
console.log(smartwatchesProductListEl)

let smartwatchesHTML = ""
let smartwatcheslength = smartwatches.length
for(let i = 0 ; i < smartwatcheslength ; i++ ){
    // console.log(smartwatches[i])
    smartwatchesHTML += `<img src=${smartwatches[i].img}>`;
}
smartwatchesProductListEl.innerHTML = smartwatchesHTML
// console.log(smartwatchesHTML)

let smartwatches_button_prevEl = document.getElementById("smartwatches_button_prev")
let smartwatches_button_nextEl = document.getElementById("smartwatches_button_next")

let startSmartwatches = 0;
smartwatches_button_prevEl.addEventListener("click",()=>{
    // alert("preve")
    if(startSmartwatches < 0){
        startSmartwatches += 24
    }
    

    if(startSmartwatches > -280){
        smartwatchesProductListEl.forEach(e1 => {
            e1.style.transform = `translate(${startSmartwatches}%)`
        })
    }
})

smartwatches_button_nextEl.addEventListener("click",()=>{
    // alert("next")
    
    if(startSmartwatches > -65){
        startSmartwatches -= 24
    }
    smartwatchesProductListEl.forEach(e1 => {
        e1.style.transform = `translate(${startSmartwatches}%)`
    })
})