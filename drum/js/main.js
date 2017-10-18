window.addEventListener("keydown", function(e){
var audio = document.querySelector("audio[data-key='" + e.keyCode + "']"),
    key = document.querySelector(".key[data-key='" + e.keyCode + "']"),
    keys = null,
    len = null,
    i = null;

if (!audio) return;
key.classList.add("playing");
audio.currentTime = 0;
audio.play();

function removeTransition(e) {
    key.classList.remove("playing");
}

keys = document.querySelectorAll(".key");
len = keys.length;

for (i=0; i<len; i++) {
    keys[i].addEventListener("transitionend", removeTransition);
}
});