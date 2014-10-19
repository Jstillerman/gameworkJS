var TILEMAP = {
	tileSize: 16,
	init: function(map, asset, stopx){
		console.log("INITIALIZED TILEMAP");
		this.map = map;
		this.asset = asset;
		this.stopx = stopx;
	},
	draw:function(){

		var count = 0;
		for(var i = 0; i < this.map.length; i++){
			GAME.draw(this.asset[this.map[i]], this.tileSize*(i%this.stopx), Math.floor(i/this.stopx)*this.tileSize);
			
		}


	}
}

