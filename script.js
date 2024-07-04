const button = document.getElementById("click");
const p = document.querySelector('p');
button.addEventListener("click",function(){
    p.innerHTML = "yeah !!!button is clicked!"
button.style.backgroundColor = "purple";
})

let container = document.querySelector(".container");
let timeNow = new Date().getHours();
timeNow = 20;
console.log(timeNow);
let greeting = 
timeNow >= 5 && timeNow < 12 ? "Good Morning": timeNow >= 12 && timeNow < 18
? "Good Afternoon":
"Good Evening";
console.log(greeting);
container.innerHTML = greeting;

