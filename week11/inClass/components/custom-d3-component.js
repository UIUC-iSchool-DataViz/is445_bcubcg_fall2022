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

const size = 600; // background size in pixels

// "CustomD3Component is the "name" we call this
// component by in the index.idyll file
class CustomD3Component extends D3Component {
    // "extends" is probably related to the "d3-component"

  // initializing the visualization
    initialize(node, props) {
	// svg = Support Vector Graphics
    const svg = (this.svg = d3.select(node).append('svg'));
    svg
      .attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    svg
      .append('circle')
      .attr('r', 20) // radius of the circle
      .attr('cx', Math.random() * size)
      .attr('cy', Math.random() * size);
      //.attr('cx',0)
      //.attr('cy', 0);
  }

  // updates visualization -- definitely!
  update(props, oldProps) {
    this.svg
	  .selectAll('circle')
	  .transition() // transition to another state
	  .duration(750) // length of transition (millisec)
          // below updates x,y center of circle randomly
	  .attr('cx', Math.random() * size)
	  .attr('cy', Math.random() * size);
  }
} // end of CustomD3Component

// sort of like a return statement in python
module.exports = CustomD3Component;
// makes CustomD3Component something we can use in index.idyll
