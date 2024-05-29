'use strict'

function onBallClick() {
    var ball = document.querySelector(".ball")
    var computedStyle = getComputedStyle(ball)
    var currentWidth = parseInt(computedStyle.width)
    var currentHeight = parseInt(computedStyle.height)
    var newWidth = currentWidth + 50
    var newHeight = currentHeight + 50
    ball.style.width = newWidth + 'px'
    ball.style.height = newHeight + 'px'
    var diameter = Math.max(newHeight, newWidth)
    ball.innerText = diameter + 'px'

    if (diameter >= 400) {
        ball.style.width = '100px'
        ball.style.height = '100px'
        ball.innerText = '100px'
    }
}