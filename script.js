function colorRed(){
    const red = document.getElementById("box-1")
    red.style.backgroundColor="red";
    red.style.color="white"
}

function colorBlue(){
    const blue = document.getElementById("box-2")
    blue.style.backgroundColor="blue";
    blue.style.color="white"
}

function colorGreen(){
    const green = document.getElementById("box-3")
    green.style.backgroundColor="green";
    green.style.color="white"
}

function colorYellow(){
    const yellow = document.getElementById("box-4")
    yellow.style.backgroundColor="yellow";
}

function greeting() {
const header = document.getElementById("headerr");
const input = document.getElementById("input").value;
header.textContent = "Hello " + input;
}
greeting();