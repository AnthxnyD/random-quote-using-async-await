const button = document.getElementById("button");
const blockquote = document.getElementById("blockquote");
const author = document.getElementById("author");
const image= document.getElementById("emg");
const api = "https://thatsthespir.it/api";

function generate(elem) {
  fetch (api)
  .then((response) => response.json())
    .then((data) => {
    image.onerror = noPicture;
     image.setAttribute("src",data.photo);
     image.setAttribute("alt",data.author);
     author.innerText=data.author;
     blockquote.innerText='" '+ data.quote +' "';
    })
    .catch((error) => {
        console.log("There was an error!", error);
    });
  }
  function noPicture(e) {

    this.src = "./assets/pictures/403.png"

  }

  generate()
  button.addEventListener("click", (e)=> {
    generate()

  })

  window.addEventListener("load", (e) => {
    generate()
  });