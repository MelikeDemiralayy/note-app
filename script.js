// HTML elementlerini seç
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");



addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});


closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});
