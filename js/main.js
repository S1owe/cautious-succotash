
let count = counting_2(6);

alert('This is newBranch');

function counting_2(n) {
    return ((2^n) + (2^n))
}

let counter = 0;
let check = null;

function timer () {
    counter++;

    if (counter === 3) {
        check = true;
        console.log(check);
    }


    if (counter === 100 ) {
        console.log('This is 100');
        return 0;
    }

    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}




