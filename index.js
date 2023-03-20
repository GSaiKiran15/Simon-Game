let computer_list = []
let colorValues = ["green", "red", "yellow", "blue"]
let gameTerminated = false
let noOfClicks = 0
let choice = ""
let level = 0
let sounds = {
    "blue": "sounds/blue.mp3",
    "red": "sounds/red.mp3",
    "green": "sounds/green.mp3",
    "yellow": "sounds/yellow.mp3",
    "wrong": "sounds/wrong.mp3"
}
function computerGame() {
    let computerChoice = Math.floor(Math.random() * 4)
    clickAnimation(colorValues[computerChoice])
    computer_list.push(computerChoice)
    level += 1
    console.log(computer_list, computer_list.length)
    noOfClicks = 0
}

function humanGame() {
    if (colorValues.indexOf(choice) === computer_list[noOfClicks - 1] && noOfClicks === computer_list.length) {
        $("h1").text(`Level - ${level}`)
        setTimeout(function () {
            computerGame()
        }, 1000)
    }
    else if (colorValues.indexOf(choice) === computer_list[noOfClicks - 1]) {
        $("h1").text(`Level - ${level}`)
    }
    else if (colorValues.indexOf(choice) != computer_list[noOfClicks - 1]) {
        $("h1").text("You've Lost")
        var audio = new Audio(sounds["wrong"])
        audio.play()
        level = 0
    }
}

function clickAnimation(color) {
    $("." + color).animate({ "opacity": "50%" })
    $("." + color).animate({ "opacity": "100%" })
}

$("button").click(function (e) {
    let elementClass = String(e.target.className)
    elementClass = elementClass.slice(0, -7)
    clickAnimation(elementClass)
    var audio = new Audio(sounds[elementClass])
    audio.play()
    choice = elementClass
    noOfClicks += 1

    console.log(colorValues.indexOf(choice), noOfClicks)
    humanGame()
}
)

$("body").keypress(function (e) {
    computerGame()
});
