var divy=document.createElement('div');
var imgy = document.createElement('img');
imgy.setAttribute('id','durg');
imgy.setAttribute('src','https://wiiliam.github.io/fishies.me/Portfolio/assets/img/doggo.svg');
imgy.style='transition: .3s ease;position:absolute;bottom:0px;width:96px;height:80px;';
divy.style='position:fixed;bottom:5px;left:5px;zIndex:9999;width:100%;display:block';
document.body.appendChild(divy);
divy.appendChild(imgy);
var oldscroll = window.pageYOffset;
window.onscroll = function move() {
  function dogR(){
    var d = document.getElementById('durg');
    var progress = ( (window.scrollY /(document.body.offsetHeight - window.innerHeight)) * 95 );
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
