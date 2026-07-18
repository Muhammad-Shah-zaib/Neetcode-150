function longestConsecutive(nums: number[]): number {
    const numsSet: Set<number> = new Set(nums)
    let result: number = 0;

    // iterate through all the unique nums via the numsSet
    for (let uniqueNum of numsSet) {

        if (!numsSet.has(uniqueNum - 1)) {
            // now the uniqueNum is the start of the sequence
            let len: 1 = 1;
            while (numsSet.has(uniqueNum + len)) {
                len++
            }

            result = Math.max(len, result)
        }
    }

    return result
};

// TEST CASES

console.log("Test Case 1:", longestConsecutive([100, 4, 200, 1, 3, 2])); // Expected: 4
console.log("Test Case 2:", longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Expected: 9
console.log("Test Case 3:", longestConsecutive([])); // Expected: 0