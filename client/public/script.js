import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  // Write your JavaScript code after this line
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");

  // 1. process the data
  //console.log(data)
  // const getActors = (myData) => {
  //   let actorsList = [];
    // for de .. in care procesezi my data din care extragi acctori, 
    //apoi return de actorsList
    // return actorsList
  //}

// 2. generarea html
// un sir de caractere pe care il introducem in insertaAdjiacentHTML
//cand introduci in pagina:
// let divSection = "";
// const actorsList = getActors(data.movies)
//for (..actorsList ){
  // div sevtion += `<div>${element}</div>`
//}
// rootElement.insertAdjacentHTML("beforeend", divSection)

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
