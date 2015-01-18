$(function() {
    $(document).ready(function () {
        $('#plot_container').highcharts({
            title: {
                text: 'A live stream of sensors',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: https://github.com/digitalvapor/terrarium',
                x: -20
            },
            xAxis: {
                title: {
                    text: 'Samples'
                }
            },
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}°F'
                },
                title: {
                    text: 'Temperature'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            }, { // Secondary yAxis
                title: {
                    text: 'Humidity'
                },
                labels: {
                    format: '{value} %RH'
                }
            }, { // Tertiary yAxis
                title: {
                    text: 'Luminosity'
                },
                labels: {
                    format: '{value} lm'
                },
                opposite: true
            }],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Temperature:<br>DHT22',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: ' °F'
                },
                yAxis: 0
            }, {
                name: 'Humidity:<br>DHT22',
                type: 'spline',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
                tooltip: {
                    valueSuffix: '% RH'
                },
                yAxis: 1
            }, {
                name: 'Luminosity:<br>TSL2561',
                type: 'spline',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
                tooltip: {
                    valueSuffix: ' lm'
                },
                yAxis: 2
            }, {
                name: 'Crude Luminosity:<br>CdS photoresistor',
                type: 'spline',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
                tooltip: {
                    valueSuffix: ' lm'
                },
                yAxis: 2
            }]
        });
    });
});
