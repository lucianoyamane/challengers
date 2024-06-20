let execute = (s) => {
    var max = 0;
    var charsNotRepeated = [];
    var begin;
    var possibleResults = [];

    for (let i = 0; i < s.length; i++) {
        var currentChar = s[i];
        if ( i == 0 ) {
            begin = i;
            charsNotRepeated.push(currentChar);
        } else if (charsNotRepeated.includes(currentChar) && i > begin ) { 
            if (charsNotRepeated.indexOf(currentChar) == 0) {
                begin++;
                charsNotRepeated = charsNotRepeated.filter(item => item != currentChar);
                charsNotRepeated.push(currentChar);
            } else {
                var startIndex = charsNotRepeated.indexOf(currentChar) + 1;
                charsNotRepeated = charsNotRepeated.slice(startIndex);
                begin = i;
                charsNotRepeated.push(currentChar);
            }
        } else {
            charsNotRepeated.push(currentChar);
        }
        if (charsNotRepeated.length >= max) {
            max = charsNotRepeated.length;
            possibleResults.push(charsNotRepeated);
            console.log('currentChar', currentChar);
            console.log('begin', begin);
            console.log('max', max);
            console.table(charsNotRepeated);
            console.log('***************');
        }
    }
    console.table(possibleResults);

    return max;
}

module.exports.execute = execute;