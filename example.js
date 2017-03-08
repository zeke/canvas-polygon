const polygon = require('.')
const yellow = require('javascript-yellow')
const canvasSize = 400

window.addEventListener('DOMContentLoaded', draw)

function draw () {
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  document.body.appendChild(canvas)
  canvas.width = canvasSize
  canvas.height = canvasSize
  ctx.fillStyle = yellow
  ctx.fillRect(0, 0, canvasSize, canvasSize)
  ctx.fillStyle = '#000'
  polygon(ctx, canvasSize/2, canvasSize/2, canvasSize/3, 6, Math.PI/2)
}
