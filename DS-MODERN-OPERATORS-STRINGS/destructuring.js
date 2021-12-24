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
};

let [italiano, veggies] = restaurant.categories;

//swap
[italiano, veggies] = [veggies, italiano];
console.log(italiano, veggies);

//order
console.log(restaurant.order(0, 2));

//nested array
const nested = [1, 4, [5]];
const [i = 1, , [j = 1, h = 1]] = nested;
console.log(i, j, h);
