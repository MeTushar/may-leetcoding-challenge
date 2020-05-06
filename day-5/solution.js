/*
Problem Statement:
find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Note: You may assume the string contain only lowercase letters.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

The space & time complexity is O(n).
We are creating an object by looping over the string to check the occurence of character in the string.
"leetcode" -> {"l": 1, "e": 3, "t": 1, "c": 1, "o": 1, "d": 1}

then we have to just loop over the string again to find out the first character that has occured only once & 
return the index else we will return -1.

For above object we will return index 0 because "l" has occured once which means it is
the first unique character

*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const obj = {};
    for(let i = 0; i < s.length ; i++) {
        if(obj[s[i]] == undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(obj[s[i]] == 1) {
            return i;
        }
    }
    
    return -1;
};