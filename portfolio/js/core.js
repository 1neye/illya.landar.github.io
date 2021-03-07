var canvas = document.querySelector('.canvas'),
	c = canvas.getContext('2d'),
	w = canvas.width = window.innerWidth + window.innerWidth,
	preloader = document.querySelector('.preloader');
	h = canvas.height = window.innerHeight;
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function distance(x1,y1,x2,y2){
	const xDist = x2 - x1;
	const yDist = y2 - y1;
	return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist , 2));
}
function Rect(x,y,width,height,sy){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.sy = sy;
	this.draw = function(){
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.fillStyle = this.color;
		c.fill();
	}
	this.update = function(){
		if(this.y >= innerHeight){
			this.x =  randomInt(-size, innerWidth);
			this.y = -size;
		}
		this.y += this.sy;
		this.draw();
	}
	this.color = colorArr[Math.floor(Math.random() * colorArr.length)];

}
// var colorArr = [
//   '#EC2375',
//   '#0079C5',
//   '#13DCDA',
//   '#FF9A00',
//   '#FF8000'
// ];
var colorArr = [
  '#F2F2F2',
  '#BFBFBF',
  '#8C8C8C',
  '#404040',
  '#0D0D0D'
];
var rectArr = [];
for(var i = 0; i< 70; i++){
	var x = randomInt(-size/2, innerWidth);
	var y = randomInt(-size, innerHeight/1.5);
	var size = randomInt(3, 20);
	var sy = randomInt(0.5, 2.5);
	var height = size,
		width = size;
	if( i !== 0){
		for( var j = 0; j<rectArr.length; j++){
			if(distance(x,y,rectArr[j].x, rectArr[j].y) - size  < 0){
				 x = Math.random() * innerWidth
				 var y = -size;
				 j=-1;
			}
		}
	}
	rectArr.push(new Rect(x,y,size,size,sy));
}
function animate(){
	requestAnimationFrame(animate);
	c.fillStyle = 'rgba(255, 255, 255, 0.01)';
  	c.fillRect(0, 0, canvas.width, canvas.height);
	for(p = 0; p<rectArr.length; p++){
		rectArr[p].update();
	}
}
animate();
window.onload = function(){
	preloader.classList.add('opacity');
	setTimeout(function(){
	preloader.style.display = 'none';
	}, 2000)
}