describe('findSpaceship', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return [0,0] for X', function() {
        expect(calculator.add('X')).toEqual([0,0]);
    });

	it('should return [1,0] for .X', function() {
        expect(calculator.add('.X')).toEqual([1,0]);
    });
	it('should return [2,0] for ..X', function() {
        expect(calculator.add('..X')).toEqual([2,0]);
    });


	it('should return [0,0] for ...\\nX..', function() {
        expect(calculator.add('...\nX..')).toEqual([0,0]);
    });
});
