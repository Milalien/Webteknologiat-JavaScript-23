window.onload = function () {

    let luku1 = getRandomInt(11);
    let luku2 = getRandomInt(11);
    console.log("num 1 is " + luku1);
    console.log("num 2 is " + luku2);

    document.getElementById('luku1').value = luku1;
    document.getElementById('luku2').value = luku2;

    luku1 = document.getElementById('luku1').value1;
    luku2 = document.getElementById('luku2').value2;
}

function Calculate() {
    luku1 = document.getElementById('luku1').value;
    let num1 = parseInt(luku1);
    luku2 = document.getElementById('luku2').value;
    let num2 = parseInt(luku2);
    let num = num1 + num2;
    document.getElementById('tulos').value = num.toString();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}