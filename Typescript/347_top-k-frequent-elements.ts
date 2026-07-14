function topKFrequent(nums: number[], k: number): number[] {
    // Use freq hashmap
    const freqMap: { [num: number]: number } = {}

    for (let num of nums) {
        if (freqMap[num]) freqMap[num] += 1
        else freqMap[num] = 1
    }

    const entries = Object.entries(freqMap).sort((a, b) => b[1]! - a[1]!)

    return entries
        .slice(0, k)
        .map(entry => Number(entry[0]!))
};


// THIS IS O(n log k) approach, another approach is thre where 
// use the quick sort to get O(n)
// another approach is to use the buckets which will also provide O(n)

function optimizedTopKFrequent(nums: number[], k: number): number[] {
    // Use freq hashmap
    const freqMap: { [num: number]: number } = {}

    for (let num of nums) {
        if (freqMap[num]) freqMap[num] += 1
        else freqMap[num] = 1
    }

    const freqBucket: Record<number, number[]> = {};

    for (let [key, val] of Object.entries(freqMap)) {
        const numKey = Number(key);
        const numVal = Number(val);

        if (freqBucket[numVal]) freqBucket[numVal].push(numKey)
        else freqBucket[numVal] = [numKey]

    }

    const result: number[] = []
    let j: number = 0

    for (let i = nums.length; i >= 0; i--) {
        if (j >= k) break
        console.log(freqBucket[i])

        if (freqBucket[i]) {
            j += freqBucket[i].length;
            result.push(...freqBucket[i])
        }
    }

    return result.slice(0, k);
};
// test cases
console.log("test-case-1=>", topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Expected: [1, 2]
console.log("test-case-2=>", topKFrequent([1], 1)); // Expected: [1]
console.log("test-case-3=>", topKFrequent([1, 2], 2)); // Expected: [1, 2]
console.log("test-case-4=>", topKFrequent([3, 0, 1, 0], 1)); // Expected: [0]
console.log("test-case-5=>", topKFrequent([1, 1, 1, 1, 1, 1], 1)); // Expected: [1]
console.log("test-case-6=>", topKFrequent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // Expected: [1, 2, 3, 4, 5]
console.log("test-case-7=>", topKFrequent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]