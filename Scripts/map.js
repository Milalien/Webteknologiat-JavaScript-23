window.onload = function () {

}
function haku() {
    let address = document.getElementById('osoite').value;
    let city = document.getElementById('kaupunki').value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('maps');
    iframeElement.src = place;
}