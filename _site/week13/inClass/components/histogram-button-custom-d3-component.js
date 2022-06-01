// these are sort of like import statements from python
const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = Object.assign(
  {},
  require('d3'),
  require('d3-transition'),
  require('d3-selection')
);
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

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

class HistogramButtonCustomD3Component extends D3Component {
    // initializing the visualization
    initialize(node, props) {

	const svg = this.svg = d3.select(node).append('svg')
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");


	d3.csv("https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgs_per_country_over_time_columns_2020.csv", function(error, data) {

	    //var countryName = "United States";
	    var countryName = props.country;

	    console.log(Object.keys(data));
	    console.log(data.columns); // columns of my dataset
	    console.log(data[0]);
	    console.log(data[0]['Years']);

	    data.forEach(function(d) {
		d.date = parseDate(d['Years']);
		d.value = d[countryName];
		console.log(d.date);
	    });
	    
	    x.domain(data.map(function(d) { return d.date; }));
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
	    
	    
	}); // end of d3.csv function

	
  } // end of initialize

    // updates visualization -- definitely!
    update(props, oldProps) {
	const svg = this.svg;
	svg.selectAll("*").remove(); // remove all old objects

	var countryName = props.country;

	svg
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");

	d3.csv("https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgs_per_country_over_time_columns_2020.csv", function(error, data) {

	    //var countryName = "United States";
	    var countryName = props.country;

	    console.log(Object.keys(data));
	    console.log(data.columns); // columns of my dataset
	    console.log(data[0]);
	    console.log(data[0]['Years']);

	    data.forEach(function(d) {
		d.date = parseDate(d['Years']);
		d.value = d[countryName];
		console.log(d.date);
	    });
	    
	    x.domain(data.map(function(d) { return d.date; }));
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
	    
	    
	}); // end of d3.csv function
	
  } // end of update function
} // end of HistogramCustomD3Component

module.exports = HistogramButtonCustomD3Component;
