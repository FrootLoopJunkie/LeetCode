/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = 0;
    let resultArr = [];
    for(let i = 0; i < candies.length; i++){
        maxCandies = Math.max(maxCandies, candies[i]);
    }
    
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= maxCandies){
            resultArr.push(true);
        }else{
            resultArr.push(false);
        }
    }
    
    return resultArr;
};