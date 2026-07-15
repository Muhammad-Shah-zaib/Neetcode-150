function productExceptSelf(nums: number[]): number[] {

    // left prefix products
    let leftProduct: number = nums[0]

    const leftProductArray: Array<number> = [...nums]
    for (let i = 1; i < nums.length; i++) {
        leftProductArray[i - 1] = leftProduct
        leftProduct *= nums[i]
    }
    console.log(leftProductArray)

    // right suffix products
    let rightProduct: number = nums[nums.length - 1]

    const rightProductArray: Array<number> = [...nums]
    for (let i = nums.length - 2; i >= 0; i--) {
        rightProductArray[i + 1] = rightProduct;
        rightProduct *= nums[i]
    }
    console.log(rightProductArray);

    return nums.map((num, index) => {
        if (index === 0) return rightProductArray[index + 1]
        if (index === nums.length - 1) return leftProductArray[index - 1]

        return leftProductArray[index - 1] * rightProductArray[index + 1]
    })
};