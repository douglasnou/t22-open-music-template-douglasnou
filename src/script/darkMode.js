const button = document.querySelector(".header__btn");
const body = document.body;
const header = document.querySelector("header");
const generosItem = document.querySelectorAll(".generos-item");


let darkmode = false;
let darkButton = false;
let generosItemDark = false;
let albunsDark = false;

export function darkMode(albuns) {

    darkmode = !darkmode
    darkButton = !darkButton
    generosItemDark = !generosItemDark
    albunsDark = !albunsDark

    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    button.classList.toggle("darkButton");
    generosItem.forEach((element) =>{
      element.classList.toggle("generosItemDark");
    });
    albuns.forEach((element) =>{
      element.classList.toggle("albunsDark");
    });
}

button.addEventListener('click', () =>{
  const albuns = document.querySelectorAll(".albuns__container-specific")
  darkMode(albuns)
  localStorage.setItem("theme",JSON.stringify(darkmode))
})


export function themeAnalysis(){
  darkmode = JSON.parse(localStorage.getItem("theme"))
  const albuns = document.querySelectorAll(".albuns__container-specific")
  if(darkmode){
    body.classList.add("dark-mode")
    header.classList.add("dark-mode")
    button.classList.add("darkButton")
    generosItem.forEach((element) =>{
      element.classList.add("generosItemDark")
    });
    albuns.forEach((element) =>{
      element.classList.add("albunsDark");
    }); 
  }
}