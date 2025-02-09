const count = document.getElementById('count');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');

let i = 0;

decrease.addEventListener('click', ()=> {
    i--
    count.innerHTML = i
})
increase.addEventListener('click', ()=> {
    i++
    count.innerHTML = i
})
reset.addEventListener('click', ()=> {
    i = 0
    count.innerHTML = i
})
