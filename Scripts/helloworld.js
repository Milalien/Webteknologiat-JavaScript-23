window.onload = function () {
    console.log("Näkyykö konsolissa?");
}
function sayHelloTo(name) {
    alert("Hei " + name + "!");
    console.log("sayHello-functio suoritettu");
}

document.getElementById('hello-div').innerHTML = "Tervetuloa";