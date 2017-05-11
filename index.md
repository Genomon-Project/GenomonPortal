---
layout: splash
title: '<font color="F6EDE4">Genomon Portal</font>'
header:
  overlay_color: "#333"
excerpt: '<font color="F6EDE4">工事中</font>'
---

<style type="text/css">
iframe {
  border: none;
  width: 100%;
}
</style>

{::nomarkdown}
<iframe src="{{ site.url }}{{ site.baseurl }}/graphs/index_bar.html" height=500></iframe>
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
  padding: 10px;
}
</style>

<div class="frame">
<div class="box" style="width:50%">
<h3>The NCI's Genomic Data Commons (GDC)</h3>
 GDC provides the cancer research community with a unified data repository that enables data sharing across cancer genomic studies in support of precision medicine.
<br>
 The GDC supports several cancer genome programs at the NCI Center for Cancer Genomics (CCG), including The Cancer Genome Atlas (TCGA) and Therapeutically Applicable Research to Generate Effective Treatments (TARGET).
<br>
</div>

<div class="box">
<h3>High Quality Data Sharing Enables Precision Medicine</h3>
 The GDC obtains validated datasets from NCI programs in which the strategies for tissue collection couples quantity with high quality.
<br>
 The GDC encourages data sharing in support of precision medicine. Tools are provided to guide data submissions by researchers and institutions.
<br>
</div>
</div>

<div class="frame">
<div class="box" style="width:70%">
<iframe src="{{ site.url }}{{ site.baseurl }}/graphs/index_tree.html" height=400></iframe>
</div>

<div class="box">
<h3>Data Availability Summary</h3>
<table>
  <tr><td>Groups       </td><td>     3</td></tr>
  <tr><td>Projects     </td><td>    66</td></tr>
  <tr><td>Disease Types</td><td>    33</td></tr>
  <tr><td>Cases        </td><td>20,844</td></tr>
</table>
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

