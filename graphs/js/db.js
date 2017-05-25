(function(){
db = {};
db.disease = {
    acc: { label: "ACC", type: "Adrenocortical carcinoma", site: "Adrenal Gland" },
    aml: { label: "AML", type: "*****", site: "Unknown" },
    atl: { label: "ATL", type: "Adult T-cell Leukemia", site: "Lymph Nodes" },
    blca: { label: "BLCA", type: "Bladder Urothelial Carcinoma", site: "Bladder" },
    brca: { label: "BRCA", type: "Breast invasive carcinoma", site: "Breast" },
    cesc: { label: "CESC", type: "Cervical squamous cell carcinoma and endocervical adenocarcinoma", site: "Cervix" },
    chol: { label: "CHOL", type: "Cholangiocarcinoma", site: "Bile Duct" },
    coad: { label: "COAD", type: "Colon adenocarcinoma", site: "Colorectal" },
    dlbc: { label: "DLBC", type: "Lymphoid Neoplasm Diffuse Large B-cell Lymphoma", site: "Lymph Nodes" },
    ds_amkl: { label: "DS_AMKL", type: "*****", site: "Unknown" },
    esca: { label: "ESCA", type: "Esophageal carcinoma", site: "Esophagus" },
    gbm: { label: "GBM", type: "Glioblastoma multiforme", site: "Brain" },
    hcc: { label: "HCC", type: "HepatoCellular Carcinoma", site: "Liver" },
    hnsc: { label: "HNSC", type: "Head and Neck squamous cell carcinoma", site: "Head and Neck" },
    kich: { label: "KICH", type: "Kidney Chromophobe", site: "Kidney" },
    kikuchi: { label: "kikuchi_disease", type: "*****", site: "Unknown" },
    kirc: { label: "KIRC", type: "Kidney renal clear cell carcinoma", site: "Kidney" },
    kirp: { label: "KIRP", type: "Kidney renal papillary cell carcinoma", site: "Kidney" },
    laml: { label: "LAML", type: "Acute Myeloid Leukemia", site: "Bone Marrow" },
    lgg: { label: "LGG", type: "Brain Lower Grade Glioma", site: "Brain" },
    lihc: { label: "LIHC", type: "Liver hepatocellular carcinoma", site: "Liver" },
    luad: { label: "LUAD", type: "Lung adenocarcinoma", site: "Lung" },
    lusc: { label: "LUSC", type: "Lung squamous cell carcinoma", site: "Lung" },
    mds: { label: "MDS", type: "*****", site: "Unknown" },
    meso: { label: "MESO", type: "Mesothelioma", site: "Pleura" },
    ov: { label: "OV", type: "Ovarian serous cystadenocarcinoma", site: "Ovary" },
    paad: { label: "PAAD", type: "Pancreatic adenocarcinoma", site: "Pancreas" },
    pcpg: { label: "PCPG", type: "Pheochromocytoma and Paraganglioma", site: "Adrenal Gland" },
    prad: { label: "PRAD", type: "Prostate adenocarcinoma", site: "Prostate" },
    rcc: { label: "RCC", type: "Renal Cell Carcinoma", site: "Kidney" },
    read: { label: "READ", type: "Rectum adenocarcinoma", site: "Colorectal" },
    sarc: { label: "SARC", type: "Sarcoma", site: "Soft Tissue" },
    skcm: { label: "SKCM", type: "Skin Cutaneous Melanoma", site: "Skin" },
    stad: { label: "STAD", type: "Stomach adenocarcinoma", site: "Stomach" },
    tam: { label: "TAM_AMKL", type: "*****", site: "Unknown" },
    tgct: { label: "TGCT", type: "Testicular Germ Cell Tumors", site: "Testis" },
    thca: { label: "THCA", type: "Thyroid carcinoma", site: "Thyroid" },
    thym: { label: "THYM", type: "Thymoma", site: "Thymus" },
    ucec: { label: "UCEC", type: "Uterine Corpus Endometrial Carcinoma", site: "Uterus" },
    ucs:  { label: "UCS", type: "Uterine Carcinosarcoma", site: "Uterus" },
    uvm:  { label: "UVM", type: "Uveal Melanoma", site: "Eye" },
};

db.projects = {
    ogawalab: {
        label: "ogawalab",
        exome: {
            atl: { cases:  81, files: 162, last_update: "2017/4/30" },
            rcc: { cases: 106, files: 212, last_update: "2017/4/30" },
            tam: { cases:  29, files:  54, last_update: "2017/4/30" },
        },
        wgs: {
            atl_hiseq:   { cases: 11, files: 22, last_update: "2017/4/30", label: "ATL_hiseq", parent_id: "atl"},
            atl_lowpass: { cases: 38, files: 76, last_update: "2017/4/30", label: "ATL_XTEN_lowpass", parent_id: "atl"},
            atl:   { cases: 26, files: 52, last_update: "2017/4/30", label: "ATL_XTEN_merge", parent_id: "atl"},
            rcc:         { cases: 14, files: 28, last_update: "2017/4/30" },
            // aml:         { cases: 11, files: 15, last_update: "2017/4/30" },
            // ds_amkl:     { cases:  8, files: 16, last_update: "2017/4/30" },
            // esca:        { cases:  4, files:  4, last_update: "2017/4/30" },
            // kikuchi:     { cases: 12, files: 12, last_update: "2017/4/30" },
            // mds:         { cases: 29, files: 58, last_update: "2017/4/30" },
        },
        rna: {
            atl: { cases:  99, files: 99, last_update: "2017/4/30" },
        },
    },
    icgc_riken: {
        label: "icgc_riken",
        exome: {},
        wgs: {
            hcc: { cases: 300, files: 300, last_update: "2017/4/30" },
        },
        rna: {
            hcc: { cases: 247, files: 247, last_update: "2017/4/30" },
        },
    },
    tcga: {
        label: "TCGA",
        exome: {
            acc:  { cases:  92, files: 0, last_update: "2017/4/30" },
            blca: { cases: 412, files: 0, last_update: "2017/4/30" },
            brca: { cases: 829, files: 0, last_update: "2017/4/30" },
            cesc: { cases: 305, files: 0, last_update: "2017/4/30" },
            chol: { cases:  51, files: 0, last_update: "2017/4/30" },
            coad: { cases: 323, files: 0, last_update: "2017/4/30" },
            dlbc: { cases:  48, files: 0, last_update: "2017/4/30" },
            esca: { cases: 184, files: 0, last_update: "2017/4/30" },
            gbm:  { cases: 316, files: 0, last_update: "2017/4/30" },
            hnsc: { cases: 510, files: 0, last_update: "2017/4/30" },
            kich: { cases:  66, files: 0, last_update: "2017/4/30" },
            kirc: { cases: 376, files: 0, last_update: "2017/4/30" },
            kirp: { cases: 288, files: 0, last_update: "2017/4/30" },
            laml: { cases: 141, files: 0, last_update: "2017/4/30" },
            lgg:  { cases: 516, files: 0, last_update: "2017/4/30" },
            lihc: { cases: 374, files: 0, last_update: "2017/4/30" },
            luad: { cases: 514, files: 0, last_update: "2017/4/30" },
            lusc: { cases: 485, files: 0, last_update: "2017/4/30" },
            meso: { cases:  83, files: 0, last_update: "2017/4/30" },
            ov:   { cases:  67, files: 0, last_update: "2017/4/30" },
            paad: { cases: 184, files: 0, last_update: "2017/4/30" },
            pcpg: { cases: 179, files: 0, last_update: "2017/4/30" },
            prad: { cases: 498, files: 0, last_update: "2017/4/30" },
            read: { cases: 102, files: 0, last_update: "2017/4/30" },
            sarc: { cases: 255, files: 0, last_update: "2017/4/30" },
            skcm: { cases: 470, files: 0, last_update: "2017/4/30" },
            stad: { cases: 441, files: 0, last_update: "2017/4/30" },
            tgct: { cases: 150, files: 0, last_update: "2017/4/30" },
            thca: { cases: 496, files: 0, last_update: "2017/4/30" },
            thym: { cases: 123, files: 0, last_update: "2017/4/30" },
            ucec: { cases: 456, files: 0, last_update: "2017/4/30" },
            ucs:  { cases:  57, files: 0, last_update: "2017/4/30" },
            uvm:  { cases:  80, files: 0, last_update: "2017/4/30" },
        },
        wgs: {},
        rna: {
            acc:  { cases:  79, files: 0, last_update: "2017/4/30" },
            blca: { cases: 433, files: 0, last_update: "2017/4/30" },
            brca: { cases:1256, files: 0, last_update: "2017/4/30" },
            cesc: { cases: 309, files: 0, last_update: "2017/4/30" },
            chol: { cases:  45, files: 0, last_update: "2017/4/30" },
            coad: { cases: 546, files: 0, last_update: "2017/4/30" },
            dlbc: { cases:  48, files: 0, last_update: "2017/4/30" },
            esca: { cases: 198, files: 0, last_update: "2017/4/30" },
            gbm:  { cases: 175, files: 0, last_update: "2017/4/30" },
            hnsc: { cases: 566, files: 0, last_update: "2017/4/30" },
            kich: { cases:  91, files: 0, last_update: "2017/4/30" },
            kirc: { cases: 618, files: 0, last_update: "2017/4/30" },
            kirp: { cases: 323, files: 0, last_update: "2017/4/30" },
            laml: { cases: 179, files: 0, last_update: "2017/4/30" },
            lgg:  { cases: 534, files: 0, last_update: "2017/4/30" },
            lihc: { cases: 424, files: 0, last_update: "2017/4/30" },
            luad: { cases: 601, files: 0, last_update: "2017/4/30" },
            lusc: { cases: 555, files: 0, last_update: "2017/4/30" },
            meso: { cases:  87, files: 0, last_update: "2017/4/30" },
            ov:   { cases: 430, files: 0, last_update: "2017/4/30" },
            paad: { cases: 183, files: 0, last_update: "2017/4/30" },
            pcpg: { cases: 187, files: 0, last_update: "2017/4/30" },
            prad: { cases: 558, files: 0, last_update: "2017/4/30" },
            read: { cases: 177, files: 0, last_update: "2017/4/30" },
            sarc: { cases: 265, files: 0, last_update: "2017/4/30" },
            skcm: { cases: 473, files: 0, last_update: "2017/4/30" },
            stad: { cases: 453, files: 0, last_update: "2017/4/30" },
            tgct: { cases: 156, files: 0, last_update: "2017/4/30" },
            thca: { cases: 572, files: 0, last_update: "2017/4/30" },
            thym: { cases: 122, files: 0, last_update: "2017/4/30" },
            ucec: { cases: 593, files: 0, last_update: "2017/4/30" },
            ucs:  { cases:  57, files: 0, last_update: "2017/4/30" },
            uvm:  { cases:  80, files: 0, last_update: "2017/4/30" },
        },
        rna_single: {
            coad: { cases:  92, files:  92, last_update: "2017/4/30" },
            read: { cases:  72, files:  72, last_update: "2017/4/30" },
            ucec: { cases: 384, files: 384, last_update: "2017/4/30" },
        },
    },
};
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
        for (var str in db.projects[group]) {
            if (str == "label") {
                continue;
            }
            for (var dis in db.projects[group][str]) {
                var name = dis;
                if ("parent_id" in db.projects[group][str][dis]) {
                    name = db.projects[group][str][dis].parent_id;
                }
                var key = name + "@" + str;
                if (key in di) {
                    di[key] += db.projects[group][str][dis].cases;
                }
                else {
                    di[key] = db.projects[group][str][dis].cases;
                }
            }
        }
    }
    
    var result = [];
    for (var key in di) {
        [name, str] = key.split("@");
        result.push({parent: str, name: name, value: di[key]});
    }
    console.log(result);
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
        for (var str in db.projects[group]) {
            if (str == "label") {
                continue;
            }
            for (var dis in db.projects[group][str]) {
                var site;
                if ("parent_id" in db.projects[group][str][dis]) {
                    site = db.disease[db.projects[group][str][dis].parent_id].site;
                }
                else {
                    site = db.disease[dis].site;
                }
                result[str][result.site.indexOf(site)] += db.projects[group][str][dis].cases;
            }
        }
    }
//    console.log(result);
    return result;
};

db.get_groupdata_bar = function (group) {

    var result = {
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
        if ((str in db.projects[group]) == false){
            continue;
        }
        for (var key in db.projects[group][str]) {
            if (dis_id.indexOf(key) < 0) {
                dis_id.push(key);
            }
        }
    }
    dis_id = dis_id.sort();
    
    for (var d in dis_id) {
        var dis = dis_id[d];
        var label;
        
        for (var str in db.strategy) {
            if ((str in db.projects[group]) == false) {
                result[str].push(0);
            }
            else if ((dis in db.projects[group][str]) == false) {
                result[str].push(0);
            }
            else {
                result[str].push(db.projects[group][str][dis].cases);
                
                if ("label" in db.projects[group][str][dis]){
                    label = db.projects[group][str][dis].label;
                }
                else if ("parent_id" in db.projects[group][str][dis]){
                    label = db.disease[db.projects[group][str][dis].parent_id].label;
                }
                else {
                    label = db.disease[dis].label;
                }
            }
        }
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
        if ((str in db.projects[group]) == false){
            continue;
        }
        if ((disease in db.projects[group][str]) == false){
            continue;
        }
        result[str] = db.projects[group][str][disease].cases
    }
//    console.log(result);
    return result;
};

})();
Object.freeze(db);
