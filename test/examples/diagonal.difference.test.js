var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/diagonal.difference');

describe("diagonal.difference", function(){

    it("test 3x3", function() {

        let matrix = [ [1, 2, 3], [4, 5, 6], [9, 8, 9] ];
        console.table(matrix);

        let expected = 2;

        expect(expected).to.eql(execute(matrix));
    })

    it("test 4x4", function() {
        let matrix = [ [1, 2, 3, 4], [7, 6, 9, 0], [4, 4, 2, 1], [0, 9, 6, 5] ];
        console.table(matrix);
        let expected = 3;

        expect(expected).to.eql(execute(matrix));
    })

})