const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;

class CustomD3Component extends D3Component {
  // initialization function
  initialize(node, props) {
    const svg = (this.svg = d3.select(node).append('svg'));
    svg // probably the background object -- background canvas
      .attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    svg // drawing initial circle -- changed to center and larger
	  .append('circle')
	  .attr('r', 200)
	  .attr('cx', 300)
	  .attr('cy',300);
      //.attr('cx', Math.random() * size)
      //.attr('cy', Math.random() * size);
  } // end initialization function

  //updating based on our interaction (button push)
  update(props, oldProps) {
    this.svg
      .selectAll('circle') // grab the circle
      .transition() // transition from old state to new state
      .duration(750) // how long transition takes
      .attr('cx', Math.random() * size) // change attributes to be new x center
      .attr('cy', Math.random() * size); // ... and new y -center
  }
}

module.exports = CustomD3Component;
