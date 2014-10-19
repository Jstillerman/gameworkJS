var SceneMenu= new GAME.scene();
var SceneGame = new GAME.scene();

alert("click block to start!")
////////////
///ASSETS///
////////////

SceneGame.init = function(){
	alert("Scene has started! W & S move the block!");
}

var IMG_player = GAME.image("player.png");

var player = {
	x:10,
	y:10,
	speed: 10,
	tick: function(){
		GAME.draw(IMG_player, this.x, this.y);
		if(KEYBOARD.w)this.y-=this.speed;
		if(KEYBOARD.s)this.y+=this.speed;
	}
}

var button = {
	x:100,
	y:100,
	tick: function(){
		GAME.draw(IMG_player, this.x, this.y);

	}
}

var map = {
	tick: function(){
		TILEMAP.draw();
	}
}
SceneGame.add(player);
SceneGame.add(map);
SceneMenu.add(button);


TILEMAP.init([0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [GAME.image("tile.png")], 3);
GAME.fps=10;
GAME.init(SceneMenu);
MOUSE.init("click");

MOUSE.event = function(){
	if(MOUSE.isClicked(button.x, button.y, (button.x +100), (button.y+100)))GAME.changeScene(SceneGame);
};
