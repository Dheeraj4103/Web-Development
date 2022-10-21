async function timepass() {

    const requestURL =
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    // now let's initialize our request
    const request = new Request(requestURL);

    // now let's fetch our request in the network
    const response = await fetch(request);

    // let's exract json from response
    const superheroes = await response.json();
    const str = JSON.stringify(superheroes);
    console.log(str);
}
timepass();
