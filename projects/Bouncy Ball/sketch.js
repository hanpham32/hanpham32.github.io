let yBall = 10;
let Gravity = 1;
let ball;
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

function setup(){
    createCanvas(winWidth, winHeight/2);
    background(100);
    ball = loadImage("bball.jpg");
}

function draw(){
    background(100);
    image(ball, winWidth/2,yBall,50,50);
    yBall = yBall + 0.5;
}

function Ball () {
    this.speed = 0;
    this.velocity = 0;
}