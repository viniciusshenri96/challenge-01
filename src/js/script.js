"use strict";
const articlesItem = document.querySelector(".articles");

articlesItem.addEventListener("click", function (e) {
  const iconSvg = e.target.closest(".articles__icon");
  if (!iconSvg) return;
  iconSvg.classList.toggle("active");
});
