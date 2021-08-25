function parallax(e) {
    document.querySelectorAll(".aboutUs__leaf").forEach(leaf => {
        const speed = leaf.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        leaf.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

document.addEventListener("mousemove", parallax);
