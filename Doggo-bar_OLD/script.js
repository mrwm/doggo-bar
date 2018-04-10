var divy = document.createElement('div');
var slidy = document.createElement('input');
slidy.setAttribute('id','durg');
slidy.setAttribute('type','range');
slidy.setAttribute('min','0');
slidy.setAttribute('value','0');
slidy.setAttribute('max','100');
slidy.style='transition: .3s ease;position:absolute;bottom:0px;width:100%;height:0px;z-index:10000;opacity:0';

var imgy = document.createElement('img');
imgy.setAttribute('id','durgo');

imgy.style='transition: .3s ease;position:absolute;bottom:0px;width:96px;height:80px;z-index:9999';
divy.style='position:fixed;bottom:0px;left:0px;z-index:999;width:calc(100% - 96px);display:block';

document.body.appendChild(divy);
divy.appendChild(slidy);
divy.appendChild(imgy);

var oldscroll = window.pageYOffset;

document.getElementById("durg").oninput = function(){
  var newProg = ( (this.value * (document.body.offsetHeight - window.innerHeight)) / 100)
  window.scrollTo(0,newProg); //x,y
  //console.log(newProg);
}

window.onscroll = function move() {
  function dogR(){
    var d = document.getElementById('durg');
    var progress = ( (window.scrollY /(document.body.offsetHeight - window.innerHeight)) * 100 );
    var i = document.getElementById('durgo');
    d.value = progress;
    i.style.left = progress + '%';
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > oldscroll){
      i.style.transform = 'scaleX(1)';
    }
    else {
      i.style.transform = 'scaleX(-1)';
    }
    oldscroll = st;
  }
  dogR();
}
