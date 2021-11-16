let execute = function(s) {
    let timeAbbreviation = s.substring(8, 10);
    let time = s.substring(0,8); 
    let timeTempArr = time.split(":");   
    
    if (timeAbbreviation === 'PM' && parseInt(timeTempArr[0]) < 12) {
        timeTempArr[0] = parseInt(timeTempArr[0]) + 12;
    }
    if (timeAbbreviation === 'AM' && timeTempArr[0] === '12') {
        timeTempArr[0] = '00'  
    }

    return timeTempArr.join(':');

}

module.exports.execute = execute;