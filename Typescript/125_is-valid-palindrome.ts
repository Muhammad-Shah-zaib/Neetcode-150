function isPalindrome(s: string): boolean {
    const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let i = 0, j = s.length - 1;
    let sArray: string[] | string = cleanedStr.split('')


    while (i < j) {
        const temp = sArray[i]
        sArray[i] = sArray[j]
        sArray[j] = temp

        i++, j--;
    }


    return cleanedStr.split(' ').join() === sArray.join('')
};