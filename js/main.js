
let counter = 5;

alert('This is version 3');


function timer () {
    counter++;
    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}

//

