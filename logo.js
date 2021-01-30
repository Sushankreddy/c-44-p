class Logo {
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.5,
            'isStatic' : false
        }
      this.visiblity = 255

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("game/logo.jpg");
    World.add(world, this.body);

    }
 
    display(){
this.body.position.x,
this.body.position.y
    imageMode(CENTER);
    image(this.image, 700, 500, this.width, this.height);


    }
}
 