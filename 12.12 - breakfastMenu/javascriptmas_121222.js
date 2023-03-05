/* Challenge 2: Breakfast Menu
- Topic: .map()
Our restaurant menu currently only shows the breakfast menu, 
as it has been hard coded into the HTML file. However, we want 
to offer a dinner menu instead. Let's fix this using .map()

1. First, fetch a reference to the menu <section> from the DOM. 
2. Set the innerHTML content of the menu <section> to the dinnerFoods array by mapping over the array and returning 
the following div for each food in the array: 
`<div class="food">FOOD VALUE HERE</div>` 
4. Remember to remove any separating commas between the food divs!
*/

const dinnerFoods = ['🍝','🍔','🌮']


let element = document.getElementById("menu");
let newTab = dinnerFoods.map((food) => `<div class="food">${food}</div>`);
let tabConvertedToStringInOrderToAvoidAnyInadvertentCommas = newTab.join("");
element.innerHTML = tabConvertedToStringInOrderToAvoidAnyInadvertentCommas;

//Les methodes comme Map s'appliquent à des tableaux. Si je veux en sortie une string, je peux join ces tableaux en une simple string. 

//Quand je veux map sur une constante par exemple, map va faire le travail de boucle pour moi à cause de la fonction annonyme que je vais lui passer en paramètre. Food ici correspond à une sorte de "this" Sur tous mes food (aka mes dinnerFoods sur lesquels je map) je vais remplacer avec map chaque case de mon tableau avec la string concaténée que je passe. 
