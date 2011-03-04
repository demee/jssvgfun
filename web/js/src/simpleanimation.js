var demee = demee || {}; 
demee.test = demee.test || {}; 

demee.test.SimpleAnimation = (function(){
	var _self = {}; 

	var _paper; 


	_self.initApp = function(){
		_paper = Raphael(document.getElementById("container"));
		_drawSomething(); 
	}

	var _drawSomething = function(){
		var circle = _paper.circle(10, 10, 10);
		circle.attr("fill", "#f00"); 
		circle.attr("stroke", "#aaa");


                var rect = _paper.rect(10, 10, 10, 10);
                _paper.rect(20, 20, 10, 10, 223).attr("fill", "#f00").attr("stroke", "#0f0");

                var elipse  = _paper.ellipse(50, 50, 40, 20);
                elipse.animate({cx: 300, cy:300}, 2000, "bounce");
                rect.animateWith(elipse, {x: 400}, 2000)


                _paper.image("http://upload.wikimedia.org/wikipedia/en/e/e5/BBENS412.png", 120, 10, 80, 80);


                var st = _paper.set();
                st.push(
                    _paper.circle(120, 120, 5),
                    _paper.circle(130, 130, 5)
                );
                st.attr({fill: "red"});

                _paper.text(50, 50, "Raphaël\nkicks\nbutt!");

                var c = _paper.circle(200, 200, 10);
                c.node.onclick = function () {
                c.attr("fill", "red");

                var r = _paper; 

                var p = r.path("M100,100c0,50 100-50 100,0c0,50 -100-50 -100,0z").attr({stroke: "#ddd"}),
                    e = r.ellipse(104, 100, 4, 4).attr({stroke: "none", fill: "#f00"}),
                    b = r.rect(0, 0, 620, 400).attr({stroke: "none", fill: "#000", opacity: 0}).click(function () {
                    e.attr({rx: 5, ry: 3}).animateAlong(p, 4000, true, function () {
                        e.attr({rx: 4, ry: 4});
                    });
    });
};
	}


	

	return _self; 


}());
