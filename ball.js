const log = console.log;
console.log('Events')

let right = false;
let list = [[70,70], [670, 70], [670,670], [70,670]];
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
function moveCircle(e) {
	const circle = e.target;
	var x = e.clientX;     // Get the horizontal coordinate
	var y = e.clientY;     // Get the vertical coordinate
	var coor = "X coords: " + x + ", Y coords: " + y;
	log(coor);
	log(circle);
	// moving the circle by changing the style property
	if (!right) {
		circle.style.left = (40+x)+'px';
		circle.style.top = (40+y) + 'px';
		//if ((circle.style.left <= 40px && circle.style.top <= 40px) || (circle.style.left >= 640px && circle.style.top <= 40px)
		if ((circle.style.left.indexOf('px') <= 40) ||(circle.style.top.indexOf('px')  <= 40) ||(circle.style.left.indexOf('px')  >= 640) || (circle.style.top.indexOf('px')  >= 640)){
			let random = between(0,3);
			let cod = list[random];
			circle.style.left = cod[0];
			circle.style.top = cod[1];
			circle.style.left = between(41,641);
			circle.style.top =between(41,641);
		}
		
		right = true	
	} else {
		circle.style.left = (40-x)+'px';
		circle.style.top = (40-y) + 'px';
		if ((circle.style.left.indexOf('px') <= 40) ||(circle.style.top.indexOf('px') <= 40) ||(circle.style.left.indexOf('px') >= 640) || (circle.style.top.indexOf('px')  >= 640)){
			let random = between(0,3);
			let cod = list[random];
			circle.style.left = between(41,641);
			circle.style.top = between(41,641);
		}
		right = false;	
	}
}