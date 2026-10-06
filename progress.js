(function(){
var K="zhushan-layers",T=+document.body.dataset.total||1;
function g(){try{return JSON.parse(localStorage.getItem(K))||[]}catch(e){return[]}}
function s(a){try{localStorage.setItem(K,JSON.stringify(a))}catch(e){}}
var id=document.body.dataset.id;if(id){var a=g();if(a.indexOf(id)<0){a.push(id);s(a)}}
var seen=g(),n=seen.length,p=document.getElementById("prog");
if(p)p.innerHTML='<div class="bar"><i style="width:'+Math.min(100,n/T*100)+'%"></i></div><p>已掃描 '+n+' / '+T+' 層'+(n>=T?'，三層全部完成！':'')+'</p>';
document.querySelectorAll("[data-seen]").forEach(function(e){if(seen.indexOf(e.dataset.seen)>=0)e.classList.add("seen")});
var r=document.getElementById("reset");if(r)r.onclick=function(){s([]);location.reload()};
})();
