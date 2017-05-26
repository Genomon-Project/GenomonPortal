(function(){
page = {};

page.header = function (id, root, active) {

    var header = document.getElementById(id);
    header.innerHTML = `    <img src="{root}/images/header-hgc.png" / style="width:400px; padding:30px" >

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
          <a class="navbar-brand" href="#">Genomon Portal</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="{root}/index.html">Home</a></li>

            <!-- <li class="active"><a href="#about">Access Data</a></li> -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Access Data<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Select from Cancer Type</a></li>
                <li><a href="#">Select from Group</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">document</li>
                <li><a href="#">About Data</a></li>
              </ul>
            </li>

            <li><a href="#submit">Submit Fata</a></li>
            <li><a href="#develop">For Developers</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#news">News</a></li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">About Genomon</a></li>
                <li><a href="#">About the Data</a></li>
                <li><a href="#">About Us</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="検索キーワード">
              </div>
              <button type="submit" class="btn btn-default">検索</button>
            </form>
<!--
            <li><a href="{root}/navbar/">Default</a></li>
            <li class="active"><a href="./">Static top <span class="sr-only">(current)</span></a></li>
            <li><a href="{root}/navbar-fixed-top/">Fixed top</a></li>
-->
          </ul>

        </div><!--/.nav-collapse -->
      </div>
    </nav>`.replace("{root}", root);
};

page.footer = function (id, root) {

    //var parent = document.getElementById("parent");
    //parent.setAttribute("height", document.body.scrollHeight + "px");
};

})();
