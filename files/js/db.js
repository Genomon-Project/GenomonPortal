(function(){
db = {};
db.disease = {
    RCC: { label: "RCC", type: "Renal Cell Carcinoma", site: "Kidney" },
    HCC: { label: "HCC", type: "HepatoCellular Carcinoma", site: "Liver" },
    ATL: { label: "ATL", type: "Adult T-cell Leukemia", site: "Lymph Nodes" },
    TAM_AMKL: { label: "TAM_AMKL", type: "*****", site: "Unknown" },

    // ACC: { label: "ACC", type: "Adrenocortical carcinoma", site: "Adrenal Gland" },
    // AML: { label: "AML", type: "*****", site: "Unknown" },
    // BLCA: { label: "BLCA", type: "Bladder Urothelial Carcinoma", site: "Bladder" },
    // BRCA: { label: "BRCA", type: "Breast invasive carcinoma", site: "Breast" },
    // CESC: { label: "CESC", type: "Cervical squamous cell carcinoma and endocervical adenocarcinoma", site: "Cervix" },
    // CHOL: { label: "CHOL", type: "Cholangiocarcinoma", site: "Bile Duct" },
    // COAD: { label: "COAD", type: "Colon adenocarcinoma", site: "Colorectal" },
    // DLBC: { label: "DLBC", type: "Lymphoid Neoplasm Diffuse Large B-cell Lymphoma", site: "Lymph Nodes" },
    // DS_AMKL: { label: "DS_AMKL", type: "*****", site: "Unknown" },
    // ESCA: { label: "ESCA", type: "Esophageal carcinoma", site: "Esophagus" },
    // GBM: { label: "GBM", type: "Glioblastoma multiforme", site: "Brain" },
    // HNSC: { label: "HNSC", type: "Head and Neck squamous cell carcinoma", site: "Head and Neck" },
    // KICH: { label: "KICH", type: "Kidney Chromophobe", site: "Kidney" },
    // KIRC: { label: "KIRC", type: "Kidney renal clear cell carcinoma", site: "Kidney" },
    // KIRP: { label: "KIRP", type: "Kidney renal papillary cell carcinoma", site: "Kidney" },
    // LAML: { label: "LAML", type: "Acute Myeloid Leukemia", site: "Bone Marrow" },
    // LGG: { label: "LGG", type: "Brain Lower Grade Glioma", site: "Brain" },
    // LIHC: { label: "LIHC", type: "Liver hepatocellular carcinoma", site: "Liver" },
    // LUAD: { label: "LUAD", type: "Lung adenocarcinoma", site: "Lung" },
    // LUSC: { label: "LUSC", type: "Lung squamous cell carcinoma", site: "Lung" },
    // MDS: { label: "MDS", type: "*****", site: "Unknown" },
    // MESO: { label: "MESO", type: "Mesothelioma", site: "Pleura" },
    // OV: { Label: "OV", type: "Ovarian serous cystadenocarcinoma", site: "Ovary" },
    // PAAD: { label: "PAAD", type: "Pancreatic adenocarcinoma", site: "Pancreas" },
    // PCPG: { label: "PCPG", type: "Pheochromocytoma and Paraganglioma", site: "Adrenal Gland" },
    // PRAD: { label: "PRAD", type: "Prostate adenocarcinoma", site: "Prostate" },
    // READ: { label: "READ", type: "Rectum adenocarcinoma", site: "Colorectal" },
    // SARC: { label: "SARC", type: "Sarcoma", site: "Soft Tissue" },
    // SKCM: { label: "SKCM", type: "Skin Cutaneous Melanoma", site: "Skin" },
    // STAD: { label: "STAD", type: "Stomach adenocarcinoma", site: "Stomach" },
    // TGCT: { label: "TGCT", type: "Testicular Germ Cell Tumors", site: "Testis" },
    // THCA: { label: "THCA", type: "Thyroid carcinoma", site: "Thyroid" },
    // THYM: { label: "THYM", type: "Thymoma", site: "Thymus" },
    // UCEC: { label: "UCEC", type: "Uterine Corpus Endometrial Carcinoma", site: "Uterus" },
    // UCS:  { label: "UCS", type: "Uterine Carcinosarcoma", site: "Uterus" },
    // UVM:  { label: "UVM", type: "Uveal Melanoma", site: "Eye" },
};

db.projects = {"ogawalab": {"report": {"ATL": [{"link": "", "title": "Integrated molecular analysis of adult T cell leukemia/lymphoma., Kataoka K et al., Nat Genet. Online, 2015."}], "RCC": []}, "data": {"exome": {"ATL": {"files": 162, "index": "./analysis/ogawalab/exome/ATL/hg19/2.5.0/paplot/exome_ATL/index.html", "cases": 81, "zip": "/home/eva/workscape/aiokada/analysis/ogawalab/exome/ATL/hg19/2.5.0/paplot/ogawalab_exome_ATL_hg19_2.5.0.zip", "last_update": "2017-04-04"}, "TAM_AMKL": {"files": 54, "index": "./analysis/ogawalab/exome/TAM_AMKL/hg19/2.5.2/paplot/sample/index.html", "cases": 29, "zip": "/home/eva/workscape/aiokada/analysis/ogawalab/exome/TAM_AMKL/hg19/2.5.2/paplot/ogawalab_exome_TAM_AMKL_hg19_2.5.2.zip", "last_update": "2017-05-29"}, "RCC": {"files": 212, "index": "./analysis/ogawalab/exome/RCC/hg19/2.5.0/paplot/exome_RCC/index.html", "cases": 106, "zip": "/home/eva/workscape/aiokada/analysis/ogawalab/exome/RCC/hg19/2.5.0/paplot/ogawalab_exome_RCC_hg19_2.5.0.zip", "last_update": "2017-03-11"}}, "rna": {"ATL": {"files": 99, "index": "./analysis/ogawalab/rna/ATL/hg19/2.5.0/paplot/rna_ATL/index.html", "cases": 99, "zip": "/home/eva/workscape/aiokada/analysis/ogawalab/rna/ATL/hg19/2.5.0/paplot/ogawalab_rna_ATL_hg19_2.5.0.zip", "last_update": "2017-03-24"}}, "wgs": {"ATL_Hiseq": {"files": 22, "index": "./analysis/ogawalab/wgs/ATL_Hiseq/hg19/2.5.0/paplot/wgs_ATL_Hiseq/index.html", "zip": "/home/eva/workscape/aiokada/analysis/ogawalab/wgs/ATL_Hiseq/hg19/2.5.0/paplot/ogawalab_wgs_ATL_Hiseq_hg19_2.5.0.zip", "last_update": "2017-03-26", "parent_id": "ATL", "cases": 11, "label": "ATL_hiseq"}, "ATL_Xten_lowpass": {"files": 76, "index": "./analysis/ogawalab/wgs/ATL_Xten_lowpass/hg19/2.5.0/paplot/wgs_ATL_Xten_lowpass/index.html", "zip": "/home/eva/workscape/aiokada/analysis/ogawalab/wgs/ATL_Xten_lowpass/hg19/2.5.0/paplot/ogawalab_wgs_ATL_Xten_lowpass_hg19_2.5.0.zip", "last_update": "2017-03-28", "parent_id": "ATL", "cases": 38, "label": "ATL_XTEN_lowpass"}, 

"ATL_Xten_merge": {"files": 52, "index": "./analysis/ogawalab/wgs/ATL_Xten_merge/hg19/2.5.0/paplot/wgs_ATL_Xten_merge/index.html", "zip": "/home/eva/workscape/aiokada/analysis/ogawalab/wgs/ATL_Xten_merge/hg19/2.5.0/paplot/ogawalab_wgs_ATL_Xten_merge_hg19_2.5.0.zip", "last_update": "2017-03-30", "cases": 26, "label": "ATL_XTEN_merge", parent_id: "ATL"}, 

"RCC": {"files": 28, "index": "./analysis/ogawalab/wgs/RCC/hg19/2.5.0/paplot/wgs_RCC/index.html", "cases": 14, "zip": "/home/eva/workscape/aiokada/analysis/ogawalab/wgs/RCC/hg19/2.5.0/paplot/ogawalab_wgs_RCC_hg19_2.5.0.zip", "last_update": "2017-03-22"}}}, "label": "ogawalab"}, "icgc_riken": {"report": {"HCC": []}, "data": {"rna": {}, "wgs": {"HCC": {"files": 300, "cases": 300, "last_update": "2017/4/30"}}}, "label": "icgc_riken"}};

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
