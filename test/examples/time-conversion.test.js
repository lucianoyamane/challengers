var chai = require('chai'); 
var expect = chai.expect;
const { execute } = require('../../app/examples/time-conversion');

describe("time-conversion", function(){

    it("test 07:05:45PM", function() {

        let init = '07:05:45PM';

        let expected = '19:05:45';

        expect(expected).to.eql(execute(init));
    
    })

    it("test 12:01:00PM", function() {

        let init = '12:01:00PM';

        let expected = '12:01:00';

        expect(expected).to.eql(execute(init));
    
    })

    it("test 12:01:00AM", function() {

        let init = '12:01:00AM';

        let expected = '00:01:00';

        expect(expected).to.eql(execute(init));
    
    })

    it("test 08:01:00AM", function() {

        let init = '08:01:00AM';

        let expected = '08:01:00';

        expect(expected).to.eql(execute(init));
    
    })
})