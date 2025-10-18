// Toggle sidebar 
const hambugger = document.querySelector(".hamburger");
const sidebar = document.querySelector("aside");

hambugger.addEventListener("click",()=>{
    sidebar.classList.toggle("show-sidebar");
    sidebar.classList.toggle("hide-sidebar");
})