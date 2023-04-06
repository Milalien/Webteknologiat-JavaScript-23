let pics_array =
    [
        { "name": "Cherry tree", "src": "Images/cherry.jpg" },
        { "name": "Forest", "src": "Images/forest.jpg" },
        { "name": "Tree", "src": "Images/tree.jpg" }
    ];

let index = 0;
let interval;

window.onload = function () {
    document.getElementById("pic").src = pics_array[index].src;
}

function Previous() {
    if (index == 0) {
        index = pics_array.length - 1;
    } else {
        index -= 1;
    }

    document.getElementById("pic").src = pics_array[index].src;
    document.getElementById("p").textContent = pics_array[index].name;
}
function Next() {
    if (index == pics_array.length - 1) {
        index = 0;
    } else {
        index += 1;
    }

    document.getElementById("pic").src = pics_array[index].src;
    document.getElementById("p").textContent = pics_array[index].name;
}



function Play() {
    if (interval == null) {
        interval = window.setInterval(Next, 2000);
    }

}
function Stop() {
    window.clearInterval(interval);
}
