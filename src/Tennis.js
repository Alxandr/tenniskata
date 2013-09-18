
function Tennis() {
	this.score=["Love","Fifteen"];
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

	return this.score[this.player1Score] +" - "+this.score[this.player2Score];
};
