let execute = function(number) {
    
    let restante = number % 5;
    
    let redondo = number - restante;

    
    return (redondo / 5) + 1;
}

module.exports.execute = execute;