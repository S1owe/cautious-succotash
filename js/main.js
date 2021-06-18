
let counter = 2;

function timer () {
    counter++;
    console.log('counter = ' + counter);
    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}

//

