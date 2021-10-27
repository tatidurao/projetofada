var starImg,bgImg, imgFada;
var star, starBody;
var vozFada, fada;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //para carregar imagens e sons
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");

    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    //vozFada.play();

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(600,500);
    fada.addAnimation("fada",imgFada);
	fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 ,30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);
   
    vozFada.play();

    if(keyDown("left")){
        fada.x = fada.x -3;
    }
    if(keyDown("right")){
        fada.x = fada.x +3;
    }

    if(keyDown("DOWN_ARROW")) {
        star.x = starBody.position.x;
        star.y = starBody.position.y;
        Matter.Body.setStatic(starBody,false);
    }
    if(star.y > 470 && starBody.position.y > 470 ){
        Matter.Body.setStatic(starBody,true);
    }
        

    drawSprites();
}
