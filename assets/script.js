import {collection} from "./collection.js";

function cardCreator() {
  for(let elem of collection) {
    let names = `${elem.name}`;
    let editor = `${elem.editor}`;
    let dev = `${elem.developper}`;
    let release = `${elem.release}`;
    let picture = `${elem.picture}`;
    let id = `${elem.id}`;

    const mainPath = document.querySelector('main');
    let divCreator = document.createElement("div");
    let imgCreator = document.createElement('div')
    let h1Creator = document.createElement('h1')
    let nameInj = document.createTextNode(names);
    let pCreator = document.createElement('p');
    let pCreator2 = document.createElement('p');
    let editorInjector = document.createTextNode(`${editor}, ${dev}`);
    let dateInjector = document.createTextNode(release);
    let divCreator2 = document.createElement('div');
    let barDiv = document.createElement('div');
    let spanCreator = document.createElement('div');
    let aCreator = document.createElement('a');
    

    mainPath.appendChild(divCreator);
    divCreator.className = `collection ${id}`;
    divCreator.appendChild(imgCreator);
    imgCreator.style.backgroundImage = `url(${picture})`
    imgCreator.className = `img ${id}__img`;

    let genreDiv = document.createElement('div');
    divCreator.appendChild(genreDiv);
    genreDiv.className = `genre ${id}__genre`;
    
    for(let element of elem.genre) {
        let genreSpan = document.createElement("span");
        let genreP = document.createElement("p");
        let genreInjecter = document.createTextNode(element);

        genreDiv.appendChild(genreSpan)
        genreSpan.className = `genreS ${id}__genreS`;
        genreSpan.appendChild(genreP);
        genreP.appendChild(genreInjecter);
        genreP.className = `genreText ${id}__genre__text`
    }

    divCreator.appendChild(h1Creator);
    h1Creator.appendChild(nameInj);
    h1Creator.className = `title ${id}__title`;
    divCreator.appendChild(pCreator);
    pCreator.appendChild(editorInjector);
    pCreator.className = `editor ${id}__editor`;
    divCreator.appendChild(pCreator2);
    pCreator2.appendChild(dateInjector);
    pCreator2.className = `release ${id}__release`;
    divCreator.appendChild(barDiv);
    barDiv.className = `bar ${id}__bar`;
    divCreator.appendChild(divCreator2)
    divCreator2.appendChild(aCreator);
    divCreator2.className = 'lienboite'
    aCreator.appendChild(spanCreator);
    aCreator.href = elem.twitter;
    spanCreator.className = 'lien';
  };
};

cardCreator();