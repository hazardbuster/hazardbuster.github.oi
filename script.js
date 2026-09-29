(function(){
  var g=document.getElementById('lines'),cx=900,cy=330,out='';
  for(var k=1;k<=16;k++){
    var r=k*24,d='';
    for(var i=0;i<=72;i++){
      var a=i/72*Math.PI*2;
      var w=1+.16*Math.sin(a*3+k*.35)+.09*Math.sin(a*5-k*.2);
      var x=cx+Math.cos(a)*r*1.5*w, y=cy+Math.sin(a)*r*.95*w;
      d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);
    }
    out+='<path d="'+d+'Z"'+(k%4===0?' stroke-opacity=".6" stroke-width="1.8"':'')+'/>';
  }
  g.innerHTML=out;
})();
