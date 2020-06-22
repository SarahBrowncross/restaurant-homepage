export function createContact(){
    const title = document.createElement('div');
    title.style.backgroundColor = "yellow";
    title.textContent = "Contact us"
    title.style.fontSize = "50px";

    const copy = document.createElement('div');
    copy.innerHTML = "<p>Riverside,</p> <p>Padstow,</p> <p>PL28 8BY.</p> Pay and display parking is available opposite the restaurant.";

    document.getElementById('tabHolder').appendChild(title);
    document.getElementById('tabHolder').appendChild(copy);

}