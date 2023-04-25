let koko;
let hinta;
window.onload = function () {
    koko = document.getElementById("koko").value;
    if (koko == 1) {
        hinta = 6;
    } else if (koko == 2) {
        hinta = 12;
    } else { hinta = 0; }
    document.getElementById("hintaYht").textContent = hinta.toString();
}

function price() {

    koko = document.getElementById("koko").value;
    if (koko == 1) {
        hinta = 6;
    } else if (koko == 2) {
        hinta = 12;
    } else { hinta = 0; }
    if (document.getElementById("c1").checked) {
        hinta += 2;
    }
    if (document.getElementById("c2").checked) {
        hinta += 2;
    }
    if (document.getElementById("c3").checked) {
        hinta += 2;
    }
    if (document.getElementById("c4").checked) {
        hinta += 2;
    }
    if (document.getElementById("c5").checked) {
        hinta += 2;
    }
    document.getElementById("hintaYht").value = hinta.toString();
}

