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

function continueGame(){

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}