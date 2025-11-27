// Sum all numbers in an array
// Given something like [1, 3, 4, 7], return 15. It trains your brain to fold a collection of values into a single result. This is the seed that grows into map–filter–reduce mastery.

// 1st approach
const arr = [1, 3, 4, 7];

let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum);

// 2nd approach
function sumArr(arr) {
    let sum1 = 0;

    for (let i = 0; i < arr.length; i++){
        sum1 += arr[i];
    }
    return sum;

}

console.log(sumArr([1, 3, 4, 7]));