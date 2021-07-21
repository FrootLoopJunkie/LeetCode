/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result = -1;
    let obj = {};
    for(let i = 0; i < s.length; i++){
        let current = s[i];
        if(!obj[current]){
            obj[current] = {};
            obj[current].value = 1;
            obj[current].index = i;
        }else{
            obj[current].value ++;
        }
    }
    
    for(const letter in obj){
        if(obj[letter].value === 1){
            result = obj[letter].index;
            break;
        }
    }
    return result;
};