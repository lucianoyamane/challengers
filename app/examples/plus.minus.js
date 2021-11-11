let execute = function(arr) {
    let length = arr.length;
    let positive = 0;
    let zero = 0;
    let negative = 0;

    arr.forEach(function(number){
        if (number > 0) {
            positive++;
        }
        if (number == 0) {
            zero++;
        }
        if (number < 0) {
            negative++;
        }
    })

    let matrixResult = [(positive/length).toFixed(6),  (negative/length).toFixed(6), (zero/length).toFixed(6)].join('\n');
    return matrixResult;
    
}

module.exports.execute = execute;