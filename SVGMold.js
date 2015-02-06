(function(window,doc){

  var SVGMold = function SVGMold( type, options ){
    var molding = document.createElementNS('http://www.w3.org/2000/svg', type );
    for (var key in options) options.hasOwnProperty(key) && molding.setAttribute( key, options[key]);
    return molding;
  }

  return window.SVGMold = SVGMold;

})(window,document);
