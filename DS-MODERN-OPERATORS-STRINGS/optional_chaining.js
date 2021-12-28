//arrays
const users = [{ name: "Jonas", email: "jonas.gmail", age: 12 }];

//checks if users has a value at index 0
//if there is, moves to the next instruction, if not prints "not available"
//console.log(users[1]?.nam ?? "not available");

//objects
const person = {
  users,
  order(i, j) {
    console.log(`Order is ${i} and also ${j}`);
  },
};

//methods

console.log(person.order?.(0, 1) ?? "Method not available");
