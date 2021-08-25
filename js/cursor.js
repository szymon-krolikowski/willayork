const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
    cursor.style.left = (event.clientX + 30) + "px";
    cursor.style.top = (event.clientY + 30) + "px";
})