(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{145:function(t,e,r){"use strict";var n={name:"Matomo",methods:{piwik:function(t){var u="https://piwik.technologiestiftung-berlin.de/";t.push(["setTrackerUrl",u+"matomo.php"]),t.push(["setSiteId","10"]);var e=document,g=e.createElement("script"),s=e.getElementsByTagName("script")[0];g.type="text/javascript",g.async=!0,g.defer=!0,g.src=u+"matomo.js",s.parentNode.insertBefore(g,s)}},mounted:function(){var t=window._paq||[];t.push(["setDocumentTitle",document.domain+"/"+document.title]),t.push(["setCookieDomain","*.www.citylab-berlin.org"]),t.push(["setDomains",["*.www.citylab-berlin.org","*.www.citylab-berlin.org"]]),t.push(["trackPageView"]),t.push(["enableLinkTracking"]),this.piwik(t)}},c=r(20),component=Object(c.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null);e.a=component.exports},149:function(t,e,r){"use strict";var n=r(8),c=r(150)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),r(66)("find")},150:function(t,e,r){var n=r(27),c=r(65),o=r(33),l=r(21),m=r(151);t.exports=function(t,e){var r=1==t,d=2==t,f=3==t,h=4==t,v=6==t,_=5==t||v,w=e||m;return function(e,m,y){for(var x,C,k=o(e),j=c(k),E=n(m,y,3),T=l(j.length),N=0,S=r?w(e,T):d?w(e,0):void 0;T>N;N++)if((_||N in j)&&(C=E(x=j[N],N,k),t))if(r)S[N]=C;else if(C)switch(t){case 3:return!0;case 5:return x;case 6:return N;case 2:S.push(x)}else if(h)return!1;return v?-1:f||h?h:S}}},151:function(t,e,r){var n=r(152);t.exports=function(t,e){return new(n(t))(e)}},152:function(t,e,r){var n=r(10),c=r(98),o=r(2)("species");t.exports=function(t){var e;return c(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!c(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},183:function(t,e,r){},233:function(t,e,r){"use strict";var n=r(183);r.n(n).a},252:function(t,e,r){"use strict";r.r(e);r(67),r(99),r(149);var content=r(146),n=r(147),c=r(148),o=r(145),l={name:"NewsletterRegisterDe",components:{Navigation:n.a,Matomo:o.a,Footer:c.a},data:function(){return{content:content.a,lang:"de",direct:"/newsletter_unsubscribe_en"}},mounted:function(){function main(){var t,e=jQuery.noConflict();e(document).ready(function(){var r;e(".cr_form").submit(function(){if(e(this).find(".clever_form_error").removeClass("clever_form_error"),e(this).find(".clever_form_note").remove(),e(this).find(".musthave").find("input, textarea").each(function(){(""==jQuery.trim(e(this).val())||e(this).is(":checkbox")||e(this).is(":radio"))&&(e(this).is(":checkbox")||e(this).is(":radio")?e(this).parent().find(":checked").is(":checked")||e(this).parent().addClass("clever_form_error"):e(this).addClass("clever_form_error"))}),e(this).attr("action").search(document.domain)>0&&e(".cr_form").attr("action").search("wcs")>0){var t=e(this).find("input[name=email]"),r=!1;e("input['name=cr_subunsubscribe'][value='false']").length&&e("input['name=cr_subunsubscribe'][value='false']").is(":checked")&&(r=!0),t.val()&&!r&&e.ajax({type:"GET",url:e(".cr_form").attr("action").replace("wcs","check_email")+e(this).find("input[name=email]").val(),success:function(data){if(data)return t.addClass("clever_form_error").before("<div class='clever_form_note cr_font'>"+data+"</div>"),!1},async:!1});var n=e(this).find("input[name=captcha]");n.val()&&e.ajax({type:"GET",url:e(".cr_form").attr("action").replace("wcs","check_captcha")+e(this).find("input[name=captcha]").val(),success:function(data){if(data)return n.addClass("clever_form_error").after("<div  class='clever_form_note cr_font'>"+data+"</div>"),!1},async:!1})}return!e(this).find(".clever_form_error").length}),e('input[class*="cr_number"]').change(function(){isNaN(e(this).val())&&e(this).val(1),e(this).attr("min")&&1*e(this).val()<1*e(this).attr("min")&&e(this).val(e(this).attr("min")),e(this).attr("max")&&1*e(this).val()>1*e(this).attr("max")&&e(this).val(e(this).attr("max"))}),t=e("div[rel='captcha'] img:not(.captcha2_reload)").attr("src"),0!=e("div[rel='captcha'] img:not(.captcha2_reload)").length&&(r=(new Date).getTime(),e("div[rel='captcha'] img:not(.captcha2_reload)").attr("src",""),e("div[rel='captcha'] img:not(.captcha2_reload)").attr("src",t+"?t="+r))})}var t,e,r;"undefined"==typeof jQuery?(t="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",e=main,(r=document.createElement("script")).setAttribute("src",t),r.onload=e,r.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||e()},document.getElementsByTagName("head")[0].appendChild(r)):main()}},m=(r(233),r(20)),component=Object(m.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navigation",{attrs:{scrolled:!0,lang:t.lang,content:t.content,direct:t.direct,anchorTags:!1}}),t._v(" "),r("section",{staticClass:"section is-medium"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title",staticStyle:{"margin-top":"100px"}},[t._v("\n                "+t._s(t.content[t.lang].register.formunsubscribe.title)+"\n            ")]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v(t._s(t.content[t.lang].register.formunsubscribe.p1))]),t._v(" "),r("form",{staticClass:"layout_form cr_form cr_font",attrs:{action:"https://eu1.cleverreach.com/f/82637-208290/wcu/",method:"post",target:"_blank"}},[r("div",{staticClass:"cr_body cr_page cr_font formbox"},[r("div",{staticClass:"non_sortable",staticStyle:{"text-align":"left"}}),t._v(" "),r("div",{staticClass:"cr_ipe_item ui-sortable musthave",staticStyle:{"margin-bottom":"25px"},attrs:{id:"4405747",rel:"email"}},[r("label",{staticClass:"itemname",attrs:{for:"text4405747"}},[t._v(t._s(t.content[t.lang].register.formunsubscribe.mail)+"*")]),t._v(" "),r("input",{staticStyle:{width:"100%"},attrs:{id:"text4405747",name:"email",value:"",type:"text"}})]),t._v(" "),r("div",{staticClass:"cr_ipe_item ui-sortable submit_container",attrs:{id:"4405749",rel:"button"}},[r("button",{staticClass:"cr_button button submit is-color-secondary is-normal",attrs:{type:"submit"}},[t._v(t._s(t.content[t.lang].register.formunsubscribe.button))])])]),t._v(" "),t._m(0)])]),t._v(" "),r("Matomo")],1),t._v(" "),r("Footer",{attrs:{lang:t.lang,content:t.content}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("noscript",[e("a",{attrs:{href:"http://www.cleverreach.de"}},[this._v("www.CleverReach.de")])])}],!1,null,null,null);e.default=component.exports}}]);