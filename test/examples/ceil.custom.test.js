var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/ceil.custom');

describe("ceil.custom", function(){

    it("test 73", function() {

        let number = 73;

        let expected = 15;

        let result = execute(number);

        expect(expected).to.eql(result);
    
    })

    it("test 1", function() {

        let number = 1;

        let expected = 1;

        let result = execute(number);

        expect(expected).to.eql(result);
    
    })

   

})