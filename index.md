---
layout: splash
title: "Genomon Portal"
header:
  overlay_color: "#333"
excerpt: '<font color="F6EDE4">Practicing jekyll.<br>For the US radio station, see Fungus (XM).</font>'
---

<style type="text/css">
iframe {
  border-collapse: separate;
  border-spacing: 0px 10px;
  width: 100%;
  height: 400px;
}
</style>

{::nomarkdown}
<iframe src="{{ site.url }}{{ site.baseurl }}/graphs/index_bar.html"></iframe>
{:/nomarkdown}

<style type="text/css">
.frame {
  border-collapse: separate;
  border-spacing: 0px 10px;
  display: table;
  width: 100%;
}
.box {
  display: table-cell;
  vertical-align: middle;
  background-color: #EFEFEF;
  padding: 10px;
}
</style>

<div class="frame">
<div class="box" style="width:200px">
<center><h2>Easy to use!</h2></center>
<div align="center"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/iconmonstr-laptop-4-96.png"></div>
<br>
</div>

<div class="box">
Genomon is now easier than ever to use.<br>
You just need to prepare list of input sequence data paths and just type:
<div style="margin: 15px; padding: 5px; background-color: #FFFFFF;">
genomon_pipeline dna input.csv output_dir
</div>
</div>
</div>

<div class="frame">
<div class="box" style="width:200px">
<center><h2>Large scale!</h2></center>
<div align="center"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/iconmonstr-server-7-96.png"></div>
<br>
</div>
<div class="box">
Genomon is now highly optimized and efficiently utilizes ruffus package for job scheduling. <br>
You can analyze several hundreds of genomic and transcriptome sequencing data simultaneously.
</div>
</div>

<div class="frame">
<div class="box" style="width:200px">
<center><h2>Flexible!</h2></center>
<div align="center"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/iconmonstr-control-panel-11-96.png"></div>
<br>
</div>
<div class="box">
Genomon is extensible. So you can easily incorporate your favorite modules into Genomon. <br>
Also you can easily deploy Genomon to your own cluster other than HGC supercomputer. 
</div>
</div>

## Overview

Genomon enables us to perform sensitive and accurate detection of most types of genomic variants
(single nucleotide variants, short indels, mid-size (20bp - 300bp) indels and large scale structural variations),
and transcriptomic changes (gene fusions, aberrant splicing patterns),
and fairly good performance is demonstrated 
through [a large number of important cancer genome projects](http://www.ncbi.nlm.nih.gov/pubmed?term=(Ogawa%2C%20Seishi%5BAuthor%5D)%20AND%20Miyano%2C%20Satoru%5BAuthor%5D).


Genomon adopts efficient job scheduling framework that enables us easily analyzing several hundreds of 
genome and transcriptome sequencing data simultaneously.
Genomon is easy to install and after installing, 
users can start analysis just preparing simple sample configuration files.

