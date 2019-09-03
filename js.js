var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var image = document.querySelectorAll('.gel img')

var i = 0;

next.addEventListener('click' , function(){

	image[i].className = '';
	i++;
	if(i >= image.length){
		i = 0;
	};
	image[i].className = 'show';


});

prev.addEventListener('click' , function(){

	image[i].className = '';
	i--;
	if(i < 0){
		i = image.length - 1;
	};
	image[i].className = 'show';


});