/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
/*
    Below solution have time complexity of O(S*J) & space complexity of
    O(1)
*/
var numJewelsInStones = function(J, S) {
    let numOfJewels = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.includes(S[i])) {
            numOfJewels += 1;
        }
    }
    return numOfJewels;
};
/*
    Below solution is of time complexity O(J + S) & space complexity O(n)
    We created an object to avoid nested loop & when looping over the stone string
    we just have to check if object has that property if yes then increase the 
    count by 1
*/
var numJewelsInStones = function(J, S) {
    let numOfJewels = 0;
    const jewelArr = J.split("");
    const jewelObj = {};
    for(let i = 0; i < jewelArr.length; i++) {
        jewelObj[jewelArr[i]] = true;
    }
    
    for(let j = 0; j < S.length; j++) {
        if(jewelObj[S[j]]) {
            numOfJewels += 1;
        }
    }
    return numOfJewels;
};