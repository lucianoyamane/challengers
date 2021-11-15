var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/candles');

describe("candles", function(){

    it("test 3 2 1 3", function() {

        let matrix = [3,2,1,3];

        let expected = 2;

        expect(expected).to.eql(execute(matrix));
    
    })

    it("test 3 2 2 3", function() {

        let matrix = [3,2,2,3];

        let expected = 2;

        expect(expected).to.eql(execute(matrix));
    
    })

    it("test 1 2 3 4", function() {

        let matrix = [1,2,3,4];

        let expected = 1;

        expect(expected).to.eql(execute(matrix));
    
    })

    it("test 3 3 3 3", function() {

        let matrix = [3,3,3,3];

        let expected = 4;

        expect(expected).to.eql(execute(matrix));
    
    })

    it("test 3 2 2 3 2", function() {

        let matrix = [3,2,2,3,2];

        let expected = 2;

        expect(expected).to.eql(execute(matrix));
    
    })

})