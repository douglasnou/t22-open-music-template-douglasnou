import {applyInputRangeStyle} from "./inputRange.js"
import{albumList} from "./albumList.js"



const container = document.querySelector(".albuns__container")

const renderAllProducts = (albuns) => {
    albuns.map((element) =>{
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
        )
    })
}

function routine(){
  applyInputRangeStyle()
  renderAllProducts(albumList)
}
routine()
