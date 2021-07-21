/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let result = '';
    for(let i = num.length - 1; i >= 0; i--){
        let current = num[i].toString();
        if(result === '' && num[i] % 2 === 1){
            result = current;
        }else if(result !== ''){
            result = `${current}${result}`;
        }
    }
    return result.toString();
};