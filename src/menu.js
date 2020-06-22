export function createMenu(){
    const title = document.createElement('div');
    title.style.backgroundColor = "yellow";
    title.textContent = "Menu"
    title.style.fontSize = "50px";

    

    const copy = document.createElement('div');
    copy.innerHTML = `<p>ROAST TRONCON OF TURBOT Served with hollandaise and new potatoes. £29.95</p>
                    <p>CASHEW NUT CURRY Lightly spiced Sri Lankan curry with coconut milk. Served with basmati rice and chapati. £11.95</p>
                    <p>FILLET STEAK 8oz steak from our butcher Philip Warren, thick-cut chips, tomato salad and Bearnaise sauce. £29.95</p>
                    <p>INDONESIAN SEAFOOD CURRY Sea bass, cod and prawns served with pilau rice and a green bean salad with grated coconut, crispy fried shallots, garlic and chilli. £21.95</p>
                    <p>SALMON AND CHIPS Prime salmon from sustainable Loch Duart either simply grilled or battered. from £10.95</p>`;

    document.getElementById('tabHolder').appendChild(title);
   document.getElementById('tabHolder').appendChild(copy);

}