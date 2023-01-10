import { data } from '/data.js';
const divElement = function (content) {
  return `<div>${content}</div>`;
}
const h2Element = function (content) {
  return `<h2>${content}</h2>`;
}


const loadEvent = function () {

  const page = window.location.pathname.substring(1);
  // Write your JavaScript code after this line

  console.log("data: ", data);
  console.log("page: ", page);

  const rootElement = document.getElementById("root");

  // 1. process the data
  //console.log(data)
  if (page === "movies") {
    data.movies.forEach(element => {
      document.getElementById("root").insertAdjacentHTML("beforeend", h2Element(`Movie Name:   ${element.title}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Year:</strong> ${element.year}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Runtime:</strong> ${element.runtime}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Genres:</strong> ${element.genres}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Release date:</strong> ${element["release-date"]}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Writers:</strong> ${element.writers}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Actors:</strong> ${element.actors}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Storyline:</strong> ${element.storyline || element.description}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Directors:</strong> ${element.directors}`))
    });
  } else if (page === "actors") {
    document.getElementById("root").insertAdjacentHTML("beforeend",h2Element("Actors:"))
    data.professionals.forEach(element => {
      element.roles.forEach(item => {
        if (item === "actors") {
          console.log(item)
      
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
        }
      });
    });
  }else if (page === "directors") {
    document.getElementById("root").insertAdjacentHTML("beforeend",h2Element("Directors:"))
    data.professionals.forEach(element => {
      element.roles.forEach(item => {
        if (item === "directors") {
          console.log(item)
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
        }
      });
    });
  }else if (page === "writers") {
    document.getElementById("root").insertAdjacentHTML("beforeend",h2Element("Writers:"))
    data.professionals.forEach(element => {
      element.roles.forEach(item => {
        if (item === "writers") {
          console.log(item)
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
        }
      });
    });
  }


  // const getMovoies = (myData) => {
  //  let actorsList = [];
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
