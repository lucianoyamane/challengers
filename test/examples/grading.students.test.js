var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/grading.students');

describe("grading.students", function(){

    it("test default", function() {

        let grades = [ 73, 67, 38, 33 ];

        let expected = [ 75, 67, 40, 33];

        let result = execute(grades)

        expect(result).to.include(expected[0]);
        expect(result).to.include(expected[1]);
        expect(result).to.include(expected[2]);
        expect(result).to.include(expected[3]);
    })


})