function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}t(module.exports,"Treeselect",(function(){return pe}),(function(t){return pe=t}));var e={};t(e,"TreeselectInput",(function(){return M}),(function(t){return M=t}));const s={arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',arrowDown:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',attention:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',cross:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',partialCheck:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},i=(t,e)=>{if(e.innerHTML="","string"==typeof t)e.innerHTML=t;else{const s=t.cloneNode(!0);e.appendChild(s)}},l=t=>{const e=t?Object.assign({},t):{};return Object.keys(s).forEach((t=>{e[t]||(e[t]=s[t])})),e};var n,o,a,c,r,h,d,u,p,m,f,v,w,g,b,E,k,C,y,L,S,_,x,T,O,A,H,B,N=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},P=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};class M{focus(){setTimeout((()=>N(this,a,"f").focus()),0)}blur(){this.isOpened&&N(this,n,"m",f).call(this),this.clearSearch(),N(this,a,"f").blur()}updateValue(t){this.value=t,N(this,n,"m",d).call(this),N(this,n,"m",m).call(this)}removeItem(t){this.value=this.value.filter((e=>e.id!==t)),N(this,n,"m",B).call(this),N(this,n,"m",d).call(this),N(this,n,"m",m).call(this)}clear(){this.value=[],N(this,n,"m",B).call(this),N(this,n,"m",d).call(this),this.clearSearch()}openClose(){N(this,n,"m",f).call(this)}clearSearch(){this.searchText="",this.searchCallback(""),N(this,n,"m",m).call(this)}constructor({value:t,showTags:e,tagsCountText:s,clearable:i,isAlwaysOpened:l,searchable:d,placeholder:u,disabled:p,isSingleSelect:m,id:f,iconElements:w,inputCallback:b,searchCallback:E,openCallback:k,closeCallback:C,keydownCallback:y,focusCallback:S,blurCallback:_,nameChangeCallback:T}){n.add(this),o.set(this,void 0),a.set(this,void 0),c.set(this,void 0),r.set(this,void 0),this.value=t,this.showTags=e,this.tagsCountText=s,this.searchable=d,this.placeholder=u,this.clearable=i,this.isAlwaysOpened=l,this.disabled=p,this.isSingleSelect=m,this.id=f,this.iconElements=w,this.isOpened=!1,this.searchText="",P(this,o,N(this,n,"m",g).call(this),"f"),P(this,a,N(this,n,"m",L).call(this),"f"),P(this,c,N(this,n,"m",x).call(this),"f"),P(this,r,null,"f"),this.inputCallback=b,this.searchCallback=E,this.openCallback=k,this.closeCallback=C,this.keydownCallback=y,this.focusCallback=S,this.blurCallback=_,this.nameChangeCallback=T,this.srcElement=N(this,n,"m",v).call(this,N(this,o,"f"),N(this,a,"f"),N(this,c,"f")),N(this,n,"m",h).call(this)}}o=new WeakMap,a=new WeakMap,c=new WeakMap,r=new WeakMap,n=new WeakSet,h=function(){N(this,n,"m",d).call(this),N(this,n,"m",m).call(this),N(this,n,"m",u).call(this)},d=function(){if(N(this,o,"f").innerHTML="",this.showTags){N(this,o,"f").append(...N(this,n,"m",b).call(this));const e=(t=this.value).reduce(((e,{name:s},i)=>(e+=s,i<t.length-1&&(e+=", "),e)),"");this.nameChangeCallback(e)}else{const t=N(this,n,"m",y).call(this);N(this,o,"f").appendChild(t),this.nameChangeCallback(t.innerHTML)}var t;N(this,o,"f").appendChild(N(this,a,"f"))},u=function(){const t=[];N(this,c,"f").innerHTML="",this.clearable&&t.push(N(this,n,"m",T).call(this)),this.isAlwaysOpened||t.push(N(this,n,"m",A).call(this,this.isOpened)),t.length&&N(this,c,"f").append(...t)},p=function(){if(!this.isAlwaysOpened&&N(this,r,"f")){const t=this.isOpened?this.iconElements.arrowUp:this.iconElements.arrowDown;i(t,N(this,r,"f"))}},m=function(){var t;(null===(t=this.value)||void 0===t?void 0:t.length)?(N(this,a,"f").removeAttribute("placeholder"),this.srcElement.classList.remove("treeselect-input--value-not-selected")):(N(this,a,"f").setAttribute("placeholder",this.placeholder),this.srcElement.classList.add("treeselect-input--value-not-selected")),this.searchable?this.srcElement.classList.remove("treeselect-input--unsearchable"):this.srcElement.classList.add("treeselect-input--unsearchable"),this.isSingleSelect?this.srcElement.classList.add("treeselect-input--is-single-select"):this.srcElement.classList.remove("treeselect-input--is-single-select"),N(this,a,"f").value=this.searchText},f=function(){this.isOpened=!this.isOpened,N(this,n,"m",p).call(this),this.isOpened?this.openCallback():this.closeCallback()},v=function(t,e,s){const i=document.createElement("div");return i.classList.add("treeselect-input"),i.setAttribute("tabindex","-1"),i.addEventListener("mousedown",(t=>N(this,n,"m",w).call(this,t))),i.addEventListener("focus",(()=>this.focusCallback()),!0),i.addEventListener("blur",(()=>this.blurCallback()),!0),t.appendChild(e),i.append(t,s),i},w=function(t){t.preventDefault(),t.stopPropagation(),this.isOpened||N(this,n,"m",f).call(this),this.focus()},g=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__tags"),t},b=function(){return this.value.map((t=>{const e=document.createElement("div");e.classList.add("treeselect-input__tags-element"),e.setAttribute("tabindex","-1"),e.setAttribute("tag-id",t.id.toString()),e.setAttribute("title",t.name);const s=N(this,n,"m",k).call(this,t.name),i=N(this,n,"m",C).call(this);return e.addEventListener("mousedown",(e=>N(this,n,"m",E).call(this,e,t.id))),e.append(s,i),e}))},E=function(t,e){t.preventDefault(),t.stopPropagation(),this.removeItem(e),this.focus()},k=function(t){const e=document.createElement("span");return e.classList.add("treeselect-input__tags-name"),e.innerHTML=t,e},C=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-cross"),i(this.iconElements.cross,t),t},y=function(){const t=document.createElement("span");if(t.classList.add("treeselect-input__tags-count"),!this.value.length)return t.innerHTML="",t.setAttribute("title",""),t;const e=1===this.value.length?this.value[0].name:`${this.value.length} ${this.tagsCountText}`;return t.innerHTML=e,t.setAttribute("title",e),t},L=function(){const t=document.createElement("input");return t.classList.add("treeselect-input__edit"),this.id&&t.setAttribute("id",this.id),this.searchable&&!this.disabled||t.setAttribute("readonly","readonly"),this.disabled&&t.setAttribute("tabindex","-1"),t.addEventListener("keydown",(t=>N(this,n,"m",S).call(this,t))),t.addEventListener("input",(e=>N(this,n,"m",_).call(this,e,t))),t},S=function(t){t.stopPropagation(),"Backspace"!==t.key||this.searchText.length||!this.value.length||this.showTags||this.clear(),"Backspace"===t.key&&!this.searchText.length&&this.value.length&&this.removeItem(this.value[this.value.length-1].id),"Space"!==t.code||this.searchText&&this.searchable||N(this,n,"m",f).call(this),"Enter"===t.key&&t.preventDefault(),this.keydownCallback(t.key),"Tab"!==t.key&&this.focus()},_=function(t,e){t.stopPropagation();const s=this.searchText,i=e.value.trim();if(0!==s.length||0!==i.length){if(this.searchable){const e=t.target.value;this.searchCallback(e),this.isOpened||N(this,n,"m",f).call(this)}else e.value="";this.searchText=e.value}else e.value=""},x=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__operators"),t},T=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__clear"),t.setAttribute("tabindex","-1"),i(this.iconElements.clear,t),t.addEventListener("mousedown",(t=>N(this,n,"m",O).call(this,t))),t},O=function(t){t.preventDefault(),t.stopPropagation(),(this.searchText.length||this.value.length)&&this.clear(),this.focus()},A=function(t){P(this,r,document.createElement("span"),"f"),N(this,r,"f").classList.add("treeselect-input__arrow");const e=t?this.iconElements.arrowUp:this.iconElements.arrowDown;return i(e,N(this,r,"f")),N(this,r,"f").addEventListener("mousedown",(t=>N(this,n,"m",H).call(this,t))),N(this,r,"f")},H=function(t){t.stopPropagation(),t.preventDefault(),this.focus(),N(this,n,"m",f).call(this)},B=function(){this.inputCallback(this.value)};var G={};t(G,"TreeselectList",(function(){return Pt}),(function(t){return Pt=t}));const W=(t,e,s="",i=0)=>t.reduce(((t,l)=>{var n;const o=!!(null===(n=l.children)||void 0===n?void 0:n.length),a=i>=e&&o,c=i>e;if(t.push({id:l.value,name:l.name,childOf:s,isGroup:o,checked:!1,isPartialChecked:!1,level:i,isClosed:a,hidden:c}),o){const s=W(l.children,e,l.value,i+1);t.push(...s)}return t}),[]),V=({id:t,checked:e},s)=>{s.forEach((i=>{i.childOf===t&&(i.checked=null==e||e,i.isPartialChecked=!1,i.isGroup&&V(i,s))}))},j=(t,e)=>{const s=e.find((e=>e.id===t)),i=e.filter((t=>t.childOf===(null==s?void 0:s.id)));if(!s)return;const l=i.every((t=>t.checked)),n=i.some((t=>t.isPartialChecked||t.checked))&&!l,o=!l&&!n;l&&(s.checked=!0,s.isPartialChecked=!1),n&&(s.checked=!1,s.isPartialChecked=!0),o&&(s.checked=!1,s.isPartialChecked=!1),s.childOf&&j(s.childOf,e)},q=({id:t,isGroup:e,childOf:s,checked:i},l,n)=>{e&&V({id:t,checked:i},l),s&&!n&&j(s,l)},D=(t,e)=>e.reduce(((s,i)=>(i.childOf===t&&(s.push(i),i.isGroup&&s.push(...D(i.id,e))),s)),[]),I=(t,e)=>e.reduce(((s,i)=>(i.id===t&&(s.push(i),i.childOf&&s.push(...I(i.childOf,e))),s)),[]),$=t=>{const{onlyGroupsIds:e,allItems:s}=t.reduce(((t,e)=>e.checked?(e.isGroup&&t.onlyGroupsIds.push(e.id),t.allItems.push(e),t):t),{onlyGroupsIds:[],allItems:[]});return s.filter((t=>!e.some((e=>e===t.childOf))))},R=(t,{id:e,isClosed:s})=>{t.filter((t=>t.childOf===e)).forEach((e=>{e.hidden=null!=s&&s,e.isGroup&&!e.isClosed&&R(t,{id:e.id,isClosed:s})}))},z=(t,e)=>{const s=((t,e)=>t.reduce(((s,i)=>{if(i.name.toLowerCase().includes(e.toLowerCase())){if(s.push(i),i.isGroup){const e=D(i.id,t);s.push(...e)}if(i.childOf){const e=I(i.childOf,t);s.push(...e)}}return s}),[]))(t,e);t.forEach((e=>{s.some((t=>t.id===e.id))?(e.isGroup&&(e.isClosed=!1,R(t,e)),e.hidden=!1):e.hidden=!0}))},U=(t,e,s)=>{(t=>{t.forEach((t=>{t.checked=!1,t.isPartialChecked=!1}))})(e);e.filter((e=>t.some((t=>t===e.id)))).forEach((t=>{t.checked=!0,t.isPartialChecked=!1,q(t,e,s)}))};var Y,F,J,K,X,Q,Z,tt,et,st,it,lt,nt,ot,at,ct,rt,ht,dt,ut,pt,mt,ft,vt,wt,gt,bt,Et,kt=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},Ct=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};let yt=[];const Lt=(t,e,s)=>{t.forEach((i=>{const l=e.querySelector(`[input-id="${i.id}"]`),n=Bt(l);l.checked=i.checked,St(i,n),_t(i,n),xt(i,n,s),Tt(i,n),At(i,n,t),Ot(i,l,s)})),Ht(t,e)},St=(t,e)=>{t.checked?e.classList.add("treeselect-list__item--checked"):e.classList.remove("treeselect-list__item--checked"),Array.isArray(yt)&&yt[0]===t.id?e.classList.add("treeselect-list__item--single-selected"):e.classList.remove("treeselect-list__item--single-selected")},_t=(t,e)=>{t.isPartialChecked?e.classList.add("treeselect-list__item--partial-checked"):e.classList.remove("treeselect-list__item--partial-checked")},xt=(t,e,s)=>{if(t.isGroup){const l=e.querySelector(".treeselect-list__item-icon"),n=t.isClosed?s.arrowRight:s.arrowDown;i(n,l),t.isClosed?e.classList.add("treeselect-list__item--closed"):e.classList.remove("treeselect-list__item--closed")}},Tt=(t,e)=>{t.hidden?e.classList.add("treeselect-list__item--hidden"):e.classList.remove("treeselect-list__item--hidden")},Ot=(t,e,s)=>{const l=e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");t.checked?i(s.check,l):t.isPartialChecked?i(s.partialCheck,l):l.innerHTML=""},At=(t,e,s)=>{if(0===t.level){const i=s.some((e=>e.isGroup&&e.level===t.level)),l=!t.isGroup&&i?"20px":"5px";e.style.paddingLeft=t.isGroup?"0":l}else e.style.paddingLeft=t.isGroup?20*t.level+"px":20*t.level+20+"px";e.setAttribute("level",t.level.toString()),e.setAttribute("group",t.isGroup.toString())},Ht=(t,e)=>{const s=t.some((t=>!t.hidden)),i=e.querySelector(".treeselect-list__empty");s?i.classList.add("treeselect-list__empty--hidden"):i.classList.remove("treeselect-list__empty--hidden")},Bt=t=>t.parentNode.parentNode,Nt=(t,e)=>e.find((e=>e.id.toString()===t));class Pt{updateValue(t){var e,s,i,l,n;this.value=t,yt=this.isSingleSelect?this.value:[],e=t,s=this.flattedOptions,i=this.srcElement,l=this.iconElements,n=this.isSingleSelect,U(e,s,n),Lt(s,i,l),kt(this,Y,"m",bt).call(this)}updateSearchValue(t){if(t===this.searchText)return;const e=""===this.searchText&&""!==t;this.searchText=t,e&&(this.flattedOptionsBeforeSearch=JSON.parse(JSON.stringify(this.flattedOptions))),""===this.searchText&&(this.flattedOptions=this.flattedOptionsBeforeSearch.map((t=>{const e=this.flattedOptions.find((e=>e.id===t.id));return e.isClosed=t.isClosed,e.hidden=t.hidden,e})),this.flattedOptionsBeforeSearch=[]),this.searchText&&z(this.flattedOptions,t),Lt(this.flattedOptions,this.srcElement,this.iconElements),this.focusFirstListElement()}callKeyAction(t){Ct(this,J,!1,"f");const e=this.srcElement.querySelector(".treeselect-list__item--focused");"Enter"===t&&e&&e.dispatchEvent(new Event("mousedown")),"ArrowLeft"!==t&&"ArrowRight"!==t||kt(this,Y,"m",K).call(this,e,t),"ArrowDown"!==t&&"ArrowUp"!==t||kt(this,Y,"m",X).call(this,e,t)}focusFirstListElement(){const t="treeselect-list__item--focused",e=this.srcElement.querySelector(`.${t}`),s=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Bt(t)).display));if(!s.length)return;e&&e.classList.remove(t);Bt(s[0]).classList.add(t)}constructor({options:t,value:e,openLevel:s,listSlotHtmlComponent:i,emptyText:l,isSingleSelect:n,iconElements:o,showCount:a,disabledBranchNode:c,inputCallback:r,arrowClickCallback:h,mouseupCallback:d}){Y.add(this),F.set(this,null),J.set(this,!0),this.options=t,this.value=e,this.openLevel=null!=s?s:0,this.listSlotHtmlComponent=null!=i?i:null,this.emptyText=null!=l?l:"No results found...",this.isSingleSelect=null!=n&&n,this.showCount=null!=a&&a,this.disabledBranchNode=null!=c&&c,this.iconElements=o,this.searchText="",this.flattedOptions=W(this.options,this.openLevel),this.flattedOptionsBeforeSearch=this.flattedOptions,this.selectedNodes={nodes:[],groupedNodes:[]},this.srcElement=kt(this,Y,"m",Q).call(this),this.inputCallback=r,this.arrowClickCallback=h,this.mouseupCallback=d,this.updateValue(this.value),(t=>{const{duplications:e}=t.reduce(((t,e)=>(t.allItems.some((t=>t.toString()===e.id.toString()))&&t.duplications.push(e.id),t.allItems.push(e.id),t)),{duplications:[],allItems:[]});e.length&&console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`)})(this.flattedOptions)}}F=new WeakMap,J=new WeakMap,Y=new WeakSet,K=function(t,e){if(!t)return;const s=t.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"),i=Nt(s,this.flattedOptions),l=t.querySelector(".treeselect-list__item-icon");"ArrowLeft"===e&&!i.isClosed&&i.isGroup&&l.dispatchEvent(new Event("mousedown")),"ArrowRight"===e&&i.isClosed&&i.isGroup&&l.dispatchEvent(new Event("mousedown"))},X=function(t,e){var s,i,l;const n=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Bt(t)).display));if(n.length)if(t){const t=n.findIndex((t=>Bt(t).classList.contains("treeselect-list__item--focused")));Bt(n[t]).classList.remove("treeselect-list__item--focused");const o="ArrowDown"===e?t+1:t-1,a="ArrowDown"===e?0:n.length-1,c=null!==(s=n[o])&&void 0!==s?s:n[a],r=!n[o],h=Bt(c);h.classList.add("treeselect-list__item--focused");const d=this.srcElement.getBoundingClientRect(),u=h.getBoundingClientRect();if(r&&"ArrowDown"===e)return void this.srcElement.scroll(0,0);if(r&&"ArrowUp"===e)return void this.srcElement.scroll(0,this.srcElement.scrollHeight);const p=null!==(l=null===(i=this.listSlotHtmlComponent)||void 0===i?void 0:i.clientHeight)&&void 0!==l?l:0;if(d.y+d.height<u.y+u.height+p)return void this.srcElement.scroll(0,this.srcElement.scrollTop+u.height);if(d.y>u.y)return void this.srcElement.scroll(0,this.srcElement.scrollTop-u.height)}else{Bt(n[0]).classList.add("treeselect-list__item--focused")}},Q=function(){const t=kt(this,Y,"m",Z).call(this),e=kt(this,Y,"m",st).call(this,this.options);t.append(...e);const s=kt(this,Y,"m",it).call(this);s&&t.append(s);const i=kt(this,Y,"m",lt).call(this);return t.append(i),t},Z=function(){const t=document.createElement("div");return t.classList.add("treeselect-list"),this.isSingleSelect&&t.classList.add("treeselect-list--single-select"),this.disabledBranchNode&&t.classList.add("treeselect-list--disabled-branch-node"),t.addEventListener("mouseout",(t=>kt(this,Y,"m",tt).call(this,t))),t.addEventListener("mousemove",(()=>kt(this,Y,"m",et).call(this))),t.addEventListener("mouseup",(()=>this.mouseupCallback()),!0),t},tt=function(t){t.stopPropagation(),kt(this,F,"f")&&kt(this,J,"f")&&kt(this,F,"f").classList.add("treeselect-list__item--focused")},et=function(){Ct(this,J,!0,"f")},st=function t(e){return e.reduce(((e,s)=>{var i;if(null===(i=s.children)||void 0===i?void 0:i.length){const i=kt(this,Y,"m",nt).call(this,s),l=kt(this,Y,"m",t).call(this,s.children);return i.append(...l),e.push(i),e}const l=kt(this,Y,"m",ot).call(this,s,!1);return e.push(l),e}),[])},it=function(){if(!this.listSlotHtmlComponent)return null;const t=document.createElement("div");return t.classList.add("treeselect-list__slot"),t.appendChild(this.listSlotHtmlComponent),t},lt=function(){const t=document.createElement("div");t.classList.add("treeselect-list__empty"),t.setAttribute("title",this.emptyText);const e=document.createElement("span");e.classList.add("treeselect-list__empty-icon"),i(this.iconElements.attention,e);const s=document.createElement("span");return s.classList.add("treeselect-list__empty-text"),s.innerHTML=this.emptyText,t.append(e,s),t},nt=function(t){const e=document.createElement("div");e.setAttribute("group-container-id",t.value.toString()),e.classList.add("treeselect-list__group-container");const s=kt(this,Y,"m",ot).call(this,t,!0);return e.appendChild(s),e},ot=function(t,e){const s=kt(this,Y,"m",at).call(this,t);if(e){const t=kt(this,Y,"m",dt).call(this);s.appendChild(t),s.classList.add("treeselect-list__item--group")}const i=kt(this,Y,"m",pt).call(this,t),l=kt(this,Y,"m",mt).call(this,t,e);return s.append(i,l),s},at=function(t){const e=document.createElement("div");return e.setAttribute("tabindex","-1"),e.setAttribute("title",t.name),e.classList.add("treeselect-list__item"),e.addEventListener("mouseover",(()=>kt(this,Y,"m",ct).call(this,e)),!0),e.addEventListener("mouseout",(()=>kt(this,Y,"m",rt).call(this,e)),!0),e.addEventListener("mousedown",(e=>kt(this,Y,"m",ht).call(this,e,t))),e},ct=function(t){kt(this,J,"f")&&kt(this,Y,"m",gt).call(this,!0,t)},rt=function(t){kt(this,J,"f")&&(kt(this,Y,"m",gt).call(this,!1,t),Ct(this,F,t,"f"))},ht=function(t,e){t.preventDefault(),t.stopPropagation();const s=t.target.querySelector(".treeselect-list__item-checkbox");s.checked=!s.checked,kt(this,Y,"m",vt).call(this,s,e)},dt=function(){const t=document.createElement("span");return t.setAttribute("tabindex","-1"),t.classList.add("treeselect-list__item-icon"),i(this.iconElements.arrowDown,t),t.addEventListener("mousedown",(t=>kt(this,Y,"m",ut).call(this,t))),t},ut=function(t){t.preventDefault(),t.stopPropagation(),kt(this,Y,"m",wt).call(this,t)},pt=function(t){const e=document.createElement("div");e.classList.add("treeselect-list__item-checkbox-container");const s=document.createElement("span");s.classList.add("treeselect-list__item-checkbox-icon"),s.innerHTML="";const i=document.createElement("input");return i.setAttribute("tabindex","-1"),i.setAttribute("type","checkbox"),i.setAttribute("input-id",t.value.toString()),i.classList.add("treeselect-list__item-checkbox"),e.append(s,i),e},mt=function(t,e){const s=document.createElement("label");if(s.innerHTML=t.name,s.classList.add("treeselect-list__item-label"),e&&this.showCount){const e=kt(this,Y,"m",ft).call(this,t);s.appendChild(e)}return s},ft=function(t){const e=document.createElement("span"),s=this.flattedOptions.filter((e=>e.childOf===t.value));return e.innerHTML=`(${s.length})`,e.classList.add("treeselect-list__item-label-counter"),e},vt=function(t,e){const s=this.flattedOptions.find((t=>t.id===e.value));if(s)if((null==s?void 0:s.isGroup)&&this.disabledBranchNode){const e=Bt(t).querySelector(".treeselect-list__item-icon");null==e||e.dispatchEvent(new Event("mousedown"))}else{if(this.isSingleSelect){const[t]=yt;if(s.id===t)return;yt=[s.id],U([s.id],this.flattedOptions,this.isSingleSelect)}else s.checked=t.checked,s.isPartialChecked=!1,q(s,this.flattedOptions,this.isSingleSelect);Lt(this.flattedOptions,this.srcElement,this.iconElements),kt(this,Y,"m",Et).call(this)}},wt=function(t){var e,s,i;const l=null===(s=null===(e=t.target)||void 0===e?void 0:e.parentNode)||void 0===s?void 0:s.querySelector("[input-id]"),n=null!==(i=null==l?void 0:l.getAttribute("input-id"))&&void 0!==i?i:null,o=Nt(n,this.flattedOptions);o&&(o.isClosed=!o.isClosed,R(this.flattedOptions,o),Lt(this.flattedOptions,this.srcElement,this.iconElements),this.arrowClickCallback())},gt=function(t,e){const s="treeselect-list__item--focused";if(t){const t=Array.from(this.srcElement.querySelectorAll(`.${s}`));t.length&&t.forEach((t=>t.classList.remove(s))),e.classList.add(s)}else e.classList.remove(s)},bt=function(){var t;this.selectedNodes={nodes:(t=this.flattedOptions,t.filter((t=>t.checked&&!t.isGroup))),groupedNodes:$(this.flattedOptions)}},Et=function(){kt(this,Y,"m",bt).call(this),this.inputCallback(this.selectedNodes),this.value=this.selectedNodes.nodes.map((t=>t.id))};var Mt,Gt,Wt,Vt,jt,qt,Dt,It,$t,Rt,zt,Ut,Yt,Ft,Jt,Kt,Xt,Qt,Zt,te,ee,se,ie,le,ne,oe,ae,ce,re=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},he=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};const de=t=>t.map((t=>t.id)),ue=t=>t?Array.isArray(t)?t:[t]:[];class pe{mount(){var t;this.destroy();const{container:e,list:s,input:i}=re(this,Mt,"m",$t).call(this);this.srcElement=e,he(this,Gt,s,"f"),he(this,Wt,i,"f"),he(this,jt,this.scrollWindowHandler.bind(this),"f"),he(this,qt,this.scrollWindowHandler.bind(this),"f"),he(this,Dt,this.focusWindowHandler.bind(this),"f"),he(this,It,this.blurWindowHandler.bind(this),"f"),this.alwaysOpen&&(null===(t=re(this,Wt,"f"))||void 0===t||t.openClose()),this.disabled?this.srcElement.classList.add("treeselect--disabled"):this.srcElement.classList.remove("treeselect--disabled")}updateValue(t){var e;const s=re(this,Gt,"f");if(s){const i=ue(t);s.updateValue(i);const{groupedNodes:l,nodes:n}=s.selectedNodes,o=this.grouped||this.isSingleSelect?l:n;null===(e=re(this,Wt,"f"))||void 0===e||e.updateValue(o)}}destroy(){this.srcElement&&(re(this,Mt,"m",Zt).call(this),this.srcElement.innerHTML="",this.srcElement=null,re(this,Mt,"m",ie).call(this,!0))}focus(){re(this,Wt,"f")&&re(this,Wt,"f").focus()}toggleOpenClose(){re(this,Wt,"f")&&(re(this,Wt,"f").openClose(),re(this,Wt,"f").focus())}scrollWindowHandler(){this.updateListPosition()}focusWindowHandler(t){var e,s,i;(null===(e=this.srcElement)||void 0===e?void 0:e.contains(t.target))||(null===(s=re(this,Gt,"f"))||void 0===s?void 0:s.srcElement.contains(t.target))||(null===(i=re(this,Wt,"f"))||void 0===i||i.blur(),re(this,Mt,"m",ie).call(this,!1),re(this,Mt,"m",ee).call(this,!1))}blurWindowHandler(){var t;null===(t=re(this,Wt,"f"))||void 0===t||t.blur(),re(this,Mt,"m",ie).call(this,!1),re(this,Mt,"m",ee).call(this,!1)}updateListPosition(){var t;const e=this.srcElement,s=null===(t=re(this,Gt,"f"))||void 0===t?void 0:t.srcElement;if(!e||!s)return;s.style.transform="";const{y:i,height:l}=s.getBoundingClientRect(),{x:n,y:o,height:a,width:c}=e.getBoundingClientRect(),r=window.innerHeight-o-a;let h=o>r&&o>=l&&r<l;"auto"!==this.direction&&(h="top"===this.direction),this.appendToBody&&(s.style.transform=h?`translateY(${o-i-l}px)`:`translateY(${o+a-i}px)`,s.style.width=`${c}px`,s.style.left=`${n+window.scrollX}px`);const d=h?"top":"bottom";s.getAttribute("direction")!==d&&(s.setAttribute("direction",d),re(this,Mt,"m",te).call(this,h,this.appendToBody))}constructor({parentHtmlContainer:t,value:e,options:s,openLevel:i,appendToBody:n,alwaysOpen:o,showTags:a,tagsCountText:c,clearable:r,searchable:h,placeholder:d,grouped:u,isGroupedValue:p,listSlotHtmlComponent:m,disabled:f,emptyText:v,staticList:w,id:g,isSingleSelect:b,showCount:E,disabledBranchNode:k,direction:C,iconElements:y,inputCallback:L,openCallback:S,closeCallback:_,nameChangeCallback:x}){Mt.add(this),Gt.set(this,null),Wt.set(this,null),Vt.set(this,null),jt.set(this,null),qt.set(this,null),Dt.set(this,null),It.set(this,null),(({parentHtmlContainer:t,staticList:e,appendToBody:s,isSingleSelect:i,value:l,direction:n})=>{t||console.error("Validation: parentHtmlContainer prop is required!"),e&&s&&console.error("Validation: You should set staticList to false if you use appendToBody!"),i&&Array.isArray(l)&&console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"),i||Array.isArray(l)||console.error("Validation: you should pass an array as a value!"),n&&"auto"!==n&&"bottom"!==n&&"top"!==n&&console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!")})({parentHtmlContainer:t,value:e,staticList:w,appendToBody:n,isSingleSelect:b}),this.parentHtmlContainer=t,this.value=ue(e),this.options=null!=s?s:[],this.openLevel=null!=i?i:0,this.appendToBody=null!=n&&n,this.alwaysOpen=!(!o||f),this.showTags=null==a||a,this.tagsCountText=null!=c?c:"elements selected",this.clearable=null==r||r,this.searchable=null==h||h,this.placeholder=null!=d?d:"Search...",this.grouped=null==u||u,this.isGroupedValue=null!=p&&p,this.listSlotHtmlComponent=null!=m?m:null,this.disabled=null!=f&&f,this.emptyText=null!=v?v:"No results found...",this.staticList=!(!w||this.appendToBody),this.id=null!=g?g:"",this.isSingleSelect=null!=b&&b,this.showCount=null!=E&&E,this.disabledBranchNode=null!=k&&k,this.direction=null!=C?C:"auto",this.iconElements=l(y),this.inputCallback=L,this.openCallback=S,this.closeCallback=_,this.nameChangeCallback=x,this.groupedValue=[],this.isListOpened=!1,this.selectedName="",this.srcElement=null,this.mount()}}Gt=new WeakMap,Wt=new WeakMap,Vt=new WeakMap,jt=new WeakMap,qt=new WeakMap,Dt=new WeakMap,It=new WeakMap,Mt=new WeakSet,$t=function(){const t=this.parentHtmlContainer;t.classList.add("treeselect");const s=new(0,G.TreeselectList)({options:this.options,value:this.value,openLevel:this.openLevel,listSlotHtmlComponent:this.listSlotHtmlComponent,emptyText:this.emptyText,isSingleSelect:this.isSingleSelect,showCount:this.showCount,disabledBranchNode:this.disabledBranchNode,iconElements:this.iconElements,inputCallback:t=>re(this,Mt,"m",Jt).call(this,t),arrowClickCallback:()=>re(this,Mt,"m",Kt).call(this),mouseupCallback:()=>{var t;return null===(t=re(this,Wt,"f"))||void 0===t?void 0:t.focus()}}),{groupedNodes:i,nodes:l}=s.selectedNodes,n=new(0,e.TreeselectInput)({value:this.grouped||this.isSingleSelect?i:l,showTags:this.showTags,tagsCountText:this.tagsCountText,clearable:this.clearable,isAlwaysOpened:this.alwaysOpen,searchable:this.searchable,placeholder:this.placeholder,disabled:this.disabled,isSingleSelect:this.isSingleSelect,id:this.id,iconElements:this.iconElements,inputCallback:t=>re(this,Mt,"m",Rt).call(this,t),searchCallback:t=>re(this,Mt,"m",Ut).call(this,t),openCallback:()=>re(this,Mt,"m",Qt).call(this),closeCallback:()=>re(this,Mt,"m",Zt).call(this),keydownCallback:t=>re(this,Mt,"m",zt).call(this,t),focusCallback:()=>re(this,Mt,"m",Yt).call(this),blurCallback:()=>re(this,Mt,"m",Ft).call(this),nameChangeCallback:t=>re(this,Mt,"m",Xt).call(this,t)});return this.appendToBody&&he(this,Vt,new ResizeObserver((()=>this.updateListPosition())),"f"),t.append(n.srcElement),{container:t,list:s,input:n}},Rt=function(t){var e,s,i,l,n;const o=de(t);null===(e=re(this,Gt,"f"))||void 0===e||e.updateValue(o);const a=null===(i=null===(s=re(this,Gt,"f"))||void 0===s?void 0:s.selectedNodes)||void 0===i?void 0:i.nodes,c=null===(n=null===(l=re(this,Gt,"f"))||void 0===l?void 0:l.selectedNodes)||void 0===n?void 0:n.groupedNodes;this.value=a?de(a):[],this.groupedValue=c?de(c):[],re(this,Mt,"m",ne).call(this)},zt=function(t){var e;this.isListOpened&&(null===(e=re(this,Gt,"f"))||void 0===e||e.callKeyAction(t))},Ut=function(t){var e;null===(e=re(this,Gt,"f"))||void 0===e||e.updateSearchValue(t),this.updateListPosition()},Yt=function(){re(this,Mt,"m",ee).call(this,!0),re(this,Dt,"f")&&re(this,Dt,"f")&&re(this,It,"f")&&(document.addEventListener("mousedown",re(this,Dt,"f"),!0),document.addEventListener("focus",re(this,Dt,"f"),!0),window.addEventListener("blur",re(this,It,"f")))},Ft=function(){setTimeout((()=>{var t,e;const s=null===(t=re(this,Wt,"f"))||void 0===t?void 0:t.srcElement.contains(document.activeElement),i=null===(e=re(this,Gt,"f"))||void 0===e?void 0:e.srcElement.contains(document.activeElement);s||i||this.blurWindowHandler()}),1)},Jt=function(t){var e,s,i,l;const{groupedNodes:n,nodes:o}=t,a=this.grouped||this.isSingleSelect?n:o;null===(e=re(this,Wt,"f"))||void 0===e||e.updateValue(a),this.value=de(o),this.groupedValue=de(n),this.isSingleSelect&&!this.alwaysOpen&&(null===(s=re(this,Wt,"f"))||void 0===s||s.openClose(),null===(i=re(this,Wt,"f"))||void 0===i||i.clearSearch()),null===(l=re(this,Wt,"f"))||void 0===l||l.focus(),re(this,Mt,"m",ne).call(this)},Kt=function(){var t;null===(t=re(this,Wt,"f"))||void 0===t||t.focus(),this.updateListPosition()},Xt=function(t){this.selectedName!==t&&(this.selectedName=t,re(this,Mt,"m",oe).call(this))},Qt=function(){var t;this.isListOpened=!0,re(this,jt,"f")&&re(this,qt,"f")&&(window.addEventListener("scroll",re(this,jt,"f"),!0),window.addEventListener("resize",re(this,qt,"f"))),re(this,Gt,"f")&&this.srcElement&&(this.appendToBody?(document.body.appendChild(re(this,Gt,"f").srcElement),null===(t=re(this,Vt,"f"))||void 0===t||t.observe(this.srcElement)):this.srcElement.appendChild(re(this,Gt,"f").srcElement),this.updateListPosition(),re(this,Mt,"m",se).call(this,!0),re(this,Gt,"f").focusFirstListElement(),re(this,Mt,"m",ae).call(this))},Zt=function(){var t;if(this.alwaysOpen)return;if(this.isListOpened=!1,re(this,jt,"f")&&re(this,qt,"f")&&(window.removeEventListener("scroll",re(this,jt,"f"),!0),window.removeEventListener("resize",re(this,qt,"f"))),!re(this,Gt,"f")||!this.srcElement)return;(this.appendToBody?document.body.contains(re(this,Gt,"f").srcElement):this.srcElement.contains(re(this,Gt,"f").srcElement))&&(this.appendToBody?(document.body.removeChild(re(this,Gt,"f").srcElement),null===(t=re(this,Vt,"f"))||void 0===t||t.disconnect()):this.srcElement.removeChild(re(this,Gt,"f").srcElement),re(this,Mt,"m",se).call(this,!1),re(this,Mt,"m",ce).call(this))},te=function(t,e){if(!re(this,Gt,"f")||!re(this,Wt,"f"))return;const s=e?"treeselect-list--top-to-body":"treeselect-list--top",i=e?"treeselect-list--bottom-to-body":"treeselect-list--bottom";t?(re(this,Gt,"f").srcElement.classList.add(s),re(this,Gt,"f").srcElement.classList.remove(i),re(this,Wt,"f").srcElement.classList.add("treeselect-input--top"),re(this,Wt,"f").srcElement.classList.remove("treeselect-input--bottom")):(re(this,Gt,"f").srcElement.classList.remove(s),re(this,Gt,"f").srcElement.classList.add(i),re(this,Wt,"f").srcElement.classList.remove("treeselect-input--top"),re(this,Wt,"f").srcElement.classList.add("treeselect-input--bottom"))},ee=function(t){re(this,Wt,"f")&&re(this,Gt,"f")&&(t?(re(this,Wt,"f").srcElement.classList.add("treeselect-input--focused"),re(this,Gt,"f").srcElement.classList.add("treeselect-list--focused")):(re(this,Wt,"f").srcElement.classList.remove("treeselect-input--focused"),re(this,Gt,"f").srcElement.classList.remove("treeselect-list--focused")))},se=function(t){var e,s,i,l;t?null===(e=re(this,Wt,"f"))||void 0===e||e.srcElement.classList.add("treeselect-input--opened"):null===(s=re(this,Wt,"f"))||void 0===s||s.srcElement.classList.remove("treeselect-input--opened"),this.staticList?null===(i=re(this,Gt,"f"))||void 0===i||i.srcElement.classList.add("treeselect-list--static"):null===(l=re(this,Gt,"f"))||void 0===l||l.srcElement.classList.remove("treeselect-list--static")},ie=function(t){re(this,jt,"f")&&re(this,qt,"f")&&re(this,Dt,"f")&&re(this,It,"f")&&(this.alwaysOpen&&!t||(window.removeEventListener("scroll",re(this,jt,"f"),!0),window.removeEventListener("resize",re(this,qt,"f"))),document.removeEventListener("mousedown",re(this,Dt,"f"),!0),document.removeEventListener("focus",re(this,Dt,"f"),!0),window.removeEventListener("blur",re(this,It,"f")))},le=function(){return((t,e)=>{if(e){const[e]=t;return e}return t})(this.isGroupedValue||this.isSingleSelect?this.groupedValue:this.value,this.isSingleSelect)},ne=function(){var t;const e=re(this,Mt,"m",le).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("input",{detail:e})),this.inputCallback&&this.inputCallback(e)},oe=function(){var t;null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("name-change",{detail:this.selectedName})),this.nameChangeCallback&&this.nameChangeCallback(this.selectedName)},ae=function(){var t;const e=re(this,Mt,"m",le).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("open",{detail:e})),this.openCallback&&this.openCallback(e)},ce=function(){var t;const e=re(this,Mt,"m",le).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("close",{detail:e})),this.closeCallback&&this.closeCallback(e)};