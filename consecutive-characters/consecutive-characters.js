/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let longest = 0;
    let currentLength = 1;
    
    for(let i = 0; i < s.length; i++){
        let current = s[i];
        let next = s[i + 1];
        if(next === current){
            currentLength ++;
        }else{
            longest = Math.max(longest, currentLength);
            currentLength = 1;
        }
    }
    
    return longest;
};