const counter = document.getElementById("count");
const add = document.getElementById("incr");
const subtract = document.getElementById("decr");
const restart = document.getElementById("reset");

var number = 0;

add.addEventListener("click", ()=>{
    number = number + 1;
    counter.innerHTML = number;
    counter.style.color = "green";

    if(number < 0){
        counter.style.color = "red";
    }
    else if (number == 0){
        counter.style.color = "midnightblue";
    }

})

subtract.addEventListener("click", ()=>{
    number = number - 1;
    counter.innerHTML = number;
    if(number < 0){
        counter.style.color = "red";
    }
    else if (number == 0){
        counter.style.color = "midnightblue";
    }
})

restart.addEventListener("click", ()=>{
    number = 0;
    counter.innerHTML = number;
    counter.style.color = "midnightblue";
})