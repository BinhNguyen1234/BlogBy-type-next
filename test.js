const testArrr = ['5', '8', '9', '10'];
const arr = testArrr.reduce((acc, cur, ci) => {
   if (cur > 8) {
      acc.push(cur);
   }
   return acc;
}, []);

console.log(arr);
