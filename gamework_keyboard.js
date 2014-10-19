console.log("INITIALIZED KEYBOARD");
var KEYBOARD = {
  w: false,
  a: false,
  s: false,
  d: false,
  left: false,
  right: false,
  up: false,
  down: false,
  update: function(evt, bool){
    switch(evt.keyCode) {
    case 37: KEYBOARD.left = bool; break;
    case 38: KEYBOARD.up = bool; break;
    case 39: KEYBOARD.right = bool; break;
    case 40: KEYBOARD.down = bool; break;
    case 87: KEYBOARD.w = bool; break;
    case 65: KEYBOARD.a = bool; break;
    case 83: KEYBOARD.s = bool; break;
    case 68: KEYBOARD.d = bool; break;

}
  }
}
window.onkeydown = function(evt){
  KEYBOARD.update(evt, true);
  //alert(evt.keyCode)
}
window.onkeyup = function(evt){
  KEYBOARD.update(evt, false);
}
