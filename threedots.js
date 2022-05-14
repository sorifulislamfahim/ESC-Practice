const ages = [12, 14, 16, 18, 56]
const ages2 = [22, 23, 24]
const ages3 = [34, 56, 54, 56]
const allAges = ages.concat(ages2).concat([34]).concat(ages3);
console.log(allAges);


const allAges2 = [...ages, ...ages2, 76, ...ages3];
console.log(allAges2);

const bussines = 344;
const woark = 678;
const socive = 660;
const maximum = Math.max(bussines, woark, socive);
console.log(maximum);

const allMony = [660, 676, 987, 789];
const maximum2 = Math.max(...allMony);
console.log(maximum2);