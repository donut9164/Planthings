//loading screen
//delay loading screen
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loading-screen").style.display = "block";
    document.querySelector(".page").style.display = "none";
});

window.addEventListener("load", function () {
    document.getElementById("loading-screen").style.display = "none";
    document.querySelector(".page").style.display = "block";
});

//side navbar

function openNav() {
    var screenWidth = window.innerWidth;
    console.log(screenWidth)
    if (screenWidth < 770) {
        document.getElementById("Sidenav").style.width = "100%";
        document.getElementById("main").style.marginLeft = "0";
    } else {
        document.getElementById("Sidenav").style.width = "350px";
        document.getElementById("main").style.marginLeft = "0";
    }
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//search




