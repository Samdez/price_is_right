        const answer = Math.floor(Math.random() * 100) + 1;
        console.log(answer);
        const guessField = document.querySelector('.number-input');
        const resultField = document.querySelector('.result');
        const userName = document.querySelector('.name-input');
        const playButton = document.querySelector('.play-button');
        const image = document.querySelector('.result-image');
        const attemptNumberDisplay = document.querySelector('.attempt-number');
        let tooHighImagesArray = [
            'images/4g0g19.jpg',
            'images/4g0fev.jpg'
        ];
        let tooLowImagesArray = [
            'images/3jgukd.png',
            'images/4g0fin.jpg'
        ];
        let attemptNumber = 0;
        


        function game(){
            let userGuess = Number(guessField.value);
            const randomLowArrayNumber = Math.floor(Math.random() * tooLowImagesArray.length);
            const randomHighArrayNumber = Math.floor(Math.random() * tooHighImagesArray.length);

            if (userGuess === answer){
                resultField.innerHTML = `Congratulations, ${userName.value}, you won!`;
                image.src = './images/1843.jpg';
            }else if (userGuess < answer){
                resultField.innerHTML = 'Too low!';
                image.src = tooLowImagesArray[randomLowArrayNumber];
                attemptNumber ++;
            }else if (userGuess > answer){
                resultField.innerHTML = 'Too high!';
                image.src = tooHighImagesArray[randomHighArrayNumber];
                attemptNumber ++;
            }
            attemptNumberDisplay.innerHTML = attemptNumber; 

        }

        playButton.addEventListener('click', game);
        playButton.addEventListener('keyup', (e) => {
            if (e.keyCode === 13){
                game();
            }
        });

