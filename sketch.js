let x;
let y;

let xspeed;
let yspeed;

let logo;

let width = window.screen.availWidth;
let height = window.innerHeight;

function preload() {
	logo = loadImage("http://localhost/homepage/rnd_logo.png");
}

function setup() {
	createCanvas(width, height);
	x = random(width - logo.width);
	y = random(height - logo.height);
	xspeed = 4;
	yspeed = 4;
}

function draw() {
	background(0);
	// rect(x, y, 110, 100);
	image(logo, x, y);
	x = x + xspeed;
	y = y + yspeed;

	if (x + logo.width >= width || x <= 0) {
		xspeed = -xspeed;
	}

	if (y + logo.height >= height || y <= 0) {
		yspeed = -yspeed;
	}
}