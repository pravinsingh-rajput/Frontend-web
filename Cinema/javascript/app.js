"use strict";

const movielist = document.querySelectorAll(".movie-list-items");
const moremovies = document.querySelectorAll(".morelist");

moremovies.forEach((movies, i) => {
  const itemlen = movielist[i].querySelectorAll("img").length;
  let counter = 0;
  movies.addEventListener("click", () => {
    counter++;
    if (itemlen - 2.2 * counter >= 0) {
      movielist[i].style.transform = `translateX(${
        movielist[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielist[i].style.transform = "translateX(0)";
      counter = 0;
    }
  });
});

const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
  ".container,.menu-items a,.movie-container,.toogle,.toogle-ball,.side-bar-icon,.footer-content,#sidebar,#navbar"
);

ball.addEventListener("click", () => {
  if (
    items.forEach((item) => {
      // item.classList.add("active");
      item.classList.toggle("active");
    })
  ) {
    ball.classList.toggle("active");
  }
});
