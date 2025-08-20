var nameEl = document.getElementById("name");
var age = document.getElementById("age");
var message = document.getElementById("status-alart");
var check = document.getElementById("check-status");

function checkage(){
    let numb_age = Number(age.value)
    if(nameEl.value.trim() === "" || age.value.trim() === ""){
        message.innerHTML = "Please Enter your name and age"
    }else if (!Number.isInteger(numb_age) || numb_age <= 0){
        message.innerHTML = "please enter your age"
    }else if(numb_age >= 18){
        message.innerHTML = "Congratulations!! "+nameEl.value+" You are eligible to vote";
    }else{
        message.innerHTML = "Sorry "+nameEl.value+" you are not eligible to vote try again when you are 18yrs";
    }
}
check.addEventListener("click", checkage)