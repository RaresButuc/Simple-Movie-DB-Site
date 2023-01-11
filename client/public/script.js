import { data } from '/data.js';
const divElement = function (content) {
  return `<div>${content}</div>`;
}
const h2Element = function (content) {
  return `<h2>${content}</h2>`;
}
const h4Element = function (content) {
  return `<h4>${content}</h4>`;
}
const h5Element = function (content) {
  return `<h5>${content}</h5>`;
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
          document.getElementById("root").insertAdjacentHTML("beforeend", h4Element("Actor"))
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
          document.getElementById("root").insertAdjacentHTML("beforeend", h5Element("Movies acted in:"))
        }
      });
    data.movies.forEach(movie => {
    movie.actors.forEach(actor => {
	 if (actor === element.id){
	       document.getElementById("root").insertAdjacentHTML("beforeend", divElement(movie.title))
	     }
    });
  });
});
  }else if (page === "directors") {
    document.getElementById("root").insertAdjacentHTML("beforeend",h2Element("Directors:"))
    data.professionals.forEach(element => {
      element.roles.forEach(item => {
        if (item === "directors") {
          document.getElementById("root").insertAdjacentHTML("beforeend", h4Element("Director"))
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
          document.getElementById("root").insertAdjacentHTML("beforeend", h5Element("Movies directed:"))
        }
      });
      data.movies.forEach(movie => {
        movie.directors.forEach(director => {
       if (director === element.id){
             document.getElementById("root").insertAdjacentHTML("beforeend", divElement(movie.title))
           }
        });
      });
    });
  }else if (page === "writers") {
    document.getElementById("root").insertAdjacentHTML("beforeend",h2Element("Writers:"))
    data.professionals.forEach(element => {
      element.roles.forEach(item => {
        if (item === "writers") {
          document.getElementById("root").insertAdjacentHTML("beforeend", h4Element("Writer"))
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
          document.getElementById("root").insertAdjacentHTML("beforeend", h5Element("Movies written:"))
        }
      });
       
      data.movies.forEach(movie => {
        movie.writers.forEach(writer => {
       if (writer === element.id){
             document.getElementById("root").insertAdjacentHTML("beforeend", divElement(movie.title))
           }
        });
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
