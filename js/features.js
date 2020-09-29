document.addEventListener('DOMContentLoaded', async function () {

    const url= "http://127.0.0.1:5501/data/data.json";

    document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

var chartData = {

    title: {
        text: 'Car sales by year, 2010-2016'
    },

    subtitle: {
        text: 'internet'
    },

    yAxis: {
        title: {
            text: 'Number of car sold'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    // series: [{
    //     name: 'Installation',
    //     data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    // }, {
    //     name: 'Manufacturing',
    //     data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    // }, {
    //     name: 'Sales & Distribution',
    //     data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    // }, {
    //     name: 'Project Development',
    //     data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    // }, {
    //     name: 'Other',
    //     data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    // }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};


chartData.series = await getChartData(url);


printHighChart(chartData);
})

function fetchData(url){
    fetch(url)
    .then(res => res.json())
}

async function getChartData(url){
    let data = await fetchData(url);
    return data;
}


async function printHighChart(chartData){
    var myChart = Highcharts.chart('container', chartData)
}