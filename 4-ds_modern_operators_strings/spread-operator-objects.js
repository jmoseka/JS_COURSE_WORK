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

let copyRestaurant = { founded: 1989, ...restaurant };
copyRestaurant.name = "Mcdonald";
console.log(copyRestaurant.name);
console.log(restaurant.name);
console.log(copyRestaurant.founded);
