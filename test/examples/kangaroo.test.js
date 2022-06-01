var chai = require('chai'); 
var expect = chai.expect;

const { execute } = require('../../app/examples/kangaroo');

describe("kangaroo", function(){

    it("test default", function() {

        let x1 = 0;
        let v1 = 3;
        let x2 = 4;
        let v2 = 2;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('YES');
    })

    it("test v1 < 1", function() {

        let x1 = 0;
        let v1 = 0;
        let x2 = 4;
        let v2 = 2;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test v1 > 10000", function() {

        let x1 = 0;
        let v1 = 10001;
        let x2 = 4;
        let v2 = 2;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test v2 < 1", function() {

        let x1 = 0;
        let v1 = 2;
        let x2 = 4;
        let v2 = 0;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test x1 < 0", function() {

        let x1 = -1;
        let v1 = 2;
        let x2 = 4;
        let v2 = 0;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test x1 > 10000", function() {

        let x1 = 10001;
        let v1 = 2;
        let x2 = 4;
        let v2 = 0;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test x2 < 0", function() {

        let x1 = 10;
        let v1 = 2;
        let x2 = -1;
        let v2 = 0;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test x2 > 10000", function() {

        let x1 = 10;
        let v1 = 2;
        let x2 = 100001;
        let v2 = 0;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test v2 > 10000", function() {

        let x1 = 0;
        let v1 = 9000;
        let x2 = 4;
        let v2 = 10001;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test 0 2 5 3", function() {

        let x1 = 0;
        let v1 = 2;
        let x2 = 5;
        let v2 = 3;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test x1 = 9999 and x2 = 10000", function() {

        let x1 = 9999;
        let v1 = 3;
        let x2 = 10000;
        let v2 = 2;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('YES');
    })

    it("test x1 = 9998 and x2 = 10000", function() {

        let x1 = 9998;
        let v1 = 4;
        let x2 = 10000;
        let v2 = 2;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('YES');
    })

    it("test x1 = 9996 and x2 = 10000", function() {

        let x1 = 9996;
        let v1 = 4;
        let x2 = 10000;
        let v2 = 2;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('YES');
    })

    it("test 21 6 47 3", function() {

        let x1 = 21;
        let v1 = 6;
        let x2 = 47;
        let v2 = 3;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test v2 > 10000", function() {

        let x1 = 9996;
        let v1 = 3;
        let x2 = 10000;
        let v2 = 10001;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test x1 == 10000 match position", function() {

        let x1 = 10000;
        let v1 = 2;
        let x2 = 9998;
        let v2 = 2;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('NO');
    })

    it("test 4523 8092 9419 8076", function() {

        let x1 = 4523;
        let v1 = 8092;
        let x2 = 9419;
        let v2 = 8076;

        let result = execute(x1,v1,x2,v2);

        expect(result).to.eql('YES');
    })


})