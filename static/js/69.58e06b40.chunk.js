"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[69],{69:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r,i,a,o,s,c,l,d=t(861),p=t(439),u=t(757),h=t.n(u),x=t(686),f=t.n(x),v=(t(81),t(791)),m=t(689),g=t(168),j=t(444),w=t(87),Z=j.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),b=j.ZP.ul(i||(i=(0,g.Z)(["\n  \n  display: flex;\n  gap: 16px;\n"]))),y=(0,j.ZP)(w.OL)(a||(a=(0,g.Z)(["\n  padding: 4px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: yellow;\n    background-color: blue;\n  }\n"]))),k=j.ZP.div(o||(o=(0,g.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  display: flex;\n  gap: 20px;\n"]))),I=j.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),_=j.ZP.h3(c||(c=(0,g.Z)(["\n  margin-bottom: 8px;\n"]))),M=t(184),J=function(e){var n=e.movie[0],t=n.genres,r=n.overview,i=n.title,a=n.vote_average,o=n.release_date,s=n.poster_path;return(0,M.jsxs)(k,{children:[(0,M.jsx)("div",{children:(0,M.jsx)("img",{src:s?"".concat("https://www.themoviedb.org/t/p/w300_and_h450_bestv2").concat(s):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:""})}),(0,M.jsxs)(I,{children:[(0,M.jsx)("h2",{children:"".concat(i," (").concat(o.slice(0,4),")")}),(0,M.jsx)("div",{children:(0,M.jsxs)("p",{children:["User score:"," ".concat(Math.floor(10*a),"%")]})}),(0,M.jsxs)("div",{children:[(0,M.jsx)(_,{children:"Overview"}),(0,M.jsx)("p",{children:r})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)(_,{children:"Genres"}),(0,M.jsx)("p",{children:t.map((function(e){return e.name})).join(" ")})]})]})]})},P=t(690),Y=t(128),z=(0,j.ZP)(w.rU)(l||(l=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),N=function(e){var n=e.to,t=e.children;return(0,M.jsxs)(z,{to:n,children:[(0,M.jsx)(Y.jTe,{size:"24"}),t]})},T=function(){var e,n,t=(0,m.UO)().movieId,r=(0,v.useState)([]),i=(0,p.Z)(r,2),a=i[0],o=i[1],s=null!==(e=null===(n=(0,m.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/goit-react-hw-05-movies/movies",c=s.pathname,l=(0,v.useCallback)((0,d.Z)(h().mark((function e(){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,P.Pg)(t);case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, no data movie.");case 6:o([n]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r=e.t0,f().Notify.failure(r.message);case 12:case 13:case"end":return e.stop()}var r}),e,null,[[0,9]])}))),[t]);return(0,v.useEffect)((function(){l()}),[l]),(0,M.jsxs)("main",{children:[(0,M.jsxs)(N,{to:s,children:["Back to ",c.endsWith("/movies")?"movies":"home"]}),a.length>0&&(0,M.jsx)(J,{movie:a}),(0,M.jsxs)(Z,{children:[(0,M.jsx)("h2",{children:"Additional information"}),(0,M.jsxs)(b,{children:[(0,M.jsx)("li",{children:(0,M.jsx)(y,{to:"cast",state:{from:s},children:"Cast"})}),(0,M.jsx)("li",{children:(0,M.jsx)(y,{to:"reviews",state:{from:s},children:"Reviews"})})]})]}),(0,M.jsx)(v.Suspense,{fallback:(0,M.jsx)("div",{children:"Loading subpage..."}),children:(0,M.jsx)(m.j3,{})})]})}},690:function(e,n,t){t.d(n,{Hg:function(){return c},Pg:function(){return u},XT:function(){return d}});var r=t(861),i=t(757),a=t.n(i),o=t(243),s={headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhN2NkYjUyM2M1ZTdhYzlkNzBhMjMyZmMwZWJlYyIsInN1YiI6IjY0Y2E1MzFmZDM3MTk3MDEzOTc4YjNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RBHU2kDT3Swele15gvAopB0TouomeG_bY1uLDLfirLg")}};function c(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",s);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t='https://api.themoviedb.org/3/search/movie?query="'.concat(n,'"'),e.next=3,o.Z.get(t,s);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n),e.next=3,o.Z.get(t,s);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=69.58e06b40.chunk.js.map