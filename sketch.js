//grandes
var cuadritodeprueba
var cuadrito2
var cuadrito3
var cuadrito4


//naranja a morado
var cuadrod1
var cuadrod2
var cuadrod3
var cuadrod4
var cuadrod5
var cuadrod6
var cuadrod7

var cuadod11
var cuadrod22
var cuadrod33
var cuadrod44
var cuadrod55
var cuadrod66
var cuadrod77

//variables para dado
var caradado1;
var caradado2;
var giro;
var dadoimg, d1img, d2img, d3img, d4img, d5img, dimg;
var aleatorio;
var aleatorio2;
var avanza;

//personajes
var personaje1;
var personaje2;
var personaje3;
var personaje4;

var gameState="comienzo";
var turno=0;



var dadov=0

//presentación y inicio
var presentacionImg, presentacion;
var inicioImg, inicio;

//avance
var totalavance;
var x=50;
var y=20;
var r=20;
var siguienteImg, siguiente;





function preload(){
  dadoimg=loadImage("girar.png");
  d1img=loadImage("1.png");
  d2img=loadImage("2.png");
  d3img=loadImage("3.png");
  d4img=loadImage("4.png");
  d5img=loadImage("5.png");
  d6img=loadImage("6.png");
  inicioImg=loadImage("inicio.png")
  siguienteImg=loadImage("siguiente.png")
  presentacionImg=loadImage("presentacion.png")
}

function setup(){
   createCanvas(1000,1200);
   cuadritodeprueba=createSprite(75,75,150,150);
   cuadrito2=createSprite(925,75,150,150);
   cuadrito3=createSprite(925,925,150,150);
   cuadrito4=createSprite(75,925,150,150);
   
   cuadritodeprueba.shapeColor="orange";
   cuadrito2.shapeColor="blue";
   cuadrito3.shapeColor="yellow";
   cuadrito4.shapeColor="purple";

//naranja a morado
 cuadod1=createSprite(75,180,150,90);
 cuadrod2=createSprite(75,285,150,90);
 cuadrod3=createSprite(75,390,150,90);
 cuadrod4=createSprite(75,495,150,90);
 cuadrod5=createSprite(75,600,150,90);
 cuadrod6=createSprite(75,705,150,90);
 cuadrod7=createSprite(75,805,150,90);

 //azul a amarillo

 cuadod11=createSprite(925,180,150,90);
 cuadrod22=createSprite(925,285,150,90);
 cuadrod33=createSprite(925,390,150,90);
 cuadrod44=createSprite(925,495,150,90);
 cuadrod55=createSprite(925,600,150,90);
 cuadrod66=createSprite(925,705,150,90);
 cuadrod77=createSprite(925,805,150,90);

 //morado a amarillo
  cuadod111=createSprite(195,925,90,150);
   cuadrod222=createSprite(300,925,90,150);
    cuadrod333=createSprite(400,925,90,150);
     cuadrod444=createSprite(500,925,90,150);
      cuadrod555=createSprite(600,925,90,150);
       cuadrod666=createSprite(700,925,90,150);
        cuadrod777=createSprite(800,925,90,150);

        //naranja a azul
  cuadod111=createSprite(195,75,90,150);
   cuadrod222=createSprite(300,75,90,150);
    cuadrod333=createSprite(400,75,90,150);
     cuadrod444=createSprite(500,75,90,150);
      cuadrod555=createSprite(600,75,90,150);
       cuadrod666=createSprite(700,75,90,150);
        cuadrod777=createSprite(800,75,90,150);
         
        //cuadrod222.shapeColor="orange"
       // cuadrod333.shapeColor="blue"

       personaje1=createSprite(130,70,30,30);
       personaje1.shapeColor="green";
       personaje1.x=130;
       personaje1.y=70;
       personaje2=createSprite(100,70,30,30);
       personaje2.shapeColor="red";
       personaje3=createSprite(70,70,30,30);
       personaje3.shapeColor="blue";
       personaje4=createSprite(40,70,30,30);
       personaje4.shapeColor="purple";

       giro=createSprite(500,1065,60,60)
       giro.addImage("dado",dadoimg);
       giro.scale=0.3;

       siguiente=createSprite(700,400,60,60);
       siguiente.addImage("siguiente",siguienteImg);

       presentacion=createSprite(500,450);
       presentacion.addImage("presentacion",presentacionImg);
       inicio=createSprite(850,1150,60,60);
       inicio.addImage("inicio",inicioImg);
       inicio.scale=0.3

     
turno=0;

        
 }

function draw(){
  

background("#BFDBAE"); 
textSize(32)
text("Salida",30,50);
text("le toca jugar al jugador "+turno,200,200);

//que aparezcan las cordenadas en el mouse
text(mouseX + "," + mouseY, mouseX, mouseY);

drawSprites();
text("2 le toca jugar al jugador"+turno,200,300);
text("avanza "+ totalavance+ " casillas",300,400);



if(mousePressedOver(inicio) &&  gameState=="comienzo"){
        presentacion.destroy();
        inicio.destroy();
       
        gameState="play";
        turno=1;

}
if(mousePressedOver(siguiente) ){
turno=turno+1;

}


if(mousePressedOver(giro) ){
 dado();
 totalavance=aleatorio+aleatorio2;
 
  
}
if(turno==1){
        
        arrastrarjugador1();   
      
}
if(turno==3){
        
        arrastrarjugador2();   
      
}



console.log(turno);
console.log(gameState);
}

function dado(){
        aleatorio = Math.round(random(1,6));
  caradado1 = createSprite(700,1065,60,60);
  caradado1.scale=0.4;
    
      switch(aleatorio) {
      case 1: caradado1.addImage(d1img);
              break;
      case 2: caradado1.addImage(d2img);
              break;
      case 3: caradado1.addImage(d3img);
              break;
      case 4: caradado1.addImage(d4img);
              break;
      case 5: caradado1.addImage(d5img);
              break;
      case 6: caradado1.addImage(d6img);
              break;
      default: break;
    }
    caradado2 = createSprite(800,1065,60,60);
    caradado2.scale=0.4;
    aleatorio2 = Math.round(random(1,6));
    switch(aleatorio2) {
      case 1: caradado2.addImage(d1img);
              break;
      case 2: caradado2.addImage(d2img);
              break;
      case 3: caradado2.addImage(d3img);
              break;
      case 4: caradado2.addImage(d4img);
              break;
      case 5: caradado2.addImage(d5img);
              break;
      case 6: caradado2.addImage(d6img);
              break;
      default: break;
    }
    
    

 
    

}
function arrastrarjugador1(){
        if(mouseIsOver(personaje1)){
               personaje1.x=mouseX;
          personaje1.y=mouseY;
        }
        
        
}
function arrastrarjugador2(){
        if(mouseIsOver(personaje2)){
               personaje2.x=mouseX;
          personaje2.y=mouseY;
        }
        
        
}
function arrastrarjugador3(){
        if(mouseIsOver(personaje3)){
               personaje3.x=mouseX;
          personaje3.y=mouseY;
        }
        
        
}
function arrastrarjugador4(){
        if(mouseIsOver(personaje4)){
               personaje4.x=mouseX;
          personaje4.y=mouseY;
        }
        
        
}

