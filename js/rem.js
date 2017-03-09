var sj = 750;
function resize(){
	var cw = document.documentElement.clientWidth;
	var bi = cw / sj*100;
	document.documentElement.style.fontSize=bi+"px";
}
window.addEventListener("resize",resize);
resize();