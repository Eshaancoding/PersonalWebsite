globalIndex = 0

window.onresize =  function() {
    let firstTabWidth = document.getElementsByClassName("label")[0].offsetWidth;
    let secondTabWidth = document.getElementsByClassName("label")[1].offsetWidth;
    let thirdTabWidth = document.getElementsByClassName("label")[2].offsetWidth;      
    let line = document.getElementById("hr")
    if (globalIndex == 0) {
        line.style.left = "0px";
        line.style.width = firstTabWidth - 2 + "px";
    }
    else if (globalIndex == 1) {
        line.style.left = firstTabWidth + "px";
        line.style.width = secondTabWidth - 2 + "px";
    }
    else if (globalIndex == 2) {
        line.style.left = firstTabWidth + secondTabWidth + "px";
        line.style.width = thirdTabWidth - 2 + "px";
    }
}

function tabSelect (index) {
    globalIndex = index
    let firstTabWidth = document.getElementsByClassName("label")[0].offsetWidth;
    let secondTabWidth = document.getElementsByClassName("label")[1].offsetWidth;
    let thirdTabWidth = document.getElementsByClassName("label")[2].offsetWidth;      
    let line = document.getElementById("hr")
    if (globalIndex == 0) {
        line.style.left = "0px";
        line.style.width = firstTabWidth - 2 + "px";
    }
    else if (globalIndex == 1) {
        line.style.left = firstTabWidth + "px";
        line.style.width = secondTabWidth - 2 + "px";
    }
    else if (globalIndex == 2) {
        line.style.left = firstTabWidth + secondTabWidth + "px";
        line.style.width = thirdTabWidth - 2 + "px";
    }
}