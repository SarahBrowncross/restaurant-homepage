
export function createHomepage(){
    const title = document.createElement('div');
    title.style.backgroundColor = "yellow";
    title.textContent = "My Restaurant"
    title.style.fontSize = "50px";

    const restaurantImage = document.createElement('img');
    restaurantImage.style.height = "400px";
    restaurantImage.src = "http://www.rickstein.com/wp-content/uploads/2014/02/JR20170327_Steins_Seafood_Rest-8-385x300.jpg";

    const copy = document.createElement('div');
    copy.innerHTML = `<p>Opened by Rick Stein and Jill Stein in 1975, The Seafood Restaurant in Padstow is famous for establishing an international reputation for the very freshest fish and shellfish, often landed on our doorstep.  Head Chef Pete Murt and our team of chefs create simple seafood dishes with classic flavours using Rick’s recipes. Join us for lunch to enjoy to our set menu, 3 courses for £39.95 – available every day alongside an a la carte menu.</p>
    <p>We have a seafood bar right in the middle of the restaurant where you take a seat to enjoy the atmosphere of the whole restaurant.  No reservations are required for the bar and you can order anything from the menu.</p>
    <p>Using quality and local produce will always be close to our hearts and we’re proud to work with suppliers that are a passionate as we are.</p>`;

    document.getElementById('tabHolder').appendChild(title);
    document.getElementById('tabHolder').appendChild(restaurantImage);
    document.getElementById('tabHolder').appendChild(copy);

}