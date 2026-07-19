// since the input array is sorted so we can utilize 
// the two pointer and the binary serach to get the 
// indexes of the numbers.

function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        const sum: number = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];

        sum > target ? right-- : left++;
    }


    return [left + 1, right + 1];
};


// TEST CASES
console.log(twoSum([2, 7, 11, 15], 9)) // [1,2]
console.log(twoSum([2, 3, 4], 6))     // [1,3]
console.log(twoSum([-1, 0], -1))     // [1,2]