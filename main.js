'use strict'

function onBallClick() {
    var ball = document.querySelector(".ball")
    // console.log(ball);
    var computedStyle = getComputedStyle(ball)
    var currentWidth = parseInt(computedStyle.width)
    var currentHeight = parseInt(computedStyle.height)
    // console.log('currentWidth:', currentWidth);
    // console.log('currentHeight:', currentHeight);

    var newWidth = currentWidth + 50
    var newHeight = currentHeight + 50

    ball.style.width = newWidth + 'px'
    ball.style.height = newHeight + 'px'

    var diameter = Math.max(newHeight, newWidth)
    ball.innerText = diameter 
}