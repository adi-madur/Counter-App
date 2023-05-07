let decr = document.getElementById("decrement");
let incr = document.getElementById("increment");
let reset = document.getElementById("reset");
let text = document.getElementById("number")

// For checking whether the element has targeted
// console.log(decr, incr, reset, text);

function increaseNumber(){
    text.innerText = Number(text.innerText) + 1;
}

function decreaseNumber(){
    if(Number(text.innerText) > 0){
        text.innerText = Number(text.innerText) - 1;
    }
    else{
        alert("Number cannot be negative")
    }
}

function resetNumber(){
    text.innerText = Number(0);
}

incr.addEventListener("click", increaseNumber);
decr.addEventListener("click", decreaseNumber)
reset.addEventListener("click", resetNumber);