var divy = document.createElement('div');
var imgy = document.createElement('img');
imgy.setAttribute('id','durgo');

imgy.style='transition: .3s ease;position:absolute;bottom:0px;width:96px;height:80px;z-index:9999';
divy.style='position:fixed;bottom:0px;left:0px;z-index:999;width:calc(100% - 96px);display:block';

document.body.appendChild(divy);
divy.appendChild(imgy);

var oldscroll = window.pageYOffset;

window.onscroll = function move() {
  function dogR(){
    var d = document.getElementById('durgo');
    var progress = ( (window.scrollY /(document.body.offsetHeight - window.innerHeight)) * 100 );
    d.style.left = progress + '%';
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > oldscroll){
      d.style.transform = 'scaleX(1)';
    }
    else {
      d.style.transform = 'scaleX(-1)';
    }
    oldscroll = st;
  }
  dogR();
}

