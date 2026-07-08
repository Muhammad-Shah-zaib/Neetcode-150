// using hashmap where key is the number of nums while the value is the index of that number in the nums
const twoSum = (nums: number[], target: number): number[] => {
    const map: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++)
        map[nums[i]] = i;

    for (let i = 0; i < nums.length; i++) {
        const remain: number = target - nums[i]

        if (map[remain] && map[remain] !== i) {
            return [i, map[remain]]
        }
    }

    return new Array<number>();
};

// Test Cases
console.log("Test Case 1: ", twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log("Test Case 2: ", twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log("Test Case 3: ", twoSum([3, 3], 6)); // Expected: [0, 1]