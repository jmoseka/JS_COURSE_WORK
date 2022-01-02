//maps are alot more usefull than sets
//maps values to keys
//difference with objects: keys can be of any type
// but in objects keys always strings

const rest = new Map();

//fill map
rest.set("Name", "Classico italiano");
rest.set(1, "Frenze, Italy");
//chaining
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed")
  .set(2, "Portugal");

//retrieve
//console.log(rest.get("Name"));

const time = 21;
//console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//has method
//console.log(rest.has("categories"));
//delete elements (based on keys)
rest.delete(2);
//size property
//console.log(rest.size);
//delete
//rest.clear

//use array as key
const arr = [1, 2];
rest.set(arr, "Tset");
console.log(rest.get(arr));
