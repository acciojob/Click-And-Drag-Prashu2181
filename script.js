// Your code here.
const container = document.querySelector(".items");
let isDragging = false;
let startX, startScrollLeft;

container.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.pageX;
    startScrollLeft = container.scrollLeft;
    container.classList.add("active");
});

container.addEventListener("mousemove", (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const distance = event.pageX - startX;
    container.scrollLeft = startScrollLeft - distance;
});

container.addEventListener("mouseup", () => {
    isDragging = false;
    container.classList.remove("active");
});

container.addEventListener("mouseleave", () => {
    isDragging = false;
    container.classList.remove("active");
});

