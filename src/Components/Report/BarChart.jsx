import React, { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3';

const datat = [
    { test: 1, ph: 13 },
    { test: 2, ph: 12 },
    { test: 3, ph: 11 },
    { test: 4, ph: 10 },
    { test: 5, ph: 9 },
]

const BarChart = ({ data }) => {
    const barChart = useRef();
    useEffect(() => {
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right;
        const height = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom;

        const svg = d3.select(barChart.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

        const xScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, width - margin.right])
            .padding(0.1)

        svg.append('g')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(xScale).tickFormat(i => data[i].test))

        svg.append('text')
            .attr('x', width / 2)
            .attr('y', height - margin.bottom / 2 + 15)
            .attr('text-anchor', 'middle')
            .text('Test Attempt')

        svg.append('g')
            .attr('class', 'xaxis')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(xScale).tickFormat(i => data[i].test))

        const yScale = d3.scaleLinear()
            .domain([0, 14])
            .range([height - margin.bottom, margin.top])

        svg.append('g')
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(yScale))

        svg.append('g')
            .attr('fill', '#eee')
            .attr('stroke', '#000')
            .attr('stroke-width', 2)
            .selectAll('rect')
            .data(data)
            .join('rect')
            .attr('x', (d, i) => xScale(i))
            .attr('y', d => yScale(d.ph))
            .attr('height', d => yScale(0) - yScale(d.ph))
            .attr('width', xScale.bandwidth())

        svg.append('text')
            .attr('x', -height / 2)
            .attr('y', margin.left / 2 - 10)
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .text('pH values')

        svg.append('g')
            .attr('class', 'yaxis')
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(yScale))
    }, []);
    return (
        <div id="d3demo" style={{ 'min-width': '700px', 'min-height': '450px' }}>
            <svg ref={barChart} />
        </div>
    );
}

export default BarChart;