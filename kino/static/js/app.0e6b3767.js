(function(t){function a(a){for(var s,o,r=a[0],l=a[1],c=a[2],u=0,d=[];u<r.length;u++)o=r[u],i[o]&&d.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a3a6ba82"}[t]+".js"}function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise(function(a,s){e=i[t]=[a,s]});a.push(e[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),n=function(a){l.onerror=l.onload=null,clearTimeout(c);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+n+")");o.type=s,o.request=n,e[1](o)}i[t]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(a)},r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var p=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("64a9"),i=e.n(s);i.a},"0a5d":function(t,a,e){},"30d6":function(t,a,e){},"3ac7":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],o=(e("034f"),e("2877")),r={},l=Object(o["a"])(r,i,n,!1,null,null,null),c=l.exports,u=e("8c4f"),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home container"},[e("Navbar"),e("Filters"),e("contact")],1)},d=[],m=e("d178"),v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home container"},[t.show?e("form",{staticClass:"form"},[e("h2",{staticClass:"ser"},[t._v("Подобрать"),e("div",{staticClass:"left",on:{click:t.hideFilter}},[t._v("×")])]),e("div",{staticClass:"line"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[t._v("\n        Жанры\n        "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"browser-default custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.genre=a.target.multiple?e:e[0]}}},[e("option",{attrs:{selected:""}}),e("option",[t._v("Аниме")]),e("option",[t._v("Анимация")]),e("option",[t._v("Биография")]),e("option",[t._v("Боевик")]),e("option",[t._v("Вестерн")]),e("option",[t._v("Военный")]),e("option",[t._v("Детектив")]),e("option",[t._v("Документальный")]),e("option",[t._v("Драма")]),e("option",[t._v("Исторический")]),e("option",[t._v("Криминальный")]),e("option",[t._v("Комедия")]),e("option",[t._v("Музыкальный")]),e("option",[t._v("Приключения")]),e("option",[t._v("Роман")]),e("option",[t._v("Семейный")]),e("option",[t._v("Спорт")]),e("option",[t._v("Триллер")]),e("option",[t._v("Фантастика")]),e("option",[t._v("Фэнтези")]),e("option",[t._v("Другой")])])]),e("div",{staticClass:"col"},[t._v("\n        Страна\n        "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"browser-default custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.country=a.target.multiple?e:e[0]}}},[e("option",{attrs:{selected:""}}),e("option",[t._v("Россия")]),e("option",[t._v("Канада")]),e("option",[t._v("Великобритания")]),e("option",[t._v("США")]),e("option",[t._v("Австралия")]),e("option",[t._v("Бельгия")]),e("option",[t._v("Бразилия")]),e("option",[t._v("Германия")]),e("option",[t._v("Ирландия")]),e("option",[t._v("Испания")]),e("option",[t._v("Италия")]),e("option",[t._v("Мексика")]),e("option",[t._v("Франция")]),e("option",[t._v("Япония")]),e("option",[t._v("Другая")])])]),e("div",{staticClass:"col"},[t._v("\n        Год\n\n        "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"custom-select",attrs:{type:"year",name:"rank",maxlength:"4",value:"2019",step:"1"},domProps:{value:t.year},on:{input:function(a){a.target.composing||(t.year=a.target.value)}}})])])]),e("div",{staticClass:"mar"},[e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:t.loadRoom}},[t._v("Подобрать")])])]):t._e(),e("div",{staticClass:"row row2"},[t._m(0),e("div",{staticClass:"col"},[t.show?t._e():e("button",{staticClass:"btn btn-primary my-2 my-sm-0 btn123",attrs:{type:"submit"},on:{click:t.showFilter}},[t._v("Подобрать")])]),e("div",{staticClass:"col ser2"},[e("select",{staticClass:"browser-default custom-select custom-select2",on:{click:t.loadRoom2}},[e("option",{attrs:{selected:""}},[e("div",[t._v(t._s(t.sort))])])])])]),t.show2?t._e():e("Movies"),t.show2?e("div",[e("div",{staticClass:"card-deck deck"},t._l(t.movies,function(t){return e("div",{staticClass:"col-sm-3"},[e("router-link",{attrs:{to:{name:"Film",params:{id:t.id}}}},[e("div",{staticClass:"card",attrs:{width:"360px",height:"518px"}},[e("img",{staticClass:"card-img-top img-fluid",attrs:{width:"360px",height:"518px",src:t.image,alt:"Card image cap"}})])])],1)}),0),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination example justify-content-center"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:[t.backpage,t.loadRoom2]}},[t._v("«")])]),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link ",attrs:{href:"#"}},[t._v(t._s(t.page)+" ")])]),e("li",{staticClass:"page-item",on:{click:[t.nextpage,t.loadRoom2]}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page+1))])]),t._m(1),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:[t.last,t.loadRoom2]}},[t._v(t._s(t.lastpage))])]),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:[t.nextpage,t.loadRoom2]}},[t._v("»")])])])])]):t._e()],1)},f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col ser3"},[e("h5",[t._v("1490 фильмов")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("...")])])}],h=e("bc3a"),g=e.n(h),_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"card-deck deck"},t._l(t.movies,function(t){return e("div",{staticClass:"col-sm-3"},[e("router-link",{attrs:{to:{name:"Film",params:{id:t.id}}}},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.image,alt:"Card image cap"}})])])],1)}),0),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination example justify-content-center"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:[t.backpage,t.loadRoom]}},[t._v("«")])]),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link ",attrs:{href:"#"}},[t._v(t._s(t.page)+" ")])]),e("li",{staticClass:"page-item",on:{click:[t.nextpage,t.loadRoom]}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page+1))])]),t._m(0),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:[t.last,t.loadRoom]}},[t._v(t._s(t.lastpage))])]),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:[t.nextpage,t.loadRoom]}},[t._v("»")])])])])])},b=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("...")])])}],C={name:"Movies",data:function(){return{searchHide:"",movies:null,page:1,lastpage:"",url_prev:"",url_first:"",url_next:"",url_last:"",url:"",num:"2"}},created:function(){this.loadRoom()},methods:{loadRoom:function(){var t=this;this.url="http://localhost:8000/api/movies/?page="+this.page,g.a.get(this.url).then(function(a){return t.movies=a.data.results,t.lastpage=a.data.meta.pagination.pages,t.page=a.data.meta.pagination.page})},nextpage:function(){this.page<this.lastpage&&(this.page=this.page+1)},backpage:function(){this.page>1&&(this.page=this.page-1)},last:function(){this.page=this.lastpage}}},y=C,k=Object(o["a"])(y,_,b,!1,null,null,null),x=k.exports,w={name:"filters",components:{Movies:x},data:function(){return{show:!1,show2:!1,country:"",genre:"",year:"",movies:null,page:1,lastpage:"",url_prev:"",url_first:"",url_next:"",url_last:"",url:"",num:"2",ord:"-rank",sort:"По дате добавления"}},methods:{showFilter:function(){this.show=!0},hideFilter:function(){this.show=!1},loadRoom:function(){var t=this;this.show2=!0,this.url="http://127.0.0.1:8000/api/movies/?search="+this.country+"+"+this.genre+"+"+this.year+"&page="+this.page,g.a.get(this.url).then(function(a){return t.movies=a.data.results,t.lastpage=a.data.meta.pagination.pages,t.page=a.data.meta.pagination.page})},loadRoom2:function(){var t=this;this.sort="По рейтингу",this.show2=!0,this.url="http://127.0.0.1:8000/api/movies/?ordering="+this.ord+"&page="+this.page,console.log(this.url),g.a.get(this.url).then(function(a){return t.movies=a.data.results,t.lastpage=a.data.meta.pagination.pages,t.page=a.data.meta.pagination.page})},nextpage:function(){this.page<this.lastpage&&(this.page=this.page+1)},backpage:function(){this.page>1&&(this.page=this.page-1)},last:function(){this.page=this.lastpage}}},j=w,M=(e("c86a"),Object(o["a"])(j,v,f,!1,null,null,null)),E=M.exports,O=e("6180"),$={name:"home",components:{Navbar:m["a"],Filters:E,contact:O["a"]}},R=$,S=Object(o["a"])(R,p,d,!1,null,null,null),P=S.exports;s["a"].use(u["a"]);var F=new u["a"]({routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/film/:id",name:"Film",component:function(){return e.e("about").then(e.bind(null,"4344"))}},{path:"/top/",name:"Top",component:function(){return e.e("about").then(e.bind(null,"ec27"))}},{path:"/top/top250",name:"top250",component:function(){return e.e("about").then(e.bind(null,"d0af"))}},{path:"/top/top250/:id",name:"Film250",component:function(){return e.e("about").then(e.bind(null,"0091"))}},{path:"/top/BestSerials",name:"BestSerials",component:function(){return e.e("about").then(e.bind(null,"aff5"))}},{path:"/top/BestSerials/:id",name:"BestSerial",component:function(){return e.e("about").then(e.bind(null,"6d40"))}}]});e("4989"),e("ab8b");s["a"].config.productionTip=!0,new s["a"]({router:F,render:function(t){return t(c)}}).$mount("#app")},"5dfc":function(t,a,e){"use strict";var s=e("30d6"),i=e.n(s);i.a},6180:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello container123"},[e("footer",{staticClass:"page-footer font-small blue pt-4"},[e("div",{staticClass:"container-fluid text-center text-md-left"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 mt-md-0 mt-3"},[e("h5",{staticClass:"text-uppercase"},[t._v("Описание")]),e("p",[t._v("На "+t._s(t.url)+" большой выбор фильмов онлайн в HD качестве, здесь вы найдете, и сможете посмотреть последние новинки кино, комедии, боевики, фантастику онлайн, ужасы смотреть онлайн HD,исторические фильмы приключения онлайн, криминал смотреть HD, мелодрамы онлайн, русские фильмы, сериалы бесплатно и без регистрации, без смс.")])]),e("hr",{staticClass:"clearfix w-100 d-md-none pb-3"}),e("div",{staticClass:"col-md-3 mb-md-0 mb-3"},[e("h5",{staticClass:"text-uppercase"},[t._v("ссылки")]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("\n              Правообладателям\n            ")]),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[t._v("\n                    Ресурс "+t._s(t.url)+" всегда открыт для сотрудничества с правообладателями.Если Ваши исключительные права на объекты авторской собственности нарушаются каким-либо образом с использованием данного ресурса (размещение информации, защищенной авторским правом), администрация готова оказать Вам содействие и удалить с сайта соответствующие материалы."),e("br"),e("br"),t._v("\nПри возникновении спорных ситуаций мы просим Вас прислать нам письмо в электронном виде, где необходимо указать следующее:"),e("br"),e("br"),t._v("\n1. Документальное подтверждение Ваших прав на материал, защищённый авторским правом:\n• отсканированный документ с печатью, либо\n• email с официального почтового домена компании правообладателя, либо\n• иная информация, позволяющая однозначно идентифицировать Вас как правообладателя данного материала."),e("br"),e("br"),t._v("\n2. Прямые ссылки на страницы сайта, которые содержат данные, опубликованные с нарушением авторских прав.\n\nПри получении письма, содержащего данное подтверждение, мы удалим с сайта защищенный авторским правом контент.По всем вопросам просим Вас обращаться через форму «Обратная связь»\n"),e("br"),e("br"),t._v("\nПочта для связи: mykinodomru@gmail.com"),e("br"),e("br"),t._v("\nС уважением, администрация сайта "+t._s(t.url)+"\n                  ")]),t._m(1)])])])]),t._m(2)])])])]),t._m(3)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Для правообладателей")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Закрыть")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("button",{staticClass:"btn btn-primary mar",attrs:{type:"button","data-toggle":"modal","data-target":"#Modal"}},[t._v("\n              Обратная связь\n            ")]),e("div",{staticClass:"modal fade",attrs:{id:"Modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Обратная связь")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[t._v("\n                    Почта: mykinodomru@gmail.com\n                  ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Закрыть")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-copyright text-center py-3"},[t._v("Сайт:\n    "),e("a",{attrs:{href:"http://mykinodom.ru"}},[t._v("MyKinoDom.ru")])])}],n={name:"contact",data:function(){return{url:"MyKinoDom.ru"}}},o=n,r=(e("82c7"),e("2877")),l=Object(r["a"])(o,s,i,!1,null,null,null);a["a"]=l.exports},"64a9":function(t,a,e){},"82c7":function(t,a,e){"use strict";var s=e("3ac7"),i=e.n(s);i.a},c86a:function(t,a,e){"use strict";var s=e("0a5d"),i=e.n(s);i.a},d178:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("a",{on:{click:t.ref123}},[e("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kino")])],1),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active",on:{click:t.ref123}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Главная")])],1),e("router-link",{attrs:{to:{name:"Top"}}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Рекомендации")])])])],1),e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Поиск","aria-label":"Search"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}}),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:t.search}},[t._v("Найти")])])])]),t.results?e("div",{staticClass:"result"},[e("h2",[t._v("Результаты поиска:")]),e("div",{staticClass:"card-deck"},t._l(t.results,function(t){return e("div",{key:t.id,staticClass:"col-sm-3"},[e("router-link",{attrs:{to:{name:"Film",params:{id:t.id}}}},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.image,alt:"Card image cap"}})])])],1)}),0),e("div",{staticClass:"mar container"},[e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:t.hide}},[t._v("Убрать")])])]):t._e()])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],n=e("bc3a"),o=e.n(n),r={name:"Navbar",props:{msg:String},data:function(){return{title:"",url:"http://127.0.0.1:8000/api/movies/?search=",results:null}},methods:{search:function(){var t=this;this.title=this.title[0].toUpperCase()+this.title.slice(1),console.log(this.title),this.url="http://127.0.0.1:8000/api/movies/?search="+this.title,o.a.get(this.url).then(function(a){return t.results=a.data.results}),console.log(this.url)},hide:function(){this.results=null},ref123:function(){document.location.reload(!0)},upper:function(t){return t?t[0].toUpperCase()+t.slice(1):t}}},l=r,c=(e("5dfc"),e("2877")),u=Object(c["a"])(l,s,i,!1,null,null,null);a["a"]=u.exports}});
//# sourceMappingURL=app.0e6b3767.js.map