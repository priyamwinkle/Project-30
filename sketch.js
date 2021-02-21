const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground2,box17,box18,box19,box20,box21,box22,box23,box24,box25,hexagon,haxagonImg,sling;

function preload(){
    hexagonImg=loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,600);

    myEngine=Engine.create();
    myWorld=myEngine.world;

    hexagon=Bodies.circle(10,300,10,10);

    World.add(myWorld,hexagon);

    ground1=new Ground(415,550,250,20);
    ground2=new Ground(800,350,179,20);

    box1= new Box(325,520,30,40);
    box2= new Box(355,520,30,40);
    box3= new Box(385,520,30,40);
    box4= new Box(415,520,30,40);
    box5= new Box(445,520,30,40);
    box6= new Box(475,520,30,40);
    box7= new Box(505,520,30,40);
    box8= new Box(355,480,30,40);
    box9= new Box(385,480,30,40);
    box10=new Box(415,480,30,40);
    box11=new Box(445,480,30,40);
    box12=new Box(475,480,30,40);
    box13=new Box(385,440,30,40);
    box14=new Box(415,440,30,40);
    box15=new Box(445,440,30,40);
    box16=new Box(415,400,30,40);
    
    box17=new Box(740,320,30,40);
    box18=new Box(770,320,30,40);
    box19=new Box(800,320,30,40);
    box20=new Box(830,320,30,40);
    box21=new Box(860,320,30,40);
    box22=new Box(770,280,30,40);
    box23=new Box(800,280,30,40);
    box24=new Box(830,280,30,40);
    box25=new Box(800,240,30,40);

    sling=new Slingshot(this.hexagon,{x:100,y:450});
}

function draw(){
    background("Green");

    Engine.update(myEngine);

    imageMode(CENTER);
    image(hexagonImg,hexagon.position.x,hexagon.position.y,40,40);
    
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    sling.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(this.hexagon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode===32){
       sling1.attach(bird1.body);
    }
}
