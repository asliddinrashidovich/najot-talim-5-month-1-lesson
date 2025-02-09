import { nextFunc } from "./function.js"
import { prevFunc } from "./function.js"

let next = document.getElementById('next')
let prev = document.getElementById('prev')

next.addEventListener('click', ()=> {
    nextFunc()
})
prev.addEventListener('click', ()=> {
    prevFunc()
})
setInterval(()=> {
    nextFunc()
}, 2500)