const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (categoryIndex, menuIndex) {
    const [i, j] = [
      this.categories[categoryIndex],
      this.starterMenu[menuIndex],
    ];
    return [i, j];
  },

  recipe: function (ing1, ing2, ing3) {
    console.log(`Ingredients are ${ing1}, ${ing2}, ${ing3}`);
  },
};
//adding new menu
//const newMenu = [...restaurant.mainMenu, "Gnocci"];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//iterables: arrays, strings, maps, sets but NOT objects
//spread operator can work with iterables

const city = "Nairobi";
const newCity = [...city, "S"];
console.log(...newCity);

const ingridients = ["Water", "Pasta", "salt"];
restaurant.recipe(...ingridients);
