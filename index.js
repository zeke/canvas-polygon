module.exports = function polygon (ctx, x, y, radius, sides, startAngle, counterClockwise) {
  if (sides < 3) return
  var a = (Math.PI * 2) / sides
  a = counterClockwise ? -a : a
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(startAngle || 0)
  ctx.moveTo(radius, 0)
  ctx.beginPath()
  for (var i = 1; i <= sides; i++) {
    ctx.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i))
  }
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}
