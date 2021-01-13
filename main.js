var slider = document.getElementById('s1-images');
var button1 = document.getElementById('s1-b1');
var button2 = document.getElementById('s2-b2');
var button3 = document.getElementById('s3-b3');
var button4 = document.getElementById('s4-b4');
var button5 = document.getElementById('s5-b5');

//checks position of slider to calculate distance


function slide1(){
    slider.style.transform = 'translateX(0px)';
};
function slide2(){
    slider.style.transform = 'translateX(-400px)';
};
function slide3(){
    slider.style.transform = 'translateX(-800px)';
};
function slide4(){
    slider.style.transform = 'translateX(-1200px)';
};
function slide5(){
    slider.style.transform = 'translateX(-1600px)';
};


