/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    nString = n.toString();
    let product = 1;
    let sum = 0;
    
    for(let i = 0; i < nString.length; i++){
        sum += parseInt(nString[i]);
        product = product * nString[i];
    }
    
    return (product - sum)
};