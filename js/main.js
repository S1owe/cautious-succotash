
let counter = 0;

alert('This is newBranch');


function timer () {
    counter++;

    if (counter === 10) {
        alert('The end!');
        return 0;
    }

    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}


