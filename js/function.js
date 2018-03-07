var ctx = document.getElementById('canvas').getContext('2d');

function reloj() {
  ctx.clearRect(0, 0, 250, 250);
  ctx.save();
  ctx.translate(125, 125);

  var now = new Date();
  var sec = now.getSeconds();

  ctx.rotate(sec * Math.PI / 30);
  ctx.strokeStyle = '#D40000';
  ctx.fillStyle = '#D40000';
  ctx.beginPath();
  ctx.moveTo(-5,0);
  ctx.lineTo(5,0);
  ctx.lineTo(45,125);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.arc(0, 0, 4, 0, Math.PI * 2, true);

  ctx.fill();
  ctx.restore();

  window.requestAnimationFrame(reloj);
}

window.requestAnimationFrame(reloj);