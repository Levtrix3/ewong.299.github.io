const div = document.getElementById("colored-element");
div.style.color = "orange";



const items = ["Item One", "Item Two", "Item Three", "Item Four"];
items.forEach(item => console.log(item));

function appear() {
    console.log("clicked");
}

var button = document.getElementById("event-listener-button");
if (button) {
  button.addEventListener("click", appear);
}

function createItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const item = document.querySelector('#parent-element');
// add menu item
item.appendChild(createItem('You'));
item.appendChild(createItem('Just'));
item.appendChild(createItem('got'));
item.appendChild(createItem('Rick'));
item.appendChild(createItem('Rolled'));
