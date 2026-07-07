function containsDuplicate(nums: number[]): boolean {
    // set to track the seen numbers
    const SeenNumsSet: Set<number> = new Set();

    for (const num of nums) {
        if (SeenNumsSet.has(num)) {
            return true
        }
        SeenNumsSet.add(num)
    }

    return false;
};

// --- Test Cases ---

// Test Case 1: Normal case with duplicates
console.log("test-case-1=>", containsDuplicate([1, 2, 3, 1])); // Expected: true

// Test Case 2: Normal case without duplicates
console.log("test-case-2=>", containsDuplicate([1, 2, 3, 4])); // Expected: false

// Test Case 3: Empty array (Edge case)
console.log("test-case-3=>", containsDuplicate([])); // Expected: false

// Test Case 4: Array with one element (Edge case)
console.log("test-case-4=>", containsDuplicate([1])); // Expected: false

// Test Case 5: Array with all identical elements (Edge case)
console.log("test-case-5=>", containsDuplicate([1, 1, 1, 1, 1])); // Expected: true

// Test Case 6: Array with negative numbers
console.log("test-case-6=>", containsDuplicate([-1, -2, -3, -1])); // Expected: true

// Test Case 7: Large array without duplicates
console.log("test-case-7=>", containsDuplicate(Array.from({ length: 10000 }, (_, i) => i))); // Expected: false
