(function(){
draw = {};

draw.hitstory_table = function (id) {
    
    var element = document.getElementById(id);
    var innercode = "";
    for (var i in db.history) {

        if ((db.history[i].project in db.projects[db.history[i].group].data[db.history[i].strategy]) == false) {
            continue;
        }

        var path = "./" + db.history[i].group + "_" + db.history[i].project + ".html";
        var target = "window.document.location='" + path + "';";
        innercode += '<tr onclick="' + target + '"><td>' + db.history[i].update_date + '</td>';
        innercode += '<td>' + db.projects[db.history[i].group].label + '</td>';
        innercode += '<td>' + db.strategy[db.history[i].strategy].label + '</td>';
        
        var label = "";
        if ("label" in db.projects[db.history[i].group].data[db.history[i].strategy][db.history[i].project]) {
            label = db.projects[db.history[i].group].data[db.history[i].strategy][db.history[i].project].label;
        } else {
            label = db.disease[db.history[i].project].label;
        }
        innercode += '<td>' + label + '</td>';
        innercode += '<td>' + db.history[i].genomon + '</td></tr>';
    }
    
    element.innerHTML = '<table class="table"><tr><th>Update date</th><th>group</th><th>strategy</th><th>project</th><th>Genomon-version</th></tr>' + innercode + '</table>';
};


draw.group_bar = function (id, group, index) {
    var data = db.get_groupdata_bar(group);
    Highcharts.chart(id, {
        chart: {
            type: 'column',
            events: {
                click: function(e) {

                    var i = Math.floor((e.chartX - e.xAxis[0].axis.left)/(e.xAxis[0].axis.width/data.key.length))
                    if (data.child[i] == true) {
                        return;
                    }
                    var cur = "";
                    if (index == true) {
                        cur = "files/"
                    }
                    document.location.href = cur + group + "_" + data.key[i] + ".html";
                }
            },
            style: {
                cursor: "pointer"
            }
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
                borderWidth: 0,
                events: {
                    click: function(e) {
                        var i = Math.floor((e.chartX - this.xAxis.left)/(this.xAxis.width/data.key.length))
//                        console.log([i, e.chartX-this.xAxis.left, this.xAxis.width, data.key.length, this.xAxis.width/data.key.length])
                        if (data.child[i] == true) {
                            return;
                        }
                        var cur = "";
                        if (index == true) {
                            cur = "files/"
                        }
                        document.location.href = cur + group + "_" + data.key[i] + ".html";
                    },
                },
            },
        },
        series: [
            { name: db.strategy.exome.label, color: db.strategy.exome.color, data: data.exome}, 
            { name: db.strategy.wgs.label, color: db.strategy.wgs.color, data: data.wgs},
            { name: db.strategy.target.label, color: db.strategy.target.color, data: data.target},
            { name: db.strategy.rna.label, color: db.strategy.rna.color, data: data.rna},
            { name: db.strategy.rna_single.label, color: db.strategy.rna_single.color, data: data.rna_single},
        ],
        credits: {
            enabled: false,
        }
    });
    return data;
};

draw.project_pie = function (id, group, disease) {
    var plot = document.getElementById(id);
    plot.style["min-width"] = "100px";
    plot.style["height"] = "300px";
    plot.style["margin"] = "0 auto"; 
 
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
        }],
        credits: {
            enabled: false,
        }
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
        ],
        credits: {
            enabled: false,
        }
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
        },
        credits: {
            enabled: false,
        }
    });
};

draw.index_summary = function (id) {
    
    var disease = [];
    var projects = [];
    var cases = 0;
    
    for (var group in db.projects) {
        for (var str in db.projects[group].data) {
            for (var dis in db.projects[group].data[str]) {
                if ("parent_id" in db.projects[group].data[str][dis]) {
                    continue;
                }
                if (db.projects[group].data[str][dis].cases < 1) {
                    continue;
                }
                if (disease.indexOf(dis) < 0) {
                    disease.push(dis);
                }
                if (projects.indexOf(dis + "@" + group) < 0) {
                    projects.push(dis + "@" + group);
                }
                cases += db.projects[group].data[str][dis].cases;
            }
        }
    }

    var data = [
        ["Groups", Object.keys(db.projects).length],
        ["Projects", projects.length],
        ["Disease Types", disease.length],
        ["Cases", cases],
    ];
    
    var table = document.getElementById(id);
    table.setAttribute("class", "table table-striped");
    
    for (var i in data) {
        var row = table.insertRow();
        row.insertCell().appendChild(document.createTextNode(data[i][0]));
        row.insertCell().appendChild(document.createTextNode(data[i][1]));
    }
};

draw.project_summary = function (id, group, disease) {
    
    var type = portal_text.choice({
        ja: db.disease[disease].type + " (" + db.disease[disease].type_JP + ")",
        en: db.disease[disease].type,
    });
    var site = portal_text.choice({
        ja: db.disease[disease].site + " (" + db.disease[disease].site_JP + ")",
        en: db.disease[disease].site,
    });

    var data = [
        ["Project Name", db.disease[disease].label],
        ["Disease Type", type],
        ["Primary Site", site],
        ["Group", db.projects[group].label],
    ];
    
    var table = document.getElementById(id);
    table.setAttribute("class", "table table-striped");
    
    for (var i in data) {
        var row = table.insertRow();
        row.insertCell().appendChild(document.createTextNode(data[i][0]));
        row.insertCell().appendChild(document.createTextNode(data[i][1]));
    }
};

draw.project_table = function (id, group, disease) {
    
    var data = [];
    for (var str in db.strategy) {
        var str_title = '<i class="fa fa-square" aria-hidden="true" style="color:'
            + db.strategy[str].color
            + ';"></i> ' 
            + db.strategy[str].label;
        
        if (((str in db.projects[group].data) == false) || ((disease in db.projects[group].data[str]) == false)) {
            data.push([str_title,0,0,'---','---']);
            continue;
        }
        var add = [];
        add[0] = str_title;
        add[1] = db.projects[group].data[str][disease].cases;
        add[2] = db.projects[group].data[str][disease].files;
        
        add[3] = '<a href="' + db.projects[group].data[str][disease].index + '" class="btn btn-primary btn-sm" role="button" target=_blank><span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a> '
            + '<a href="' + db.projects[group].data[str][disease].zip + '" class="btn btn-primary btn-sm" role="button" target=_blank><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a>';
        add[4] = db.projects[group].data[str][disease].last_update;
        data.push(add);
    }
    
    var table = document.getElementById(id);
    table.setAttribute("class", "table table-striped");
    
    // tbody
    for (var i in data) {
        var row = table.insertRow();
        row.insertCell().outerHTML = '<td style="vertical-align: middle; text-align: left">' + data[i][0] + '</td>';
        row.insertCell().outerHTML = '<td style="vertical-align: middle; text-align: right">' + data[i][1] + '</td>';
        row.insertCell().outerHTML = '<td style="vertical-align: middle; text-align: right">' + data[i][2] + '</td>';
        row.insertCell().outerHTML = '<td style="vertical-align: middle; text-align: center">' + data[i][3] + '</td>';
        row.insertCell().outerHTML = '<td style="vertical-align: middle; text-align: right">' + data[i][4] + '</td>';
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


draw.group_table = function (id, group, data) {

    var table = document.getElementById(id);
    table.setAttribute("class", "table table-striped");
    var li = ["exome", "wgs", "target", "rna", "rna_single"];
    
    // tbody
    var row_count = 0;
    for (var j in data.disease) {
        if (data.child[j] == true) {
            continue;
        }
        row_count += 1;
        var row = table.insertRow();
        row.insertCell().outerHTML = '<td style="text-align: right">' + row_count + '</td>';
        row.insertCell().outerHTML = '<td style="text-align: left"><a href="'
            + group + '_' + data.key[j] + '.html" target=' + group + '_' + data.key[j] + '>'
            + data.disease[j] + '</a></td>';
        for (var i in li) {
            row.insertCell().outerHTML = '<td style="text-align: right">' + data[li[i]][j] + '</td>';
        }
        row.insertCell().outerHTML = '<td style="text-align: right">' + db.get_lastupdate (group, data.key[j]) + '</td>';
    }
    
    // theader
    var header = table.createTHead();
    header.setAttribute("class", "common");
    var hrow = header.insertRow();
    hrow.insertCell().outerHTML = '<th style="text-align: right">#</th>';
    hrow.insertCell().outerHTML = '<th style="text-align: left">Cancer Types</th>';


    for (var i in li) {
        hrow.insertCell().outerHTML = '<th style="text-align: right"># Cases (' + db.strategy[li[i]].label + ')</th>';
    }
    hrow.insertCell().outerHTML = '<th style="text-align: right">Last Updated (yyyy/mm/dd)</th>';
    
    return row_count;
};

draw.project_report = function (id, group, disease) {

    var ul = document.getElementById(id);

    if (((disease in db.projects[group].report) == false)
      || (db.projects[group].report[disease] < 1)) {
        ul.innerHTML = '<font color="#666">no data</font>';
        return;
    }
    
    for (var i in db.projects[group].report[disease]) {

       var li = document.createElement("li");
       
       if (("link" in db.projects[group].report[disease][i]) 
        && (db.projects[group].report[disease][i].link.length > 0)) {
           //var a = document.createElement("a");
           //a.setAttribute("href", db.projects[group].report[disease][i].link);
           //a.innerHTML = db.projects[group].report[disease][i].title;
           //li.appendChild(a);
           
           li.innerHTML = db.projects[group].report[disease][i].title + ' <a href="' + db.projects[group].report[disease][i].link + '">[link]</a>';
       }
       else {
           li.innerHTML = db.projects[group].report[disease][i].title;
       }
       
       ul.appendChild(li);
    }
};

draw.project_page = function (group, disease) {

    document.getElementsByTagName("title")[0].innerHTML = "GenomonPortal - " + db.disease[disease].label + "@" + db.projects[group].label;
    document.getElementById('title').innerHTML = '<i class="fa fa-align-left" aria-hidden="true" style="margin-right: 10px;"></i>' 
        + db.disease[disease].label;
    document.getElementById('date').innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i> Last Update '
        + db.get_lastupdate (group, disease);
    
    var html = '<a href="_analysis.html">Analysis</a> '
        + '> <a href="' + group + '.html">' + db.projects[group].label + '</a> '
        + '> ' + db.disease[disease].label;
    page.accessor("accessor", html);
    
    draw.project_summary ('summary', group, disease);
    draw.project_pie ('pie', group, disease);
    draw.project_table ('table', group, disease);
    draw.project_report ('report', group, disease);
};

draw.group_page = function (group) {

    document.getElementsByTagName("title")[0].innerHTML = "GenomonPortal - " + db.projects[group].label;
    document.getElementById('title').innerHTML = '<i class="fa fa-flask" aria-hidden="true" style="margin-right: 10px;"></i>' 
        + db.projects[group].label;
    
    document.getElementById('date').innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i> Last Update '
        + db.get_lastupdate_group (group);
    
    var html = '<a href="_analysis.html">Analysis</a> '
        + '> ' + db.projects[group].label;
    page.accessor("accessor", html);
    
    var data = draw.group_bar('plot', group);
    var num = draw.group_table ('table', group, data);
    var title = document.getElementById('project');
    title.innerHTML = 'Projects (' + num + ')';
};

})();
