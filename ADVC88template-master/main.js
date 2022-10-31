const { fabric } = require("./fabric")

var canvas = new fabric.Canvas('myCanvas')

ball_y=0
ball_x=0
hole_y=400
hole_x=800

block_image_width = 5;
block_image_height = 5;

function load_img(){


}

function new_image()
{
	fabric.Image.fromURL("golf-h1.png",function(Img){
hole_obj=img;
hole_obj.scaletowidth(50);
hole_obj.scaletoidth(50);
	})

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	document.getelementbyid("hd3").innerhtml="You have hit the goal";
	document.getelementbyid("mycanvas").style.boardercolor="teal";
	if else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if ball_y>450)
		 ball_y=ball_y +block_image_height;
		 console.log("block image height= " +block_image_height);
		 console.log("when up arrow key is pressed, x= "+ball_x+" ,y="+ ball_y );
		 canvas.remove(ball_obj);
		 new_image();
	}

	function down()
	{
		 if ball_y<450)
		 ball_y=ball_y +block_image_height;
		 console.log("block image height= " +block_image_height);
		 console.log("when down arrow key is pressed, x= "+ball_x+" ,y="+ ball_y );
		 canvas.remove(ball_obj);
		 new_image();


	}

	function left()
	{
		if(ball_x >5)
		{
		 ball_x=ball_x +block_image_height;
		 console.log("block image height= " +block_image_height);
		 console.log("when left arrow key is pressed, y= "+ball_y+" ,x="+ ball_x );
		 canvas.remove(ball_obj);
		 new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
		 ball_y=ball_y +block_image_height;
		 console.log("block image height= " +block_image_height);
		 console.log("when right arrow key is pressed, x= "+ball_x+" ,y="+ ball_y );
		 canvas.remove(ball_obj);
		 new_image();
		}
	}
	
}

