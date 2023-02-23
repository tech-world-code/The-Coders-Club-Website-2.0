const exitButton = document.getElementById("exit-button");


const exitButtonOnClick = () => {
    mobileMenu.classList.add("hidden");
}
const mobileMenuButton = document.getElementById("mobile-menu-enter");
const mobileMenu = document.getElementById("mobile-menu-id");
const mainContent = document.getElementById("main-content")
const footer = document.getElementsByTagName("footer")


const mobileMenuButtonOnClick = () => {

    mainContent.classList.toggle("moved-away")
    if (mobileMenu.classList.contains("hidden") === true) {
        footer[0].classList.toggle("hidden")
        setTimeout(() =>{
            mobileMenu.classList.remove("hidden");

        }, 2000);
    }
    else {
        mobileMenu.classList.add("hidden");
        setTimeout(() => {
            footer[0].classList.remove("hidden")

        }, 2000);

    }


};

mobileMenuButton.addEventListener("click", mobileMenuButtonOnClick);

const menuOption = document.getElementsByClassName("nav-option")
const pagePath = window.location.pathname;

if (pagePath === "/about.html") {
    menuOption[0].className = "nav-on-page nav-option";
}
else if (pagePath === "/classes.html") {
    menuOption[1].className = "nav-on-page nav-option";
}
else if (pagePath === "/contact.html") {
    menuOption[2].className = "nav-on-page nav-option";
}

let height = screen.height;
if (!(pagePath == "/" || pagePath == "/index.html" || pagePath == "")) {
    document.querySelector(".welcome").style.minHeight = height + "px";
}

document.querySelector(".mobile-menu").style.minHeight = height + "px";

console.log(pagePath)

