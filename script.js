let loader = document.querySelector(".loader");
let pageContent = document.querySelector(".container p");

setTimeout(() => {
  loader.style.display = "none";
  pageContent.style.display = "flex";
}, 3000);
