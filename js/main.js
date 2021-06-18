
let counter = 0;

function timer () {
    counter++;
    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}

//

