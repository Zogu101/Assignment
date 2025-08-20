// var x = 6
// var y = 2

// function print(){
//     console.log("hello world")
//     z = (x + y) * 2
//     console.log(z)
// }
// console.log(print())

// var a = document.getElementById("x");
// var b = document.getElementById("y");
// var d = document.getElementById("increase");

//  function add(){
//     const numa = Number(a.value)
//     const numb = Number(b.value)
//     const c = numa + numb;
//     document.getElementById("number").innerHTML = c;
// }
// d.addEventListener("click", add);
// var count = 0;

var numEl = document.getElementById("number");
var inc = document.getElementById("increase");
var dec = document.getElementById("decrease");
var reset = document.getElementById("resetcount");
var auto = document.getElementById("autocount");
var stop = document.getElementById("stopcount");
var time = document.getElementById("timercount");

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Increase count function
function increasecount(){
    let count = Number(numEl.innerHTML)
    if(count < 20){
        count++;
        numEl.innerHTML = count;
    }   
}
inc.addEventListener("click", increasecount);
// +++++++++++++++++++++++++++++++++++++++++++++++
// Decrease count function
function decreasecount(){
    let count = Number(numEl.innerHTML)
    if(count > 0){
        count--;
        numEl.innerHTML = count;
    }   
}
dec.addEventListener("click", decreasecount);
// +++++++++++++++++++++++++++++++++++++++++++++++
// Reset count function
function resetcount(){
    let count = Number(numEl.innerHTML)
    count = 0
    numEl.innerHTML = count; 
}
reset.addEventListener("click", resetcount);
// +++++++++++++++++++++++++++++++++++++++++++++++
// Auto count function
let set;
function autocount(){
    let count = Number(numEl.innerHTML)
    set = setInterval(()=>{
        count++
        numEl.innerHTML = count;
    },1000)

}
auto.addEventListener("click", autocount);
// +++++++++++++++++++++++++++++++++++++++++++++++
// set count function
function setcount(){
    let count = Number(numEl.innerHTML)
    let time1 = Number(time.value)
    let milliseconds = time1 * 1000
    setTimeout(()=>{
        if(count > 0){
            clearInterval(set)
            numEl.innerHTML = count;
        }
    },milliseconds)

}
stop.addEventListener("click", setcount);
// +++++++++++++++++++++++++++++++++++++++++++++++