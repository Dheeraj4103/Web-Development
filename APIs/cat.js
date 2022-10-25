const img = document.querySelector("img");
const input = document.getElementById("ipt");
const search = document.getElementById("search");

var url =
  "https://api.giphy.com/v1/gifs/translate?api_key=5EhAavGYHG0pwkhMRZD9RMlJnHCCQloc&s=cats";

search.addEventListener("click", (e) => {
  console.log("Submitted");
  img.innerHTML = "";
  url = url + input.value;
  GetCats(url);
  e.preventDefault();
});

function GetCats(url) {
  fetch(url, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      console.log(error);
    });
}
