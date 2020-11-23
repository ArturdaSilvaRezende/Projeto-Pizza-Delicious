"use strict";

((doc) => {
  const btnTop = doc.querySelector(".btnTop");
  btnTop.addEventListener("click", backTop);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (doc.body.scrollTop > 350 || doc.documentElement.scrollTop > 350) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  }

  function backTop() {
    doc.body.scrollTop = 0;
    doc.documentElement.scrollTop = 0;
  }
})(document);
