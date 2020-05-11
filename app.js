let Score, roundScore, activePlayer;

Score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', () => {
	// Get a random number between 1 and 6
	let dice = Math.floor(Math.random() * 6) + 1;

	// Display de result
	let diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'img/dice/dice-' + dice + '.png';

	// Update the round score only if the random number is not 1
	if (dice !== 1) {
		//Add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		//Next player
		activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
		roundScore = 0;
	}
});
