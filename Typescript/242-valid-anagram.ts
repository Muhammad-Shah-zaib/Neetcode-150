// using objects [that work like hashmaps under the hood]
function isAnagram(s: string, t: string): boolean {
    let charCount: { [key: string]: number } = {};

    for (const ch of s)
        charCount[ch] = (charCount[ch] || 0) + 1

    for (const ch of t) {
        if (!charCount[ch]) return false;

        charCount[ch] -= 1;
    }

    for (let count of Object.values(charCount)) {
        if (count !== 0) return false;
    }

    return true
}

// --- Test Cases ---

// Test Case 1: Normal case, valid anagram
console.log("test-case-1=>", isAnagram("anagram", "nagaram")); // Expected: true

// Test Case 2: Normal case, invalid anagram
console.log("test-case-2=>", isAnagram("rat", "car")); // Expected: false

// Test Case 3: Empty strings (Edge case)
console.log("test-case-3=>", isAnagram("", "")); // Expected: true

// Test Case 4: Different lengths (Edge case)
console.log("test-case-4=>", isAnagram("a", "ab")); // Expected: false

// Test Case 5: Single characters, same (Edge case)
console.log("test-case-5=>", isAnagram("a", "a")); // Expected: true

// Test Case 6: Same length, but different character counts
console.log("test-case-6=>", isAnagram("aacc", "ccac")); // Expected: false