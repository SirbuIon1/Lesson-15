var calcObj = require('./index');

describe('power', function() {
    var x, n;

    describe('calculatePow', function() {
        test('should return 1 when x = 1, n = 8', function() {
            x = 1;
            n = 8;
            expect(calcObj.calculatePow(x, n)).toEqual(1);
        });
        test('should return 8 when x = 2, n = 3', function() {
            x = 2;
            n = 3;
            expect(calcObj.calculatePow(x, n)).toEqual(8);
        });
        test('should return 1 when x = 2, n = 0', function() {
            x = 2;
            n = 0;
            expect(calcObj.calculatePow(x, n)).toEqual(1);
        });
        test('should return 0 when x = 0, n = 3', function() {
            x = 0;
            n = 3;
            expect(calcObj.calculatePow(x, n)).toEqual(0);
        });
    });
}); 