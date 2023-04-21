let clicks = 0;

window.onload = function () {
    document.getElementById("gif").style.display = "none";
    document.getElementById("count").innerHTML = clicks;
}

function Search() {
    clicks++;
    document.getElementById("count").innerHTML = clicks;
    document.getElementById("gif").style.display = "block";

    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result.value);
            document.getElementById("gif").style.display = "none";
            let data = '<div class="accordion-item">'
                + '<h2 class="accordion-header" id="heading' + clicks + '">'
                + '<button id="accordionButton' + clicks + '" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + clicks + '" aria-expanded="false" aria-controls="collapse' + clicks + '">'
                + '</button>'
                + '</h2>'
                + '<div id="collapse' + clicks + '" class="accordion-collapse collapse" aria-labelledby="heading' + clicks + '" data-bs-parent="#accordionExample">'
                + '<div class="accordion-body" id="joke' + clicks + '">'
                + '</div></div></div>';
            if (result.value) {
                document.getElementById("myAccordion").innerHTML += data;
                document.getElementById("joke" + clicks).innerHTML = result.value;
                document.getElementById("accordionButton" + clicks).innerHTML = "Haku " + clicks;
            } else {
                document.getElementById("joke" + clicks).innerHTML += "<br>" + "<i>" + result.value + "</i>";
            }
        })
        .catch(function (error) {
            //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
            console.log(error);
        })
};