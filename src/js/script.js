"use strict";
const articlesItem = document.querySelector(".articles");
const eventsArr = ["touchstart", "click"];

eventsArr.forEach((eventUser) => {
  articlesItem.addEventListener(eventUser, function (e) {
    if (e.cancelable) e.preventDefault();
    const iconSvg = e.target.closest(".articles__icon");
    if (!iconSvg) return;
    iconSvg.classList.toggle("active");
  });
});
