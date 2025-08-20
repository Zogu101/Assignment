// var x = 2;

// console.log(x);

// for (let loop = 1; loop <= 10; loop++){
//     console.log(++5)
// }

// class and constructors

// function person(){
//     console.log("Emma")
// }

// person();

function setTheme(Theme){
    document.body.classList.toggle("dark", Theme === "dark");
    localStorage.setitem("Theme", Theme);
}

document.getElementById("togglebutton").addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark")? "light" : "dark";
    setTheme(newTheme);
})

setTheme(localStorage.getItem("Theme") || "light");