(function(){
page = {};

page.style = function () {

    var body = document.getElementsByTagName("body")[0];
    body.style["font-family"] = '-apple-system,"Noto Sans JP",".SFNSText-Regular","San Francisco","Roboto","Segoe UI","Helvetica Neue","Lucida Grande",Arial,sans-serif';
    body.style["font-size"] = '1.5em';
    body.style["line-height"] = '1.5';
};

page.header = function (id, root, active) {

    var header = document.getElementById(id);
    var active_class =["","",""];
    if (active == "analysis") {
      active_class[0] = 'class="active"';
    }
    else if (active == "about") {
      active_class[1] = 'class="active"';
    }
    else if (active == "contact") {
      active_class[2] = 'class="active"';
    }

    header.innerHTML = (`
    <!-- Static navbar -->
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="{root}/index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> <b>Genomon</b> Portal</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li ` + active_class[0] + `><a href="{root}/files/_analysis.html"><i class="fa fa-bar-chart" aria-hidden="true"></i> Analysis</a></li>
            <li ` + active_class[1] + `><a href="{root}/files/_about.html"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> About the GP</a></li>
            <li ` + active_class[2] + `><a href="{root}/files/_contact.html"><span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span> Contact Us</a></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <form class="navbar-form navbar-left" role="search" action="http://www.google.com/search">
              <div class="form-group">
                <input type="hidden" name="hl" value="ja" />
                <input type="hidden" name="ie" value="utf-8">
                <input type="hidden" name="oe" value="utf-8">
                <input type="hidden" value="https://genomon_portal.hgc.jp/" name="as_sitesearch" />
                <input type="text" class="form-control" name="q" size="31" maxlength="256" value="" placeholder="{placeholder}" />
              </div>
              <input type="submit" class="btn btn-default" name="btnG" value="{search}" />
            </form>
          </ul>

        </div><!--/.nav-collapse -->
      </div>
    </nav>`)
    .split("{root}").join(root)
    .split("{placeholder}").join(portal_text.get("placeholder"))
    .split("{search}").join(portal_text.get("search"));
};

page.footer = function (id, root) {

    var footer = document.getElementById(id);
    footer.innerHTML = `<footer style="display: block; font-size: 80%; line-height: 1.42857143; color: #777;">
      <div class="container">
        <hr>
        <div class="row">
          <div style="float:left;">
            <p>The super-computing resource was provided by Human Genome Center, the Institute of Medical Science,The University of Tokyo (http://sc.hgc.jp/shirokane.html).</p>
            <p>&copy; 2017 Gemonon Project. All Rights reserved.</p>
            <p style="padding-left:16px;">
              <i class="fa fa-github" aria-hidden="true" style="margin-right: 5px;"></i><a href="https://github.com/Genomon-Project">https://github.com/Genomon-Project</a></br>
              <i class="fa fa-envelope" aria-hidden="true" style="margin-right: 5px;"></i><a href="mailto:genomon.devel@gmail.com">genomon.devel@gmail.com</a>
            </p>
          </div>
          <div style="float:right;">
            <a href="http://www.hgc.jp"><img src="https://www.hgc.jp/english/img/logo/HGC_logo_S.png" border="0" align="right" alt="This website is provided by Human Genome Center, The Institute of Medical Science, The University of Tokyo" /></a>
          </div>
        </div>
      </div>
    </footer>`.split("{root}").join(root);
};

page.accessor = function (id, html) {

    var home = '<a href="../index.html">Home</a> > ';
    
    var accessor = document.getElementById(id);
    accessor.innerHTML = home + html;
};

})();
