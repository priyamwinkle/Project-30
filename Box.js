class Box{
    constructor(x,y,width,height){ 
        var options={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(myWorld,this.body);
    }
    display(){ 
        var angle = this.body.angle; 
        var pos= this.body.position; 
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        rectMode(CENTER); 
        rect(0,0,this.width, this.height); 
        pop(); 
        if(this.body.speed<2){
        }
        else{
            World.remove(myWorld,this.body);
            push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility)
            rect(this.body.position.x,this.body.position.y,50,50);
            pop();
        }
        
    }
}
