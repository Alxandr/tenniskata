
function Tennis() {
	this.score = ["Love","Fifteen","Thirty","Forty","Deuce","Advantage player1","Advantage player2","Win for player1","Win for player2"];
	this.player1Score= 0;
	this.player2Score= 0;
}



Tennis.prototype.wonPoint = function(player) {
	if(player==="player1"){
		this.player1Score++;
	}else{
		this.player2Score++;
	}

};



Tennis.prototype.getScore = function() {
	if(this.player1Score === this.player2Score && this.player1Score >=3 && this.player2Score>=3){

		return this.score[4];
	}
	if(this.player1Score-this.player2Score===1 && this.player1Score>=4)
		return this.score[5];
	if(this.player2Score-this.player1Score===1 && this.player2Score>=4)
		return this.score[6];

	if(this.player1Score-this.player2Score>=2 &&this.player1Score>=4)
		return this.score[7];

	if(this.player2Score-this.player1Score>=2 &&this.player2Score>=4)
		return this.score[8];

	return this.score[this.player1Score] +" - "+this.score[this.player2Score];
};
