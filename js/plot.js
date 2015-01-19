function default_data(){
    var d = [];
    d[0] = [70, 69, 95, 100, 95, 81, 76, 67, 80, 83, 79, 74];
    d[1] = [50, 60, 66, 62, 80, 82, 72, 68, 59, 58, 86, 70];
    d[2] = [-09, 06, 35, 84, 135, 170, 186, 179, 143, 90, 39, 10];
    d[3] = [39, 42, 57, 85, 119, 152, 170, 166, 142, 103, 66, 48];
    return d;
}

function retrieve_data(){
    // This function makes an ajax request that if it errors, then it returns
    // some default values for example's sake, or in case things are offline.

    var data = [];
    $.ajax({
        url: 'data/test.json',
        type: 'GET',
        dataType: 'json',
        async: false, //TODO: ties things up :P
        success: function(d){
            console.log('Successfully retrieving live data: ' + data);

            // Split for series

            // Shift data if necessary

            // Add the points

            // Call this again after a second
            setTimeout(retrieve_data, 1000);
        },
        error: function(d){
            data = default_data();
        },
        cache: false
    });

    return data;
}

// Looking forward to converting this to coffee, so can set default params...
function updateGraph(data, limits){
    // This function sets up the highcharts plot. It should be passed the data
    // as expected in the sample data file. This program uses the retrieve_data
    // function, which if it errors, it automatically uses this default data.
    // Given data, sets up highcharts plot, returns nothing.

    // The format of limits is [[t_min,t_max], [h_min, h_max]]
    // Data is an array per series of data. They're in the same order of each
    // series in the plot, so the temperature series is data[0].

    limits = limits || [[0,0], [0,0]];

    var t_min = limits[0][0],
        t_max = limits[0][1],
        h_min = limits[1][0],
        h_max = limits[1][1];

    $('#plot_container').highcharts({
        title: {
            text: 'An <u>offline</u> stream of sensors',
            x: -20, //center
            useHTML: true
        },
        subtitle: {
            text: 'Source: <a style="color: #337ab7;" href="https://github.com/digitalvapor/terrarium">https://github.com/digitalvapor/terrarium</a>',
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
            }],
            plotBands: {
                color: '#CCFF99',
                //from: t_min,
                from: 68,
                //to: t_max
                to: 80
            }
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
            data: data[0],
            tooltip: {
                valueSuffix: ' °F'
            },
            yAxis: 0
        }, {
            name: 'Humidity:<br>DHT22',
            type: 'spline',
            data: data[1],
            tooltip: {
                valueSuffix: '% RH'
            },
            yAxis: 1
        }, {
            name: 'Luminosity:<br>TSL2561',
            type: 'spline',
            data: data[2],
            tooltip: {
                valueSuffix: ' lm'
            },
            yAxis: 2
        }, {
            name: 'Crude Luminosity:<br>CdS photoresistor',
            type: 'spline',
            data: data[3],
            tooltip: {
                valueSuffix: ' lm'
            },
            yAxis: 2
        }]
    });
}

// On DOM ready ..
$(document).ready(
    // Should pass formatted data as in the sample file, or just use retrieve_data.
    updateGraph(retrieve_data())
);
