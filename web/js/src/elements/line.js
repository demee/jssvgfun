var paper = new Raphael('canvas');


/* Class Line */
function Line(x, y, xx, yy, attrs) {
    this.x = x;
    this.y = y;
    this.xx = xx;
    this.yy = yy;
    this.attrs;
}

Line.prototype.render = function() {
    var path = ['M', this.x, this.y, 'L', this.xx, this.yy].join(' ');
    this.l = paper.path(path);
};
    
Line.prototype.decorate = function(){
    this.l.attr(this.attrs);
};

/* <------------------------ Line */

/* Class VLine extends Line */
function VLine(x, y, w) {
    this.x = x;
    this.y = y;
    this.xx = x;
    this.yy = y + w;
}

VLine.prototype = new Line();
VLine.prototype.constructor = Line;
/* <-------------------- VLine */

/* Class HLine extends Line */
function HLine(x, y, w){
    this.x = x;
    this.y = y;
    this.xx = x + w;
    this.yy = y;
}

HLine.prototype = new Line();
HLine.prototype.constructor = Line;
/* <--------------------- HLine */


/* Class Aline extends Line */

function ALine(x, y, w, a){
    this.x = x;
    this.y = y;
    this.xx = x + w * Math.cos(a / 180 * Math.PI);
    this.yy = y + w * Math.sin(a / 180 * Math.PI);
}

ALine.prototype = new Line();
ALine.prototype.constructor = Line;

/* <-------------------- ALine */ 
