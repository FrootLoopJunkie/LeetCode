/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    if(digits[digits.length - 1] >= 10){
        let curr = digits.length - 1;
        while(digits[curr] >= 10){
            if(digits[curr - 1]){
                digits[curr] = 0;
                digits[curr - 1] += 1;
            }else{
                digits[curr] = 0;
                digits.unshift(1)
            }
            curr --;
        }
    }
    return digits;
};