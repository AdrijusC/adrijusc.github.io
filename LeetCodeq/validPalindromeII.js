var validPalindrome = function(s) {
    let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse();
    

    return joinStr === reversedrevStr;
};

console.log(validPalindrome('abc'));