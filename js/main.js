let countClick = 0;

function onloadFunc(){
    let el = document.getElementById('clickEl');
    let elem = document.getElementById('elem');
    elem.addEventListener("click", handler1); // Спасибо!
    el.addEventListener("click", numFunc);
}

function numFunc() {
    countClick++;
    console.log('count = ' + countClick);
}

function handler1() {
    alert('Спасибо!');
};



