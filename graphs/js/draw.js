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
            { name: db.strategy.exome.label, color: db.strategy.exome.color, data: data.exome}, 
            { name: db.strategy.wgs.label, color: db.strategy.wgs.color, data: data.wgs},
            { name: db.strategy.target.label, color: db.strategy.target.color, data: data.target},
            { name: db.strategy.rna.label, color: db.strategy.rna.color, data: data.rna},
            { name: db.strategy.rna_single.label, color: db.strategy.rna_single.color, data: data.rna_single},
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
                { name: db.strategy.exome.label, color: db.strategy.exome.color, y: data.exome, sliced: false, selected: false}, 
                { name: db.strategy.wgs.label, color: db.strategy.wgs.color, y: data.wgs},
                { name: db.strategy.target.label, color: db.strategy.target.color, y: data.target},
                { name: db.strategy.rna.label, color: db.strategy.rna.color, y: data.rna},
                { name: db.strategy.rna_single.label, color: db.strategy.rna_single.color, y: data.rna_single},
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
            { name: db.strategy.exome.label, color: db.strategy.exome.color, data: data.exome}, 
            { name: db.strategy.wgs.label, color: db.strategy.wgs.color, data: data.wgs},
            { name: db.strategy.target.label, color: db.strategy.target.color, data: data.target},
            { name: db.strategy.rna.label, color: db.strategy.rna.color, data: data.rna},
            { name: db.strategy.rna_single.label, color: db.strategy.rna_single.color, data: data.rna_single},
        ]
    });
};

draw.index_tree = function (id) {
    var data = db.get_topdata_tree();
    var parent = [
        { id: 'exome', name: db.strategy.exome.label, color: db.strategy.exome.color },
        { id: 'wgs', name: db.strategy.wgs.label, color: db.strategy.wgs.color },
        { id: 'target', name: db.strategy.target.label, color: db.strategy.target.color },
        { id: 'rna', name: db.strategy.rna.label, color: db.strategy.rna.color },
        { id: 'rna_single', name: db.strategy.rna_single.label, color: db.strategy.rna_single.color },
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

draw.project_summary = function (id, group, disease) {
    
    var data = [
        ["Project Name", db.disease[disease].label],
        ["Disease Type", db.disease[disease].type],
        ["Primary Site", db.disease[disease].site],
        ["Group", db.projects[group].label],
    ];
    
    var table = document.getElementById(id);
    
    for (var i in data) {
        var row = table.insertRow();
        row.insertCell().appendChild(document.createTextNode(data[i][0]));
        row.insertCell().appendChild(document.createTextNode(data[i][1]));
    }
};

draw.project_table = function (id, group, disease) {
    
    var data = [];
    for (var str in db.strategy) {
        var str_title = '<i class="fa fa-square pre_text" aria-hidden="true" style="color:'
            + db.strategy[str].color
            + ';"></i>' 
            + db.strategy[str].label;
        
        if (((str in db.projects[group]) == false) || ((disease in db.projects[group][str]) == false)) {
            data.push([str_title,0,0,'---','']);
            continue;
        }
        var add = [];
        add[0] = str_title;
        add[1] = db.projects[group][str][disease].cases;
        add[2] = db.projects[group][str][disease].files;
        
        add[3] = '<a href="' + '#' + '" class="fa fa-external-link btn" aria-hidden="true"></a> '
            + '<a href="' + '#' + '" class="fa fa-download btn" aria-hidden="true"></a>';
        add[4] = db.projects[group][str][disease].last_update;
        data.push(add);
    }
    
    var table = document.getElementById(id);
    
    // tbody
    for (var i in data) {
        var row = table.insertRow();
        row.insertCell().outerHTML = '<td style="text-align: left">' + data[i][0] + '</td>';
        row.insertCell().outerHTML = '<td style="text-align: right">' + data[i][1] + '</td>';
        row.insertCell().outerHTML = '<td style="text-align: right">' + data[i][2] + '</td>';
        row.insertCell().outerHTML = '<td style="text-align: center">' + data[i][3] + '</td>';
        row.insertCell().outerHTML = '<td style="text-align: right">' + data[i][4] + '</td>';
    }
    
    // theader
    var header = table.createTHead();
    var hrow = header.insertRow();
    hrow.insertCell().outerHTML = '<th style="text-align: left">Experimental Strategy</th>';
    hrow.insertCell().outerHTML = '<th style="text-align: right"># Cases</th>';
    hrow.insertCell().outerHTML = '<th style="text-align: right"># Files</th>';
    hrow.insertCell().outerHTML = '<th style="text-align: center">Analyzed data</th>';
    hrow.insertCell().outerHTML = '<th style="text-align: right">Last Updated (yyyy/mm/dd)</th>';
};

draw.project_page = function (group, disease) {
    var title = document.getElementById('title');
    title.innerHTML = '<i class="fa fa-align-left" aria-hidden="true" style="margin-right: 10px;"></i>' 
        + db.disease[disease].label;
    var date = document.getElementById('date');
    date.innerHTML = '<i class="fa fa-clock-o pre_text" aria-hidden="true"></i> Last Update '
        + db.disease[disease].label;
    draw.project_summary ('summary', group, disease);
    draw.project_pie ('pie', group, disease);
    draw.project_table ('table', group, disease);
};

})();
