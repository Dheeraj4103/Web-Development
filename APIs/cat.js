const img = document.querySelector("img");
const input = document.getElementById("ipt");
const search = document.getElementById("search");

var url =
  "https://api.giphy.com/v1/gifs/translate?api_key=5EhAavGYHG0pwkhMRZD9RMlJnHCCQloc&s=";

search.addEventListener("click", (e) => {
  console.log("Submitted");
  img.src = "#";
  console.log(url + input.value);
  GetCats(url + input.value);
  e.preventDefault();
});

async function GetCats(url) {
  let response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  img.src = data.data.images.original.url;
  response.catch(error => {
    console.log(error);
  });
}


async function showAvatar() {

  // read our JSON
  ;
  let user = {name : "Dheeraj4103"};

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
