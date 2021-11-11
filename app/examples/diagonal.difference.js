

let execute = function(matrixArray) {
    
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    matrixArray.forEach(function(line, i) {
        leftDiagonal += matrixArray[i][i];
        let lengthLine = line.length;
        line.forEach(function(number, j) {
            if (i + j === lengthLine - 1) {
                rightDiagonal += number;
            }
        })
    })

    return Math.abs(leftDiagonal - rightDiagonal);
}

module.exports.execute = execute;