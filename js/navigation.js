let isActive = false;

const mobileButtonNavigation = document.querySelector(".mobileButtonNavigation");
const mobileNavigation = document.querySelector(".mobileNavigation");

mobileButtonNavigation.addEventListener("click", () => {
    if(isActive) {
        mobileButtonNavigation.classList.remove("active");
        mobileNavigation.classList.remove("activeNavigation");
    } else {
        mobileButtonNavigation.classList.add("active");
        mobileNavigation.classList.add("activeNavigation");
    };

    isActive = !isActive
})

