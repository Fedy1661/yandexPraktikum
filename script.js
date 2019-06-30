
function getRandom(anyArray) {
  var randomNumber = Math.floor(Math.random() * anyArray.length);
  var randomElement = anyArray[randomNumber];
  return randomElement;
}
var pageSettings = {
  red: 200,
  green: 200,
  blue: 200,
  background: ['https://pictures.s3.yandex.net/background.jpg',
               'https://pictures.s3.yandex.net/cover-color.jpg',
               'https://pictures.s3.yandex.net/cover-grid.jpg',
              'https://pictures.s3.yandex.net/cover-typo.jpg',
              'https://pictures.s3.yandex.net/cover-wall.jpg']
}, bgColor = 'rgb(' + pageSettings.red + ', ' + pageSettings.green + ', ' + pageSettings.blue + ')';
document.body.style.backgroundColor = bgColor;
var header = document.getElementById('main-header');
header.style.backgroundImage = "url("+ getRandom(pageSettings.background) +")";
var i = 0;
var cards = document.getElementsByClassName('card');
window.addEventListener('scroll', function () {
  var scrollY = window.pageYOffset;
  var bgValue = 'rgb(' + (pageSettings.red - scrollY / 4) + ', ' + (pageSettings.green - scrollY / 4) + ', ' + (pageSettings.blue - scrollY / 4) + ')';
  document.body.style.backgroundColor = bgValue;
  for(var c = 0; c<cards.length;c++){
    var card = cards[c];
    card.style.color = 'rgb(' + (pageSettings.red * 0 + scrollY / 4) + ',' + (pageSettings.green * 0 + scrollY / 4) + ',' + (pageSettings.blue * 0 + scrollY / 4) + ')';
  }
});
// document.getElementById('main-header').addEventListener("click", changeBg);
function Car(x,y) {
  this.x = x;
  this.y = y;
  this.history = [[this.x,this.y]];
  this.drawn = false;
};
Car.prototype.draw = function() {
  if(this.drawn != true){
    var carHtml='<img src="https://st2.zr.ru/_ah/img/u3AO29uvgpznrOd18qcceA=s800">'; 
    this.carElement = $(carHtml);
    this.carElement.css({position: 'absolute', left: this.x,top: this.y});
    this.drawn = true;
    $('body').append(this.carElement);
  }else {
    console.log('Объект уже нарисован.');
  }
};
Car.prototype.moveRight = function(i=5){
  this.x += i;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
  this.history.unshift([this.x,this.y]);
};
Car.prototype.moveLeft = function(i=5){
  this.x -= i;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
  this.history.unshift([this.x,this.y]);
};
Car.prototype.moveUp = function(i=5){
  this.y -= i;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
  this.history.unshift([this.x,this.y]);
};
Car.prototype.moveDown = function(i=5){
  this.y += i;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
  this.history.unshift([this.x,this.y]);
};
Car.prototype.back = function(){
  if (this.history.length != 1) {
    this.y = this.history[1][1];
    this.x = this.history[1][0];
    this.carElement.css({
      left: this.x,
      top: this.y
    });
    this.history.shift();
  } else{
    console.log('Нечего откатывать!');
  }
};
Car.prototype.move = function(x, y){
  this.x = x
  this.y = y
  this.carElement.css({
    left: this.x,
    top: this.y
  });
  this.history.unshift([this.x,this.y]);
};
Car.prototype.hide = function(){
  $(this.carElement).hide();
};
Car.prototype.show = function(){
  $(this.carElement).show();
};
var tesla = new Car(10, 20);
var bugatti = new Car(100, 200);

