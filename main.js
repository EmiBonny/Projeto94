canvas = new fabric.Canvas("myCanvas")
// Crie a variável canvas

//Defina as posições iniciais das imagens da bola e do buraco.
ball_Y=0
ball_X=0
hole_Y=400
hole_X=800

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-b.png", function(Img){
		hole_obj=Img
		hole_obj.scaleToWidth(50)
		hole_obj.scaleToHeight(50)
		hole_obj.set({
			top:hole_Y, left:hole_X
		})
		canvas.add(hole_obj)
	})
	
	
	// programe o envio da imagem do buraco de golfe ao canvas
	new_image();
}

function new_image()
{fabric.Image.fromURL("bola.png", function(Img){
	ball_obj=Img
	ball_obj.scaleToWidth(50)
	ball_obj.scaleToHeight(50)
	ball_obj.set({
		top:ball_Y, left:ball_X
	})
	canvas.add(ball_obj)
})
	// programe o envio da imagem da bola ao canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	if((ball_X==hole_X)&&(ball_Y==hole_Y)){
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTMl="Você Acertou!"
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{if(ball_Y>=5){
		ball_Y=ball_Y-block_image_height
		canvas.remove(ball_obj)
		new_image()
	}
		// Programe o movimento da bola para cima.
	}

	function down()
	{if(ball_Y<=450){
		ball_Y=ball_Y+block_image_height
		canvas.remove(ball_obj)
		new_image()
	}
		 // Programe o movimento da bola para baixo.
	}

	function left()
	{
		if(ball_X >5)
		{
		ball_X=ball_X-block_image_height
			canvas.remove(ball_obj)
			new_image()
		}
			// Programe o movimento da bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{ball_X=ball_X+block_image_height
			canvas.remove(ball_obj)
			new_image()
			// Programe o movimento da bola para a direita.
		}
	}
	


