console.clear();

function start() {
    document.getElementById("point-1").style.display = "block";
}

function hideDivs(div) {
    for (let i = 1; i < 6; i++) {
        document.getElementById(`point-${i}`).style.display = "none";
    }

    document.getElementById(`point-${div}`).style.display = "block";
}

document.getElementById("header-btn-1").addEventListener("click", function(){ hideDivs(1); });
document.getElementById("header-btn-2").addEventListener("click", function(){ hideDivs(2); });
document.getElementById("header-btn-3").addEventListener("click", function(){ hideDivs(3); });
document.getElementById("header-btn-4").addEventListener("click", function(){ hideDivs(4); });
document.getElementById("header-btn-5").addEventListener("click", function(){ hideDivs(5); });

window.onload = start();