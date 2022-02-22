//This alien class wil display the alien at a specified position,so it will take x,y location and the image for the alien.
//In the draw() function, you can see  extra 2 optional arguments to the image() function, this is the width and height of the image, in our example I have divided the width and height of the image by 30. 
class Alien {
    constructor(x,y,image){
        this.x = x;
        this.y = y;
        this.image = image ;
    
    }
    draw(){
        this.image(this.image,this.x,this.y,this.image.width/30,this.image.height/30);
    }
}