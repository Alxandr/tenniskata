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

	it("should return \"Deuce\" if both players have 3 points", function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");

		expect(tennis.getScore()).toBe("Deuce");
	});

	it("should return \"Deuce\" if both players have more than 3 points, and the same number of points", function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");

		for(var i = 0; i < 100; i++) {
			tennis.wonPoint("player1");
			tennis.wonPoint("player2");
			expect(tennis.getScore()).toBe("Deuce");
		}
	});

	it('should return "Forty - Love" if the first player has won 3 points and the second player has wone none', function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");

		expect(tennis.getScore()).toBe("Forty - Love");
	});

	it('should return "Fifteen - Forty" if the second player has won 3 points and the first player has one 1', function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");

		expect(tennis.getScore()).toBe("Fifteen - Forty");
	});

	it('should return "Advantage player1" if both players have at least three points and the first player has 1 more point than the second', function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");

		for(var i = 0; i < 100; i++) {
			tennis.wonPoint("player1");
			tennis.wonPoint("player2");
			expect(tennis.getScore()).toBe("Advantage player1");
		}
	});

	it('should return "Advantage player2" if both players have at least three points and the second player has 1 more point than the first', function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");

		for(var i = 0; i < 100; i++) {
			tennis.wonPoint("player1");
			tennis.wonPoint("player2");
			expect(tennis.getScore()).toBe("Advantage player2");
		}
	});

	it('should return "Win for player1" if player1 has at least 2 points more than player2 and player1 has at least 4 points', function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");

		expect(tennis.getScore()).toBe("Win for player1");
	});

	it('should return "Win for player1" if player1 has at least 2 points more than player2 and player1 has at least 4 points', function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");

		expect(tennis.getScore()).toBe("Win for player1");
	});

	it('should return "Win for player1" if player1 has at least 2 points more than player2 and player1 has at least 4 points', function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");

		expect(tennis.getScore()).toBe("Win for player1");
	});

	it('should return "Win for player1" if player1 has at least 2 points more than player2 and player1 has at least 4 points', function() {
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");

		for(var i = 0; i < 100; i++) {
			tennis.wonPoint("player1");
			tennis.wonPoint("player2");
			expect(tennis.getScore()).toBe("Win for player1");
		}
	});

	it('should return "Win for player2" if player2 has at least 2 points more than player1 and player2 has at least 4 points', function() {
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");

		expect(tennis.getScore()).toBe("Win for player2");
	});

	it('should return "Win for player2" if player2 has at least 2 points more than player1 and player2 has at least 4 points', function() {
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player1");

		expect(tennis.getScore()).toBe("Win for player2");
	});

	it('should return "Win for player2" if player2 has at least 2 points more than player1 and player2 has at least 4 points', function() {
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");

		expect(tennis.getScore()).toBe("Win for player2");
	});

	it('should return "Win for player2" if player2 has at least 2 points more than player1 and player2 has at least 4 points', function() {
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player2");
		tennis.wonPoint("player1");
		tennis.wonPoint("player1");

		for(var i = 0; i < 100; i++) {
			tennis.wonPoint("player2");
			tennis.wonPoint("player1");
			expect(tennis.getScore()).toBe("Win for player2");
		}
	});
});
