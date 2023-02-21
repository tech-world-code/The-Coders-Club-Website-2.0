var exitButton = document.getElementById ("exit-button");
        

var exitButtonOnClick = function () {
    mobileMenu.classList.add ("hidden");
}
var mobileMenuButton = document.getElementById("mobile-menu-enter");
var mobileMenu = document.getElementById("mobile-menu-id");
var mainContent = document.getElementById("main-content")
var footer = document.getElementsByTagName("footer")


var mobileMenuButtonOnClick = function() {

mainContent.classList.toggle("moved-away")
if (mobileMenu.classList.contains("hidden") === true) {
    footer[0].classList.toggle("hidden")
setTimeout(function () {
    mobileMenu.classList.remove("hidden"); 
    
}, 2000);
}
else {
    mobileMenu.classList.add("hidden"); 
    setTimeout(function () {
        footer[0].classList.remove("hidden")
    
    }, 2000);
    
}



if (mobileMenu.classList.contains("hidden")) {
mobileMenuButton.innerHTML = "<div class='line'></div><br><div class='line'></div><br><div class='line'></div>";
}



};

mobileMenuButton.addEventListener("click", mobileMenuButtonOnClick);

var menuOption = document.getElementsByClassName("nav-option")
var pagePath = window.location.pathname;

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
if ( !(pagePath == "/" || pagePath == "/index.html" || pagePath == "" )) { 
document.querySelector(".welcome").style.minHeight=height+"px";
}

document.querySelector(".mobile-menu").style.minHeight=height+"px";

console.log(pagePath)

