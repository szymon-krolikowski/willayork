const spanKinezyterapia = document.querySelector(".spanKinezyterapia");
const spanFizykoterapia = document.querySelector(".spanFizykoterapia");
const spanInhalacja = document.querySelector(".spanInhalacja");
const spanBalneoterapia = document.querySelector(".spanBalneoterapia");
const spanHydroterapia = document.querySelector(".spanHydroterapia");
const spanInne = document.querySelector(".spanInne");

const menuKinezyterapia = document.querySelector(".priceList__kinezyterapia");
const menuFizykoterapia = document.querySelector(".priceList__fizioterapia");
const menuInhalacja = document.querySelector(".priceList__inhalacja");
const menuBalneoterapia = document.querySelector(".priceList__balneoterapia");
const menuHydroterapia = document.querySelector(".priceList__hydroterapia");
const menuInne = document.querySelector(".priceList__inne");

spanKinezyterapia.addEventListener("click", () => {
    menuKinezyterapia.classList.add("priceList__active")
    menuFizykoterapia.classList.remove("priceList__active")
    menuInhalacja.classList.remove("priceList__active")
    menuBalneoterapia.classList.remove("priceList__active")
    menuHydroterapia.classList.remove("priceList__active")
    menuInne.classList.remove("priceList__active")
})

spanFizykoterapia.addEventListener("click", () => {
    menuKinezyterapia.classList.remove("priceList__active")
    menuFizykoterapia.classList.add("priceList__active")
    menuInhalacja.classList.remove("priceList__active")
    menuBalneoterapia.classList.remove("priceList__active")
    menuHydroterapia.classList.remove("priceList__active")
    menuInne.classList.remove("priceList__active")
})

spanInhalacja.addEventListener("click", () => {
    menuKinezyterapia.classList.remove("priceList__active")
    menuFizykoterapia.classList.remove("priceList__active")
    menuInhalacja.classList.add("priceList__active")
    menuBalneoterapia.classList.remove("priceList__active")
    menuHydroterapia.classList.remove("priceList__active")
    menuInne.classList.remove("priceList__active")
})

spanBalneoterapia.addEventListener("click", () => {
    menuKinezyterapia.classList.remove("priceList__active")
    menuFizykoterapia.classList.remove("priceList__active")
    menuInhalacja.classList.remove("priceList__active")
    menuBalneoterapia.classList.add("priceList__active")
    menuHydroterapia.classList.remove("priceList__active")
    menuInne.classList.remove("priceList__active")
})

spanHydroterapia.addEventListener("click", () => {
    menuKinezyterapia.classList.remove("priceList__active")
    menuFizykoterapia.classList.remove("priceList__active")
    menuInhalacja.classList.remove("priceList__active")
    menuBalneoterapia.classList.remove("priceList__active")
    menuHydroterapia.classList.add("priceList__active")
    menuInne.classList.remove("priceList__active")
})

spanInne.addEventListener("click", () => {
    menuKinezyterapia.classList.remove("priceList__active")
    menuFizykoterapia.classList.remove("priceList__active")
    menuInhalacja.classList.remove("priceList__active")
    menuBalneoterapia.classList.remove("priceList__active")
    menuHydroterapia.classList.remove("priceList__active")
    menuInne.classList.add("priceList__active")
})



