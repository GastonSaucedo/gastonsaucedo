let check = document.querySelector(".check")

check.addEventListener("click", idioma)

function idioma() {
    let id = check.checked
    if (id == true) {
        href = "../english-page/index.html"
    } else {
        href = "../index.html"
    }
}