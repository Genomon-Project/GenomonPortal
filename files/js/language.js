(function(){
portal_text = {};

portal_text.label = {

ja: {

  placeholder:"検索キーワード",
  search:"検索",
  

},

en: {

  placeholder:"Keywords",
  search:"Search",

  
},

};

portal_text.label["ja-jp"] = portal_text.label["ja"];
portal_text.label["en-us"] = portal_text.label["en"];

portal_text.language = "";

portal_text.set_lang = function () {
    
    // 最優先の言語だけ取得
    //var language = (window.navigator.languages && window.navigator.languages[0]) ||
    //        window.navigator.language ||
    //        window.navigator.userLanguage ||
    //        window.navigator.browserLanguage;

    // クライアント側で受け付けている言語リストを取得
    var languages = window.navigator.languages || [
            window.navigator.language ||
            window.navigator.userLanguage ||
            window.navigator.browserLanguage
    ];
    
    for (var l in languages) {
        if (languages[l].toLowerCase() in portal_text.label) {
            portal_text.language = languages[l].toLowerCase();
            break;
        }
    }
    if (portal_text.language == "") {
        portal_text.language == "en";
    }
};

// get text from 
portal_text.get = function (key) {
    
    if (portal_text.language == "") {
        portal_text.set_lang();
    }
    return portal_text.label[portal_text.language][key];
};

// choice one item ftom items
portal_text.choice = function (items) {
    
    if (portal_text.language == "") {
        portal_text.set_lang();
    }
    
    var item = ""
    for (var key in items) {
        if (portal_text.language == key.toLowerCase()) {
            item = items[key];
            break;
        }
    }
    
    if (item == "") {
        if ((portal_text.language == "ja-jp") && ("ja" in items)) {
            item = items["ja"];
        } else if ((portal_text.language == "en-us") && ("en" in items)) {
            item = items["en"];
        } else if ("en" in items) {
            item = items["en"];
        } else {
            var keys = Object.keys(items);
            keys.sort(function(a,b){return a - b;});
            item = items[keys[0]];
        }
    }
    return item;
};

})();
