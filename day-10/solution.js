/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let trustCount = Array(N+1).fill(0);
    
    let j;
    for(let i = 0; i < trust.length; i++) {
        j = trust[i][0];
        trustCount[j] -= 1;
        j = trust[i][1];
        trustCount[j] += 1;
    }
    
    for (let i = 1; i <= N; i++) {
        if(trustCount[i] == N-1) {
            return i;
        }
    }
    
    return -1;
};