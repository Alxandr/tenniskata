(function(root) {

	var playerScoreNames = ["Love","Fifteen","Thirty","Forty"];
	var specialScores = ["Deuce","Advantage player1","Advantage player2","Win for player1","Win for player2"];

	var Tennis = root.Tennis = function() {
		var scores = [0,0];

		function wonPoint (player) {
			switch(player) {
				case 'player1': scores[0]++; break;
				case 'player2': scores[1]++; break;
			}
		}

		function getScore() {
			if(scores[0] > 3 && scores[0] > scores[1] + 1)
				return specialScores[3];
			if(scores[1] > 3 && scores[1] > scores[0] + 1)
				return specialScores[4];

			if(scores[0] > 2 && scores[1] > 2) {
				if(scores[0] > scores[1])
					return specialScores[1];
				else if(scores[1] > scores[0])
					return specialScores[2];
				else
					return specialScores[0];
			}

			return playerScoreNames[scores[0]] + ' - ' + playerScoreNames[scores[1]];
		}

		return {
			wonPoint: wonPoint,
			getScore: getScore
		};
	};

})(this);