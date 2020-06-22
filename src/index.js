import { createHomepage } from "./homepage"
import { createContact } from "./contact"
import { createMenu } from "./menu"

const tabBar = document.createElement('div');
tabBar.id = "tabBar";
tabBar.style.height = "20px";

const tabHolder = document.createElement('div');
tabHolder.id = "tabHolder";

const tabOne = document.createElement('button');
tabOne.textContent = "Home";
tabOne.addEventListener("click", () => {
    document.getElementById("tabHolder").innerHTML = "";
    createHomepage();
});

const tabTwo = document.createElement('button');
tabTwo.textContent = "Contact Us";
tabTwo.addEventListener("click", () => {
    document.getElementById('tabHolder').innerHTML = "";
    createContact();
});

const tabThree = document.createElement('button');
tabThree.textContent = "Menu";
tabThree.addEventListener("click", () => {
    document.getElementById('tabHolder').innerHTML = "";
    createMenu();
});

document.getElementById('content').appendChild(tabBar);
document.getElementById('content').appendChild(tabHolder);
document.getElementById('tabBar').appendChild(tabOne);
document.getElementById('tabBar').appendChild(tabTwo);
document.getElementById('tabBar').appendChild(tabThree);

createHomepage();
