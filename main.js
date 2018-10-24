var box = document.getElementById('box');

addEventListener('keydown', function(e){
    if (e.which == 37) {
    	box.style.left = '40px';
    };
    if (e.which == 38) {
    	box.style.top = '40px';
    };
    if (e.which == 39) {
    	box.style.left = '900px';
    };
    if (e.which == 40) {
    	box.style.top = '400px';
    };
});

box.addEventListener('click', clear);

function clear(){
	this.style.display = 'none';
}