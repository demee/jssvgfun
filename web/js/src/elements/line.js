Raphael.fn.line = function(x, y, xx, yy) {    
    return this.path(['M', x, y, 'L', xx, yy].join(' '));
}

Raphael.fn.vLine = function(x, y, w){
    return this.line(x, y, x + w, y);  
}

Raphael.fn.hLine = function (x, y, h){
    return this.line(x, y, x, y + h);
}

Raphael.fn.aLine = function (x, y, l, a){
    var xx = x + l * Math.cos(a / 180 * Math.PI);
    var yy = y + l * Math.sin(a / 180 * Math.PI);    
    
    return this.line(x, y, xx, yy);
}
