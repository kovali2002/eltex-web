import{$ as Ge,$a as mc,$b as $a,A as vr,Aa as nc,Ab as bt,B as fe,Ba as _r,Bb as We,C as ql,Ca as on,Cb as z,D as Ta,Da as Fn,Db as fc,E as In,Ea as ic,Eb as T,F as jt,Fa as rc,Fb as Re,G as ka,Ga as oc,Gb as ne,H as Pa,Ha as ac,Hb as Nn,I as Yl,Ia as sc,Ib as _t,J as Na,Ja as lc,Jb as re,K as br,Ka as cc,Kb as oe,L as Mt,La as Ye,Lb as pc,M as Q,Ma as rt,Mb as gc,N as Le,Na as dc,Nb as Ha,O as De,Oa as h,Ob as bi,P as F,Pa as Tn,Pb as Y,Q as Ut,Qa as uc,Qb as Ln,R as zt,Ra as yr,Rb as f,S as v,Sa as kn,Sb as k,T as V,Ta as Rt,Tb as Gt,U as Kl,Ua as Pn,Ub as Ie,V as _,Va as Me,Vb as vc,W as O,Wa as Ce,Wb as _i,X as l,Xa as ee,Xb as bc,Y as Ht,Ya as Cr,Yb as _c,Z as Xl,Za as It,Zb as J,_ as we,_a as ja,_b as ae,a as g,aa as Se,ab as Ua,ac as Sr,b as $,ba as Ae,bb as D,bc as an,c as $l,ca as ie,cb as j,cc as pe,d as Fe,da as L,db as R,dc as yi,e as Gl,ea as tt,eb as Be,ec as yc,f as Te,fa as Zl,fb as Dr,fc as Cc,g as I,ga as ce,gb as hc,gc as Dc,h as He,ha as B,hb as za,hc as Ve,i as $e,ia as rn,ib as $t,ic as wc,j as xe,ja as fi,jb as vi,jc as le,k as y,ka as Ql,kb as wr,kc as Ga,l as hr,la as E,lb as mt,lc as Ec,m as fr,ma as Jl,mb as se,mc as Ar,n as Wl,na as La,nb as W,o as A,oa as nt,ob as q,p as pr,pa as ke,pb as Er,q as St,qa as vt,qb as xr,r as Oa,ra as Ba,rb as be,s as gr,sa as G,sb as _e,t as An,ta as Va,tb as U,u as At,ua as ec,ub as m,v as Mn,va as pi,vb as p,w as ve,wa as tc,wb as K,x as Fa,xa as it,xb as w,y as ut,ya as On,yb as S,z as Rn,za as gi,zb as de}from"./chunk-KLIVBVEQ.js";var xc=null;function ot(){return xc}function Wa(n){xc??=n}var Ci=class{},sn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:()=>l(Sc),providedIn:"platform"})}return n})();var Sc=(()=>{class n extends sn{_location;_history;_doc=l(L);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ot().getBaseHref(this._doc)}onPopState(e){let i=ot().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=ot().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Rc(n,t){return n?t?n.endsWith("/")?t.startsWith("/")?n+t.slice(1):n+t:t.startsWith("/")?n+t:`${n}/${t}`:n:t}function Ac(n){let t=n.search(/#|\?|$/);return n[t-1]==="/"?n.slice(0,t-1)+n.slice(t):n}function Wt(n){return n&&n[0]!=="?"?`?${n}`:n}var ln=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:()=>l(Ic),providedIn:"root"})}return n})(),wh=new _(""),Ic=(()=>{class n extends ln{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??l(L).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Rc(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Wt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Wt(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Wt(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||n)(O(sn),O(wh,8))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ot=(()=>{class n{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=Sh(Ac(Mc(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Wt(i))}normalize(e){return n.stripTrailingSlash(xh(this._basePath,Mc(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Wt(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Wt(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Wt;static joinWithSlash=Rc;static stripTrailingSlash=Ac;static \u0275fac=function(i){return new(i||n)(O(ln))};static \u0275prov=v({token:n,factory:()=>Eh(),providedIn:"root"})}return n})();function Eh(){return new Ot(O(ln))}function xh(n,t){if(!n||!t.startsWith(n))return t;let e=t.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function Mc(n){return n.replace(/\/index.html$/,"")}function Sh(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var qa=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(ie);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||n)(ee(It))};static \u0275dir=R({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ke]})}return n})();function Di(n,t){t=encodeURIComponent(t);for(let e of n.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===t)return decodeURIComponent(o)}return null}var cn=class{};var Ka="browser";function Ke(n){return n===Ka}var Fc=(()=>{class n{static \u0275prov=v({token:n,providedIn:"root",factory:()=>new Ya(l(L),window)})}return n})(),Ya=class{document;window;offset=()=>[0,0];constructor(t,e){this.document=t,this.window=e}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t,e){this.window.scrollTo($(g({},e),{left:t[0],top:t[1]}))}scrollToAnchor(t,e){let i=Th(this.document,t);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(t){try{this.window.history.scrollRestoration=t}catch{console.warn(Ut(2400,!1))}}scrollToElement(t,e){let i=t.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo($(g({},e),{left:r-a[0],top:o-a[1]}))}};function Th(n,t){let e=n.getElementById(t)||n.getElementsByName(t)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(t)||o.querySelector(`[name="${t}"]`);if(a)return a}r=i.nextNode()}}return null}var wi=class{_doc;constructor(t){this._doc=t}manager},Mr=(()=>{class n extends wi{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(O(L))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Or=new _(""),Ja=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Mr));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Mr);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new F(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||n)(O(Or),O(B))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Xa="ng-app-id";function Tc(n){for(let t of n)t.remove()}function kc(n,t){let e=t.createElement("style");return e.textContent=n,e}function Ph(n,t,e,i){let r=n.head?.querySelectorAll(`style[${Xa}="${t}"],link[${Xa}="${t}"]`);if(r)for(let o of r)o.removeAttribute(Xa),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Qa(n,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var es=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,Ph(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,kc);i?.forEach(r=>this.addUsage(r,this.external,Qa))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(Tc(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Tc(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,kc(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Qa(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||n)(O(L),O(pi),O(gi,8),O(it))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Za={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ts=/%COMP%/g;var Nc="%COMP%",Nh=`_nghost-${Nc}`,Lh=`_ngcontent-${Nc}`,Bh=!0,Vh=new _("",{factory:()=>Bh});function jh(n){return Lh.replace(ts,n)}function Uh(n){return Nh.replace(ts,n)}function Lc(n,t){return t.map(e=>e.replace(ts,n))}var Si=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Ei(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Ir?r.applyToHost(e):r instanceof xi&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,b=this.tracingService;switch(i.encapsulation){case _r.Emulated:o=new Ir(c,d,i,this.appId,u,a,s,b);break;case _r.ShadowDom:return new Rr(c,e,i,a,s,this.nonce,b,d);case _r.ExperimentalIsolatedShadowDom:return new Rr(c,e,i,a,s,this.nonce,b);default:o=new xi(c,d,i,u,a,s,b);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||n)(O(Ja),O(es),O(pi),O(Vh),O(L),O(B),O(gi),O(yr,8))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Ei=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,i,r){this.eventManager=t,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Za[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Pc(t)?t.content:t).appendChild(e)}insertBefore(t,e,i){t&&(Pc(t)?t.content:t).insertBefore(e,i)}removeChild(t,e){e.remove()}selectRootElement(t,e){let i=typeof t=="string"?this.doc.querySelector(t):t;if(!i)throw new F(-5104,!1);return e||(i.textContent=""),i}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,i,r){if(r){e=r+":"+e;let o=Za[r];o?t.setAttributeNS(o,e,i):t.setAttribute(e,i)}else t.setAttribute(e,i)}removeAttribute(t,e,i){if(i){let r=Za[i];r?t.removeAttributeNS(r,e):t.removeAttribute(`${i}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,i,r){r&(Tn.DashCase|Tn.Important)?t.style.setProperty(e,i,r&Tn.Important?"important":""):t.style[e]=i}removeStyle(t,e,i){i&Tn.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,i){t!=null&&(t[e]=i)}setValue(t,e){t.nodeValue=e}listen(t,e,i,r){if(typeof t=="string"&&(t=ot().getGlobalEventTarget(this.doc,t),!t))throw new F(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(t,e,o)),this.eventManager.addEventListener(t,e,o,r)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function Pc(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Rr=class extends Ei{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,i,r,o,a,s,c){super(t,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=Lc(i.id,d);for(let b of d){let x=document.createElement("style");a&&x.setAttribute("nonce",a),x.textContent=b,this.shadowRoot.appendChild(x)}let u=i.getExternalStyles?.();if(u)for(let b of u){let x=Qa(b,r);a&&x.setAttribute("nonce",a),this.shadowRoot.appendChild(x)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,i){return super.insertBefore(this.nodeOrShadowRoot(t),e,i)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},xi=class extends Ei{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,i,r,o,a,s,c){super(t,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles;this.styles=c?Lc(c,d):d,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&uc.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ir=class extends xi{contentAttr;hostAttr;constructor(t,e,i,r,o,a,s,c){let d=r+"-"+i.id;super(t,e,i,o,a,s,c,d),this.contentAttr=jh(d),this.hostAttr=Uh(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let i=super.createElement(t,e);return super.setAttribute(i,this.contentAttr,""),i}};var Fr=class n extends Ci{supportsDOMEvents=!0;static makeCurrent(){Wa(new n)}onAndCancel(t,e,i,r){return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=Hh();return e==null?null:$h(e)}resetBaseElement(){Ai=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Di(document.cookie,t)}},Ai=null;function Hh(){return Ai=Ai||document.head.querySelector("base"),Ai?Ai.getAttribute("href"):null}function $h(n){return new URL(n,document.baseURI).pathname}var Gh=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Bc=["alt","control","meta","shift"],Wh={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qh={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Vc=(()=>{class n extends wi{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=n.parseEventName(i),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ot().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),Bc.forEach(d=>{let u=i.indexOf(d);u>-1&&(i.splice(u,1),a+=d+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=Wh[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Bc.forEach(a=>{if(a!==r){let s=qh[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||n)(O(L))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();async function ns(n,t,e){let i=g({rootComponent:n},Yh(t,e));return wc(i)}function Yh(n,t){return{platformRef:t?.platformRef,appProviders:[...Jh,...n?.providers??[]],platformProviders:Qh}}function Kh(){Fr.makeCurrent()}function Xh(){return new rn}function Zh(){return ec(document),document}var Qh=[{provide:it,useValue:Ka},{provide:tc,useValue:Kh,multi:!0},{provide:L,useFactory:Zh}];var Jh=[{provide:Xl,useValue:"root"},{provide:rn,useFactory:Xh},{provide:Or,useClass:Mr,multi:!0},{provide:Or,useClass:Vc,multi:!0},Si,es,Ja,{provide:Me,useExisting:Si},{provide:cn,useClass:Gh},[]];var ft=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let i=t.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(t.name,e);let r=(t.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(t,e){let i=t.toLowerCase();this.maybeSetNormalizedName(t,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(t,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=t.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Pr=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},Nr=class{encodeKey(t){return jc(t)}encodeValue(t){return jc(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function ef(n,t){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,o)),t.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var tf=/%(\d[a-f0-9])/gi,nf={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function jc(n){return encodeURIComponent(n).replace(tf,(t,e)=>nf[e]??t)}function Tr(n){return`${n}`}var ht=class n{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Nr,t.fromString){if(t.fromObject)throw new F(2805,!1);this.map=ef(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let i=t.fromObject[e],r=Array.isArray(i)?i.map(Tr):[Tr(i)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(i=>{let r=t[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Tr(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let i=this.map.get(t.param)||[],r=i.indexOf(Tr(t.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(t.param,i):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};function rf(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Uc(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function zc(n){return typeof Blob<"u"&&n instanceof Blob}function Hc(n){return typeof FormData<"u"&&n instanceof FormData}function of(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Mi="Content-Type",Lr="Accept",$c="text/plain",Gc="application/json",Wc=`${Gc}, ${$c}, */*`,Bn=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,i,r){this.url=e,this.method=t.toUpperCase();let o;if(rf(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new F(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new ft,this.context??=new Pr,!this.params)this.params=new ht,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Uc(this.body)||zc(this.body)||Hc(this.body)||of(this.body)?this.body:this.body instanceof ht?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Hc(this.body)?null:zc(this.body)?this.body.type||null:Uc(this.body)?null:typeof this.body=="string"?$c:this.body instanceof ht?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Gc:null}clone(t={}){let e=t.method||this.method,i=t.url||this.url,r=t.responseType||this.responseType,o=t.keepalive??this.keepalive,a=t.priority||this.priority,s=t.cache||this.cache,c=t.mode||this.mode,d=t.redirect||this.redirect,u=t.credentials||this.credentials,b=t.referrer||this.referrer,x=t.integrity||this.integrity,X=t.referrerPolicy||this.referrerPolicy,H=t.transferCache??this.transferCache,M=t.timeout??this.timeout,P=t.body!==void 0?t.body:this.body,Z=t.withCredentials??this.withCredentials,he=t.reportProgress??this.reportProgress,Oe=t.headers||this.headers,ge=t.params||this.params,Bt=t.context??this.context;return t.setHeaders!==void 0&&(Oe=Object.keys(t.setHeaders).reduce((Vt,xt)=>Vt.set(xt,t.setHeaders[xt]),Oe)),t.setParams&&(ge=Object.keys(t.setParams).reduce((Vt,xt)=>Vt.set(xt,t.setParams[xt]),ge)),new n(e,i,P,{params:ge,headers:Oe,context:Bt,reportProgress:he,responseType:r,withCredentials:Z,transferCache:H,keepalive:o,cache:s,priority:a,timeout:M,mode:c,redirect:d,credentials:u,referrer:b,integrity:x,referrerPolicy:X})}},Ft=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Ft||{}),Vn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,i="OK"){this.headers=t.headers||new ft,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||i,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},Ri=class n extends Vn{constructor(t={}){super(t)}type=Ft.ResponseHeader;clone(t={}){return new n({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},dn=class n extends Vn{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Ft.Response;clone(t={}){return new n({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},yt=class extends Vn{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},qc=200,af=204;var sf=/^\)\]\}',?\n/,Yc=new _(""),kr=(()=>{class n{fetchImpl=l(rs,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(B);destroyRef=l(tt);handle(e){return new Te(i=>{let r=new AbortController;this.doRequest(e,r.signal,i).then(os,a=>i.error(new yt({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}async doRequest(e,i,r){let o=this.createRequestInit(e),a;try{let M=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,g({signal:i},o)));lf(M),r.next({type:Ft.Sent}),a=await M}catch(M){r.error(new yt({error:M,status:M.status??0,statusText:M.statusText,url:e.urlWithParams,headers:M.headers}));return}let s=new ft(a.headers),c=a.statusText,d=a.url||e.urlWithParams,u=a.status,b=null;if(e.reportProgress&&r.next(new Ri({headers:s,status:u,statusText:c,url:d})),a.body){let M=a.headers.get("content-length"),P=[],Z=a.body.getReader(),he=0,Oe,ge,Bt=typeof Zone<"u"&&Zone.current,Vt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Z.cancel(),Vt=!0;break}let{done:hi,value:Ia}=await Z.read();if(hi)break;if(P.push(Ia),he+=Ia.length,e.reportProgress){ge=e.responseType==="text"?(ge??"")+(Oe??=new TextDecoder).decode(Ia,{stream:!0}):void 0;let Hl=()=>r.next({type:Ft.DownloadProgress,total:M?+M:void 0,loaded:he,partialText:ge});Bt?Bt.run(Hl):Hl()}}}),Vt){r.complete();return}let xt=this.concatChunks(P,he);try{let hi=a.headers.get(Mi)??"";b=this.parseBody(e,xt,hi,u)}catch(hi){r.error(new yt({error:hi,headers:new ft(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=b?qc:0);let x=u>=200&&u<300,X=a.redirected,H=a.type;x?(r.next(new dn({body:b,headers:s,status:u,statusText:c,url:d,redirected:X,responseType:H})),r.complete()):r.error(new yt({error:b,headers:s,status:u,statusText:c,url:d,redirected:X,responseType:H}))}parseBody(e,i,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(i).replace(sf,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>i[o]=a.join(",")),e.headers.has(Lr)||(i[Lr]=Wc),!e.headers.has(Mi)){let o=e.detectContentTypeHeader();o!==null&&(i[Mi]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),rs=class{};function os(){}function lf(n){n.then(os,os)}var cf=/^\)\]\}',?\n/;var as=(()=>{class n{xhrFactory;tracingService=l(yr,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new F(-2800,!1);let i=this.xhrFactory;return y(null).pipe(Q(()=>new Te(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((P,Z)=>a.setRequestHeader(P,Z.join(","))),e.headers.has(Lr)||a.setRequestHeader(Lr,Wc),!e.headers.has(Mi)){let P=e.detectContentTypeHeader();P!==null&&a.setRequestHeader(Mi,P)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let P=e.responseType.toLowerCase();a.responseType=P!=="json"?P:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let P=a.statusText||"OK",Z=new ft(a.getAllResponseHeaders()),he=a.responseURL||e.url;return c=new Ri({headers:Z,status:a.status,statusText:P,url:he}),c},u=this.maybePropagateTrace(()=>{let{headers:P,status:Z,statusText:he,url:Oe}=d(),ge=null;Z!==af&&(ge=typeof a.response>"u"?a.responseText:a.response),Z===0&&(Z=ge?qc:0);let Bt=Z>=200&&Z<300;if(e.responseType==="json"&&typeof ge=="string"){let Vt=ge;ge=ge.replace(cf,"");try{ge=ge!==""?JSON.parse(ge):null}catch(xt){ge=Vt,Bt&&(Bt=!1,ge={error:xt,text:ge})}}Bt?(o.next(new dn({body:ge,headers:P,status:Z,statusText:he,url:Oe||void 0})),o.complete()):o.error(new yt({error:ge,headers:P,status:Z,statusText:he,url:Oe||void 0}))}),b=this.maybePropagateTrace(P=>{let{url:Z}=d(),he=new yt({error:P,status:a.status||0,statusText:a.statusText||"Unknown Error",url:Z||void 0});o.error(he)}),x=b;e.timeout&&(x=this.maybePropagateTrace(P=>{let{url:Z}=d(),he=new yt({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:Z||void 0});o.error(he)}));let X=!1,H=this.maybePropagateTrace(P=>{X||(o.next(d()),X=!0);let Z={type:Ft.DownloadProgress,loaded:P.loaded};P.lengthComputable&&(Z.total=P.total),e.responseType==="text"&&a.responseText&&(Z.partialText=a.responseText),o.next(Z)}),M=this.maybePropagateTrace(P=>{let Z={type:Ft.UploadProgress,loaded:P.loaded};P.lengthComputable&&(Z.total=P.total),o.next(Z)});return a.addEventListener("load",u),a.addEventListener("error",b),a.addEventListener("timeout",x),a.addEventListener("abort",b),e.reportProgress&&(a.addEventListener("progress",H),s!==null&&a.upload&&a.upload.addEventListener("progress",M)),a.send(s),o.next({type:Ft.Sent}),()=>{a.removeEventListener("error",b),a.removeEventListener("abort",b),a.removeEventListener("load",u),a.removeEventListener("timeout",x),e.reportProgress&&(a.removeEventListener("progress",H),s!==null&&a.upload&&a.upload.removeEventListener("progress",M)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||n)(O(cn))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function df(n,t){return t(n)}function uf(n,t,e){return(i,r)=>Ge(e,()=>t(i,o=>n(o,r)))}var Kc=new _("",{factory:()=>[]}),ss=new _(""),Xc=new _("",{factory:()=>!0});var Vr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=O(as),r},providedIn:"root"})}return n})();var Br=(()=>{class n{backend;injector;chain=null;pendingTasks=l(La);contributeToStability=l(Xc);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Kc),...this.injector.get(ss,[])]));this.chain=i.reduceRight((r,o)=>uf(r,o,this.injector),df)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(In(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||n)(O(Vr),O(we))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ls=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=O(Br),r},providedIn:"root"})}return n})();function is(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var Ct=(()=>{class n{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Bn)o=e;else{let c;r.headers instanceof ft?c=r.headers:c=new ft(r.headers);let d;r.params&&(r.params instanceof ht?d=r.params:d=new ht({fromObject:r.params})),o=new Bn(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=y(o).pipe(Rn(c=>this.handler.handle(c)));if(e instanceof Bn||r.observe==="events")return a;let s=a.pipe(ve(c=>c instanceof dn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(A(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new F(2806,!1);return c.body}));case"blob":return s.pipe(A(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new F(2807,!1);return c.body}));case"text":return s.pipe(A(c=>{if(c.body!==null&&typeof c.body!="string")throw new F(2808,!1);return c.body}));default:return s.pipe(A(c=>c.body))}case"response":return s;default:throw new F(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new ht().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,is(r,i))}post(e,i,r={}){return this.request("POST",e,is(r,i))}put(e,i,r={}){return this.request("PUT",e,is(r,i))}static \u0275fac=function(i){return new(i||n)(O(ls))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var mf=new _("",{factory:()=>!0}),hf="XSRF-TOKEN",ff=new _("",{factory:()=>hf}),pf="X-XSRF-TOKEN",gf=new _("",{factory:()=>pf}),vf=(()=>{class n{cookieName=l(ff);doc=l(L);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Di(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zc=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=O(vf),r},providedIn:"root"})}return n})();function bf(n,t){if(!l(mf)||n.method==="GET"||n.method==="HEAD")return t(n);try{let r=l(sn).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return t(n)}catch{return t(n)}let e=l(Zc).getToken(),i=l(gf);return e!=null&&!n.headers.has(i)&&(n=n.clone({headers:n.headers.set(i,e)})),t(n)}var cs=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(cs||{});function _f(n,t){return{\u0275kind:n,\u0275providers:t}}function ds(...n){let t=[Ct,Br,{provide:ls,useExisting:Br},{provide:Vr,useFactory:()=>l(Yc,{optional:!0})??l(as)},{provide:Kc,useValue:bf,multi:!0}];for(let e of n)t.push(...e.\u0275providers);return Ht(t)}function us(){return _f(cs.Fetch,[kr,{provide:Yc,useExisting:kr},{provide:Vr,useExisting:kr}])}var yf=new _(""),Cf="b",Df="h",wf="s",Ef="st",xf="u",Sf="rt",ms=new _(""),Af=["GET","HEAD"];function ed(n,t){let a=t,{isCacheActive:e}=a,i=$l(a,["isCacheActive"]),{transferCache:r,method:o}=n;return!(!e||r===!1||o==="POST"&&!i.includePostRequests&&!r||o!=="POST"&&!Af.includes(o)||!i.includeRequestsWithAuthHeaders&&If(n)||i.filter?.(n)===!1)}function td(n,t){let{includeHeaders:e}=n,i=e;return typeof t=="object"&&t.includeHeaders&&(i=t.includeHeaders),i}function Mf(n,t,e,i){let{transferCache:r}=n;if(!ed(n,t))return null;if(i)throw new F(2803,!1);let o=n.url,a=nd(n,o),s=e.get(a,null),c=td(t,r);if(s){let{[Cf]:d,[Sf]:u,[Df]:b,[wf]:x,[Ef]:X,[xf]:H}=s,M=d;switch(u){case"arraybuffer":M=Jc(d);break;case"blob":M=new Blob([Jc(d)]);break}let P=new ft(b);return new dn({body:M,headers:P,status:x,statusText:X,url:H})}return null}function Rf(n,t){let e=l(ms),i=l(nc),r=l(yf,{optional:!0}),o=Mf(n,e,i,r);if(o)return y(o);let{transferCache:a}=n,s=td(e,a),c=n.url,d=nd(n,c);return ed(n,e),t(n)}function If(n){return n.headers.has("authorization")||n.headers.has("proxy-authorization")}function Qc(n){return[...n.keys()].sort().map(t=>`${t}=${n.getAll(t)}`).join("&")}function nd(n,t){let{params:e,method:i,responseType:r}=n,o=Qc(e),a=n.serializeBody();a instanceof URLSearchParams?a=Qc(a):typeof a!="string"&&(a="");let s=[i,r,t,a,o].join("|"),c=Of(s);return c}function Of(n){let t=0;for(let e of n)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}function Jc(n){let t=atob(n);return Uint8Array.from(t,i=>i.charCodeAt(0)).buffer}function id(n){return[{provide:ms,useFactory:()=>(kn("NgHttpTransferCache"),g({isCacheActive:!0},n))},{provide:ss,useValue:Rf,multi:!0},{provide:wr,multi:!0,useFactory:()=>{let t=l(mt),e=l(ms);return()=>{t.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var Ur=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||n)(O(L))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var hs=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=O(Pf),r},providedIn:"root"})}return n})(),Pf=(()=>{class n extends hs{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Ye.NONE:return i;case Ye.HTML:return Fn(i,"HTML")?on(i):cc(this._doc,String(i)).toString();case Ye.STYLE:return Fn(i,"Style")?on(i):i;case Ye.SCRIPT:if(Fn(i,"Script"))return on(i);throw new F(5200,!1);case Ye.URL:return Fn(i,"URL")?on(i):lc(String(i));case Ye.RESOURCE_URL:if(Fn(i,"ResourceURL"))return on(i);throw new F(5201,!1);default:throw new F(5202,!1)}}bypassSecurityTrustHtml(e){return ic(e)}bypassSecurityTrustStyle(e){return rc(e)}bypassSecurityTrustScript(e){return oc(e)}bypassSecurityTrustUrl(e){return ac(e)}bypassSecurityTrustResourceUrl(e){return sc(e)}static \u0275fac=function(i){return new(i||n)(O(L))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),jr=(function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n[n.I18nSupport=2]="I18nSupport",n[n.EventReplay=3]="EventReplay",n[n.IncrementalHydration=4]="IncrementalHydration",n})(jr||{});function Nf(n,t=[],e={}){return{\u0275kind:n,\u0275providers:t}}function rd(){return Nf(jr.EventReplay,Cc())}function od(...n){let t=[],e=new Set;for(let{\u0275providers:r,\u0275kind:o}of n)e.add(o),r.length&&t.push(r);let i=e.has(jr.HttpTransferCacheOptions);return Ht([[],[],Dc(),e.has(jr.NoHttpTransferCache)||i?[]:id({}),t])}var N="primary",zi=Symbol("RouteTitle"),bs=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function mn(n){return new bs(n)}function fs(n,t,e){for(let i=0;i<n.length;i++){let r=n[i],o=t[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function hd(n,t,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||e.pathMatch==="full"&&(t.hasChildren()||i.length<n.length))return null;let c={},d=n.slice(0,i.length);return fs(i,d,c)?{consumed:d,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&t.hasChildren()&&e.path!=="**")return null;let s={};return!fs(o,n.slice(0,o.length),s)||!fs(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function qr(n){return new Promise((t,e)=>{n.pipe(jt()).subscribe({next:i=>t(i),error:i=>e(i)})})}function Lf(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(!Dt(n[e],t[e]))return!1;return!0}function Dt(n,t){let e=n?_s(n):void 0,i=t?_s(t):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!fd(n[r],t[r]))return!1;return!0}function _s(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function fd(n,t){if(Array.isArray(n)&&Array.isArray(t)){if(n.length!==t.length)return!1;let e=[...n].sort(),i=[...t].sort();return e.every((r,o)=>i[o]===r)}else return n===t}function Bf(n){return n.length>0?n[n.length-1]:null}function fn(n){return fr(n)?n:vi(n)?xe(Promise.resolve(n)):y(n)}function pd(n){return fr(n)?qr(n):Promise.resolve(n)}var Vf={exact:vd,subset:bd},gd={exact:jf,subset:Uf,ignored:()=>!0},Ts={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ki={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function ks(n,t,e){let i=n instanceof je?n:t.parseUrl(n);return ae(()=>ys(t.lastSuccessfulNavigation()?.finalUrl??new je,i,g(g({},ki),e)))}function ys(n,t,e){return Vf[e.paths](n.root,t.root,e.matrixParams)&&gd[e.queryParams](n.queryParams,t.queryParams)&&!(e.fragment==="exact"&&n.fragment!==t.fragment)}function jf(n,t){return Dt(n,t)}function vd(n,t,e){if(!un(n.segments,t.segments)||!$r(n.segments,t.segments,e)||n.numberOfChildren!==t.numberOfChildren)return!1;for(let i in t.children)if(!n.children[i]||!vd(n.children[i],t.children[i],e))return!1;return!0}function Uf(n,t){return Object.keys(t).length<=Object.keys(n).length&&Object.keys(t).every(e=>fd(n[e],t[e]))}function bd(n,t,e){return _d(n,t,t.segments,e)}function _d(n,t,e,i){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!un(r,e)||t.hasChildren()||!$r(r,e,i))}else if(n.segments.length===e.length){if(!un(n.segments,e)||!$r(n.segments,e,i))return!1;for(let r in t.children)if(!n.children[r]||!bd(n.children[r],t.children[r],i))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!un(n.segments,r)||!$r(n.segments,r,i)||!n.children[N]?!1:_d(n.children[N],t,o,i)}}function $r(n,t,e){return t.every((i,r)=>gd[e](n[r].parameters,i.parameters))}var je=class{root;queryParams;fragment;_queryParamMap;constructor(t=new te([],{}),e={},i=null){this.root=t,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=mn(this.queryParams),this._queryParamMap}toString(){return $f.serialize(this)}},te=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Gr(this)}},qt=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=mn(this.parameters),this._parameterMap}toString(){return Cd(this)}};function zf(n,t){return un(n,t)&&n.every((e,i)=>Dt(e.parameters,t[i].parameters))}function un(n,t){return n.length!==t.length?!1:n.every((e,i)=>e.path===t[i].path)}function Hf(n,t){let e=[];return Object.entries(n.children).forEach(([i,r])=>{i===N&&(e=e.concat(t(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==N&&(e=e.concat(t(r,i)))}),e}var pn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:()=>new Yt,providedIn:"root"})}return n})(),Yt=class{parse(t){let e=new Ds(t);return new je(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${Ii(t.root,!0)}`,i=qf(t.queryParams),r=typeof t.fragment=="string"?`#${Gf(t.fragment)}`:"";return`${e}${i}${r}`}},$f=new Yt;function Gr(n){return n.segments.map(t=>Cd(t)).join("/")}function Ii(n,t){if(!n.hasChildren())return Gr(n);if(t){let e=n.children[N]?Ii(n.children[N],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==N&&i.push(`${r}:${Ii(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=Hf(n,(i,r)=>r===N?[Ii(n.children[N],!1)]:[`${r}:${Ii(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[N]!=null?`${Gr(n)}/${e[0]}`:`${Gr(n)}/(${e.join("//")})`}}function yd(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function zr(n){return yd(n).replace(/%3B/gi,";")}function Gf(n){return encodeURI(n)}function Cs(n){return yd(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Wr(n){return decodeURIComponent(n)}function sd(n){return Wr(n.replace(/\+/g,"%20"))}function Cd(n){return`${Cs(n.path)}${Wf(n.parameters)}`}function Wf(n){return Object.entries(n).map(([t,e])=>`;${Cs(t)}=${Cs(e)}`).join("")}function qf(n){let t=Object.entries(n).map(([e,i])=>Array.isArray(i)?i.map(r=>`${zr(e)}=${zr(r)}`).join("&"):`${zr(e)}=${zr(i)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var Yf=/^[^\/()?;#]+/;function ps(n){let t=n.match(Yf);return t?t[0]:""}var Kf=/^[^\/()?;=#]+/;function Xf(n){let t=n.match(Kf);return t?t[0]:""}var Zf=/^[^=?&#]+/;function Qf(n){let t=n.match(Zf);return t?t[0]:""}var Jf=/^[^&#]+/;function ep(n){let t=n.match(Jf);return t?t[0]:""}var Ds=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new te([],{}):new te([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new F(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,t));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,t)),(e.length>0||Object.keys(i).length>0)&&(r[N]=new te(e,i)),r}parseSegment(){let t=ps(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new F(4009,!1);return this.capture(t),new qt(Wr(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=Xf(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=ps(this.remaining);r&&(i=r,this.capture(i))}t[Wr(e)]=Wr(i)}parseQueryParam(t){let e=Qf(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=ep(this.remaining);a&&(i=a,this.capture(i))}let r=sd(e),o=sd(i);if(t.hasOwnProperty(r)){let a=t[r];Array.isArray(a)||(a=[a],t[r]=a),a.push(o)}else t[r]=o}parseParens(t,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ps(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new F(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):t&&(a=N);let s=this.parseChildren(e+1);i[a??N]=Object.keys(s).length===1&&s[N]?s[N]:new te([],s),this.consumeOptional("//")}return i}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new F(4011,!1)}};function Dd(n){return n.segments.length>0?new te([],{[N]:n}):n}function wd(n){let t={};for(let[i,r]of Object.entries(n.children)){let o=wd(r);if(i===N&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))t[a]=s;else(o.segments.length>0||o.hasChildren())&&(t[i]=o)}let e=new te(n.segments,t);return tp(e)}function tp(n){if(n.numberOfChildren===1&&n.children[N]){let t=n.children[N];return new te(n.segments.concat(t.segments),t.children)}return n}function Kt(n){return n instanceof je}function Ed(n,t,e=null,i=null,r=new Yt){let o=xd(n);return Sd(o,t,e,i,r)}function xd(n){let t;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new te(o.url,a);return o===n&&(t=s),s}let i=e(n.root),r=Dd(i);return t??r}function Sd(n,t,e,i,r){let o=n;for(;o.parent;)o=o.parent;if(t.length===0)return gs(o,o,o,e,i,r);let a=np(t);if(a.toRoot())return gs(o,o,new te([],{}),e,i,r);let s=ip(a,o,n),c=s.processChildren?Fi(s.segmentGroup,s.index,a.commands):Md(s.segmentGroup,s.index,a.commands);return gs(o,s.segmentGroup,c,e,i,r)}function Yr(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Pi(n){return typeof n=="object"&&n!=null&&n.outlets}function ld(n,t,e){n||="\u0275";let i=new je;return i.queryParams={[n]:t},e.parse(e.serialize(i)).queryParams[n]}function gs(n,t,e,i,r,o){let a={};for(let[d,u]of Object.entries(i??{}))a[d]=Array.isArray(u)?u.map(b=>ld(d,b,o)):ld(d,u,o);let s;n===t?s=e:s=Ad(n,t,e);let c=Dd(wd(s));return new je(c,a,r)}function Ad(n,t,e){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===t?i[r]=e:i[r]=Ad(o,t,e)}),new te(n.segments,i)}var Kr=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,i){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=i,t&&i.length>0&&Yr(i[0]))throw new F(4003,!1);let r=i.find(Pi);if(r&&r!==Bf(i))throw new F(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function np(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Kr(!0,0,n);let t=0,e=!1,i=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?t++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Kr(e,t,i)}var Un=class{segmentGroup;processChildren;index;constructor(t,e,i){this.segmentGroup=t,this.processChildren=e,this.index=i}};function ip(n,t,e){if(n.isAbsolute)return new Un(t,!0,0);if(!e)return new Un(t,!1,NaN);if(e.parent===null)return new Un(e,!0,0);let i=Yr(n.commands[0])?0:1,r=e.segments.length-1+i;return rp(e,r,n.numberOfDoubleDots)}function rp(n,t,e){let i=n,r=t,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new F(4005,!1);r=i.segments.length}return new Un(i,!1,r-o)}function op(n){return Pi(n[0])?n[0].outlets:{[N]:n}}function Md(n,t,e){if(n??=new te([],{}),n.segments.length===0&&n.hasChildren())return Fi(n,t,e);let i=ap(n,t,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new te(n.segments.slice(0,i.pathIndex),{});return o.children[N]=new te(n.segments.slice(i.pathIndex),n.children),Fi(o,0,r)}else return i.match&&r.length===0?new te(n.segments,{}):i.match&&!n.hasChildren()?ws(n,t,e):i.match?Fi(n,0,r):ws(n,t,e)}function Fi(n,t,e){if(e.length===0)return new te(n.segments,{});{let i=op(e),r={};if(Object.keys(i).some(o=>o!==N)&&n.children[N]&&n.numberOfChildren===1&&n.children[N].segments.length===0){let o=Fi(n.children[N],t,e);return new te(n.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Md(n.children[o],t,a))}),Object.entries(n.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new te(n.segments,r)}}function ap(n,t,e){let i=0,r=t,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=e.length)return o;let a=n.segments[r],s=e[i];if(Pi(s))break;let c=`${s}`,d=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!dd(c,d,a))return o;i+=2}else{if(!dd(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ws(n,t,e){let i=n.segments.slice(0,t),r=0;for(;r<e.length;){let o=e[r];if(Pi(o)){let c=sp(o.outlets);return new te(i,c)}if(r===0&&Yr(e[0])){let c=n.segments[t];i.push(new qt(c.path,cd(e[0]))),r++;continue}let a=Pi(o)?o.outlets[N]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Yr(s)?(i.push(new qt(a,cd(s))),r+=2):(i.push(new qt(a,{})),r++)}return new te(i,{})}function sp(n){let t={};return Object.entries(n).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(t[e]=ws(new te([],{}),0,i))}),t}function cd(n){let t={};return Object.entries(n).forEach(([e,i])=>t[e]=`${i}`),t}function dd(n,t,e){return n==e.path&&Dt(t,e.parameters)}var zn="imperative",Ee=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Ee||{}),Ze=class{id;url;constructor(t,e){this.id=t,this.url=e}},Xt=class extends Ze{type=Ee.NavigationStart;navigationTrigger;restoredState;constructor(t,e,i="imperative",r=null){super(t,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},st=class extends Ze{urlAfterRedirects;type=Ee.NavigationEnd;constructor(t,e,i){super(t,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Pe=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Pe||{}),$n=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})($n||{}),at=class extends Ze{reason;code;type=Ee.NavigationCancel;constructor(t,e,i,r){super(t,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Rd(n){return n instanceof at&&(n.code===Pe.Redirect||n.code===Pe.SupersededByNewNavigation)}var wt=class extends Ze{reason;code;type=Ee.NavigationSkipped;constructor(t,e,i,r){super(t,e),this.reason=i,this.code=r}},hn=class extends Ze{error;target;type=Ee.NavigationError;constructor(t,e,i,r){super(t,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ni=class extends Ze{urlAfterRedirects;state;type=Ee.RoutesRecognized;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xr=class extends Ze{urlAfterRedirects;state;type=Ee.GuardsCheckStart;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zr=class extends Ze{urlAfterRedirects;state;shouldActivate;type=Ee.GuardsCheckEnd;constructor(t,e,i,r,o){super(t,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Qr=class extends Ze{urlAfterRedirects;state;type=Ee.ResolveStart;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jr=class extends Ze{urlAfterRedirects;state;type=Ee.ResolveEnd;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},eo=class{route;type=Ee.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},to=class{route;type=Ee.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},no=class{snapshot;type=Ee.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},io=class{snapshot;type=Ee.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ro=class{snapshot;type=Ee.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oo=class{snapshot;type=Ee.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gn=class{routerEvent;position;anchor;scrollBehavior;type=Ee.Scroll;constructor(t,e,i,r){this.routerEvent=t,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},Wn=class{},Li=class{},qn=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function lp(n){return!(n instanceof Wn)&&!(n instanceof qn)&&!(n instanceof Li)}var ao=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Zn(this.rootInjector)}},Zn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new ao(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||n)(O(we))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),so=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Es(t,this._root);return e?e.children.map(i=>i.value):[]}firstChild(t){let e=Es(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=xs(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return xs(t,this._root).map(e=>e.value)}};function Es(n,t){if(n===t.value)return t;for(let e of t.children){let i=Es(n,e);if(i)return i}return null}function xs(n,t){if(n===t.value)return[t];for(let e of t.children){let i=xs(n,e);if(i.length)return i.unshift(t),i}return[]}var Xe=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function jn(n){let t={};return n&&n.children.forEach(e=>t[e.value.outlet]=e),t}var Bi=class extends so{snapshot;constructor(t,e){super(t),this.snapshot=e,Ns(this,t)}toString(){return this.snapshot.toString()}};function Id(n,t){let e=cp(n,t),i=new He([new qt("",{})]),r=new He({}),o=new He({}),a=new He({}),s=new He(""),c=new gt(i,r,a,s,o,N,n,e.root);return c.snapshot=e.root,new Bi(new Xe(c,[]),e)}function cp(n,t){let e={},i={},r={},a=new Yn([],e,r,"",i,N,n,null,{},t);return new Vi("",new Xe(a,[]))}var gt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,i,r,o,a,s,c){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(A(d=>d[zi]))??y(void 0),this.url=t,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(t=>mn(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(t=>mn(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ps(n,t,e="emptyOnly"){let i,{routeConfig:r}=n;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?i={params:g(g({},t.params),n.params),data:g(g({},t.data),n.data),resolve:g(g(g(g({},n.data),t.data),r?.data),n._resolvedData)}:i={params:g({},n.params),data:g({},n.data),resolve:g(g({},n.data),n._resolvedData??{})},r&&Fd(r)&&(i.resolve[zi]=r.title),i}var Yn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[zi]}constructor(t,e,i,r,o,a,s,c,d,u){this.url=t,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=mn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=mn(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},Vi=class extends so{url;constructor(t,e){super(e),this.url=t,Ns(this,e)}toString(){return Od(this._root)}};function Ns(n,t){t.value._routerState=n,t.children.forEach(e=>Ns(n,e))}function Od(n){let t=n.children.length>0?` { ${n.children.map(Od).join(", ")} } `:"";return`${n.value}${t}`}function vs(n){if(n.snapshot){let t=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Dt(t.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Dt(t.params,e.params)||n.paramsSubject.next(e.params),Lf(t.url,e.url)||n.urlSubject.next(e.url),Dt(t.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Ss(n,t){let e=Dt(n.params,t.params)&&zf(n.url,t.url),i=!n.parent!=!t.parent;return e&&!i&&(!n.parent||Ss(n.parent,t.parent))}function Fd(n){return typeof n.title=="string"||n.title===null}var Td=new _(""),Hi=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=N;activateEvents=new ce;deactivateEvents=new ce;attachEvents=new ce;detachEvents=new ce;routerOutletData=pe();parentContexts=l(Zn);location=l(It);changeDetector=l(Ve);inputBinder=l(mo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new F(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new F(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new F(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new F(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new As(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ke]})}return n})(),As=class{route;childContexts;parent;outletData;constructor(t,e,i,r){this.route=t,this.childContexts=e,this.parent=i,this.outletData=r}get(t,e){return t===gt?this.route:t===Zn?this.childContexts:t===Td?this.outletData:this.parent.get(t,e)}},mo=new _("");var Ls=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&K(0,"router-outlet")},dependencies:[Hi],encapsulation:2})}return n})();function Bs(n){let t=n.children&&n.children.map(Bs),e=t?$(g({},n),{children:t}):g({},n);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==N&&(e.component=Ls),e}function dp(n,t,e){let i=ji(n,t._root,e?e._root:void 0);return new Bi(i,t)}function ji(n,t,e){if(e&&n.shouldReuseRoute(t.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=t.value;let r=up(n,t,e);return new Xe(i,r)}else{if(n.shouldAttach(t.value)){let o=n.retrieve(t.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=t.value,a.children=t.children.map(s=>ji(n,s)),a}}let i=mp(t.value),r=t.children.map(o=>ji(n,o));return new Xe(i,r)}}function up(n,t,e){return t.children.map(i=>{for(let r of e.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ji(n,i,r);return ji(n,i)})}function mp(n){return new gt(new He(n.url),new He(n.params),new He(n.queryParams),new He(n.fragment),new He(n.data),n.outlet,n.component,n)}var Kn=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},kd="ngNavigationCancelingError";function lo(n,t){let{redirectTo:e,navigationBehaviorOptions:i}=Kt(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=Pd(!1,Pe.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function Pd(n,t){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[kd]=!0,e.cancellationCode=t,e}function hp(n){return Nd(n)&&Kt(n.url)}function Nd(n){return!!n&&n[kd]}var Ms=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,i,r,o){this.routeReuseStrategy=t,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(t){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,t),vs(this.futureState.root),this.activateChildRoutes(e,i,t)}deactivateChildRoutes(t,e,i){let r=jn(e);t.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(t,e,i){let r=t.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(t,e,a.children)}else this.deactivateChildRoutes(t,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let i=e.getContext(t.value.outlet),r=i&&t.value.component?i.children:e,o=jn(t);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:a,route:t,contexts:s})}}deactivateRouteAndOutlet(t,e){let i=e.getContext(t.value.outlet),r=i&&t.value.component?i.children:e,o=jn(t);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(t,e,i){let r=jn(e);t.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new oo(o.value.snapshot))}),t.children.length&&this.forwardEvent(new io(t.value.snapshot))}activateRoutes(t,e,i){let r=t.value,o=e?e.value:null;if(vs(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,a.children)}else this.activateChildRoutes(t,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),vs(s.route.value),this.activateChildRoutes(t,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(t,null,a.children)}else this.activateChildRoutes(t,null,i)}},co=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Hn=class{component;route;constructor(t,e){this.component=t,this.route=e}};function fp(n,t,e){let i=n._root,r=t?t._root:null;return Oi(i,r,e,[i.value])}function pp(n){let t=n.routeConfig?n.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:n,guards:t}}function Qn(n,t){let e=Symbol(),i=t.get(n,e);return i===e?typeof n=="function"&&!Kl(n)?n:t.get(n):i}function Oi(n,t,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=jn(t);return n.children.forEach(a=>{gp(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Ti(s,e.getContext(a),r)),r}function gp(n,t,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=t?t.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=vp(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new co(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Oi(n,t,s?s.children:null,i,r):Oi(n,t,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Hn(s.outlet.component,a))}else a&&Ti(t,s,r),r.canActivateChecks.push(new co(i)),o.component?Oi(n,null,s?s.children:null,i,r):Oi(n,null,e,i,r);return r}function vp(n,t,e){if(typeof e=="function")return Ge(t._environmentInjector,()=>e(n,t));switch(e){case"pathParamsChange":return!un(n.url,t.url);case"pathParamsOrQueryParamsChange":return!un(n.url,t.url)||!Dt(n.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ss(n,t)||!Dt(n.queryParams,t.queryParams);default:return!Ss(n,t)}}function Ti(n,t,e){let i=jn(n),r=n.value;Object.entries(i).forEach(([o,a])=>{r.component?t?Ti(a,t.children.getContext(o),e):Ti(a,null,e):Ti(a,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new Hn(t.outlet.component,r)):e.canDeactivateChecks.push(new Hn(null,r)):e.canDeactivateChecks.push(new Hn(null,r))}function $i(n){return typeof n=="function"}function bp(n){return typeof n=="boolean"}function _p(n){return n&&$i(n.canLoad)}function yp(n){return n&&$i(n.canActivate)}function Cp(n){return n&&$i(n.canActivateChild)}function Dp(n){return n&&$i(n.canDeactivate)}function wp(n){return n&&$i(n.canMatch)}function Ld(n){return n instanceof Wl||n?.name==="EmptyError"}var Hr=Symbol("INITIAL_VALUE");function Xn(){return Q(n=>pr(n.map(t=>t.pipe(fe(1),Mt(Hr)))).pipe(A(t=>{for(let e of t)if(e!==!0){if(e===Hr)return Hr;if(e===!1||Ep(e))return e}return!0}),ve(t=>t!==Hr),fe(1)))}function Ep(n){return Kt(n)||n instanceof Kn}function Bd(n){return n.aborted?y(void 0).pipe(fe(1)):new Te(t=>{let e=()=>{t.next(),t.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Vd(n){return Le(Bd(n))}function xp(n){return St(t=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=t;return o.length===0&&r.length===0?y($(g({},t),{guardsResult:!0})):Sp(o,e,i).pipe(St(a=>a&&bp(a)?Ap(e,r,n):y(a)),A(a=>$(g({},t),{guardsResult:a})))})}function Sp(n,t,e){return xe(n).pipe(St(i=>Fp(i.component,i.route,e,t)),jt(i=>i!==!0,!0))}function Ap(n,t,e){return xe(t).pipe(Rn(i=>gr(Rp(i.route.parent,e),Mp(i.route,e),Op(n,i.path),Ip(n,i.route))),jt(i=>i!==!0,!0))}function Mp(n,t){return n!==null&&t&&t(new ro(n)),y(!0)}function Rp(n,t){return n!==null&&t&&t(new no(n)),y(!0)}function Ip(n,t){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return y(!0);let i=e.map(r=>An(()=>{let o=t._environmentInjector,a=Qn(r,o),s=yp(a)?a.canActivate(t,n):Ge(o,()=>a(t,n));return fn(s).pipe(jt())}));return y(i).pipe(Xn())}function Op(n,t){let e=t[t.length-1],r=t.slice(0,t.length-1).reverse().map(o=>pp(o)).filter(o=>o!==null).map(o=>An(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Qn(s,c),u=Cp(d)?d.canActivateChild(e,n):Ge(c,()=>d(e,n));return fn(u).pipe(jt())});return y(a).pipe(Xn())}));return y(r).pipe(Xn())}function Fp(n,t,e,i){let r=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!r||r.length===0)return y(!0);let o=r.map(a=>{let s=t._environmentInjector,c=Qn(a,s),d=Dp(c)?c.canDeactivate(n,t,e,i):Ge(s,()=>c(n,t,e,i));return fn(d).pipe(jt())});return y(o).pipe(Xn())}function Tp(n,t,e,i,r){let o=t.canLoad;if(o===void 0||o.length===0)return y(!0);let a=o.map(s=>{let c=Qn(s,n),d=_p(c)?c.canLoad(t,e):Ge(n,()=>c(t,e)),u=fn(d);return r?u.pipe(Vd(r)):u});return y(a).pipe(Xn(),jd(i))}function jd(n){return Gl(De(t=>{if(typeof t!="boolean")throw lo(n,t)}),A(t=>t===!0))}function kp(n,t,e,i,r,o){let a=t.canMatch;if(!a||a.length===0)return y(!0);let s=a.map(c=>{let d=Qn(c,n),u=wp(d)?d.canMatch(t,e,r):Ge(n,()=>d(t,e,r));return fn(u).pipe(Vd(o))});return y(s).pipe(Xn(),jd(i))}var Tt=class n extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,n.prototype)}},Ui=class n extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,n.prototype)}};function Pp(n){throw new F(4e3,!1)}function Np(n){throw Pd(!1,Pe.GuardRejected)}var Rs=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}async lineralizeSegments(t,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[N])throw Pp(`${t.redirectTo}`);r=r.children[N]}}async applyRedirectCommands(t,e,i,r,o){let a=await Lp(e,r,o);if(a instanceof je)throw new Ui(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),t,i);if(a[0]==="/")throw new Ui(s);return s}applyRedirectCreateUrlTree(t,e,i,r){let o=this.createSegmentGroup(t,e.root,i,r);return new je(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let i={};return Object.entries(t).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(t,e,i,r){let o=this.createSegments(t,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(t,c,i,r)}),new te(o,a)}createSegments(t,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(t,o,r):this.findOrReturn(o,i))}findPosParam(t,e,i){let r=i[e.path.substring(1)];if(!r)throw new F(4001,!1);return r}findOrReturn(t,e){let i=0;for(let r of e){if(r.path===t.path)return e.splice(i),r;i++}return t}};function Lp(n,t,e){if(typeof n=="string")return Promise.resolve(n);let i=n;return qr(fn(Ge(e,()=>i(t))))}function Bp(n,t){return n.providers&&!n._injector&&(n._injector=Ua(n.providers,t,`Route: ${n.path}`)),n._injector??t}function pt(n){return n.outlet||N}function Vp(n,t){let e=n.filter(i=>pt(i)===t);return e.push(...n.filter(i=>pt(i)!==t)),e}var Is={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ud(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function jp(n,t,e,i,r,o,a){let s=zd(n,t,e);if(!s.matched)return y(s);let c=Ud(o(s));return i=Bp(t,i),kp(i,t,e,r,c,a).pipe(A(d=>d===!0?s:g({},Is)))}function zd(n,t,e){if(t.path==="")return t.pathMatch==="full"&&(n.hasChildren()||e.length>0)?g({},Is):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||hd)(e,n,t);if(!r)return g({},Is);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function ud(n,t,e,i,r){return e.length>0&&Hp(n,e,i,r)?{segmentGroup:new te(t,zp(i,new te(e,n.children))),slicedSegments:[]}:e.length===0&&$p(n,e,i)?{segmentGroup:new te(n.segments,Up(n,e,i,n.children)),slicedSegments:e}:{segmentGroup:new te(n.segments,n.children),slicedSegments:e}}function Up(n,t,e,i){let r={};for(let o of e)if(ho(n,t,o)&&!i[pt(o)]){let a=new te([],{});r[pt(o)]=a}return g(g({},i),r)}function zp(n,t){let e={};e[N]=t;for(let i of n)if(i.path===""&&pt(i)!==N){let r=new te([],{});e[pt(i)]=r}return e}function Hp(n,t,e,i){return e.some(r=>!ho(n,t,r)||!(pt(r)!==N)?!1:!(i!==void 0&&pt(r)===i))}function $p(n,t,e){return e.some(i=>ho(n,t,i))}function ho(n,t,e){return(n.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Gp(n,t,e){return t.length===0&&!n.children[e]}var Os=class{};async function Wp(n,t,e,i,r,o,a="emptyOnly",s){return new Fs(n,t,e,i,r,a,o,s).recognize()}var qp=31,Fs=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,i,r,o,a,s,c){this.injector=t,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Rs(this.urlSerializer,this.urlTree)}noMatchError(t){return new F(4002,`'${t.segmentGroup}'`)}async recognize(){let t=ud(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(t),r=new Xe(i,e),o=new Vi("",r),a=Ed(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(t){let e=new Yn([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),N,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,t,N,e),rootSnapshot:e}}catch(i){if(i instanceof Ui)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Tt?this.noMatchError(i):i}}async processSegmentGroup(t,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(t,e,i,o);let a=await this.processSegment(t,e,i,i.segments,r,!0,o);return a instanceof Xe?[a]:[]}async processChildren(t,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=i.children[c],u=Vp(e,c),b=await this.processSegmentGroup(t,u,d,c,r);a.push(...b)}let s=Hd(a);return Yp(s),s}async processSegment(t,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??t,e,c,i,r,o,a,s)}catch(d){if(d instanceof Tt||Ld(d))continue;throw d}if(Gp(i,r,o))return new Os;throw new Tt(i)}async processSegmentAgainstRoute(t,e,i,r,o,a,s,c){if(pt(i)!==a&&(a===N||!ho(r,o,i)))throw new Tt(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(t,r,e,i,o,a,c);throw new Tt(r)}async expandSegmentAgainstRouteUsingRedirect(t,e,i,r,o,a,s){let{matched:c,parameters:d,consumedSegments:u,positionalParamSegments:b,remainingSegments:x}=zd(e,r,o);if(!c)throw new Tt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>qp&&(this.allowRedirects=!1));let X=this.createSnapshot(t,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let H=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,b,Ud(X),t),M=await this.applyRedirects.lineralizeSegments(r,H);return this.processSegment(t,i,e,M.concat(x),a,!1,s)}createSnapshot(t,e,i,r,o){let a=new Yn(i,r,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Xp(e),pt(e),e.component??e._loadedComponent??null,e,Zp(e),t),s=Ps(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(t,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Oe=>this.createSnapshot(t,i,Oe.consumedSegments,Oe.parameters,a),c=await qr(jp(e,i,r,t,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new Tt(e);t=i._injector??t;let{routes:d}=await this.getChildConfig(t,i,r),u=i._loadedInjector??t,{parameters:b,consumedSegments:x,remainingSegments:X}=c,H=this.createSnapshot(t,i,x,b,a),{segmentGroup:M,slicedSegments:P}=ud(e,x,X,d,o);if(P.length===0&&M.hasChildren()){let Oe=await this.processChildren(u,d,M,H);return new Xe(H,Oe)}if(d.length===0&&P.length===0)return new Xe(H,[]);let Z=pt(i)===o,he=await this.processSegment(u,d,M,P,Z?N:o,!0,H);return new Xe(H,he instanceof Xe?[he]:[])}async getChildConfig(t,e,i){if(e.children)return{routes:e.children,injector:t};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(t).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await qr(Tp(t,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(t,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Np(e)}return{routes:[],injector:t}}};function Yp(n){n.sort((t,e)=>t.value.outlet===N?-1:e.value.outlet===N?1:t.value.outlet.localeCompare(e.value.outlet))}function Kp(n){let t=n.value.routeConfig;return t&&t.path===""}function Hd(n){let t=[],e=new Set;for(let i of n){if(!Kp(i)){t.push(i);continue}let r=t.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):t.push(i)}for(let i of e){let r=Hd(i.children);t.push(new Xe(i.value,r))}return t.filter(i=>!e.has(i))}function Xp(n){return n.data||{}}function Zp(n){return n.resolve||{}}function Qp(n,t,e,i,r,o,a){return St(async s=>{let{state:c,tree:d}=await Wp(n,t,e,i,s.extractedUrl,r,o,a);return $(g({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function Jp(n){return St(t=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=t;if(!i.length)return y(t);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of $d(s))o.add(c);let a=0;return xe(o).pipe(Rn(s=>r.has(s)?eg(s,e,n):(s.data=Ps(s,s.parent,n).resolve,y(void 0))),De(()=>a++),ka(1),St(s=>a===o.size?y(t):$e))})}function $d(n){let t=n.children.map(e=>$d(e)).flat();return[n,...t]}function eg(n,t,e){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!Fd(i)&&(r[zi]=i.title),An(()=>(n.data=Ps(n,n.parent,e).resolve,tg(r,n,t).pipe(A(o=>(n._resolvedData=o,n.data=g(g({},n.data),o),null)))))}function tg(n,t,e){let i=_s(n);if(i.length===0)return y({});let r={};return xe(i).pipe(St(o=>ng(n[o],t,e).pipe(jt(),De(a=>{if(a instanceof Kn)throw lo(new Yt,a);r[o]=a}))),ka(1),A(()=>r),ut(o=>Ld(o)?$e:hr(o)))}function ng(n,t,e){let i=t._environmentInjector,r=Qn(n,i),o=r.resolve?r.resolve(t,e):Ge(i,()=>r(t,e));return fn(o)}function md(n){return Q(t=>{let e=n(t);return e?xe(e).pipe(A(()=>t)):y(t)})}var Vs=(()=>{class n{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===N);return i}getResolvedTitleForRoute(e){return e.data[zi]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:()=>l(Gd),providedIn:"root"})}return n})(),Gd=(()=>{class n extends Vs{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(O(Ur))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Jn=new _("",{factory:()=>({})}),Gi=new _(""),Wd=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(_c);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await pd(Ge(e,()=>i.loadComponent())),a=await Kd(Yd(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await qd(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function qd(n,t,e,i){let r=await pd(Ge(e,()=>n.loadChildren())),o=await Kd(Yd(r)),a;o instanceof mc||Array.isArray(o)?a=o:a=await t.compileModuleAsync(o),i&&i(n);let s,c,d=!1,u;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,u=a,c=s.get(Gi,[],{optional:!0,self:!0}).flat()),{routes:c.map(Bs),injector:s,factory:u}}function ig(n){return n&&typeof n=="object"&&"default"in n}function Yd(n){return ig(n)?n.default:n}async function Kd(n){return n}var fo=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:()=>l(rg),providedIn:"root"})}return n})(),rg=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xd=new _("");var og=()=>{},Zd=new _(""),js=(()=>{class n{currentNavigation=E(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=E(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=l(Wd);environmentInjector=l(we);destroyRef=l(tt);urlSerializer=l(pn);rootContexts=l(Zn);location=l(Ot);inputBindingEnabled=l(mo,{optional:!0})!==null;titleStrategy=l(Vs);options=l(Jn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(fo);createViewTransition=l(Xd,{optional:!0});navigationErrorHandler=l(Zd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new eo(r)),i=r=>this.events.next(new to(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;J(()=>{this.transitions?.next($(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new He(null),this.transitions.pipe(ve(i=>i!==null),Q(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return y(i).pipe(Q(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Pe.SupersededByNewNavigation),$e;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?$(g({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new wt(s.id,this.urlSerializer.serialize(s.rawUrl),"",$n.IgnoredSameUrlNavigation)),s.resolve(!1),$e;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return y(s).pipe(Q(b=>(this.events.next(new Xt(b.id,this.urlSerializer.serialize(b.extractedUrl),b.source,b.restoredState)),b.id!==this.navigationId?$e:Promise.resolve(b))),Qp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),De(b=>{i.targetSnapshot=b.targetSnapshot,i.urlAfterRedirects=b.urlAfterRedirects,this.currentNavigation.update(x=>(x.finalUrl=b.urlAfterRedirects,x)),this.events.next(new Li)}),Q(b=>xe(i.routesRecognizeHandler.deferredHandle??y(void 0)).pipe(A(()=>b))),De(()=>{let b=new Ni(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(b)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:b,extractedUrl:x,source:X,restoredState:H,extras:M}=s,P=new Xt(b,this.urlSerializer.serialize(x),X,H);this.events.next(P);let Z=Id(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=$(g({},s),{targetSnapshot:Z,urlAfterRedirects:x,extras:$(g({},M),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(he=>(he.finalUrl=x,he)),y(i)}else return this.events.next(new wt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",$n.IgnoredByUrlHandlingStrategy)),s.resolve(!1),$e}),A(s=>{let c=new Xr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=$(g({},s),{guards:fp(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),xp(s=>this.events.next(s)),Q(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw lo(this.urlSerializer,s.guardsResult);let c=new Zr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return $e;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Pe.GuardRejected),$e;if(s.guards.canActivateChecks.length===0)return y(s);let d=new Qr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return $e;let u=!1;return y(s).pipe(Jp(this.paramsInheritanceStrategy),De({next:()=>{u=!0;let b=new Jr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(b)},complete:()=>{u||this.cancelNavigationTransition(s,"",Pe.NoDataFromResolver)}}))}),md(s=>{let c=u=>{let b=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let x=u._environmentInjector;b.push(this.configLoader.loadComponent(x,u.routeConfig).then(X=>{u.component=X}))}for(let x of u.children)b.push(...c(x));return b},d=c(s.targetSnapshot.root);return d.length===0?y(s):xe(Promise.all(d).then(()=>s))}),md(()=>this.afterPreactivation()),Q(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?xe(d).pipe(A(()=>i)):y(i)}),fe(1),Q(s=>{let c=dp(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=$(g({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new Wn);let d=i.beforeActivateHandler.deferredHandle;return d?xe(d.then(()=>s)):y(s)}),De(s=>{new Ms(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=og,c)),this.lastSuccessfulNavigation.set(J(this.currentNavigation)),this.events.next(new st(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Le(Bd(o.signal).pipe(ve(()=>!r&&!i.targetRouterState),De(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Pe.Aborted)}))),De({complete:()=>{r=!0}}),Le(this.transitionAbortWithErrorSubject.pipe(De(s=>{throw s}))),In(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Pe.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ut(s=>{if(r=!0,this.destroyed)return i.resolve(!1),$e;if(Nd(s))this.events.next(new at(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),hp(s)?this.events.next(new qn(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new hn(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let d=Ge(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Kn){let{message:u,cancellationCode:b}=lo(this.urlSerializer,d);this.events.next(new at(i.id,this.urlSerializer.serialize(i.extractedUrl),u,b)),this.events.next(new qn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return $e}))}))}cancelNavigationTransition(e,i,r){let o=new at(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=J(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ag(n){return n!==zn}var Qd=new _("");var Jd=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:()=>l(sg),providedIn:"root"})}return n})(),uo=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}shouldDestroyInjector(t){return!0}},sg=(()=>{class n extends uo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=vt(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),po=(()=>{class n{urlSerializer=l(pn);options=l(Jn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Ot);urlHandlingStrategy=l(fo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new je;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof je?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Id(null,l(we));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:()=>l(lg),providedIn:"root"})}return n})(),lg=(()=>{class n extends po{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Xt?this.updateStateMemento():e instanceof wt?this.commitTransition(i):e instanceof Ni?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Wn?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof at&&!Rd(e)?this.restoreHistory(i):e instanceof hn?this.restoreHistory(i,!0):e instanceof st&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,c=g(g({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",c)}else{let s=g(g({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=vt(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Us(n,t){n.events.pipe(ve(e=>e instanceof st||e instanceof at||e instanceof hn||e instanceof wt),A(e=>e instanceof st||e instanceof wt?0:(e instanceof at?e.code===Pe.Redirect||e.code===Pe.SupersededByNewNavigation:!1)?2:1),ve(e=>e!==2),fe(1)).subscribe(()=>{t()})}var gn=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(za);stateManager=l(po);options=l(Jn,{optional:!0})||{};pendingTasks=l(Zl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(js);urlSerializer=l(pn);location=l(Ot);urlHandlingStrategy=l(fo);injector=l(we);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Jd);injectorCleanup=l(Qd,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Gi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(mo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Fe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=J(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof at&&i.code!==Pe.Redirect&&i.code!==Pe.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof st)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof qn){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=g({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ag(r.source)},a);this.scheduleNavigation(s,zn,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}lp(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),zn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null;if(r){let c=g({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,o).catch(c=>{this.disposed||this.injector.get(fi)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return J(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Bs),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,d=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let b;try{let x=r?r.snapshot:this.routerState.snapshot.root;b=xd(x)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),b=this.currentUrlTree.root}return Sd(b,e,u,d??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Kt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,zn,null,i)}navigate(e,i={skipLocationChange:!1}){return cg(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Ut(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=g({},Ts):i===!1?r=g({},ki):r=g(g({},ki),i),Kt(e))return ys(this.currentUrlTree,e,r);let o=this.parseUrl(e);return ys(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((b,x)=>{s=b,c=x});let u=this.pendingTasks.add();return Us(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function cg(n){for(let t=0;t<n.length;t++)if(n[t]==null)throw new F(4008,!1)}var dg=(()=>{class n{router=l(gn);stateManager=l(po);fragment=E("");queryParams=E({});path=E("");serializer=l(pn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof st&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new je(i)))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lt=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Sr("href"),{optional:!0});reactiveHref=$a(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return J(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return J(this._target)}_target=E(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return J(this._queryParams)}_queryParams=E(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return J(this._fragment)}_fragment=E(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return J(this._queryParamsHandling)}_queryParamsHandling=E(void 0);set state(e){this._state.set(e)}get state(){return J(this._state)}_state=E(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return J(this._info)}_info=E(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return J(this._relativeTo)}_relativeTo=E(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return J(this._preserveFragment)}_preserveFragment=E(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return J(this._skipLocationChange)}_skipLocationChange=E(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return J(this._replaceUrl)}_replaceUrl=E(!1);isAnchorElement;onChanges=new I;applicationErrorHandler=l(fi);options=l(Jn,{optional:!0});reactiveRouterState=l(dg);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=E(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Kt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=ae(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Kt(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return J(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||n)(ee(gn),ee(gt),Ba("tabindex"),ee(Ce),ee(G),ee(ln))};static \u0275dir=R({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&z("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&se("href",r.reactiveHref(),dc)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",le],skipLocationChange:[2,"skipLocationChange","skipLocationChange",le],replaceUrl:[2,"replaceUrl","replaceUrl",le],routerLink:"routerLink"},features:[ke]})}return n})(),zs=(()=>{class n{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new ce;link=l(lt,{optional:!0});constructor(e,i,r,o){this.router=e,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof st&&this.update()})}ngAfterContentInit(){y(this.links.changes,y(null)).pipe(Oa()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=xe(e).pipe(Oa()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=ug(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?g({},Ts):g({},ki);return r=>{let o=r.urlTree;return o?J(ks(o,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(i){return new(i||n)(ee(gn),ee(G),ee(Ce),ee(Ve))};static \u0275dir=R({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&Nn(o,lt,5),i&2){let a;re(a=oe())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[ke]})}return n})();function ug(n){let t=n;return!!(t.paths||t.matrixParams||t.queryParams||t.fragment)}var eu=new _(""),mg=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=zn;restoredId=0;store={};urlSerializer=l(pn);zone=l(B);viewportScroller=l(Fc);transitions=l(js);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Xt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof st?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof wt&&e.code===$n.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Gn)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=J(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Gn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Cr()};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();function Hs(n,...t){return Ht([{provide:Gi,multi:!0,useValue:n},[],{provide:gt,useFactory:hg},{provide:wr,multi:!0,useFactory:pg},t.map(e=>e.\u0275providers)])}function hg(){return l(gn).routerState.root}function fg(n,t){return{\u0275kind:n,\u0275providers:t}}function $s(n={}){return fg(4,[{provide:eu,useFactory:()=>new mg(n)}])}function pg(){let n=l(ie);return t=>{let e=n.get(mt);if(t!==e.components[0])return;let i=n.get(gn),r=n.get(gg);n.get(vg)===1&&i.initialNavigation(),n.get(bg,null,{optional:!0})?.setUpPreloading(),n.get(eu,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var gg=new _("",{factory:()=>new I}),vg=new _("",{factory:()=>1});var bg=new _("");function Wi(n){return n.buttons===0||n.detail===0}function qi(n){let t=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Gs;function tu(){if(Gs==null){let n=typeof document<"u"?document.head:null;Gs=!!(n&&(n.createShadowRoot||n.attachShadow))}return Gs}function Ws(n){if(tu()){let t=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function qs(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let t=n.shadowRoot.activeElement;if(t===n)break;n=t}return n}function Ne(n){return n.composedPath?n.composedPath()[0]:n.target}var Ys;try{Ys=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ys=!1}var ue=(()=>{class n{_platformId=l(it);isBrowser=this._platformId?Ke(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ys)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Yi;function nu(){if(Yi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Yi=!0}))}finally{Yi=Yi||!1}return Yi}function ei(n){return nu()?n:!!n.capture}function Qe(n){return n instanceof G?n.nativeElement:n}var iu=new _("cdk-input-modality-detector-options"),ru={ignoreKeys:[18,17,224,91,16]},ou=650,Ks={passive:!0,capture:!0},au=(()=>{class n{_platform=l(ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new He(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ne(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ou||(this._modality.next(Wi(e)?"keyboard":"mouse"),this._mostRecentTarget=Ne(e))};_onTouchstart=e=>{if(qi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ne(e)};constructor(){let e=l(B),i=l(L),r=l(iu,{optional:!0});if(this._options=g(g({},ru),r),this.modalityDetected=this._modality.pipe(br(1)),this.modalityChanged=this.modalityDetected.pipe(Ta()),this._platform.isBrowser){let o=l(Me).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Ks),o.listen(i,"mousedown",this._onMousedown,Ks),o.listen(i,"touchstart",this._onTouchstart,Ks)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ki=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Ki||{}),su=new _("cdk-focus-monitor-default-options"),go=ei({passive:!0,capture:!0}),Xs=(()=>{class n{_ngZone=l(B);_platform=l(ue);_inputModalityDetector=l(au);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(L);_stopInputModalityDetector=new I;constructor(){let e=l(su,{optional:!0});this._detectionMode=e?.detectionMode||Ki.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Ne(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Qe(e);if(!this._platform.isBrowser||r.nodeType!==1)return y();let o=Ws(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new I,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Qe(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Qe(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ki.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Ki.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?ou:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Ne(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,go),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,go)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,go),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,go),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vo=new WeakMap,ct=(()=>{class n{_appRef;_injector=l(ie);_environmentInjector=l(we);load(e){let i=this._appRef=this._appRef||this._injector.get(mt),r=vo.get(i);r||(r={loaders:new Set,refs:[]},vo.set(i,r),i.onDestroy(()=>{vo.get(i)?.refs.forEach(o=>o.destroy()),vo.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Ar(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var lu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),bo;function _g(){if(bo===void 0&&(bo=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(bo=n.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return bo}function ti(n){return _g()?.createHTML(n)||n}function kt(n){return Array.isArray(n)?n:[n]}var cu=new Set,vn,_o=(()=>{class n{_platform=l(ue);_nonce=l(gi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Cg}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&yg(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yg(n,t){if(!cu.has(n))try{vn||(vn=document.createElement("style"),t&&vn.setAttribute("nonce",t),vn.setAttribute("type","text/css"),document.head.appendChild(vn)),vn.sheet&&(vn.sheet.insertRule(`@media ${n} {body{ }}`,0),cu.add(n))}catch(e){console.error(e)}}function Cg(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Zs=(()=>{class n{_mediaMatcher=l(_o);_zone=l(B);_queries=new Map;_destroySubject=new I;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return du(kt(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=du(kt(e)).map(a=>this._registerQuery(a).observable),o=pr(r);return o=gr(o.pipe(fe(1)),o.pipe(br(1),vr(0))),o.pipe(A(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new Te(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Mt(i),A(({matches:a})=>({query:e,matches:a})),Le(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function du(n){return n.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var Dg=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var uu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({providers:[Dg]})}return n})();var wg=200,yo=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(t,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:wg;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(De(e=>this._pressedLetters.push(e)),vr(t),ve(()=>this._pressedLetters.length>0),A(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Zt(n,...t){return t.length?t.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Co=class{_items;_activeItemIndex=E(-1);_activeItem=E(null);_wrap=!1;_typeaheadSubscription=Fe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof Va?this._itemChangesSubscription=t.changes.subscribe(i=>this._itemsChanged(i.toArray())):$t(t)&&(this._effectRef=nt(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new yo(e,{debounceInterval:typeof t=="number"?t:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!t[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Zt(t,"shiftKey"))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),i=typeof t=="number"?t:e.indexOf(t),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+t*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let i=this._getItemsArray();if(i[t]){for(;this._skipPredicateFn(i[t]);)if(t+=e,!i[t])return;this.setActiveItem(t)}}_getItemsArray(){return $t(this._items)?this._items():this._items instanceof Va?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let i=t.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Xi=class extends Co{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var Js={},Ue=class n{_appId=l(pi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){return this._appId!=="ng"&&(t+=this._appId),Js.hasOwnProperty(t)||(Js[t]=0),`${t}${e?n._infix+"-":""}${Js[t]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var fu=" ";function el(n,t,e){let i=pu(n,t);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),n.setAttribute(t,i.join(fu)))}function Do(n,t,e){let i=pu(n,t);e=e.trim();let r=i.filter(o=>o!==e);r.length?n.setAttribute(t,r.join(fu)):n.removeAttribute(t)}function pu(n,t){return n.getAttribute(t)?.match(/\S+/g)??[]}var bn;function gu(){if(bn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return bn=!1,bn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)bn=!0;else{let n=Element.prototype.scrollTo;n?bn=!/\{\s*\[native code\]\s*\}/.test(n.toString()):bn=!1}}return bn}function tl(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ni,vu=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function nl(){if(ni)return ni;if(typeof document!="object"||!document)return ni=new Set(vu),ni;let n=document.createElement("input");return ni=new Set(vu.filter(t=>(n.setAttribute("type",t),n.type===t))),ni}var bu={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Eg=new _("MATERIAL_ANIMATIONS"),_u=null;function xg(){return l(Eg,{optional:!0})?.animationsDisabled||l(On,{optional:!0})==="NoopAnimations"?"di-disabled":(_u??=l(_o).matchMedia("(prefers-reduced-motion)").matches,_u?"reduced-motion":"enabled")}function Je(){return xg()!=="enabled"}function ye(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Pt(n){return n!=null&&`${n}`!="false"}var dt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(dt||{}),il=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=dt.HIDDEN;constructor(t,e,i,r=!1){this._renderer=t,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Cu=ei({passive:!0,capture:!0}),rl=class{_events=new Map;addHandler(t,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Cu)})}removeHandler(t,e,i){let r=this._events.get(t);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Cu)))}_delegateEventHandler=t=>{let e=Ne(t);e&&this._events.get(t.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(t))})}},Zi={enterDuration:225,exitDuration:150},Sg=800,Du=ei({passive:!0,capture:!0}),wu=["mousedown","touchstart"],Eu=["mouseup","mouseleave","touchend","touchcancel"],Ag=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return n})(),Qi=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new rl;constructor(t,e,i,r,o){this._target=t,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Qe(i)),o&&o.get(ct).load(Ag)}fadeInRipple(t,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},Zi),i.animation);i.centered&&(t=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||Mg(t,e,r),s=t-r.left,c=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let b=window.getComputedStyle(u),x=b.transitionProperty,X=b.transitionDuration,H=x==="none"||X==="0s"||X==="0s, 0s"||r.width===0&&r.height===0,M=new il(this,u,i,H);u.style.transform="scale3d(1, 1, 1)",M.state=dt.FADING_IN,i.persistent||(this._mostRecentTransientRipple=M);let P=null;return!H&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Z=()=>{P&&(P.fallbackTimer=null),clearTimeout(Oe),this._finishRippleTransition(M)},he=()=>this._destroyRipple(M),Oe=setTimeout(he,d+100);u.addEventListener("transitionend",Z),u.addEventListener("transitioncancel",he),P={onTransitionEnd:Z,onTransitionCancel:he,fallbackTimer:Oe}}),this._activeRipples.set(M,P),(H||!d)&&this._finishRippleTransition(M),M}fadeOutRipple(t){if(t.state===dt.FADING_OUT||t.state===dt.HIDDEN)return;let e=t.element,i=g(g({},Zi),t.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",t.state=dt.FADING_OUT,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=Qe(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,wu.forEach(i=>{n._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Eu.forEach(e=>{this._triggerElement.addEventListener(e,this,Du)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===dt.FADING_IN?this._startFadeOutTransition(t):t.state===dt.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=dt.VISIBLE,!i&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=dt.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Wi(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Sg;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!qi(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===dt.VISIBLE||t.config.terminateOnPointerUp&&t.state===dt.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(wu.forEach(e=>n._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Eu.forEach(e=>t.removeEventListener(e,this,Du)),this._pointerUpEventsRegistered=!1))}};function Mg(n,t,e){let i=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(i*i+r*r)}var ol=new _("mat-ripple-global-options"),xu=(()=>{class n{_elementRef=l(G);_animationsDisabled=Je();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(B),i=l(ue),r=l(ol,{optional:!0}),o=l(ie);this._globalOptions=r||{},this._rippleRenderer=new Qi(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,g(g({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&Y("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Rg={capture:!0},Ig=["focus","mousedown","mouseenter","touchstart"],al="mat-ripple-loader-uninitialized",sl="mat-ripple-loader-class-name",Su="mat-ripple-loader-centered",wo="mat-ripple-loader-disabled",Au=(()=>{class n{_document=l(L);_animationsDisabled=Je();_globalRippleOptions=l(ol,{optional:!0});_platform=l(ue);_ngZone=l(B);_injector=l(ie);_eventCleanups;_hosts=new Map;constructor(){let e=l(Me).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Ig.map(i=>e.listen(this._document,i,this._onInteraction,Rg)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(al,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(sl))&&e.setAttribute(sl,i.className||""),i.centered&&e.setAttribute(Su,""),i.disabled&&e.setAttribute(wo,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(wo,""):e.removeAttribute(wo)}_onInteraction=e=>{let i=Ne(e);if(i instanceof HTMLElement){let r=i.closest(`[${al}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(sl)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Zi.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Zi.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(wo),rippleConfig:{centered:e.hasAttribute(Su),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Qi(s,this._ngZone,i,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(al)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Eo=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return n})();var Og=["mat-icon-button",""],Fg=["*"],Tg=new _("MAT_BUTTON_CONFIG");function Mu(n){return n==null?void 0:Ga(n)}var ll=(()=>{class n{_elementRef=l(G);_ngZone=l(B);_animationsDisabled=Je();_config=l(Tg,{optional:!0});_focusMonitor=l(Xs);_cleanupClick;_renderer=l(Ce);_rippleLoader=l(Au);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(ct).load(Eo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(se("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ln(r.color?"mat-"+r.color:""),Y("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",le],disabled:[2,"disabled","disabled",le],ariaDisabled:[2,"aria-disabled","ariaDisabled",le],disabledInteractive:[2,"disabledInteractive","disabledInteractive",le],tabIndex:[2,"tabIndex","tabIndex",Mu],_tabindex:[2,"tabindex","_tabindex",Mu]}})}return n})(),_n=(()=>{class n extends ll{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Be],attrs:Og,ngContentSelectors:Fg,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(),de(0,"span",0),ne(1),de(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return n})();var kg=new _("cdk-dir-doc",{providedIn:"root",factory:()=>l(L)}),Pg=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ru(n){let t=n?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?Pg.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var yn=(()=>{class n{get value(){return this.valueSignal()}valueSignal=E("ltr");change=new ce;constructor(){let e=l(kg,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ru(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({})}return n})();var xo=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[me]})}return n})();var Ng=["matButton",""],Lg=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Bg=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Iu=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),So=(()=>{class n extends ll{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Vg(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Iu.get(this._appearance):null,o=Iu.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Be],attrs:Ng,ngContentSelectors:Bg,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(Lg),de(0,"span",0),ne(1),w(2,"span",1),ne(3,1),S(),ne(4,2),de(5,"span",2)(6,"span",3)),i&2&&Y("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return n})();function Vg(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var ii=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[xo,me]})}return n})();function Ou(n){return Error(`Unable to find icon with the name "${n}"`)}function jg(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Fu(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Tu(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Nt=class{url;svgText;options;svgElement=null;constructor(t,e,i){this.url=t,this.svgText=e,this.options=i}},Pu=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Nt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Ye.HTML,r);if(!a)throw Tu(r);let s=ti(a);return this._addSvgIconConfig(e,i,new Nt("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Nt(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Ye.HTML,i);if(!o)throw Tu(i);let a=ti(o);return this._addSvgIconSetConfig(e,new Nt("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Ye.RESOURCE_URL,e);if(!i)throw Fu(e);let r=this._cachedIconsByUrl.get(i);return r?y(Ao(r)):this._loadSvgIconFromConfig(new Nt(e,null)).pipe(De(o=>this._cachedIconsByUrl.set(i,o)),A(o=>Ao(o)))}getNamedSvgIcon(e,i=""){let r=ku(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):hr(Ou(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(Ao(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(A(i=>Ao(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return y(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ut(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ye.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return At(o).pipe(A(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw Ou(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(De(i=>e.svgText=i),A(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(De(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(ti("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(ti("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw jg();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Ye.RESOURCE_URL,i);if(!a)throw Fu(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(A(d=>ti(d)),In(()=>this._inProgressUrlFetches.delete(a)),Yl());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(ku(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return Ug(o)?new Nt(o.url,null,o.options):new Nt(o,null)}}static \u0275fac=function(i){return new(i||n)(O(Ct,8),O(hs),O(L,8),O(rn))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ao(n){return n.cloneNode(!0)}function ku(n,t){return n+":"+t}function Ug(n){return!!(n.url&&n.options)}var zg=["*"],Hg=new _("MAT_ICON_DEFAULT_OPTIONS"),$g=new _("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(L),t=n?n.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),Nu=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Gg=Nu.map(n=>`[${n}]`).join(", "),Wg=/^url\(['"]?#(.*?)['"]?\)$/,Qt=(()=>{class n{_elementRef=l(G);_iconRegistry=l(Pu);_location=l($g);_errorHandler=l(rn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Fe.EMPTY;constructor(){let e=l(new Sr("aria-hidden"),{optional:!0}),i=l(Hg,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(Gg),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)Nu.forEach(a=>{let s=i[o],c=s.getAttribute(a),d=c?c.match(Wg):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(fe(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(se("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ln(r.color?"mat-"+r.color:""),Y("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",le],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:zg,decls:1,vars:0,template:function(i,r){i&1&&(Re(),ne(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return n})(),Jt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[me]})}return n})();var ri=class n{articlesState=E([]);activePageState=E(1);pageSizeState=E(7);totalCountState=E(0);userCreatedCountState=E(0);hasLoadedState=E(!1);articles=this.articlesState.asReadonly();activePage=this.activePageState.asReadonly();pageSize=this.pageSizeState.asReadonly();totalCount=this.totalCountState.asReadonly();userCreatedCount=this.userCreatedCountState.asReadonly();hasLoaded=this.hasLoadedState.asReadonly();saveArticles(t){this.articlesState.set(t.map(e=>g({},e))),this.hasLoadedState.set(!0)}savePaginationState(t,e=this.pageSizeState()){this.activePageState.set(t),this.pageSizeState.set(e)}saveTotalCount(t){this.totalCountState.set(t)}saveUserCreatedCount(t){this.userCreatedCountState.set(t)}savePage(t){this.saveArticles(t.articles),this.savePaginationState(t.page,t.pageSize),this.saveTotalCount(t.totalCount),this.saveUserCreatedCount(t.userCreatedCount)}hasSnapshot(t,e){return this.hasLoaded()&&this.activePage()===t&&this.pageSize()===e}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var ze={production:!0,useBackend:!1,apiBaseUrl:""};var Et=[{id:"1",title:"\u041A\u0430\u043A \u044F \u043D\u0430\u0447\u0430\u043B \u0438\u0437\u0443\u0447\u0430\u0442\u044C iOS-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438 \u043F\u0440\u043E\u0448\u0451\u043B \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432 \u0428\u0418\u0424\u0422",text:"\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u043E \u0441\u0432\u043E\u0451\u043C \u043E\u043F\u044B\u0442\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u0430 \u0428\u0418\u0424\u0422 \u0432 \u0426\u0424\u0422: \u043A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u0438\u0437\u0443\u0447\u0430\u043B\u0438 \u0438 \u0447\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0432 \u0438\u0442\u043E\u0433\u0435.",dateLabel:"Jan 10, 2025",isoDate:"2025-01-10",tag:"iOS",theme:"red",image:"images/Selection.png",isUserCreated:!1,rating:5},{id:"2",title:"Git \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445: \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",text:"",dateLabel:"Feb 5, 2025",isoDate:"2025-02-05",tag:"Git",theme:"green",image:"images/Selection.png",isUserCreated:!1,rating:4},{id:"3",title:"\u041F\u0435\u0440\u0432\u044B\u0435 \u0448\u0430\u0433\u0438 \u0432 HTML: \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",text:"",dateLabel:"Mar 1, 2025",isoDate:"2025-03-01",tag:"HTML",theme:"neutral",image:"images/Selection.png",isUserCreated:!1,rating:3},{id:"4",title:"\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0442\u0435\u0433\u0438 HTML: \u0437\u0430\u0447\u0435\u043C \u043E\u043D\u0438 \u043D\u0443\u0436\u043D\u044B",text:"",dateLabel:"Mar 5, 2025",isoDate:"2025-03-05",tag:"HTML",theme:"neutral",image:"images/Selection.png",isUserCreated:!1,rating:4},{id:"5",title:"Aurora OS: \u043E\u043F\u044B\u0442 \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",text:"",dateLabel:"Mar 8, 2025",isoDate:"2025-03-08",tag:"Aurora",theme:"neutral",image:"images/Selection.png",isUserCreated:!1,rating:5},{id:"6",title:"CSS Flexbox: \u043A\u0430\u043A \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",text:"",dateLabel:"Mar 10, 2025",isoDate:"2025-03-10",tag:"CSS",theme:"green",image:"images/Selection.png",isUserCreated:!1,rating:4},{id:"7",title:"CSS Grid: \u0441\u0435\u0442\u043A\u0438 \u0434\u043B\u044F \u0432\u0451\u0440\u0441\u0442\u043A\u0438",text:"",dateLabel:"Mar 15, 2025",isoDate:"2025-03-15",tag:"CSS",theme:"green",image:"images/Selection.png",isUserCreated:!1,rating:4}];var Ro=class n{storageKey="kovali-blog-articles";platformId=l(it);getArticles(t){return y(this.buildPage(this.readArticles(),t))}getArticle(t){return y(this.readArticles().find(e=>e.id===t)??null)}addArticle(t,e){return xe(this.createArticle(t)).pipe(A(i=>{let r=[i,...this.readArticles()];return this.writeArticles(r),this.buildPage(r,e)}))}updateArticle(t,e,i){return xe(Lu(e.imageFile)).pipe(A(r=>{let o=this.readArticles().map(a=>a.id===t?$(g({},a),{title:e.title,text:e.text,tag:e.categoryName,image:r??a.image}):a);return this.writeArticles(o),this.buildPage(o,i)}))}deleteArticle(t,e){let i=this.readArticles().filter(r=>r.id!==t);return this.writeArticles(i),y(this.buildPage(i,e))}createArticle(t){let e=new Date;return Lu(t.imageFile).then(i=>({id:String(Date.now()),title:t.title,text:t.text,dateLabel:e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),isoDate:e.toISOString().slice(0,10),tag:t.categoryName,theme:"neutral",image:i??"images/Selection.png",isUserCreated:!0,rating:0}))}readArticles(){if(!Ke(this.platformId))return Ji(Et);let t=localStorage.getItem(this.storageKey);if(t===null){let i=Ji(Et);return this.writeArticles(i),i}try{let i=JSON.parse(t);if(Yg(i))return Ji(i)}catch{}let e=Ji(Et);return this.writeArticles(e),e}writeArticles(t){Ke(this.platformId)&&localStorage.setItem(this.storageKey,JSON.stringify(t))}buildPage(t,e){let i=Math.max(1,Math.floor(e.pageSize)),r=t.length,o=Math.max(1,Math.ceil(r/i)),a=r===0?1:qg(Math.floor(e.page),1,o),s=(a-1)*i;return{articles:Ji(t.slice(s,s+i)),totalCount:r,userCreatedCount:t.filter(c=>c.isUserCreated).length,page:a,pageSize:i}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};function Ji(n){return n.map(t=>$(g({},t),{id:String(t.id),rating:t.rating??0}))}function qg(n,t,e){return Math.min(Math.max(n,t),e)}function Yg(n){return Array.isArray(n)&&n.every(t=>typeof t=="object"&&t!==null&&(typeof t.id=="string"||typeof t.id=="number")&&typeof t.title=="string"&&typeof t.text=="string"&&typeof t.dateLabel=="string"&&typeof t.isoDate=="string"&&typeof t.tag=="string"&&Kg(t.theme)&&typeof t.image=="string"&&typeof t.isUserCreated=="boolean"&&(typeof t.rating=="number"||t.rating===void 0))}function Lu(n){return n?new Promise((t,e)=>{let i=new FileReader;i.addEventListener("load",()=>t(String(i.result))),i.addEventListener("error",()=>e(i.error)),i.readAsDataURL(n)}):Promise.resolve(null)}function Kg(n){return n==="red"||n==="green"||n==="neutral"}var Io=class n{http=l(Ct);baseUrl=`${ze.apiBaseUrl}/categories`;getCategories(){return this.http.get(this.baseUrl).pipe(A(t=>t.map(Bu)))}ensureCategory(t){let e=t.trim();return this.getCategories().pipe(Q(i=>{let r=i.find(o=>o.name.toLowerCase()===e.toLowerCase());return r?y(r):this.http.post(this.baseUrl,{name:e}).pipe(A(Bu))}))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};function Bu(n){return{id:n.id,name:n.name}}var Oo=class n{storageKey="kovali-blog-categories";platformId=l(it);getCategories(){return y(this.readCategories())}ensureCategory(t){let e=t.trim(),i=this.readCategories(),r=i.find(a=>a.name.toLowerCase()===e.toLowerCase());if(r)return y(r);let o={id:String(Date.now()),name:e};return this.writeCategories([...i,o]),y(o)}readCategories(){if(!Ke(this.platformId))return dl();let t=localStorage.getItem(this.storageKey);if(t===null){let i=dl();return this.writeCategories(i),i}try{let i=JSON.parse(t);if(Xg(i))return i}catch{}let e=dl();return this.writeCategories(e),e}writeCategories(t){Ke(this.platformId)&&localStorage.setItem(this.storageKey,JSON.stringify(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};function dl(){return Array.from(new Set(Et.map(n=>n.tag))).map((n,t)=>({id:String(t+1),name:n}))}function Xg(n){return Array.isArray(n)&&n.every(t=>typeof t=="object"&&t!==null&&typeof t.id=="string"&&typeof t.name=="string")}var oi=new _("CATEGORIES_SERVICE",{providedIn:"root",factory:()=>ze.useBackend?l(Io):l(Oo)});function er(n){return new Map(n.map(t=>[t.id,t.name]))}function tr(n,t=new Map){let e=new Date(n.createdAt),i=!Number.isNaN(e.getTime()),r=n.category?.name??(n.categoryId?t.get(n.categoryId):void 0)??"New";return{id:n.id,title:n.title,text:n.content,dateLabel:i?e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",isoDate:i?e.toISOString().slice(0,10):new Date().toISOString().slice(0,10),tag:r,theme:"neutral",image:n.imgSrc?Zg(n.imgSrc):"images/Selection.png",isUserCreated:!0,rating:n.rating??0}}function Zg(n){if(/^(https?:|data:|blob:)/.test(n))return n;let t=ze.apiBaseUrl.replace(/\/$/,""),e=n.startsWith("/")?n:`/${n}`;return`${t}${e}`}var Fo=class n{http=l(Ct);categoriesService=l(oi);baseUrl=`${ze.apiBaseUrl}/articles`;getArticles(t){let e=new ht().set("page",t.page).set("limit",t.pageSize).set("cumulative",!1);return At({response:this.http.get(this.baseUrl,{params:e}),categories:this.categoriesService.getCategories()}).pipe(A(({response:i,categories:r})=>{let o=er(r);return{articles:i.items.map(a=>tr(a,o)),totalCount:i.total,userCreatedCount:i.total,page:i.page,pageSize:i.limit}}))}getArticle(t){return At({article:this.http.get(`${this.baseUrl}/${t}`).pipe(ut(()=>y(null))),categories:this.categoriesService.getCategories()}).pipe(A(({article:e,categories:i})=>e?tr(e,er(i)):null))}addArticle(t,e){return this.resolveCategoryId(t).pipe(Q(i=>this.http.post(this.baseUrl,Vu(t,i))),Q(()=>this.getArticles(e)))}updateArticle(t,e,i){return this.resolveCategoryId(e).pipe(Q(r=>this.http.patch(`${this.baseUrl}/${t}`,Vu(e,r))),Q(()=>this.getArticles(i)))}deleteArticle(t,e){return this.http.delete(`${this.baseUrl}/${t}`).pipe(Q(()=>this.getArticles(e)))}resolveCategoryId(t){let e=t.categoryId?.trim();return e?y(e):this.categoriesService.ensureCategory(t.categoryName).pipe(A(i=>i.id))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};function Vu(n,t){let e=new FormData;return e.append("title",n.title),e.append("content",n.text),e.append("categoryId",t),n.imageFile&&e.append("image",n.imageFile),e}var To=new _("ARTICLES_SERVICE",{providedIn:"root",factory:()=>ze.useBackend?l(Fo):l(Ro)});var Wu=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||n)(ee(Ce),ee(G))};static \u0275dir=R({type:n})}return n})(),Qg=(()=>{class n extends Wu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=vt(n)))(r||n)}})();static \u0275dir=R({type:n,features:[Be]})}return n})(),$o=new _("");var Jg={provide:$o,useExisting:zt(()=>li),multi:!0};function ev(){let n=ot()?ot().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var tv=new _(""),li=(()=>{class n extends Wu{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!ev())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||n)(ee(Ce),ee(G),ee(tv,8))};static \u0275dir=R({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&z("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ie([Jg]),Be]})}return n})();function hl(n){return n==null||fl(n)===0}function fl(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var pl=new _(""),gl=new _(""),nv=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,qe=class{static min(t){return iv(t)}static max(t){return rv(t)}static required(t){return ov(t)}static requiredTrue(t){return av(t)}static email(t){return sv(t)}static minLength(t){return lv(t)}static maxLength(t){return cv(t)}static pattern(t){return dv(t)}static nullValidator(t){return qu()}static compose(t){return Ju(t)}static composeAsync(t){return em(t)}};function iv(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function rv(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function ov(n){return hl(n.value)?{required:!0}:null}function av(n){return n.value===!0?null:{required:!0}}function sv(n){return hl(n.value)||nv.test(n.value)?null:{email:!0}}function lv(n){return t=>{let e=t.value?.length??fl(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function cv(n){return t=>{let e=t.value?.length??fl(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function dv(n){if(!n)return qu;let t,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(hl(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function qu(n){return null}function Yu(n){return n!=null}function Ku(n){return vi(n)?xe(n):n}function Xu(n){let t={};return n.forEach(e=>{t=e!=null?g(g({},t),e):t}),Object.keys(t).length===0?null:t}function Zu(n,t){return t.map(e=>e(n))}function uv(n){return!n.validate}function Qu(n){return n.map(t=>uv(t)?t:e=>t.validate(e))}function Ju(n){if(!n)return null;let t=n.filter(Yu);return t.length==0?null:function(e){return Xu(Zu(e,t))}}function vl(n){return n!=null?Ju(Qu(n)):null}function em(n){if(!n)return null;let t=n.filter(Yu);return t.length==0?null:function(e){let i=Zu(e,t).map(Ku);return At(i).pipe(A(Xu))}}function bl(n){return n!=null?em(Qu(n)):null}function ju(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function tm(n){return n._rawValidators}function nm(n){return n._rawAsyncValidators}function ul(n){return n?Array.isArray(n)?n:[n]:[]}function Po(n,t){return Array.isArray(n)?n.includes(t):n===t}function Uu(n,t){let e=ul(t);return ul(n).forEach(r=>{Po(e,r)||e.push(r)}),e}function zu(n,t){return ul(t).filter(e=>!Po(n,e))}var No=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=vl(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=bl(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},en=class extends No{name;get formDirective(){return null}get path(){return null}},Cn=class extends No{_parent=null;name=null;valueAccessor=null},Lo=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Go=(()=>{class n extends Lo{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(ee(Cn,2))};static \u0275dir=R({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Be]})}return n})(),Wo=(()=>{class n extends Lo{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(ee(en,10))};static \u0275dir=R({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&Y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Be]})}return n})();var nr="VALID",ko="INVALID",ai="PENDING",ir="DISABLED",tn=class{},Bo=class extends tn{value;source;constructor(t,e){super(),this.value=t,this.source=e}},or=class extends tn{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},ar=class extends tn{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},si=class extends tn{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Vo=class extends tn{source;constructor(t){super(),this.source=t}},jo=class extends tn{source;constructor(t){super(),this.source=t}};function im(n){return(qo(n)?n.validators:n)||null}function mv(n){return Array.isArray(n)?vl(n):n||null}function rm(n,t){return(qo(t)?t.asyncValidators:n)||null}function hv(n){return Array.isArray(n)?bl(n):n||null}function qo(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function fv(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new F(1e3,"");if(!i[e])throw new F(1001,"")}function pv(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new F(1002,"")})}var Uo=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return J(this.statusReactive)}set status(t){J(()=>this.statusReactive.set(t))}_status=ae(()=>this.statusReactive());statusReactive=E(void 0);get valid(){return this.status===nr}get invalid(){return this.status===ko}get pending(){return this.status===ai}get disabled(){return this.status===ir}get enabled(){return this.status!==ir}errors;get pristine(){return J(this.pristineReactive)}set pristine(t){J(()=>this.pristineReactive.set(t))}_pristine=ae(()=>this.pristineReactive());pristineReactive=E(!0);get dirty(){return!this.pristine}get touched(){return J(this.touchedReactive)}set touched(t){J(()=>this.touchedReactive.set(t))}_touched=ae(()=>this.touchedReactive());touchedReactive=E(!1);get untouched(){return!this.touched}_events=new I;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Uu(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Uu(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(zu(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(zu(t,this._rawAsyncValidators))}hasValidator(t){return Po(this._rawValidators,t)}hasAsyncValidator(t){return Po(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched($(g({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new ar(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new ar(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty($(g({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new or(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new or(!0,i))}markAsPending(t={}){this.status=ai;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new si(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending($(g({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=ir,this.errors=null,this._forEachChild(r=>{r.disable($(g({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Bo(this.value,i)),this._events.next(new si(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors($(g({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=nr,this._forEachChild(i=>{i.enable($(g({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors($(g({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===nr||this.status===ai)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Bo(this.value,e)),this._events.next(new si(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity($(g({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ir:nr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=ai,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Ku(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new si(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new ce,this.statusChanges=new ce}_calculateStatus(){return this._allControlsDisabled()?ir:this.errors?ko:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ai)?ai:this._anyControlsHaveStatus(ko)?ko:nr}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new or(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new ar(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){qo(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=mv(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=hv(this._rawAsyncValidators)}},nn=class extends Uo{constructor(t,e,i){super(im(e),rm(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){pv(this,!0,t),Object.keys(t).forEach(i=>{fv(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this.controls[i];r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,$(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new jo(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var _l=new _("",{factory:()=>yl}),yl="always";function gv(n,t){return[...t.path,n]}function ml(n,t,e=yl){Cl(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),bv(n,t),yv(n,t),_v(n,t),vv(n,t)}function Hu(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),Ho(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function zo(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function vv(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Cl(n,t){let e=tm(n);t.validator!==null?n.setValidators(ju(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=nm(n);t.asyncValidator!==null?n.setAsyncValidators(ju(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();zo(t._rawValidators,r),zo(t._rawAsyncValidators,r)}function Ho(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=tm(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=nm(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return zo(t._rawValidators,i),zo(t._rawAsyncValidators,i),e}function bv(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&om(n,t)})}function _v(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&om(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function om(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function yv(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function am(n,t){n==null,Cl(n,t)}function Cv(n,t){return Ho(n,t)}function Dv(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function wv(n){return Object.getPrototypeOf(n.constructor)===Qg}function sm(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ev(n,t){if(!t)return null;Array.isArray(t);let e,i,r;return t.forEach(o=>{o.constructor===li?e=o:wv(o)?i=o:r=o}),r||i||e||null}function xv(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var Sv={provide:en,useExisting:zt(()=>Dl)},rr=Promise.resolve(),Dl=(()=>{class n extends en{callSetDisabledState;get submitted(){return J(this.submittedReactive)}_submitted=ae(()=>this.submittedReactive());submittedReactive=E(!1);_directives=new Set;form;ngSubmit=new ce;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new nn({},vl(e),bl(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){rr.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),ml(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){rr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){rr.then(()=>{let i=this._findContainer(e.path),r=new nn({});am(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){rr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){rr.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),sm(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Vo(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(ee(pl,10),ee(gl,10),ee(_l,8))};static \u0275dir=R({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&z("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ie([Sv]),Be]})}return n})();function $u(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Gu(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Lt=class extends Uo{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(im(e),rm(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),qo(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Gu(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new jo(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){$u(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){$u(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Gu(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Av=n=>n instanceof Lt;var Yo=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Mv=(()=>{class n extends en{callSetDisabledState;get submitted(){return J(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ae(()=>this._submittedReactive());_submittedReactive=E(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ho(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return ml(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Hu(e.control||null,e,!1),xv(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,sm(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Vo(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Hu(i||null,e),Av(r)&&(ml(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);am(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&Cv(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Cl(this.form,this),this._oldForm&&Ho(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(ee(pl,10),ee(gl,10),ee(_l,8))};static \u0275dir=R({type:n,features:[Be,ke]})}return n})();var lm=new _("");var Rv={provide:Cn,useExisting:zt(()=>sr)},sr=(()=>{class n extends Cn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new ce;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Ev(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Dv(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return gv(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(ee(en,13),ee(pl,10),ee(gl,10),ee($o,10),ee(lm,8))};static \u0275dir=R({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Ie([Rv]),Be,ke]})}return n})();var Iv={provide:en,useExisting:zt(()=>Dn)},Dn=(()=>{class n extends Mv{form=null;ngSubmit=new ce;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=vt(n)))(r||n)}})();static \u0275dir=R({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&z("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ie([Iv]),Be]})}return n})();var Ov=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({})}return n})();var Ko=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:lm,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:_l,useValue:e.callSetDisabledState??yl}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[Ov]})}return n})();var dm=(()=>{class n{_animationsDisabled=Je();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&Y("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Tv=["text"],kv=[[["mat-icon"]],"*"],Pv=["mat-icon","*"];function Nv(n,t){if(n&1&&K(0,"mat-pseudo-checkbox",1),n&2){let e=T();U("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Lv(n,t){if(n&1&&K(0,"mat-pseudo-checkbox",3),n&2){let e=T();U("disabled",e.disabled)}}function Bv(n,t){if(n&1&&(m(0,"span",4),f(1),p()),n&2){let e=T();h(),Gt("(",e.group.label,")")}}var El=new _("MAT_OPTION_PARENT_COMPONENT"),xl=new _("MatOptgroup");var lr=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}},ci=(()=>{class n{_element=l(G);_changeDetectorRef=l(Ve);_parent=l(El,{optional:!0});group=l(xl,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(Ue).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=E(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ce;_text;_stateChanges=new I;constructor(){let e=l(ct);e.load(Eo),e.load(lu),this._signalDisableRipple=!!this._parent&&$t(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Zt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new lr(this,e))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&_t(Tv,7),i&2){let o;re(o=oe())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&z("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(We("id",r.id),se("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),Y("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",le]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Pv,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Re(kv),W(0,Nv,1,2,"mat-pseudo-checkbox",1),ne(1),m(2,"span",2,0),ne(4,1),p(),W(5,Lv,1,1,"mat-pseudo-checkbox",3),W(6,Bv,2,1,"span",4),K(7,"div",5)),i&2&&(q(r.multiple?0:-1),h(5),q(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),h(),q(r.group&&r.group._inert?6:-1),h(),U("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[dm,xu],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function um(n,t,e){if(e.length){let i=t.toArray(),r=e.toArray(),o=0;for(let a=0;a<n+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function mm(n,t,e,i){return n<e?n:n+t>e+i?Math.max(0,n-i+t):e}var Vv=20,Sl=(()=>{class n{_ngZone=l(B);_platform=l(ue);_renderer=l(Me).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Vv){return this._platform.isBrowser?new Te(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Fa(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ve(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Qe(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jv=20,wn=(()=>{class n{_platform=l(ue);_listeners;_viewportSize=null;_change=new I;_document=l(L);constructor(){let e=l(B),i=l(Me).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=jv){return e>0?this._change.pipe(Fa(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xo=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({})}return n})(),Al=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[me,Xo,me,Xo]})}return n})();var cr=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},Ml=class extends cr{component;viewContainerRef;injector;projectableNodes;bindings;constructor(t,e,i,r,o){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},di=class extends cr{templateRef;viewContainerRef;context;injector;constructor(t,e,i,r){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},Rl=class extends cr{element;constructor(t){super(),this.element=t instanceof G?t.nativeElement:t}},Il=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Ml)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof di)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof Rl)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Zo=class extends Il{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,r=i.get(ja,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=t.injector||this._defaultInjector||ie.NULL,o=r.get(we,i.injector);e=Ar(t.component,{elementInjector:r,environmentInjector:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var hm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({})}return n})();var fm=gu();function Cm(n){return new Qo(n.get(wn),n.get(L))}var Qo=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=ye(-this._previousScrollPosition.left),t.style.top=ye(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),fm&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),fm&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function Dm(n,t){return new Jo(n.get(Sl),n.get(B),n.get(wn),t)}var Jo=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,r){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(ve(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var dr=class{enable(){}disable(){}attach(){}};function Ol(n,t){return t.some(e=>{let i=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return i||r||o||a})}function pm(n,t){return t.some(e=>{let i=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return i||r||o||a})}function oa(n,t){return new ea(n.get(Sl),n.get(wn),n.get(B),t)}var ea=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,r){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Ol(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},wm=(()=>{class n{_injector=l(ie);constructor(){}noop=()=>new dr;close=e=>Dm(this._injector,e);block=()=>Cm(this._injector);reposition=e=>oa(this._injector,e);static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ui=class{positionStrategy;scrollStrategy=new dr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var ta=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Em=(()=>{class n{_attachedOverlays=[];_document=l(L);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xm=(()=>{class n extends Em{_ngZone=l(B);_renderer=l(Me).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=vt(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sm=(()=>{class n extends Em{_platform=l(ue);_ngZone=l(B);_renderer=l(Me).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ne(e)};_clickListener=e=>{let i=Ne(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(gm(s.overlayElement,i)||gm(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=vt(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function gm(n,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Am=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Mm=(()=>{class n{_platform=l(ue);_containerElement;_document=l(L);_styleLoader=l(ct);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||tl()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),tl()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Am)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Fl=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,r){this._renderer=e,this._ngZone=i,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Tl(n){return n&&n.nodeType===1}var na=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=Fe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(t,e,i,r,o,a,s,c,d,u=!1,b,x){this._portalOutlet=t,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=b,this._renderer=x,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Rt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=g(g({},this._config),t),this._updateElementSize()}setDirection(t){this._config=$(g({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=ye(this._config.width),t.height=ye(this._config.height),t.minWidth=ye(this._config.minWidth),t.minHeight=ye(this._config.minHeight),t.maxWidth=ye(this._config.maxWidth),t.maxHeight=ye(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Tl(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Fl(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let r=kt(e||[]).filter(o=>!!o);r.length&&(i?t.classList.add(...r):t.classList.remove(...r))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=Rt(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},vm="cdk-overlay-connected-position-bounding-box",Uv=/([A-Za-z%]+)$/;function aa(n,t){return new ia(t,n.get(wn),n.get(L),n.get(ue),n.get(Mm))}var ia=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=Fe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(vm),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(t,r,s),d=this._getOverlayPoint(c,e,s),u=this._getOverlayFit(d,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,d,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>c&&(c=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&En(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(vm),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof G?this._origin.nativeElement:Tl(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let r;if(i.originX=="center")r=t.left+t.width/2;else{let a=this._isRtl()?t.right:t.left,s=this._isRtl()?t.left:t.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=t.top+t.height/2:o=i.originY=="top"?t.top:t.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(t,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:t.x+r,y:t.y+o}}_getOverlayFit(t,e,i,r){let o=_m(e),{x:a,y:s}=t,c=this._getOffset(r,"x"),d=this._getOffset(r,"y");c&&(a+=c),d&&(s+=d);let u=0-a,b=a+o.width-i.width,x=0-s,X=s+o.height-i.height,H=this._subtractOverflows(o.width,u,b),M=this._subtractOverflows(o.height,x,X),P=H*M;return{visibleArea:P,isCompletelyWithinViewport:o.width*o.height===P,fitsInViewportVertically:M===o.height,fitsInViewportHorizontally:H==o.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=bm(this._overlayRef.getConfig().minHeight),s=bm(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||a!=null&&a<=r,d=t.fitsInViewportHorizontally||s!=null&&s<=o;return c&&d}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let r=_m(e),o=this._viewportRect,a=Math.max(t.x+r.width-o.width,0),s=Math.max(t.y+r.height-o.height,0),c=Math.max(o.top-i.top-t.y,0),d=Math.max(o.left-i.left-t.x,0),u=0,b=0;return r.width<=o.width?u=d||-a:u=t.x<this._getViewportMarginStart()?o.left-i.left-t.x:0,r.height<=o.height?b=c||-s:b=t.y<this._getViewportMarginTop()?o.top-i.top-t.y:0,this._previousPushAmount={x:u,y:b},{x:t.x+u,y:t.y+b}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!zv(this._lastScrollVisibility,i)){let r=new ta(t,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=t.overlayY;t.overlayX==="center"?i="center":this._isRtl()?i=t.overlayX==="start"?"right":"left":i=t.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=t.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let X=Math.min(i.bottom-t.y+i.top,t.y),H=this._lastBoundingBoxSize.height;o=X*2,a=t.y-X,o>H&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.y-H/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,b,x;if(d)x=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=t.x-this._getViewportMarginStart();else if(c)b=t.x,u=i.right-t.x-this._getViewportMarginEnd();else{let X=Math.min(i.right-t.x+i.left,t.x),H=this._lastBoundingBoxSize.width;u=X*2,b=t.x-X,u>H&&!this._isInitialRender&&!this._growAfterOpen&&(b=t.x-H/2)}return{top:a,left:b,bottom:s,right:x,width:u,height:o}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ye(i.width),r.height=ye(i.height),r.top=ye(i.top)||"auto",r.bottom=ye(i.bottom)||"auto",r.left=ye(i.left)||"auto",r.right=ye(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ye(o)),a&&(r.maxWidth=ye(a))}this._lastBoundingBoxSize=i,En(this._boundingBox.style,r)}_resetBoundingBoxStyles(){En(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){En(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();En(i,this._getExactOverlayY(e,t,u)),En(i,this._getExactOverlayX(e,t,u))}else i.position="static";let s="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=ye(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=ye(a.maxWidth):o&&(i.maxWidth="")),En(this._pane.style,i)}_getExactOverlayY(t,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),t.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ye(o.y);return r}_getExactOverlayX(t,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=t.overlayX==="end"?"left":"right":a=t.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ye(o.x);return r}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:pm(t,i),isOriginOutsideView:Ol(t,i),isOverlayClipped:pm(e,i),isOverlayOutsideView:Ol(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,r)=>i-Math.max(r,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&kt(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof G)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let i=e.getBoundingClientRect();return t&&(e.style.display=""),i}};function En(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function bm(n){if(typeof n!="number"&&n!=null){let[t,e]=n.split(Uv);return!e||e==="px"?parseFloat(t):null}return n||null}function _m(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function zv(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var ym="cdk-global-overlay-wrapper";function Rm(n){return new ra}var ra=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(ym),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,b=this._xOffset,x=this._overlayRef.getConfig().direction==="rtl",X="",H="",M="";c?M="flex-start":u==="center"?(M="center",x?H=b:X=b):x?u==="left"||u==="end"?(M="flex-end",X=b):(u==="right"||u==="start")&&(M="flex-start",H=b):u==="left"||u==="start"?(M="flex-start",X=b):(u==="right"||u==="end")&&(M="flex-end",H=b),t.position=this._cssPosition,t.marginLeft=c?"0":X,t.marginTop=d?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":H,e.justifyContent=M,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(ym),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},Im=(()=>{class n{_injector=l(ie);constructor(){}global(){return Rm()}flexibleConnectedTo(e){return aa(this._injector,e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Om=new _("OVERLAY_DEFAULT_CONFIG");function sa(n,t){n.get(ct).load(Am);let e=n.get(Mm),i=n.get(L),r=n.get(Ue),o=n.get(mt),a=n.get(yn),s=n.get(Ce,null,{optional:!0})||n.get(Me).createRenderer(null,null),c=new ui(t),d=n.get(Om,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=t?.usePopover??d:c.usePopover=!1;let u=i.createElement("div"),b=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),b.appendChild(u),c.usePopover&&(b.setAttribute("popover","manual"),b.classList.add("cdk-overlay-popover"));let x=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Tl(x)?x.after(b):x?.type==="parent"?x.element.appendChild(b):e.getContainerElement().appendChild(b),new na(new Zo(u,o,n),b,u,c,n.get(B),n.get(xm),i,n.get(Ot),n.get(Sm),t?.disableAnimations??n.get(On,null,{optional:!0})==="NoopAnimations",n.get(we),s)}var Fm=(()=>{class n{scrollStrategies=l(wm);_positionBuilder=l(Im);_injector=l(ie);constructor(){}create(e){return sa(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kl=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({providers:[Fm],imports:[me,hm,Al,Al]})}return n})();var Pl=class{_box;_destroyed=new I;_resizeSubject=new I;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new Te(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),i.unsubscribe(),this._elementObservables.delete(t)}}).pipe(ve(e=>e.some(i=>i.target===t)),Na({bufferSize:1,refCount:!0}),Le(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Tm=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(B);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Pl(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Hv=["notch"],$v=["matFormFieldNotchedOutline",""],Gv=["*"],km=["iconPrefixContainer"],Pm=["textPrefixContainer"],Nm=["iconSuffixContainer"],Lm=["textSuffixContainer"],Wv=["textField"],qv=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Yv=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Kv(n,t){n&1&&K(0,"span",21)}function Xv(n,t){if(n&1&&(m(0,"label",20),ne(1,1),W(2,Kv,1,0,"span",21),p()),n&2){let e=T(2);U("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),se("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),q(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Zv(n,t){if(n&1&&W(0,Xv,3,5,"label",20),n&2){let e=T();q(e._hasFloatingLabel()?0:-1)}}function Qv(n,t){n&1&&K(0,"div",7)}function Jv(n,t){}function eb(n,t){if(n&1&&Dr(0,Jv,0,0,"ng-template",13),n&2){T(2);let e=bi(1);U("ngTemplateOutlet",e)}}function tb(n,t){if(n&1&&(m(0,"div",9),W(1,eb,1,1,null,13),p()),n&2){let e=T();U("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),q(e._forceDisplayInfixLabel()?-1:1)}}function nb(n,t){n&1&&(m(0,"div",10,2),ne(2,2),p())}function ib(n,t){n&1&&(m(0,"div",11,3),ne(2,3),p())}function rb(n,t){}function ob(n,t){if(n&1&&Dr(0,rb,0,0,"ng-template",13),n&2){T();let e=bi(1);U("ngTemplateOutlet",e)}}function ab(n,t){n&1&&(m(0,"div",14,4),ne(2,4),p())}function sb(n,t){n&1&&(m(0,"div",15,5),ne(2,5),p())}function lb(n,t){n&1&&K(0,"div",16)}function cb(n,t){n&1&&(m(0,"div",18),ne(1,6),p())}function db(n,t){if(n&1&&(m(0,"mat-hint",22),f(1),p()),n&2){let e=T(2);U("id",e._hintLabelId),h(),k(e.hintLabel)}}function ub(n,t){if(n&1&&(m(0,"div",19),W(1,db,2,2,"mat-hint",22),ne(2,7),K(3,"div",23),ne(4,8),p()),n&2){let e=T();h(),q(e.hintLabel?1:-1)}}var xn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["mat-label"]]})}return n})(),$m=new _("MatError"),ur=(()=>{class n{id=l(Ue).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&We("id",r.id)},inputs:{id:"id"},features:[Ie([{provide:$m,useExisting:n}])]})}return n})(),Nl=(()=>{class n{align="start";id=l(Ue).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(We("id",r.id),se("align",null),Y("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),mb=new _("MatPrefix");var Gm=new _("MatSuffix"),Ll=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Ie([{provide:Gm,useExisting:n}])]})}return n})(),Wm=new _("FloatingLabelParent"),Bm=(()=>{class n{_elementRef=l(G);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Tm);_ngZone=l(B);_parent=l(Wm);_resizeSubscription=new Fe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return hb(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&Y("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function hb(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Vm="mdc-line-ripple--active",la="mdc-line-ripple--deactivating",jm=(()=>{class n{_elementRef=l(G);_cleanupTransitionEnd;constructor(){let e=l(B),i=l(Ce);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(la),e.add(Vm)}deactivate(){this._elementRef.nativeElement.classList.add(la)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(la);e.propertyName==="opacity"&&r&&i.remove(Vm,la)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Um=(()=>{class n{_elementRef=l(G);_ngZone=l(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&_t(Hv,5),i&2){let o;re(o=oe())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&Y("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:$v,ngContentSelectors:Gv,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Re(),de(0,"div",1),w(1,"div",2,0),ne(3),S(),de(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Bl=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n})}return n})();var mr=new _("MatFormField"),fb=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),zm="fill",pb="auto",Hm="fixed",gb="translateY(-50%)",mi=(()=>{class n{_elementRef=l(G);_changeDetectorRef=l(Ve);_platform=l(ue);_idGenerator=l(Ue);_ngZone=l(B);_defaults=l(fb,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=yi("iconPrefixContainer");_textPrefixContainerSignal=yi("textPrefixContainer");_iconSuffixContainerSignal=yi("iconSuffixContainer");_textSuffixContainerSignal=yi("textSuffixContainer");_prefixSuffixContainers=ae(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=yc(xn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Pt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||pb}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||zm;this._appearanceSignal.set(i)}_appearanceSignal=E(zm);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Hm}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Hm}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new I;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Je();constructor(){let e=this._defaults,i=l(yn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),nt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ae(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Mt([void 0,void 0]),A(()=>[i.errorState,i.userAriaDescribedBy]),Pa(),ve(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Mn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ec({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ae(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",b=`${a+s}px`,X=`calc(${u} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,H=`var(--mat-mdc-form-field-label-transform, ${gb} translateX(${X}))`,M=a+s+c+d;return[H,M]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(pc(o,r._labelChild,xn,5),Nn(o,Bl,5)(o,mb,5)(o,Gm,5)(o,$m,5)(o,Nl,5)),i&2){Ha();let a;re(a=oe())&&(r._formFieldControl=a.first),re(a=oe())&&(r._prefixChildren=a),re(a=oe())&&(r._suffixChildren=a),re(a=oe())&&(r._errorChildren=a),re(a=oe())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(gc(r._iconPrefixContainerSignal,km,5)(r._textPrefixContainerSignal,Pm,5)(r._iconSuffixContainerSignal,Nm,5)(r._textSuffixContainerSignal,Lm,5),_t(Wv,5)(km,5)(Pm,5)(Nm,5)(Lm,5)(Bm,5)(Um,5)(jm,5)),i&2){Ha(4);let o;re(o=oe())&&(r._textField=o.first),re(o=oe())&&(r._iconPrefixContainer=o.first),re(o=oe())&&(r._textPrefixContainer=o.first),re(o=oe())&&(r._iconSuffixContainer=o.first),re(o=oe())&&(r._textSuffixContainer=o.first),re(o=oe())&&(r._floatingLabel=o.first),re(o=oe())&&(r._notchedOutline=o.first),re(o=oe())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&Y("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ie([{provide:mr,useExisting:n},{provide:Wm,useExisting:n}])],ngContentSelectors:Yv,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Re(qv),Dr(0,Zv,1,1,"ng-template",null,0,bc),m(2,"div",6,1),z("click",function(a){return r._control.onContainerClick(a)}),W(4,Qv,1,0,"div",7),m(5,"div",8),W(6,tb,2,2,"div",9),W(7,nb,3,0,"div",10),W(8,ib,3,0,"div",11),m(9,"div",12),W(10,ob,1,1,null,13),ne(11),p(),W(12,ab,3,0,"div",14),W(13,sb,3,0,"div",15),p(),W(14,lb,1,0,"div",16),p(),m(15,"div",17),W(16,cb,2,0,"div",18)(17,ub,5,1,"div",19),p()),i&2){let o;h(2),Y("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),q(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),q(r._hasOutline()?6:-1),h(),q(r._hasIconPrefix?7:-1),h(),q(r._hasTextPrefix?8:-1),h(2),q(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),q(r._hasTextSuffix?12:-1),h(),q(r._hasIconSuffix?13:-1),h(),q(r._hasOutline()?-1:14),h(),Y("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();h(),q((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Bm,Um,qa,jm,Nl],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var qm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[me]})}return n})();var Vl=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[xo,qm,ci,me]})}return n})();var vb=["panel"],bb=["*"];function _b(n,t){if(n&1&&(w(0,"div",1,0),ne(2),S()),n&2){let e=t.id,i=T();Ln(i._classList),Y("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),We("id",i.id),se("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var jl=class{source;option;constructor(t,e){this.source=t,this.option=e}},Km=new _("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Xm=(()=>{class n{_changeDetectorRef=l(Ve);_elementRef=l(G);_defaults=l(Km);_animationsDisabled=Je();_activeOptionChanges=Fe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new ce;opened=new ce;closed=new ce;optionActivated=new ce;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=l(Ue).getId("mat-autocomplete-");inertGroups;constructor(){let e=l(ue);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Xi(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new jl(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Nn(o,ci,5)(o,xl,5),i&2){let a;re(a=oe())&&(r.options=a),re(a=oe())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&_t(Pn,7)(vb,5),i&2){let o;re(o=oe())&&(r.template=o.first),re(o=oe())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",le],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",le],requireSelection:[2,"requireSelection","requireSelection",le],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",le],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",le]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Ie([{provide:El,useExisting:n}])],ngContentSelectors:bb,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Re(),hc(0,_b,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})();var yb={provide:$o,useExisting:zt(()=>Ul),multi:!0};var Cb=new _("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(ie);return()=>oa(n)}}),Ul=(()=>{class n{_environmentInjector=l(we);_element=l(G);_injector=l(ie);_viewContainerRef=l(It);_zone=l(B);_changeDetectorRef=l(Ve);_dir=l(yn,{optional:!0});_formField=l(mr,{optional:!0,host:!0});_viewportRuler=l(wn);_scrollStrategy=l(Cb);_renderer=l(Ce);_animationsDisabled=Je();_defaults=l(Km,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new I;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Fe.EMPTY;_breakpointObserver=l(Zs);_handsetLandscapeSubscription=Fe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new I;_overlayPanelClass=kt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Do(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Mn(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ve(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ve(()=>this._overlayAttached)):y()).pipe(A(e=>e instanceof lr?e:null))}optionSelections=An(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Mt(e),Q(()=>Mn(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Q(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Te(e=>{let i=o=>{let a=Ne(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!c||!c.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=Zt(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return qs()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Te(r=>{Rt(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(De(()=>this._positionStrategy.reapplyLastPosition()),ql(0))??y();return Mn(e,i).pipe(Q(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),fe(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;el(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new di(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=sa(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(bu.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Zt(e)||e.keyCode===38&&Zt(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new ui({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=aa(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=um(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=mm(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&Do(this._trackedModal,"aria-owns",i),el(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Do(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&z("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&se("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",le]},exportAs:["matAutocompleteTrigger"],features:[Ie([yb]),ke]})}return n})(),Zm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[kl,Vl,Xo,Vl,me]})}return n})();var Sn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[uu,mi,me]})}return n})();var wb=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return n})(),Eb={passive:!0},Jm=(()=>{class n{_platform=l(ue);_ngZone=l(B);_renderer=l(Me).createRenderer(null,null);_styleLoader=l(ct);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return $e;this._styleLoader.load(wb);let i=Qe(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new I,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,Eb)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Qe(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var eh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({})}return n})();var th=new _("MAT_INPUT_VALUE_ACCESSOR");var nh=(()=>{class n{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ca=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,i,r,o){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==t&&(this.errorState=o,this._stateChanges.next())}};var xb=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Sb=new _("MAT_INPUT_CONFIG"),da=(()=>{class n{_elementRef=l(G);_platform=l(ue);ngControl=l(Cn,{optional:!0,self:!0});_autofillMonitor=l(Jm);_ngZone=l(B);_formField=l(mr,{optional:!0});_renderer=l(Ce);_uid=l(Ue).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Sb,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new I;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Pt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(qe.required)??!1}set required(e){this._required=Pt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&nl().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Pt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>nl().has(e));constructor(){let e=l(Dl,{optional:!0}),i=l(Dn,{optional:!0}),r=l(nh),o=l(th,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?$t(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ca(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&nt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){xb.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&z("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(We("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),se("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),Y("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},exportAs:["matInput"],features:[Ie([{provide:Bl,useExisting:n}]),ke]})}return n})(),ua=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[Sn,Sn,eh,me]})}return n})();var Ab=(n,t)=>t.id;function Mb(n,t){if(n&1&&(m(0,"span",18),f(1),p()),n&2){let e=t.$implicit;h(),k(e)}}function Rb(n,t){if(n&1&&be(0,Mb,2,1,"span",18,Er),n&2){let e=T(2);_e(e.getControlErrors("title"))}}function Ib(n,t){if(n&1&&(m(0,"mat-option",9),f(1),p()),n&2){let e=t.$implicit;U("value",e.name),h(),k(e.name)}}function Ob(n,t){if(n&1&&(m(0,"mat-error"),f(1),p()),n&2){let e=t.$implicit;h(),k(e)}}function Fb(n,t){if(n&1&&be(0,Ob,2,1,"mat-error",null,Er),n&2){let e=T(2);_e(e.getControlErrors("categoryName"))}}function Tb(n,t){if(n&1&&(m(0,"span",12),f(1),p()),n&2){let e=T(2);h(),k(e.selectedImageName())}}function kb(n,t){if(n&1&&(m(0,"span",18),f(1),p()),n&2){let e=t.$implicit;h(),k(e)}}function Pb(n,t){if(n&1&&be(0,kb,2,1,"span",18,Er),n&2){let e=T(2);_e(e.getControlErrors("text"))}}function Nb(n,t){if(n&1){let e=bt();m(0,"section",1)(1,"form",2),z("ngSubmit",function(){Se(e);let r=T();return Ae(r.submit())}),m(2,"h2"),f(3),p(),m(4,"div",3)(5,"label",4),f(6,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),p(),K(7,"input",5),W(8,Rb,2,0),p(),m(9,"div",3)(10,"mat-form-field",6)(11,"mat-label"),f(12,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"),p(),K(13,"input",7),m(14,"mat-icon",8),f(15,"category"),p(),m(16,"mat-autocomplete",null,0),be(18,Ib,2,2,"mat-option",9,Ab),p(),W(20,Fb,2,0),p()(),m(21,"div",3)(22,"label",10),f(23,"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"),p(),m(24,"input",11),z("change",function(r){Se(e);let o=T();return Ae(o.handleImageChange(r))}),p(),W(25,Tb,2,1,"span",12),p(),m(26,"div",3)(27,"label",13),f(28,"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438"),p(),K(29,"textarea",14),W(30,Pb,2,0),p(),m(31,"div",15)(32,"button",16),f(33),p(),m(34,"button",17),z("click",function(){Se(e);let r=T();return Ae(r.cancel.emit())}),f(35," \u041E\u0442\u043C\u0435\u043D\u0430 "),p()()()()}if(n&2){let e=bi(17),i=T();h(),U("formGroup",i.form),h(2),k(i.formTitle());let r=i.hasError("title");h(4),Y("form-control--invalid",r),h(),q(r?8:-1);let o=i.hasError("categoryName");h(5),U("matAutocomplete",e),h(5),_e(i.filteredCategories()),h(2),q(o?20:-1),h(5),q(i.selectedImageName()?25:-1);let a=i.hasError("text");h(4),Y("form-control--invalid",a),h(),q(a?30:-1),h(2),U("disabled",i.isSubmitting()||i.form.invalid),h(),Gt(" ",i.submitButtonLabel()," "),h(),U("disabled",i.isSubmitting())}}var ma=class n{isSubmitting=pe(!1);visible=pe(!1);mode=pe("create");initialDraft=pe(null);categories=pe([]);submitArticle=an();cancel=an();formTitle=ae(()=>this.mode()==="edit"?"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E");submitButtonLabel=ae(()=>this.isSubmitting()?this.mode()==="edit"?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435...":this.mode()==="edit"?"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");form=new nn({title:new Lt("",{nonNullable:!0,validators:[qe.required,qe.minLength(25)]}),text:new Lt("",{nonNullable:!0,validators:[qe.required]}),categoryName:new Lt("",{nonNullable:!0,validators:[qe.required]}),imageFile:new Lt(null)});selectedImageName=E("");constructor(){nt(()=>{if(this.isSubmitting()){this.form.disable({emitEvent:!1});return}this.form.enable({emitEvent:!1})}),nt(()=>{!this.visible()&&!this.isSubmitting()&&this.resetForm()}),nt(()=>{if(!this.visible())return;let t=this.initialDraft();this.form.reset({title:t?.title??"",text:t?.text??"",categoryName:t?.categoryName??"",imageFile:null}),this.selectedImageName.set("")})}filteredCategories(){let t=this.form.controls.categoryName.value.trim().toLowerCase();return t?this.categories().filter(e=>e.name.toLowerCase().includes(t)):this.categories()}handleImageChange(t){let i=t.target.files?.[0]??null;this.form.controls.imageFile.setValue(i),this.selectedImageName.set(i?.name??"")}hasError(t){let e=this.form.get(t);return!!(e?.invalid&&e.touched)}getControlErrors(t){let i=this.form.get(t)?.errors??null;return i?Object.entries(i).map(([r,o])=>this.getErrorStr(t,r,o)):[]}submit(){if(this.form.invalid){this.form.markAllAsTouched();return}this.submitArticle.emit({title:this.form.controls.title.value.trim(),text:this.form.controls.text.value.trim(),categoryName:this.form.controls.categoryName.value.trim(),imageFile:this.form.controls.imageFile.value})}resetForm(){this.form.reset({title:"",text:"",categoryName:"",imageFile:null}),this.selectedImageName.set("")}getErrorStr(t,e,i){switch(e){case"required":return t==="title"?"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D":t==="categoryName"?"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430":"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D";case"minlength":{let{requiredLength:r,actualLength:o}=i;return`\u041D\u0443\u0436\u043D\u043E \u0435\u0449\u0435 ${r-o} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432`}default:return"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u043F\u043E\u043B\u044F"}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-article-form"]],inputs:{isSubmitting:[1,"isSubmitting"],visible:[1,"visible"],mode:[1,"mode"],initialDraft:[1,"initialDraft"],categories:[1,"categories"]},outputs:{submitArticle:"submitArticle",cancel:"cancel"},decls:1,vars:1,consts:[["categoriesAutocomplete","matAutocomplete"],[1,"article-form-wrap","visible"],["novalidate","",1,"article-form",3,"ngSubmit","formGroup"],[1,"form-field"],["for","article-title"],["id","article-title","type","text","formControlName","title","placeholder","\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438",1,"form-control"],["appearance","outline"],["matInput","","type","text","formControlName","categoryName","placeholder","\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",3,"matAutocomplete"],["matSuffix","","fontSet","material-symbols-outlined"],[3,"value"],["for","article-image"],["id","article-image","type","file","accept","image/jpeg,image/jpg,image/png,image/gif,image/svg+xml",1,"form-control",3,"change"],[1,"form-hint"],["for","article-text"],["id","article-text","formControlName","text","placeholder","\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438",1,"form-control"],[1,"form-buttons"],["type","submit",1,"btn-save",3,"disabled"],["type","button",1,"btn-cancel",3,"click","disabled"],[1,"form-error"]],template:function(e,i){e&1&&W(0,Nb,36,14,"section",1),e&2&&q(i.visible()?0:-1)},dependencies:[Ko,Yo,li,Go,Wo,Dn,sr,Zm,Xm,ci,Ul,Sn,mi,xn,ur,Ll,Jt,Qt,ua,da],encapsulation:2})};var rh=n=>["/blog",n],Lb=(n,t)=>t.id;function Bb(n,t){n&1&&(m(0,"div",3)(1,"p"),f(2,"\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u0435\u0439"),p()())}function Vb(n,t){if(n&1&&(m(0,"p"),f(1),p()),n&2){let e=T();h(),k(e.text)}}function jb(n,t){if(n&1){let e=bt();m(0,"article",4)(1,"div",7)(2,"button",8),z("click",function(r){let o=Se(e),a=T();return Ae(a.handleEditClick(r,o))}),m(3,"mat-icon",9),f(4,"edit"),p()(),m(5,"button",10),z("click",function(r){let o=Se(e),a=T();return Ae(a.handleDeleteClick(r,o.id))}),m(6,"mat-icon",9),f(7,"delete"),p()()(),m(8,"div",11),K(9,"img",12),p(),m(10,"div",13)(11,"h2"),f(12),p(),W(13,Vb,2,1,"p"),m(14,"time"),f(15),p()()()}if(n&2){let e=t;U("routerLink",_i(6,rh,e.id)),h(9),U("src",e.image,rt),h(3),k(e.title),h(),q(e.text?13:-1),h(),se("datetime",e.isoDate),h(),k(e.dateLabel)}}function Ub(n,t){if(n&1){let e=bt();m(0,"article",14)(1,"div",7)(2,"button",8),z("click",function(r){let o=Se(e).$implicit,a=T(2);return Ae(a.handleEditClick(r,o))}),m(3,"mat-icon",9),f(4,"edit"),p()(),m(5,"button",10),z("click",function(r){let o=Se(e).$implicit,a=T(2);return Ae(a.handleDeleteClick(r,o.id))}),m(6,"mat-icon",9),f(7,"delete"),p()()(),m(8,"div",15),K(9,"img",12),p(),m(10,"div",16)(11,"h3"),f(12),p(),m(13,"time"),f(14),p()()()}if(n&2){let e=t.$implicit;U("routerLink",_i(5,rh,e.id)),h(9),U("src",e.image,rt),h(3),k(e.title),h(),se("datetime",e.isoDate),h(),k(e.dateLabel)}}function zb(n,t){if(n&1&&(m(0,"div",5),be(1,Ub,15,7,"article",14,Lb),p()),n&2){let e=T();h(),_e(e.regularArticles())}}function Hb(n,t){if(n&1){let e=bt();m(0,"button",19),z("click",function(){let r=Se(e).$implicit,o=T(2);return Ae(o.selectPage(r))}),f(1),p()}if(n&2){let e=t.$implicit,i=T(2);Y("pagination-page--active",e===i.activePage()),se("aria-current",e===i.activePage()?"page":null),h(),Gt(" ",e," ")}}function $b(n,t){if(n&1){let e=bt();m(0,"nav",6)(1,"button",17),z("click",function(){Se(e);let r=T();return Ae(r.selectPage(r.activePage()-1))}),f(2," Back "),p(),be(3,Hb,2,4,"button",18,xr),m(5,"button",17),z("click",function(){Se(e);let r=T();return Ae(r.selectPage(r.activePage()+1))}),f(6," Next \u2192 "),p()()}if(n&2){let e=T();h(),U("disabled",e.activePage()===1),h(2),_e(e.pages()),h(2),U("disabled",e.activePage()===e.totalPages())}}var ha=class n{articles=pe.required();activePage=pe.required();pageSize=pe.required();totalCount=pe.required();deleteArticle=an();editArticle=an();pageChange=an();featuredArticle=ae(()=>this.articles()[0]??null);regularArticles=ae(()=>this.articles().slice(1));totalPages=ae(()=>Math.ceil(this.totalCount()/this.pageSize()));pages=ae(()=>Array.from({length:this.totalPages()},(t,e)=>e+1));selectPage(t){t<1||t>this.totalPages()||t===this.activePage()||this.pageChange.emit(t)}handleEditClick(t,e){t.preventDefault(),t.stopPropagation(),this.editArticle.emit(e)}handleDeleteClick(t,e){t.preventDefault(),t.stopPropagation(),this.deleteArticle.emit(e)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-blog-articles"]],inputs:{articles:[1,"articles"],activePage:[1,"activePage"],pageSize:[1,"pageSize"],totalCount:[1,"totalCount"]},outputs:{deleteArticle:"deleteArticle",editArticle:"editArticle",pageChange:"pageChange"},decls:7,vars:4,consts:[["id","blog-articles"],[1,"loader-container",2,"display","none"],[1,"loader"],[1,"no-articles-state"],["tabindex","0",1,"blog-featured",3,"routerLink"],[1,"blog-grid"],["aria-label","\u041F\u0430\u0433\u0438\u043D\u0430\u0446\u0438\u044F \u0441\u0442\u0430\u0442\u0435\u0439",1,"pagination"],[1,"article-actions"],["mat-icon-button","","type","button","aria-label","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","title","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"article-card-action","edit-btn",3,"click"],["fontSet","material-symbols-outlined"],["mat-icon-button","","type","button","aria-label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","title","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"article-card-action","delete-btn",3,"click"],[1,"blog-featured-image"],["alt","\u0421\u0442\u0430\u0442\u044C\u044F",3,"src"],[1,"blog-featured-text"],["tabindex","0",1,"blog-card",3,"routerLink"],[1,"blog-card-image"],[1,"blog-card-content"],["mat-stroked-button","","type","button",1,"pagination-btn",3,"click","disabled"],["mat-stroked-button","","type","button",1,"pagination-btn","pagination-page",3,"pagination-page--active"],["mat-stroked-button","","type","button",1,"pagination-btn","pagination-page",3,"click"]],template:function(e,i){if(e&1&&(m(0,"section",0)(1,"div",1),K(2,"span",2),p(),W(3,Bb,3,0,"div",3),W(4,jb,16,8,"article",4),W(5,zb,3,0,"div",5),W(6,$b,7,2,"nav",6),p()),e&2){let r;h(3),q(i.articles().length?-1:3),h(),q((r=i.featuredArticle())?4:-1,r),h(),q(i.regularArticles().length?5:-1),h(),q(i.totalPages()>1?6:-1)}},dependencies:[lt,ii,So,_n,Jt,Qt],styles:[".pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;margin:24px 0 80px}.pagination-btn[_ngcontent-%COMP%]{min-width:40px;height:40px;padding:0 14px;border:1.5px solid var(--color-accent-green);border-radius:6px;background:#fff;color:var(--color-accent-green);font-family:Inter,sans-serif;font-size:14px;font-weight:500;cursor:pointer;transition:background .2s ease,color .2s ease,opacity .2s ease}.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled), .pagination-page--active[_ngcontent-%COMP%]{background:var(--color-accent-green);color:#fff}.pagination-btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.45}@media(max-width:800px){.pagination[_ngcontent-%COMP%]{flex-wrap:wrap}}"]})};var Gb=["statsDialog"],Wb=["articleFormElement"],fa=class n{statsDialog;articleFormElement;blogArticlesPageSize=7;articlesService=l(To);articlesStore=l(ri);categoriesService=l(oi);articles=this.articlesStore.articles;categories=E([]);activePage=this.articlesStore.activePage;pageSize=this.articlesStore.pageSize;totalCount=this.articlesStore.totalCount;userCreatedCount=this.articlesStore.userCreatedCount;showForm=E(!1);isSubmitting=E(!1);editingArticle=E(null);formMode=ae(()=>this.editingArticle()===null?"create":"edit");formDraft=ae(()=>{let t=this.editingArticle();return t===null?null:{title:t.title,text:t.text,categoryName:t.tag,imageFile:null}});ngOnInit(){this.loadCategories();let t=this.articlesStore.pageSize()===this.blogArticlesPageSize?this.articlesStore.activePage():1;this.articlesStore.hasSnapshot(t,this.blogArticlesPageSize)||this.loadArticles(t)}toggleCreateForm(){if(!this.isSubmitting()){if(this.showForm()&&this.formMode()==="create"){this.closeForm();return}this.editingArticle.set(null),this.showForm.set(!0)}}closeForm(){this.isSubmitting()||(this.editingArticle.set(null),this.showForm.set(!1))}toggleStats(){let t=this.statsDialog?.nativeElement;if(t){if(t.open){t.close();return}t.showModal()}}closeStats(){this.statsDialog?.nativeElement.close()}handleDialogClick(t){t.target===this.statsDialog?.nativeElement&&this.closeStats()}startEditing(t){this.isSubmitting()||(this.editingArticle.set(t),this.showForm.set(!0),this.scrollToArticleForm())}submitArticle(t){this.isSubmitting.set(!0);let e=this.editingArticle()?.id??null,i={page:e===null?1:this.activePage(),pageSize:this.blogArticlesPageSize};this.categoriesService.ensureCategory(t.categoryName).pipe(Q(o=>{let a=$(g({},t),{categoryName:o.name,categoryId:o.id});return e===null?this.articlesService.addArticle(a,i):this.articlesService.updateArticle(e,a,i)})).pipe(fe(1)).subscribe({next:o=>{this.articlesStore.savePage(o),this.loadCategories(),this.isSubmitting.set(!1),this.editingArticle.set(null),this.showForm.set(!1)},error:o=>{console.error("Failed to save article",o),this.isSubmitting.set(!1)}})}deleteArticle(t){this.editingArticle()?.id===t&&this.closeForm(),this.articlesService.deleteArticle(t,{page:this.activePage(),pageSize:this.blogArticlesPageSize}).pipe(fe(1)).subscribe(e=>this.articlesStore.savePage(e))}changePage(t){this.loadArticles(t)}loadArticles(t){this.articlesService.getArticles({page:t,pageSize:this.blogArticlesPageSize}).pipe(fe(1)).subscribe(e=>this.articlesStore.savePage(e))}loadCategories(){this.categoriesService.getCategories().pipe(fe(1)).subscribe(t=>this.categories.set(t))}scrollToArticleForm(){globalThis.setTimeout(()=>{let t=this.articleFormElement?.nativeElement.querySelector("#article-title, #article-text");t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),t.focus({preventScroll:!0}))},150)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-blog"]],viewQuery:function(e,i){if(e&1&&_t(Gb,5)(Wb,5,G),e&2){let r;re(r=oe())&&(i.statsDialog=r.first),re(r=oe())&&(i.articleFormElement=r.first)}},decls:36,vars:11,consts:[["statsDialog",""],["articleFormElement",""],[1,"admin-panel"],["mat-icon-button","","type","button","title","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"admin-btn",3,"click"],["fontSet","material-symbols-outlined"],["mat-icon-button","","type","button","title","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",1,"admin-btn",3,"click"],["id","stats-dialog",3,"click"],["type","button",1,"dialog-close",3,"click"],[1,"stats-grid"],[1,"stats-card"],["id","blog-hero"],[1,"blog-hero-inner"],[1,"blog-hero-text"],[1,"blog-hero-circle"],["src","images/blogs-circle.png","alt","My blogs"],[3,"deleteArticle","editArticle","pageChange","articles","activePage","pageSize","totalCount"],[3,"submitArticle","cancel","visible","isSubmitting","mode","initialDraft","categories"]],template:function(e,i){e&1&&(m(0,"aside",2)(1,"button",3),z("click",function(){return i.toggleCreateForm()}),m(2,"mat-icon",4),f(3,"add"),p()(),m(4,"button",5),z("click",function(){return i.toggleStats()}),m(5,"mat-icon",4),f(6,"bar_chart"),p()()(),m(7,"dialog",6,0),z("click",function(o){return i.handleDialogClick(o)}),m(9,"button",7),z("click",function(){return i.closeStats()}),f(10,"\xD7"),p(),m(11,"h2"),f(12,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"),p(),m(13,"div",8)(14,"div",9)(15,"p"),f(16,"\u0412\u0441\u0435\u0433\u043E \u0441\u0442\u0430\u0442\u0435\u0439:"),p(),m(17,"span"),f(18),p()(),m(19,"div",9)(20,"p"),f(21,"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E:"),p(),m(22,"span"),f(23),p()()()(),m(24,"section",10)(25,"div",11)(26,"div",12)(27,"h1"),f(28,"My blogs"),p(),m(29,"p"),f(30,"\u0417\u0434\u0435\u0441\u044C \u044F \u0434\u0435\u043B\u044E\u0441\u044C \u0441\u0432\u043E\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435, \u0443\u0447\u0451\u0431\u0435 \u0432 \u0421\u0438\u0431\u0413\u0423\u0422\u0418 \u0438 \u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438."),p()(),m(31,"div",13),K(32,"img",14),p()()(),m(33,"app-blog-articles",15),z("deleteArticle",function(o){return i.deleteArticle(o)})("editArticle",function(o){return i.startEditing(o)})("pageChange",function(o){return i.changePage(o)}),p(),m(34,"app-article-form",16,1),z("submitArticle",function(o){return i.submitArticle(o)})("cancel",function(){return i.closeForm()}),p()),e&2&&(h(18),k(i.totalCount()),h(5),k(i.userCreatedCount()),h(10),U("articles",i.articles())("activePage",i.activePage())("pageSize",i.pageSize())("totalCount",i.totalCount()),h(),U("visible",i.showForm())("isSubmitting",i.isSubmitting())("mode",i.formMode())("initialDraft",i.formDraft())("categories",i.categories()))},dependencies:[ma,ha,ii,_n,Jt,Qt],encapsulation:2})};var qb=(n,t)=>t.title;function Yb(n,t){if(n&1&&(w(0,"article",4)(1,"span"),f(2),S(),w(3,"h3"),f(4),S(),w(5,"p"),f(6),S()()),n&2){let e=t.$implicit;h(2),k(e.period),h(2),k(e.title),h(2),k(e.description)}}var pa=class n{educationItems=pe.required();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home-education"]],inputs:{educationItems:[1,"educationItems"]},decls:10,vars:0,consts:[["id","education"],[1,"education-inner"],[1,"education-heading"],[1,"education-list"],[1,"education-item"]],template:function(e,i){e&1&&(w(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),f(4,"Education"),S(),w(5,"p"),f(6,"\u0423\u0447\u0451\u0431\u0430 \u0438 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u043C\u043E\u044E \u0431\u0430\u0437\u0443 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."),S()(),w(7,"div",3),be(8,Yb,7,3,"article",4,qb),S()()()),e&2&&(h(8),_e(i.educationItems()))},styles:["[_nghost-%COMP%]{display:block}#education[_ngcontent-%COMP%]{padding:0 132px;margin-top:120px}.education-inner[_ngcontent-%COMP%]{width:1176px;margin:0 auto}.education-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:60px;margin-bottom:24px}.education-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{flex:0 0 auto;font-size:40px;font-weight:700;color:var(--color-dark)}.education-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex:1;max-width:520px;padding-top:8px;font-size:15px;line-height:1.6;color:var(--color-gray)}.education-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}.education-item[_ngcontent-%COMP%]{border-top:2px solid #bdc1ca;padding-top:20px}.education-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-bottom:8px;font-size:12px;color:var(--color-gray)}.education-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:8px;font-size:18px;font-weight:700;color:var(--color-dark)}.education-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:1.6;color:var(--color-gray)}@media(max-width:800px){#education[_ngcontent-%COMP%]{padding:0 20px}.education-inner[_ngcontent-%COMP%]{width:100%}.education-heading[_ngcontent-%COMP%]{flex-direction:column;gap:12px}.education-list[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var ga=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home-hero"]],decls:17,vars:0,consts:[["id","about"],[1,"hero-inner"],[1,"hero-text"],["href","#contact",1,"hero-link"],[1,"hero-image"],[1,"hero-image-wrap"],["src","images/avatar.png","alt","\u0424\u043E\u0442\u043E"],["src","images/blogs-circle.png","alt","My blogs",1,"blogs-circle-img"]],template:function(e,i){e&1&&(w(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1"),f(4,"\u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u0413\u0440\u0438\u0433\u043E\u0440\u0438\u0439,"),de(5,"br"),f(6,"Junior Developer"),S(),w(7,"p"),f(8," \u0421\u0442\u0443\u0434\u0435\u043D\u0442 3 \u043A\u0443\u0440\u0441\u0430 \u0421\u0438\u0431\u0413\u0423\u0422\u0418, \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438\u0437 \u0411\u0435\u0440\u0434\u0441\u043A\u0430. \u041F\u0440\u043E\u0448\u0451\u043B \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 iOS-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u044E \u0432\u0435\u0431-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 backend. "),S(),w(9,"a",3),f(10,"More about me "),w(11,"span"),f(12,"\u203A"),S()()(),w(13,"div",4)(14,"div",5),de(15,"img",6)(16,"img",7),S()()()())},styles:["[_nghost-%COMP%]{display:block}"]})};var oh=(n,t)=>t.label;function Kb(n,t){if(n&1&&(w(0,"div",3),de(1,"img",5),w(2,"div",6)(3,"p"),f(4),S()()()),n&2){let e=t.$implicit;h(),We("src",e.image,rt)("alt",e.label),h(3),k(e.label)}}function Xb(n,t){if(n&1&&(w(0,"div",3),de(1,"img",5),w(2,"div",6)(3,"p"),f(4),S()()()),n&2){let e=t.$implicit;h(),We("src",e.image,rt)("alt",e.label),h(3),k(e.label)}}var va=class n{projects=pe.required();stack=pe.required();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home-hobby"]],inputs:{projects:[1,"projects"],stack:[1,"stack"]},decls:12,vars:0,consts:[["id","hobby"],[1,"hobby-header"],[1,"hobby-grid"],[1,"hobby-card"],[1,"hobby-stack"],[3,"src","alt"],[1,"hobby-overlay"]],template:function(e,i){e&1&&(w(0,"section",0)(1,"div",1)(2,"h2"),f(3,"Hobby projects"),S(),w(4,"p"),f(5," Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure labore est ea. "),S()(),w(6,"div",2),be(7,Kb,5,3,"div",3,oh),w(9,"div",4),be(10,Xb,5,3,"div",3,oh),S()()()),e&2&&(h(7),_e(i.projects()),h(3),_e(i.stack()))},styles:["[_nghost-%COMP%]{display:block}"]})};var Zb=n=>["/blog",n],Qb=(n,t)=>t.title;function Jb(n,t){if(n&1&&(m(0,"article",2)(1,"div",5)(2,"span",6),f(3),p(),m(4,"h3"),f(5),p(),m(6,"p"),f(7),p()(),m(8,"div",7),K(9,"img",8),p()()),n&2){let e=t.$implicit;U("routerLink",_i(5,Zb,e.id)),h(3),k(e.tag),h(2),k(e.title),h(2),k(e.text),h(2),U("src",e.image,rt)}}var ba=class n{articles=pe.required();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home-articles"]],inputs:{articles:[1,"articles"]},decls:7,vars:0,consts:[["id","articles"],[1,"articles-list"],["tabindex","0",1,"article-card",3,"routerLink"],[1,"browse-btn-wrap"],["routerLink","/blog",1,"btn-outline"],[1,"article-card-text"],[1,"article-tag"],[1,"article-card-image"],["alt","\u0421\u0442\u0430\u0442\u044C\u044F",3,"src"]],template:function(e,i){e&1&&(m(0,"section",0)(1,"div",1),be(2,Jb,10,7,"article",2,Qb),p(),m(4,"div",3)(5,"a",4),f(6,"Browse all posts"),p()()()),e&2&&(h(2),_e(i.articles()))},dependencies:[lt],styles:[".articles-list[_ngcontent-%COMP%] > .article-card[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff5f0}.articles-list[_ngcontent-%COMP%] > .article-card[_ngcontent-%COMP%]:nth-child(odd)   .article-tag[_ngcontent-%COMP%]{color:#e8572a}.articles-list[_ngcontent-%COMP%] > .article-card[_ngcontent-%COMP%]:nth-child(2n){background-color:#f0fff5}.articles-list[_ngcontent-%COMP%] > .article-card[_ngcontent-%COMP%]:nth-child(2n)   .article-tag[_ngcontent-%COMP%]{color:var(--color-accent-green)}"]})};function e_(n,t){if(n&1&&(w(0,"li"),f(1),S()),n&2){let e=t.$implicit;h(),k(e)}}var _a=class n{skills=pe.required();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home-skills"]],inputs:{skills:[1,"skills"]},decls:6,vars:0,consts:[["id","skills"],[1,"skills-grid"]],template:function(e,i){e&1&&(w(0,"section",0)(1,"h2"),f(2,"My skills"),S(),w(3,"ul",1),be(4,e_,2,1,"li",null,xr),S()()),e&2&&(h(4),_e(i.skills()))},styles:["[_nghost-%COMP%]{display:block}"]})};var t_=(n,t)=>t.title;function n_(n,t){if(n&1&&(w(0,"div",4),de(1,"img",5),w(2,"div",6)(3,"span",7),f(4),S(),w(5,"h4"),f(6),S(),w(7,"p"),f(8),S()()()),n&2){let e=t.$implicit;h(),We("src",e.icon,rt),h(3),k(e.period),h(2),k(e.title),h(2),k(e.description)}}var ya=class n{workItems=pe.required();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home-work"]],inputs:{workItems:[1,"workItems"]},decls:10,vars:0,consts:[["id","work"],[1,"work-inner"],[1,"work-left"],[1,"work-right"],[1,"work-item"],["alt","icon",1,"work-icon",3,"src"],[1,"work-info"],[1,"work-period"]],template:function(e,i){e&1&&(w(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),f(4,"My work"),S(),w(5,"p"),f(6,"\u0421\u0442\u0443\u0434\u0435\u043D\u0442 \u0421\u0438\u0431\u0413\u0423\u0422\u0418, \u043F\u0440\u043E\u0445\u043E\u0436\u0443 \u043A\u0443\u0440\u0441\u044B \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0441\u044C \u0432 IT. \u0418\u0449\u0443 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0430\u0436\u0438\u0440\u043E\u0432\u043A\u0443 \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u0443."),S()(),w(7,"div",3),be(8,n_,9,4,"div",4,t_),S()()()),e&2&&(h(8),_e(i.workItems()))},styles:["[_nghost-%COMP%]{display:block}"]})};function i_(n,t){if(n&1&&K(0,"app-home-articles",0),n&2){let e=T();U("articles",e.articles())}}var Ca=class n{homeArticlesPage=1;homeArticlesPageSize=2;articlesService=l(To);articlesStore=l(ri);articles=this.articlesStore.articles;skills=["Swift / UIKit / SwiftUI","HTML / CSS","Angular","Git / GitHub","Java (backend)","Figma"];workItems=[{icon:"images/work-icon-2.png",period:"\u0428\u0418\u0424\u0422 \u0426\u0424\u0422 \u2014 (\u0410\u043F\u0440\u0435\u043B\u044C - \u0418\u044E\u043D\u044C 2023)",title:"iOS-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A",description:"80 \u0447\u0430\u0441\u043E\u0432 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u0430: Swift, UIKit, SwiftUI, MVC/MVVM. \u041F\u043E\u043B\u0443\u0447\u0435\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442."},{icon:"images/work-icon-3.png",period:"Eltex \u2014 (2025 - \u043D.\u0432.)",title:"\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A (\u043A\u0443\u0440\u0441)",description:"HTML, CSS, JavaScript, Angular, Git. \u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u0430\u043C Figma."}];educationItems=[{period:"2022 - \u043D.\u0432.",title:"\u0421\u0438\u0431\u0413\u0423\u0422\u0418, \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",description:"\u0418\u0437\u0443\u0447\u0430\u044E Java, \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B, \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443."},{period:"\u0410\u043F\u0440\u0435\u043B\u044C - \u0418\u044E\u043D\u044C 2023",title:"\u0418\u043D\u0442\u0435\u043D\u0441\u0438\u0432 \u0428\u0418\u0424\u0422 \u0426\u0424\u0422 \u043F\u043E iOS-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435",description:"80 \u0447\u0430\u0441\u043E\u0432 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438: Swift, UIKit, SwiftUI, MVC/MVVM. \u041F\u043E\u043B\u0443\u0447\u0435\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442."}];hobbyProjects=[{image:"images/hobby-1.png",label:"iOS \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435"},{image:"images/hobby-2.png",label:"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0441\u0430\u0439\u0442"}];hobbyStack=[{image:"images/Selection.png",label:"Aurora OS"},{image:"images/Selection.png",label:"Java \u043F\u0440\u043E\u0435\u043A\u0442"}];ngOnInit(){this.articlesStore.hasSnapshot(this.homeArticlesPage,this.homeArticlesPageSize)||this.articlesService.getArticles({page:this.homeArticlesPage,pageSize:this.homeArticlesPageSize}).pipe(fe(1)).subscribe(t=>this.articlesStore.savePage(t))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home"]],decls:6,vars:6,consts:[[3,"articles"],[3,"skills"],[3,"workItems"],[3,"educationItems"],[3,"projects","stack"]],template:function(e,i){e&1&&(K(0,"app-home-hero"),W(1,i_,1,1,"app-home-articles",0),K(2,"app-home-skills",1)(3,"app-home-work",2)(4,"app-home-education",3)(5,"app-home-hobby",4)),e&2&&(h(),q(i.articles().length?1:-1),h(),U("skills",i.skills),h(),U("workItems",i.workItems),h(),U("educationItems",i.educationItems),h(),U("projects",i.hobbyProjects)("stack",i.hobbyStack))},dependencies:[ga,ba,_a,ya,pa,va],encapsulation:2})};function ah(n){n||(n=l(tt));let t=new Te(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(Le(t))}var r_=["*"];var o_=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],a_=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],s_=new _("MAT_CARD_CONFIG"),sh=(()=>{class n{appearance;constructor(){let e=l(s_,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&Y("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:r_,decls:1,vars:0,template:function(i,r){i&1&&(Re(),ne(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return n})(),lh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var ch=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),dh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})(),uh=(()=>{class n{align="start";static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&Y("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})(),mh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:a_,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Re(o_),ne(0),w(1,"div",0),ne(2,1),S(),ne(3,2))},encapsulation:2,changeDetection:0})}return n})();var hh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=R({type:n,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return n})();var fh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[me]})}return n})();var ph=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=Pt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Pt(e)}_inset=!1;static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(se("aria-orientation",r.vertical?"vertical":"horizontal"),Y("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return n})(),gh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=V({imports:[me]})}return n})();var Da=class n{http=l(Ct);categoriesService=l(oi);articlesUrl=`${ze.apiBaseUrl}/articles`;commentsUrl=`${ze.apiBaseUrl}/comments`;getPostWithComments(t){return At({article:this.http.get(`${this.articlesUrl}/${t}`).pipe(ut(()=>y(null))),comments:this.http.get(`${this.commentsUrl}/article/${t}`).pipe(ut(()=>y([]))),categories:this.categoriesService.getCategories()}).pipe(A(({article:e,comments:i,categories:r})=>{let o=er(r);return{article:e?tr(e,o):null,comments:i.map(d_)}}))}addComment(t,e){return this.http.post(this.commentsUrl,{username:e.author,content:e.text,articleId:t}).pipe(Q(()=>this.getPostWithComments(t)))}changeCommentRating(t,e,i){return this.http.patch(`${this.commentsUrl}/${e}/rating`,{rating:i}).pipe(Q(()=>this.getPostWithComments(t)))}changeArticleRating(t,e){return this.http.get(`${this.articlesUrl}/${t}`).pipe(Q(i=>{let r=e>i.rating?"rating-up":"rating-down";return this.http.patch(`${this.articlesUrl}/${t}/${r}`,{})}),Q(()=>this.getPostWithComments(t)))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};function d_(n){let t=new Date(n.createdAt),e=!Number.isNaN(t.getTime());return{id:n.id,articleId:n.articleId,author:n.username,text:n.content,dateLabel:e?t.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}):"",isoDate:e?t.toISOString().slice(0,10):new Date().toISOString().slice(0,10),rating:n.rating??0}}var Ea=class n{articlesStorageKey="kovali-blog-articles";commentsStorageKey="kovali-blog-comments";platformId=l(it);getPostWithComments(t){return y(this.buildPostDetails(t))}addComment(t,e){let i=[this.createComment(t,e),...this.readComments().filter(o=>o.articleId===t)],r=this.readComments().filter(o=>o.articleId!==t);return this.writeComments([...i,...r]),y(this.buildPostDetails(t))}changeCommentRating(t,e,i){let r=this.readComments().map(o=>o.id===e&&o.articleId===t?$(g({},o),{rating:bh(i)}):o);return this.writeComments(r),y(this.buildPostDetails(t))}changeArticleRating(t,e){let i=this.readArticles().map(r=>r.id===t?$(g({},r),{rating:bh(e)}):r);return this.writeArticles(i),y(this.buildPostDetails(t))}buildPostDetails(t){let e=this.readArticles().find(r=>r.id===t)??null,i=this.readComments().filter(r=>r.articleId===t);return{article:e?g({},e):null,comments:vh(i)}}createComment(t,e){let i=new Date;return{id:String(Date.now()),articleId:t,author:e.author,text:e.text,dateLabel:i.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),isoDate:i.toISOString().slice(0,10),rating:0}}readArticles(){if(!Ke(this.platformId))return wa(Et);let t=localStorage.getItem(this.articlesStorageKey);if(t===null){let i=wa(Et);return this.writeArticles(i),i}try{let i=JSON.parse(t);if(u_(i))return wa(i)}catch{}let e=wa(Et);return this.writeArticles(e),e}writeArticles(t){Ke(this.platformId)&&localStorage.setItem(this.articlesStorageKey,JSON.stringify(t))}readComments(){if(!Ke(this.platformId))return[];let t=localStorage.getItem(this.commentsStorageKey);if(t===null)return[];try{let e=JSON.parse(t);if(h_(e))return vh(e)}catch{}return this.writeComments([]),[]}writeComments(t){Ke(this.platformId)&&localStorage.setItem(this.commentsStorageKey,JSON.stringify(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};function wa(n){return n.map(t=>$(g({},t),{id:String(t.id),rating:t.rating??0}))}function vh(n){return n.map(t=>$(g({},t),{id:String(t.id),articleId:String(t.articleId)}))}function bh(n){return Math.min(Math.max(Math.round(n),0),5)}function u_(n){return Array.isArray(n)&&n.every(t=>typeof t=="object"&&t!==null&&(typeof t.id=="string"||typeof t.id=="number")&&typeof t.title=="string"&&typeof t.text=="string"&&typeof t.dateLabel=="string"&&typeof t.isoDate=="string"&&typeof t.tag=="string"&&m_(t.theme)&&typeof t.image=="string"&&typeof t.isUserCreated=="boolean"&&(typeof t.rating=="number"||t.rating===void 0))}function m_(n){return n==="red"||n==="green"||n==="neutral"}function h_(n){return Array.isArray(n)&&n.every(t=>typeof t=="object"&&t!==null&&(typeof t.id=="string"||typeof t.id=="number")&&(typeof t.articleId=="string"||typeof t.articleId=="number")&&typeof t.author=="string"&&typeof t.text=="string"&&typeof t.dateLabel=="string"&&typeof t.isoDate=="string"&&typeof t.rating=="number")}var _h=new _("POST_SERVICE",{providedIn:"root",factory:()=>ze.useBackend?l(Da):l(Ea)});var xa=class n{articleState=E(null);commentsState=E([]);activeArticleIdState=E(null);article=this.articleState.asReadonly();comments=this.commentsState.asReadonly();activeArticleId=this.activeArticleIdState.asReadonly();savePost(t){this.articleState.set(t?g({},t):null),this.activeArticleIdState.set(t?.id??null)}saveComments(t){this.commentsState.set(t.map(e=>g({},e)))}savePostDetails(t){this.savePost(t.article),this.saveComments(t.comments)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var f_=(n,t)=>t.id;function p_(n,t){if(n&1){let e=bt();m(0,"article",18)(1,"div",19)(2,"div")(3,"h3"),f(4),p(),m(5,"time"),f(6),p()(),m(7,"p"),f(8),p()(),m(9,"div",20)(10,"button",21),z("click",function(){let r=Se(e).$implicit,o=T(3);return Ae(o.changeCommentRating(r,r.rating-1))}),m(11,"mat-icon",2),f(12,"thumb_down"),p()(),m(13,"strong"),f(14),p(),m(15,"button",22),z("click",function(){let r=Se(e).$implicit,o=T(3);return Ae(o.changeCommentRating(r,r.rating+1))}),m(16,"mat-icon",2),f(17,"thumb_up"),p()()()(),K(18,"mat-divider")}if(n&2){let e=t.$implicit;h(4),k(e.author),h(),se("datetime",e.isoDate),h(),k(e.dateLabel),h(2),k(e.text),h(6),k(e.rating)}}function g_(n,t){if(n&1&&(m(0,"div",10),be(1,p_,19,5,null,null,f_),p()),n&2){let e=T(2);h(),_e(e.comments())}}function v_(n,t){n&1&&(m(0,"p",11),f(1,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"),p())}function b_(n,t){n&1&&(m(0,"mat-error"),f(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"),p())}function __(n,t){n&1&&(m(0,"mat-error"),f(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),p())}function y_(n,t){if(n&1){let e=bt();m(0,"mat-card",4),K(1,"img",5),m(2,"mat-card-header")(3,"mat-card-title"),f(4),p(),m(5,"mat-card-subtitle"),f(6),m(7,"time"),f(8),p()()(),m(9,"mat-card-content")(10,"p"),f(11),p(),m(12,"div",6)(13,"span"),f(14,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438"),p(),m(15,"button",7),z("click",function(){let r=Se(e),o=T();return Ae(o.changeArticleRating(r.id,r.rating-1))}),m(16,"mat-icon",2),f(17,"remove"),p()(),m(18,"strong"),f(19),p(),m(20,"button",8),z("click",function(){let r=Se(e),o=T();return Ae(o.changeArticleRating(r.id,r.rating+1))}),m(21,"mat-icon",2),f(22,"add"),p()()()()(),m(23,"mat-card",9)(24,"mat-card-header")(25,"mat-card-title"),f(26,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"),p(),m(27,"mat-card-subtitle"),f(28),p()(),m(29,"mat-card-content"),W(30,g_,3,0,"div",10)(31,v_,2,0,"p",11),p()(),m(32,"mat-card",12)(33,"mat-card-header")(34,"mat-card-title"),f(35,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),p()(),m(36,"mat-card-content")(37,"form",13),z("ngSubmit",function(){let r=Se(e),o=T();return Ae(o.addComment(r.id))}),m(38,"mat-form-field",14)(39,"mat-label"),f(40,"\u0418\u043C\u044F"),p(),K(41,"input",15),W(42,b_,2,0,"mat-error"),p(),m(43,"mat-form-field",14)(44,"mat-label"),f(45,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),p(),K(46,"textarea",16),W(47,__,2,0,"mat-error"),p(),m(48,"button",17)(49,"mat-icon",2),f(50,"send"),p(),f(51," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),p()()()()}if(n&2){let e=t,i=T();h(),U("src",e.image,rt)("alt",e.title),h(3),k(e.title),h(2),Gt(" ",e.tag," \xB7 "),h(),se("datetime",e.isoDate),h(),k(e.dateLabel),h(3),k(e.text||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u044C\u0438."),h(8),k(e.rating),h(9),k(i.comments().length),h(2),q(i.comments().length?30:31),h(7),U("formGroup",i.commentForm),h(5),q(i.hasError("author")?42:-1),h(5),q(i.hasError("text")?47:-1),h(),U("disabled",i.commentForm.invalid)}}function C_(n,t){n&1&&(m(0,"mat-card",3)(1,"mat-card-title"),f(2,"\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"),p(),m(3,"mat-card-content")(4,"p"),f(5,"\u0421\u0442\u0430\u0442\u044C\u044F \u043C\u043E\u0433\u043B\u0430 \u0431\u044B\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430."),p()(),m(6,"mat-card-actions")(7,"a",23),f(8,"Back"),p()()())}var Sa=class n{route=l(gt);destroyRef=l(tt);title=l(Ur);postService=l(_h);postStore=l(xa);article=this.postStore.article;comments=this.postStore.comments;isLoaded=E(!1);pageTitle=ae(()=>this.article()?.title??"\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");commentForm=new nn({author:new Lt("",{nonNullable:!0,validators:[qe.required,qe.minLength(2)]}),text:new Lt("",{nonNullable:!0,validators:[qe.required,qe.minLength(5)]})});ngOnInit(){this.route.paramMap.pipe(ah(this.destroyRef)).subscribe(t=>{let e=t.get("id");if(!e){this.postStore.savePostDetails({article:null,comments:[]}),this.title.setTitle("\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D | Kovali-folio"),this.isLoaded.set(!0);return}this.loadPost(e)})}addComment(t){if(this.commentForm.invalid){this.commentForm.markAllAsTouched();return}let e={author:this.commentForm.controls.author.value.trim(),text:this.commentForm.controls.text.value.trim()};this.postService.addComment(t,e).pipe(fe(1)).subscribe(i=>{this.postStore.savePostDetails(i),this.commentForm.reset()})}changeArticleRating(t,e){this.postService.changeArticleRating(t,e).pipe(fe(1)).subscribe(i=>this.postStore.savePostDetails(i))}changeCommentRating(t,e){this.postService.changeCommentRating(t.articleId,t.id,e).pipe(fe(1)).subscribe(i=>this.postStore.savePostDetails(i))}hasError(t){let e=this.commentForm.get(t);return!!(e?.invalid&&e.touched)}loadPost(t){this.isLoaded.set(!1),this.postService.getPostWithComments(t).pipe(fe(1)).subscribe(e=>{this.postStore.savePostDetails(e),this.title.setTitle(`${e.article?.title??"\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"} | Kovali-folio`),this.isLoaded.set(!0)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-post"]],decls:7,vars:1,consts:[[1,"post-page"],["mat-button","","routerLink","/blog",1,"post-back-link"],["fontSet","material-symbols-outlined"],[1,"post-not-found"],[1,"post-card"],["mat-card-image","",3,"src","alt"],["aria-label","\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438",1,"rating-row"],["mat-icon-button","","type","button","aria-label","\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438",3,"click"],["mat-icon-button","","type","button","aria-label","\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438",3,"click"],[1,"comments-card"],[1,"comments-list"],[1,"comments-empty"],[1,"comment-form-card"],[1,"comment-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","author"],["matInput","","formControlName","text","rows","4"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"comment-item"],[1,"comment-main"],["aria-label","\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F",1,"rating-row","comment-rating"],["mat-icon-button","","type","button","aria-label","\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F",3,"click"],["mat-icon-button","","type","button","aria-label","\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F",3,"click"],["mat-button","","routerLink","/blog"]],template:function(e,i){if(e&1&&(m(0,"section",0)(1,"a",1)(2,"mat-icon",2),f(3,"arrow_back"),p(),f(4," Back "),p(),W(5,y_,52,14)(6,C_,9,0,"mat-card",3),p()),e&2){let r;h(5),q((r=i.isLoaded()&&i.article())?5:i.isLoaded()?6:-1,r)}},dependencies:[Ko,Yo,li,Go,Wo,Dn,sr,lt,ii,So,_n,fh,sh,uh,ch,mh,hh,dh,lh,gh,ph,Sn,mi,xn,ur,Jt,Qt,ua,da],styles:[".post-page[_ngcontent-%COMP%]{max-width:980px;margin:0 auto;padding:40px 24px 80px}.post-back-link[_ngcontent-%COMP%]{margin-bottom:16px}.post-card[_ngcontent-%COMP%], .comments-card[_ngcontent-%COMP%], .comment-form-card[_ngcontent-%COMP%], .post-not-found[_ngcontent-%COMP%]{margin-bottom:24px}.post-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:420px;object-fit:cover}.post-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:16px 0 0;color:var(--color-gray);line-height:1.7}.rating-row[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;margin-top:20px;color:var(--color-dark)}.rating-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{min-width:24px;text-align:center}.comments-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.comment-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:24px;padding:8px 0 16px}.comment-main[_ngcontent-%COMP%]{flex:1}.comment-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:4px;font-size:16px;color:var(--color-dark)}.comment-main[_ngcontent-%COMP%]   time[_ngcontent-%COMP%], .comments-empty[_ngcontent-%COMP%]{color:var(--color-gray);font-size:13px}.comment-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:12px;color:var(--color-gray);line-height:1.6}.comment-rating[_ngcontent-%COMP%]{margin-top:0}.comment-form[_ngcontent-%COMP%]{display:grid;gap:16px}.comment-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{justify-self:start}@media(max-width:700px){.post-page[_ngcontent-%COMP%]{padding:24px 20px 64px}.comment-item[_ngcontent-%COMP%]{flex-direction:column;gap:8px}}"]})};var yh=[{path:"",component:Ca,title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F | Kovali-folio"},{path:"blog",component:fa,title:"\u0411\u043B\u043E\u0433 | Kovali-folio"},{path:"blog/:id",component:Sa}];var D_="@",w_=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(ie);loadingSchedulerFn=l(E_,{optional:!0});_engine;constructor(e,i,r,o,a){this.doc=e,this.delegate=i,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-3A673QMK.js").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(r=>{throw new F(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,i){let r=this.delegate.createRenderer(e,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new zl(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,i);o.use(s),this.scheduler??=this.injector.get(Jl,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(i){Cr()};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),zl=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,i,r){this.delegate.insertBefore(t,e,i,r)}removeChild(t,e,i,r){this.delegate.removeChild(t,e,i,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,i,r){this.delegate.setAttribute(t,e,i,r)}removeAttribute(t,e,i){this.delegate.removeAttribute(t,e,i)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,i,r){this.delegate.setStyle(t,e,i,r)}removeStyle(t,e,i){this.delegate.removeStyle(t,e,i)}setProperty(t,e,i){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,i)),this.delegate.setProperty(t,e,i)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,i,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,i,r)),this.delegate.listen(t,e,i,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(D_)}},E_=new _("");function Ch(n="animations"){return kn("NgAsyncAnimations"),Ht([{provide:Me,useFactory:()=>new w_(l(L),l(Si),l(B),n)},{provide:On,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Dh={providers:[Ql(),Ch(),ds(us()),Hs(yh,$s({anchorScrolling:"enabled",scrollPositionRestoration:"enabled"})),od(rd())]};var x_=()=>({exact:!0}),Aa=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-header"]],decls:15,vars:2,consts:[[1,"nav-inner"],["routerLink","/",1,"logo"],["routerLink","/","routerLinkActive","nav-active",3,"routerLinkActiveOptions"],["routerLink","/blog","routerLinkActive","nav-active"],["href","#contact"]],template:function(e,i){e&1&&(m(0,"header")(1,"div",0)(2,"a",1),f(3,"Kovali-folio"),p(),m(4,"nav")(5,"ul")(6,"li")(7,"a",2),f(8," About me "),p()(),m(9,"li")(10,"a",3),f(11,"Blog"),p()(),m(12,"li")(13,"a",4),f(14,"Contact"),p()()()()()()),e&2&&(h(7),U("routerLinkActiveOptions",vc(1,x_)))},dependencies:[lt,zs],encapsulation:2})};var Ma=class n{preventSubmit(t){t.preventDefault()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-footer"]],decls:34,vars:0,consts:[["id","contact"],[1,"footer-inner"],[1,"footer-left"],["href","mailto:kovali94738@yandex.ru"],["href","tel:+79991234567"],[1,"footer-socials"],["href","https://vk.com/griga_niga"],["src","images/vk.png","alt","VK"],["href","https://t.me/kovali94738"],["src","images/tg.png","alt","Telegram"],["href","https://github.com/kovali2002"],["src","images/github.png","alt","GitHub"],[1,"footer-right"],[3,"submit"],["type","email","placeholder","Your email address"],["placeholder","Describe your project"],["type","submit"],[1,"footer-copy"]],template:function(e,i){e&1&&(w(0,"footer",0)(1,"div",1)(2,"div",2)(3,"h2"),f(4,"Say hello and let's"),de(5,"br"),f(6,"work together !"),S(),w(7,"p"),f(8,"Email: "),w(9,"a",3),f(10,"kovali94738@yandex.ru"),S()(),w(11,"p"),f(12,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),w(13,"a",4),f(14,"+7 (999) 123-45-67"),S()(),w(15,"div",5)(16,"a",6),de(17,"img",7),S(),w(18,"a",8),de(19,"img",9),S(),w(20,"a",10),de(21,"img",11),S()()(),w(22,"div",12)(23,"form",13),fc("submit",function(o){return i.preventSubmit(o)}),w(24,"label"),f(25,"Email"),S(),de(26,"input",14),w(27,"label"),f(28,"Input your message"),S(),de(29,"textarea",15),w(30,"button",16),f(31,"Submit"),S()()()(),w(32,"p",17),f(33,"\xA9 2026 Grisha Kovalev"),S()())},encapsulation:2})};var Ra=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"app-content"]],template:function(e,i){e&1&&(K(0,"app-header"),m(1,"main",0),K(2,"router-outlet"),p(),K(3,"app-footer"))},dependencies:[Hi,Aa,Ma],styles:["[_nghost-%COMP%]{min-height:100%;display:flex;flex-direction:column}.app-content[_ngcontent-%COMP%]{flex:1}"]})};ns(Ra,Dh).catch(n=>console.error(n));
