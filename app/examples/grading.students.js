let execute = function(grades) {
    let result = [];

    grades.forEach(element => {
        if ( element >= 38 ){
            let nextRound5 = Math.ceil(element / 5) * 5;
            let difference = nextRound5 - element;
            if (difference < 3) {
                result.push(nextRound5);
            } else {
                result.push(element);    
            }
        } else {
            result.push(element);
        }
        

    });
    return result;
}


module.exports.execute = execute;