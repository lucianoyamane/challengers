var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/staircase');

describe("staircase", function(){

    it("test 4", function() {

        let matrix = [1,1,0,-1,-1];
        console.table(matrix);

        let expected = '   #\n  ##\n ###\n####';
        console.log(expected);

        expect(expected).to.eql(execute(4));
    })

    it("test 6", function() {

        let matrix = [1,1,0,-1,-1];
        console.table(matrix);

        let expected = '     #\n    ##\n   ###\n  ####\n #####\n######';
        console.log(expected);

        expect(expected).to.eql(execute(6));
    })

});