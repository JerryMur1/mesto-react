(this["webpackJsonpcalorie-zen"]=this["webpackJsonpcalorie-zen"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(5),i=a.n(r),o=(a(14),a(2)),l=a(4),d=a(8),u=a.p+"static/media/Edit-Button.8667ac4a.svg",p=a.p+"static/media/Vector5.a086f758.svg",m=a.p+"static/media/Vector2.49570bcb.svg",h=a.p+"static/media/Vector3.d86bb2ed.svg",b=(a.p,a.p+"static/media/Close-icon.118074ba.svg"),j=(a.p,a.p+"static/media/Group.cbc09a89.svg");var _=function(e){var t=e.name,a=e.likes,n=e.url,c=e.onCardClick;return Object(s.jsxs)("div",{className:"element",children:[Object(s.jsx)("button",{className:"button button_type_delete",type:"button",children:Object(s.jsx)("img",{className:"element__delete",src:j,alt:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435"})}),Object(s.jsx)("button",{className:"button button_type_image",onClick:function(){c({url:n,name:t})},type:"button",children:Object(s.jsx)("img",{className:"element__image",src:n,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(s.jsxs)("div",{className:"element__group",children:[Object(s.jsx)("h2",{className:"element__title",children:t}),Object(s.jsxs)("div",{className:"element__like_groupe",children:[Object(s.jsx)("button",{className:"button button_type_like",type:"button",children:Object(s.jsx)("img",{className:"element__like",src:m,alt:"\u041b\u0430\u0439\u043a"})}),Object(s.jsx)("p",{className:"element__like_number",children:a.length})]})]})]})};var O=function(e){var t=e.onCardClick,a=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,r=e.userName,i=e.userDescription,o=e.userAvatar,m=e.cards;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"profile",children:[Object(s.jsxs)("div",{className:"profile__groupe",children:[Object(s.jsx)("img",{className:"profile__image",src:p}),Object(s.jsx)("button",{className:"button_type_avatar",onClick:c,children:Object(s.jsx)("img",{className:"profile__avatar",alt:"\u041a\u0443\u0441\u0442\u043e",src:o,style:{backgroundImage:"url(".concat(o,")")}})})]}),Object(s.jsxs)("div",{className:"profile__info",children:[Object(s.jsxs)("div",{className:"profile__text",children:[Object(s.jsx)("h1",{className:"profile__title",children:r}),Object(s.jsx)("p",{className:"profile__subtitle",children:i})]}),Object(s.jsx)("button",{className:"button button_type_edit",type:"button",onClick:a,children:Object(s.jsx)("img",{className:"profile__edit-button",src:u,alt:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(s.jsx)("button",{className:"button button_type_add",type:"button",onClick:n,children:Object(s.jsx)("img",{className:"profile__add-button",src:h,alt:"\u043f\u043b\u044e\u0441"})})]}),Object(s.jsx)("section",{className:"elements",children:m.map((function(e){var a=e.id,n=Object(d.a)(e,["id"]);return Object(s.jsx)(_,Object(l.a)(Object(l.a)({},n),{},{onCardClick:t}),a)}))})]})};var f=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},x=a.p+"static/media/Vector.a307e1c4.svg";var g=function(){return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("img",{className:"header__logo",alt:"\u041c\u0435\u0441\u0442\u043e",src:x})})};var v=function(e){var t=e.title,a=e.name,n=e.isOpen,c=e.children,r=e.onClose,i=e.button;return Object(s.jsx)("section",{className:"popup popup_".concat(a," ").concat(n),children:Object(s.jsx)("div",{className:"popup__container",children:Object(s.jsxs)("form",{className:"popup__content",name:a,children:[Object(s.jsx)("button",{className:"button button_type_close",onClick:r,type:"button",children:Object(s.jsx)("img",{src:b,alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f",className:"popup__close-icon"})}),Object(s.jsx)("h2",{className:"popup__title",children:t}),c,Object(s.jsx)("button",{className:"button button_type_save",type:"submit",children:i})]})})})};var N=function(e){var t=e.card,a=e.onClose;return Object(s.jsx)("section",{className:"popup popup_modal ".concat(t&&"popup_is-opened"),children:Object(s.jsxs)("div",{className:"popup__group",children:[Object(s.jsx)("button",{className:"button button_type_close",type:"button",onClick:a,children:Object(s.jsx)("img",{src:b,alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f",className:"popup__close-icon"})}),Object(s.jsx)("img",{className:"popup__image",src:t?t.url:"popup_is-opened",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(s.jsx)("p",{className:"popup__subtitle",children:t?t.name:"popup_is-opened"})]})})},y=a(6),k=a(7),C=new(function(){function e(t){var a=t.baseUrl,s=t.headers,n=t._id;Object(y.a)(this,e),this._baseUrl=a,this._headers=s,this._id=n}return Object(k.a)(e,[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{method:"GET",headers:this._headers}).then(this._handleResOk)}},{key:"addCards",value:function(e){return fetch(this._baseUrl+"cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.firstname,link:e.secondname})}).then(this._handleResOk)}},{key:"addUserId",value:function(e){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.firstname,about:e.secondname,avatar:e.avatar})}).then(this._handleResOk)}},{key:"getUserId",value:function(){return fetch(this._baseUrl+"users/me",{method:"GET",headers:this._headers}).then(this._handleResOk)}},{key:"addAvatarId",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleResOk)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserId()])}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+e,{method:"DELETE",headers:this._headers}).then(this._handleResOk)}},{key:"likeCard",value:function(e){return fetch(this._baseUrl+"cards/likes/"+e,{method:"PUT",headers:this._headers}).then(this._handleResOk)}},{key:"deleteLike",value:function(e){return fetch(this._baseUrl+"cards/likes/"+e,{method:"DELETE",headers:this._headers}).then(this._handleResOk)}},{key:"_handleResOk",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-18/",headers:{authorization:"a40cc85c-64a0-4b1f-ad4a-926989d9eacf","Content-Type":"application/json"}});var E=function(){var e=c.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=c.a.useState([]),i=Object(o.a)(r,2),l=i[0],d=i[1],u=c.a.useState(""),p=Object(o.a)(u,2),m=p[0],h=p[1],b=c.a.useState(""),j=Object(o.a)(b,2),_=j[0],x=j[1];c.a.useContext(""),c.a.useEffect((function(){C.getInitialCards().then((function(e){d(e.map((function(e){return{id:e._id,likes:e.likes,url:e.link,name:e.name}})))})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){C.getUserId().then((function(e){n(e.name),h(e.about),x(e.avatar)})).catch((function(e){console.log(e)}))}),[]);var y=c.a.useState(!1),k=Object(o.a)(y,2),E=k[0],U=k[1],L=c.a.useState(!1),S=Object(o.a)(L,2),P=S[0],I=S[1],T=c.a.useState(!1),A=Object(o.a)(T,2),R=A[0],F=A[1],D=c.a.useState(null),q=Object(o.a)(D,2),J=q[0],V=q[1];function w(){F(!1),I(!1),U(!1),V(null)}return Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)(g,{}),Object(s.jsx)(v,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",name:"add",isOpen:R?"popup_is-opened":"",onClose:w,button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,type:"text",name:"firstname",minLength:"2",maxLength:"40",id:"name-profile",className:"popup__name popup__name_type_title"}),Object(s.jsx)("span",{id:"name-profile-error",className:"error"}),Object(s.jsx)("input",{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"text",name:"secondname",minLength:"2",maxLength:"200",id:"secondname-profile",className:"popup__name popup__name_type_subtitle"}),Object(s.jsx)("span",{id:"secondname-profile-error",className:"error"})]})}),Object(s.jsx)(v,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"avatar",isOpen:P?"popup_is-opened":"",onClose:w,button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"text",name:"firstname",minLength:"2",maxLength:"40",id:"name-profile",className:"popup__name popup__name_type_title"}),Object(s.jsx)("span",{id:"name-profile-error",className:"error"})]})}),Object(s.jsx)(v,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:E?"popup_is-opened":"",onClose:w,button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"\u0418\u043c\u044f",required:!0,type:"text",name:"firstname",minLength:"2",maxLength:"40",id:"name-profile",className:"popup__name popup__name_type_title"}),Object(s.jsx)("span",{id:"name-profile-error",className:"error"}),Object(s.jsx)("input",{placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,type:"text",name:"secondname",minLength:"2",maxLength:"200",id:"secondname-profile",className:"popup__name popup__name_type_subtitle"}),Object(s.jsx)("span",{id:"secondname-profile-error",className:"error"})]})}),Object(s.jsx)(v,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",name:"delete",button:"\u0414\u0430"}),Object(s.jsx)(O,{onCardClick:function(e){V(e)},userName:a,onEditProfile:function(){U(!0)},onAddPlace:function(){F(!0)},onEditAvatar:function(){I(!0)},userAvatar:_,userDescription:m,cards:l}),Object(s.jsx)(N,{card:J,onClose:w}),Object(s.jsx)(f,{})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root")),U()}},[[15,1,2]]]);
//# sourceMappingURL=main.f6eb1c01.chunk.js.map