Raphael.fn.square = function(x, y, w){
	var path = ['M', x, y, 'L', x + w, y, 'L', x + w, y + w, 'L', x, y + w, 'Z']; 
	return this.path(path); 
}
