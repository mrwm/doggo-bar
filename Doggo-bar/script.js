var divy = document.createElement('div');
divy.setAttribute('id','pathOfDog');
var imgy = document.createElement('img');
imgy.setAttribute('id','durgo');
var tooltip = document.createElement('span');
tooltip.setAttribute('id','proggo');
document.body.appendChild(divy);
divy.appendChild(imgy);
divy.appendChild(tooltip);
var oldscroll = window.pageYOffset;
window.onscroll = function move() {
  function dogR(){
    var d = document.getElementById('durgo');
    if (d.src != "chrome-extension://pdgmbmigmkckhijafddgdgfglcbffpem/img/blank.png"){
      document.getElementById('pathOfDog').style.display='block';
      d.style.display='inline';
    }
    else{
      document.getElementById('pathOfDog').style.display='none';
      d.style.display="none";
    }
    var p = document.getElementById('proggo');
    var progress = ( (window.scrollY /(document.body.offsetHeight - window.innerHeight)) * 100 );
    d.style.left = progress + '%';
    p.style.left = progress + '%';
    p.innerHTML = parseInt(progress) + '%';
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

