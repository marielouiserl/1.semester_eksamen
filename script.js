var i = 0;
var txt = 'THIS IS A PORTFOLIO';
var speed = 150;

window.addEventListener("load", typeWriter);




function typeWriter() {
    console.log("typing");

    if (i < txt.length) {
        document.getElementById("animation1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
