---
title: 'Genomon Portal'
layout: splash
header:
  overlay_image: /assets/images/s3_thin2.jpg
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: 工事中
---

{::nomarkdown}
<iframe src="{{ site.url }}{{ site.baseurl }}/graphs/index_bar.html" style="height:400px; margin-top:50px;"></iframe>
{:/nomarkdown}

<div class="frame">
<div class="box" style="width:50%">
<h3>The Genomon Portal (GP)</h3>
<p>GPは医学支援のため、がんゲノム研究成果のデータ共有を目指しています。</p>
<p><a href="./pages/about"><font class="pre-link"></font> About th GP</a></p>
</div>

<div class="box">
<h3>Analysis　Data</h3>
<p>GPでは、GenomonPipelineを使用して解析されたがんゲノム解析結果の一部を所有者の許可を得て公開しています。</p>
<p><a href="./analysis"><font class="pre-link"></font> Anlysis</a></p>
</div>
</div>

<div class="frame">
<div class="box" style="width:70%">
<iframe src="{{ site.url }}{{ site.baseurl }}/graphs/index_tree.html" style="height:400px; margin-top:50px;"></iframe>
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

