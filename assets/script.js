const collection = [
  {
    name: "Valorant",
    editor: "Riot Games",
    developper: "Riot Games",
    release: "2 June 2020",
    picture: "assets/img/valorant.jpg",
    genre: ["First Person Shooter"],
    id: "valorant",
    twitter: "https://twitter.com/VALORANT",
  },

  {
    name: "League of Legends",
    editor: "Riot Games",
    developper: "Riot Games",
    release: "27 October 2009",
    picture: "assets/img/lol.jpg",
    genre: ["MOBA"],
    id: 'lol',
    twitter: "https://twitter.com/LeagueOfLegends",
  },

  {
    name: "Minecraft",
    editor: "Mojang Studios",
    developper: "Mojang Studios",
    release: "18 November 2011",
    picture: "assets/img/minecraft.jpg",
    genre: ["Sandbox", "Adventure", "Survival"],
    id: "minecraft",
    twitter: "https://twitter.com/Minecraft",
  },

  {
    name: "Counter-Strike: Global Offensive",
    editor: "Valve",
    developper: "Valve",
    release: "21 August 2012",
    picture: "assets/img/counterstrike.jpg",
    genre: ["First Person Shooter"],
    id: 'csgo',
    twitter: "https://twitter.com/CounterStrike",
  },

  {
    name: "Rust",
    editor: "Facepunch Studios",
    developper: "Facepunch Studios",
    release: "8 February 2018",
    picture: "assets/img/rust.jpg",
    genre: ["Adventure", "Survival", "PvP", "PvE"],
    id: "rust",
    twitter: "https://twitter.com/playrust",
  },

  {
    name: "Cyberpunk 2077",
    editor: "CD Projekt",
    developper: "CD Projekt RED",
    release: "10 December 2020",
    picture: "assets/img/cyberpunk-2077.jpg",
    genre: ["Action-RPG", "Action-Adventure"],
    id: "cyberpunk",
    twitter: "https://twitter.com/CyberpunkGame",
  },

  {
    name: "Lethal Company",
    editor: "Zeekerss",
    developper: "Zeekerss",
    release: "23 October 2023",
    picture: "assets/img/lethal-company.jpg",
    genre: ["Horror"],
    id: "lethalcompany",
    twitter: "https://twitter.com/ZeekerssRBLX",
  },

  {
    name: "Baldur's Gate 3",
    editor: "Larian Studios",
    developper: "Larian Studios",
    release: "3 August 2023",
    picture: "assets/img/baldurs-gate-3.jpg",
    genre: ["RPG"],
    id: "baldurgate",
    twitter: "https://twitter.com/baldursgate3",
  },

  {
    name: "Phasmophobia",
    editor: "Kinetic Games",
    developper: "Kinetic Games",
    release: "  18 September 2020",
    picture: "assets/img/phasmophobia.jpg",
    genre: ["Survival", "Horror"],
    id: "phasmophobia",
    twitter: "https://twitter.com/KineticGame",
  },

  {
    name: "Red Dead Redemption 2",
    editor: "Rockstar Games",
    developper: "Rockstar Studios",
    release: "26 October 2018",
    picture: "assets/img/rdr2.jpg",
    genre: ['Action-Adventure','Third Person Shooter', 'Open-World'],
    id: "rdr2",
    twitter: "https://twitter.com/RockstarGames",
  },
];

// mise en page

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
    let barDiv = document.createElement('div');
    let spanCreator = document.createElement('span');
    let aCreator = document.createElement('a');
    let aText = document.createTextNode('coucou');
    

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
    divCreator.appendChild(spanCreator);
    spanCreator.appendChild(aCreator);
    aCreator.href = elem.twitter;
    aCreator.appendChild(aText)
  };
};

cardCreator();