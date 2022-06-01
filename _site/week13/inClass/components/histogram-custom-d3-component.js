// these are sort of like import statements from python
const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = Object.assign(
  {},
  require('d3'),
  require('d3-transition'),
  require('d3-selection')
);
// loading the react, idyll-d3-component & d3 "libraries"

//const size = 600; // background size in pixels
// probably something to do with the background box
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

class HistogramCustomD3Component extends D3Component {
    // initializing the visualization
    initialize(node, props) {

	// all of the things I want to happen before we start drawing
	// Parse the date / time
	var parseDate = d3.isoParse

	var x = d3.scaleBand()
	    .rangeRound([0, width], .05).padding(0.1);

	var y = d3.scaleLinear().range([height, 0]);

	var xAxis = d3.axisBottom()
	    .scale(x)
	    //.tickFormat(d3.timeFormat("%b"));
	    .tickFormat(d3.timeFormat("%Y"));

	var yAxis = d3.axisLeft()
	    .scale(y)
	    .ticks(10);


	
	const svg = this.svg = d3.select(node).append('svg')//);
	//const svg = (this.svg = d3.select(node).append('svg'));
	//svg
	//    .attr('viewBox', `0 0 ${size} ${size}`)
	//    .style('width', '100%')
	//    .style('height', 'auto');
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");


	//d3.csv("https://raw.githubusercontent.com/UIUC-iSchool-DataViz/spring2020/master/week14/bar-data.csv", function(error, data) {
	d3.csv("https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgs_per_country_over_time_columns_2020.csv", function(error, data) {

	    var countryName = "United States";

	    console.log(Object.keys(data));
	    console.log(data.columns); // columns of my dataset
	    console.log(data[0]);
	    //console.log(data[0]['date']);
	    console.log(data[0]['Years']);

	    data.forEach(function(d) {
		// no longer have date and value in our dataset
		//d.date = parseDate(d.date);
		//d.value = +d.value;
		// repalce this d.date and d.value with something else because they get used below
		d.date = parseDate(d['Years']);
		d.value = d[countryName];
		console.log(d.date);
	    });
	    
	    x.domain(data.map(function(d) { return d.date; }));
	    //y.domain([0, d3.max(data, function(d) { return d.value; })]);
	    y.domain([0,1000]);
	    
	    svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis.ticks(null).tickSize(0))
		.selectAll("text")
		.style("text-anchor", "middle")
		.style("text-anchor","end")
		.attr("transform", "rotate(-90)" );
	    
	    svg.append("g")
		.attr("class", "y axis")
		.call(yAxis.ticks(null).tickSize(0))
		.append("text")
		.attr("y", 6)
		.style("text-anchor", "middle")
		.text("Value");
	    
	    svg.selectAll("bar")
		.data(data)
		.enter().append("rect")
		//.style("fill", function(d){ return d.value < d.target ? '#EF5F67': '#3FC974'})
		.style("fill", '#3FC974')
		.attr("x", function(d) { return x(d.date); })
		.attr("width", x.bandwidth())
		.attr("y", function(d) { return y(d.value); })
		.attr("height", function(d) { return height - y(d.value); });

	    // add in the country name to our plot
	    svg.append("text")
		.attr("x",(width/2))
		.attr("y", 10-(margin.top/2))
		.text(countryName);
	    //svg.selectAll("lines")
//		.data(data)
//		.enter().append("line")
//		.style("fill", 'none')
//  		.attr("x1", function(d) { return x(d.date) + x.bandwidth()+5; })
//		.attr("x2", function(d) { return x(d.date)-5; })
//		.attr("y1", function(d) { return y(d.target); })
//		.attr("y2", function(d) { return y(d.target); })
//  		.style("stroke-dasharray", [2,2])
//  		.style("stroke", "#000000")
//		.style("stroke-width", 2)
	    
	}); // end of d3.csv function

	
    //svg
    //  .append('circle')
    //  .attr('r', 20) // radius of the circle
    //  .attr('cx', Math.random() * size)
    //  .attr('cy', Math.random() * size);
      //.attr('cx',0)
      //.attr('cy', 0);
  }

  // updates visualization -- definitely!
  //update(props, oldProps) {
  //  this.svg
//	  .selectAll('circle')
//	  .transition() // transition to another state
//	  .duration(750) // length of transition (millisec)
//          // below updates x,y center of circle randomly
//	  .attr('cx', Math.random() * size)
//	  .attr('cy', Math.random() * size);
//  }
} // end of HistogramCustomD3Component

module.exports = HistogramCustomD3Component;
