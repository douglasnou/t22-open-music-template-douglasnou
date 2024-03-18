import {applyInputRangeStyle} from "./inputRange.js"
import { renderAllAlbuns } from "./api.js"

const url = "https://openmusic-fake-api.onrender.com/api/musics"

const container = document.querySelector(".albuns__container")
const newArray = await renderAllAlbuns(url)

  const newFunction = (elem)=>{elem.map((element) =>{
    container.insertAdjacentHTML(
      `beforeend`,
      
      `
      <div class="albuns__container-specific">
      <div class="albuns__container-cover">
      <img class="albuns-cover" src=${element.img}>
      <h4 class="albuns-name">${element.title}</h4>
      </div>
      <div class="albuns__container-specific-artist">
      <p>${element.band}</p>
      <p>${element.genre}</p>
      </div>
          <div class="albuns__container-specific-price">
            <p>R$ ${element.price}</p>
            <button class="albuns-btn">Comprar</button>
          </div>
        </div>

          `
  )})}

      const preco = document.querySelector(".precos__variable");
      
const priceAlbuns = newArray.map((element) =>({
  ...element, price: parseFloat(element.price)
}));
const input = document.querySelector("#precos-range");
const inputValue = parseFloat(input.value);

input.addEventListener("input", (event) =>{
  event.preventDefault()
  preco.textContent = `R$ ${input.value}`

  showAlbuns()
});

const showAlbuns = () =>{
    
  const filterAlbuns = newArray.filter((element)=>{
    return Number(element.price) <= Number(input.value)
  })
  container.innerHTML = ''
  
  newFunction(filterAlbuns)
  themeAnalysis()
}


const button = document.querySelector(".header__btn");
const body = document.body;
const header = document.querySelector("header");
const generosItem = document.querySelectorAll(".generos-item");


let darkmode = false;
let darkButton = false;
let generosItemDark = false;
let albunsDark = false;

function darkMode(albuns) {

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


function themeAnalysis(){
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

function routine(){
  applyInputRangeStyle()
  renderAllAlbuns(url)
  themeAnalysis()
  showAlbuns(url)
}
routine()
