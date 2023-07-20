let Increasebtn = document.querySelector(".Increase");
let Resetbtn = document.querySelector(".Reset");
let Decreasebtn = document.querySelector(".Decrease");
let value = document.querySelector(".value");
let count = 0;


Increasebtn.addEventListener("click", () => {
    value.style.color = "green";
    count = count + 1;
    value.textContent = count;
});




Resetbtn.addEventListener("click", () => {
    value.style.color = "#000";
    count = 0;
    value.textContent = count;
});




Decreasebtn.addEventListener("click", () => {
    value.style.color = "#ff0000";
    count = count - 1;
    value.textContent = count;
})
