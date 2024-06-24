var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/longest.substring');

describe("longest substring", function() {

    it("test abcabcbb", function() {

        let s = 'abcabcbb';

        let result = execute(s);

        expect(result).to.eql(3);
    })

    it("test bbbbb", function() {

        let s = 'bbbbb';

        let result = execute(s);

        expect(result).to.eql(1);
    })

    it("test pwwkew", function() {

        let s = 'pwwkew';

        let result = execute(s);

        expect(result).to.eql(3);
    })

    it("test dvdf", function() {

        let s = 'dvdf';

        let result = execute(s);

        expect(result).to.eql(3);
    })

    it("test ohvhjdml", function() {

        let s = 'ohvhjdml';

        let result = execute(s);

        expect(result).to.eql(6);
    })

    it("test one espace", function() {

        let s = ' ';

        let result = execute(s);

        expect(result).to.eql(1);
    })

    it("test one empty", function() {

        let s = '';

        let result = execute(s);

        expect(result).to.eql(0);
    })

    

    

});