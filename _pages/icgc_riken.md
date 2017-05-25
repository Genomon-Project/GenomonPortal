---
permalink: /analysis/icgc_riken
title: "icgc_riken"
layout: splash
---

[Analysis]({{ site.url }}{{ site.baseurl }}/analysis) > icgc_riken

# <font class="pre-group"></font> icgc_riken

Last updated on 2017/5/15

{% capture notice-text %}
#### About ICGC

国際がんゲノムコンソーシアム（International Cancer Genome Consortium：ICGC)

Japan

 - National Cancer Center; National Institute of Biomedical Innovation
 - RIKEN


{% endcapture %}

<div class="labinfo-notice">
  {{ notice-text | markdownify }}
</div>

{::nomarkdown}
<iframe src="{{ site.url }}{{ site.baseurl }}/graphs/icgc_riken.html" style="height:700px; margin-top:50px;" scrolling="no" frameborder="no"></iframe>
<script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
<script>
$('iframe')
.on('load', function(){
  try {  
    $(this).height(this.contentWindow.document.documentElement.scrollHeight);
  } catch (e) {
  }
})
.trigger('load');
</script>
{:/nomarkdown}
