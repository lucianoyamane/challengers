let execute = function(candles) { 

    let max = Math.max(...candles);
    let ocurrences = 0;

    candles.forEach((element) => {
        if (element === max) {
            ocurrences++;
        }
    })
    console.log(ocurrences)
    return ocurrences;

}

module.exports.execute = execute;