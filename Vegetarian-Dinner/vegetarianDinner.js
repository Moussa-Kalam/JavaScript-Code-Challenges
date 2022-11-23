/*
  Create a menu which contains only the vegetarian options, and
  dynamically generate each DOM node for the vegetarian dishes
  to append it as a list item to an unordered list
*/

function vegetarianMenu(menu) {
  // Target the unordered list node in the DOM by its class
  const menuNode = document.querySelector("#menu");
  
  // Create a menu array which contains only the vegetarian options.
  const vegetarianOptions = menu.filter(option => option.isVegetarian === true);

  // Generate a list item for each vegetarian option
  vegetarianOptions.forEach(option => {
    let dish = document.createElement("li");
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  });

}


const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

vegetarianMenu(menu);
