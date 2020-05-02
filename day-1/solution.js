/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

/*
    We could have done it using normal for loop with the time complexity of o(n) but the problem stated 
    that you should minimize the number of call in this case if the bad version is the second last & n is 
    100 you have to loop for 99 times which is 99 calls.


    This is an improved solution because we are starting from the middle index for any loop
    so if that index return true we have to check all the versions below that & if it is 
    false we have to check all the versions above that.
    space complexity - o(1)
    time complexity - o(n)

    Here we have reduced the number of api calls to half even if the first bad version is the second last
    we have to traverse half of the total number which means half of the api calls(time complexity & space complexity 
    was same as before) but it has a problem
    for very large number time limit was exceeding.
*/
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n > 0) {
            let middleVersion = Math.floor(n/2) + 1;
            let firstBadVersion = middleVersion;
            if(isBadVersion(middleVersion)) {
               for(let i = middleVersion - 1; i > 0; i--) {
                   if(isBadVersion(i)) {
                       firstBadVersion = i;
                   } else {
                       break;
                   }
               }
            } else {
                for(let i = middleVersion + 1; i <= n; i++) {
                    if(isBadVersion(i)) {
                        firstBadVersion = i;
                        break;
                    }
                }
            }
            return firstBadVersion;
        } else {
            return 1;
        }
    };
};

/*
The best solution & accepted solution was binary search.
always divide the range in half & check for which half to work on & then again divide in half
until you get result

The time complexity for below solution is o(logn) & space complexity is o(1)
*/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        while(start + 1 < end) {   
            let middle = Math.floor((end - start)/2 + start);
            if(isBadVersion(middle)) {
                end = middle;
            } else {
                start = middle;
            }
        }
        if(isBadVersion(start)) {
            return start;
        } 
        return end;
            
    };
};