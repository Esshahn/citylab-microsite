(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(t,n,e){"use strict";var o={name:"Matomo",methods:{piwik:function(t){var u="https://piwik.technologiestiftung-berlin.de/";t.push(["setTrackerUrl",u+"matomo.php"]),t.push(["setSiteId","10"]);var n=document,g=n.createElement("script"),s=n.getElementsByTagName("script")[0];g.type="text/javascript",g.async=!0,g.defer=!0,g.src=u+"matomo.js",s.parentNode.insertBefore(g,s)}},mounted:function(){var t=window._paq||[];t.push(["setDocumentTitle",document.domain+"/"+document.title]),t.push(["setCookieDomain","*.www.citylab-berlin.org"]),t.push(["setDomains",["*.www.citylab-berlin.org","*.www.citylab-berlin.org"]]),t.push(["trackPageView"]),t.push(["enableLinkTracking"]),this.piwik(t)}},c=e(20),component=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null);n.a=component.exports},156:function(t,n,e){},204:function(t,n,e){"use strict";var o=e(156);e.n(o).a},240:function(t,n,e){"use strict";e.r(n);var content=e(146),o=e(147),c=e(148),r=e(145),l={components:{Navigation:o.a,Footer:c.a,Matomo:r.a},data:function(){return{lang:"de",content:content.a,direct:"/codeofconduct_en"}},computed:{pointsArr:function(){return this.content[this.lang].codeofconduct.points}}},d=(e(204),e(20)),component=Object(d.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Navigation",{attrs:{scrolled:!0,lang:t.lang,content:t.content,direct:t.direct,anchorTags:!1}}),t._v(" "),e("section",{staticClass:"section is-medium"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title",staticStyle:{"margin-top":"100px"}},[t._v("\n                    "+t._s(t.content[t.lang].codeofconduct.title)+"\n                ")]),t._v(" "),e("ol",t._l(t.pointsArr,function(n){return e("li",{staticStyle:{"margin-bottom":"20px"}},[t._v(t._s(n))])}),0),t._v(" "),e("Matomo")],1)]),t._v(" "),e("Footer",{attrs:{lang:t.lang,content:t.content}})],1)},[],!1,null,null,null);n.default=component.exports}}]);