# Vegetarian Dinner

## What You'll Do

Given an array of Italian dinner dishes, create a menu which contains only the vegetarian options.

Each menu array index contains a dish object. A dish object contains the dish name and a boolean value indicating whether the dish is vegetarian.

```js
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
```

## Requirements

- Use the `array.filter()` method to differentiate dishes which are vegetarian
- Dynamically generate each DOM node for the vegetarian dishes to append it as a list item to an unordered list

## Instructions

Develop your solution in the `vegetarianDinner.js` file. If this challenge requires you to interact with the DOM, you will have an HTML element provided for you in the `index.html` file. Use this node to complete your DOM manipulation.
