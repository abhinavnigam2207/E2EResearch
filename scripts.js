Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    title: {
        text: ''
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '${point.y:,.0f}</b><br/>July 2021'
    },
    plotOptions: {
        area: {
            pointStart: 2012,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 50,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Your Balance',
        data: [9000, 12000, 11000, 21000, 18000, 28000],
        lineColor: '#88A7F8',
        color: '#F2F5FE'
    }, {
        name: 'Market Value',
        data: [9000, 10000, 9000, 19000, 16000, 26000],
        lineColor: '#626262',
        color: '#F2F5FE'
    }, {
        name: 'Your Deposits',
        data: [10000, 10000, 10000, 10000, 10000, 10000],
        lineColor: '#B0B0B0',
        color: '#F2F5FE'
    }]
});