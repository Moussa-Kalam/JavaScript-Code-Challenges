const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Kalam13",
  [password]: "12309845",
  age: 24
}

console.log(user.username);
console.log(user.password);
console.log(user.age);
