describe('findSpaceship', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return [0,0] for X', function() {
        expect(calculator.add('X')).toEqual([0,0]);
    });
});
