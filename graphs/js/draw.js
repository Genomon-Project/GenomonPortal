(function(){
draw = {};

draw.group_bar = function (id, group) {
    var data = db.get_groupdata_bar(group);
    Highcharts.chart(id, {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Cases by Disease Type'
        },
        xAxis: {
            categories: data.disease,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cases (number)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
          { name: style.label_exome, color: style.color_exome, data: data.exome, },
          { name: style.label_wgs__, color: style.color_wgs__, data: data.wgs, },
          { name: style.label_targt, color: style.color_targt, data: data.target, },
          { name: style.label_rna_p, color: style.color_rna_p, data: data.rna, },
          { name: style.label_rna_s, color: style.color_rna_s, data: data.rna_single, },
        ]
    });
};

draw.project_pie = function (id, group, disease) {
    var data = db.get_projectdata_pie(group, disease);
    Highcharts.chart(id, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Cases'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Cases',
            colorByPoint: true,
            data: [
                    { name: style.label_exome, color: style.color_exome, y: data.exome, sliced: false, selected: false}, 
                    { name: style.label_wgs__, color: style.color_wgs__, y: data.wgs},
                    { name: style.label_targt, color: style.color_targt, y: data.target},
                    { name: style.label_rna_p, color: style.color_rna_p, y: data.rna},
                    { name: style.label_rna_s, color: style.color_rna_s, y: data.rna_single},
                  ]
        }]
    });
};
draw.index_bar = function (id) {
    var data = db.get_topdata_bar();
    Highcharts.chart(id, {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Cases by Primary Site'
        },
        xAxis: {
            categories: data.site
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total cases'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [
                  { name: style.label_exome, color: style.color_exome, data: data.exome },
                  { name: style.label_wgs__, color: style.color_wgs__, data: data.wgs },
                  { name: style.label_targt, color: style.color_targt, data: data.target },
                  { name: style.label_rna_p, color: style.color_rna_p, data: data.rna },
                  { name: style.label_rna_s, color: style.color_rna_s, data: data.rna_single },
                ]
    });
};

draw.index_tree = function (id) {
    var data = db.get_topdata_tree();
    var parent = [
        { id: 'exome', name: style.label_exome, color: style.color_exome },
        { id: 'wgs', name: style.label_wgs__, color: style.color_wgs__ },
        { id: 'target', name: style.label_targt, color: style.color_targt },
        { id: 'rna', name: style.label_rna_p, color: style.color_rna_p },
        { id: 'rna_single', name: style.label_rna_s, color: style.color_rna_s },
    ];
    var concat = parent.concat(data);

    Highcharts.chart(id, {
        series: [{
            type: "treemap",
            layoutAlgorithm: 'squarified',
            alternateStartingDirection: true,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold'
                    }
                }
            }],
            data: concat
        }],
        title: {
            text: 'Case Distribution by Disease Type'
        }
    });
};
})();
