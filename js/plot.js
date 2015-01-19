function default_data(){
    var d = [];
    d[0] = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
    d[1] = [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5];
    d[2] = [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0];
    d[3] = [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8];
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

            // Call this again after a few seconds

            setTimeout(retrieve_data, 1000);
        },
        error: function(d){
            data = default_data();
        },
        cache: false
    });

    // Don't really need to handle errors at the moment, just return sample data.
    //return default_data();
    return data;
}

// Looking forward to converting this to coffee, so can set default params...
function updateGraph(data){
    // This function sets up the highcharts plot. It should be passed the data
    // as expected in the sample data file. This program uses the retrieve_data
    // function, which if it errors, it automatically uses this default data.
    // Given data, sets up highcharts plot, returns nothing.

    $('#plot_container').highcharts({
        title: {
            text: 'A live stream of sensors',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: <a style="color: #337ab7;" href="https://github.com/digitalvapor/terrarium">https://github.com/digitalvapor/terrarium</a>',
            //useHTML: true,
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
