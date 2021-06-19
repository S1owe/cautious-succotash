
let counter = 0;
let check = null;

alert('This is newBranch');


function timer () {
    counter++;

    if (counter === 3) {
        check = true;
        console.log(check);
    }

    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}


