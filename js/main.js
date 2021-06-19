
let counter = 5;

alert('This is main');


function timer () {
    counter++;

    if (counter === 100 ) {
        console.log('This is 100');
        return 0;
    }

    document.getElementById("count").innerHTML = counter;
    setTimeout(timer, 1000)
}


