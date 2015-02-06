# SVGMold
SVG Utility

------
##USAGE: 

```JavaScript
var svgNode = SVGMold('svg',{
  width   : "1000px",
  height  : "200px",
  version : '1.1',
  xmlns   : 'http://www.w3.org/2000/svg',
  x       : '0px',
  y       : '0px'
});

  var right_polygon = SVGMold('polygon', {
    points: "600,293 482,293 625,99 600,99",
    fill: "#304770"
  });

  var left_polygon = SVGMold( 'polygon', {
    points : "500,247 0,247 0,55 568,55",
    fill   : "#45A9FE"
  });

  svgNode.appendChild(right_polygon);
  svgNode.appendChild(left_polygon);
  document.body.appendChild(svgNode)
```
