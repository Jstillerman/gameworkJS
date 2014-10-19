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

		init: function(eventType){
			console.log("INITIALIZED MOUSE")
			GAME.canvas.addEventListener(eventType, function(evt) {
				var mousePos = MOUSE.getMousePos(evt);
				MOUSE.x=mousePos.x;
				MOUSE.y=mousePos.y;
				MOUSE.event();
			}, false);
		},
		isClicked: function(topx, topy, bottomx, bottomy){
			if(MOUSE.x >= topx & MOUSE.x <= bottomx & MOUSE.y >= topy & MOUSE.y <= bottomy)return(true);
			else{return(false)}

		}


	}



 
 