var nameEl = document.getElementById("name");
var age = document.getElementById("age");
var message = document.getElementById("status-alart");
var check = document.getElementById("check-status");

function checkage(){
    let numb_age = Number(age.value)
    if(numb_age >= 18){
        message.innerHTML = "congratulations!! "+nameEl.value+" You are eligible to vote";
    }else{
        message.innerHTML = "Sorry "+nameEl.value+" you are not eligible to vote try again when you are 18yrs";
    }
}
check.addEventListener("click", checkage)