d3 = require("d3")
_ = require("underscore")

limit = 60 * 1
duration = 750
now = new Date(Date.now() - duration)

groups = [
  {
    name: 'current'
    value: 0
    color: '#859900'
    data: d3.range(limit).map( ->
      0
    )
  }
  {
    name: 'target'
    value: 0
    color: '#2aa198'
    data: d3.range(limit).map( ->
      0
    )
  }
  {
    name: 'output'
    value: 0
    color: '#268bd2'
    data: d3.range(limit).map( ->
      0
    )
  }
]

chart = d3.select('#plot-container')
width = window.innerWidth
height = 200
aspect = parseInt(width / height)

x = d3.time.scale()
  .domain([now - (limit - 2), now - duration])
  .range([0, width])

y = d3.scale.linear()
  .domain([0, 100])
  .range([height, 0])

line = d3.svg.line()
  .interpolate('basis')
  .x((d, i) ->
    x(now - (limit - 1 - i) * duration)
  )
  .y((d) ->
    y(d)
  )

svg = chart.append('svg')
  .attr('class', 'chart')
  .attr('width', width)
  .attr('height', height + 50)

axis = svg.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + height + ')')
  .call(x.axis = d3.svg.axis().scale(x).orient('bottom'))

paths = svg.append('g')

_.each(groups, (group) ->
  group.path = paths.append('path')
    .data([group.data])
    .attr('class', group.name + ' group')
    .style('stroke', group.color)
)

tick = ->
  now = new Date()

  # Add new values
  _.each(groups, (group) ->
    # group.data.push(group.value) // Real values arrive at irregular intervals
    group.data.push(20 + Math.random() * 100)
    group.path.attr('d', line)
  )

  # Shift domain
  x.domain([now - (limit - 2) * duration, now - duration])

  # Slide x-axis left
  axis.transition()
    .duration(duration)
    .ease('linear')
    .call(x.axis)

  # Slide paths left
  paths.attr('transform', null)
    .transition()
    .duration(duration)
    .ease('linear')
    .attr('transform', 'translate(' + x(now - (limit - 1) * duration) + ')')
    .each('end', tick)

  # Remove oldest data point from each group
  _.each(groups, (group) ->
    group.data.shift()
  )

tick()

->
  x.range([0, width])

window.addEventListener('resize', (event) ->
  x.range([0, width])
)
