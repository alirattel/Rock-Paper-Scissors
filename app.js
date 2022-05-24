const userdisplay = document.getElementById("user-choice")
const computerdsiplay = document.getElementById("computer-choice")
const selectOne = document.querySelectorAll('button')


const rockR = document.getElementById("h-r")
const rockL = document.getElementById("h-l")
const paperR = document.getElementById("w-r")
const paperL = document.getElementById("w-l")
const scissorsR = document.getElementById("m-r")
const scissorsL = document.getElementById("m-l")

let userchoice
let computerchoice
let resultUser = 0
let resultComputer = 0

selectOne.forEach(selectOne => selectOne.addEventListener('click', (e) => {
    rockR.style.display = "none"; rockL.style.display = "none"; paperR.style.display = "none"; 
    paperL.style.display = "none"; scissorsR.style.display = "none"; scissorsL.style.display = "none";
    i=0
    ResultType.innerHTML = ""
    userchoice = e.target.id
    console.log(userchoice)

    if(userchoice === 'rock'){
        rockR.style.display = "inline-block"; 
    }
    if(userchoice === 'paper'){
        paperR.style.display = "inline-block"
    }
    if(userchoice === 'scissors'){
        scissorsR.style.display = "inline-block"
    }
    Computer()
    ResultGame()
}))

function Computer() {
    const randomnum = Math.floor(Math.random() * 3) + 1
    if (randomnum === 1) {
        computerchoice = 'rock'
        rockL.style.display = "inline-block"
    }
    if (randomnum === 2) {
        computerchoice = 'paper'
        paperL.style.display = "inline-block"
    }
    if (randomnum === 3) {
        computerchoice = 'scissors'
        scissorsL.style.display = "inline-block"
    }
}

function ResultGame() {
    if (computerchoice == userchoice) {
        Draw()
    }
    else if (computerchoice == 'rock' && userchoice == 'paper') {
        resultUser++
        typingWin()
    }
    else if (computerchoice == 'rock' && userchoice == 'scissors') {
        resultComputer++
        typingLose()
    }
    else if (computerchoice == 'paper' && userchoice == 'rock') {
        resultComputer++
        typingLose()
    }
    else if (computerchoice == 'paper' && userchoice == 'scissors') {
        resultUser++
        typingWin()
    }
    else if (computerchoice == 'scissors' && userchoice == 'rock') {
        resultUser++
        typingWin()
    }
    else if (computerchoice == 'scissors' && userchoice == 'paper') {
        resultComputer++
        typingLose()
    }
    userdisplay.innerHTML = ' : ' + resultUser
    computerdsiplay.innerHTML = ' : ' + resultComputer
}