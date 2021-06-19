let countClick = 0;

function onloadFunc(){
    let el = document.getElementById('clickEl');
    let elem = document.getElementById('elem');
    elem.addEventListener("click", handler1); // Спасибо!
    el.addEventListener("click", numFunc);

    timer();
}

function numFunc() {
    countClick++;
    console.log('count = ' + countClick);
}

function handler1() {
    alert('Спасибо!');
};


let count = counting_2(6);

function counting_2(n) {
    return ((2^n) + (2^n))
}

console.log("count = " + count);

let counter = 0;

function timer() {
    counter++;

    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}

