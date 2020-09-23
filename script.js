        let answer = Math.floor(Math.random() * 100) + 1;
        console.log(answer);

        function game (answer, playerName) {
             playerName = userName;
            console.log(userName);
            clue.innerHTML = '';
            let guess = +prompt('Enter a value');
            // if (typeof guess === NaN){
            //     prompt('Invalid entry');
            //     game(answer, playerName);
            // }else{
                if (guess === answer){
                    console.log(`${playerName} wins!`);
                    answerDisplay.innerHTML = answer;
                    }else if (guess < answer){
                        clue.innerHTML = 'It is more';
                        game(answer, playerName);
                    }else if (guess > answer){
                        clue.innerHTML = 'It is less';
                        game(answer, playerName);
                    }     
            // }         
        }


        
    const userName = document.querySelector('.name-input').value;
    const playButton = document.querySelector('.play-button');
    const clue = document.querySelector('.high-low-indicator');
    let userGuess = document.querySelector('.number-input').value;
    const answerDisplay = document.querySelector('.answer');
        
        
        
        
    playButton.addEventListener('click', () => {
        game(answer, userName);
    });
