/* Space & time complexity for below solution is o(n) */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = "";
    let divisor = 0;
    let remainder = 0;
    let result = 0;
    let counter = 0;
    if(num == 1) {
        return 0;
    }
    if(num == 0) {
        return 1;
    }
    function DecToBinary(num) {
        if (divisor != 1) {
            remainder = num % 2;
            divisor = parseInt(num / 2);
            binary = remainder + binary;
            DecToBinary(divisor);
        } else {
            binary = divisor + binary;
        }
    }
    DecToBinary(num);
    binary = binary.split("");
    for(let i = 0; i < binary.length; i++) {
        if(binary[i] == "0") {
            binary[i] = "1";
        } else {
            binary[i] = "0";
        }
    }
    binary = binary.join("");
    for(let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] == "1") {
            result += Math.pow(2, counter);
        }
        counter++;
    }
    return result;
};