
let counter = 5;

function timer () {
    counter++;
    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}

//

