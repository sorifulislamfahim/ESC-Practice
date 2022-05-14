// function dubleIt(num){
//     return num * 2;
// }

// const dubleIt = function(num){
//     return num * 2;
// }

const dubleIt = num => num * 2;
const result = dubleIt(50);
console.log(result);

const add = (x, y) => x + y;
const result2 = add(30, 40);
console.log(result2);

const give5 = () => 5;
const result0 = give5();
console.log(result0);

const doMath = (x, y) => {
    const sum = x + y;
    const diffarent = x - y;
    const result = sum * diffarent;
    return result;
}
const result3 = doMath(7, 6);
console.log(result3);