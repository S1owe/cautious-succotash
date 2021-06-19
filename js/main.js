
let counter = 0;
let check = null;

alert('This is fixBug');


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



//

