var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/plus.minus');

describe("plus.minus", function(){

    it("test 1x5", function() {

        let matrix = [1,1,0,-1,-1];
        console.table(matrix);

        let expected = '0.400000\n0.400000\n0.200000';

        expect(expected).to.eql(execute(matrix));
    })

});