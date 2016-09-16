var can1;
var can2;

var ctx1;
var ctx2;

var lastTime = Date.now();
var deltaTime = 0;

var bgPic = new Image();

var canWidth;
var canHeight;

var ane;
var fruit;
var mom;
var baby;

var mx; 
var my; 



game();

function game() {
	init();
	gameloop();
}

function init() {
	can1 = document.getElementById("canvas1");
	can2 = document.getElementById("canvas2");

	ctx1 = can1.getContext("2d");
	ctx2 = can2.getContext("2d");

	can1.addEventListener("mousemove", onMouseMove, false);


	bgPic.src = "./src/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;
	mx = canWidth / 2;
	my = canHeight / 2;
	bgPic.onload = function() {
		drawBackground();
	}
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	mom = new momObj();
	mom.init();
	baby = new babyObj();
	baby.init();
}

function gameloop() {
	window.requestAnimFrame(gameloop);
	ctx2.clearRect(0, 0, canWidth, canHeight);
	drawBackground();
	ane.draw();
	fruit.draw();
	fruitMonitor();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	momFruitsCollision();
	baby.draw();
	// 
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
}

function onMouseMove(e) {
	mx = e.offsetX;
	my = e.offsetY;
}