class Bob{
    constructor(x,y,width,height){
        var options={
            restitution:0.7,
            friction:0.001,
            density:1.2,
            isStatic:false
        }
       
        this.body = Bodies.rectangle(x,y,width,height,options);
        
        this.width=width;
        this.height = height;
       
        World.add(world, this.body);

    }
    display(){
        var pen = this.body.position;
        fill("red");
       
        circle(pen.x,pen.y,this.width);
      
    }
}