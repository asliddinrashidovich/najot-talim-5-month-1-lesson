const count = document.getElementById('count');

export function decreaseFunc() {
    i--
    count.innerHTML = i
}
export function increaseFunc() {
    i++
    count.innerHTML = i
}
export function resetFunc() {
    i = 0
    count.innerHTML = i
}