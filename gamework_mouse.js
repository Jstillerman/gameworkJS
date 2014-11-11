var MOUSE = {
	x: 0,
	y: 0,
	event: function(){},
	getMousePos: function(evt) {
		var rect = GAME.canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};},
		isClicked: function(obj){
			topx = obj.x
			topy = obj.y
			bottomx = topx + obj.img.width
			bottomy = topy + obj.img.height
			if(MOUSE.x >= topx & MOUSE.x <= bottomx & MOUSE.y >= topy & MOUSE.y <= bottomy)return(true);
			else{return(false)}

		},

		init: function(eventType){
			console.log("INITIALIZED MOUSE")
			GAME.canvas.addEventListener(eventType, function(evt) {
				var mousePos = MOUSE.getMousePos(evt);
				MOUSE.x=mousePos.x;
				MOUSE.y=mousePos.y;
				for(var i = 0; i < GAME.currentScene.objs.length; i ++){
					if(MOUSE.isClicked(GAME.currentScene.objs[i]))GAME.currentScene.objs[i].click()
				}
			}, false);
		}



	}
