const section= document.getElementById("para");
const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=> {
 
 if(scrollY> section.offsetTop-nav.offsetHeight){
    nav.classList.add('active')
 }else{
    nav.classList.remove('active')
 }
})
