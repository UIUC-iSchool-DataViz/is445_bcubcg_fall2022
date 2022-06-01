const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

//const size = 600;
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

class HistogramCustomD3Component extends D3Component {
    // initialization function
    initialize(node, props) {
	// Parse the date / time
	var parseDate = d3.isoParse
	// setting x-scale
	var x = d3.scaleBand().rangeRound([0, width], .05).padding(0.1);
	// setting y-scale
	var y = d3.scaleLinear().range([height, 0]);
	// x axis
	var xAxis = d3.axisBottom()
	    .scale(x)
	    //.tickFormat(d3.timeFormat("%b"));
	    .tickFormat(d3.timeFormat("%Y")); // reformat for years in our data
	// y axis
	var yAxis = d3.axisLeft()
	    .scale(y)
	    .ticks(10);

	// start drawing things
	const svg = (this.svg = d3.select(node).append('svg'));
	svg // probably the background object -- background canvas
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");

	svg // drawing initial circle -- changed to center and larger

	d3.csv("https://raw.githubusercontent.com/UIUC-iSchool-DataViz/spring2020/master/week14/bar-data.csv", function(error, data) {

	    data.forEach(function(d) {
		d.date = parseDate(d.date);
		d.value = +d.value;
	    });
	    
	    x.domain(data.map(function(d) { return d.date; }));
	    y.domain([0, d3.max(data, function(d) { return d.value; })]);

	    // drawing x-axis
	    svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis.ticks(null).tickSize(0))
		.selectAll("text")
		.style("text-anchor", "middle")

	    // drawing y-axis
	    svg.append("g")
		.attr("class", "y axis")
		.call(yAxis.ticks(null).tickSize(0))
		.append("text")
		.attr("y", 6)
		.style("text-anchor", "middle")
		.text("Value");

	    // drawing the bars
	    svg.selectAll("bar")
		.data(data)
		.enter().append("rect")
		//.style("fill", function(d){ return d.value < d.target ? '#EF5F67': '#3FC974'})
		.style("fill", '#EF5F67') // no more conditional formatting for color
		.attr("x", function(d) { return x(d.date); })
		.attr("width", x.bandwidth())
		.attr("y", function(d) { return y(d.value); })
		.attr("height", function(d) { return height - y(d.value); });

	    // drawing lines
	    //svg.selectAll("lines")
	//	.data(data)
	//	.enter().append("line")
	//	.style("fill", 'none')
  	//	.attr("x1", function(d) { return x(d.date) + x.bandwidth()+5; })
	//	.attr("x2", function(d) { return x(d.date)-5; })
	//	.attr("y1", function(d) { return y(d.target); })
	//	.attr("y2", function(d) { return y(d.target); })
  	//	.style("stroke-dasharray", [2,2])
  	//	.style("stroke", "#000000")
	//	.style("stroke-width", 2)
	    
	});
	//.append('circle')
	    //.attr('r', 200)
	    //.attr('cx', 300)
	    //.attr('cy',300);
  } // end initialization function

  //updating based on our interaction (button push)
  //update(props, oldProps) {
  //  this.svg
  //    .selectAll('circle') // grab the circle
  //    .transition() // transition from old state to new state
  //    .duration(750) // how long transition takes
  //    .attr('cx', Math.random() * size) // change attributes to be new x center
  //    .attr('cy', Math.random() * size); // ... and new y -center
  //}
}

module.exports = HistogramCustomD3Component;
