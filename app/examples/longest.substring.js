let executeLog = (s) => {
    var max = 0;
    var charsNotRepeated = [];
    var possibleResults = [];

    for (let i = 0; i < s.length; i++) {
        var currentChar = s[i];
        if (charsNotRepeated.includes(currentChar)) { 
            var startIndex = charsNotRepeated.indexOf(currentChar);
            var sliceIndex = startIndex + 1;
            charsNotRepeated = charsNotRepeated.slice(sliceIndex);
        } 
        charsNotRepeated.push(currentChar);
        max = Math.max(max, charsNotRepeated.length);
        if (charsNotRepeated.length >= max) {
            possibleResults.push(charsNotRepeated);
        }
    }
    console.table([...new Set(possibleResults)]);

    return max;
}

let execute = (s) => {
    var max = 0;
    var charsNotRepeated = [];

    for (let i = 0; i < s.length; i++) {
        var currentChar = s[i];
        if (charsNotRepeated.includes(currentChar)) { 
            var startIndex = charsNotRepeated.indexOf(currentChar);
            var sliceIndex = startIndex + 1;
            charsNotRepeated = charsNotRepeated.slice(sliceIndex);
        } 
        charsNotRepeated.push(currentChar);
        max = Math.max(max, charsNotRepeated.length);
    }

    return max;
}

module.exports.execute = executeLog;