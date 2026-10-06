(function(){var D=window.ITEMS,c=document.getElementById("chips"),p=document.getElementById("detail");
function show(i){[].forEach.call(c.children,function(b,j){b.setAttribute("aria-pressed",j==i)});var x=D[i];
p.innerHTML=(x.img?'<img class="hero" src="images/'+x.img+'.jpg" alt="'+x.t+'">':'<div class="hero">成品圖準備中</div>')+'<h2>'+x.t+'</h2><div class="d"><p><span>選材理由</span>'+x.r+'</p><p><span>搭配</span>'+x.p+'</p><p><span>吃法</span>'+x.e+'</p></div>'+(x.s.length?'<h2 style="margin-top:14px">製作流程</h2><ol>'+x.s.map(function(s){return'<li>'+s+'</li>'}).join("")+'</ol>':"")}
D.forEach(function(x,i){var b=document.createElement("button");b.className="chip";b.textContent=x.t;b.onclick=function(){show(i)};c.appendChild(b)});show(0)})();
