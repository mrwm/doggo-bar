var divy = document.createElement('div');
divy.setAttribute('id','pathOfDog');

var imgy = document.createElement('img');
imgy.setAttribute('id','durgo');
//imgy.setAttribute('onmouseover','showTip(this)');
//imgy.setAttribute('onmouseout', 'hideTip(this)');

var tooltip = document.createElement('span');
tooltip.setAttribute('id','proggo');

document.body.appendChild(divy);
divy.appendChild(imgy);
divy.appendChild(tooltip);

var oldscroll = window.pageYOffset;

//var tt = document.getElementById('proggo');
//tt.addEventListener("mouseover", showTip, false);
//tt.addEventListener("mouseout", hideTip, false);
//function showTip(x) {
//  tooltip.style.visibility="visible";
//}
//function hideTip(x) {
//  tooltip.style="visibility:hidden;";
//}

window.onscroll = function move() {
  function dogR(){
    var d = document.getElementById('durgo');
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

