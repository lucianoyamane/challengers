var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/staircase');

describe("staircase", function(){

    it("test 4", function() {

        let expected = '   #\n  ##\n ###\n####';

        expect(expected).to.eql(execute(4));
    })

    it("test 6", function() {

        let expected = '     #\n    ##\n   ###\n  ####\n #####\n######';

        expect(expected).to.eql(execute(6));
    })

});