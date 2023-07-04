// value assign

		const winConditions = [
			[0, 1, 2,],
			[0, 3, 6,],
			[0, 4, 8,],
			[1, 4, 7,],
			[2, 5, 8,],
			[2, 4, 6,],
			[3, 4, 5,],
			[6, 7, 8,],
		];
		

		var isActive = true;
		let currentPlayer = "X";
		let gameState = ["","","","","","","","",""];
		var displayStatus = document.querySelector(".gameStatus");

		const winMessage = () => `player ${currentPlayer} has won!`;
		const endMessage = () => `game ended in draw!`;
		const playerTurn = () => `player ${currentPlayer} turn`;

		displayStatus.innerHTML = playerTurn();

		function handlePlayer(){
			currentPlayer = currentPlayer === "X" ? "0" : "X";
			displayStatus.innerHTML = playerTurn();
			console.log(currentPlayer, "currentPlayer")
		}

		function handleCellPlayed(clickedCell, clickedCellIndex){
			gameState[clickedCellIndex] = currentPlayer;
			clickedCell.innerHTML = currentPlayer;

			
			console.log(clickedCell, "clickedCell")
			console.log(clickedCellIndex, "clickedCellIndex")
			
		}

		function restartGame(){
			isActive = true;
			currentPlayer = "X";
			gameState = ["","","","","","","","",""];
			displayStatus.innerHTML = playerTurn();
			document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = " ");
		}		

		function resultValidation(){
			let won = false;
			for(let i=0; i<=7; i++){
				const winningCondition = winConditions[i];
				let a = gameState[winningCondition[0]];
				let b = gameState[winningCondition[1]];
				let c = gameState[winningCondition[2]];
				console.log(winningCondition, "helo")
				if(a === "" || b === "" || c === ""){
					continue;
				}
				if(a === b && b === c){
					console.log(won, "test")
					won = true;
					break;
				}
			}
			if(won){
				console.log(won, "testing")
				displayStatus.innerHTML = winMessage();
				isActive = false;
				return;
			}
			let draw = !gameState.includes("");
			if(draw){
				displayStatus.innerHTML = endMessage();
				isActive = false;
				return;
			} 
			handlePlayer();
		}

		function handleCell(event){

			// console.log("event.target",event.target,event)
			const cellClicked = event.target;
			const cellIndex = parseInt(cellClicked.getAttribute("data-cell-index"));
			// console.log(cellIndex);
			if(gameState[cellIndex]  !== "" || !isActive ){
				return;
			}
			handleCellPlayed(cellClicked, cellIndex);
			resultValidation();
		}






		var a = document.querySelectorAll(".cell")
			a.forEach(cell => cell.addEventListener("click", handleCell));
			
	



