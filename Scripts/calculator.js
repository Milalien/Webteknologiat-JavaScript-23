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
let num;
let option;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function AddToNum1() {
    document.getElementById('luku1').value = parseInt(document.getElementById('luku1').value) + 1;
}
function AddToNum2() {
    document.getElementById('luku2').value = parseInt(document.getElementById('luku2').value) + 1;
}
function SubtractFromNum1() {
    document.getElementById('luku1').value = parseInt(document.getElementById('luku1').value) - 1;
}
function SubtractFromNum2() {
    document.getElementById('luku2').value = parseInt(document.getElementById('luku2').value) - 1;
}

function Calculate() {
    luku1 = document.getElementById('luku1').value;
    let num1 = parseInt(luku1);
    luku2 = document.getElementById('luku2').value;
    let num2 = parseInt(luku2);

    option = document.getElementById("select").value;
    if (option == 1) {
        num = num1 + num2;
    } else if (option == 2) {
        num = num1 - num2;
    } else if (option == 3) {
        num = num1 / num2;
    } else if (option == 4) {
        num = num1 * num2;
    } else {
        return console.log("error: check operator");
    }
    document.getElementById('tulos').value = num.toString();
}
