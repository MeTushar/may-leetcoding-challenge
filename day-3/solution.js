/*
    Few consideration after seeing the example below
    canConstruct("a", "b") -> false
    canConstruct("aa", "ab") -> false
    canConstruct("aa", "aab") -> true

    * Each character in magazine string is unique even if a character is
        repeating.
    * ransomNote string length should be less than or equal to
        magazine string length because it is getting created from magazine string.

    If suppose length of ransomNote is n & length of magazine is m.
    The solution below has the time complexity of o(n + m) &
    space complexity is o(m);

    Firstly we can check if length of ransomNote string is grater than 
    magazine string then we just have to return false (Check the points above).

    In this solution in first loop we will create an object(or hash map) from magazine string
    & if there are repeating characters in it we just have to increase the value of that property
    by 1 in our object(or hashmap).

    In second loop we just have to loop through the ransomNote string & check it against our object
    if we don't find the string character as property in our object we just have to return false becasue all
    the character in the ransom string should be there in magazine string. If we found the property we have to
    just reduce its value by 1 & in last we just have to return true.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const hashMap = {};
    for(let i = 0; i < magazine.length; i++) {
       if(hashMap[magazine[i]] === undefined) {
           hashMap[magazine[i]] = 1;
       } else {
           hashMap[magazine[i]] += 1;
       }
    }
    
    for(let j = 0; j < ransomNote.length; j++) {
        if(!hashMap[ransomNote[j]]) {
            return false;
        } else {
            hashMap[ransomNote[j]] -= 1;
        }
    }
    return true;
};