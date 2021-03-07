var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var krest = document.querySelector('.exit');
var contactsBtn = document.querySelector('.contactsBtn');
var contacts = document.querySelector('.contacts__wrapper');
var rotation = 0;
var maxRadius = 3;
window.onload = function(){
	function color(){
	var tl = anime.timeline({
});
tl
.add({
	targets: '.l5',
	rotateX: 0,
	scale: [0,1],
    duration: 500,
    easing: 'easeInOutSine',
})
.add({
	targets: '.l2',
  	scale:['0','1'],
  	duration: 100,
  	offset: '-=700',
})
.add({
	targets: '.l1',
  	scale:['0','1'],
  	duration: 100
})
.add({
	targets: '.l4',
  	scale:['0','1'],
  	duration: 100
})
.add({
	targets: '.l3',
  	scale:['0','1'],
  	duration: 100
})
.add({
	targets: '.l6',
  	scale:['0','1'],
  	duration: 100
})
.add({
	targets: '.l7',
  	scale:['0','1'],
  	duration: 100
})
.add({
	targets: '.l8',
  	scale:['0','1'],
  	duration: 100
})
.add({
	targets: '.h1__whiteb',
  	width:['0','400px'],
  	easing: 'easeInOutSine',
  	duration: 500
})
.add({
	targets: '.white__block1, .white__block2, .white__block3',
  	width:['0','100px'],
  	easing: 'easeInOutSine',
  	duration: 500
})
.add({
	targets: 'p, .a__block',
  	opacity:['0','1'],
  	easing: 'easeInOutSine',
  	duration: 300
})

}
color();
var mouse = {
	x: undefined,
	y: undefined
}
canvas.addEventListener('mousemove', function(event){
	mouse.x = event.clientX;
	mouse.y = event.clientY;
	console.log(event.clientY);

});
window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

};
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function getDistance(x1,y1,x2,y2,) {
	var xDistance = x2-x1;
	var yDistance = y2-y1;
	return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
}
var firstColor =[
'#147CA6',
'#2CA4BF',
'#4ACAD9',
'#4AD9D9',
'#CEF2F2'
];
var secondColor = [
'#FFE2DF',
'#FFD6DC',
'#F5C1C7',
'#E8A0AB',
'#E8707B'
];
var thirdColor = [
  '#FFEE00',
  '#FFC200',
  '#FF9D00',
  '#FF7700',
  '#FF4800'
];
var colorArr =[ firstColor, secondColor, thirdColor];
function Circle(x,y,radius,color){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.minRadius = radius;
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		ctx.shadowColor = this.color;
		ctx.shadowBlur = 25;
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	this.color = firstColor[Math.floor(Math.random() * firstColor.length)];
	
	this.update = function(){
			if(mouse.x - this.x < 801 && mouse.x - this.x > -801 && mouse.y - this.y < 801 && mouse.y - this.y > -801){
		if(this.radius < maxRadius){
			this.radius += 6;
		                           }
		} else if(this.radius > this.minRadius){
			this.radius -=1;
		}
	this.draw();
	}
}
circleArr=[];
function init(){
	for(var i = 0; i<1500; i++){
		var x = randomInt(0 - canvas.width, canvas.width +canvas.width);
		var y = randomInt(0 - canvas.height, canvas.height + canvas.height);
		var radius = randomInt(1, 3);
		circleArr.push(new Circle(x,y,radius));
	}
}
function animate(){
	requestAnimationFrame(animate);
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0,0,canvas.width, canvas.height);
	ctx.translate(canvas.width/2, canvas.height/2);
  	ctx.rotate(rotation);
	 for(var i = 0; i < circleArr.length; i++){
	 	circleArr[i].update();
	 }
	 rotation += 0.00051;
}
init();
animate();
contacts.style.display = 'none';
krest.addEventListener('click', function(){
	contacts.classList.remove('opacity');
	setTimeout(function(){
	contacts.style.display = 'none';
	}, 1000);
});
contactsBtn.addEventListener('click', function(){
	contacts.style.display = 'flex';
	setTimeout(function(){
	contacts.classList.add('opacity');
	}, 10);
});
}