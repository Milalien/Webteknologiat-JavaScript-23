let pics_array =
    [
        { "name": "Kirsikkapuu", "src": "Images/cherry.jpg" },
        { "name": "Metsä", "src": "Images/forest.jpg" },
        { "name": "Puu", "src": "Images/tree.jpg" }
    ];

let index = 0;
let interval;

window.onload = function () {
    if (localStorage.hasOwnProperty('myPic')) { index = localStorage.getItem('myPic'); }
    document.getElementById("pic").src = pics_array[index].src;
    document.getElementById("p").textContent = pics_array[index].name;
}

function Previous() {
    if (index == 0) {
        index = pics_array.length - 1;
    } else {
        index--;
    }
    localStorage.setItem('myPic', index);

    document.getElementById("pic").src = pics_array[index].src;
    document.getElementById("p").textContent = pics_array[index].name;
}
function Next() {
    if (index == pics_array.length - 1) {
        index = 0;
    } else {
        index++;
    }
    localStorage.setItem('myPic', index);


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
    interval = null;
}

