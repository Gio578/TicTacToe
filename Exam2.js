document.addEventListener('DOMContentLoaded', function () {
    let currentPlayer = 'X'
    let scoreX = 0
    let scoreO = 0

    const topLeft = document.getElementById("top-left")
    const topMiddle = document.getElementById("top-middle")
    const topRight = document.getElementById("top-right")
    const middleLeft = document.getElementById("middle-left")
    const middleMiddle = document.getElementById("middle-middle")
    const middleRight = document.getElementById("middle-right")
    const bottomLeft = document.getElementById("bottom-left")
    const bottomMiddle = document.getElementById("bottom-middle")
    const bottomRight = document.getElementById("bottom-right")

    const buttons = document.querySelectorAll('.table-cell button')
    const sumX = document.getElementById("score-x")
    const sumO = document.getElementById("score-o")

    const replayButton = document.querySelector('.replay-button')

    function updateScore() {
        sumX.textContent = "Score X: " + scoreX
        sumO.textContent = "Score O: " + scoreO
    }

    function checkForWin() {
        const winConditions = [
            [topLeft, topMiddle, topRight],
            [middleLeft, middleMiddle, middleRight],
            [bottomLeft, bottomMiddle, bottomRight],
            [topLeft, middleLeft, bottomLeft],
            [topMiddle, middleMiddle, bottomMiddle],
            [topRight, middleRight, bottomRight],
            [topLeft, middleMiddle, bottomRight],
            [topRight, middleMiddle, bottomLeft]
        ]
        
        for (const condition of winConditions) {
            if (condition.every(cell => cell.textContent === currentPlayer)) {
                if (currentPlayer === 'X') {
                    scoreX += 1
                } else {
                    scoreO += 1
                }
                updateScore()
                alert(`${currentPlayer} has won.`)
                return
            }
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.textContent === '') {
                button.textContent = currentPlayer
                checkForWin()
                if (currentPlayer === 'X') {
                    currentPlayer = 'O'
                } else {
                    currentPlayer = 'X'
                }
            }
        })
    })

    updateScore()

    function newGame() {
        buttons.forEach(function(button) {
            button.textContent = '' 
        })
        currentPlayer = 'X' 
    }
    
    replayButton.addEventListener('click', newGame)

})
