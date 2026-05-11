import{$ as he,$a as Co,$b as lt,A as us,Aa as Es,Ab as Un,B as en,Ba as xs,Bb as ae,C as gt,Ca as Ss,Cb as se,D as bo,Da as Ms,Db as Ns,E as ms,Ea as As,Eb as ks,F as fs,Fa as Is,Fb as xo,G as hs,Ga as Rs,Gb as So,H as ps,Ha as Te,Hb as q,I as Fi,Ia as Ue,Ib as Ui,J as Be,Ja as Fs,Jb as m,K as je,Ka as f,Kb as I,L as ye,La as nn,Lb as on,M as S,Ma as Ts,Mb as Ze,N as vt,Na as Pi,Nb as Ls,O as kn,Oa as rn,Ob as zn,P as v,Pa as tt,Pb as Bs,Q as W,Qa as _e,Qb as js,R as gs,Ra as j,Rb as U,S as b,Sa as Ni,Sb as K,T as M,Ta as ki,Tb as Mo,U as c,Ua as Os,Ub as zi,V as Rt,Va as Do,Vb as Pt,W as vs,Wa as w,Wb as ne,X as Fe,Xa as Y,Xb as Hn,Y as Se,Ya as R,Yb as Vs,Z as Me,Za as Oe,Zb as Us,_ as Ae,_a as Li,_b as zs,a as p,aa as k,ab as wo,ac as Hs,b as N,ba as Qe,bb as Vn,bc as ge,c as os,ca as bs,cb as Bi,cc as Ao,d as Xt,da as pe,db as bt,dc as $s,e as as,ea as Z,eb as re,ec as Gs,f as pt,fa as Ft,fb as $,g as te,ga as Ln,gb as G,h as Ee,ha as ys,hb as Eo,i as xe,ia as E,ib as ji,j as be,ja as _s,jb as de,k as _,ka as yo,kb as ue,l as Ai,la as st,lb as O,m as go,ma as Ve,mb as u,n as ss,na as Tt,nb as h,o as H,oa as _o,ob as V,p as ls,pa as J,pb as D,q as at,qa as Ds,qb as x,r as vo,ra as Bn,rb as Q,s as cs,sa as Cs,sb as yt,t as Ii,ta as et,tb as nt,u as Ri,ua as Ti,ub as P,v as ds,va as jn,vb as Ps,w as Re,wa as ws,wb as L,x as Jt,xa as Oi,xb as ze,y as Qt,ya as Ot,yb as ee,z as ce,za as tn,zb as Vi}from"./chunk-C3CT5KI6.js";var qs=null;function He(){return qs}function Io(t){qs??=t}var $n=class{},Gn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(Ws),providedIn:"platform"})}return t})();var Ws=(()=>{class t extends Gn{_location;_history;_doc=c(k);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return He().getBaseHref(this._doc)}onPopState(e){let i=He().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=He().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Ks(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Zs(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function _t(t){return t&&t[0]!=="?"?`?${t}`:t}var Nt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(Xs),providedIn:"root"})}return t})(),iu=new b(""),Xs=(()=>{class t extends Nt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??c(k).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ks(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+_t(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+_t(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+_t(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(M(Gn),M(iu,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var kt=(()=>{class t{_subject=new te;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=au(Zs(Ys(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+_t(i))}normalize(e){return t.stripTrailingSlash(ou(this._basePath,Ys(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_t(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_t(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=_t;static joinWithSlash=Ks;static stripTrailingSlash=Zs;static \u0275fac=function(i){return new(i||t)(M(Nt))};static \u0275prov=v({token:t,factory:()=>ru(),providedIn:"root"})}return t})();function ru(){return new kt(M(Nt))}function ou(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Ys(t){return t.replace(/\/index.html$/,"")}function au(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Ro=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(he);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(j(ki))};static \u0275dir=R({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ve]})}return t})();function Hi(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Lt=class{};var To="browser";function it(t){return t===To}var Qs=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new Fo(c(k),window)})}return t})(),Fo=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(N(p({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=mu(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(vt(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(N(p({},e),{left:r-a[0],top:o-a[1]}))}};function mu(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=i.nextNode()}}return null}var qn=class{_doc;constructor(n){this._doc=n}manager},$i=(()=>{class t extends qn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(M(k))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Wi=new b(""),ko=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof $i));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof $i);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new S(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(M(Wi),M(Z))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Oo="ng-app-id";function el(t){for(let n of t)n.remove()}function tl(t,n){let e=n.createElement("style");return e.textContent=t,e}function hu(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Oo}="${n}"],link[${Oo}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Oo),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function No(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Lo=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,hu(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,tl);i?.forEach(r=>this.addUsage(r,this.external,No))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(el(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])el(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,tl(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,No(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(M(k),M(Bn),M(jn,8),M(et))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Po={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Bo=/%COMP%/g;var il="%COMP%",pu=`_nghost-${il}`,gu=`_ngcontent-${il}`,vu=!0,bu=new b("",{factory:()=>vu});function yu(t){return gu.replace(Bo,t)}function _u(t){return pu.replace(Bo,t)}function rl(t,n){return n.map(e=>e.replace(Bo,t))}var Yn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new Wn(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof qi?r.applyToHost(e):r instanceof Zn&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,g=this.removeStylesOnCompDestroy,y=this.tracingService;switch(i.encapsulation){case Oi.Emulated:o=new qi(l,d,i,this.appId,g,a,s,y);break;case Oi.ShadowDom:return new Gi(l,e,i,a,s,this.nonce,y,d);case Oi.ExperimentalIsolatedShadowDom:return new Gi(l,e,i,a,s,this.nonce,y);default:o=new Zn(l,d,i,g,a,s,y);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(M(ko),M(Lo),M(Bn),M(bu),M(k),M(Z),M(jn),M(Pi,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Wn=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Po[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(nl(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(nl(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new S(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Po[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Po[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(nn.DashCase|nn.Important)?n.style.setProperty(e,i,r&nn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&nn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=He().getGlobalEventTarget(this.doc,n),!n))throw new S(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function nl(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Gi=class extends Wn{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=rl(i.id,d);for(let y of d){let F=document.createElement("style");a&&F.setAttribute("nonce",a),F.textContent=y,this.shadowRoot.appendChild(F)}let g=i.getExternalStyles?.();if(g)for(let y of g){let F=No(y,r);a&&F.setAttribute("nonce",a),this.shadowRoot.appendChild(F)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Zn=class extends Wn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles;this.styles=l?rl(l,d):d,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ts.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},qi=class extends Zn{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let d=r+"-"+i.id;super(n,e,i,o,a,s,l,d),this.contentAttr=yu(d),this.hostAttr=_u(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Zi=class t extends $n{supportsDOMEvents=!0;static makeCurrent(){Io(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=Cu();return e==null?null:wu(e)}resetBaseElement(){Kn=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Hi(document.cookie,n)}},Kn=null;function Cu(){return Kn=Kn||document.head.querySelector("base"),Kn?Kn.getAttribute("href"):null}function wu(t){return new URL(t,document.baseURI).pathname}var Eu=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),ol=["alt","control","meta","shift"],xu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Su={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},al=(()=>{class t extends qn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>He().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),ol.forEach(d=>{let g=i.indexOf(d);g>-1&&(i.splice(g,1),a+=d+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=xu[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ol.forEach(a=>{if(a!==r){let s=Su[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(M(k))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();async function jo(t,n,e){let i=p({rootComponent:t},Mu(n,e));return Hs(i)}function Mu(t,n){return{platformRef:n?.platformRef,appProviders:[...Tu,...t?.providers??[]],platformProviders:Fu}}function Au(){Zi.makeCurrent()}function Iu(){return new Ft}function Ru(){return Ds(document),document}var Fu=[{provide:et,useValue:To},{provide:Cs,useValue:Au,multi:!0},{provide:k,useFactory:Ru}];var Tu=[{provide:vs,useValue:"root"},{provide:Ft,useFactory:Iu},{provide:Wi,useClass:$i,multi:!0},{provide:Wi,useClass:al,multi:!0},Yn,Lo,ko,{provide:tt,useExisting:Yn},{provide:Lt,useClass:Eu},[]];var dt=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Uo=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},zo=class{encodeKey(n){return sl(n)}encodeValue(n){return sl(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Ou(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var Pu=/%(\d[a-f0-9])/gi,Nu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function sl(t){return encodeURIComponent(t).replace(Pu,(n,e)=>Nu[e]??n)}function Yi(t){return`${t}`}var ct=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new zo,n.fromString){if(n.fromObject)throw new S(2805,!1);this.map=Ou(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Yi):[Yi(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Yi(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Yi(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function ku(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ll(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function cl(t){return typeof Blob<"u"&&t instanceof Blob}function dl(t){return typeof FormData<"u"&&t instanceof FormData}function Lu(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var ul="Content-Type",ml="Accept",fl="text/plain",hl="application/json",Bu=`${hl}, ${fl}, */*`,an=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(ku(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new S(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new dt,this.context??=new Uo,!this.params)this.params=new ct,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ll(this.body)||cl(this.body)||dl(this.body)||Lu(this.body)?this.body:this.body instanceof ct?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||dl(this.body)?null:cl(this.body)?this.body.type||null:ll(this.body)?null:typeof this.body=="string"?fl:this.body instanceof ct?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?hl:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,d=n.redirect||this.redirect,g=n.credentials||this.credentials,y=n.referrer||this.referrer,F=n.integrity||this.integrity,le=n.referrerPolicy||this.referrerPolicy,ie=n.transferCache??this.transferCache,X=n.timeout??this.timeout,T=n.body!==void 0?n.body:this.body,B=n.withCredentials??this.withCredentials,oe=n.reportProgress??this.reportProgress,we=n.headers||this.headers,fe=n.params||this.params,Pn=n.context??this.context;return n.setHeaders!==void 0&&(we=Object.keys(n.setHeaders).reduce((Nn,It)=>Nn.set(It,n.setHeaders[It]),we)),n.setParams&&(fe=Object.keys(n.setParams).reduce((Nn,It)=>Nn.set(It,n.setParams[It]),fe)),new t(e,i,T,{params:fe,headers:we,context:Pn,reportProgress:oe,responseType:r,withCredentials:B,transferCache:ie,keepalive:o,cache:s,priority:a,timeout:X,mode:l,redirect:d,credentials:g,referrer:y,integrity:F,referrerPolicy:le})}},Bt=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Bt||{}),Xn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new dt,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Ho=class t extends Xn{constructor(n={}){super(n)}type=Bt.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ln=class t extends Xn{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Bt.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},sn=class extends Xn{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},ju=200,Vu=204;var Uu=/^\)\]\}',?\n/;var zu=(()=>{class t{xhrFactory;tracingService=c(Pi,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new S(-2800,!1);let i=this.xhrFactory;return _(null).pipe(Be(()=>new pt(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((T,B)=>a.setRequestHeader(T,B.join(","))),e.headers.has(ml)||a.setRequestHeader(ml,Bu),!e.headers.has(ul)){let T=e.detectContentTypeHeader();T!==null&&a.setRequestHeader(ul,T)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let T=e.responseType.toLowerCase();a.responseType=T!=="json"?T:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let T=a.statusText||"OK",B=new dt(a.getAllResponseHeaders()),oe=a.responseURL||e.url;return l=new Ho({headers:B,status:a.status,statusText:T,url:oe}),l},g=this.maybePropagateTrace(()=>{let{headers:T,status:B,statusText:oe,url:we}=d(),fe=null;B!==Vu&&(fe=typeof a.response>"u"?a.responseText:a.response),B===0&&(B=fe?ju:0);let Pn=B>=200&&B<300;if(e.responseType==="json"&&typeof fe=="string"){let Nn=fe;fe=fe.replace(Uu,"");try{fe=fe!==""?JSON.parse(fe):null}catch(It){fe=Nn,Pn&&(Pn=!1,fe={error:It,text:fe})}}Pn?(o.next(new ln({body:fe,headers:T,status:B,statusText:oe,url:we||void 0})),o.complete()):o.error(new sn({error:fe,headers:T,status:B,statusText:oe,url:we||void 0}))}),y=this.maybePropagateTrace(T=>{let{url:B}=d(),oe=new sn({error:T,status:a.status||0,statusText:a.statusText||"Unknown Error",url:B||void 0});o.error(oe)}),F=y;e.timeout&&(F=this.maybePropagateTrace(T=>{let{url:B}=d(),oe=new sn({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:B||void 0});o.error(oe)}));let le=!1,ie=this.maybePropagateTrace(T=>{le||(o.next(d()),le=!0);let B={type:Bt.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(B.total=T.total),e.responseType==="text"&&a.responseText&&(B.partialText=a.responseText),o.next(B)}),X=this.maybePropagateTrace(T=>{let B={type:Bt.UploadProgress,loaded:T.loaded};T.lengthComputable&&(B.total=T.total),o.next(B)});return a.addEventListener("load",g),a.addEventListener("error",y),a.addEventListener("timeout",F),a.addEventListener("abort",y),e.reportProgress&&(a.addEventListener("progress",ie),s!==null&&a.upload&&a.upload.addEventListener("progress",X)),a.send(s),o.next({type:Bt.Sent}),()=>{a.removeEventListener("error",y),a.removeEventListener("abort",y),a.removeEventListener("load",g),a.removeEventListener("timeout",F),e.reportProgress&&(a.removeEventListener("progress",ie),s!==null&&a.upload&&a.upload.removeEventListener("progress",X)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(M(Lt))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Hu(t,n){return n(t)}function $u(t,n,e){return(i,r)=>Se(e,()=>n(i,o=>t(o,r)))}var Gu=new b("",{factory:()=>[]}),$o=new b(""),qu=new b("",{factory:()=>!0});var Wu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(zu),r},providedIn:"root"})}return t})();var Zu=(()=>{class t{backend;injector;chain=null;pendingTasks=c(yo);contributeToStability=c(qu);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Gu),...this.injector.get($o,[])]));this.chain=i.reduceRight((r,o)=>$u(r,o,this.injector),Hu)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(en(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(M(Wu),M(Fe))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(Zu),r},providedIn:"root"})}return t})();function Vo(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Go=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof an)o=e;else{let l;r.headers instanceof dt?l=r.headers:l=new dt(r.headers);let d;r.params&&(r.params instanceof ct?d=r.params:d=new ct({fromObject:r.params})),o=new an(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=_(o).pipe(Qt(l=>this.handler.handle(l)));if(e instanceof an||r.observe==="events")return a;let s=a.pipe(Re(l=>l instanceof ln));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(H(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new S(2806,!1);return l.body}));case"blob":return s.pipe(H(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new S(2807,!1);return l.body}));case"text":return s.pipe(H(l=>{if(l.body!==null&&typeof l.body!="string")throw new S(2808,!1);return l.body}));default:return s.pipe(H(l=>l.body))}case"response":return s;default:throw new S(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new ct().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Vo(r,i))}post(e,i,r={}){return this.request("POST",e,Vo(r,i))}put(e,i,r={}){return this.request("PUT",e,Vo(r,i))}static \u0275fac=function(i){return new(i||t)(M(Yu))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ku=new b(""),Xu="b",Ju="h",Qu="s",em="st",tm="u",nm="rt",qo=new b(""),im=["GET","HEAD"];function vl(t,n){let a=n,{isCacheActive:e}=a,i=os(a,["isCacheActive"]),{transferCache:r,method:o}=t;return!(!e||r===!1||o==="POST"&&!i.includePostRequests&&!r||o!=="POST"&&!im.includes(o)||!i.includeRequestsWithAuthHeaders&&am(t)||i.filter?.(t)===!1)}function bl(t,n){let{includeHeaders:e}=t,i=e;return typeof n=="object"&&n.includeHeaders&&(i=n.includeHeaders),i}function rm(t,n,e,i){let{transferCache:r}=t;if(!vl(t,n))return null;if(i)throw new S(2803,!1);let o=t.url,a=yl(t,o),s=e.get(a,null),l=bl(n,r);if(s){let{[Xu]:d,[nm]:g,[Ju]:y,[Qu]:F,[em]:le,[tm]:ie}=s,X=d;switch(g){case"arraybuffer":X=gl(d);break;case"blob":X=new Blob([gl(d)]);break}let T=new dt(y);return new ln({body:X,headers:T,status:F,statusText:le,url:ie})}return null}function om(t,n){let e=c(qo),i=c(ws),r=c(Ku,{optional:!0}),o=rm(t,e,i,r);if(o)return _(o);let{transferCache:a}=t,s=bl(e,a),l=t.url,d=yl(t,l);return vl(t,e),n(t)}function am(t){return t.headers.has("authorization")||t.headers.has("proxy-authorization")}function pl(t){return[...t.keys()].sort().map(n=>`${n}=${t.getAll(n)}`).join("&")}function yl(t,n){let{params:e,method:i,responseType:r}=t,o=pl(e),a=t.serializeBody();a instanceof URLSearchParams?a=pl(a):typeof a!="string"&&(a="");let s=[i,r,n,a,o].join("|"),l=sm(s);return l}function sm(t){let n=0;for(let e of t)n=Math.imul(31,n)+e.charCodeAt(0)<<0;return n+=2147483648,n.toString()}function gl(t){let n=atob(t);return Uint8Array.from(n,i=>i.charCodeAt(0)).buffer}function _l(t){return[{provide:qo,useFactory:()=>(rn("NgHttpTransferCache"),p({isCacheActive:!0},t))},{provide:$o,useValue:om,multi:!0},{provide:Bi,multi:!0,useFactory:()=>{let n=c(bt),e=c(qo);return()=>{n.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var Xi=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(M(k))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(um),r},providedIn:"root"})}return t})(),um=(()=>{class t extends Wo{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Te.NONE:return i;case Te.HTML:return tn(i,"HTML")?Ot(i):Rs(this._doc,String(i)).toString();case Te.STYLE:return tn(i,"Style")?Ot(i):i;case Te.SCRIPT:if(tn(i,"Script"))return Ot(i);throw new S(5200,!1);case Te.URL:return tn(i,"URL")?Ot(i):Is(String(i));case Te.RESOURCE_URL:if(tn(i,"ResourceURL"))return Ot(i);throw new S(5201,!1);default:throw new S(5202,!1)}}bypassSecurityTrustHtml(e){return Es(e)}bypassSecurityTrustStyle(e){return xs(e)}bypassSecurityTrustScript(e){return Ss(e)}bypassSecurityTrustUrl(e){return Ms(e)}bypassSecurityTrustResourceUrl(e){return As(e)}static \u0275fac=function(i){return new(i||t)(M(k))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ki=(function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t[t.I18nSupport=2]="I18nSupport",t[t.EventReplay=3]="EventReplay",t[t.IncrementalHydration=4]="IncrementalHydration",t})(Ki||{});function mm(t,n=[],e={}){return{\u0275kind:t,\u0275providers:n}}function Dl(){return mm(Ki.EventReplay,Us())}function Cl(...t){let n=[],e=new Set;for(let{\u0275providers:r,\u0275kind:o}of t)e.add(o),r.length&&n.push(r);let i=e.has(Ki.HttpTransferCacheOptions);return Rt([[],[],zs(),e.has(Ki.NoHttpTransferCache)||i?[]:_l({}),n])}var A="primary",di=Symbol("RouteTitle"),Jo=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Vt(t){return new Jo(t)}function Zo(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Fl(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},d=t.slice(0,i.length);return Zo(i,d,l)?{consumed:d,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Zo(o,t.slice(0,o.length),s)||!Zo(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function ir(t){return new Promise((n,e)=>{t.pipe(gt()).subscribe({next:i=>n(i),error:i=>e(i)})})}function fm(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!rt(t[e],n[e]))return!1;return!0}function rt(t,n){let e=t?Qo(t):void 0,i=n?Qo(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Tl(t[r],n[r]))return!1;return!0}function Qo(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Tl(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function hm(t){return t.length>0?t[t.length-1]:null}function zt(t){return go(t)?t:Vn(t)?be(Promise.resolve(t)):_(t)}function Ol(t){return go(t)?ir(t):Promise.resolve(t)}var pm={exact:Nl,subset:kl},Pl={exact:gm,subset:vm,ignored:()=>!0},fa={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ni={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function ha(t,n,e){let i=t instanceof De?t:n.parseUrl(t);return K(()=>ea(n.lastSuccessfulNavigation()?.finalUrl??new De,i,p(p({},ni),e)))}function ea(t,n,e){return pm[e.paths](t.root,n.root,e.matrixParams)&&Pl[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function gm(t,n){return rt(t,n)}function Nl(t,n,e){if(!jt(t.segments,n.segments)||!er(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Nl(t.children[i],n.children[i],e))return!1;return!0}function vm(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Tl(t[e],n[e]))}function kl(t,n,e){return Ll(t,n,n.segments,e)}function Ll(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!jt(r,e)||n.hasChildren()||!er(r,e,i))}else if(t.segments.length===e.length){if(!jt(t.segments,e)||!er(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!kl(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!jt(t.segments,r)||!er(t.segments,r,i)||!t.children[A]?!1:Ll(t.children[A],n,o,i)}}function er(t,n,e){return n.every((i,r)=>Pl[e](t[r].parameters,i.parameters))}var De=class{root;queryParams;fragment;_queryParamMap;constructor(n=new z([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Vt(this.queryParams),this._queryParamMap}toString(){return _m.serialize(this)}},z=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return tr(this)}},Dt=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Vt(this.parameters),this._parameterMap}toString(){return jl(this)}};function bm(t,n){return jt(t,n)&&t.every((e,i)=>rt(e.parameters,n[i].parameters))}function jt(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function ym(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===A&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==A&&(e=e.concat(n(r,i)))}),e}var Ht=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>new Ct,providedIn:"root"})}return t})(),Ct=class{parse(n){let e=new na(n);return new De(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Jn(n.root,!0)}`,i=wm(n.queryParams),r=typeof n.fragment=="string"?`#${Dm(n.fragment)}`:"";return`${e}${i}${r}`}},_m=new Ct;function tr(t){return t.segments.map(n=>jl(n)).join("/")}function Jn(t,n){if(!t.hasChildren())return tr(t);if(n){let e=t.children[A]?Jn(t.children[A],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==A&&i.push(`${r}:${Jn(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=ym(t,(i,r)=>r===A?[Jn(t.children[A],!1)]:[`${r}:${Jn(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[A]!=null?`${tr(t)}/${e[0]}`:`${tr(t)}/(${e.join("//")})`}}function Bl(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ji(t){return Bl(t).replace(/%3B/gi,";")}function Dm(t){return encodeURI(t)}function ta(t){return Bl(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function nr(t){return decodeURIComponent(t)}function El(t){return nr(t.replace(/\+/g,"%20"))}function jl(t){return`${ta(t.path)}${Cm(t.parameters)}`}function Cm(t){return Object.entries(t).map(([n,e])=>`;${ta(n)}=${ta(e)}`).join("")}function wm(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Ji(e)}=${Ji(r)}`).join("&"):`${Ji(e)}=${Ji(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var Em=/^[^\/()?;#]+/;function Yo(t){let n=t.match(Em);return n?n[0]:""}var xm=/^[^\/()?;=#]+/;function Sm(t){let n=t.match(xm);return n?n[0]:""}var Mm=/^[^=?&#]+/;function Am(t){let n=t.match(Mm);return n?n[0]:""}var Im=/^[^&#]+/;function Rm(t){let n=t.match(Im);return n?n[0]:""}var na=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new z([],{}):new z([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new S(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[A]=new z(e,i)),r}parseSegment(){let n=Yo(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new S(4009,!1);return this.capture(n),new Dt(nr(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=Sm(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Yo(this.remaining);r&&(i=r,this.capture(i))}n[nr(e)]=nr(i)}parseQueryParam(n){let e=Am(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=Rm(this.remaining);a&&(i=a,this.capture(i))}let r=El(e),o=El(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Yo(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new S(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=A);let s=this.parseChildren(e+1);i[a??A]=Object.keys(s).length===1&&s[A]?s[A]:new z([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new S(4011,!1)}};function Vl(t){return t.segments.length>0?new z([],{[A]:t}):t}function Ul(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=Ul(r);if(i===A&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new z(t.segments,n);return Fm(e)}function Fm(t){if(t.numberOfChildren===1&&t.children[A]){let n=t.children[A];return new z(t.segments.concat(n.segments),n.children)}return t}function wt(t){return t instanceof De}function zl(t,n,e=null,i=null,r=new Ct){let o=Hl(t);return $l(o,n,e,i,r)}function Hl(t){let n;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new z(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=Vl(i);return n??r}function $l(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Ko(o,o,o,e,i,r);let a=Tm(n);if(a.toRoot())return Ko(o,o,new z([],{}),e,i,r);let s=Om(a,o,t),l=s.processChildren?ei(s.segmentGroup,s.index,a.commands):ql(s.segmentGroup,s.index,a.commands);return Ko(o,s.segmentGroup,l,e,i,r)}function rr(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function ii(t){return typeof t=="object"&&t!=null&&t.outlets}function xl(t,n,e){t||="\u0275";let i=new De;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Ko(t,n,e,i,r,o){let a={};for(let[d,g]of Object.entries(i??{}))a[d]=Array.isArray(g)?g.map(y=>xl(d,y,o)):xl(d,g,o);let s;t===n?s=e:s=Gl(t,n,e);let l=Vl(Ul(s));return new De(l,a,r)}function Gl(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=Gl(o,n,e)}),new z(t.segments,i)}var or=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&rr(i[0]))throw new S(4003,!1);let r=i.find(ii);if(r&&r!==hm(i))throw new S(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Tm(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new or(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new or(e,n,i)}var dn=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function Om(t,n,e){if(t.isAbsolute)return new dn(n,!0,0);if(!e)return new dn(n,!1,NaN);if(e.parent===null)return new dn(e,!0,0);let i=rr(t.commands[0])?0:1,r=e.segments.length-1+i;return Pm(e,r,t.numberOfDoubleDots)}function Pm(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new S(4005,!1);r=i.segments.length}return new dn(i,!1,r-o)}function Nm(t){return ii(t[0])?t[0].outlets:{[A]:t}}function ql(t,n,e){if(t??=new z([],{}),t.segments.length===0&&t.hasChildren())return ei(t,n,e);let i=km(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new z(t.segments.slice(0,i.pathIndex),{});return o.children[A]=new z(t.segments.slice(i.pathIndex),t.children),ei(o,0,r)}else return i.match&&r.length===0?new z(t.segments,{}):i.match&&!t.hasChildren()?ia(t,n,e):i.match?ei(t,0,r):ia(t,n,e)}function ei(t,n,e){if(e.length===0)return new z(t.segments,{});{let i=Nm(e),r={};if(Object.keys(i).some(o=>o!==A)&&t.children[A]&&t.numberOfChildren===1&&t.children[A].segments.length===0){let o=ei(t.children[A],n,e);return new z(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=ql(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new z(t.segments,r)}}function km(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(ii(s))break;let l=`${s}`,d=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!Ml(l,d,a))return o;i+=2}else{if(!Ml(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ia(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(ii(o)){let l=Lm(o.outlets);return new z(i,l)}if(r===0&&rr(e[0])){let l=t.segments[n];i.push(new Dt(l.path,Sl(e[0]))),r++;continue}let a=ii(o)?o.outlets[A]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&rr(s)?(i.push(new Dt(a,Sl(s))),r+=2):(i.push(new Dt(a,{})),r++)}return new z(i,{})}function Lm(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=ia(new z([],{}),0,i))}),n}function Sl(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function Ml(t,n,e){return t==e.path&&rt(n,e.parameters)}var un="imperative",me=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(me||{}),Ne=class{id;url;constructor(n,e){this.id=n,this.url=e}},Et=class extends Ne{type=me.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ge=class extends Ne{urlAfterRedirects;type=me.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ve=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(ve||{}),fn=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(fn||{}),$e=class extends Ne{reason;code;type=me.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Wl(t){return t instanceof $e&&(t.code===ve.Redirect||t.code===ve.SupersededByNewNavigation)}var ot=class extends Ne{reason;code;type=me.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Ut=class extends Ne{error;target;type=me.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ri=class extends Ne{urlAfterRedirects;state;type=me.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ar=class extends Ne{urlAfterRedirects;state;type=me.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sr=class extends Ne{urlAfterRedirects;state;shouldActivate;type=me.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},lr=class extends Ne{urlAfterRedirects;state;type=me.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cr=class extends Ne{urlAfterRedirects;state;type=me.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dr=class{route;type=me.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ur=class{route;type=me.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},mr=class{snapshot;type=me.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fr=class{snapshot;type=me.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hr=class{snapshot;type=me.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pr=class{snapshot;type=me.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hn=class{routerEvent;position;anchor;scrollBehavior;type=me.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},pn=class{},oi=class{},gn=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Bm(t){return!(t instanceof pn)&&!(t instanceof gn)&&!(t instanceof oi)}var gr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new _n(this.rootInjector)}},_n=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new gr(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(M(Fe))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vr=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=ra(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=ra(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=oa(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return oa(n,this._root).map(e=>e.value)}};function ra(t,n){if(t===n.value)return n;for(let e of n.children){let i=ra(t,e);if(i)return i}return null}function oa(t,n){if(t===n.value)return[n];for(let e of n.children){let i=oa(t,e);if(i.length)return i.unshift(n),i}return[]}var Pe=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function cn(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var ai=class extends vr{snapshot;constructor(n,e){super(n),this.snapshot=e,ga(this,n)}toString(){return this.snapshot.toString()}};function Zl(t,n){let e=jm(t,n),i=new Ee([new Dt("",{})]),r=new Ee({}),o=new Ee({}),a=new Ee({}),s=new Ee(""),l=new Ke(i,r,a,s,o,A,t,e.root);return l.snapshot=e.root,new ai(new Pe(l,[]),e)}function jm(t,n){let e={},i={},r={},a=new vn([],e,r,"",i,A,t,null,{},n);return new si("",new Pe(a,[]))}var Ke=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(H(d=>d[di]))??_(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(H(n=>Vt(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(H(n=>Vt(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function pa(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:p(p({},n.params),t.params),data:p(p({},n.data),t.data),resolve:p(p(p(p({},t.data),n.data),r?.data),t._resolvedData)}:i={params:p({},t.params),data:p({},t.data),resolve:p(p({},t.data),t._resolvedData??{})},r&&Kl(r)&&(i.resolve[di]=r.title),i}var vn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[di]}constructor(n,e,i,r,o,a,s,l,d,g){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=g}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Vt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Vt(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},si=class extends vr{url;constructor(n,e){super(e),this.url=n,ga(this,e)}toString(){return Yl(this._root)}};function ga(t,n){n.value._routerState=t,n.children.forEach(e=>ga(t,e))}function Yl(t){let n=t.children.length>0?` { ${t.children.map(Yl).join(", ")} } `:"";return`${t.value}${n}`}function Xo(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,rt(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),rt(n.params,e.params)||t.paramsSubject.next(e.params),fm(n.url,e.url)||t.urlSubject.next(e.url),rt(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function aa(t,n){let e=rt(t.params,n.params)&&bm(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||aa(t.parent,n.parent))}function Kl(t){return typeof t.title=="string"||t.title===null}var Xl=new b(""),ui=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=A;activateEvents=new pe;deactivateEvents=new pe;attachEvents=new pe;detachEvents=new pe;routerOutletData=ne();parentContexts=c(_n);location=c(ki);changeDetector=c(lt);inputBinder=c(Dr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new S(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new S(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new S(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new S(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new sa(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ve]})}return t})(),sa=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Ke?this.route:n===_n?this.childContexts:n===Xl?this.outletData:this.parent.get(n,e)}},Dr=new b("");var va=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&V(0,"router-outlet")},dependencies:[ui],encapsulation:2})}return t})();function ba(t){let n=t.children&&t.children.map(ba),e=n?N(p({},t),{children:n}):p({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==A&&(e.component=va),e}function Vm(t,n,e){let i=li(t,n._root,e?e._root:void 0);return new ai(i,n)}function li(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=Um(t,n,e);return new Pe(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>li(t,s)),a}}let i=zm(n.value),r=n.children.map(o=>li(t,o));return new Pe(i,r)}}function Um(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return li(t,i,r);return li(t,i)})}function zm(t){return new Ke(new Ee(t.url),new Ee(t.params),new Ee(t.queryParams),new Ee(t.fragment),new Ee(t.data),t.outlet,t.component,t)}var bn=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Jl="ngNavigationCancelingError";function br(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=wt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Ql(!1,ve.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function Ql(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Jl]=!0,e.cancellationCode=n,e}function Hm(t){return ec(t)&&wt(t.url)}function ec(t){return!!t&&t[Jl]}var la=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Xo(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=cn(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=cn(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=cn(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=cn(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new pr(o.value.snapshot))}),n.children.length&&this.forwardEvent(new fr(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Xo(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Xo(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},yr=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},mn=class{component;route;constructor(n,e){this.component=n,this.route=e}};function $m(t,n,e){let i=t._root,r=n?n._root:null;return Qn(i,r,e,[i.value])}function Gm(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Dn(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!gs(t)?t:n.get(t):i}function Qn(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=cn(n);return t.children.forEach(a=>{qm(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>ti(s,e.getContext(a),r)),r}function qm(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Wm(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new yr(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Qn(t,n,s?s.children:null,i,r):Qn(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new mn(s.outlet.component,a))}else a&&ti(n,s,r),r.canActivateChecks.push(new yr(i)),o.component?Qn(t,null,s?s.children:null,i,r):Qn(t,null,e,i,r);return r}function Wm(t,n,e){if(typeof e=="function")return Se(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!jt(t.url,n.url);case"pathParamsOrQueryParamsChange":return!jt(t.url,n.url)||!rt(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!aa(t,n)||!rt(t.queryParams,n.queryParams);default:return!aa(t,n)}}function ti(t,n,e){let i=cn(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?ti(a,n.children.getContext(o),e):ti(a,null,e):ti(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new mn(n.outlet.component,r)):e.canDeactivateChecks.push(new mn(null,r)):e.canDeactivateChecks.push(new mn(null,r))}function mi(t){return typeof t=="function"}function Zm(t){return typeof t=="boolean"}function Ym(t){return t&&mi(t.canLoad)}function Km(t){return t&&mi(t.canActivate)}function Xm(t){return t&&mi(t.canActivateChild)}function Jm(t){return t&&mi(t.canDeactivate)}function Qm(t){return t&&mi(t.canMatch)}function tc(t){return t instanceof ss||t?.name==="EmptyError"}var Qi=Symbol("INITIAL_VALUE");function yn(){return Be(t=>ls(t.map(n=>n.pipe(ce(1),Fi(Qi)))).pipe(H(n=>{for(let e of n)if(e!==!0){if(e===Qi)return Qi;if(e===!1||ef(e))return e}return!0}),Re(n=>n!==Qi),ce(1)))}function ef(t){return wt(t)||t instanceof bn}function nc(t){return t.aborted?_(void 0).pipe(ce(1)):new pt(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function ic(t){return je(nc(t))}function tf(t){return at(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?_(N(p({},n),{guardsResult:!0})):nf(o,e,i).pipe(at(a=>a&&Zm(a)?rf(e,r,t):_(a)),H(a=>N(p({},n),{guardsResult:a})))})}function nf(t,n,e){return be(t).pipe(at(i=>cf(i.component,i.route,e,n)),gt(i=>i!==!0,!0))}function rf(t,n,e){return be(n).pipe(Qt(i=>cs(af(i.route.parent,e),of(i.route,e),lf(t,i.path),sf(t,i.route))),gt(i=>i!==!0,!0))}function of(t,n){return t!==null&&n&&n(new hr(t)),_(!0)}function af(t,n){return t!==null&&n&&n(new mr(t)),_(!0)}function sf(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return _(!0);let i=e.map(r=>Ii(()=>{let o=n._environmentInjector,a=Dn(r,o),s=Km(a)?a.canActivate(n,t):Se(o,()=>a(n,t));return zt(s).pipe(gt())}));return _(i).pipe(yn())}function lf(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>Gm(o)).filter(o=>o!==null).map(o=>Ii(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=Dn(s,l),g=Xm(d)?d.canActivateChild(e,t):Se(l,()=>d(e,t));return zt(g).pipe(gt())});return _(a).pipe(yn())}));return _(r).pipe(yn())}function cf(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return _(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Dn(a,s),d=Jm(l)?l.canDeactivate(t,n,e,i):Se(s,()=>l(t,n,e,i));return zt(d).pipe(gt())});return _(o).pipe(yn())}function df(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return _(!0);let a=o.map(s=>{let l=Dn(s,t),d=Ym(l)?l.canLoad(n,e):Se(t,()=>l(n,e)),g=zt(d);return r?g.pipe(ic(r)):g});return _(a).pipe(yn(),rc(i))}function rc(t){return as(ye(n=>{if(typeof n!="boolean")throw br(t,n)}),H(n=>n===!0))}function uf(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return _(!0);let s=a.map(l=>{let d=Dn(l,t),g=Qm(d)?d.canMatch(n,e,r):Se(t,()=>d(n,e,r));return zt(g).pipe(ic(o))});return _(s).pipe(yn(),rc(i))}var ut=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},ci=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function mf(t){throw new S(4e3,!1)}function ff(t){throw Ql(!1,ve.GuardRejected)}var ca=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[A])throw mf(`${n.redirectTo}`);r=r.children[A]}}async applyRedirectCommands(n,e,i,r,o){let a=await hf(e,r,o);if(a instanceof De)throw new ci(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new ci(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new De(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new z(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new S(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function hf(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return ir(zt(Se(e,()=>i(n))))}function pf(t,n){return t.providers&&!t._injector&&(t._injector=Do(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Ye(t){return t.outlet||A}function gf(t,n){let e=t.filter(i=>Ye(i)===n);return e.push(...t.filter(i=>Ye(i)!==n)),e}var da={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function oc(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function vf(t,n,e,i,r,o,a){let s=ac(t,n,e);if(!s.matched)return _(s);let l=oc(o(s));return i=pf(n,i),uf(i,n,e,r,l,a).pipe(H(d=>d===!0?s:p({},da)))}function ac(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?p({},da):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Fl)(e,t,n);if(!r)return p({},da);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?p(p({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Al(t,n,e,i,r){return e.length>0&&_f(t,e,i,r)?{segmentGroup:new z(n,yf(i,new z(e,t.children))),slicedSegments:[]}:e.length===0&&Df(t,e,i)?{segmentGroup:new z(t.segments,bf(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new z(t.segments,t.children),slicedSegments:e}}function bf(t,n,e,i){let r={};for(let o of e)if(Cr(t,n,o)&&!i[Ye(o)]){let a=new z([],{});r[Ye(o)]=a}return p(p({},i),r)}function yf(t,n){let e={};e[A]=n;for(let i of t)if(i.path===""&&Ye(i)!==A){let r=new z([],{});e[Ye(i)]=r}return e}function _f(t,n,e,i){return e.some(r=>!Cr(t,n,r)||!(Ye(r)!==A)?!1:!(i!==void 0&&Ye(r)===i))}function Df(t,n,e){return e.some(i=>Cr(t,n,i))}function Cr(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Cf(t,n,e){return n.length===0&&!t.children[e]}var ua=class{};async function wf(t,n,e,i,r,o,a="emptyOnly",s){return new ma(t,n,e,i,r,a,o,s).recognize()}var Ef=31,ma=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new ca(this.urlSerializer,this.urlTree)}noMatchError(n){return new S(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Al(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Pe(i,e),o=new si("",r),a=zl(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new vn([],Object.freeze({}),Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),A,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,A,e),rootSnapshot:e}}catch(i){if(i instanceof ci)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ut?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Pe?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=i.children[l],g=gf(e,l),y=await this.processSegmentGroup(n,g,d,l,r);a.push(...y)}let s=sc(a);return xf(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(d){if(d instanceof ut||tc(d))continue;throw d}if(Cf(i,r,o))return new ua;throw new ut(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(Ye(i)!==a&&(a===A||!Cr(r,o,i)))throw new ut(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new ut(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:d,consumedSegments:g,positionalParamSegments:y,remainingSegments:F}=ac(e,r,o);if(!l)throw new ut(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ef&&(this.allowRedirects=!1));let le=this.createSnapshot(n,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let ie=await this.applyRedirects.applyRedirectCommands(g,r.redirectTo,y,oc(le),n),X=await this.applyRedirects.lineralizeSegments(r,ie);return this.processSegment(n,i,e,X.concat(F),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new vn(i,r,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Mf(e),Ye(e),e.component??e._loadedComponent??null,e,Af(e),n),s=pa(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=we=>this.createSnapshot(n,i,we.consumedSegments,we.parameters,a),l=await ir(vf(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new ut(e);n=i._injector??n;let{routes:d}=await this.getChildConfig(n,i,r),g=i._loadedInjector??n,{parameters:y,consumedSegments:F,remainingSegments:le}=l,ie=this.createSnapshot(n,i,F,y,a),{segmentGroup:X,slicedSegments:T}=Al(e,F,le,d,o);if(T.length===0&&X.hasChildren()){let we=await this.processChildren(g,d,X,ie);return new Pe(ie,we)}if(d.length===0&&T.length===0)return new Pe(ie,[]);let B=Ye(i)===o,oe=await this.processSegment(g,d,X,T,B?A:o,!0,ie);return new Pe(ie,oe instanceof Pe?[oe]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await ir(df(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw ff(e)}return{routes:[],injector:n}}};function xf(t){t.sort((n,e)=>n.value.outlet===A?-1:e.value.outlet===A?1:n.value.outlet.localeCompare(e.value.outlet))}function Sf(t){let n=t.value.routeConfig;return n&&n.path===""}function sc(t){let n=[],e=new Set;for(let i of t){if(!Sf(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=sc(i.children);n.push(new Pe(i.value,r))}return n.filter(i=>!e.has(i))}function Mf(t){return t.data||{}}function Af(t){return t.resolve||{}}function If(t,n,e,i,r,o,a){return at(async s=>{let{state:l,tree:d}=await wf(t,n,e,i,s.extractedUrl,r,o,a);return N(p({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function Rf(t){return at(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return _(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of lc(s))o.add(l);let a=0;return be(o).pipe(Qt(s=>r.has(s)?Ff(s,e,t):(s.data=pa(s,s.parent,t).resolve,_(void 0))),ye(()=>a++),bo(1),at(s=>a===o.size?_(n):xe))})}function lc(t){let n=t.children.map(e=>lc(e)).flat();return[t,...n]}function Ff(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!Kl(i)&&(r[di]=i.title),Ii(()=>(t.data=pa(t,t.parent,e).resolve,Tf(r,t,n).pipe(H(o=>(t._resolvedData=o,t.data=p(p({},t.data),o),null)))))}function Tf(t,n,e){let i=Qo(t);if(i.length===0)return _({});let r={};return be(i).pipe(at(o=>Of(t[o],n,e).pipe(gt(),ye(a=>{if(a instanceof bn)throw br(new Ct,a);r[o]=a}))),bo(1),H(()=>r),Jt(o=>tc(o)?xe:Ai(o)))}function Of(t,n,e){let i=n._environmentInjector,r=Dn(t,i),o=r.resolve?r.resolve(n,e):Se(i,()=>r(n,e));return zt(o)}function Il(t){return Be(n=>{let e=t(n);return e?be(e).pipe(H(()=>n)):_(n)})}var ya=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===A);return i}getResolvedTitleForRoute(e){return e.data[di]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(cc),providedIn:"root"})}return t})(),cc=(()=>{class t extends ya{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(M(Xi))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cn=new b("",{factory:()=>({})}),fi=new b(""),dc=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(js);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Ol(Se(e,()=>i.loadComponent())),a=await fc(mc(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await uc(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function uc(t,n,e,i){let r=await Ol(Se(e,()=>t.loadChildren())),o=await fc(mc(r)),a;o instanceof Os||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,d=!1,g;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,g=a,l=s.get(fi,[],{optional:!0,self:!0}).flat()),{routes:l.map(ba),injector:s,factory:g}}function Pf(t){return t&&typeof t=="object"&&"default"in t}function mc(t){return Pf(t)?t.default:t}async function fc(t){return t}var wr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(Nf),providedIn:"root"})}return t})(),Nf=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hc=new b("");var kf=()=>{},pc=new b(""),_a=(()=>{class t{currentNavigation=E(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=E(null);events=new te;transitionAbortWithErrorSubject=new te;configLoader=c(dc);environmentInjector=c(Fe);destroyRef=c(Qe);urlSerializer=c(Ht);rootContexts=c(_n);location=c(kt);inputBindingEnabled=c(Dr,{optional:!0})!==null;titleStrategy=c(ya);options=c(Cn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(wr);createViewTransition=c(hc,{optional:!0});navigationErrorHandler=c(pc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>_(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new dr(r)),i=r=>this.events.next(new ur(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;U(()=>{this.transitions?.next(N(p({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ee(null),this.transitions.pipe(Re(i=>i!==null),Be(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return _(i).pipe(Be(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",ve.SupersededByNewNavigation),xe;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?N(p({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),g=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&g!=="reload")return this.events.next(new ot(s.id,this.urlSerializer.serialize(s.rawUrl),"",fn.IgnoredSameUrlNavigation)),s.resolve(!1),xe;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return _(s).pipe(Be(y=>(this.events.next(new Et(y.id,this.urlSerializer.serialize(y.extractedUrl),y.source,y.restoredState)),y.id!==this.navigationId?xe:Promise.resolve(y))),If(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ye(y=>{i.targetSnapshot=y.targetSnapshot,i.urlAfterRedirects=y.urlAfterRedirects,this.currentNavigation.update(F=>(F.finalUrl=y.urlAfterRedirects,F)),this.events.next(new oi)}),Be(y=>be(i.routesRecognizeHandler.deferredHandle??_(void 0)).pipe(H(()=>y))),ye(()=>{let y=new ri(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:y,extractedUrl:F,source:le,restoredState:ie,extras:X}=s,T=new Et(y,this.urlSerializer.serialize(F),le,ie);this.events.next(T);let B=Zl(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=N(p({},s),{targetSnapshot:B,urlAfterRedirects:F,extras:N(p({},X),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(oe=>(oe.finalUrl=F,oe)),_(i)}else return this.events.next(new ot(s.id,this.urlSerializer.serialize(s.extractedUrl),"",fn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),xe}),H(s=>{let l=new ar(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=N(p({},s),{guards:$m(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),tf(s=>this.events.next(s)),Be(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw br(this.urlSerializer,s.guardsResult);let l=new sr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return xe;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",ve.GuardRejected),xe;if(s.guards.canActivateChecks.length===0)return _(s);let d=new lr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return xe;let g=!1;return _(s).pipe(Rf(this.paramsInheritanceStrategy),ye({next:()=>{g=!0;let y=new cr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)},complete:()=>{g||this.cancelNavigationTransition(s,"",ve.NoDataFromResolver)}}))}),Il(s=>{let l=g=>{let y=[];if(g.routeConfig?._loadedComponent)g.component=g.routeConfig?._loadedComponent;else if(g.routeConfig?.loadComponent){let F=g._environmentInjector;y.push(this.configLoader.loadComponent(F,g.routeConfig).then(le=>{g.component=le}))}for(let F of g.children)y.push(...l(F));return y},d=l(s.targetSnapshot.root);return d.length===0?_(s):be(Promise.all(d).then(()=>s))}),Il(()=>this.afterPreactivation()),Be(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?be(d).pipe(H(()=>i)):_(i)}),ce(1),Be(s=>{let l=Vm(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=N(p({},s),{targetRouterState:l}),this.currentNavigation.update(g=>(g.targetRouterState=l,g)),this.events.next(new pn);let d=i.beforeActivateHandler.deferredHandle;return d?be(d.then(()=>s)):_(s)}),ye(s=>{new la(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=kf,l)),this.lastSuccessfulNavigation.set(U(this.currentNavigation)),this.events.next(new Ge(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),je(nc(o.signal).pipe(Re(()=>!r&&!i.targetRouterState),ye(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",ve.Aborted)}))),ye({complete:()=>{r=!0}}),je(this.transitionAbortWithErrorSubject.pipe(ye(s=>{throw s}))),en(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",ve.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Jt(s=>{if(r=!0,this.destroyed)return i.resolve(!1),xe;if(ec(s))this.events.next(new $e(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),Hm(s)?this.events.next(new gn(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Ut(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let d=Se(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof bn){let{message:g,cancellationCode:y}=br(this.urlSerializer,d);this.events.next(new $e(i.id,this.urlSerializer.serialize(i.extractedUrl),g,y)),this.events.next(new gn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return xe}))}))}cancelNavigationTransition(e,i,r){let o=new $e(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=U(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Lf(t){return t!==un}var gc=new b("");var vc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(Bf),providedIn:"root"})}return t})(),_r=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Bf=(()=>{class t extends _r{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Er=(()=>{class t{urlSerializer=c(Ht);options=c(Cn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(kt);urlHandlingStrategy=c(wr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new De;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof De?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Zl(null,c(Fe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(jf),providedIn:"root"})}return t})(),jf=(()=>{class t extends Er{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Et?this.updateStateMemento():e instanceof ot?this.commitTransition(i):e instanceof ri?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof pn?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof $e&&!Wl(e)?this.restoreHistory(i):e instanceof Ut?this.restoreHistory(i,!0):e instanceof Ge&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=p(p({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=p(p({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Da(t,n){t.events.pipe(Re(e=>e instanceof Ge||e instanceof $e||e instanceof Ut||e instanceof ot),H(e=>e instanceof Ge||e instanceof ot?0:(e instanceof $e?e.code===ve.Redirect||e.code===ve.SupersededByNewNavigation:!1)?2:1),Re(e=>e!==2),ce(1)).subscribe(()=>{n()})}var $t=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Co);stateManager=c(Er);options=c(Cn,{optional:!0})||{};pendingTasks=c(bs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(_a);urlSerializer=c(Ht);location=c(kt);urlHandlingStrategy=c(wr);injector=c(Fe);_events=new te;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(vc);injectorCleanup=c(gc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(fi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Dr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Xt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=U(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof $e&&i.code!==ve.Redirect&&i.code!==ve.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ge)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof gn){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=p({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Lf(r.source)},a);this.scheduleNavigation(s,un,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Bm(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),un,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null;if(r){let l=p({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,o).catch(l=>{this.disposed||this.injector.get(Ln)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return U(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ba),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,d=l?this.currentUrlTree.fragment:a,g=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":g=p(p({},this.currentUrlTree.queryParams),o);break;case"preserve":g=this.currentUrlTree.queryParams;break;default:g=o||null}g!==null&&(g=this.removeEmptyProps(g));let y;try{let F=r?r.snapshot:this.routerState.snapshot.root;y=Hl(F)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),y=this.currentUrlTree.root}return $l(y,e,g,d??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=wt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,un,null,i)}navigate(e,i={skipLocationChange:!1}){return Vf(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(vt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=p({},fa):i===!1?r=p({},ni):r=p(p({},ni),i),wt(e))return ea(this.currentUrlTree,e,r);let o=this.parseUrl(e);return ea(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((y,F)=>{s=y,l=F});let g=this.pendingTasks.add();return Da(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(g))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vf(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new S(4008,!1)}var Uf=(()=>{class t{router=c($t);stateManager=c(Er);fragment=E("");queryParams=E({});path=E("");serializer=c(Ht);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ge&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new De(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qe=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new zi("href"),{optional:!0});reactiveHref=Mo(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return U(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return U(this._target)}_target=E(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return U(this._queryParams)}_queryParams=E(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return U(this._fragment)}_fragment=E(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return U(this._queryParamsHandling)}_queryParamsHandling=E(void 0);set state(e){this._state.set(e)}get state(){return U(this._state)}_state=E(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return U(this._info)}_info=E(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return U(this._relativeTo)}_relativeTo=E(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return U(this._preserveFragment)}_preserveFragment=E(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return U(this._skipLocationChange)}_skipLocationChange=E(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return U(this._replaceUrl)}_replaceUrl=E(!1);isAnchorElement;onChanges=new te;applicationErrorHandler=c(Ln);options=c(Cn,{optional:!0});reactiveRouterState=c(Uf);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=E(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(wt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=K(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:wt(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return U(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(j($t),j(Ke),_o("tabindex"),j(_e),j(J),j(Nt))};static \u0275dir=R({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&P("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&re("href",r.reactiveHref(),Fs)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ge],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ge],replaceUrl:[2,"replaceUrl","replaceUrl",ge],routerLink:"routerLink"},features:[Ve]})}return t})(),Ca=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new pe;link=c(qe,{optional:!0});constructor(e,i,r,o){this.router=e,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof Ge&&this.update()})}ngAfterContentInit(){_(this.links.changes,_(null)).pipe(vo()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=be(e).pipe(vo()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=zf(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?p({},fa):p({},ni);return r=>{let o=r.urlTree;return o?U(ha(o,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(i){return new(i||t)(j($t),j(J),j(_e),j(lt))};static \u0275dir=R({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&Vi(o,qe,5),i&2){let a;ae(a=se())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ve]})}return t})();function zf(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var bc=new b(""),Hf=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=un;restoredId=0;store={};urlSerializer=c(Ht);zone=c(Z);viewportScroller=c(Qs);transitions=c(_a);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Et?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Ge?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof ot&&e.code===fn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof hn)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=U(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new hn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Ni()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function wa(t,...n){return Rt([{provide:fi,multi:!0,useValue:t},[],{provide:Ke,useFactory:$f},{provide:Bi,multi:!0,useFactory:qf},n.map(e=>e.\u0275providers)])}function $f(){return c($t).routerState.root}function Gf(t,n){return{\u0275kind:t,\u0275providers:n}}function Ea(t={}){return Gf(4,[{provide:bc,useFactory:()=>new Hf(t)}])}function qf(){let t=c(he);return n=>{let e=t.get(bt);if(n!==e.components[0])return;let i=t.get($t),r=t.get(Wf);t.get(Zf)===1&&i.initialNavigation(),t.get(Yf,null,{optional:!0})?.setUpPreloading(),t.get(bc,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Wf=new b("",{factory:()=>new te}),Zf=new b("",{factory:()=>1});var Yf=new b("");function hi(t){return t.buttons===0||t.detail===0}function pi(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var xa;function yc(){if(xa==null){let t=typeof document<"u"?document.head:null;xa=!!(t&&(t.createShadowRoot||t.attachShadow))}return xa}function Sa(t){if(yc()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Xe(t){return t.composedPath?t.composedPath()[0]:t.target}var Ma;try{Ma=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ma=!1}var Ce=(()=>{class t{_platformId=c(et);isBrowser=this._platformId?it(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ma)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gi;function _c(){if(gi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>gi=!0}))}finally{gi=gi||!1}return gi}function wn(t){return _c()?t:!!t.capture}function Je(t){return t instanceof J?t.nativeElement:t}var Dc=new b("cdk-input-modality-detector-options"),Cc={ignoreKeys:[18,17,224,91,16]},wc=650,Aa={passive:!0,capture:!0},Ec=(()=>{class t{_platform=c(Ce);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ee(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Xe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<wc||(this._modality.next(hi(e)?"keyboard":"mouse"),this._mostRecentTarget=Xe(e))};_onTouchstart=e=>{if(pi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Xe(e)};constructor(){let e=c(Z),i=c(k),r=c(Dc,{optional:!0});if(this._options=p(p({},Cc),r),this.modalityDetected=this._modality.pipe(ps(1)),this.modalityChanged=this.modalityDetected.pipe(us()),this._platform.isBrowser){let o=c(tt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Aa),o.listen(i,"mousedown",this._onMousedown,Aa),o.listen(i,"touchstart",this._onTouchstart,Aa)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vi=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(vi||{}),xc=new b("cdk-focus-monitor-default-options"),xr=wn({passive:!0,capture:!0}),Ia=(()=>{class t{_ngZone=c(Z);_platform=c(Ce);_inputModalityDetector=c(Ec);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(k);_stopInputModalityDetector=new te;constructor(){let e=c(xc,{optional:!0});this._detectionMode=e?.detectionMode||vi.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Xe(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Je(e);if(!this._platform.isBrowser||r.nodeType!==1)return _();let o=Sa(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new te,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Je(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Je(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===vi.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===vi.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?wc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Xe(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,xr),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,xr)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(je(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,xr),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,xr),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sr=new WeakMap,Gt=(()=>{class t{_appRef;_injector=c(he);_environmentInjector=c(Fe);load(e){let i=this._appRef=this._appRef||this._injector.get(bt),r=Sr.get(i);r||(r={loaders:new Set,refs:[]},Sr.set(i,r),i.onDestroy(()=>{Sr.get(i)?.refs.forEach(o=>o.destroy()),Sr.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Gs(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mr;function Kf(){if(Mr===void 0&&(Mr=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Mr=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Mr}function En(t){return Kf()?.createHTML(t)||t}var Sc=new Set,qt,Ra=(()=>{class t{_platform=c(Ce);_nonce=c(jn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Jf}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Xf(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xf(t,n){if(!Sc.has(t))try{qt||(qt=document.createElement("style"),n&&qt.setAttribute("nonce",n),qt.setAttribute("type","text/css"),document.head.appendChild(qt)),qt.sheet&&(qt.sheet.insertRule(`@media ${t} {body{ }}`,0),Sc.add(t))}catch(e){console.error(e)}}function Jf(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Qf=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({providers:[Qf]})}return t})();var Fa={},mt=class t{_appId=c(Bn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Fa.hasOwnProperty(n)||(Fa[n]=0),`${n}${e?t._infix+"-":""}${Fa[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var xn,Ac=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ta(){if(xn)return xn;if(typeof document!="object"||!document)return xn=new Set(Ac),xn;let t=document.createElement("input");return xn=new Set(Ac.filter(n=>(t.setAttribute("type",n),t.type===n))),xn}var eh=new b("MATERIAL_ANIMATIONS"),Ic=null;function th(){return c(eh,{optional:!0})?.animationsDisabled||c(Ti,{optional:!0})==="NoopAnimations"?"di-disabled":(Ic??=c(Ra).matchMedia("(prefers-reduced-motion)").matches,Ic?"reduced-motion":"enabled")}function Sn(){return th()!=="enabled"}function ft(t){return t!=null&&`${t}`!="false"}var We=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(We||{}),Oa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=We.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Rc=wn({passive:!0,capture:!0}),Pa=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Rc)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Rc)))}_delegateEventHandler=n=>{let e=Xe(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},bi={enterDuration:225,exitDuration:150},ih=800,Fc=wn({passive:!0,capture:!0}),Tc=["mousedown","touchstart"],Oc=["mouseup","mouseleave","touchend","touchcancel"],rh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ar=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Pa;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Je(i)),o&&o.get(Gt).load(rh)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=p(p({},bi),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||oh(n,e,r),s=n-r.left,l=e-r.top,d=o.enterDuration,g=document.createElement("div");g.classList.add("mat-ripple-element"),g.style.left=`${s-a}px`,g.style.top=`${l-a}px`,g.style.height=`${a*2}px`,g.style.width=`${a*2}px`,i.color!=null&&(g.style.backgroundColor=i.color),g.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(g);let y=window.getComputedStyle(g),F=y.transitionProperty,le=y.transitionDuration,ie=F==="none"||le==="0s"||le==="0s, 0s"||r.width===0&&r.height===0,X=new Oa(this,g,i,ie);g.style.transform="scale3d(1, 1, 1)",X.state=We.FADING_IN,i.persistent||(this._mostRecentTransientRipple=X);let T=null;return!ie&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let B=()=>{T&&(T.fallbackTimer=null),clearTimeout(we),this._finishRippleTransition(X)},oe=()=>this._destroyRipple(X),we=setTimeout(oe,d+100);g.addEventListener("transitionend",B),g.addEventListener("transitioncancel",oe),T={onTransitionEnd:B,onTransitionCancel:oe,fallbackTimer:we}}),this._activeRipples.set(X,T),(ie||!d)&&this._finishRippleTransition(X),X}fadeOutRipple(n){if(n.state===We.FADING_OUT||n.state===We.HIDDEN)return;let e=n.element,i=p(p({},bi),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=We.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Je(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Tc.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Oc.forEach(e=>{this._triggerElement.addEventListener(e,this,Fc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===We.FADING_IN?this._startFadeOutTransition(n):n.state===We.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=We.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=We.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=hi(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ih;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!pi(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===We.VISIBLE||n.config.terminateOnPointerUp&&n.state===We.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Tc.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Oc.forEach(e=>n.removeEventListener(e,this,Fc)),this._pointerUpEventsRegistered=!1))}};function oh(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Pc=new b("mat-ripple-global-options");var ah={capture:!0},sh=["focus","mousedown","mouseenter","touchstart"],Na="mat-ripple-loader-uninitialized",ka="mat-ripple-loader-class-name",Nc="mat-ripple-loader-centered",Ir="mat-ripple-loader-disabled",kc=(()=>{class t{_document=c(k);_animationsDisabled=Sn();_globalRippleOptions=c(Pc,{optional:!0});_platform=c(Ce);_ngZone=c(Z);_injector=c(he);_eventCleanups;_hosts=new Map;constructor(){let e=c(tt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>sh.map(i=>e.listen(this._document,i,this._onInteraction,ah)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Na,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(ka))&&e.setAttribute(ka,i.className||""),i.centered&&e.setAttribute(Nc,""),i.disabled&&e.setAttribute(Ir,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Ir,""):e.removeAttribute(Ir)}_onInteraction=e=>{let i=Xe(e);if(i instanceof HTMLElement){let r=i.closest(`[${Na}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(ka)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??bi.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??bi.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Ir),rippleConfig:{centered:e.hasAttribute(Nc),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Ar(s,this._ngZone,i,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(Na)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Lc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var lh=["mat-icon-button",""],ch=["*"],dh=new b("MAT_BUTTON_CONFIG");function Bc(t){return t==null?void 0:Ao(t)}var La=(()=>{class t{_elementRef=c(J);_ngZone=c(Z);_animationsDisabled=Sn();_config=c(dh,{optional:!0});_focusMonitor=c(Ia);_cleanupClick;_renderer=c(_e);_rippleLoader=c(kc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Gt).load(Lc);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(re("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ui(r.color?"mat-"+r.color:""),q("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ge],disabled:[2,"disabled","disabled",ge],ariaDisabled:[2,"aria-disabled","ariaDisabled",ge],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ge],tabIndex:[2,"tabIndex","tabIndex",Bc],_tabindex:[2,"tabindex","_tabindex",Bc]}})}return t})(),Wt=(()=>{class t extends La{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Oe],attrs:lh,ngContentSelectors:ch,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ze(),Q(0,"span",0),ee(1),Q(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var uh=new b("cdk-dir-doc",{providedIn:"root",factory:()=>c(k)}),mh=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function jc(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?mh.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ba=(()=>{class t{get value(){return this.valueSignal()}valueSignal=E("ltr");change=new pe;constructor(){let e=c(uh,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(jc(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ie=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({})}return t})();var Vc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[Ie]})}return t})();var fh=["matButton",""],hh=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ph=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Uc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Rr=(()=>{class t extends La{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=gh(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Uc.get(this._appearance):null,o=Uc.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Oe],attrs:fh,ngContentSelectors:ph,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ze(hh),Q(0,"span",0),ee(1),D(2,"span",1),ee(3,1),x(),ee(4,2),Q(5,"span",2)(6,"span",3)),i&2&&q("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function gh(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Mn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[Vc,Ie]})}return t})();function zc(t){return Error(`Unable to find icon with the name "${t}"`)}function vh(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Hc(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function $c(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var ht=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},qc=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new ht(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Te.HTML,r);if(!a)throw $c(r);let s=En(a);return this._addSvgIconConfig(e,i,new ht("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new ht(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Te.HTML,i);if(!o)throw $c(i);let a=En(o);return this._addSvgIconSetConfig(e,new ht("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Te.RESOURCE_URL,e);if(!i)throw Hc(e);let r=this._cachedIconsByUrl.get(i);return r?_(Fr(r)):this._loadSvgIconFromConfig(new ht(e,null)).pipe(ye(o=>this._cachedIconsByUrl.set(i,o)),H(o=>Fr(o)))}getNamedSvgIcon(e,i=""){let r=Gc(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Ai(zc(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?_(Fr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(H(i=>Fr(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return _(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Jt(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Te.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),_(null)})));return Ri(o).pipe(H(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw zc(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ye(i=>e.svgText=i),H(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?_(null):this._fetchIcon(e).pipe(ye(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(En("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(En("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw vh();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Te.RESOURCE_URL,i);if(!a)throw Hc(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(H(d=>En(d)),en(()=>this._inProgressUrlFetches.delete(a)),fs());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(Gc(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return bh(o)?new ht(o.url,null,o.options):new ht(o,null)}}static \u0275fac=function(i){return new(i||t)(M(Go,8),M(Wo),M(k,8),M(Ft))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Fr(t){return t.cloneNode(!0)}function Gc(t,n){return t+":"+n}function bh(t){return!!(t.url&&t.options)}var yh=["*"],_h=new b("MAT_ICON_DEFAULT_OPTIONS"),Dh=new b("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(k),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Wc=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ch=Wc.map(t=>`[${t}]`).join(", "),wh=/^url\(['"]?#(.*?)['"]?\)$/,An=(()=>{class t{_elementRef=c(J);_iconRegistry=c(qc);_location=c(Dh);_errorHandler=c(Ft);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Xt.EMPTY;constructor(){let e=c(new zi("aria-hidden"),{optional:!0}),i=c(_h,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(Ch),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)Wc.forEach(a=>{let s=i[o],l=s.getAttribute(a),d=l?l.match(wh):null;if(d){let g=r.get(s);g||(g=[],r.set(s,g)),g.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ce(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(re("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ui(r.color?"mat-"+r.color:""),q("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ge],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:yh,decls:1,vars:0,template:function(i,r){i&1&&(ze(),ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),In=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[Ie]})}return t})();var Rn=class t{articlesState=E([]);activePageState=E(1);pageSizeState=E(7);totalCountState=E(0);userCreatedCountState=E(0);hasLoadedState=E(!1);articles=this.articlesState.asReadonly();activePage=this.activePageState.asReadonly();pageSize=this.pageSizeState.asReadonly();totalCount=this.totalCountState.asReadonly();userCreatedCount=this.userCreatedCountState.asReadonly();hasLoaded=this.hasLoadedState.asReadonly();saveArticles(n){this.articlesState.set(n.map(e=>p({},e))),this.hasLoadedState.set(!0)}savePaginationState(n,e=this.pageSizeState()){this.activePageState.set(n),this.pageSizeState.set(e)}saveTotalCount(n){this.totalCountState.set(n)}saveUserCreatedCount(n){this.userCreatedCountState.set(n)}savePage(n){this.saveArticles(n.articles),this.savePaginationState(n.page,n.pageSize),this.saveTotalCount(n.totalCount),this.saveUserCreatedCount(n.userCreatedCount)}hasSnapshot(n,e){return this.hasLoaded()&&this.activePage()===n&&this.pageSize()===e}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var xt=[{id:1,title:"\u041A\u0430\u043A \u044F \u043D\u0430\u0447\u0430\u043B \u0438\u0437\u0443\u0447\u0430\u0442\u044C iOS-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438 \u043F\u0440\u043E\u0448\u0451\u043B \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432 \u0428\u0418\u0424\u0422",text:"\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u043E \u0441\u0432\u043E\u0451\u043C \u043E\u043F\u044B\u0442\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u0430 \u0428\u0418\u0424\u0422 \u0432 \u0426\u0424\u0422: \u043A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u0438\u0437\u0443\u0447\u0430\u043B\u0438 \u0438 \u0447\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0432 \u0438\u0442\u043E\u0433\u0435.",dateLabel:"Jan 10, 2025",isoDate:"2025-01-10",tag:"iOS",theme:"red",image:"images/Selection.png",isUserCreated:!1,rating:5},{id:2,title:"Git \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445: \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",text:"",dateLabel:"Feb 5, 2025",isoDate:"2025-02-05",tag:"Git",theme:"green",image:"images/Selection.png",isUserCreated:!1,rating:4},{id:3,title:"\u041F\u0435\u0440\u0432\u044B\u0435 \u0448\u0430\u0433\u0438 \u0432 HTML: \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",text:"",dateLabel:"Mar 1, 2025",isoDate:"2025-03-01",tag:"HTML",theme:"neutral",image:"images/Selection.png",isUserCreated:!1,rating:3},{id:4,title:"\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0442\u0435\u0433\u0438 HTML: \u0437\u0430\u0447\u0435\u043C \u043E\u043D\u0438 \u043D\u0443\u0436\u043D\u044B",text:"",dateLabel:"Mar 5, 2025",isoDate:"2025-03-05",tag:"HTML",theme:"neutral",image:"images/Selection.png",isUserCreated:!1,rating:4},{id:5,title:"Aurora OS: \u043E\u043F\u044B\u0442 \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",text:"",dateLabel:"Mar 8, 2025",isoDate:"2025-03-08",tag:"Aurora",theme:"neutral",image:"images/Selection.png",isUserCreated:!1,rating:5},{id:6,title:"CSS Flexbox: \u043A\u0430\u043A \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",text:"",dateLabel:"Mar 10, 2025",isoDate:"2025-03-10",tag:"CSS",theme:"green",image:"images/Selection.png",isUserCreated:!1,rating:4},{id:7,title:"CSS Grid: \u0441\u0435\u0442\u043A\u0438 \u0434\u043B\u044F \u0432\u0451\u0440\u0441\u0442\u043A\u0438",text:"",dateLabel:"Mar 15, 2025",isoDate:"2025-03-15",tag:"CSS",theme:"green",image:"images/Selection.png",isUserCreated:!1,rating:4}];var Tr=class t{storageKey="kovali-blog-articles";platformId=c(et);getArticles(n){return _(this.buildPage(this.readArticles(),n))}addArticle(n,e){let i=[this.createArticle(n),...this.readArticles()];return this.writeArticles(i),_(this.buildPage(i,e))}updateArticle(n,e,i){let r=this.readArticles().map(o=>o.id===n?N(p({},o),{title:e.title,text:e.text}):o);return this.writeArticles(r),_(this.buildPage(r,i))}deleteArticle(n,e){let i=this.readArticles().filter(r=>r.id!==n);return this.writeArticles(i),_(this.buildPage(i,e))}createArticle(n){let e=new Date;return{id:Date.now(),title:n.title,text:n.text,dateLabel:e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),isoDate:e.toISOString().slice(0,10),tag:"New",theme:"neutral",image:"images/Selection.png",isUserCreated:!0,rating:0}}readArticles(){if(!it(this.platformId))return yi(xt);let n=localStorage.getItem(this.storageKey);if(n===null){let i=yi(xt);return this.writeArticles(i),i}try{let i=JSON.parse(n);if(xh(i))return yi(i)}catch{}let e=yi(xt);return this.writeArticles(e),e}writeArticles(n){it(this.platformId)&&localStorage.setItem(this.storageKey,JSON.stringify(n))}buildPage(n,e){let i=Math.max(1,Math.floor(e.pageSize)),r=n.length,o=Math.max(1,Math.ceil(r/i)),a=r===0?1:Eh(Math.floor(e.page),1,o),s=(a-1)*i;return{articles:yi(n.slice(s,s+i)),totalCount:r,userCreatedCount:n.filter(l=>l.isUserCreated).length,page:a,pageSize:i}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};function yi(t){return t.map(n=>N(p({},n),{rating:n.rating??0}))}function Eh(t,n,e){return Math.min(Math.max(t,n),e)}function xh(t){return Array.isArray(t)&&t.every(n=>typeof n=="object"&&n!==null&&typeof n.id=="number"&&typeof n.title=="string"&&typeof n.text=="string"&&typeof n.dateLabel=="string"&&typeof n.isoDate=="string"&&typeof n.tag=="string"&&Sh(n.theme)&&typeof n.image=="string"&&typeof n.isUserCreated=="boolean"&&(typeof n.rating=="number"||n.rating===void 0))}function Sh(t){return t==="red"||t==="green"||t==="neutral"}var Or=new b("ARTICLES_SERVICE",{providedIn:"root",factory:()=>c(Tr)});var ed=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(j(_e),j(J))};static \u0275dir=R({type:t})}return t})(),Mh=(()=>{class t extends ed{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275dir=R({type:t,features:[Oe]})}return t})(),td=new b("");var Ah={provide:td,useExisting:kn(()=>On),multi:!0};function Ih(){let t=He()?He().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Rh=new b(""),On=(()=>{class t extends ed{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Ih())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(j(_e),j(J),j(Rh,8))};static \u0275dir=R({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&P("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ze([Ah]),Oe]})}return t})();function Ha(t){return t==null||$a(t)===0}function $a(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ga=new b(""),qa=new b(""),Fh=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ke=class{static min(n){return Th(n)}static max(n){return Oh(n)}static required(n){return Ph(n)}static requiredTrue(n){return Nh(n)}static email(n){return kh(n)}static minLength(n){return Lh(n)}static maxLength(n){return Bh(n)}static pattern(n){return jh(n)}static nullValidator(n){return nd()}static compose(n){return ld(n)}static composeAsync(n){return cd(n)}};function Th(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Oh(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Ph(t){return Ha(t.value)?{required:!0}:null}function Nh(t){return t.value===!0?null:{required:!0}}function kh(t){return Ha(t.value)||Fh.test(t.value)?null:{email:!0}}function Lh(t){return n=>{let e=n.value?.length??$a(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Bh(t){return n=>{let e=n.value?.length??$a(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function jh(t){if(!t)return nd;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Ha(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function nd(t){return null}function id(t){return t!=null}function rd(t){return Vn(t)?be(t):t}function od(t){let n={};return t.forEach(e=>{n=e!=null?p(p({},n),e):n}),Object.keys(n).length===0?null:n}function ad(t,n){return n.map(e=>e(t))}function Vh(t){return!t.validate}function sd(t){return t.map(n=>Vh(n)?n:e=>n.validate(e))}function ld(t){if(!t)return null;let n=t.filter(id);return n.length==0?null:function(e){return od(ad(e,n))}}function Wa(t){return t!=null?ld(sd(t)):null}function cd(t){if(!t)return null;let n=t.filter(id);return n.length==0?null:function(e){let i=ad(e,n).map(rd);return Ri(i).pipe(H(od))}}function Za(t){return t!=null?cd(sd(t)):null}function Zc(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function dd(t){return t._rawValidators}function ud(t){return t._rawAsyncValidators}function Ua(t){return t?Array.isArray(t)?t:[t]:[]}function Nr(t,n){return Array.isArray(t)?t.includes(n):t===n}function Yc(t,n){let e=Ua(n);return Ua(t).forEach(r=>{Nr(e,r)||e.push(r)}),e}function Kc(t,n){return Ua(n).filter(e=>!Nr(t,e))}var kr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Wa(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Za(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},St=class extends kr{name;get formDirective(){return null}get path(){return null}},Zt=class extends kr{_parent=null;name=null;valueAccessor=null},Lr=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var $r=(()=>{class t extends Lr{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(j(Zt,2))};static \u0275dir=R({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Oe]})}return t})(),Gr=(()=>{class t extends Lr{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(j(St,10))};static \u0275dir=R({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Oe]})}return t})();var _i="VALID",Pr="INVALID",Fn="PENDING",Di="DISABLED",Mt=class{},Br=class extends Mt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},wi=class extends Mt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Ei=class extends Mt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Tn=class extends Mt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},jr=class extends Mt{source;constructor(n){super(),this.source=n}},Vr=class extends Mt{source;constructor(n){super(),this.source=n}};function md(t){return(qr(t)?t.validators:t)||null}function Uh(t){return Array.isArray(t)?Wa(t):t||null}function fd(t,n){return(qr(n)?n.asyncValidators:t)||null}function zh(t){return Array.isArray(t)?Za(t):t||null}function qr(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Hh(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new S(1e3,"");if(!i[e])throw new S(1001,"")}function $h(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new S(1002,"")})}var Ur=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return U(this.statusReactive)}set status(n){U(()=>this.statusReactive.set(n))}_status=K(()=>this.statusReactive());statusReactive=E(void 0);get valid(){return this.status===_i}get invalid(){return this.status===Pr}get pending(){return this.status===Fn}get disabled(){return this.status===Di}get enabled(){return this.status!==Di}errors;get pristine(){return U(this.pristineReactive)}set pristine(n){U(()=>this.pristineReactive.set(n))}_pristine=K(()=>this.pristineReactive());pristineReactive=E(!0);get dirty(){return!this.pristine}get touched(){return U(this.touchedReactive)}set touched(n){U(()=>this.touchedReactive.set(n))}_touched=K(()=>this.touchedReactive());touchedReactive=E(!1);get untouched(){return!this.touched}_events=new te;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Yc(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Yc(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Kc(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Kc(n,this._rawAsyncValidators))}hasValidator(n){return Nr(this._rawValidators,n)}hasAsyncValidator(n){return Nr(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(N(p({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ei(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ei(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(N(p({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new wi(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new wi(!0,i))}markAsPending(n={}){this.status=Fn;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Tn(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(N(p({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Di,this.errors=null,this._forEachChild(r=>{r.disable(N(p({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Br(this.value,i)),this._events.next(new Tn(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(N(p({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=_i,this._forEachChild(i=>{i.enable(N(p({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(N(p({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_i||this.status===Fn)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Br(this.value,e)),this._events.next(new Tn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(N(p({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Di:_i}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Fn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=rd(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Tn(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new pe,this.statusChanges=new pe}_calculateStatus(){return this._allControlsDisabled()?Di:this.errors?Pr:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Fn)?Fn:this._anyControlsHaveStatus(Pr)?Pr:_i}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new wi(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ei(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){qr(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Uh(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=zh(this._rawAsyncValidators)}},At=class extends Ur{constructor(n,e,i){super(md(e),fd(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){$h(this,!0,n),Object.keys(n).forEach(i=>{Hh(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,N(p({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Vr(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Ya=new b("",{factory:()=>Ka}),Ka="always";function Gh(t,n){return[...n.path,t]}function za(t,n,e=Ka){Xa(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),Wh(t,n),Yh(t,n),Zh(t,n),qh(t,n)}function Xc(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Hr(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function zr(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function qh(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Xa(t,n){let e=dd(t);n.validator!==null?t.setValidators(Zc(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=ud(t);n.asyncValidator!==null?t.setAsyncValidators(Zc(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();zr(n._rawValidators,r),zr(n._rawAsyncValidators,r)}function Hr(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=dd(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=ud(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return zr(n._rawValidators,i),zr(n._rawAsyncValidators,i),e}function Wh(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&hd(t,n)})}function Zh(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&hd(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function hd(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Yh(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function pd(t,n){t==null,Xa(t,n)}function Kh(t,n){return Hr(t,n)}function Xh(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Jh(t){return Object.getPrototypeOf(t.constructor)===Mh}function gd(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Qh(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===On?e=o:Jh(o)?i=o:r=o}),r||i||e||null}function ep(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var tp={provide:St,useExisting:kn(()=>Ja)},Ci=Promise.resolve(),Ja=(()=>{class t extends St{callSetDisabledState;get submitted(){return U(this.submittedReactive)}_submitted=K(()=>this.submittedReactive());submittedReactive=E(!1);_directives=new Set;form;ngSubmit=new pe;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new At({},Wa(e),Za(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ci.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),za(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ci.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ci.then(()=>{let i=this._findContainer(e.path),r=new At({});pd(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ci.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Ci.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),gd(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new jr(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(j(Ga,10),j(qa,10),j(Ya,8))};static \u0275dir=R({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&P("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ze([tp]),Oe]})}return t})();function Jc(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Qc(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Yt=class extends Ur{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(md(e),fd(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),qr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Qc(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Vr(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Jc(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Jc(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Qc(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var np=t=>t instanceof Yt;var Wr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var ip=(()=>{class t extends St{callSetDisabledState;get submitted(){return U(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=K(()=>this._submittedReactive());_submittedReactive=E(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Hr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return za(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Xc(e.control||null,e,!1),ep(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,gd(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new jr(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Xc(i||null,e),np(r)&&(za(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);pd(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&Kh(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Xa(this.form,this),this._oldForm&&Hr(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(j(Ga,10),j(qa,10),j(Ya,8))};static \u0275dir=R({type:t,features:[Oe,Ve]})}return t})();var vd=new b("");var rp={provide:Zt,useExisting:kn(()=>xi)},xi=(()=>{class t extends Zt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new pe;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Qh(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Xh(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Gh(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(j(St,13),j(Ga,10),j(qa,10),j(td,10),j(vd,8))};static \u0275dir=R({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Ze([rp]),Oe,Ve]})}return t})();var op={provide:St,useExisting:kn(()=>Kt)},Kt=(()=>{class t extends ip{form=null;ngSubmit=new pe;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275dir=R({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&P("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ze([op]),Oe]})}return t})();var ap=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({})}return t})();var Zr=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:vd,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ya,useValue:e.callSetDisabledState??Ka}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[ap]})}return t})();function sp(t,n){if(t&1&&(u(0,"span",10),m(1),h()),t&2){let e=n.$implicit;f(),I(e)}}function lp(t,n){if(t&1&&de(0,sp,2,1,"span",10,Eo),t&2){let e=L();ue(e.getControlErrors("title"))}}function cp(t,n){if(t&1&&(u(0,"span",10),m(1),h()),t&2){let e=n.$implicit;f(),I(e)}}function dp(t,n){if(t&1&&de(0,cp,2,1,"span",10,Eo),t&2){let e=L();ue(e.getControlErrors("text"))}}var Yr=class t{isSubmitting=ne(!1);visible=ne(!1);mode=ne("create");initialDraft=ne(null);submitArticle=Pt();cancel=Pt();formTitle=K(()=>this.mode()==="edit"?"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");submitButtonLabel=K(()=>this.isSubmitting()?this.mode()==="edit"?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435...":this.mode()==="edit"?"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");form=new At({title:new Yt("",{nonNullable:!0,validators:[ke.required,ke.minLength(25)]}),text:new Yt("",{nonNullable:!0,validators:[ke.required]})});constructor(){st(()=>{if(this.isSubmitting()){this.form.disable({emitEvent:!1});return}this.form.enable({emitEvent:!1})}),st(()=>{!this.visible()&&!this.isSubmitting()&&this.resetForm()}),st(()=>{if(!this.visible())return;let n=this.initialDraft();this.form.reset({title:n?.title??"",text:n?.text??""})})}hasError(n){let e=this.form.get(n);return!!(e?.invalid&&e.touched)}getControlErrors(n){let i=this.form.get(n)?.errors??null;return i?Object.entries(i).map(([r,o])=>this.getErrorStr(n,r,o)):[]}submit(){if(this.form.invalid){this.form.markAllAsTouched();return}this.submitArticle.emit({title:this.form.controls.title.value.trim(),text:this.form.controls.text.value.trim()})}resetForm(){this.form.reset({title:"",text:""})}getErrorStr(n,e,i){switch(e){case"required":return n==="title"?"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D":"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D";case"minlength":{let{requiredLength:r,actualLength:o}=i;return`\u041D\u0443\u0436\u043D\u043E \u0435\u0449\u0435 ${r-o} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432`}default:return"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u043F\u043E\u043B\u044F"}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-article-form"]],inputs:{isSubmitting:[1,"isSubmitting"],visible:[1,"visible"],mode:[1,"mode"],initialDraft:[1,"initialDraft"]},outputs:{submitArticle:"submitArticle",cancel:"cancel"},decls:19,vars:13,consts:[[1,"article-form-wrap"],[1,"article-form",3,"ngSubmit","formGroup"],[1,"form-field"],["for","article-title"],["id","article-title","type","text","formControlName","title","placeholder","\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438",1,"form-control"],["for","article-text"],["id","article-text","formControlName","text","placeholder","\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438",1,"form-control"],[1,"form-buttons"],["type","submit",1,"btn-save",3,"disabled"],["type","button",1,"btn-cancel",3,"click","disabled"],[1,"form-error"]],template:function(e,i){if(e&1&&(u(0,"section",0)(1,"form",1),P("ngSubmit",function(){return i.submit()}),u(2,"h2"),m(3),h(),u(4,"div",2)(5,"label",3),m(6,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),h(),V(7,"input",4),$(8,lp,2,0),h(),u(9,"div",2)(10,"label",5),m(11,"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438"),h(),V(12,"textarea",6),$(13,dp,2,0),h(),u(14,"div",7)(15,"button",8),m(16),h(),u(17,"button",9),P("click",function(){return i.cancel.emit()}),m(18," \u041E\u0442\u043C\u0435\u043D\u0430 "),h()()()()),e&2){q("visible",i.visible()),f(),O("formGroup",i.form),f(2),I(i.formTitle());let r=i.hasError("title");f(4),q("form-control--invalid",r),f(),G(r?8:-1);let o=i.hasError("text");f(4),q("form-control--invalid",o),f(),G(o?13:-1),f(2),O("disabled",i.isSubmitting()||i.form.invalid),f(),on(" ",i.submitButtonLabel()," "),f(),O("disabled",i.isSubmitting())}},dependencies:[Zr,Wr,On,$r,Gr,Kt,xi],encapsulation:2})};var yd=t=>["/blog",t],up=(t,n)=>n.id;function mp(t,n){t&1&&(u(0,"div",3)(1,"p"),m(2,"\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u0435\u0439"),h()())}function fp(t,n){if(t&1&&(u(0,"p"),m(1),h()),t&2){let e=L();f(),I(e.text)}}function hp(t,n){if(t&1){let e=yt();u(0,"article",4)(1,"div",7)(2,"button",8),P("click",function(r){let o=Me(e),a=L();return Ae(a.handleEditClick(r,o))}),u(3,"mat-icon",9),m(4,"edit"),h()(),u(5,"button",10),P("click",function(r){let o=Me(e),a=L();return Ae(a.handleDeleteClick(r,o.id))}),u(6,"mat-icon",9),m(7,"delete"),h()()(),u(8,"div",11),V(9,"img",12),h(),u(10,"div",13)(11,"h2"),m(12),h(),$(13,fp,2,1,"p"),u(14,"time"),m(15),h()()()}if(t&2){let e=n;O("routerLink",zn(6,yd,e.id)),f(9),O("src",e.image,Ue),f(3),I(e.title),f(),G(e.text?13:-1),f(),re("datetime",e.isoDate),f(),I(e.dateLabel)}}function pp(t,n){if(t&1){let e=yt();u(0,"article",14)(1,"div",7)(2,"button",8),P("click",function(r){let o=Me(e).$implicit,a=L(2);return Ae(a.handleEditClick(r,o))}),u(3,"mat-icon",9),m(4,"edit"),h()(),u(5,"button",10),P("click",function(r){let o=Me(e).$implicit,a=L(2);return Ae(a.handleDeleteClick(r,o.id))}),u(6,"mat-icon",9),m(7,"delete"),h()()(),u(8,"div",15),V(9,"img",12),h(),u(10,"div",16)(11,"h3"),m(12),h(),u(13,"time"),m(14),h()()()}if(t&2){let e=n.$implicit;O("routerLink",zn(5,yd,e.id)),f(9),O("src",e.image,Ue),f(3),I(e.title),f(),re("datetime",e.isoDate),f(),I(e.dateLabel)}}function gp(t,n){if(t&1&&(u(0,"div",5),de(1,pp,15,7,"article",14,up),h()),t&2){let e=L();f(),ue(e.regularArticles())}}function vp(t,n){if(t&1){let e=yt();u(0,"button",19),P("click",function(){let r=Me(e).$implicit,o=L(2);return Ae(o.selectPage(r))}),m(1),h()}if(t&2){let e=n.$implicit,i=L(2);q("pagination-page--active",e===i.activePage()),re("aria-current",e===i.activePage()?"page":null),f(),on(" ",e," ")}}function bp(t,n){if(t&1){let e=yt();u(0,"nav",6)(1,"button",17),P("click",function(){Me(e);let r=L();return Ae(r.selectPage(r.activePage()-1))}),m(2," Back "),h(),de(3,vp,2,4,"button",18,ji),u(5,"button",17),P("click",function(){Me(e);let r=L();return Ae(r.selectPage(r.activePage()+1))}),m(6," Next \u2192 "),h()()}if(t&2){let e=L();f(),O("disabled",e.activePage()===1),f(2),ue(e.pages()),f(2),O("disabled",e.activePage()===e.totalPages())}}var Kr=class t{articles=ne.required();activePage=ne.required();pageSize=ne.required();totalCount=ne.required();deleteArticle=Pt();editArticle=Pt();pageChange=Pt();featuredArticle=K(()=>this.articles()[0]??null);regularArticles=K(()=>this.articles().slice(1));totalPages=K(()=>Math.ceil(this.totalCount()/this.pageSize()));pages=K(()=>Array.from({length:this.totalPages()},(n,e)=>e+1));selectPage(n){n<1||n>this.totalPages()||n===this.activePage()||this.pageChange.emit(n)}handleEditClick(n,e){n.preventDefault(),n.stopPropagation(),this.editArticle.emit(e)}handleDeleteClick(n,e){n.preventDefault(),n.stopPropagation(),this.deleteArticle.emit(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-blog-articles"]],inputs:{articles:[1,"articles"],activePage:[1,"activePage"],pageSize:[1,"pageSize"],totalCount:[1,"totalCount"]},outputs:{deleteArticle:"deleteArticle",editArticle:"editArticle",pageChange:"pageChange"},decls:7,vars:4,consts:[["id","blog-articles"],[1,"loader-container",2,"display","none"],[1,"loader"],[1,"no-articles-state"],["tabindex","0",1,"blog-featured",3,"routerLink"],[1,"blog-grid"],["aria-label","\u041F\u0430\u0433\u0438\u043D\u0430\u0446\u0438\u044F \u0441\u0442\u0430\u0442\u0435\u0439",1,"pagination"],[1,"article-actions"],["mat-icon-button","","type","button","aria-label","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","title","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"article-card-action","edit-btn",3,"click"],["fontSet","material-symbols-outlined"],["mat-icon-button","","type","button","aria-label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","title","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"article-card-action","delete-btn",3,"click"],[1,"blog-featured-image"],["alt","\u0421\u0442\u0430\u0442\u044C\u044F",3,"src"],[1,"blog-featured-text"],["tabindex","0",1,"blog-card",3,"routerLink"],[1,"blog-card-image"],[1,"blog-card-content"],["mat-stroked-button","","type","button",1,"pagination-btn",3,"click","disabled"],["mat-stroked-button","","type","button",1,"pagination-btn","pagination-page",3,"pagination-page--active"],["mat-stroked-button","","type","button",1,"pagination-btn","pagination-page",3,"click"]],template:function(e,i){if(e&1&&(u(0,"section",0)(1,"div",1),V(2,"span",2),h(),$(3,mp,3,0,"div",3),$(4,hp,16,8,"article",4),$(5,gp,3,0,"div",5),$(6,bp,7,2,"nav",6),h()),e&2){let r;f(3),G(i.articles().length?-1:3),f(),G((r=i.featuredArticle())?4:-1,r),f(),G(i.regularArticles().length?5:-1),f(),G(i.totalPages()>1?6:-1)}},dependencies:[qe,Mn,Rr,Wt,In,An],styles:[".pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;margin:24px 0 80px}.pagination-btn[_ngcontent-%COMP%]{min-width:40px;height:40px;padding:0 14px;border:1.5px solid var(--color-accent-green);border-radius:6px;background:#fff;color:var(--color-accent-green);font-family:Inter,sans-serif;font-size:14px;font-weight:500;cursor:pointer;transition:background .2s ease,color .2s ease,opacity .2s ease}.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled), .pagination-page--active[_ngcontent-%COMP%]{background:var(--color-accent-green);color:#fff}.pagination-btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.45}@media(max-width:800px){.pagination[_ngcontent-%COMP%]{flex-wrap:wrap}}"]})};var yp=["statsDialog"],_p=["articleFormElement"],Xr=class t{statsDialog;articleFormElement;blogArticlesPageSize=7;articlesService=c(Or);articlesStore=c(Rn);articles=this.articlesStore.articles;activePage=this.articlesStore.activePage;pageSize=this.articlesStore.pageSize;totalCount=this.articlesStore.totalCount;userCreatedCount=this.articlesStore.userCreatedCount;showForm=E(!1);isSubmitting=E(!1);editingArticle=E(null);formMode=K(()=>this.editingArticle()===null?"create":"edit");formDraft=K(()=>{let n=this.editingArticle();return n===null?null:{title:n.title,text:n.text}});ngOnInit(){let n=this.articlesStore.pageSize()===this.blogArticlesPageSize?this.articlesStore.activePage():1;this.articlesStore.hasSnapshot(n,this.blogArticlesPageSize)||this.loadArticles(n)}toggleCreateForm(){if(!this.isSubmitting()){if(this.showForm()&&this.formMode()==="create"){this.closeForm();return}this.editingArticle.set(null),this.showForm.set(!0)}}closeForm(){this.isSubmitting()||(this.editingArticle.set(null),this.showForm.set(!1))}toggleStats(){let n=this.statsDialog?.nativeElement;if(n){if(n.open){n.close();return}n.showModal()}}closeStats(){this.statsDialog?.nativeElement.close()}handleDialogClick(n){n.target===this.statsDialog?.nativeElement&&this.closeStats()}startEditing(n){this.isSubmitting()||(this.editingArticle.set(n),this.showForm.set(!0),this.scrollToArticleForm())}submitArticle(n){this.isSubmitting.set(!0);let e=this.editingArticle()?.id??null;globalThis.setTimeout(()=>{let i={page:e===null?1:this.activePage(),pageSize:this.blogArticlesPageSize};(e===null?this.articlesService.addArticle(n,i):this.articlesService.updateArticle(e,n,i)).pipe(ce(1)).subscribe(o=>{this.articlesStore.savePage(o),this.isSubmitting.set(!1),this.editingArticle.set(null),this.showForm.set(!1)})},1e3)}deleteArticle(n){this.editingArticle()?.id===n&&this.closeForm(),this.articlesService.deleteArticle(n,{page:this.activePage(),pageSize:this.blogArticlesPageSize}).pipe(ce(1)).subscribe(e=>this.articlesStore.savePage(e))}changePage(n){this.loadArticles(n)}loadArticles(n){this.articlesService.getArticles({page:n,pageSize:this.blogArticlesPageSize}).pipe(ce(1)).subscribe(e=>this.articlesStore.savePage(e))}scrollToArticleForm(){globalThis.setTimeout(()=>{let n=this.articleFormElement?.nativeElement.querySelector("#article-title, #article-text");n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),n.focus({preventScroll:!0}))},150)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-blog"]],viewQuery:function(e,i){if(e&1&&Un(yp,5)(_p,5,J),e&2){let r;ae(r=se())&&(i.statsDialog=r.first),ae(r=se())&&(i.articleFormElement=r.first)}},decls:36,vars:10,consts:[["statsDialog",""],["articleFormElement",""],[1,"admin-panel"],["mat-icon-button","","type","button","title","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"admin-btn",3,"click"],["fontSet","material-symbols-outlined"],["mat-icon-button","","type","button","title","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",1,"admin-btn",3,"click"],["id","stats-dialog",3,"click"],["type","button",1,"dialog-close",3,"click"],[1,"stats-grid"],[1,"stats-card"],["id","blog-hero"],[1,"blog-hero-inner"],[1,"blog-hero-text"],[1,"blog-hero-circle"],["src","images/blogs-circle.png","alt","My blogs"],[3,"deleteArticle","editArticle","pageChange","articles","activePage","pageSize","totalCount"],[3,"submitArticle","cancel","visible","isSubmitting","mode","initialDraft"]],template:function(e,i){e&1&&(u(0,"aside",2)(1,"button",3),P("click",function(){return i.toggleCreateForm()}),u(2,"mat-icon",4),m(3,"add"),h()(),u(4,"button",5),P("click",function(){return i.toggleStats()}),u(5,"mat-icon",4),m(6,"bar_chart"),h()()(),u(7,"dialog",6,0),P("click",function(o){return i.handleDialogClick(o)}),u(9,"button",7),P("click",function(){return i.closeStats()}),m(10,"\xD7"),h(),u(11,"h2"),m(12,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"),h(),u(13,"div",8)(14,"div",9)(15,"p"),m(16,"\u0412\u0441\u0435\u0433\u043E \u0441\u0442\u0430\u0442\u0435\u0439:"),h(),u(17,"span"),m(18),h()(),u(19,"div",9)(20,"p"),m(21,"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E:"),h(),u(22,"span"),m(23),h()()()(),u(24,"section",10)(25,"div",11)(26,"div",12)(27,"h1"),m(28,"My blogs"),h(),u(29,"p"),m(30,"\u0417\u0434\u0435\u0441\u044C \u044F \u0434\u0435\u043B\u044E\u0441\u044C \u0441\u0432\u043E\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435, \u0443\u0447\u0451\u0431\u0435 \u0432 \u0421\u0438\u0431\u0413\u0423\u0422\u0418 \u0438 \u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438."),h()(),u(31,"div",13),V(32,"img",14),h()()(),u(33,"app-blog-articles",15),P("deleteArticle",function(o){return i.deleteArticle(o)})("editArticle",function(o){return i.startEditing(o)})("pageChange",function(o){return i.changePage(o)}),h(),u(34,"app-article-form",16,1),P("submitArticle",function(o){return i.submitArticle(o)})("cancel",function(){return i.closeForm()}),h()),e&2&&(f(18),I(i.totalCount()),f(5),I(i.userCreatedCount()),f(10),O("articles",i.articles())("activePage",i.activePage())("pageSize",i.pageSize())("totalCount",i.totalCount()),f(),O("visible",i.showForm())("isSubmitting",i.isSubmitting())("mode",i.formMode())("initialDraft",i.formDraft()))},dependencies:[Yr,Kr,Mn,Wt,In,An],encapsulation:2})};var Dp=(t,n)=>n.title;function Cp(t,n){if(t&1&&(D(0,"article",4)(1,"span"),m(2),x(),D(3,"h3"),m(4),x(),D(5,"p"),m(6),x()()),t&2){let e=n.$implicit;f(2),I(e.period),f(2),I(e.title),f(2),I(e.description)}}var Jr=class t{educationItems=ne.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home-education"]],inputs:{educationItems:[1,"educationItems"]},decls:10,vars:0,consts:[["id","education"],[1,"education-inner"],[1,"education-heading"],[1,"education-list"],[1,"education-item"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),m(4,"Education"),x(),D(5,"p"),m(6,"\u0423\u0447\u0451\u0431\u0430 \u0438 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u043C\u043E\u044E \u0431\u0430\u0437\u0443 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."),x()(),D(7,"div",3),de(8,Cp,7,3,"article",4,Dp),x()()()),e&2&&(f(8),ue(i.educationItems()))},styles:["[_nghost-%COMP%]{display:block}#education[_ngcontent-%COMP%]{padding:0 132px;margin-top:120px}.education-inner[_ngcontent-%COMP%]{width:1176px;margin:0 auto}.education-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:60px;margin-bottom:24px}.education-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{flex:0 0 auto;font-size:40px;font-weight:700;color:var(--color-dark)}.education-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex:1;max-width:520px;padding-top:8px;font-size:15px;line-height:1.6;color:var(--color-gray)}.education-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}.education-item[_ngcontent-%COMP%]{border-top:2px solid #bdc1ca;padding-top:20px}.education-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-bottom:8px;font-size:12px;color:var(--color-gray)}.education-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:8px;font-size:18px;font-weight:700;color:var(--color-dark)}.education-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:1.6;color:var(--color-gray)}@media(max-width:800px){#education[_ngcontent-%COMP%]{padding:0 20px}.education-inner[_ngcontent-%COMP%]{width:100%}.education-heading[_ngcontent-%COMP%]{flex-direction:column;gap:12px}.education-list[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var Qr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home-hero"]],decls:17,vars:0,consts:[["id","about"],[1,"hero-inner"],[1,"hero-text"],["href","#contact",1,"hero-link"],[1,"hero-image"],[1,"hero-image-wrap"],["src","images/avatar.png","alt","\u0424\u043E\u0442\u043E"],["src","images/blogs-circle.png","alt","My blogs",1,"blogs-circle-img"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1"),m(4,"\u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u0413\u0440\u0438\u0433\u043E\u0440\u0438\u0439,"),Q(5,"br"),m(6,"Junior Developer"),x(),D(7,"p"),m(8," \u0421\u0442\u0443\u0434\u0435\u043D\u0442 3 \u043A\u0443\u0440\u0441\u0430 \u0421\u0438\u0431\u0413\u0423\u0422\u0418, \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438\u0437 \u0411\u0435\u0440\u0434\u0441\u043A\u0430. \u041F\u0440\u043E\u0448\u0451\u043B \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 iOS-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u044E \u0432\u0435\u0431-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 backend. "),x(),D(9,"a",3),m(10,"More about me "),D(11,"span"),m(12,"\u203A"),x()()(),D(13,"div",4)(14,"div",5),Q(15,"img",6)(16,"img",7),x()()()())},styles:["[_nghost-%COMP%]{display:block}"]})};var _d=(t,n)=>n.label;function wp(t,n){if(t&1&&(D(0,"div",3),Q(1,"img",5),D(2,"div",6)(3,"p"),m(4),x()()()),t&2){let e=n.$implicit;f(),nt("src",e.image,Ue)("alt",e.label),f(3),I(e.label)}}function Ep(t,n){if(t&1&&(D(0,"div",3),Q(1,"img",5),D(2,"div",6)(3,"p"),m(4),x()()()),t&2){let e=n.$implicit;f(),nt("src",e.image,Ue)("alt",e.label),f(3),I(e.label)}}var eo=class t{projects=ne.required();stack=ne.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home-hobby"]],inputs:{projects:[1,"projects"],stack:[1,"stack"]},decls:12,vars:0,consts:[["id","hobby"],[1,"hobby-header"],[1,"hobby-grid"],[1,"hobby-card"],[1,"hobby-stack"],[3,"src","alt"],[1,"hobby-overlay"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"div",1)(2,"h2"),m(3,"Hobby projects"),x(),D(4,"p"),m(5," Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure labore est ea. "),x()(),D(6,"div",2),de(7,wp,5,3,"div",3,_d),D(9,"div",4),de(10,Ep,5,3,"div",3,_d),x()()()),e&2&&(f(7),ue(i.projects()),f(3),ue(i.stack()))},styles:["[_nghost-%COMP%]{display:block}"]})};var xp=t=>["/blog",t],Sp=(t,n)=>n.title;function Mp(t,n){if(t&1&&(u(0,"article",2)(1,"div",5)(2,"span",6),m(3),h(),u(4,"h3"),m(5),h(),u(6,"p"),m(7),h()(),u(8,"div",7),V(9,"img",8),h()()),t&2){let e=n.$implicit;O("routerLink",zn(5,xp,e.id)),f(3),I(e.tag),f(2),I(e.title),f(2),I(e.text),f(2),O("src",e.image,Ue)}}var to=class t{articles=ne.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home-articles"]],inputs:{articles:[1,"articles"]},decls:7,vars:0,consts:[["id","articles"],[1,"articles-list"],["tabindex","0",1,"article-card",3,"routerLink"],[1,"browse-btn-wrap"],["routerLink","/blog",1,"btn-outline"],[1,"article-card-text"],[1,"article-tag"],[1,"article-card-image"],["alt","\u0421\u0442\u0430\u0442\u044C\u044F",3,"src"]],template:function(e,i){e&1&&(u(0,"section",0)(1,"div",1),de(2,Mp,10,7,"article",2,Sp),h(),u(4,"div",3)(5,"a",4),m(6,"Browse all posts"),h()()()),e&2&&(f(2),ue(i.articles()))},dependencies:[qe],styles:[".articles-list[_ngcontent-%COMP%] > .article-card[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff5f0}.articles-list[_ngcontent-%COMP%] > .article-card[_ngcontent-%COMP%]:nth-child(odd)   .article-tag[_ngcontent-%COMP%]{color:#e8572a}.articles-list[_ngcontent-%COMP%] > .article-card[_ngcontent-%COMP%]:nth-child(2n){background-color:#f0fff5}.articles-list[_ngcontent-%COMP%] > .article-card[_ngcontent-%COMP%]:nth-child(2n)   .article-tag[_ngcontent-%COMP%]{color:var(--color-accent-green)}"]})};function Ap(t,n){if(t&1&&(D(0,"li"),m(1),x()),t&2){let e=n.$implicit;f(),I(e)}}var no=class t{skills=ne.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home-skills"]],inputs:{skills:[1,"skills"]},decls:6,vars:0,consts:[["id","skills"],[1,"skills-grid"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"h2"),m(2,"My skills"),x(),D(3,"ul",1),de(4,Ap,2,1,"li",null,ji),x()()),e&2&&(f(4),ue(i.skills()))},styles:["[_nghost-%COMP%]{display:block}"]})};var Ip=(t,n)=>n.title;function Rp(t,n){if(t&1&&(D(0,"div",4),Q(1,"img",5),D(2,"div",6)(3,"span",7),m(4),x(),D(5,"h4"),m(6),x(),D(7,"p"),m(8),x()()()),t&2){let e=n.$implicit;f(),nt("src",e.icon,Ue),f(3),I(e.period),f(2),I(e.title),f(2),I(e.description)}}var io=class t{workItems=ne.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home-work"]],inputs:{workItems:[1,"workItems"]},decls:10,vars:0,consts:[["id","work"],[1,"work-inner"],[1,"work-left"],[1,"work-right"],[1,"work-item"],["alt","icon",1,"work-icon",3,"src"],[1,"work-info"],[1,"work-period"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),m(4,"My work"),x(),D(5,"p"),m(6,"\u0421\u0442\u0443\u0434\u0435\u043D\u0442 \u0421\u0438\u0431\u0413\u0423\u0422\u0418, \u043F\u0440\u043E\u0445\u043E\u0436\u0443 \u043A\u0443\u0440\u0441\u044B \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0441\u044C \u0432 IT. \u0418\u0449\u0443 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0430\u0436\u0438\u0440\u043E\u0432\u043A\u0443 \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u0443."),x()(),D(7,"div",3),de(8,Rp,9,4,"div",4,Ip),x()()()),e&2&&(f(8),ue(i.workItems()))},styles:["[_nghost-%COMP%]{display:block}"]})};function Fp(t,n){if(t&1&&V(0,"app-home-articles",0),t&2){let e=L();O("articles",e.articles())}}var ro=class t{homeArticlesPage=1;homeArticlesPageSize=2;articlesService=c(Or);articlesStore=c(Rn);articles=this.articlesStore.articles;skills=["Swift / UIKit / SwiftUI","HTML / CSS","Angular","Git / GitHub","Java (backend)","Figma"];workItems=[{icon:"images/work-icon-2.png",period:"\u0428\u0418\u0424\u0422 \u0426\u0424\u0422 \u2014 (\u0410\u043F\u0440\u0435\u043B\u044C - \u0418\u044E\u043D\u044C 2023)",title:"iOS-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A",description:"80 \u0447\u0430\u0441\u043E\u0432 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u0430: Swift, UIKit, SwiftUI, MVC/MVVM. \u041F\u043E\u043B\u0443\u0447\u0435\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442."},{icon:"images/work-icon-3.png",period:"Eltex \u2014 (2025 - \u043D.\u0432.)",title:"\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A (\u043A\u0443\u0440\u0441)",description:"HTML, CSS, JavaScript, Angular, Git. \u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u0430\u043C Figma."}];educationItems=[{period:"2022 - \u043D.\u0432.",title:"\u0421\u0438\u0431\u0413\u0423\u0422\u0418, \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",description:"\u0418\u0437\u0443\u0447\u0430\u044E Java, \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B, \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443."},{period:"\u0410\u043F\u0440\u0435\u043B\u044C - \u0418\u044E\u043D\u044C 2023",title:"\u0418\u043D\u0442\u0435\u043D\u0441\u0438\u0432 \u0428\u0418\u0424\u0422 \u0426\u0424\u0422 \u043F\u043E iOS-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435",description:"80 \u0447\u0430\u0441\u043E\u0432 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438: Swift, UIKit, SwiftUI, MVC/MVVM. \u041F\u043E\u043B\u0443\u0447\u0435\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442."}];hobbyProjects=[{image:"images/hobby-1.png",label:"iOS \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435"},{image:"images/hobby-2.png",label:"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0441\u0430\u0439\u0442"}];hobbyStack=[{image:"images/Selection.png",label:"Aurora OS"},{image:"images/Selection.png",label:"Java \u043F\u0440\u043E\u0435\u043A\u0442"}];ngOnInit(){this.articlesStore.hasSnapshot(this.homeArticlesPage,this.homeArticlesPageSize)||this.articlesService.getArticles({page:this.homeArticlesPage,pageSize:this.homeArticlesPageSize}).pipe(ce(1)).subscribe(n=>this.articlesStore.savePage(n))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home"]],decls:6,vars:6,consts:[[3,"articles"],[3,"skills"],[3,"workItems"],[3,"educationItems"],[3,"projects","stack"]],template:function(e,i){e&1&&(V(0,"app-home-hero"),$(1,Fp,1,1,"app-home-articles",0),V(2,"app-home-skills",1)(3,"app-home-work",2)(4,"app-home-education",3)(5,"app-home-hobby",4)),e&2&&(f(),G(i.articles().length?1:-1),f(),O("skills",i.skills),f(),O("workItems",i.workItems),f(),O("educationItems",i.educationItems),f(),O("projects",i.hobbyProjects)("stack",i.hobbyStack))},dependencies:[Qr,to,no,io,Jr,eo],encapsulation:2})};function Dd(t){t||(t=c(Qe));let n=new pt(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(je(n))}var Tp=["*"];var Op=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Pp=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Np=new b("MAT_CARD_CONFIG"),Cd=(()=>{class t{appearance;constructor(){let e=c(Np,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&q("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Tp,decls:1,vars:0,template:function(i,r){i&1&&(ze(),ee(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),wd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Ed=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),xd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})(),Sd=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&q("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),Md=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Pp,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(ze(Op),ee(0),D(1,"div",0),ee(2,1),x(),ee(3,2))},encapsulation:2,changeDetection:0})}return t})();var Ad=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return t})();var Id=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[Ie]})}return t})();var Rd=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ft(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ft(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(re("aria-orientation",r.vertical?"vertical":"horizontal"),q("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})(),Fd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[Ie]})}return t})();var Qa=class{_box;_destroyed=new te;_resizeSubject=new te;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new pt(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Re(e=>e.some(i=>i.target===n)),hs({bufferSize:1,refCount:!0}),je(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Td=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(Z);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Qa(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bp=["notch"],jp=["matFormFieldNotchedOutline",""],Vp=["*"],Od=["iconPrefixContainer"],Pd=["textPrefixContainer"],Nd=["iconSuffixContainer"],kd=["textSuffixContainer"],Up=["textField"],zp=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Hp=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function $p(t,n){t&1&&V(0,"span",21)}function Gp(t,n){if(t&1&&(u(0,"label",20),ee(1,1),$(2,$p,1,0,"span",21),h()),t&2){let e=L(2);O("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),re("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),G(!e.hideRequiredMarker&&e._control.required?2:-1)}}function qp(t,n){if(t&1&&$(0,Gp,3,5,"label",20),t&2){let e=L();G(e._hasFloatingLabel()?0:-1)}}function Wp(t,n){t&1&&V(0,"div",7)}function Zp(t,n){}function Yp(t,n){if(t&1&&Li(0,Zp,0,0,"ng-template",13),t&2){L(2);let e=So(1);O("ngTemplateOutlet",e)}}function Kp(t,n){if(t&1&&(u(0,"div",9),$(1,Yp,1,1,null,13),h()),t&2){let e=L();O("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),G(e._forceDisplayInfixLabel()?-1:1)}}function Xp(t,n){t&1&&(u(0,"div",10,2),ee(2,2),h())}function Jp(t,n){t&1&&(u(0,"div",11,3),ee(2,3),h())}function Qp(t,n){}function eg(t,n){if(t&1&&Li(0,Qp,0,0,"ng-template",13),t&2){L();let e=So(1);O("ngTemplateOutlet",e)}}function tg(t,n){t&1&&(u(0,"div",14,4),ee(2,4),h())}function ng(t,n){t&1&&(u(0,"div",15,5),ee(2,5),h())}function ig(t,n){t&1&&V(0,"div",16)}function rg(t,n){t&1&&(u(0,"div",18),ee(1,6),h())}function og(t,n){if(t&1&&(u(0,"mat-hint",22),m(1),h()),t&2){let e=L(2);O("id",e._hintLabelId),f(),I(e.hintLabel)}}function ag(t,n){if(t&1&&(u(0,"div",19),$(1,og,2,2,"mat-hint",22),ee(2,7),V(3,"div",23),ee(4,8),h()),t&2){let e=L();f(),G(e.hintLabel?1:-1)}}var Si=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-label"]]})}return t})(),Hd=new b("MatError"),ts=(()=>{class t{id=c(mt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&nt("id",r.id)},inputs:{id:"id"},features:[Ze([{provide:Hd,useExisting:t}])]})}return t})(),es=(()=>{class t{align="start";id=c(mt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(nt("id",r.id),re("align",null),q("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),sg=new b("MatPrefix");var lg=new b("MatSuffix");var $d=new b("FloatingLabelParent"),Ld=(()=>{class t{_elementRef=c(J);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Td);_ngZone=c(Z);_parent=c($d);_resizeSubscription=new Xt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return cg(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&q("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function cg(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Bd="mdc-line-ripple--active",oo="mdc-line-ripple--deactivating",jd=(()=>{class t{_elementRef=c(J);_cleanupTransitionEnd;constructor(){let e=c(Z),i=c(_e);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(oo),e.add(Bd)}deactivate(){this._elementRef.nativeElement.classList.add(oo)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(oo);e.propertyName==="opacity"&&r&&i.remove(Bd,oo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Vd=(()=>{class t{_elementRef=c(J);_ngZone=c(Z);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Un(Bp,5),i&2){let o;ae(o=se())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&q("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:jp,ngContentSelectors:Vp,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ze(),Q(0,"div",1),D(1,"div",2,0),ee(3),x(),Q(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),ns=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t})}return t})();var is=new b("MatFormField"),dg=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ud="fill",ug="auto",zd="fixed",mg="translateY(-50%)",ao=(()=>{class t{_elementRef=c(J);_changeDetectorRef=c(lt);_platform=c(Ce);_idGenerator=c(mt);_ngZone=c(Z);_defaults=c(dg,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Hn("iconPrefixContainer");_textPrefixContainerSignal=Hn("textPrefixContainer");_iconSuffixContainerSignal=Hn("iconSuffixContainer");_textSuffixContainerSignal=Hn("textSuffixContainer");_prefixSuffixContainers=K(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Vs(Si);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ft(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ug}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Ud;this._appearanceSignal.set(i)}_appearanceSignal=E(Ud);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||zd}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||zd}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new te;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Sn();constructor(){let e=this._defaults,i=c(Ba);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),st(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=K(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Fi([void 0,void 0]),H(()=>[i.errorState,i.userAriaDescribedBy]),ms(),Re(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(je(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ds(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){$s({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=K(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,g=this._currentDirection==="rtl"?"-1":"1",y=`${a+s}px`,le=`calc(${g} * (${y} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ie=`var(--mat-mdc-form-field-label-transform, ${mg} translateX(${le}))`,X=a+s+l+d;return[ie,X]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Ns(o,r._labelChild,Si,5),Vi(o,ns,5)(o,sg,5)(o,lg,5)(o,Hd,5)(o,es,5)),i&2){xo();let a;ae(a=se())&&(r._formFieldControl=a.first),ae(a=se())&&(r._prefixChildren=a),ae(a=se())&&(r._suffixChildren=a),ae(a=se())&&(r._errorChildren=a),ae(a=se())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(ks(r._iconPrefixContainerSignal,Od,5)(r._textPrefixContainerSignal,Pd,5)(r._iconSuffixContainerSignal,Nd,5)(r._textSuffixContainerSignal,kd,5),Un(Up,5)(Od,5)(Pd,5)(Nd,5)(kd,5)(Ld,5)(Vd,5)(jd,5)),i&2){xo(4);let o;ae(o=se())&&(r._textField=o.first),ae(o=se())&&(r._iconPrefixContainer=o.first),ae(o=se())&&(r._textPrefixContainer=o.first),ae(o=se())&&(r._iconSuffixContainer=o.first),ae(o=se())&&(r._textSuffixContainer=o.first),ae(o=se())&&(r._floatingLabel=o.first),ae(o=se())&&(r._notchedOutline=o.first),ae(o=se())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&q("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ze([{provide:is,useExisting:t},{provide:$d,useExisting:t}])],ngContentSelectors:Hp,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ze(zp),Li(0,qp,1,1,"ng-template",null,0,Bs),u(2,"div",6,1),P("click",function(a){return r._control.onContainerClick(a)}),$(4,Wp,1,0,"div",7),u(5,"div",8),$(6,Kp,2,2,"div",9),$(7,Xp,3,0,"div",10),$(8,Jp,3,0,"div",11),u(9,"div",12),$(10,eg,1,1,null,13),ee(11),h(),$(12,tg,3,0,"div",14),$(13,ng,3,0,"div",15),h(),$(14,ig,1,0,"div",16),h(),u(15,"div",17),$(16,rg,2,0,"div",18)(17,ag,5,1,"div",19),h()),i&2){let o;f(2),q("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),f(2),G(!r._hasOutline()&&!r._control.disabled?4:-1),f(2),G(r._hasOutline()?6:-1),f(),G(r._hasIconPrefix?7:-1),f(),G(r._hasTextPrefix?8:-1),f(2),G(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),f(2),G(r._hasTextSuffix?12:-1),f(),G(r._hasIconSuffix?13:-1),f(),G(r._hasOutline()?-1:14),f(),q("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();f(),G((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Ld,Vd,Ro,jd,es],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Mi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[Mc,ao,Ie]})}return t})();var hg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),pg={passive:!0},Gd=(()=>{class t{_platform=c(Ce);_ngZone=c(Z);_renderer=c(tt).createRenderer(null,null);_styleLoader=c(Gt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return xe;this._styleLoader.load(hg);let i=Je(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new te,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,pg)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Je(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({})}return t})();var Wd=new b("MAT_INPUT_VALUE_ACCESSOR");var Zd=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var so=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var gg=["button","checkbox","file","hidden","image","radio","range","reset","submit"],vg=new b("MAT_INPUT_CONFIG"),Yd=(()=>{class t{_elementRef=c(J);_platform=c(Ce);ngControl=c(Zt,{optional:!0,self:!0});_autofillMonitor=c(Gd);_ngZone=c(Z);_formField=c(is,{optional:!0});_renderer=c(_e);_uid=c(mt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(vg,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new te;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ft(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ke.required)??!1}set required(e){this._required=ft(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ta().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ft(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ta().has(e));constructor(){let e=c(Ja,{optional:!0}),i=c(Kt,{optional:!0}),r=c(Zd),o=c(Wd,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?wo(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new so(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&st(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){gg.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&P("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(nt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),re("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),q("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ge]},exportAs:["matInput"],features:[Ze([{provide:ns,useExisting:t}]),Ve]})}return t})(),Kd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=W({imports:[Mi,Mi,qd,Ie]})}return t})();var co=class t{articlesStorageKey="kovali-blog-articles";commentsStorageKey="kovali-blog-comments";platformId=c(et);getPostWithComments(n){return _(this.buildPostDetails(n))}addComment(n,e){let i=[this.createComment(n,e),...this.readComments().filter(o=>o.articleId===n)],r=this.readComments().filter(o=>o.articleId!==n);return this.writeComments([...i,...r]),_(this.buildPostDetails(n))}changeCommentRating(n,e,i){let r=this.readComments().map(o=>o.id===e&&o.articleId===n?N(p({},o),{rating:Jd(i)}):o);return this.writeComments(r),_(this.buildPostDetails(n))}changeArticleRating(n,e){let i=this.readArticles().map(r=>r.id===n?N(p({},r),{rating:Jd(e)}):r);return this.writeArticles(i),_(this.buildPostDetails(n))}buildPostDetails(n){let e=this.readArticles().find(r=>r.id===n)??null,i=this.readComments().filter(r=>r.articleId===n);return{article:e?p({},e):null,comments:Xd(i)}}createComment(n,e){let i=new Date;return{id:Date.now(),articleId:n,author:e.author,text:e.text,dateLabel:i.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),isoDate:i.toISOString().slice(0,10),rating:0}}readArticles(){if(!it(this.platformId))return lo(xt);let n=localStorage.getItem(this.articlesStorageKey);if(n===null){let i=lo(xt);return this.writeArticles(i),i}try{let i=JSON.parse(n);if(yg(i))return lo(i)}catch{}let e=lo(xt);return this.writeArticles(e),e}writeArticles(n){it(this.platformId)&&localStorage.setItem(this.articlesStorageKey,JSON.stringify(n))}readComments(){if(!it(this.platformId))return[];let n=localStorage.getItem(this.commentsStorageKey);if(n===null)return[];try{let e=JSON.parse(n);if(Dg(e))return Xd(e)}catch{}return this.writeComments([]),[]}writeComments(n){it(this.platformId)&&localStorage.setItem(this.commentsStorageKey,JSON.stringify(n))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};function lo(t){return t.map(n=>N(p({},n),{rating:n.rating??0}))}function Xd(t){return t.map(n=>p({},n))}function Jd(t){return Math.min(Math.max(Math.round(t),0),5)}function yg(t){return Array.isArray(t)&&t.every(n=>typeof n=="object"&&n!==null&&typeof n.id=="number"&&typeof n.title=="string"&&typeof n.text=="string"&&typeof n.dateLabel=="string"&&typeof n.isoDate=="string"&&typeof n.tag=="string"&&_g(n.theme)&&typeof n.image=="string"&&typeof n.isUserCreated=="boolean"&&(typeof n.rating=="number"||n.rating===void 0))}function _g(t){return t==="red"||t==="green"||t==="neutral"}function Dg(t){return Array.isArray(t)&&t.every(n=>typeof n=="object"&&n!==null&&typeof n.id=="number"&&typeof n.articleId=="number"&&typeof n.author=="string"&&typeof n.text=="string"&&typeof n.dateLabel=="string"&&typeof n.isoDate=="string"&&typeof n.rating=="number")}var Qd=new b("POST_SERVICE",{providedIn:"root",factory:()=>c(co)});var uo=class t{articleState=E(null);commentsState=E([]);activeArticleIdState=E(null);article=this.articleState.asReadonly();comments=this.commentsState.asReadonly();activeArticleId=this.activeArticleIdState.asReadonly();savePost(n){this.articleState.set(n?p({},n):null),this.activeArticleIdState.set(n?.id??null)}saveComments(n){this.commentsState.set(n.map(e=>p({},e)))}savePostDetails(n){this.savePost(n.article),this.saveComments(n.comments)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var Cg=(t,n)=>n.id;function wg(t,n){if(t&1){let e=yt();u(0,"article",18)(1,"div",19)(2,"div")(3,"h3"),m(4),h(),u(5,"time"),m(6),h()(),u(7,"p"),m(8),h()(),u(9,"div",20)(10,"button",21),P("click",function(){let r=Me(e).$implicit,o=L(3);return Ae(o.changeCommentRating(r,r.rating-1))}),u(11,"mat-icon",2),m(12,"thumb_down"),h()(),u(13,"strong"),m(14),h(),u(15,"button",22),P("click",function(){let r=Me(e).$implicit,o=L(3);return Ae(o.changeCommentRating(r,r.rating+1))}),u(16,"mat-icon",2),m(17,"thumb_up"),h()()()(),V(18,"mat-divider")}if(t&2){let e=n.$implicit;f(4),I(e.author),f(),re("datetime",e.isoDate),f(),I(e.dateLabel),f(2),I(e.text),f(6),I(e.rating)}}function Eg(t,n){if(t&1&&(u(0,"div",10),de(1,wg,19,5,null,null,Cg),h()),t&2){let e=L(2);f(),ue(e.comments())}}function xg(t,n){t&1&&(u(0,"p",11),m(1,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"),h())}function Sg(t,n){t&1&&(u(0,"mat-error"),m(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"),h())}function Mg(t,n){t&1&&(u(0,"mat-error"),m(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),h())}function Ag(t,n){if(t&1){let e=yt();u(0,"mat-card",4),V(1,"img",5),u(2,"mat-card-header")(3,"mat-card-title"),m(4),h(),u(5,"mat-card-subtitle"),m(6),u(7,"time"),m(8),h()()(),u(9,"mat-card-content")(10,"p"),m(11),h(),u(12,"div",6)(13,"span"),m(14,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438"),h(),u(15,"button",7),P("click",function(){let r=Me(e),o=L();return Ae(o.changeArticleRating(r.id,r.rating-1))}),u(16,"mat-icon",2),m(17,"remove"),h()(),u(18,"strong"),m(19),h(),u(20,"button",8),P("click",function(){let r=Me(e),o=L();return Ae(o.changeArticleRating(r.id,r.rating+1))}),u(21,"mat-icon",2),m(22,"add"),h()()()()(),u(23,"mat-card",9)(24,"mat-card-header")(25,"mat-card-title"),m(26,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"),h(),u(27,"mat-card-subtitle"),m(28),h()(),u(29,"mat-card-content"),$(30,Eg,3,0,"div",10)(31,xg,2,0,"p",11),h()(),u(32,"mat-card",12)(33,"mat-card-header")(34,"mat-card-title"),m(35,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),h()(),u(36,"mat-card-content")(37,"form",13),P("ngSubmit",function(){let r=Me(e),o=L();return Ae(o.addComment(r.id))}),u(38,"mat-form-field",14)(39,"mat-label"),m(40,"\u0418\u043C\u044F"),h(),V(41,"input",15),$(42,Sg,2,0,"mat-error"),h(),u(43,"mat-form-field",14)(44,"mat-label"),m(45,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),h(),V(46,"textarea",16),$(47,Mg,2,0,"mat-error"),h(),u(48,"button",17)(49,"mat-icon",2),m(50,"send"),h(),m(51," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),h()()()()}if(t&2){let e=n,i=L();f(),O("src",e.image,Ue)("alt",e.title),f(3),I(e.title),f(2),on(" ",e.tag," \xB7 "),f(),re("datetime",e.isoDate),f(),I(e.dateLabel),f(3),I(e.text||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438."),f(8),I(e.rating),f(9),I(i.comments().length),f(2),G(i.comments().length?30:31),f(7),O("formGroup",i.commentForm),f(5),G(i.hasError("author")?42:-1),f(5),G(i.hasError("text")?47:-1),f(),O("disabled",i.commentForm.invalid)}}function Ig(t,n){t&1&&(u(0,"mat-card",3)(1,"mat-card-title"),m(2,"\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"),h(),u(3,"mat-card-content")(4,"p"),m(5,"\u0421\u0442\u0430\u0442\u044C\u044F \u043C\u043E\u0433\u043B\u0430 \u0431\u044B\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430."),h()(),u(6,"mat-card-actions")(7,"a",23),m(8,"Back"),h()()())}var mo=class t{route=c(Ke);destroyRef=c(Qe);title=c(Xi);postService=c(Qd);postStore=c(uo);article=this.postStore.article;comments=this.postStore.comments;isLoaded=E(!1);pageTitle=K(()=>this.article()?.title??"\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");commentForm=new At({author:new Yt("",{nonNullable:!0,validators:[ke.required,ke.minLength(2)]}),text:new Yt("",{nonNullable:!0,validators:[ke.required,ke.minLength(5)]})});ngOnInit(){this.route.paramMap.pipe(Dd(this.destroyRef)).subscribe(n=>{let e=Number(n.get("id"));if(!Number.isFinite(e)){this.postStore.savePostDetails({article:null,comments:[]}),this.title.setTitle("\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D | Kovali-folio"),this.isLoaded.set(!0);return}this.loadPost(e)})}addComment(n){if(this.commentForm.invalid){this.commentForm.markAllAsTouched();return}let e={author:this.commentForm.controls.author.value.trim(),text:this.commentForm.controls.text.value.trim()};this.postService.addComment(n,e).pipe(ce(1)).subscribe(i=>{this.postStore.savePostDetails(i),this.commentForm.reset()})}changeArticleRating(n,e){this.postService.changeArticleRating(n,e).pipe(ce(1)).subscribe(i=>this.postStore.savePostDetails(i))}changeCommentRating(n,e){this.postService.changeCommentRating(n.articleId,n.id,e).pipe(ce(1)).subscribe(i=>this.postStore.savePostDetails(i))}hasError(n){let e=this.commentForm.get(n);return!!(e?.invalid&&e.touched)}loadPost(n){this.isLoaded.set(!1),this.postService.getPostWithComments(n).pipe(ce(1)).subscribe(e=>{this.postStore.savePostDetails(e),this.title.setTitle(`${e.article?.title??"\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"} | Kovali-folio`),this.isLoaded.set(!0)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-post"]],decls:7,vars:1,consts:[[1,"post-page"],["mat-button","","routerLink","/blog",1,"post-back-link"],["fontSet","material-symbols-outlined"],[1,"post-not-found"],[1,"post-card"],["mat-card-image","",3,"src","alt"],["aria-label","\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438",1,"rating-row"],["mat-icon-button","","type","button","aria-label","\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438",3,"click"],["mat-icon-button","","type","button","aria-label","\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438",3,"click"],[1,"comments-card"],[1,"comments-list"],[1,"comments-empty"],[1,"comment-form-card"],[1,"comment-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","author"],["matInput","","formControlName","text","rows","4"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"comment-item"],[1,"comment-main"],["aria-label","\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F",1,"rating-row","comment-rating"],["mat-icon-button","","type","button","aria-label","\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F",3,"click"],["mat-icon-button","","type","button","aria-label","\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F",3,"click"],["mat-button","","routerLink","/blog"]],template:function(e,i){if(e&1&&(u(0,"section",0)(1,"a",1)(2,"mat-icon",2),m(3,"arrow_back"),h(),m(4," Back "),h(),$(5,Ag,52,14)(6,Ig,9,0,"mat-card",3),h()),e&2){let r;f(5),G((r=i.isLoaded()&&i.article())?5:i.isLoaded()?6:-1,r)}},dependencies:[Zr,Wr,On,$r,Gr,Kt,xi,qe,Mn,Rr,Wt,Id,Cd,Sd,Ed,Md,Ad,xd,wd,Fd,Rd,Mi,ao,Si,ts,In,An,Kd,Yd],styles:[".post-page[_ngcontent-%COMP%]{max-width:980px;margin:0 auto;padding:40px 24px 80px}.post-back-link[_ngcontent-%COMP%]{margin-bottom:16px}.post-card[_ngcontent-%COMP%], .comments-card[_ngcontent-%COMP%], .comment-form-card[_ngcontent-%COMP%], .post-not-found[_ngcontent-%COMP%]{margin-bottom:24px}.post-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:420px;object-fit:cover}.post-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:16px 0 0;color:var(--color-gray);line-height:1.7}.rating-row[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;margin-top:20px;color:var(--color-dark)}.rating-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{min-width:24px;text-align:center}.comments-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.comment-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:24px;padding:8px 0 16px}.comment-main[_ngcontent-%COMP%]{flex:1}.comment-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:4px;font-size:16px;color:var(--color-dark)}.comment-main[_ngcontent-%COMP%]   time[_ngcontent-%COMP%], .comments-empty[_ngcontent-%COMP%]{color:var(--color-gray);font-size:13px}.comment-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:12px;color:var(--color-gray);line-height:1.6}.comment-rating[_ngcontent-%COMP%]{margin-top:0}.comment-form[_ngcontent-%COMP%]{display:grid;gap:16px}.comment-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{justify-self:start}@media(max-width:700px){.post-page[_ngcontent-%COMP%]{padding:24px 20px 64px}.comment-item[_ngcontent-%COMP%]{flex-direction:column;gap:8px}}"]})};var eu=[{path:"",component:ro,title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F | Kovali-folio"},{path:"blog",component:Xr,title:"\u0411\u043B\u043E\u0433 | Kovali-folio"},{path:"blog/:id",component:mo}];var Rg="@",Fg=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(he);loadingSchedulerFn=c(Tg,{optional:!0});_engine;constructor(e,i,r,o,a){this.doc=e,this.delegate=i,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-ZBEZL3SU.js").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(r=>{throw new S(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,i){let r=this.delegate.createRenderer(e,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new rs(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,i);o.use(s),this.scheduler??=this.injector.get(_s,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(i){Ni()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),rs=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,i,r){this.delegate.insertBefore(n,e,i,r)}removeChild(n,e,i,r){this.delegate.removeChild(n,e,i,r)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,i)),this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(n,e,i,r)),this.delegate.listen(n,e,i,r)}shouldReplay(n){return this.replay!==null&&n.startsWith(Rg)}},Tg=new b("");function tu(t="animations"){return rn("NgAsyncAnimations"),Rt([{provide:tt,useFactory:()=>new Fg(c(k),c(Yn),c(Z),t)},{provide:Ti,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var nu={providers:[ys(),tu(),wa(eu,Ea({anchorScrolling:"enabled",scrollPositionRestoration:"enabled"})),Cl(Dl())]};var Og=()=>({exact:!0}),fo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-header"]],decls:15,vars:2,consts:[[1,"nav-inner"],["routerLink","/",1,"logo"],["routerLink","/","routerLinkActive","nav-active",3,"routerLinkActiveOptions"],["routerLink","/blog","routerLinkActive","nav-active"],["href","#contact"]],template:function(e,i){e&1&&(u(0,"header")(1,"div",0)(2,"a",1),m(3,"Kovali-folio"),h(),u(4,"nav")(5,"ul")(6,"li")(7,"a",2),m(8," About me "),h()(),u(9,"li")(10,"a",3),m(11,"Blog"),h()(),u(12,"li")(13,"a",4),m(14,"Contact"),h()()()()()()),e&2&&(f(7),O("routerLinkActiveOptions",Ls(1,Og)))},dependencies:[qe,Ca],encapsulation:2})};var ho=class t{preventSubmit(n){n.preventDefault()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-footer"]],decls:34,vars:0,consts:[["id","contact"],[1,"footer-inner"],[1,"footer-left"],["href","mailto:kovali94738@yandex.ru"],["href","tel:+79991234567"],[1,"footer-socials"],["href","https://vk.com/griga_niga"],["src","images/vk.png","alt","VK"],["href","https://t.me/kovali94738"],["src","images/tg.png","alt","Telegram"],["href","https://github.com/kovali2002"],["src","images/github.png","alt","GitHub"],[1,"footer-right"],[3,"submit"],["type","email","placeholder","Your email address"],["placeholder","Describe your project"],["type","submit"],[1,"footer-copy"]],template:function(e,i){e&1&&(D(0,"footer",0)(1,"div",1)(2,"div",2)(3,"h2"),m(4,"Say hello and let's"),Q(5,"br"),m(6,"work together !"),x(),D(7,"p"),m(8,"Email: "),D(9,"a",3),m(10,"kovali94738@yandex.ru"),x()(),D(11,"p"),m(12,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),D(13,"a",4),m(14,"+7 (999) 123-45-67"),x()(),D(15,"div",5)(16,"a",6),Q(17,"img",7),x(),D(18,"a",8),Q(19,"img",9),x(),D(20,"a",10),Q(21,"img",11),x()()(),D(22,"div",12)(23,"form",13),Ps("submit",function(o){return i.preventSubmit(o)}),D(24,"label"),m(25,"Email"),x(),Q(26,"input",14),D(27,"label"),m(28,"Input your message"),x(),Q(29,"textarea",15),D(30,"button",16),m(31,"Submit"),x()()()(),D(32,"p",17),m(33,"\xA9 2026 Grisha Kovalev"),x()())},encapsulation:2})};var po=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"app-content"]],template:function(e,i){e&1&&(V(0,"app-header"),u(1,"main",0),V(2,"router-outlet"),h(),V(3,"app-footer"))},dependencies:[ui,fo,ho],styles:["[_nghost-%COMP%]{min-height:100%;display:flex;flex-direction:column}.app-content[_ngcontent-%COMP%]{flex:1}"]})};jo(po,nu).catch(t=>console.error(t));
