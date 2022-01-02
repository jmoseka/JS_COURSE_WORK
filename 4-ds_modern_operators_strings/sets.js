const orderSet = new Set(["Pizza", "Pasta", "Rizotto", "Pasta", "Pizza"]);

//1. elements are unique
//2. Order is irrelevant
console.log(orderSet);

//getting size
//context: how many different meals are going to be cooked
console.log(orderSet.size);

//check if a certain element is in a set
//aka include in arrays
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

//add. will add only one since elements have to be unique
orderSet.add("Garlic bread");
orderSet.add("Garlic bread");

//delete
orderSet.delete("Pizza");

//no retrieving data only need to know if an element is included

//delete all elements
//orderSet.clear();

//loop over sets (itterables)
for (const order of orderSet) console.log(order);

//USE CASE OF SET IS TO REMOVE DUPLICATE VALUES

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

//spread operator works on iterables and changes staffUnique to arrays
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//to check size of set
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

//check how many different letters are in a string
console.log(new Set("JamilaMoseka").size);
