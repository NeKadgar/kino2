webpackJsonp([2],{NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")(null,i,!1,function(t){e("OnCC")},null,null).exports,o=e("/ocq"),l=e("lfLh"),r=e("mtWM"),c=e.n(r),v={name:"Movies",data:function(){return{searchHide:"",movies:null,page:1,lastpage:"",url_prev:"",url_first:"",url_next:"",url_last:"",url:"",num:"2"}},created:function(){this.loadRoom()},methods:{loadRoom:function(){var t=this;this.url="//mykinodom.ru/api/movies/?page="+this.page,c.a.get(this.url).then(function(a){return t.movies=a.data.results,t.lastpage=a.data.meta.pagination.pages,t.page=a.data.meta.pagination.page})},nextpage:function(){this.page<this.lastpage&&(this.page=this.page+1)},backpage:function(){this.page>1&&(this.page=this.page-1)},last:function(){this.page=this.lastpage}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"card-deck deck"},t._l(t.movies,function(t){return e("div",{staticClass:"col-sm-3"},[e("router-link",{attrs:{to:{name:"Film",params:{id:t.id}}}},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.image,alt:"Card image cap"}})])])],1)}),0),t._v(" "),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination example justify-content-center"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:[t.backpage,t.loadRoom]}},[t._v("«")])]),t._v(" "),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link ",attrs:{href:"#"}},[t._v(t._s(t.page)+" ")])]),t._v(" "),e("li",{staticClass:"page-item",on:{click:[t.nextpage,t.loadRoom]}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page+1))])]),t._v(" "),t._m(0),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:[t.last,t.loadRoom]}},[t._v(t._s(t.lastpage))])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:[t.nextpage,t.loadRoom]}},[t._v("»")])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[this._v("...")])])}]},p={name:"filters",components:{Movies:e("VU/8")(v,u,!1,null,null,null).exports},data:function(){return{show:!1,show2:!1,country:"",genre:"",year:"",movies:null,page:1,lastpage:"",url_prev:"",url_first:"",url_next:"",url_last:"",url:"",num:"2",ord:"-rank",sort:"По дате добавления"}},methods:{showFilter:function(){this.show=!0},hideFilter:function(){this.show=!1},loadRoom:function(){var t=this;this.show2=!0,this.url="//mykinodom.ru/api/movies/?search="+this.country+"+"+this.genre+"+"+this.year+"&ordering="+this.ord+"&page="+this.page,c.a.get(this.url).then(function(a){return t.movies=a.data.results,t.lastpage=a.data.meta.pagination.pages,t.page=a.data.meta.pagination.page})},loadRoom4:function(){var t=this;this.show2=!0,this.page=1,this.url="//mykinodom.ru/api/movies/?search="+this.country+"+"+this.genre+"+"+this.year+"&ordering="+this.ord+"&page="+this.page,c.a.get(this.url).then(function(a){return t.movies=a.data.results,t.lastpage=a.data.meta.pagination.pages,t.page=a.data.meta.pagination.page})},loadRoom2:function(){var t=this;this.sort="По рейтингу",this.show2=!0,this.url="//mykinodom.ru/api/movies/?ordering="+this.ord+"&page="+this.page,c.a.get(this.url).then(function(a){return t.movies=a.data.results,t.lastpage=a.data.meta.pagination.pages,t.page=a.data.meta.pagination.page})},nextpage:function(){this.page<this.lastpage&&(this.page=this.page+1)},backpage:function(){this.page>1&&(this.page=this.page-1)},last:function(){this.page=this.lastpage}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home container"},[t.show?e("form",{staticClass:"form"},[e("h2",{staticClass:"ser"},[t._v("Подобрать"),e("div",{staticClass:"left",on:{click:t.hideFilter}},[t._v("×")])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[t._v("\n        Жанры\n        "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"browser-default custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.genre=a.target.multiple?e:e[0]}}},[e("option",{attrs:{selected:""}}),t._v(" "),e("option",[t._v("Аниме")]),t._v(" "),e("option",[t._v("Анимация")]),t._v(" "),e("option",[t._v("Биография")]),t._v(" "),e("option",[t._v("Боевик")]),t._v(" "),e("option",[t._v("Вестерн")]),t._v(" "),e("option",[t._v("Военный")]),t._v(" "),e("option",[t._v("Детектив")]),t._v(" "),e("option",[t._v("Документальный")]),t._v(" "),e("option",[t._v("Драма")]),t._v(" "),e("option",[t._v("Ужасы")]),t._v(" "),e("option",[t._v("Исторический")]),t._v(" "),e("option",[t._v("Криминальный")]),t._v(" "),e("option",[t._v("Комедия")]),t._v(" "),e("option",[t._v("Музыкальный")]),t._v(" "),e("option",{attrs:{value:"Анимация"}},[t._v("Мульфильм")]),t._v(" "),e("option",[t._v("Приключения")]),t._v(" "),e("option",[t._v("Роман")]),t._v(" "),e("option",[t._v("Семейный")]),t._v(" "),e("option",[t._v("Спорт")]),t._v(" "),e("option",[t._v("Триллер")]),t._v(" "),e("option",[t._v("Фантастика")]),t._v(" "),e("option",[t._v("Фэнтези")]),t._v(" "),e("option",[t._v("Другой")])])]),t._v(" "),e("div",{staticClass:"col"},[t._v("\n        Страна\n        "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"browser-default custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country=a.target.multiple?e:e[0]}}},[e("option",{attrs:{selected:""}}),t._v(" "),e("option",[t._v("Россия")]),t._v(" "),e("option",[t._v("СССР")]),t._v(" "),e("option",[t._v("Канада")]),t._v(" "),e("option",[t._v("Великобритания")]),t._v(" "),e("option",[t._v("США")]),t._v(" "),e("option",[t._v("Австралия")]),t._v(" "),e("option",[t._v("Бельгия")]),t._v(" "),e("option",[t._v("Бразилия")]),t._v(" "),e("option",[t._v("Германия")]),t._v(" "),e("option",[t._v("Ирландия")]),t._v(" "),e("option",[t._v("Испания")]),t._v(" "),e("option",[t._v("Италия")]),t._v(" "),e("option",[t._v("Мексика")]),t._v(" "),e("option",[t._v("Франция")]),t._v(" "),e("option",[t._v("Япония")]),t._v(" "),e("option",[t._v("Другая")])])]),t._v(" "),e("div",{staticClass:"col"},[t._v("\n        Год\n\n        "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"custom-select",attrs:{type:"year",name:"rank",maxlength:"4",value:"2019",step:"1"},domProps:{value:t.year},on:{input:function(a){a.target.composing||(t.year=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"mar"},[e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:t.loadRoom4}},[t._v("Подобрать")])])]):t._e(),t._v(" "),e("div",{staticClass:"row row2"},[t._m(0),t._v(" "),e("div",{staticClass:"col"},[t.show?t._e():e("button",{staticClass:"btn btn-primary my-2 my-sm-0 btn123",attrs:{type:"submit"},on:{click:t.showFilter}},[t._v("Подобрать")])]),t._v(" "),e("div",{staticClass:"col ser2"},[e("select",{staticClass:"browser-default custom-select custom-select2",on:{click:t.loadRoom2}},[e("option",{attrs:{selected:""}},[e("div",[t._v(t._s(t.sort))])])])])]),t._v(" "),t.show2?t._e():e("Movies"),t._v(" "),t.show2?e("div",[e("div",{staticClass:"card-deck deck"},t._l(t.movies,function(t){return e("div",{staticClass:"col-sm-3"},[e("router-link",{attrs:{to:{name:"Film",params:{id:t.id}}}},[e("div",{staticClass:"card",attrs:{width:"360px",height:"518px"}},[e("img",{staticClass:"card-img-top img-fluid",attrs:{width:"360px",height:"518px",src:t.image,alt:"Card image cap"}})])])],1)}),0),t._v(" "),e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination example justify-content-center"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"},on:{click:[t.backpage,t.loadRoom]}},[t._v("«")])]),t._v(" "),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link ",attrs:{href:"#"}},[t._v(t._s(t.page)+" ")])]),t._v(" "),e("li",{staticClass:"page-item",on:{click:[t.nextpage,t.loadRoom]}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page+1))])]),t._v(" "),t._m(1),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:[t.last,t.loadRoom]}},[t._v(t._s(t.lastpage))])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:[t.nextpage,t.loadRoom]}},[t._v("»")])])])])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col ser3"},[a("h5",[this._v("1490 фильмов")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[this._v("...")])])}]},m=e("VU/8")(p,d,!1,null,null,null).exports,_=e("S4JM"),h={name:"home",components:{Navbar:l.a,Filters:m,contact:_.a}},g={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"home"},[a("Navbar"),this._v(" "),a("Filters"),this._v(" "),a("contact")],1)},staticRenderFns:[]},f=e("VU/8")(h,g,!1,null,null,null).exports;s.a.use(o.a);var C=new o.a({routes:[{path:"/",name:"home",component:f},{path:"/film/:id",name:"Film",component:function(){return e.e(0).then(e.bind(null,"2XMq"))}},{path:"/Serials/",name:"Serials",component:function(){return e.e(0).then(e.bind(null,"Bb2f"))}},{path:"/Serials/:id",name:"Serial",component:function(){return e.e(0).then(e.bind(null,"bzPN"))}},{path:"/Anime/",name:"Anime",component:function(){return e.e(0).then(e.bind(null,"aUqy"))}},{path:"/Anime/:id",name:"AnimeView",component:function(){return e.e(0).then(e.bind(null,"T6cv"))}},{path:"/top/",name:"Top",component:function(){return e.e(0).then(e.bind(null,"0uBP"))}},{path:"/top/top250",name:"top250",component:function(){return e.e(0).then(e.bind(null,"HGZT"))}},{path:"/top/top250/:id",name:"Film250",component:function(){return e.e(0).then(e.bind(null,"Y1eB"))}},{path:"/top/BestSerials",name:"BestSerials",component:function(){return e.e(0).then(e.bind(null,"E8Fc"))}},{path:"/top/BestSerials/:id",name:"BestSerial",component:function(){return e.e(0).then(e.bind(null,"0dnV"))}}]});e("K3J8"),e("qb6w");s.a.config.productionTip=!0,new s.a({router:C,render:function(t){return t(n)}}).$mount("#app")},OnCC:function(t,a){},S4JM:function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello container123"},[e("footer",{staticClass:"page-footer font-small blue pt-4"},[e("div",{staticClass:"container-fluid text-center text-md-left"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 mt-md-0 mt-3"},[e("h5",{staticClass:"text-uppercase"},[t._v("Описание")]),t._v(" "),e("p",[t._v("На "+t._s(t.url)+" большой выбор фильмов онлайн в HD качестве, здесь вы найдете, и сможете посмотреть последние новинки кино, комедии, боевики, фантастику онлайн, ужасы смотреть онлайн HD,исторические фильмы приключения онлайн, криминал смотреть HD, мелодрамы онлайн, русские фильмы, сериалы бесплатно и без регистрации, без смс.")])]),t._v(" "),e("hr",{staticClass:"clearfix w-100 d-md-none pb-3"}),t._v(" "),e("div",{staticClass:"col-md-3 mb-md-0 mb-3"},[e("h5",{staticClass:"text-uppercase"},[t._v("ссылки")]),t._v(" "),e("ul",{staticClass:"list-unstyled"},[e("li",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("\n              Правообладателям\n            ")]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[t._v("\n                    Ресурс "+t._s(t.url)+" всегда открыт для сотрудничества с правообладателями.Если Ваши исключительные права на объекты авторской собственности нарушаются каким-либо образом с использованием данного ресурса (размещение информации, защищенной авторским правом), администрация готова оказать Вам содействие и удалить с сайта соответствующие материалы."),e("br"),e("br"),t._v("\nПри возникновении спорных ситуаций мы просим Вас прислать нам письмо в электронном виде, где необходимо указать следующее:"),e("br"),e("br"),t._v("\n1. Документальное подтверждение Ваших прав на материал, защищённый авторским правом:\n• отсканированный документ с печатью, либо\n• email с официального почтового домена компании правообладателя, либо\n• иная информация, позволяющая однозначно идентифицировать Вас как правообладателя данного материала."),e("br"),e("br"),t._v("\n2. Прямые ссылки на страницы сайта, которые содержат данные, опубликованные с нарушением авторских прав.\n\nПри получении письма, содержащего данное подтверждение, мы удалим с сайта защищенный авторским правом контент.По всем вопросам просим Вас обращаться через форму «Обратная связь»\n"),e("br"),e("br"),t._v("\nПочта для связи: mykinodomru@gmail.com"),e("br"),e("br"),t._v("\nС уважением, администрация сайта "+t._s(t.url)+"\n                  ")]),t._v(" "),t._m(1)])])])]),t._v(" "),t._m(2)])])])]),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Для правообладателей")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Закрыть")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("button",{staticClass:"btn btn-primary mar",attrs:{type:"button","data-toggle":"modal","data-target":"#Modal"}},[t._v("\n              Обратная связь\n            ")]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"Modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Обратная связь")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[t._v("\n                    Почта: mykinodomru@gmail.com\n                  ")]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Закрыть")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"footer-copyright text-center py-3"},[this._v("Сайт:\n    "),a("a",{attrs:{href:"http://mykinodom.ru"}},[this._v("MyKinoDom.ru")])])}]},i=e("VU/8")({name:"contact",data:function(){return{url:"MyKinoDom.ru"}}},s,!1,null,null,null);a.a=i.exports},eJrt:function(t,a){},lfLh:function(t,a,e){"use strict";var s=e("mtWM"),i=e.n(s),n={name:"Navbar",props:{msg:String},data:function(){return{title:"",url:"//mykinodom.ru/api/movies/?search=",results:null}},methods:{search:function(){var t=this;this.title=this.title[0].toUpperCase()+this.title.slice(1),this.url="//mykinodom.ru/api/movies/?search="+this.title,i.a.get(this.url).then(function(a){return t.results=a.data.results})},hide:function(){this.results=null},ref123:function(){document.location.reload(!0)},upper:function(t){return t?t[0].toUpperCase()+t.slice(1):t}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("div",{staticClass:"container"},[e("a",{on:{click:t.ref123}},[e("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kino")])],1),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active",on:{click:t.ref123}},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Фильмы")])],1),t._v(" "),e("li",{staticClass:"nav-item",on:{click:function(t){}}},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"Serials"}}},[t._v("Сериалы")])],1),t._v(" "),e("li",{staticClass:"nav-item",on:{click:function(t){}}},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"Anime"}}},[t._v("Аниме")])],1),t._v(" "),e("router-link",{attrs:{to:{name:"Top"}}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Рекомендации")])])])],1),t._v(" "),e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Поиск","aria-label":"Search"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:t.search}},[t._v("Найти")])])])])]),t._v(" "),t.results?e("div",{staticClass:"result container"},[e("h2",[t._v("Результаты поиска:")]),t._v(" "),e("p",[t._v("Если не нашли то что искали проверьте искали ли вы среди фильмов/сериалов/аниме")]),t._v(" "),e("div",{staticClass:"card-deck"},t._l(t.results,function(t){return e("div",{key:t.id,staticClass:"col-sm-3"},[e("router-link",{attrs:{to:{name:"Film",params:{id:t.id}}}},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.image,alt:"Card image cap"}})])])],1)}),0),t._v(" "),e("div",{staticClass:"mar container"},[e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:t.hide}},[t._v("Убрать")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var l=e("VU/8")(n,o,!1,function(t){e("eJrt")},null,null);a.a=l.exports},qb6w:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.4d6172c3f8a856b7013b.js.map