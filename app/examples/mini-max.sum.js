let execute = function(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let functionFilterMax = undefined;
    let functionFilterMin = undefined;
    
    if (min === max) {
        functionFilterMax = (number, i) => i != 0;
        functionFilterMin = (number, i) => i != 0;
    } else {
        functionFilterMax = (number) => number != max;
        functionFilterMin = (number) => number != min;
    }

    let arrWithoutMax = arr.filter(functionFilterMax);
    let arrWithoutMin = arr.filter(functionFilterMin);
    

    let sumWithoutMax = arrWithoutMax.reduce((a,b) => a + b, 0);
    let sumWithoutMin = arrWithoutMin.reduce((a,b) => a + b, 0);

    return [sumWithoutMax, sumWithoutMin].join(' ');

}

module.exports.execute = execute;