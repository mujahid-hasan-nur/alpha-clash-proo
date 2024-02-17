// function play(){
//     // step-1: hode the home screen add the class hidden to the home section. 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList)
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    //* key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //* check right or wrong key pressed 
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point!');
        //* update score:
        //* 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        //* 2. increase the score by 1
        const newScore = currentScore + 1;

        //* 3. show the updated score 
        currentScoreElement.innerText = newScore;

        //* start a new round 
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('dhurr vaiya ba apu..right key press koro')
        //* step-1: get the current life number 
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        //* step-2: reduce the life number
        const newLife = currentLife - 1;

        //* step-3: display the updated life count 
        currentLifeElement.innerText = newLife;
    }

    // // get the expected to press
    // const currentAlphabetElement = document.getElementById('current-alphabet');
    // const currentAlphabet = currentAlphabetElement.innerText;
    // const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // // check matched or not 
    // if(playerPressed === expectedAlphabet){
    //     console.log('you get a point');
    // }
    // else{
    //     console.log('you missed. you lost a life');
    // }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    //* step -1: generate a random alphabet //
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    //* set randomly generated alphabet to the screen (sho it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //* set background color //

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}