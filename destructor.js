// const person = {name: "Fahim", age: 19, job: "Student", bFrend: "babu", number: 09182232, address: "Habiganj"}

// const {address, number} = person;
// // const address = person.address;
// // const number = person.number;


// console.log(address, number);
// console.log(address, number);
// console.log(address, number);
// console.log(address, number);

const friends = ['Shakib Khan', 'Salman Khan', 'Arif Khan', 'Fahim Khan'];

const [smallFnd, twoFnd, ...nextFnd] = friends;
console.log(nextFnd);