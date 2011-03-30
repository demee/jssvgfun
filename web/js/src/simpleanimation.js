var demee = demee || {}; 
demee.test = demee.test || {}; 

demee.test.SimpleAnimation = (function(){
	var _self = {}; 

	var _paper; 


	var _initApp = function(){
		_paper = Raphael(10, 50, 320, 200); 
		_drawSomething(); 
	}

	var _drawSomething = function(){
		var cicrcle = paper.circle(50, 40, 10);
		circle.attr("fill", "#f00"); 
		circle.attr("stroke", "#fff"); 
	}


	window.onload = _initApp; 

	return _self; 


}); 
