describe('Tennis', function () {
	var tennis;
	
	beforeEach(function (){
		tennis = new Tennis();
	});

	it("at beginning of game", function () {
		expect(tennis.getScore()).toBe("Love - Love");
	});

	it("first match", function () {
		tennis.wonPoint("player1");

		// expect(tennis.getScore()).toBe("");
	});
})