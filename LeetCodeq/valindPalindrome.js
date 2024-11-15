var isPalindrome = function(s) {
    let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");
    
    return reversedStr === cleanedStr;
};
