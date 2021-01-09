const canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
const FULLANGLE = Math.PI * 2;
let circle = {
  x: 50,
  y: 50,
  r: 40,
  dx: 8,
  dy: 6,
};
function draw() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.r, 0, FULLANGLE, true);
  ctx.fillStyle = "coral";
  ctx.fill();
}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  circle.x += circle.dx;
  circle.y += circle.dy;
  circle.x + circle.r > canvas.width || circle.x - circle.r < 0
    ? (circle.dx *= -1)
    : null;
  circle.y + circle.r > canvas.height || circle.y - circle.r < 0
    ? (circle.dy *= -1)
    : null;
  requestAnimationFrame(update);
}
update();
