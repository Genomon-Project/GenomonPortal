(function(){
db = {};

db.disease = {
atl: {"type_JP": "\u6210\u4ebaT\u7d30\u80de\u767d\u8840\u75c5", "label": "ATL ", "type": "Adult T-cell Leukemia", "site_JP": "\u30ea\u30f3\u30d1\u7bc0", "site": "Lymph Nodes"},
cushing: {"type_JP": "\u30af\u30c3\u30b7\u30f3\u30b0\u75c7\u5019\u7fa4", "label": "Cushing", "type": "Cushing's syndrome", "site_JP": "\u526f\u814e", "site": "Adrenal Gland"},
hcc: {"type_JP": "\u809d\u7d30\u80de\u764c", "label": "HCC ", "type": "HepatoCellular Carcinoma", "site_JP": "\u809d\u81d3", "site": "Liver"},
rcc: {"type_JP": "\u814e\u7d30\u80de\u764c", "label": "RCC ", "type": "Renal Cell Carcinoma", "site_JP": "\u814e\u81d3", "site": "Kidney"},
tam_amkl: {"type_JP": "\u4e00\u904e\u6027\u9aa8\u9ac4\u7570\u5e38\u5897\u6b96\u75c7 - \u6025\u6027\u5de8\u6838\u82bd\u7403\u6027\u767d\u8840\u75c5", "label": "TAM_AMKL", "type": "Transient Abnormal Myelopoiesis - Acute Myeloid Leukemia", "site_JP": "\u30ea\u30f3\u30d1\u7bc0", "site": "Lymph Nodes"},
};
db.projects = {"ogawalab": {"report": {"atl": [{"link": "https://www.nature.com/ng/journal/v47/n11/full/ng.3415.html", "title": "Kataoka, K. et al. Integrated molecular analysis of adult T cell leukemia/lymphoma. <i>Nature Genetics</i> <b>47</b>, 1304-1315 (2015)"}, {"link": "http://palgrave.nature.com/nature/journal/v534/n7607/full/nature18294.html", "title": "Kataoka, K. et al. Aberrant PD-L1 expression through 3\u2032-UTR disruption in multiple cancers. <i>Nature</i> <b>534</b>, 402-406 (2016)"}], "cushing": [{"link": "http://science.sciencemag.org/content/344/6186/917.long", "title": "Sato, Y. et al. Recurrent somatic mutations underlie corticotropin-independent Cushing\u2019s syndrome. <i>Science</i> <b>344</b>, 917-920 (2014)"}], "tam_amkl": [{"link": "http://www.nature.com/ng/journal/v45/n11/abs/ng.2759.html", "title": "Yoshida, K. et al. The landscape of somatic mutations in Down syndrome-related myeloid disorders. <i>Nature Genetics</i> <b>45</b>, 1293-1299 (2013)"}], "rcc": [{"link": "https://www.nature.com/ng/journal/v45/n8/full/ng.2699.html", "title": "Sato, Y. et al. Integrated molecular analysis of clear-cell renal cell carcinoma. <i>Nature Genetics</i> <b>45</b>, 860-867 (2013)"}]}, "data": {"exome": {"atl": {"files": 162, "index": "../analysis/ogawalab/exome/ATL/hg19/2.5.0/paplot/exome_ATL/index.html", "zip": "../analysis/ogawalab/exome/ATL/hg19/2.5.0/paplot/ogawalab_exome_ATL_hg19_2.5.0.zip", "last_update": "2017/04/04", "path": "ogawalab/exome/ATL", "cases": 81}, "cushing": {"files": 16, "index": "../analysis/ogawalab/exome/Cushing/hg19/2.5.2/paplot/sample/index.html", "zip": "../analysis/ogawalab/exome/Cushing/hg19/2.5.2/paplot/ogawalab_exome_Cushing_hg19_2.5.2.zip", "last_update": "2017/06/22", "path": "ogawalab/exome/Cushing", "cases": 8}, "tam_amkl": {"files": 54, "index": "../analysis/ogawalab/exome/TAM_AMKL/hg19/2.5.2/paplot/sample/index.html", "zip": "../analysis/ogawalab/exome/TAM_AMKL/hg19/2.5.2/paplot/ogawalab_exome_TAM_AMKL_hg19_2.5.2.zip", "last_update": "2017/05/29", "path": "ogawalab/exome/TAM_AMKL", "cases": 29}, "rcc": {"files": 212, "index": "../analysis/ogawalab/exome/RCC/hg19/2.5.0/paplot/exome_RCC/index.html", "zip": "../analysis/ogawalab/exome/RCC/hg19/2.5.0/paplot/ogawalab_exome_RCC_hg19_2.5.0.zip", "last_update": "2017/03/11", "path": "ogawalab/exome/RCC", "cases": 106}}, "rna": {"atl": {"files": 99, "index": "../analysis/ogawalab/rna/ATL/hg19/2.5.0/paplot/rna_ATL/index.html", "zip": "../analysis/ogawalab/rna/ATL/hg19/2.5.0/paplot/ogawalab_rna_ATL_hg19_2.5.0.zip", "last_update": "2017/03/24", "path": "ogawalab/rna/ATL", "cases": 93}}, "wgs": {"atl": {"files": 52, "index": "../analysis/ogawalab/wgs/ATL_Xten_merge/hg19/2.5.0/paplot/wgs_ATL_Xten_merge/index.html", "zip": "../analysis/ogawalab/wgs/ATL_Xten_merge/hg19/2.5.0/paplot/ogawalab_wgs_ATL_Xten_merge_hg19_2.5.0.zip", "last_update": "2017/03/30", "path": "ogawalab/wgs/ATL_Xten_merge", "cases": 26}, "rcc": {"files": 28, "index": "../analysis/ogawalab/wgs/RCC/hg19/2.5.0/paplot/wgs_RCC/index.html", "zip": "../analysis/ogawalab/wgs/RCC/hg19/2.5.0/paplot/ogawalab_wgs_RCC_hg19_2.5.0.zip", "last_update": "2017/03/22", "path": "ogawalab/wgs/RCC", "cases": 14}}}, "label": "ogawalab"}, "icgc_riken": {"report": {"hcc": [{"link": "http://www.nature.com/ng/journal/v44/n7/abs/ng.2291.html", "title": "Fujimoto, A. et al. Whole-genome sequencing of liver cancers identifies etiological influences on mutation patterns and recurrent mutations in chromatin regulators. <i>Nature Genetics</i> <b>44</b>, 760-764 (2012)"}, {"link": "http://www.nature.com/ng/journal/v48/n5/abs/ng.3547.html", "title": "Fujimoto, A. et al. Whole-genome mutational landscape and characterization of noncoding and structural mutations in liver cancer. <i>Nature Genetics</i> <b>48</b>, 500-509 (2016)"}]}, "data": {"rna": {}, "wgs": {"hcc": {"files": 562, "index": "../analysis/icgc_riken/wgs/HCC/hg19/2.5.2/paplot/sample/index.html", "zip": "../analysis/icgc_riken/wgs/HCC/hg19/2.5.2/paplot/icgc_riken_wgs_HCC_hg19_2.5.2.zip", "last_update": "2017/07/08", "path": "icgc_riken/wgs/HCC", "cases": 285}}}, "label": "icgc_riken"}};
db.history = [{"update_date": "2017/07/08", "genomon": "2.5.2", "group": "icgc_riken", "update_time": "07:11:41", "strategy": "wgs", "project": "hcc", "ref": "hg19"}, {"update_date": "2017/06/22", "genomon": "2.5.2", "group": "ogawalab", "update_time": "12:33:43", "strategy": "exome", "project": "cushing", "ref": "hg19"}, {"update_date": "2017/05/29", "genomon": "2.5.2", "group": "ogawalab", "update_time": "14:25:52", "strategy": "exome", "project": "tam_amkl", "ref": "hg19"}, {"update_date": "2017/04/04", "genomon": "2.5.0", "group": "ogawalab", "update_time": "21:31:58", "strategy": "exome", "project": "atl", "ref": "hg19"}, {"update_date": "2017/03/30", "genomon": "2.5.0", "group": "ogawalab", "update_time": "02:30:45", "strategy": "wgs", "project": "atl", "ref": "hg19"}, {"update_date": "2017/03/28", "genomon": "2.5.0", "group": "ogawalab", "update_time": "20:48:58", "strategy": "wgs", "project": "atl_xten_lowpass", "ref": "hg19"}, {"update_date": "2017/03/26", "genomon": "2.5.0", "group": "ogawalab", "update_time": "08:25:56", "strategy": "wgs", "project": "atl_hiseq", "ref": "hg19"}, {"update_date": "2017/03/24", "genomon": "2.5.0", "group": "ogawalab", "update_time": "15:10:00", "strategy": "rna", "project": "atl", "ref": "hg19"}, {"update_date": "2017/03/22", "genomon": "2.5.0", "group": "ogawalab", "update_time": "20:43:30", "strategy": "wgs", "project": "rcc", "ref": "hg19"}, {"update_date": "2017/03/11", "genomon": "2.5.0", "group": "ogawalab", "update_time": "02:06:02", "strategy": "exome", "project": "rcc", "ref": "hg19"}];

db.strategy = {
    exome:      {label:'Exome', color:"#7cb5ec"},      // blue
    wgs:        {label:'WGS', color:"#90ed7d"},        // light-green
    target:     {label:'Target', color:"#8085e9"},     // purple
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
