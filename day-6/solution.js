/*
In this problem statement you have to find a majority element which has occured more than n/2 times
which means a number which is repeated more than half of the times of the length of the array.

Meaning if length of an array is 8 any number which has occured more than 4 times is the answer & if there
is no number like that then we can written -1 because we have to return a number. 

eg.
Input: [3,2,3]
Output: 3

Input: [2,2,1,1,1,2,2]
Output: 2

But Luckily problem statement also state that:
You may assume that the array is non-empty and the majority element always exist in the array.

Which means you don't have to check for non empty array(edge case) & you also don't have to check
for any number which occured more than n/2 times.

Below solution has time complexity of  O(n) if n is the length of an array & spcae complexity
is also O(n).

We are just creating an object(majorityElementObj) storing the number as property & 
value is how many times the number occured in the array.

Then We are looping over object to compare the value with a comparator(Initial value 0) if the value of
comparator is less then that key's value of the object we are assigning that value to the comparator
also we are assigning the key to a variable 'majorityElement' & after checking occurence of all number
we are returning the key which has occured maximum time.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majorityElementObj = {};
    let comparator = 0;
    let majorityElement = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if(majorityElementObj[nums[i]] != undefined) {
          majorityElementObj[nums[i]] += 1;  
        } else {
            majorityElementObj[nums[i]] = 1;
        }
    }
    
    for (let key in majorityElementObj) {
        if(majorityElementObj[key] > comparator) {
            comparator = majorityElementObj[key];
            majorityElement = key
        }
    }
    
    return majorityElement;
};