var bbox, radii, svg, target;
var date = new Date();
var face;

svg = d3.select('svg');
bbox = svg[0][0].getBoundingClientRect();

radii = [10, 30, 60, 90, 100, 140, 170, 190, 200];

target = svg.append('g')
    .attr('transform', "translate(" + (bbox.width / 2) + "," + (bbox.height / 2) + ")");

target.selectAll('circle')
    .data(radii)
  .enter().append('circle')
    .attr('r', function(d) {return d;});