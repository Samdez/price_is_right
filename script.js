        let userName = prompt(`What's your name?`);
        let answer = Math.floor(Math.random() * 100) + 1;
        let guess;
        console.log(answer);

        function game (answer, playerName) {
            guess = +prompt(`What's your answer?`);
            if (typeof guess === NaN){
                prompt('Invalid entry');
                game(answer, playerName);
            }else{
                if (guess === answer){
                    console.log(`${playerName} wins!`);
                    }else if (guess < answer){
                        console.log('It is more');
                        game(answer, playerName);
                    }else if (guess > answer){
                        console.log('It is less');
                        game(answer, playerName);
                    }     
            }         
         }
        game(answer, userName);

