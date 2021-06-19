
let counter = 0;

alert('This is newBranch');


function timer () {
    counter++;
    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}


