var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

var block_object = "";

function player_update() {

    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);



    });
}

function block_update(get_Image) {

    fabric.Image.fromURL(get_Image, function (Img) {

        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height)
        block_object.set({

            top: player_y,
            left: player_x
        })

        canvas.add(block_object);

    });

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    var key_pressed = e.keyCode

    console.log(key_pressed);
    if (e.shiftKey && key_pressed == '80') {
        console.log("Shift and P pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey && key_pressed == '77') {

        console.log("Shift and M pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;

    }

    if (key_pressed == '38') {

        up();
        console.log("up");
    }


    if (key_pressed == '40') {

        down();
        console.log("down");

    }
    if (key_pressed == '37') {

        left();
        console.log("left");
    }

    if (key_pressed == '39') {
        right();
        console.log("right");
    }
    if(key_pressed =='67'){

         block_update("cloud.jpg");
         console.log("C");
    }

    if(key_pressed =='68'){

        block_update("dark_green.png");
        console.log("D")
    }

    if(key_pressed=='71'){

        block_update("ground.png");
        console.log("G")
    }
    if(key_pressed=='76'){

        block_update("light_green.png");
        console.log("L");
    }
    if(key_pressed =='82'){

        block_update("roof.jpg");
        console.log("R");
    }
    if(key_pressed =='84'){

        block_update("trunk.jpg");
        console.log("T");
    }
    if(key_pressed=='85'){
        
        block_update("unique.png");
        console.log("U");
    }
    if(key_pressed=='87'){

        block_update("wall.jpg");
        console.log("W");
    }
    if(key_pressed=='89'){

        block_update("yellow_wall.png");
        console.log("Y");
    }
    if(key_pressed=='69'){

        block_update("EnderChest.png");
        console.log("E");
    }
    if(key_pressed =='73'){

        block_update("Diamond.png")
        console.log("I")
    }

    
}

function up(){

    if(player_y>0){

        player_y=player_y-block_image_height;
        console.log("Block_image_height")
        console.log("When up arrow key is pressed X =" + player_x +",y" + player_y)
        canvas.remove(player_object)
        player_update()
    }

   
}

function down(){

    if(player_y<550){

        player_y = player_y + block_image_height;
        console.log("block_image_height")
        console.log("When down arrow key is pressed X =" + player_x +",Y ="+player_y)
        canvas.remove(player_object)
        player_update()

    }

}

function left(){

    if(player_x>0){

        player_x = player_x - block_image_width;
        console.log("block_image_width")
console.log("When left arrow key is pressed  X = "+player_x + ",Y" + player_y)
canvas.remove(player_object)
player_update()


    }
}

function right(){

    if( player_x<1450){

        player_x = player_x + block_image_width;
        console.log("block_image_Width");
        console.log("When right arrow key is pressed X = " + player_x +",Y ="+ player_x)
        canvas.remove(player_object)
        player_update()
    }
}