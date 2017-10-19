var secondHand = document.querySelector(".hand--second"),
    minuteHand = document.querySelector(".hand--minute"),
    hourHand = document.querySelector(".hand--hour"); 
    
function setClock() {
    var date = new Date(),
    second = date.getSeconds(),
    minute = date.getMinutes(),
    hour = date.getHours(),
    secondDegree = (second/60)*360,
    minuteDegeree = (minute/60)*360 + second/10,
    hourDegree = ((hour%12)/12)*360 + minute/2;
        
    secondHand.style.transform = "rotate(" + secondDegree + "deg)";
    minuteHand.style.transform = "rotate(" + minuteDegeree + "deg)";
    hourHand.style.transform = "rotate(" + hourDegree + "deg)";

    setTimeout(setClock, 1000);

}

setTimeout(setClock, 1000);