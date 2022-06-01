const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

//const size = 600;
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var yoffset = 100;

// moved these to be accessible to both the initalization AND update function
// Parse the date / time
var parseDate = d3.isoParse
// setting x-scale -- offset by 100 pix
var x = d3.scaleBand().rangeRound([yoffset, width], .05).padding(0.1);
// setting y-scale
var y = d3.scaleLinear().range([height, 0]);
// x axis
var xAxis = d3.axisBottom()
    .scale(x)
    .tickFormat(d3.timeFormat("%Y")); // reformat for years in our data
// y axis
var yAxis = d3.axisLeft()
    .scale(y)
    .ticks(10);

class HistogramCountryCustomD3Component extends D3Component {
    // initialization function
    initialize(node, props) {

	// start drawing things
	const svg = (this.svg = d3.select(node).append('svg'));
	svg // probably the background object -- background canvas
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");

	svg // drawing initial circle -- changed to center and larger

	d3.csv("https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgs_per_country_over_time_columns_2020.csv", function(error, data) {

	    // how to investigate our data
	    //console.log(Object.keys(data));
	    //console.log(data.columns);
	    //console.log(data[0]);
	    //console.log(data[0]["Years"]);

	    //var countryName = 'United States';
	    var countryName = props.country; // coming from the inputs in index.idyll
	    
	    data.forEach(function(d) { // for loop through each row of index
		//console.log(d['Years']);
		//console.log(d['United States']);
		d.date = parseDate(d['Years']);
		d.value = +d[countryName];
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
		.attr("transform","rotate(-65)") // rotate ticks by -65 deg
		.style("text-anchor","end"); // changing anchor to end

	    // drawing y-axis
	    svg.append("g")
		.attr("class", "y axis")
		.attr("transform","translate("+yoffset+",0)") // added a translation 100px
		.call(yAxis.ticks(null).tickSize(0))
		.append("text")
		.attr("y", 6)
		.style("text-anchor", "middle")
		.text("Value");

	    // drawing the bars
	    svg.selectAll("bar")
		.data(data)
		.enter().append("rect")
		.style("fill", '#EF5F67') // no more conditional formatting for color
		.attr("x", function(d) { return x(d.date); })
		.attr("width", x.bandwidth())
		.attr("y", function(d) { return y(d.value); })
		.attr("height", function(d) { return height - y(d.value); });

	    // add in title text for the country
	    svg.append("text")
		.attr("x", width/2)
		.attr("y", 50-margin.top/2)
		.style("font-size", "16px")
		.style("text-decoration","underline")
		.text(countryName);
	    
	}); // end of d3.csv function

  } // end initialization function

  //updating based our interaction -- selection of a country
    update(props, oldProps) {
	const svg = this.svg; // grab all drawn elements
	svg.selectAll("*").remove(); // select all of the elements and remove
	
	// start drawing things
	//const svg = (this.svg = d3.select(node).append('svg'));
	svg // probably the background object -- background canvas
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");

	svg // drawing initial circle -- changed to center and larger

	d3.csv("https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgs_per_country_over_time_columns_2020.csv", function(error, data) {

	    // how to investigate our data
	    //console.log(Object.keys(data));
	    //console.log(data.columns);
	    //console.log(data[0]);
	    //console.log(data[0]["Years"]);

	    //var countryName = 'United States';
	    var countryName = props.country; // coming from the inputs in index.idyll
	    
	    data.forEach(function(d) { // for loop through each row of index
		//console.log(d['Years']);
		//console.log(d['United States']);
		d.date = parseDate(d['Years']);
		d.value = +d[countryName];
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
		.attr("transform","rotate(-65)") // rotate ticks by -65 deg
		.style("text-anchor","end"); // changing anchor to end

	    // drawing y-axis
	    svg.append("g")
		.attr("class", "y axis")
		.attr("transform","translate("+yoffset+",0)") // added a translation 100px
		.call(yAxis.ticks(null).tickSize(0))
		.append("text")
		.attr("y", 6)
		.style("text-anchor", "middle")
		.text("Value");

	    // drawing the bars
	    svg.selectAll("bar")
		.data(data)
		.enter().append("rect")
		.style("fill", '#EF5F67') // no more conditional formatting for color
		.attr("x", function(d) { return x(d.date); })
		.attr("width", x.bandwidth())
		.attr("y", function(d) { return y(d.value); })
		.attr("height", function(d) { return height - y(d.value); });
	    
	    // add in title text for the country
	    svg.append("text")
		.attr("x", width/2)
		.attr("y", 50-margin.top/2)
		.style("font-size", "16px")
		.style("text-decoration","underline")
		.text(countryName);	    
	}); // end of d3.csv function
  } // end of the update function
}

module.exports = HistogramCountryCustomD3Component;
