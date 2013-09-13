# Kata: Tennis

## In English

Tennis has a rather quirky scoring system, and to newcomers it can be a little difficult to keep track of. Your task is to write a system which a scoreboard can use to display the current score during tennis matches.

You can assume, when player 1 scores, a method `wonPoint(“player1”)` is being called, and similarly `wonPoint(“player2”)`. To get the current score as a string the `getScore()` function is called.

1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent. The score is then “Win for player1” or “Win for player2”.
2. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “Love”, “Fifteen”, “Thirty”, and “Forty” respectively.
3. If at least three points have been scored by each player, and the scores are equal, the score is “Deuce”.
4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “Advantage player1” or “Advantage player2”.

 N.B! Sets and Matches are out of scope, so you only need to report the score for the current game.

## På norsk

Tennis har et litt spesielt poengsystem, og for nykommere kan det til tider være vanskelig å følge. Jobben din er å skrive et system som en resultattavle kan benytte for å vise frem nåværende stilling under tennis kamper.

Du kan anta at når player 1 scorer, vil en funksjon `wonPoint(“player1”)` bli kalt, og tilsvarende `wonPoint(“player2”)`. For å få den nåværende stillingen som en string vil `getScore()` funksjonen bli kalt.

1. Et game er vunnet av den første spiller som vinner minst fire poeng totalt og har minst to poeng mer enn motstanderen. Resultatet er da enten “Win for player1” eller “Win for player2”.
2. Det løpende resultatet i hvert game er beskrevet på en måte som er spesiell for tennis: Resultat fra null til tre poeng er beskrevet som “Love”, “Fifteen”, “Thirty”, and “Forty”.
3. Hvis minst tre poeng er blitt vunnet av hver spiller, og resultatet er likt, så er stillingen "Deuce".
4. Hvis minst tre poeng er blitt vunnet av hver spiller, og en spiller har et poeng mer enn motstanderen, så er resultatet av game'et “Advantage player1” eller “Advantage player2”.

N.B! Set og Match er utenfor scope, så du trenger kun å rapportere stillingen i det nåværende game'et. 

 