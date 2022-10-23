const img = document.querySelector("img");
const input = document.getElementById("search-img");
const search = document.getElementById("search");

search.addEventListener('click', (e) => {
    console.log(input[0]);
    e.preventDefault();
})
// search.onclick = function(){
//     input.textContent = "Hello";
// }

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=5EhAavGYHG0pwkhMRZD9RMlJnHCCQloc&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
