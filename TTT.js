// Function called whenever user tab on any box 
function myfunc() { 

	// Setting DOM to all boxes or input field 
	var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
	b1 = document.getElementById("b1").value; 
	b2 = document.getElementById("b2").value; 
	b3 = document.getElementById("b3").value; 
	b4 = document.getElementById("b4").value; 
	b5 = document.getElementById("b5").value; 
	b6 = document.getElementById("b6").value; 
	b7 = document.getElementById("b7").value; 
	b8 = document.getElementById("b8").value; 
	b9 = document.getElementById("b9").value; 

	var b1btn, b2btn, b3btn, b4btn, b5btn, 
		b6btn, b7btn, b8btn, b9btn; 
		
	b1btn = document.getElementById("b1"); 
	b2btn = document.getElementById("b2"); 
	b3btn = document.getElementById("b3"); 
	b4btn = document.getElementById("b4"); 
	b5btn = document.getElementById("b5"); 
	b6btn = document.getElementById("b6"); 
	b7btn = document.getElementById("b7"); 
	b8btn = document.getElementById("b8"); 
	b9btn = document.getElementById("b9"); 

	// Checking if Player X won or not and after 
	// that disabled all the other fields 
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 

	// Checking of Player X finish 
	// Checking for Player 0 starts, Is player 0 won or 
	// not and after that disabled all the other fields 
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
		b2 == '0') && (b3 == '0' || b3 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
		b4 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
		b8 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
		b6 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
		b5 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
		b5 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
		b5 == '0') && (b8 == '0' || b8 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
		b5 == '0') && (b6 == '0' || b6 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 

	// Checking of Player 0 finish 
	// Here, Checking about Tie 
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') && 
		(b4 == 'X' || b4 == '0') && (b5 == 'X' || 
			b5 == '0') && (b6 == 'X' || b6 == '0') && 
		(b7 == 'X' || b7 == '0') && (b8 == 'X' || 
			b8 == '0') && (b9 == 'X' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Match Tie"; 
	} 
	else { 

		// Here, Printing Result 
		if (flag == 1) { 
			document.getElementById('print') 
				.innerHTML = "Player X Turn"; 
		} 
		else { 
			document.getElementById('print') 
				.innerHTML = "Player 0 Turn"; 
		} 
	} 
} 

// Function to reset game 
function myfunc_2() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0 
flag = 1; 
function myfunc_3() { 
	if (flag == 1) { 
		document.getElementById("b1").value = "X"; 
		document.getElementById("b1").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b1").value = "0"; 
		document.getElementById("b1").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_4() { 
	if (flag == 1) { 
		document.getElementById("b2").value = "X"; 
		document.getElementById("b2").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b2").value = "0"; 
		document.getElementById("b2").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_5() { 
	if (flag == 1) { 
		document.getElementById("b3").value = "X"; 
		document.getElementById("b3").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b3").value = "0"; 
		document.getElementById("b3").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_6() { 
	if (flag == 1) { 
		document.getElementById("b4").value = "X"; 
		document.getElementById("b4").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b4").value = "0"; 
		document.getElementById("b4").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_7() { 
	if (flag == 1) { 
		document.getElementById("b5").value = "X"; 
		document.getElementById("b5").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b5").value = "0"; 
		document.getElementById("b5").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_8() { 
	if (flag == 1) { 
		document.getElementById("b6").value = "X"; 
		document.getElementById("b6").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b6").value = "0"; 
		document.getElementById("b6").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_9() { 
	if (flag == 1) { 
		document.getElementById("b7").value = "X"; 
		document.getElementById("b7").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b7").value = "0"; 
		document.getElementById("b7").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_10() { 
	if (flag == 1) { 
		document.getElementById("b8").value = "X"; 
		document.getElementById("b8").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b8").value = "0"; 
		document.getElementById("b8").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_11() { 
	if (flag == 1) { 
		document.getElementById("b9").value = "X"; 
		document.getElementById("b9").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b9").value = "0"; 
		document.getElementById("b9").disabled = true; 
		flag = 1; 
	} 
} 
const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');
const turnIndicator = document.getElementById('turnIndicator');
const resultMessage = document.getElementById('resultMessage');
let isPlayer1Turn = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

startGame();

function startGame() {
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    resultMessage.classList.add('hidden');
    setTurnIndicator();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = isPlayer1Turn ? 'x' : 'o';
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setTurnIndicator();
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    isPlayer1Turn = !isPlayer1Turn;
}

function setTurnIndicator() {
    turnIndicator.textContent = isPlayer1Turn ? "Player 1's Turn (X)" : "Player 2's Turn (O)";
}

function checkWin(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o');
    });
}

function endGame(draw) {
    if (draw) {
        resultMessage.textContent = "It's a Draw!";
    } else {
        resultMessage.textContent = isPlayer1Turn ? "Player 1 Wins!" : "Player 2 Wins!";
    }
    resultMessage.classList.remove('hidden');
    setTimeout(startGame, 5000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    loadScores();
    highlightLeader();
});

function loadScores() {
    const score1 = localStorage.getItem('score1') || 0;
    const score2 = localStorage.getItem('score2') || 0;
	// print(score1,score2)
    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;
}

function incrementScore(player) {
    let score1 = parseInt(localStorage.getItem('score1') || 0);
    let score2 = parseInt(localStorage.getItem('score2') || 0);

    if (player === 1) {
        score1++;
        localStorage.setItem('score1', score1);
    } else if (player === 2) {
        score2++;
        localStorage.setItem('score2', score2);
    }

    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;

    highlightLeader();
}

function resetScores() {
    localStorage.setItem('score1', 0);
    localStorage.setItem('score2', 0);
    document.getElementById('score1').innerText = 0;
    document.getElementById('score2').innerText = 0;
    highlightLeader();
}

function highlightLeader() {
    const score1 = parseInt(localStorage.getItem('score1') || 0);
    const score2 = parseInt(localStorage.getItem('score2') || 0);

    document.getElementById('player1').classList.remove('leading');
    document.getElementById('player2').classList.remove('leading');

    if (score1 > score2) {
        document.getElementById('player1').classList.add('leading');
    } else if (score2 > score1) {
        document.getElementById('player2').classList.add('leading');
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    loadScores();
    highlightLeader();
});

function loadScores() {
    const score1 = localStorage.getItem('score1') || 0;
    const score2 = localStorage.getItem('score2') || 0;
    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;
}

function incrementScore(player) {
    let score1 = parseInt(localStorage.getItem('score1') || 0);
    let score2 = parseInt(localStorage.getItem('score2') || 0);

    if (player === 1) {
        score1++;
        localStorage.setItem('score1', score1);
    } else if (player === 2) {
        score2++;
        localStorage.setItem('score2', score2);
    }

    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;

    highlightLeader();
}

function resetScores() {
    localStorage.setItem('score1', 0);
    localStorage.setItem('score2', 0);
    document.getElementById('score1').innerText = 0;
    document.getElementById('score2').innerText = 0;
    highlightLeader();
}

function highlightLeader() {
    const score1 = parseInt(localStorage.getItem('score1') || 0);
    const score2 = parseInt(localStorage.getItem('score2') || 0);

    document.getElementById('player1').classList.remove('leading');
    document.getElementById('player2').classList.remove('leading');

    if (score1 > score2) {
        document.getElementById('player1').classList.add('leading');
    } else if (score2 > score1) {
        document.getElementById('player2').classList.add('leading');
    }
}



// function updateLeaderboard(winner) {
// 	players[winner]++;
// 	renderLeaderboard();
//   }
  
//   function renderLeaderboard() {
// 	leaderboard.innerHTML = `
// 	  <ul>
// 		<li>X: ${players['X']} Wins</li>
// 		<li>O: ${players['O']} Wins</li>
// 	  </ul>
// 	`;
//   }

// const modal = document.getElementById('modal'); print(modal)
// const confirmResetButton = document.getElementById('confirmReset');
// const cancelResetButton = document.getElementById('cancelReset');

// function endGame(draw) {
//     // Display result message
//     if (draw) {
//         resultMessage.textContent = "It's a Draw!";
//     } else {
//         resultMessage.textContent = isPlayer1Turn ? "Player 1 Wins!" : "Player 2 Wins!";
//     }
//     resultMessage.classList.remove('hidden');
// }

// function send_score(draw)
// {
// 	if (draw) 
//         resultMessage.textContent = "It's a Draw!";
//     } else {
//         resultMessage.textContent = isPlayer1Turn ? "Player 1 Wins!" : "Player 2 Wins!";
//     }
//     resultMessage.classList.remove('hidden');
// }



// let player1Score = 0;
// let player2Score = 0;

// const player1ScoreElement = document.getElementById('player1Score');
// const player2ScoreElement = document.getElementById('player2Score');
// const resetScoresButton = document.getElementById('resetScores');

// // Function to save scores to localStorage
// function saveScores() {
//     localStorage.setItem('player1Score', player1Score);
//     localStorage.setItem('player2Score', player2Score);
// }

// // Function to load scores from localStorage
// function loadScores() {
//     player1Score = parseInt(localStorage.getItem('player1Score')) || 0;
//     player2Score = parseInt(localStorage.getItem('player2Score')) || 0;
// }

// // Function to reset scores
// function resetScores() {
//     player1Score = 0;
//     player2Score = 0;
//     saveScores();
//     updateLeaderboard();
// }

// // Function to update the leaderboard display
// function updateLeaderboard() {
//     player1ScoreElement.textContent = `Player 1: ${player1Score}`;
//     player2ScoreElement.textContent = `Player 2: ${player2Score}`;

//     if (player1Score > player2Score) {
//         player1ScoreElement.classList.add('leading');
//         player2ScoreElement.classList.remove('leading');
//     } else if (player2Score > player1Score) {
//         player2ScoreElement.classList.add('leading');
//         player1ScoreElement.classList.remove('leading');
//     } else {
//         player1ScoreElement.classList.remove('leading');
//         player2ScoreElement.classList.remove('leading');
//     }
// }

// // Event listener for the reset scores button
// resetScoresButton.addEventListener('click', resetScores);

// // Initialize game by loading scores and updating leaderboard
// loadScores();
// updateLeaderboard();
