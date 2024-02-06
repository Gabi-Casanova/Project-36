var canvas, backgroundImage;
var questions;
var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);

  background("pink");

  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
  
};

function draw(){
 //
};

function changeBackgroundColor() {
  background(random(128,255), random(128,255), random(128,255));
};