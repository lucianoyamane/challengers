let execute = function(n) {
    let arrResult = [];
    
    for(let i = 1; i < n + 1; i++) {
        let space = n - i;
        let result = new Array(space).fill(' ');
        result = result.concat(new Array(i).fill('#'));
        arrResult.push(result.join(''));
    }    
    return arrResult.join('\n');
}

module.exports.execute = execute;