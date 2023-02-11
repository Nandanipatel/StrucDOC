import React, { useEffect, useRef} from 'react';
import * as d3 from 'd3';

const tempData = [
  {time: 10, value: 1},
  {time: 20, value: 2},
  {time: 30, value: 3},
  {time: 40, value: 4},
  {time: 50, value: 5},
]

const AreaChart = ({data}) => {
  const areaChart = useRef();
  const dimensions = { width: 800, height: 400, margin: 50 };

  useEffect(() => {
    //svg area container
    const svg = d3.select(areaChart.current)
                  .attr('width', dimensions.width + dimensions.margin)
                  .attr('height', dimensions.height + dimensions.margin)
                  

    //x scale
    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.time)])
                     .range([dimensions.margin, dimensions.width - dimensions.margin])

    // x axis
    svg.append('g')
       .call(d3.axisBottom(xScale))
       .attr('transform', `translate(0, ${dimensions.height - dimensions.margin})`)

    svg.append('text')
       .attr('x', dimensions.width / 2)
       .attr('y', dimensions.height - dimensions.margin / 2 + 10)
       .attr('text-anchor', 'middle')
       .text('Time in seconds')

    svg.append('g')
       .attr("class", "xaxis")
       .attr('transform', `translate(0, ${dimensions.height - dimensions.margin})`)
       .call(d3.axisBottom(xScale))

    //y scale
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.value)])
                     .range([dimensions.height - dimensions.margin, dimensions.margin])

    //y axis
    svg.append('g')
       .call(d3.axisLeft(yScale))
       .attr('transform', `translate(${dimensions.margin}, 0)`)

    svg.append('text')
        .attr('x', -dimensions.height / 2)
        .attr('y', dimensions.margin / 2 - 10)
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text('Value')

    svg.append('g')
        .attr("class", "yaxis")
        .attr('transform', `translate(${dimensions.margin}, 0)`)
        .call(d3.axisLeft(yScale))

    //area generator
    const areaGenerator = d3.area()
                            .x(d => xScale(d.time))
                            .y0(dimensions.height - dimensions.margin)
                            .y1(d => yScale(d.value))

    //area graph
    svg.append('path')
       .datum(data)
       .attr('d', areaGenerator)
       .attr('fill', '#eee')
       .attr('stroke', '#000')
       .attr('stroke-width', 2)
       .attr('transform', `translate(${dimensions.margin}, 0)`)
    
  }, []);
  return (
    <div id="chartArea">
        <svg ref={areaChart} />
    </div>
  )
}

export default AreaChart;