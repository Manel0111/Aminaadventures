var power = false;
var colorProgress = 0;

function setup (){
  createCanvas (500,500);
}

function draw (){
  background(40);

  //progression douce
  if (power == true){
    colorProgress += 1.5;
  } else {
    colorProgress -= 1.5;
}

colorProgress = constrain(colorProgress, 0, 255);

//interpolation des couleurs (gris vers bleu)
var wallR = lerp(120,30, colorProgress/255);
var wallG = lerp(120,144, colorProgress/255);
var wallB = lerp(120,255, colorProgress/255);

var skyR = lerp(80,20, colorProgress/255);
var skyG = lerp(80,10, colorProgress/255);
var skyB = lerp(80,60, colorProgress/255);

//ciel
background(skyR,skyG,skyB);

// Lune subtile
fill(200,220,255, colorProgress);
noStroke();
ellipse(420,80,60,60);


//arches du souk
stroke(80);
fill(wallR,wallG,wallB);

//mur principal
rect(100,200,300,200);

//arche exterieure
arc(250,200,300,200,PI,TWO_PI);

//arche interieure
fill(lerp(100,10, colorProgress/255),
    lerp(100,30, colorProgress/255),
    lerp(100,120, colorProgress/255));

arc(250,200,250,160,PI,TWO_PI);

//colonnes laterales
fill(wallR-20,wallG-20,wallB-20);
rect(100,200,25,200);
rect(375,200,25,200);
  

//lanternes
var lanternGlow = map(colorProgress,0,255,0,255);

fill(255,200,100,lanternGlow);
ellipse(160,230,15,20);
ellipse(340,230,15,20);

//motif zellige progressif
stroke(0,200,255,colorProgress);
noFill();
for (var x=120; x<380; x+=40){
  for(var y=220; y<30; y+=40){
    rect(x,y,20,20);
  }
}

//robe
var dressColorR = lerp(90,20, colorProgress/255);
var dressColorG = lerp(90,80, colorProgress/255);
var dressColorB = lerp(90,200, colorProgress/255);

fill(dressColorR,dressColorG,dressColorB);
triangle(250,300,210,380,290,380);

//motif robe (progressive)
stroke(255,105,180,colorProgress);
line(230,340,270,340);
noStroke();

//tete
fill(220);
ellipse(250,270,35,35);

//pink magic hair
var hairPulse =50 + sin(frameCount * 0.1) * 8;

fill(255,105,180);
ellipse(250,250,hairPulse,45);

//meche laterales
var sway = sin(frameCount * 0.05) * 5;

ellipse(230 +sway,290,30,120);
ellipse(270 -sway,290,30,120);

//crown
fill(255,215,0,colorProgress);
triangle(235,235,245,220,255,235);
triangle(245,235,255,215,265,235);
triangle(255,235,265,220,275,235);

//yeux
var eyeGlow = map(colorProgress,0,255,50,255);

fill(255);
ellipse(243,270,8,5);
ellipse(257,270,8,5);

//pupiles
fill(50,50,80, eyeGlow);
ellipse(243,270,4,4);
ellipse(257,270,4,4);

//eyeliner
stroke(0);
line(238,267,248,267);
line(252,267,262,267);
noStroke();

if(power){
  noFill();
  stroke(0,200,255, colorProgress);
  ellipse(243,270,12,12);
  ellipse(257,270,12,12);
}

//Aura progressive magic
if(power == true){
  noFill();
  stroke(255,105,180,150);
  ellipse(250,280, colorProgress*1.5);

  stroke(0,200,255,120);
  ellipse(250,280, colorProgress*1.8);
}

//poussiere magique douce
if (power == true){
  for (var i = 0; i < 10; i++){
    fill(255,105,180,120);
    noStroke();
    ellipse(
      250 + random(-colorProgress/2, colorProgress/2),
      280 + random(-colorProgress/2, colorProgress/2),
      random(4,8)
      );
    }
  }
}

function mousePressed(){
  power = !power;
}







