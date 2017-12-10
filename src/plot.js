import d3 from 'd3';

export default class Plot {
  constructor() {
    this.limit = 60 * 1;
    this.duration = 750;
    this.now = new Date(Date.now() - this.duration);

    this.groups = [
      {
        name: 'current',
        value: 0,
        color: '#859900',
        data: d3.range(this.limit).map(function() {
          return 0;
        }),
      }, {
        name: 'target',
        value: 0,
        color: '#2aa198',
        data: d3.range(this.limit).map(function() {
          return 0;
        }),
      }, {
        name: 'output',
        value: 0,
        color: '#268bd2',
        data: d3.range(this.limit).map(function() {
          return 0;
        }),
      }
    ];

    this.chart = d3.select('#plot-container');
    this.width = window.innerWidth;
    this.height = 200;
    this.aspect = parseInt(this.width / this.height);

    this.x = d3.time.scale().domain([this.now - (this.limit - 2), this.now - this.duration]).range([0, this.width]);
    this.y = d3.scale.linear().domain([0, 100]).range([this.height, 0]);

    this.line = d3.svg.line().interpolate('basis').x(function(d, i) {
      return this.x(this.now - (this.limit - 1 - i) * this.duration);
    }).y(function(d) {
      return this.y(d);
    });

    this.svg = this.chart.append('svg').attr('class', 'chart').attr('width', this.width).attr('height', this.height + 50);
    this.axis = this.svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + this.height + ')').call(this.x.axis = d3.svg.axis().scale(this.x).orient('bottom'));
    this.paths = this.svg.append('g');

    this.groups.forEach(function(group) {
      return group.path = this.paths.append('path').data([group.data]).attr('class', group.name + ' group').style('stroke', group.color);
    });

    this.tick = function() {
      this.now = new Date();
      this.groups.forEach(function(group) {
        group.data.push(20 + Math.random() * 100);
        return group.path.attr('d', this.line);
      });
      this.x.domain([this.now - (this.limit - 2) * this.duration, this.now - this.duration]);
      this.axis.transition().duration(this.duration).ease('linear').call(this.x.axis);
      this.paths.attr('transform', null).transition().duration(this.duration).ease('linear').attr('transform', 'translate(' + this.x(this.now - (this.limit - 1) * this.duration) + ')').each('end', this.tick);
      return this.groups.forEach(function(group) {
        return group.data.shift();
      });
    };

    this.tick();

    (function() {
      return this.x.range([0, this.width]);
    });

    window.addEventListener('resize', function(_event) {
      return this.x.range([0, this.width]);
    });
  }
}
