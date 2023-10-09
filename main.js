const users = [
  {
    name: "Temo",
    age: 25,
  },
  {
    name: "Lasha",
    age: 21,
  },
  {
    name: "Ana",
    age: 28,
  },
];

function youngUserName(users) {
  const newYoungUser = users[1];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age < newYoungUser.age) {
      newYoungUser = users[i];
    }
    return newYoungUser.name;
  }
}

const resultYoungUserName = youngUserName(users);

console.log(resultYoungUserName);

function newUser() {
  const newUser = {
    name: "James",
    age: 37,
  };
  return newUser;
}

const resultNewUser = newUser(users);
console.log(resultNewUser);

function randomNumber() {
  return parseInt(Math.random() * 3) + 1;
}

function randomWinner() {
  let A = 0;
  let B = 0;
  while (A !== 3 && B !== 3) {
    A = randomNumber();
    B = randomNumber();
    if (A === 3) {
      console.log("გამარჯვებულია A");
    } else if (B === 3) {
      console.log("გამარჯვებულია B");
    }
  }
}

const resultRandomWinner = randomWinner();
