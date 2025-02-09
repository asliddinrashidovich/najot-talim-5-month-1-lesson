let i = 0;
let images = document.querySelectorAll('img')


export function nextFunc() {
    images[i].classList.add('hidden');
    i++
    if(i >= images.length) {
        i = 0;
    }
    images[i].classList.remove('hidden');
}

export function prevFunc() {
    images[i].classList.add('hidden');
    i--
    if(i < 0) {
        i = images.length - 1;
    }
    images[i].classList.remove('hidden');
}

