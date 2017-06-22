(function(){
db = {};

db.disease = {
atl: {"type": "Adult T-cell Leukemia", "site": "Lymph Nodes", "label": "ATL"},
cushing: {"type": "***", "site": "Unknown", "label": "Cushing"},
hcc: {"type": "HepatoCellular Carcinoma", "site": "Liver", "label": "HCC"},
rcc: {"type": "Renal Cell Carcinoma", "site": "Kidney", "label": "RCC"},
tam_amkl: {"type": "*****", "site": "Unknown", "label": "TAM_AMKL"},
};
db.projects =
{"ogawalab": {"report": {"atl": [{"link": "", "title": "Integrated molecular analysis of adult T cell leukemia/lymphoma., Kataoka K et al., Nat Genet. Online, 2015."}], "rcc": []}, "data": {"exome": {"atl": {"files": 162, "index": "/../analysis/ogawalab/exome/ATL/hg19/2.5.0/paplot/exome_ATL/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/exome/ATL/hg19/2.5.0/paplot/ogawalab_exome_ATL_hg19_2.5.0.zip", "last_update": "2017/04/04", "path": "ogawalab/exome/ATL", "cases": 81}, "cushing": {"files": 16, "index": "/../analysis/ogawalab/exome/Cushing/hg19/2.5.2/paplot/sample/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/exome/Cushing/hg19/alignment/paplot/ogawalab_exome_Cushing_hg19_alignment.zip", "last_update": "2017/06/22", "path": "ogawalab/exome/Cushing", "cases": 8}, "tam_amkl": {"files": 54, "index": "/../analysis/ogawalab/exome/TAM_AMKL/hg19/2.5.2/paplot/sample/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/exome/TAM_AMKL/hg19/2.5.2/paplot/ogawalab_exome_TAM_AMKL_hg19_2.5.2.zip", "last_update": "2017/05/29", "path": "ogawalab/exome/TAM_AMKL", "cases": 29}, "rcc": {"files": 212, "index": "/../analysis/ogawalab/exome/RCC/hg19/2.5.0/paplot/exome_RCC/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/exome/RCC/hg19/2.5.0/paplot/ogawalab_exome_RCC_hg19_2.5.0.zip", "last_update": "2017/03/11", "path": "ogawalab/exome/RCC", "cases": 106}}, "rna": {"atl": {"files": 99, "index": "/../analysis/ogawalab/rna/ATL/hg19/2.5.0/paplot/rna_ATL/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/rna/ATL/hg19/2.5.0/paplot/ogawalab_rna_ATL_hg19_2.5.0.zip", "last_update": "2017/03/24", "path": "ogawalab/rna/ATL", "cases": 99}}, "wgs": {"atl": {"files": 52, "index": "/../analysis/ogawalab/wgs/ATL_Xten_merge/hg19/2.5.0/paplot/wgs_ATL_Xten_merge/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/wgs/ATL_Xten_merge/hg19/2.5.0/paplot/ogawalab_wgs_ATL_Xten_merge_hg19_2.5.0.zip", "last_update": "2017/03/30", "path": "ogawalab/wgs/ATL_Xten_merge", "cases": 26, "label": "ATL_XTEN_merge"}, "atl_hiseq": {"files": 22, "index": "/../analysis/ogawalab/wgs/ATL_Hiseq/hg19/2.5.0/paplot/wgs_ATL_Hiseq/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/wgs/ATL_Hiseq/hg19/2.5.0/paplot/ogawalab_wgs_ATL_Hiseq_hg19_2.5.0.zip", "label": "ATL_hiseq", "parent_id": "atl", "path": "ogawalab/wgs/ATL_Hiseq", "cases": 11, "last_update": "2017/03/26"}, "atl_xten_lowpass": {"files": 76, "index": "/../analysis/ogawalab/wgs/ATL_Xten_lowpass/hg19/2.5.0/paplot/wgs_ATL_Xten_lowpass/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/wgs/ATL_Xten_lowpass/hg19/2.5.0/paplot/ogawalab_wgs_ATL_Xten_lowpass_hg19_2.5.0.zip", "label": "ATL_XTEN_lowpass", "parent_id": "atl", "path": "ogawalab/wgs/ATL_Xten_lowpass", "cases": 38, "last_update": "2017/03/28"}, "rcc": {"files": 28, "index": "/../analysis/ogawalab/wgs/RCC/hg19/2.5.0/paplot/wgs_RCC/index.html", "zip": "//usr/proj/genomon_portal/htdocs/tmp/analysis/ogawalab/wgs/RCC/hg19/2.5.0/paplot/ogawalab_wgs_RCC_hg19_2.5.0.zip", "last_update": "2017/03/22", "path": "ogawalab/wgs/RCC", "cases": 14}}}, "label": "ogawalab"}, "icgc_riken": {"report": {"hcc": []}, "data": {"rna": {}, "wgs": {"hcc": {"files": 300, "path": "icgc_riken/wgs/HCC", "cases": 300}}}, "label": "icgc_riken"}};

db.strategy = {
    exome:      {label:'EXOME', color:"#7cb5ec"},      // blue
    wgs:        {label:'WGS', color:"#90ed7d"},        // light-green
    target:     {label:'TARGET', color:"#8085e9"},     // purple
    rna:        {label:'RNA', color:"#f7a35c"},        // orange
    rna_single: {label:'RNA-single', color:"#f15c80"}, // pink
//    mirna:      {label:'miRNA', color:"#e4d354"},      // yellow
//    dummy1:     {label:'', color:"#2b908f"},           // dark-green
//    dummy2:     {label:'', color:"#f45b5b"},           // pink
//    dummy3:     {label:'', color:"#91e8e1"},           // light-blue
};

db.get_topdata_tree = function () {

    var di = {};
    for (var group in db.projects) {
        for (var str in db.projects[group].data) {
            for (var dis in db.projects[group].data[str]) {
                var name = dis;
                if ("parent_id" in db.projects[group].data[str][dis]) {
                    name = db.projects[group].data[str][dis].parent_id;
                }
                var key = name + "@" + str;
                if (key in di) {
                    di[key] += db.projects[group].data[str][dis].cases;
                }
                else {
                    di[key] = db.projects[group].data[str][dis].cases;
                }
            }
        }
    }
    
    var result = [];
    for (var key in di) {
        [name, str] = key.split("@");
        result.push({parent: str, name: name, value: di[key]});
    }
//    console.log(result);
    return result;
};

db.get_topdata_bar = function () {

    var result = {
        site: [],
        exome: [],
        wgs: [],
        target: [],
        rna: [],
        rna_single: [],
    };
    
    for (var key in db.disease) {
        var site = db.disease[key].site;
        if (result.site.indexOf(site) < 0) {
            result.site.push(site);
        }
    }
    result.site = result.site.sort();
    
    for (var i in result.site) {
        for (var str in db.strategy) {
            result[str].push(0);
        }
    }
    
    for (var group in db.projects) {
        for (var str in db.projects[group].data) {
            for (var dis in db.projects[group].data[str]) {
                var site;
                if ("parent_id" in db.projects[group].data[str][dis]) {
                    site = db.disease[db.projects[group].data[str][dis].parent_id].site;
                }
                else {
                    site = db.disease[dis].site;
                }
                result[str][result.site.indexOf(site)] += db.projects[group].data[str][dis].cases;
            }
        }
    }
//    console.log(result);
    return result;
};

db.get_groupdata_bar = function (group) {

    var result = {
        key: [],
        child: [],
        disease: [],
        exome: [],
        wgs: [],
        target: [],
        rna: [],
        rna_single: [],
    };
    
    if ((group in db.projects) == false) {
        return result;
    }
    var dis_id = [];
    for (var str in db.strategy) {
        if ((str in db.projects[group].data) == false){
            continue;
        }
        for (var key in db.projects[group].data[str]) {
            if (dis_id.indexOf(key) < 0) {
                dis_id.push(key);
            }
        }
    }
    dis_id = dis_id.sort();
    
    for (var d in dis_id) {
        var dis = dis_id[d];
        var label;
        var child = false;
        
        for (var str in db.strategy) {
            if ((str in db.projects[group].data) == false) {
                result[str].push(0);
            }
            else if ((dis in db.projects[group].data[str]) == false) {
                result[str].push(0);
            }
            else {
                result[str].push(db.projects[group].data[str][dis].cases);
                
                if ("label" in db.projects[group].data[str][dis]){
                    label = db.projects[group].data[str][dis].label;
                }
                else if ("parent_id" in db.projects[group].data[str][dis]){
                    label = db.disease[db.projects[group].data[str][dis].parent_id].label;
                }
                else {
                    label = db.disease[dis].label;
                }
                
                if (child == false) {
                    child = "parent_id" in db.projects[group].data[str][dis];
                }
            }
        }
        result.child.push(child);
        result.key.push(dis);
        result.disease.push(label);
    }
//    console.log(result);
    return result;
};

db.get_projectdata_pie = function (group, disease) {
    
    var result = {
        exome: 0,
        wgs: 0,
        target: 0,
        rna: 0,
        rna_single: 0,
    };
    
    if ((group in db.projects) == false) {
        return result;
    }
    for (var str in db.strategy) {
        if ((str in db.projects[group].data) == false){
            continue;
        }
        if ((disease in db.projects[group].data[str]) == false){
            continue;
        }
        result[str] = db.projects[group].data[str][disease].cases
    }
//    console.log(result);
    return result;
};

db.get_lastupdate = function (group, disease) {
    
    var arr = [];
    
    for (var str in db.projects[group].data) {
        if (disease in db.projects[group].data[str]) {
            arr.push(Date.parse(db.projects[group].data[str][disease].last_update));
        }
    }

    arr.sort(function(a,b) {
        return (a < b ? 1 : -1);
    });
    var date = new Date(arr[0]);

    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
};

db.get_lastupdate_group = function (group) {
    
    var arr = [];
    
    for (var str in db.projects[group].data) {
        for (var disease in db.projects[group].data[str]) {
            arr.push(Date.parse(db.projects[group].data[str][disease].last_update));
        }
    }

    arr.sort(function(a,b) {
        return (a < b ? 1 : -1);
    });
    var date = new Date(arr[0]);

    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
};

})();
Object.freeze(db);
