
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




