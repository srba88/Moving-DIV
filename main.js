

   window.onload = function(){
    var box = document.getElementById('box');
    var top = 0;
    var left = 0;
    top = +top;
    left = +left;
    addEventListener('keydown', function(e){
   switch(e.which){
       case 37:
        left -= 10;
        box.style.left = left +'px';
       break;
       case 38:
        top -= 10;
        box.style.top = top +'px';
       break;
        case 39:
        left += 10;
        box.style.left = left +'px';
       break;
       case 40:
        top += 10;
        box.style.top = top +'px';
       break;
    
   }
   
    })
    box.addEventListener('click', clear);
}
function clear(){
        this.style.display = 'none';
}

