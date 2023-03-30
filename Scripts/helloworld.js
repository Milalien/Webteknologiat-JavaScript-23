window.onload = function () {
    console.log("Näkyykö konsolissa?");
}
function sayHelloTo(name) {
    alert("Hey " + name + "!");
    console.log("sayHello-functio completed");
}

document.getElementById('hello-div').innerHTML = "Welcome";