let execute = function(x1, v1, x2, v2) {

    let result = 'NO';

    if (v1 < 1 || v1 > 10000 || v2 < 1 || v2 > 10000) {
        return result;
    }

    if (x1 < 0 || x1 > 10000 || x2 < 0 || x2 > 10000) {
        return result;
    }

    if (x1 > x2 && v1 >= v2) {
        return result;
    }
    
    if (x2 > x1 && v2 >= v1) {
        return result;
    }

    var jump = (x2 - x1) / (v2 - v1);
    result = jump % 1 === 0 ? 'YES' : 'NO';
    
    return result;
}

module.exports.execute = execute;