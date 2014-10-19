var GAME = {
  scene: function(){
    this.objs=[];
    this.add = function(sc){
      this.objs.push(sc)
    },
    this.init = function(){}
  },
  timer: undefined,
  currentScene: undefined,
  fps: 60,
  id: "IDcanvas",
  width: "1000",
  height: "500",
  style: "background:black;",
  init: function(s){
    console.log("INITIALIZED GAME");
    document.body.innerHTML+="<canvas id='"+this.id+"' style='"+this.style+"'></canvas>";
    this.canvas = document.getElementById(this.id);
    this.canvas.width=this.width;
    this.canvas.height=this.height;
    this.ctx=this.canvas.getContext("2d");
    this.currentScene = s;
    this.currentScene.init(); 
    this.timer = window.setInterval(this.loop, this.fps)

  },
  loop: function(){
    GAME.ctx.clearRect(0,0,1000, 1000);
    for(var i = 0; i < GAME.currentScene.objs.length; i++){
      GAME.currentScene.objs[i].tick();
    }

  },
  draw: function(i, x, y){
    this.ctx.drawImage(i, x, y)

  },
  image: function(src){
    var rattatooie = new Image();
    rattatooie.src = src;
    return rattatooie;
  },
  changeScene: function(sce){
    this.currentScene=sce;
    this.currentScene.init();
  }
}
