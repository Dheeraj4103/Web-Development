// import data from "./superheroes.json" assert { type: "JSON" };

async function populate() {
  // in this variable url of json is stored
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  // now let's initialize our request
  const request = new Request(requestURL);

  // now let's fetch our request in the network
  const response = await fetch(request);

  // let's exract json from response
  const superheroes = await response.json();
  console.log(superheroes);
  populateHeader(superheroes);
  populateHeroes(superheroes);
}

populate();

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.sqaudName;
  header.appendChild(myH1);

  const para = document.createElement("p");
  para.textContent = `HomeTown: ${obj.homeTown} //Formed: ${obj.formed}`;
  header.appendChild(para);
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
