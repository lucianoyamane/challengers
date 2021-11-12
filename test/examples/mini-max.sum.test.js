var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/mini-max.sum');

describe("mini-max.sum", function(){

    it("test 1,2,3,4,5", function() {

        let matrix = [1,2,3,4,5];
        console.table(matrix);

        let expected = '10 14';

        expect(expected).to.eql(execute(matrix));
    })

    it("test 1,3,5,7,9", function() {

        let matrix = [1,3,5,7,9];
        console.table(matrix);

        let expected = '16 24';

        expect(expected).to.eql(execute(matrix));
    })

    it("test 5,5,5,5,5", function() {

        let matrix = [5,5,5,5,5];
        console.table(matrix);

        let expected = '20 20';

        expect(expected).to.eql(execute(matrix));
    })

});