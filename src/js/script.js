"use strict";
const icon = document.querySelector(".articles__icon ");
console.log(icon);

icon.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("active");
});
