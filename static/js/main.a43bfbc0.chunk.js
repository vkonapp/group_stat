(this["webpackJsonpgroup-stat"]=this["webpackJsonpgroup-stat"]||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},193:function(e,t,a){e.exports=a(303)},294:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);a(194),a(220),a(222),a(223),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262);var n=a(0),r=a.n(n),c=a(70),l=a.n(c),s=a(29),o=a.n(s),i=a(71),u=a.n(i),p=a(103),m=a(43),d=a(109),f=a.n(d),h=a(108),E=a.n(h),b=(a(271),a(40)),g=a.n(b),k=a(41),v=a.n(k),j=a(73),O=a.n(j),x=a(72),A=a.n(x),w=a(104),y=a.n(w),C=a(106),G=a.n(C),P=a(105),S=a.n(P),_=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(g.a,{id:t},r.a.createElement(v.a,null,"Example"),n&&r.a.createElement(A.a,{title:"User Data Fetched with VK Bridge"},r.a.createElement(y.a,{before:n.photo_200?r.a.createElement(S.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.id:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(A.a,{title:"Navigation Example"},r.a.createElement(G.a,null,r.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"),r.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"userGroup"},"Show me the Persik, please"))))},K=a(42),V=a(53),I=a.n(V),U=a(51),W=a.n(U),z=a(52),N=a.n(z),T=a(107),B=a.n(T),J=(a(294),Object(K.b)()),D=function(e){return r.a.createElement(g.a,{id:e.id},r.a.createElement(v.a,{left:r.a.createElement(I.a,{onClick:e.go,"data-to":"home"},J===K.a?r.a.createElement(W.a,null):r.a.createElement(N.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:B.a,alt:"Persik The Cat"}))},F=Object(K.b)(),L=function(e){var t=e.id,a=e.go,n=e.fetchGroup;return r.a.createElement(g.a,{id:t},r.a.createElement(v.a,{left:r.a.createElement(I.a,{onClick:a,"data-to":"home"},F===K.a?r.a.createElement(W.a,null):r.a.createElement(N.a,null))},"Group List ",n))},M=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(m.a)(l,2),i=(s[0],s[1]),d=Object(n.useState)(null),h=Object(m.a)(d,2),b=h[0],g=h[1],k=Object(n.useState)(null),v=Object(m.a)(k,2),j=v[0],O=v[1],x=Object(n.useState)(r.a.createElement(E.a,{size:"large"})),A=Object(m.a)(x,2),w=A[0],y=A[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,g(t),e.next=6,o.a.send("VKWebAppGetAuthToken",{app_id:7715875,scope:"friends,status,groups"});case 6:a=e.sent,i(a),n=o.a.send("VKWebAppCallAPIMethod",{method:"groups.get",params:{extended:1,v:"5.86",access_token:{token:a}}}),O(n),y(null);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var C=function(e){c(e.currentTarget.dataset.to)};return r.a.createElement(f.a,{activePanel:a,popout:w},r.a.createElement(_,{id:"home",fetchedUser:b,go:C}),r.a.createElement(D,{id:"persik",go:C}),r.a.createElement(L,{id:"userGroup",fetchGroup:j,go:C}))};o.a.send("VKWebAppInit"),l.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.a43bfbc0.chunk.js.map