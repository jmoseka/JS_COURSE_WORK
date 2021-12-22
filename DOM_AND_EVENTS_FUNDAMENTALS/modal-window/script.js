"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnOpenModal.length; i++) {
  //anonymous function
  btnOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    //modal.style.display = 'block';
  });
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", function () {
  closeModal();
});
