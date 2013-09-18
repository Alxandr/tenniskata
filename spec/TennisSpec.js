describe('Tennis', function () {
	var tennis;
	
	beforeEach(function (){
		tennis = new Tennis();
	});

	it("should return \"Love - Love\" at beginning of game", function () {
		expect(tennis.getScore()).toBe("Love - Love");
	});

	it("should return \"Fifteen - Love\" if first player takes first point", function () {
		tennis.wonPoint("player1");
		expect(tennis.getScore()).toBe("Fifteen - Love");
	});

	it("should return \"Love - Fifteen\" if second player takes first point", function() {
		tennis.wonPoint("player2");
		expect(tennis.getScore()).toBe("Love - Fifteen");
	});

	it("should return \"Thirty - Thirty\" if both players have 2 point", function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		expect(tennis.getScore()).toBe("Thirty - Thirty");
	});
});
