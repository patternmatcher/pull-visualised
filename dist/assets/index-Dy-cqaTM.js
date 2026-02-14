(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const go=!1;var Eu=Array.isArray,Jf=Array.prototype.indexOf,Ar=Array.prototype.includes,Sa=Array.from,Qf=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,eh=Object.getOwnPropertyDescriptors,th=Object.prototype,nh=Array.prototype,bu=Object.getPrototypeOf,sc=Object.isExtensible;function ih(n){return n()}function vo(n){for(var e=0;e<n.length;e++)n[e]()}function Tu(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const Ut=2,fa=4,ms=8,Au=1<<24,ai=16,Dn=32,Yi=64,bl=128,_n=512,At=1024,Nt=2048,vn=4096,ln=8192,ei=16384,Tl=32768,wr=65536,ac=1<<17,wu=1<<18,Or=1<<19,Ru=1<<20,Jn=1<<25,Wi=32768,xo=1<<21,Al=1<<22,vi=1<<23,Vi=Symbol("$state"),rh=Symbol("legacy props"),Mr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Cu(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function sh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ah(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function oh(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function lh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ch(n){throw new Error("https://svelte.dev/e/effect_orphan")}function uh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fh(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function hh(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function dh(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ph(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const mh=1,_h=2,Pu=4,gh=8,vh=16,xh=2,Mh=4,Sh=8,yh=1,Eh=2,Dt=Symbol();function bh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Du(n){return n===this.v}function Th(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Lu(n){return!Th(n,this.v)}let Br=!1,Ah=!1;function wh(){Br=!0}let xt=null;function Rr(n){xt=n}function _s(n,e=!1,t){xt={p:xt,i:!1,c:null,e:null,s:n,x:null,l:Br&&!e?{s:null,u:null,$:[]}:null}}function gs(n){var e=xt,t=e.e;if(t!==null){e.e=null;for(var i of t)ju(i)}return e.i=!0,xt=e.p,{}}function vs(){return!Br||xt!==null&&xt.l===null}let Sr=[];function Rh(){var n=Sr;Sr=[],vo(n)}function ti(n){if(Sr.length===0){var e=Sr;queueMicrotask(()=>{e===Sr&&Rh()})}Sr.push(n)}function Iu(n){var e=lt;if(e===null)return it.f|=vi,n;if((e.f&Tl)===0){if((e.f&bl)===0)throw n;e.b.error(n)}else Cr(n,e)}function Cr(n,e){for(;e!==null;){if((e.f&bl)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const Ch=-7169;function bt(n,e){n.f=n.f&Ch|e}function wl(n){(n.f&_n)!==0||n.deps===null?bt(n,At):bt(n,vn)}function Uu(n){if(n!==null)for(const e of n)(e.f&Ut)===0||(e.f&Wi)===0||(e.f^=Wi,Uu(e.deps))}function Nu(n,e,t){(n.f&Nt)!==0?e.add(n):(n.f&vn)!==0&&t.add(n),Uu(n.deps),bt(n,At)}const Rs=new Set;let Mt=null,bn=null,hn=[],Rl=null,Mo=!1;class xi{committed=!1;current=new Map;previous=new Map;#t=new Set;#o=new Set;#e=0;#s=0;#a=null;#i=new Set;#n=new Set;#r=new Map;is_fork=!1;#l=!1;is_deferred(){return this.is_fork||this.#s>0}skip_effect(e){this.#r.has(e)||this.#r.set(e,{d:[],m:[]})}unskip_effect(e){var t=this.#r.get(e);if(t){this.#r.delete(e);for(var i of t.d)bt(i,Nt),An(i);for(i of t.m)bt(i,vn),An(i)}}process(e){hn=[],this.apply();var t=[],i=[];for(const r of e)this.#c(r,t,i);if(this.is_deferred()){this.#u(i),this.#u(t);for(const[r,s]of this.#r)Bu(r,s)}else{for(const r of this.#t)r();this.#t.clear(),this.#e===0&&this.#f(),Mt=null,oc(i),oc(t),this.#a?.resolve()}bn=null}#c(e,t,i){e.f^=At;for(var r=e.first,s=null;r!==null;){var a=r.f,o=(a&(Dn|Yi))!==0,l=o&&(a&At)!==0,c=l||(a&ln)!==0||this.#r.has(r);if(!c&&r.fn!==null){o?r.f^=At:s!==null&&(a&(fa|ms|Au))!==0?s.b.defer_effect(r):(a&fa)!==0?t.push(r):zr(r)&&((a&ai)!==0&&this.#n.add(r),Dr(r));var u=r.first;if(u!==null){r=u;continue}}var f=r.parent;for(r=r.next;r===null&&f!==null;)f===s&&(s=null),r=f.next,f=f.parent}}#u(e){for(var t=0;t<e.length;t+=1)Nu(e[t],this.#i,this.#n)}capture(e,t){t!==Dt&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&vi)===0&&(this.current.set(e,e.v),bn?.set(e,e.v))}activate(){Mt=this,this.apply()}deactivate(){Mt===this&&(Mt=null,bn=null)}flush(){if(this.activate(),hn.length>0){if(Ph(),Mt!==null&&Mt!==this)return}else this.#e===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#o)e(this);this.#o.clear()}#f(){if(Rs.size>1){this.previous.clear();var e=bn,t=!0;for(const r of Rs){if(r===this){t=!1;continue}const s=[];for(const[o,l]of this.current){if(r.current.has(o))if(t&&l!==r.current.get(o))r.current.set(o,l);else continue;s.push(o)}if(s.length===0)continue;const a=[...r.current.keys()].filter(o=>!this.current.has(o));if(a.length>0){var i=hn;hn=[];const o=new Set,l=new Map;for(const c of s)Fu(c,a,o,l);if(hn.length>0){Mt=r,r.apply();for(const c of hn)r.#c(c,[],[]);r.deactivate()}hn=i}}Mt=null,bn=e}this.committed=!0,Rs.delete(this)}increment(e){this.#e+=1,e&&(this.#s+=1)}decrement(e){this.#e-=1,e&&(this.#s-=1),!this.#l&&(this.#l=!0,ti(()=>{this.#l=!1,this.is_deferred()?hn.length>0&&this.flush():this.revive()}))}revive(){for(const e of this.#i)this.#n.delete(e),bt(e,Nt),An(e);for(const e of this.#n)bt(e,vn),An(e);this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#o.add(e)}settled(){return(this.#a??=Tu()).promise}static ensure(){if(Mt===null){const e=Mt=new xi;Rs.add(Mt),ti(()=>{Mt===e&&e.flush()})}return Mt}apply(){}}function Ph(){Mo=!0;var n=null;try{for(var e=0;hn.length>0;){var t=xi.ensure();if(e++>1e3){var i,r;Dh()}t.process(hn),Mi.clear()}}finally{hn=[],Mo=!1,Rl=null}}function Dh(){try{uh()}catch(n){Cr(n,Rl)}}let Zn=null;function oc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(ei|ln))===0&&zr(i)&&(Zn=new Set,Dr(i),i.deps===null&&i.first===null&&i.nodes===null&&(i.teardown===null&&i.ac===null?Qu(i):i.fn=null),Zn?.size>0)){Mi.clear();for(const r of Zn){if((r.f&(ei|ln))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)Zn.has(a)&&(Zn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(ei|ln))===0&&Dr(l)}}Zn.clear()}}Zn=null}}function Fu(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&Ut)!==0?Fu(r,e,t,i):(s&(Al|ai))!==0&&(s&Nt)===0&&Ou(r,e,i)&&(bt(r,Nt),An(r))}}function Ou(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Ar.call(e,r))return!0;if((r.f&Ut)!==0&&Ou(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function An(n){for(var e=Rl=n;e.parent!==null;){e=e.parent;var t=e.f;if(Mo&&e===lt&&(t&ai)!==0&&(t&wu)===0)return;if((t&(Yi|Dn))!==0){if((t&At)===0)return;e.f^=At}}hn.push(e)}function Bu(n,e){if(!((n.f&Dn)!==0&&(n.f&At)!==0)){(n.f&Nt)!==0?e.d.push(n):(n.f&vn)!==0&&e.m.push(n),bt(n,At);for(var t=n.first;t!==null;)Bu(t,e),t=t.next}}function Lh(n){let e=0,t=Xi(0),i;return()=>{Il()&&(N(t),ya(()=>(e===0&&(i=Le(()=>n(()=>os(t)))),e+=1,()=>{ti(()=>{e-=1,e===0&&(i?.(),i=void 0,os(t))})})))}}var Ih=wr|Or|bl;function Uh(n,e,t){new Nh(n,e,t)}class Nh{parent;is_pending=!1;#t;#o=null;#e;#s;#a;#i=null;#n=null;#r=null;#l=null;#c=null;#u=0;#f=0;#p=!1;#d=!1;#m=new Set;#_=new Set;#h=null;#S=Lh(()=>(this.#h=Xi(this.#u),()=>{this.#h=null}));constructor(e,t,i){this.#t=e,this.#e=t,this.#s=i,this.parent=lt.b,this.is_pending=!!this.#e.pending,this.#a=Ul(()=>{lt.b=this;{var r=this.#x();try{this.#i=dn(()=>i(r))}catch(s){this.error(s)}this.#f>0?this.#v():this.is_pending=!1}return()=>{this.#c?.remove()}},Ih)}#y(){try{this.#i=dn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#E(){const e=this.#e.pending;e&&(this.#n=dn(()=>e(this.#t)),ti(()=>{var t=this.#x();this.#i=this.#g(()=>(xi.ensure(),dn(()=>this.#s(t)))),this.#f>0?this.#v():(ki(this.#n,()=>{this.#n=null}),this.is_pending=!1)}))}#x(){var e=this.#t;return this.is_pending&&(this.#c=Gi(),this.#t.before(this.#c),e=this.#c),e}defer_effect(e){Nu(e,this.#m,this.#_)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#g(e){var t=lt,i=it,r=xt;Vn(this.#a),xn(this.#a),Rr(this.#a.ctx);try{return e()}catch(s){return Iu(s),null}finally{Vn(t),xn(i),Rr(r)}}#v(){const e=this.#e.pending;this.#i!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#c),nf(this.#i,this.#l)),this.#n===null&&(this.#n=dn(()=>e(this.#t)))}#M(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e);return}if(this.#f+=e,this.#f===0){this.is_pending=!1;for(const t of this.#m)bt(t,Nt),An(t);for(const t of this.#_)bt(t,vn),An(t);this.#m.clear(),this.#_.clear(),this.#n&&ki(this.#n,()=>{this.#n=null}),this.#l&&(this.#t.before(this.#l),this.#l=null)}}update_pending_count(e){this.#M(e),this.#u+=e,!(!this.#h||this.#p)&&(this.#p=!0,ti(()=>{this.#p=!1,this.#h&&Pr(this.#h,this.#u)}))}get_effect_pending(){return this.#S(),N(this.#h)}error(e){var t=this.#e.onerror;let i=this.#e.failed;if(this.#d||!t&&!i)throw e;this.#i&&(Jt(this.#i),this.#i=null),this.#n&&(Jt(this.#n),this.#n=null),this.#r&&(Jt(this.#r),this.#r=null);var r=!1,s=!1;const a=()=>{if(r){bh();return}r=!0,s&&ph(),xi.ensure(),this.#u=0,this.#r!==null&&ki(this.#r,()=>{this.#r=null}),this.is_pending=this.has_pending_snippet(),this.#i=this.#g(()=>(this.#d=!1,dn(()=>this.#s(this.#t)))),this.#f>0?this.#v():this.is_pending=!1};ti(()=>{try{s=!0,t?.(e,a),s=!1}catch(o){Cr(o,this.#a&&this.#a.parent)}i&&(this.#r=this.#g(()=>{xi.ensure(),this.#d=!0;try{return dn(()=>{i(this.#t,()=>e,()=>a)})}catch(o){return Cr(o,this.#a.parent),null}finally{this.#d=!1}}))})}}function Fh(n,e,t,i){const r=vs()?Cl:Pl;var s=n.filter(h=>!h.settled);if(t.length===0&&s.length===0){i(e.map(r));return}var a=Mt,o=lt,l=Oh(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function u(h){l();try{i(h)}catch(m){(o.f&ei)===0&&Cr(m,o)}a?.deactivate(),So()}if(t.length===0){c.then(()=>u(e.map(r)));return}function f(){l(),Promise.all(t.map(h=>Bh(h))).then(h=>u([...e.map(r),...h])).catch(h=>Cr(h,o))}c?c.then(f):f()}function Oh(){var n=lt,e=it,t=xt,i=Mt;return function(s=!0){Vn(n),xn(e),Rr(t),s&&i?.activate()}}function So(){Vn(null),xn(null),Rr(null)}function Cl(n){var e=Ut|Nt,t=it!==null&&(it.f&Ut)!==0?it:null;return lt!==null&&(lt.f|=Or),{ctx:xt,deps:null,effects:null,equals:Du,f:e,fn:n,reactions:null,rv:0,v:Dt,wv:0,parent:t??lt,ac:null}}function Bh(n,e,t){let i=lt;i===null&&sh();var r=i.b,s=void 0,a=Xi(Dt),o=!it,l=new Map;return $h(()=>{var c=Tu();s=c.promise;try{Promise.resolve(n()).then(c.resolve,c.reject).then(()=>{u===Mt&&u.committed&&u.deactivate(),So()})}catch(m){c.reject(m),So()}var u=Mt;if(o){var f=r.is_rendered();r.update_pending_count(1),u.increment(f),l.get(u)?.reject(Mr),l.delete(u),l.set(u,c)}const h=(m,v=void 0)=>{if(u.activate(),v)v!==Mr&&(a.f|=vi,Pr(a,v));else{(a.f&vi)!==0&&(a.f^=vi),Pr(a,m);for(const[x,d]of l){if(l.delete(x),x===u)break;d.reject(Mr)}}o&&(r.update_pending_count(-1),u.decrement(f))};c.promise.then(h,m=>h(null,m||"unknown"))}),$u(()=>{for(const c of l.values())c.reject(Mr)}),new Promise(c=>{function u(f){function h(){f===s?c(a):u(s)}f.then(h,h)}u(s)})}function Pl(n){const e=Cl(n);return e.equals=Lu,e}function zu(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Jt(e[t])}}function zh(n){for(var e=n.parent;e!==null;){if((e.f&Ut)===0)return(e.f&ei)===0?e:null;e=e.parent}return null}function Dl(n){var e,t=lt;Vn(zh(n));try{n.f&=~Wi,zu(n),e=of(n)}finally{Vn(t)}return e}function Vu(n){var e=Dl(n);if(!n.equals(e)&&(n.wv=sf(),(!Mt?.is_fork||n.deps===null)&&(n.v=e,n.deps===null))){bt(n,At);return}yi||(bn!==null?(Il()||Mt?.is_fork)&&bn.set(n,e):wl(n))}let yo=new Set;const Mi=new Map;let Gu=!1;function Xi(n,e){var t={f:0,v:n,reactions:null,equals:Du,rv:0,wv:0};return t}function li(n,e){const t=Xi(n);return Zh(t),t}function Lt(n,e=!1,t=!0){const i=Xi(n);return e||(i.equals=Lu),Br&&t&&xt!==null&&xt.l!==null&&(xt.l.s??=[]).push(i),i}function La(n,e){return ot(n,Le(()=>N(n))),e}function ot(n,e,t=!1){it!==null&&(!wn||(it.f&ac)!==0)&&vs()&&(it.f&(Ut|ai|Al|ac))!==0&&(gn===null||!Ar.call(gn,n))&&dh();let i=t?yr(e):e;return Pr(n,i)}function Pr(n,e){if(!n.equals(e)){var t=n.v;yi?Mi.set(n,e):Mi.set(n,t),n.v=e;var i=xi.ensure();if(i.capture(n,t),(n.f&Ut)!==0){const r=n;(n.f&Nt)!==0&&Dl(r),wl(r)}n.wv=sf(),ku(n,Nt),vs()&&lt!==null&&(lt.f&At)!==0&&(lt.f&(Dn|Yi))===0&&(fn===null?Jh([n]):fn.push(n)),!i.is_fork&&yo.size>0&&!Gu&&Vh()}return e}function Vh(){Gu=!1;for(const n of yo)(n.f&At)!==0&&bt(n,vn),zr(n)&&Dr(n);yo.clear()}function os(n){ot(n,n.v+1)}function ku(n,e){var t=n.reactions;if(t!==null)for(var i=vs(),r=t.length,s=0;s<r;s++){var a=t[s],o=a.f;if(!(!i&&a===lt)){var l=(o&Nt)===0;if(l&&bt(a,e),(o&Ut)!==0){var c=a;bn?.delete(c),(o&Wi)===0&&(o&_n&&(a.f|=Wi),ku(c,vn))}else l&&((o&ai)!==0&&Zn!==null&&Zn.add(a),An(a))}}}function yr(n){if(typeof n!="object"||n===null||Vi in n)return n;const e=bu(n);if(e!==th&&e!==nh)return n;var t=new Map,i=Eu(n),r=li(0),s=Hi,a=o=>{if(Hi===s)return o();var l=it,c=Hi;xn(null),uc(s);var u=o();return xn(l),uc(c),u};return i&&t.set("length",li(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&fh();var u=t.get(l);return u===void 0?a(()=>{var f=li(c.value);return t.set(l,f),f}):ot(u,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const u=a(()=>li(Dt));t.set(l,u),os(r)}}else ot(c,Dt),os(r);return!0},get(o,l,c){if(l===Vi)return n;var u=t.get(l),f=l in o;if(u===void 0&&(!f||Er(o,l)?.writable)&&(u=a(()=>{var m=yr(f?o[l]:Dt),v=li(m);return v}),t.set(l,u)),u!==void 0){var h=N(u);return h===Dt?void 0:h}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=N(u))}else if(c===void 0){var f=t.get(l),h=f?.v;if(f!==void 0&&h!==Dt)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){if(l===Vi)return!0;var c=t.get(l),u=c!==void 0&&c.v!==Dt||Reflect.has(o,l);if(c!==void 0||lt!==null&&(!u||Er(o,l)?.writable)){c===void 0&&(c=a(()=>{var h=u?yr(o[l]):Dt,m=li(h);return m}),t.set(l,c));var f=N(c);if(f===Dt)return!1}return u},set(o,l,c,u){var f=t.get(l),h=l in o;if(i&&l==="length")for(var m=c;m<f.v;m+=1){var v=t.get(m+"");v!==void 0?ot(v,Dt):m in o&&(v=a(()=>li(Dt)),t.set(m+"",v))}if(f===void 0)(!h||Er(o,l)?.writable)&&(f=a(()=>li(void 0)),ot(f,yr(c)),t.set(l,f));else{h=f.v!==Dt;var x=a(()=>yr(c));ot(f,x)}var d=Reflect.getOwnPropertyDescriptor(o,l);if(d?.set&&d.set.call(u,c),!h){if(i&&typeof l=="string"){var p=t.get("length"),y=Number(l);Number.isInteger(y)&&y>=p.v&&ot(p,y+1)}os(r)}return!0},ownKeys(o){N(r);var l=Reflect.ownKeys(o).filter(f=>{var h=t.get(f);return h===void 0||h.v!==Dt});for(var[c,u]of t)u.v!==Dt&&!(c in o)&&l.push(c);return l},setPrototypeOf(){hh()}})}var lc,Hu,Wu,Xu;function Gh(){if(lc===void 0){lc=window,Hu=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Wu=Er(e,"firstChild").get,Xu=Er(e,"nextSibling").get,sc(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),sc(t)&&(t.__t=void 0)}}function Gi(n=""){return document.createTextNode(n)}function ha(n){return Wu.call(n)}function xs(n){return Xu.call(n)}function ve(n,e){return ha(n)}function kh(n,e=!1){{var t=ha(n);return t instanceof Comment&&t.data===""?xs(t):t}}function De(n,e=1,t=!1){let i=n;for(;e--;)i=xs(i);return i}function Hh(n){n.textContent=""}function qu(){return!1}function Ll(n){var e=it,t=lt;xn(null),Vn(null);try{return n()}finally{xn(e),Vn(t)}}function Yu(n){lt===null&&(it===null&&ch(),lh()),yi&&oh()}function Wh(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Wn(n,e,t){var i=lt;i!==null&&(i.f&ln)!==0&&(n|=ln);var r={ctx:xt,deps:null,nodes:null,f:n|Nt|_n,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Dr(r),r.f|=Tl}catch(o){throw Jt(r),o}else e!==null&&An(r);var s=r;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Or)===0&&(s=s.first,(n&ai)!==0&&(n&wr)!==0&&s!==null&&(s.f|=wr)),s!==null&&(s.parent=i,i!==null&&Wh(s,i),it!==null&&(it.f&Ut)!==0&&(n&Yi)===0)){var a=it;(a.effects??=[]).push(s)}return r}function Il(){return it!==null&&!wn}function $u(n){const e=Wn(ms,null,!1);return bt(e,At),e.teardown=n,e}function Eo(n){Yu();var e=lt.f,t=!it&&(e&Dn)!==0&&(e&Tl)===0;if(t){var i=xt;(i.e??=[]).push(n)}else return ju(n)}function ju(n){return Wn(fa|Ru,n,!1)}function Xh(n){return Yu(),Wn(ms|Ru,n,!0)}function qh(n){xi.ensure();const e=Wn(Yi|Or,n,!0);return(t={})=>new Promise(i=>{t.outro?ki(e,()=>{Jt(e),i(void 0)}):(Jt(e),i(void 0))})}function Yh(n){return Wn(fa,n,!1)}function ns(n,e){var t=xt,i={effect:null,ran:!1,deps:n};t.l.$.push(i),i.effect=ya(()=>{n(),!i.ran&&(i.ran=!0,Le(e))})}function Ku(){var n=xt;ya(()=>{for(var e of n.l.$){e.deps();var t=e.effect;(t.f&At)!==0&&t.deps!==null&&bt(t,vn),zr(t)&&Dr(t),e.ran=!1}})}function $h(n){return Wn(Al|Or,n,!0)}function ya(n,e=0){return Wn(ms|e,n,!0)}function Bt(n,e=[],t=[],i=[]){Fh(i,e,t,r=>{Wn(ms,()=>n(...r.map(N)),!0)})}function Ul(n,e=0){var t=Wn(ai|e,n,!0);return t}function dn(n){return Wn(Dn|Or,n,!0)}function Zu(n){var e=n.teardown;if(e!==null){const t=yi,i=it;cc(!0),xn(null);try{e.call(null)}finally{cc(t),xn(i)}}}function Ju(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&Ll(()=>{r.abort(Mr)});var i=t.next;(t.f&Yi)!==0?t.parent=null:Jt(t,e),t=i}}function jh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Dn)===0&&Jt(e),e=t}}function Jt(n,e=!0){var t=!1;(e||(n.f&wu)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Kh(n.nodes.start,n.nodes.end),t=!0),Ju(n,e&&!t),da(n,0),bt(n,ei);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Zu(n);var r=n.parent;r!==null&&r.first!==null&&Qu(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function Kh(n,e){for(;n!==null;){var t=n===e?null:xs(n);n.remove(),n=t}}function Qu(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function ki(n,e,t=!0){var i=[];ef(n,i,!0);var r=()=>{t&&Jt(n),e&&e()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function ef(n,e,t){if((n.f&ln)===0){n.f^=ln;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,a=(r.f&wr)!==0||(r.f&Dn)!==0&&(n.f&ai)!==0;ef(r,e,a?t:!1),r=s}}}function Nl(n){tf(n,!0)}function tf(n,e){if((n.f&ln)!==0){n.f^=ln,(n.f&At)===0&&(bt(n,Nt),An(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&wr)!==0||(t.f&Dn)!==0;tf(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function nf(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:xs(t);e.append(t),t=r}}let ra=!1,yi=!1;function cc(n){yi=n}let it=null,wn=!1;function xn(n){it=n}let lt=null;function Vn(n){lt=n}let gn=null;function Zh(n){it!==null&&(gn===null?gn=[n]:gn.push(n))}let Kt=null,sn=0,fn=null;function Jh(n){fn=n}let rf=1,Fi=0,Hi=Fi;function uc(n){Hi=n}function sf(){return++rf}function zr(n){var e=n.f;if((e&Nt)!==0)return!0;if(e&Ut&&(n.f&=~Wi),(e&vn)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(zr(s)&&Vu(s),s.wv>n.wv)return!0}(e&_n)!==0&&bn===null&&bt(n,At)}return!1}function af(n,e,t=!0){var i=n.reactions;if(i!==null&&!(gn!==null&&Ar.call(gn,n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&Ut)!==0?af(s,e,!1):e===s&&(t?bt(s,Nt):(s.f&At)!==0&&bt(s,vn),An(s))}}function of(n){var e=Kt,t=sn,i=fn,r=it,s=gn,a=xt,o=wn,l=Hi,c=n.f;Kt=null,sn=0,fn=null,it=(c&(Dn|Yi))===0?n:null,gn=null,Rr(n.ctx),wn=!1,Hi=++Fi,n.ac!==null&&(Ll(()=>{n.ac.abort(Mr)}),n.ac=null);try{n.f|=xo;var u=n.fn,f=u(),h=n.deps,m=Mt?.is_fork;if(Kt!==null){var v;if(m||da(n,sn),h!==null&&sn>0)for(h.length=sn+Kt.length,v=0;v<Kt.length;v++)h[sn+v]=Kt[v];else n.deps=h=Kt;if(Il()&&(n.f&_n)!==0)for(v=sn;v<h.length;v++)(h[v].reactions??=[]).push(n)}else!m&&h!==null&&sn<h.length&&(da(n,sn),h.length=sn);if(vs()&&fn!==null&&!wn&&h!==null&&(n.f&(Ut|vn|Nt))===0)for(v=0;v<fn.length;v++)af(fn[v],n);if(r!==null&&r!==n){if(Fi++,r.deps!==null)for(let x=0;x<t;x+=1)r.deps[x].rv=Fi;if(e!==null)for(const x of e)x.rv=Fi;fn!==null&&(i===null?i=fn:i.push(...fn))}return(n.f&vi)!==0&&(n.f^=vi),f}catch(x){return Iu(x)}finally{n.f^=xo,Kt=e,sn=t,fn=i,it=r,gn=s,Rr(a),wn=o,Hi=l}}function Qh(n,e){let t=e.reactions;if(t!==null){var i=Jf.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&Ut)!==0&&(Kt===null||!Ar.call(Kt,e))){var s=e;(s.f&_n)!==0&&(s.f^=_n,s.f&=~Wi),wl(s),zu(s),da(s,0)}}function da(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Qh(n,t[i])}function Dr(n){var e=n.f;if((e&ei)===0){bt(n,At);var t=lt,i=ra;lt=n,ra=!0;try{(e&(ai|Au))!==0?jh(n):Ju(n),Zu(n);var r=of(n);n.teardown=typeof r=="function"?r:null,n.wv=rf;var s;go&&Ah&&(n.f&Nt)!==0&&n.deps}finally{ra=i,lt=t}}}function N(n){var e=n.f,t=(e&Ut)!==0;if(it!==null&&!wn){var i=lt!==null&&(lt.f&ei)!==0;if(!i&&(gn===null||!Ar.call(gn,n))){var r=it.deps;if((it.f&xo)!==0)n.rv<Fi&&(n.rv=Fi,Kt===null&&r!==null&&r[sn]===n?sn++:Kt===null?Kt=[n]:Kt.push(n));else{(it.deps??=[]).push(n);var s=n.reactions;s===null?n.reactions=[it]:Ar.call(s,it)||s.push(it)}}}if(yi&&Mi.has(n))return Mi.get(n);if(t){var a=n;if(yi){var o=a.v;return((a.f&At)===0&&a.reactions!==null||cf(a))&&(o=Dl(a)),Mi.set(a,o),o}var l=(a.f&_n)===0&&!wn&&it!==null&&(ra||(it.f&_n)!==0),c=a.deps===null;zr(a)&&(l&&(a.f|=_n),Vu(a)),l&&!c&&lf(a)}if(bn?.has(n))return bn.get(n);if((n.f&vi)!==0)throw n.v;return n.v}function lf(n){if(n.deps!==null){n.f|=_n;for(const e of n.deps)(e.reactions??=[]).push(n),(e.f&Ut)!==0&&(e.f&_n)===0&&lf(e)}}function cf(n){if(n.v===Dt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Mi.has(e)||(e.f&Ut)!==0&&cf(e))return!0;return!1}function Le(n){var e=wn;try{return wn=!0,n()}finally{wn=e}}function ed(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Vi in n)bo(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Vi in t&&bo(t)}}}function bo(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{bo(n[i],e)}catch{}const t=bu(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=eh(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const td=["touchstart","touchmove"];function nd(n){return td.includes(n)}const id=new Set,fc=new Set;function rd(n,e,t,i={}){function r(s){if(i.capture||is.call(e,s),!s.cancelBubble)return Ll(()=>t?.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ti(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function Nn(n,e,t,i,r){var s={capture:i,passive:r},a=rd(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&$u(()=>{e.removeEventListener(n,a,s)})}let hc=null;function is(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],s=r[0]||n.target;hc=n;var a=0,o=hc===n&&n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==e){Qf(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=it,f=lt;xn(null),Vn(null);try{for(var h,m=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+i];x!=null&&(!s.disabled||n.target===s)&&x.call(s,n)}catch(d){h?m.push(d):h=d}if(n.cancelBubble||v===e||v===null)break;s=v}if(h){for(let d of m)queueMicrotask(()=>{throw d});throw h}}finally{n.__root=e,delete n.currentTarget,xn(u),Vn(f)}}}function sd(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function dc(n,e){var t=lt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function vt(n,e){var t=(e&yh)!==0,i=(e&Eh)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=sd(s?n:"<!>"+n),t||(r=ha(r)));var a=i||Hu?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=ha(a),l=a.lastChild;dc(o,l)}else dc(a,a);return a}}function gt(n,e){n!==null&&n.before(e)}function et(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function ad(n,e){return od(n,e)}const Qi=new Map;function od(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0}){Gh();var o=new Set,l=f=>{for(var h=0;h<f.length;h++){var m=f[h];if(!o.has(m)){o.add(m);var v=nd(m);e.addEventListener(m,is,{passive:v});var x=Qi.get(m);x===void 0?(document.addEventListener(m,is,{passive:v}),Qi.set(m,1)):Qi.set(m,x+1)}}};l(Sa(id)),fc.add(l);var c=void 0,u=qh(()=>{var f=t??e.appendChild(Gi());return Uh(f,{pending:()=>{}},h=>{_s({});var m=xt;s&&(m.c=s),r&&(i.$$events=r),c=n(h,i)||{},gs()}),()=>{for(var h of o){e.removeEventListener(h,is);var m=Qi.get(h);--m===0?(document.removeEventListener(h,is),Qi.delete(h)):Qi.set(h,m)}fc.delete(l),f!==t&&f.parentNode?.removeChild(f)}});return ld.set(c,u),c}let ld=new WeakMap;class cd{anchor;#t=new Map;#o=new Map;#e=new Map;#s=new Set;#a=!0;constructor(e,t=!0){this.anchor=e,this.#a=t}#i=()=>{var e=Mt;if(this.#t.has(e)){var t=this.#t.get(e),i=this.#o.get(t);if(i)Nl(i),this.#s.delete(t);else{var r=this.#e.get(t);r&&(this.#o.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of this.#t){if(this.#t.delete(s),s===e)break;const o=this.#e.get(a);o&&(Jt(o.effect),this.#e.delete(a))}for(const[s,a]of this.#o){if(s===t||this.#s.has(s))continue;const o=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();nf(a,c),c.append(Gi()),this.#e.set(s,{effect:a,fragment:c})}else Jt(a);this.#s.delete(s),this.#o.delete(s)};this.#a||!i?(this.#s.add(s),ki(a,o,!1)):o()}}};#n=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(Jt(r.effect),this.#e.delete(i))};ensure(e,t){var i=Mt,r=qu();if(t&&!this.#o.has(e)&&!this.#e.has(e))if(r){var s=document.createDocumentFragment(),a=Gi();s.append(a),this.#e.set(e,{effect:dn(()=>t(a)),fragment:s})}else this.#o.set(e,dn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[o,l]of this.#o)o===e?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of this.#e)o===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#i),i.ondiscard(this.#n)}else this.#i()}}function Zt(n,e,t=!1){var i=new cd(n),r=t?wr:0;function s(a,o){i.ensure(a,o)}Ul(()=>{var a=!1;e((o,l=0)=>{a=!0,s(l,o)}),a||s(!1,null)},r)}function cs(n,e){return e}function ud(n,e,t){for(var i=[],r=e.length,s,a=e.length,o=0;o<r;o++){let f=e[o];ki(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var h=n.outrogroups;To(Sa(s.done)),h.delete(s),h.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&t!==null;if(l){var c=t,u=c.parentNode;Hh(u),u.append(c),n.items.clear()}To(e,!l)}else s={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(s)}function To(n,e=!0){for(var t=0;t<n.length;t++)Jt(n[t],e)}var pc;function us(n,e,t,i,r,s=null){var a=n,o=new Map,l=(e&Pu)!==0;if(l){var c=n;a=c.appendChild(Gi())}var u=null,f=Pl(()=>{var p=t();return Eu(p)?p:p==null?[]:Sa(p)}),h,m=!0;function v(){d.fallback=u,fd(d,h,a,e,i),u!==null&&(h.length===0?(u.f&Jn)===0?Nl(u):(u.f^=Jn,rs(u,null,a)):ki(u,()=>{u=null}))}var x=Ul(()=>{h=N(f);for(var p=h.length,y=new Set,b=Mt,E=qu(),A=0;A<p;A+=1){var R=h[A],C=i(R,A),P=m?null:o.get(C);P?(P.v&&Pr(P.v,R),P.i&&Pr(P.i,A),E&&b.unskip_effect(P.e)):(P=hd(o,m?a:pc??=Gi(),R,C,A,r,e,t),m||(P.e.f|=Jn),o.set(C,P)),y.add(C)}if(p===0&&s&&!u&&(m?u=dn(()=>s(a)):(u=dn(()=>s(pc??=Gi())),u.f|=Jn)),p>y.size&&ah(),!m)if(E){for(const[g,S]of o)y.has(g)||b.skip_effect(S.e);b.oncommit(v),b.ondiscard(()=>{})}else v();N(f)}),d={effect:x,items:o,outrogroups:null,fallback:u};m=!1}function Xr(n){for(;n!==null&&(n.f&Dn)===0;)n=n.next;return n}function fd(n,e,t,i,r){var s=(i&gh)!==0,a=e.length,o=n.items,l=Xr(n.effect.first),c,u=null,f,h=[],m=[],v,x,d,p;if(s)for(p=0;p<a;p+=1)v=e[p],x=r(v,p),d=o.get(x).e,(d.f&Jn)===0&&(d.nodes?.a?.measure(),(f??=new Set).add(d));for(p=0;p<a;p+=1){if(v=e[p],x=r(v,p),d=o.get(x).e,n.outrogroups!==null)for(const S of n.outrogroups)S.pending.delete(d),S.done.delete(d);if((d.f&Jn)!==0)if(d.f^=Jn,d===l)rs(d,null,t);else{var y=u?u.next:l;d===n.effect.last&&(n.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),ci(n,u,d),ci(n,d,y),rs(d,y,t),u=d,h=[],m=[],l=Xr(u.next);continue}if((d.f&ln)!==0&&(Nl(d),s&&(d.nodes?.a?.unfix(),(f??=new Set).delete(d))),d!==l){if(c!==void 0&&c.has(d)){if(h.length<m.length){var b=m[0],E;u=b.prev;var A=h[0],R=h[h.length-1];for(E=0;E<h.length;E+=1)rs(h[E],b,t);for(E=0;E<m.length;E+=1)c.delete(m[E]);ci(n,A.prev,R.next),ci(n,u,A),ci(n,R,b),l=b,u=R,p-=1,h=[],m=[]}else c.delete(d),rs(d,l,t),ci(n,d.prev,d.next),ci(n,d,u===null?n.effect.first:u.next),ci(n,u,d),u=d;continue}for(h=[],m=[];l!==null&&l!==d;)(c??=new Set).add(l),m.push(l),l=Xr(l.next);if(l===null)continue}(d.f&Jn)===0&&h.push(d),u=d,l=Xr(d.next)}if(n.outrogroups!==null){for(const S of n.outrogroups)S.pending.size===0&&(To(Sa(S.done)),n.outrogroups?.delete(S));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var C=[];if(c!==void 0)for(d of c)(d.f&ln)===0&&C.push(d);for(;l!==null;)(l.f&ln)===0&&l!==n.fallback&&C.push(l),l=Xr(l.next);var P=C.length;if(P>0){var g=(i&Pu)!==0&&a===0?t:null;if(s){for(p=0;p<P;p+=1)C[p].nodes?.a?.measure();for(p=0;p<P;p+=1)C[p].nodes?.a?.fix()}ud(n,C,g)}}s&&ti(()=>{if(f!==void 0)for(d of f)d.nodes?.a?.apply()})}function hd(n,e,t,i,r,s,a,o){var l=(a&mh)!==0?(a&vh)===0?Lt(t,!1,!1):Xi(t):null,c=(a&_h)!==0?Xi(r):null;return{v:l,i:c,e:dn(()=>(s(e,l??t,c??r,o),()=>{n.delete(i)}))}}function rs(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&Jn)===0?e.nodes.start:t;i!==null;){var a=xs(i);if(s.before(i),i===r)return;i=a}}function ci(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const mc=[...` 	
\r\f \v\uFEFF`];function dd(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||mc.includes(i[a-1]))&&(o===i.length||mc.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function pd(n,e){return n==null?null:String(n)}function ls(n,e,t,i,r,s){var a=n.__className;if(a!==t||a===void 0){var o=dd(t,i,s);o==null?n.removeAttribute("class"):n.className=o,n.__className=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function Oi(n,e,t,i){var r=n.__style;if(r!==e){var s=pd(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=e}return i}function _c(n,e){return n===e||n?.[Vi]===e}function uf(n={},e,t,i){return Yh(()=>{var r,s;return ya(()=>{r=s,s=[],Le(()=>{n!==t(...s)&&(e(n,...s),r&&_c(t(...r),n)&&e(null,...r))})}),()=>{ti(()=>{s&&_c(t(...s),n)&&e(null,...s)})}}),n}function Ea(n=!1){const e=xt,t=e.l.u;if(!t)return;let i=()=>ed(e.s);if(n){let r=0,s={};const a=Cl(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});i=()=>N(a)}t.b.length&&Xh(()=>{gc(e,i),vo(t.b)}),Eo(()=>{const r=Le(()=>t.m.map(ih));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&Eo(()=>{gc(e,i),vo(t.a)})}function gc(n,e){if(n.l.s)for(const t of n.l.s)N(t);e()}let Cs=!1;function md(n){var e=Cs;try{return Cs=!1,[n(),Cs]}finally{Cs=e}}function Fl(n,e,t,i){var r=!Br||(t&xh)!==0,s=(t&Sh)!==0,a=i,o=!0,l=()=>(o&&(o=!1,a=i),a),c;{var u=Vi in n||rh in n;c=Er(n,e)?.set??(u&&e in n?y=>n[e]=y:void 0)}var f,h=!1;[f,h]=md(()=>n[e]);var m;if(r?m=()=>{var y=n[e];return y===void 0?l():(o=!0,y)}:m=()=>{var y=n[e];return y!==void 0&&(a=void 0),y===void 0?a:y},r&&(t&Mh)===0)return m;if(c){var v=n.$$legacy;return(function(y,b){return arguments.length>0?((!r||!b||v||h)&&c(b?m():y),y):m()})}var x=!1,d=Pl(()=>(x=!1,m()));N(d);var p=lt;return(function(y,b){if(arguments.length>0){const E=b?N(d):r&&s?yr(y):y;return ot(d,E),x=!0,a!==void 0&&(a=E),y}return yi&&x||(p.f&ei)!==0?d.v:N(d)})}function Ms(n){xt===null&&Cu(),Br&&xt.l!==null?_d(xt).m.push(n):Eo(()=>{const e=Le(n);if(typeof e=="function")return e})}function ff(n){xt===null&&Cu(),Ms(()=>()=>Le(n))}function _d(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const gd="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(gd);wh();const Ol="182",vd=0,vc=1,xd=2,sa=1,Md=2,ss=3,Ei=0,Qt=1,Tn=2,ni=0,br=1,En=2,xc=3,Mc=4,Sd=5,Ui=100,yd=101,Ed=102,bd=103,Td=104,Ad=200,wd=201,Rd=202,Cd=203,Ao=204,wo=205,Pd=206,Dd=207,Ld=208,Id=209,Ud=210,Nd=211,Fd=212,Od=213,Bd=214,Ro=0,Co=1,Po=2,Lr=3,Do=4,Lo=5,Io=6,Uo=7,hf=0,zd=1,Vd=2,Bn=0,df=1,pf=2,mf=3,Bl=4,_f=5,gf=6,vf=7,xf=300,qi=301,Ir=302,No=303,Fo=304,ba=306,Oo=1e3,Qn=1001,Bo=1002,It=1003,Gd=1004,Ps=1005,zt=1006,Ia=1007,Bi=1008,on=1009,Mf=1010,Sf=1011,fs=1012,zl=1013,Gn=1014,Fn=1015,ri=1016,Vl=1017,Gl=1018,hs=1020,yf=35902,Ef=35899,bf=1021,Tf=1022,Rn=1023,si=1026,zi=1027,Af=1028,kl=1029,Ur=1030,Hl=1031,Wl=1033,aa=33776,oa=33777,la=33778,ca=33779,zo=35840,Vo=35841,Go=35842,ko=35843,Ho=36196,Wo=37492,Xo=37496,qo=37488,Yo=37489,$o=37490,jo=37491,Ko=37808,Zo=37809,Jo=37810,Qo=37811,el=37812,tl=37813,nl=37814,il=37815,rl=37816,sl=37817,al=37818,ol=37819,ll=37820,cl=37821,ul=36492,fl=36494,hl=36495,dl=36283,pl=36284,ml=36285,_l=36286,kd=3200,wf=0,Hd=1,_i="",pn="srgb",Nr="srgb-linear",pa="linear",ut="srgb",er=7680,Sc=519,Wd=512,Xd=513,qd=514,Xl=515,Yd=516,$d=517,ql=518,jd=519,gl=35044,yc="300 es",On=2e3,ma=2001;function Rf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kd(){const n=_a("canvas");return n.style.display="block",n}const Ec={};function ga(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function nt(...n){const e="THREE."+n.shift();console.error(e,...n)}function ds(...n){const e=n.join(" ");e in Ec||(Ec[e]=!0,Ve(...n))}function Zd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ua=Math.PI/180,vl=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function Jd(n,e){return(n%e+e)%e}function Na(n,e,t){return(1-t)*n+t*e}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ss{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],m=s[a+1],v=s[a+2],x=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==h||c!==m||u!==v){let d=l*h+c*m+u*v+f*x;d<0&&(h=-h,m=-m,v=-v,x=-x,d=-d);let p=1-o;if(d<.9995){const y=Math.acos(d),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,l=l*p+h*o,c=c*p+m*o,u=u*p+v*o,f=f*p+x*o}else{l=l*p+h*o,c=c*p+m*o,u=u*p+v*o,f=f*p+x*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*m-c*h,e[t+1]=l*v+u*h+c*f-o*m,e[t+2]=c*v+u*m+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new O,bc=new Ss;class Xe{constructor(e,t,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],x=r[0],d=r[3],p=r[6],y=r[1],b=r[4],E=r[7],A=r[2],R=r[5],C=r[8];return s[0]=a*x+o*y+l*A,s[3]=a*d+o*b+l*R,s[6]=a*p+o*E+l*C,s[1]=c*x+u*y+f*A,s[4]=c*d+u*b+f*R,s[7]=c*p+u*E+f*C,s[2]=h*x+m*y+v*A,s[5]=h*d+m*b+v*R,s[8]=h*p+m*E+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,v=t*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Xe,Tc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){const n={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_i?pa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nr]:{primaries:e,whitePoint:i,transfer:pa,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const st=Qd();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let tr;class ep{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{tr===void 0&&(tr=_a("canvas")),tr.width=e.width,tr.height=e.height;const r=tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ii(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tp=0;class Yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ba(r[a].image)):s.push(Ba(r[a]))}else s=Ba(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ep.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let np=0;const za=new O;class Vt extends Vr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Qn,r=Qn,s=zt,a=Bi,o=Rn,l=on,c=Vt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Si(),this.name="",this.source=new Yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=xf;Vt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],x=l[2],d=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,A=(p+1)/2,R=(u+h)/4,C=(f+x)/4,P=(v+d)/4;return b>E&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=C/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=P/s),this.set(i,r,s,t),this}let y=Math.sqrt((d-v)*(d-v)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-v)/y,this.y=(f-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends Vr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Vt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends ip{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cf extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rp extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ds.copy(i.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Ls.subVectors(this.max,qr),nr.subVectors(e.a,qr),ir.subVectors(e.b,qr),rr.subVectors(e.c,qr),ui.subVectors(ir,nr),fi.subVectors(rr,ir),Ai.subVectors(nr,rr);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ai.y,Ai.x,0];return!Va(t,nr,ir,rr,Ls)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,nr,ir,rr,Ls))?!1:(Is.crossVectors(ui,fi),t=[Is.x,Is.y,Is.z],Va(t,nr,ir,rr,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new O,new O,new O,new O,new O,new O,new O,new O],Mn=new O,Ds=new ys,nr=new O,ir=new O,rr=new O,ui=new O,fi=new O,Ai=new O,qr=new O,Ls=new O,Is=new O,wi=new O;function Va(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wi.fromArray(n,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const sp=new ys,Yr=new O,Ga=new O;class Es{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(Ga)),this.expandByPoint(Yr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new O,ka=new O,Us=new O,hi=new O,Ha=new O,Ns=new O,Wa=new O;class Ta{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ka.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(ka);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Us),o=hi.dot(this.direction),l=-hi.dot(Us),c=hi.lengthSq(),u=Math.abs(1-a*a);let f,h,m,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ka).addScaledVector(Us,h),m}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,r,s){Ha.subVectors(t,e),Ns.subVectors(i,e),Wa.crossVectors(Ha,Ns);let a=this.direction.dot(Wa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const l=o*this.direction.dot(Ns.crossVectors(hi,Ns));if(l<0)return null;const c=o*this.direction.dot(Ha.cross(hi));if(c<0||l+c>a)return null;const u=-o*hi.dot(Wa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,m,v,x,d){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,m,v,x,d)}set(e,t,i,r,s,a,o,l,c,u,f,h,m,v,x,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=v,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,v=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,x=c*f;t[0]=h+x*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,x=c*f;t[0]=h-x*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,v=o*u,x=o*f;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+v,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,m=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ap,e,op)}lookAt(e,t,i){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),di.crossVectors(i,nn),di.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),di.crossVectors(i,nn)),di.normalize(),Fs.crossVectors(nn,di),r[0]=di.x,r[4]=Fs.x,r[8]=nn.x,r[1]=di.y,r[5]=Fs.y,r[9]=nn.y,r[2]=di.z,r[6]=Fs.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],x=i[6],d=i[10],p=i[14],y=i[3],b=i[7],E=i[11],A=i[15],R=r[0],C=r[4],P=r[8],g=r[12],S=r[1],D=r[5],W=r[9],X=r[13],Q=r[2],K=r[6],j=r[10],H=r[14],re=r[3],me=r[7],de=r[11],_e=r[15];return s[0]=a*R+o*S+l*Q+c*re,s[4]=a*C+o*D+l*K+c*me,s[8]=a*P+o*W+l*j+c*de,s[12]=a*g+o*X+l*H+c*_e,s[1]=u*R+f*S+h*Q+m*re,s[5]=u*C+f*D+h*K+m*me,s[9]=u*P+f*W+h*j+m*de,s[13]=u*g+f*X+h*H+m*_e,s[2]=v*R+x*S+d*Q+p*re,s[6]=v*C+x*D+d*K+p*me,s[10]=v*P+x*W+d*j+p*de,s[14]=v*g+x*X+d*H+p*_e,s[3]=y*R+b*S+E*Q+A*re,s[7]=y*C+b*D+E*K+A*me,s[11]=y*P+b*W+E*j+A*de,s[15]=y*g+b*X+E*H+A*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],x=e[7],d=e[11],p=e[15],y=l*m-c*h,b=o*m-c*f,E=o*h-l*f,A=a*m-c*u,R=a*h-l*u,C=a*f-o*u;return t*(x*y-d*b+p*E)-i*(v*y-d*A+p*R)+r*(v*b-x*A+p*C)-s*(v*E-x*R+d*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],x=e[13],d=e[14],p=e[15],y=f*d*c-x*h*c+x*l*m-o*d*m-f*l*p+o*h*p,b=v*h*c-u*d*c-v*l*m+a*d*m+u*l*p-a*h*p,E=u*x*c-v*f*c+v*o*m-a*x*m-u*o*p+a*f*p,A=v*f*l-u*x*l-v*o*h+a*x*h+u*o*d-a*f*d,R=t*y+i*b+r*E+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=y*C,e[1]=(x*h*s-f*d*s-x*r*m+i*d*m+f*r*p-i*h*p)*C,e[2]=(o*d*s-x*l*s+x*r*c-i*d*c-o*r*p+i*l*p)*C,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*C,e[4]=b*C,e[5]=(u*d*s-v*h*s+v*r*m-t*d*m-u*r*p+t*h*p)*C,e[6]=(v*l*s-a*d*s-v*r*c+t*d*c+a*r*p-t*l*p)*C,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*C,e[8]=E*C,e[9]=(v*f*s-u*x*s-v*i*m+t*x*m+u*i*p-t*f*p)*C,e[10]=(a*x*s-v*o*s+v*i*c-t*x*c-a*i*p+t*o*p)*C,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*C,e[12]=A*C,e[13]=(u*x*r-v*f*r+v*i*h-t*x*h-u*i*d+t*f*d)*C,e[14]=(v*o*r-a*x*r-v*i*l+t*x*l+a*i*d-t*o*d)*C,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,v=s*f,x=a*u,d=a*f,p=o*f,y=l*c,b=l*u,E=l*f,A=i.x,R=i.y,C=i.z;return r[0]=(1-(x+p))*A,r[1]=(m+E)*A,r[2]=(v-b)*A,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(h+p))*R,r[6]=(d+y)*R,r[7]=0,r[8]=(v+b)*C,r[9]=(d-y)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=sr.set(r[0],r[1],r[2]).length();const a=sr.set(r[4],r[5],r[6]).length(),o=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Sn.copy(this);const c=1/s,u=1/a,f=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=On,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let v,x;if(l)v=s/(a-s),x=a*s/(a-s);else if(o===On)v=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ma)v=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=On,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let v,x;if(l)v=1/(a-s),x=a/(a-s);else if(o===On)v=-2/(a-s),x=-(a+s)/(a-s);else if(o===ma)v=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const sr=new O,Sn=new pt,ap=new O(0,0,0),op=new O(1,1,1),di=new O,Fs=new O,nn=new O,wc=new pt,Rc=new Ss;class kn{constructor(e=0,t=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lp=0;const Cc=new O,ar=new Ss,$n=new pt,Os=new O,$r=new O,cp=new O,up=new Ss,Pc=new O(1,0,0),Dc=new O(0,1,0),Lc=new O(0,0,1),Ic={type:"added"},fp={type:"removed"},or={type:"childadded",child:null},Xa={type:"childremoved",child:null};class wt extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new O,t=new kn,i=new Ss,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Xe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Os.copy(e):Os.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt($r,Os,this.up):$n.lookAt(Os,$r,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),ar.setFromRotationMatrix($n),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ic),or.child=e,this.dispatchEvent(or),or.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ic),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new O(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new O,jn=new O,qa=new O,Kn=new O,lr=new O,cr=new O,Uc=new O,Ya=new O,$a=new O,ja=new O,Ka=new Et,Za=new Et,Ja=new Et;class mn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),jn.subVectors(i,t),qa.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(jn),l=yn.dot(qa),c=jn.dot(jn),u=jn.dot(qa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ka,s.x),a.addScaledVector(Za,s.y),a.addScaledVector(Ja,s.z),a}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),jn.subVectors(e,t),yn.cross(jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),yn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;lr.subVectors(r,i),cr.subVectors(s,i),Ya.subVectors(e,i);const l=lr.dot(Ya),c=cr.dot(Ya);if(l<=0&&c<=0)return t.copy(i);$a.subVectors(e,r);const u=lr.dot($a),f=cr.dot($a);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(lr,a);ja.subVectors(e,s);const m=lr.dot(ja),v=cr.dot(ja);if(v>=0&&m<=v)return t.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(cr,o);const d=u*v-m*f;if(d<=0&&f-u>=0&&m-v>=0)return Uc.subVectors(s,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(Uc,o);const p=1/(d+x+h);return a=x*p,o=h*p,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=Jd(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Qa(a,s,e+1/3),this.g=Qa(a,s,e),this.b=Qa(a,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=Pf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return st.workingToColorSpace(Ot.copy(this),e),Math.round(Je(Ot.r*255,0,255))*65536+Math.round(Je(Ot.g*255,0,255))*256+Math.round(Je(Ot.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=pn){st.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Bs);const i=Na(pi.h,Bs.h,t),r=Na(pi.s,Bs.s,t),s=Na(pi.l,Bs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new We;We.NAMES=Pf;let hp=0;class bi extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=br,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=wo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ao&&(i.blendSrc=this.blendSrc),this.blendDst!==wo&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Df extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new O,zs=new ke;let dp=0;class Cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}}class Lf extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class If extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pp=0;const un=new pt,eo=new wt,ur=new O,rn=new ys,jr=new ys,Pt=new O;class Xt extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rf(e)?If:Lf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(rn.min,jr.min),rn.expandByPoint(Pt),Pt.addVectors(rn.max,jr.max),rn.expandByPoint(Pt)):(rn.expandByPoint(jr.min),rn.expandByPoint(jr.max))}rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),Pt.add(ur)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new O,l[P]=new O;const c=new O,u=new O,f=new O,h=new ke,m=new ke,v=new ke,x=new O,d=new O;function p(P,g,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,g),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,g),v.fromBufferAttribute(s,S),u.sub(c),f.sub(c),m.sub(h),v.sub(h);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(D),d.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(D),o[P].add(x),o[g].add(x),o[S].add(x),l[P].add(d),l[g].add(d),l[S].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,g=y.length;P<g;++P){const S=y[P],D=S.start,W=S.count;for(let X=D,Q=D+W;X<Q;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new O,E=new O,A=new O,R=new O;function C(P){A.fromBufferAttribute(r,P),R.copy(A);const g=o[P];b.copy(g),b.sub(A.multiplyScalar(A.dot(g))).normalize(),E.crossVectors(R,g);const D=E.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,g=y.length;P<g;++P){const S=y[P],D=S.start,W=S.count;for(let X=D,Q=D+W;X<Q;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let x=0,d=l.length;x<d;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let p=0;p<u;p++)h[v++]=c[m++]}return new Cn(h,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new pt,Ri=new Ta,Vs=new Es,Fc=new O,Gs=new O,ks=new O,Hs=new O,to=new O,Ws=new O,Oc=new O,Xs=new O;class Pn extends wt{constructor(e=new Xt,t=new Df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(to.fromBufferAttribute(f,e),a?Ws.addScaledVector(to,u):Ws.addScaledVector(to.sub(t),u))}t.add(Ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(Vs.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Vs,Fc)===null||Ri.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Nc.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(Nc),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const d=h[v],p=a[d.materialIndex],y=Math.max(d.start,m.start),b=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let E=y,A=b;E<A;E+=3){const R=o.getX(E),C=o.getX(E+1),P=o.getX(E+2);r=qs(this,p,e,i,c,u,f,R,C,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let d=v,p=x;d<p;d+=3){const y=o.getX(d),b=o.getX(d+1),E=o.getX(d+2);r=qs(this,a,e,i,c,u,f,y,b,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const d=h[v],p=a[d.materialIndex],y=Math.max(d.start,m.start),b=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let E=y,A=b;E<A;E+=3){const R=E,C=E+1,P=E+2;r=qs(this,p,e,i,c,u,f,R,C,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=v,p=x;d<p;d+=3){const y=d,b=d+1,E=d+2;r=qs(this,a,e,i,c,u,f,y,b,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function mp(n,e,t,i,r,s,a,o){let l;if(e.side===Qt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ei,o),l===null)return null;Xs.copy(o),Xs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xs);return c<t.near||c>t.far?null:{distance:c,point:Xs.clone(),object:n}}function qs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Gs),n.getVertexPosition(l,ks),n.getVertexPosition(c,Hs);const u=mp(n,e,t,i,Gs,ks,Hs,Oc);if(u){const f=new O;mn.getBarycoord(Oc,Gs,ks,Hs,f),r&&(u.uv=mn.getInterpolatedAttribute(r,o,l,c,f,new ke)),s&&(u.uv1=mn.getInterpolatedAttribute(s,o,l,c,f,new ke)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};mn.getNormal(Gs,ks,Hs,h.normal),u.face=h,u.barycoord=f}return u}class bs extends Xt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function v(x,d,p,y,b,E,A,R,C,P,g){const S=E/C,D=A/P,W=E/2,X=A/2,Q=R/2,K=C+1,j=P+1;let H=0,re=0;const me=new O;for(let de=0;de<j;de++){const _e=de*D-X;for(let Be=0;Be<K;Be++){const Fe=Be*S-W;me[x]=Fe*y,me[d]=_e*b,me[p]=Q,c.push(me.x,me.y,me.z),me[x]=0,me[d]=0,me[p]=R>0?1:-1,u.push(me.x,me.y,me.z),f.push(Be/C),f.push(1-de/P),H+=1}}for(let de=0;de<P;de++)for(let _e=0;_e<C;_e++){const Be=h+_e+K*de,Fe=h+_e+K*(de+1),rt=h+(_e+1)+K*(de+1),$e=h+(_e+1)+K*de;l.push(Be,Fe,$e),l.push(Fe,rt,$e),re+=6}o.addGroup(m,re,g),m+=re,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Fr(n[t]);for(const r in i)e[r]=i[r]}return e}function _p(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const gp={clone:Fr,merge:Ht};var vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nf extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new O,Bc=new ke,zc=new ke;class an extends Nf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,zc),t.subVectors(zc,Bc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,hr=1;class Mp extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(fr,hr,e,t);r.layers=this.layers,this.add(r);const s=new an(fr,hr,e,t);s.layers=this.layers,this.add(s);const a=new an(fr,hr,e,t);a.layers=this.layers,this.add(a);const o=new an(fr,hr,e,t);o.layers=this.layers,this.add(o);const l=new an(fr,hr,e,t);l.layers=this.layers,this.add(l);const c=new an(fr,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class jl extends Vt{constructor(e=[],t=qi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ff extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bs(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ni});s.uniforms.tEquirect.value=t;const a=new Pn(r,s),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=zt),new Mp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ys extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),p=this._getHandJoint(c,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Kl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Kl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yp extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ep{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new O;class va{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new va(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Li extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let dr;const Kr=new O,pr=new O,mr=new O,_r=new ke,Zr=new ke,Of=new pt,$s=new O,Jr=new O,js=new O,Vc=new ke,io=new ke,Gc=new ke;class gr extends wt{constructor(e=new Li){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ep(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new va(i,3,0,!1)),dr.setAttribute("uv",new va(i,2,3,!1))}this.geometry=dr,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ks($s.set(-.5,-.5,0),mr,a,pr,r,s),Ks(Jr.set(.5,-.5,0),mr,a,pr,r,s),Ks(js.set(.5,.5,0),mr,a,pr,r,s),Vc.set(0,0),io.set(1,0),Gc.set(1,1);let o=e.ray.intersectTriangle($s,Jr,js,!1,Kr);if(o===null&&(Ks(Jr.set(-.5,.5,0),mr,a,pr,r,s),io.set(0,1),o=e.ray.intersectTriangle($s,js,Jr,!1,Kr),o===null))return;const l=e.ray.origin.distanceTo(Kr);l<e.near||l>e.far||t.push({distance:l,point:Kr.clone(),uv:mn.getInterpolation(Kr,$s,Jr,js,Vc,io,Gc,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ks(n,e,t,i,r,s){_r.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Zr.x=s*_r.x-r*_r.y,Zr.y=r*_r.x+s*_r.y):Zr.copy(_r),n.copy(e),n.x+=Zr.x,n.y+=Zr.y,n.applyMatrix4(Of)}class bp extends Vt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=It,u=It,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ro=new O,Tp=new O,Ap=new Xe;class Ii{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ro.subVectors(i,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ap.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Es,wp=new ke(.5,.5),Zs=new O;class Zl{constructor(e=new Ii,t=new Ii,i=new Ii,r=new Ii,s=new Ii,a=new Ii){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],m=s[7],v=s[8],x=s[9],d=s[10],p=s[11],y=s[12],b=s[13],E=s[14],A=s[15];if(r[0].setComponents(c-a,m-u,p-v,A-y).normalize(),r[1].setComponents(c+a,m+u,p+v,A+y).normalize(),r[2].setComponents(c+o,m+f,p+x,A+b).normalize(),r[3].setComponents(c-o,m-f,p-x,A-b).normalize(),i)r[4].setComponents(l,h,d,E).normalize(),r[5].setComponents(c-l,m-h,p-d,A-E).normalize();else if(r[4].setComponents(c-l,m-h,p-d,A-E).normalize(),t===On)r[5].setComponents(c+l,m+h,p+d,A+E).normalize();else if(t===ma)r[5].setComponents(l,h,d,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=wp.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xl extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xa=new O,Ma=new O,kc=new pt,Qr=new Ta,Js=new Es,so=new O,Hc=new O;class Wc extends wt{constructor(e=new Xt,t=new xl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)xa.fromBufferAttribute(t,r-1),Ma.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=xa.distanceTo(Ma);e.setAttribute("lineDistance",new Wt(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;kc.copy(r).invert(),Qr.copy(e.ray).applyMatrix4(kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let x=m,d=v-1;x<d;x+=c){const p=u.getX(x),y=u.getX(x+1),b=Qs(this,e,Qr,l,p,y,x);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(v-1),d=u.getX(m),p=Qs(this,e,Qr,l,x,d,v-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let x=m,d=v-1;x<d;x+=c){const p=Qs(this,e,Qr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Qs(this,e,Qr,l,v-1,m,v-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qs(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(xa.fromBufferAttribute(o,r),Ma.fromBufferAttribute(o,s),t.distanceSqToSegment(xa,Ma,so,Hc)>i)return;so.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(so);if(!(c<e.near||c>e.far))return{distance:c,point:Hc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Bf extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xc=new pt,Ml=new Ta,ea=new Es,ta=new O;class Rp extends wt{constructor(e=new Xt,t=new Bf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),ea.radius+=s,e.ray.intersectsSphere(ea)===!1)return;Xc.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(Xc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=h,x=m;v<x;v++){const d=c.getX(v);ta.fromBufferAttribute(f,d),qc(ta,d,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=h,x=m;v<x;v++)ta.fromBufferAttribute(f,v),qc(ta,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qc(n,e,t,i,r,s,a){const o=Ml.distanceSqToPoint(n);if(o<t){const l=new O;Ml.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ao extends Vt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ps extends Vt{constructor(e,t,i=Gn,r,s,a,o=It,l=It,c,u=si,f=1){if(u!==si&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cp extends ps{constructor(e,t=Gn,i=qi,r,s,a=It,o=It,l,c=si){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zf extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Aa extends Xt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(s.slice(),3)),this.setAttribute("uv",new Wt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new O,E=new O,A=new O;for(let R=0;R<t.length;R+=3)m(t[R+0],b),m(t[R+1],E),m(t[R+2],A),l(b,E,A,y)}function l(y,b,E,A){const R=A+1,C=[];for(let P=0;P<=R;P++){C[P]=[];const g=y.clone().lerp(E,P/R),S=b.clone().lerp(E,P/R),D=R-P;for(let W=0;W<=D;W++)W===0&&P===R?C[P][W]=g:C[P][W]=g.clone().lerp(S,W/D)}for(let P=0;P<R;P++)for(let g=0;g<2*(R-P)-1;g++){const S=Math.floor(g/2);g%2===0?(h(C[P][S+1]),h(C[P+1][S]),h(C[P][S])):(h(C[P][S+1]),h(C[P+1][S+1]),h(C[P+1][S]))}}function c(y){const b=new O;for(let E=0;E<s.length;E+=3)b.x=s[E+0],b.y=s[E+1],b.z=s[E+2],b.normalize().multiplyScalar(y),s[E+0]=b.x,s[E+1]=b.y,s[E+2]=b.z}function u(){const y=new O;for(let b=0;b<s.length;b+=3){y.x=s[b+0],y.y=s[b+1],y.z=s[b+2];const E=d(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;a.push(E,1-A)}v(),f()}function f(){for(let y=0;y<a.length;y+=6){const b=a[y+0],E=a[y+2],A=a[y+4],R=Math.max(b,E,A),C=Math.min(b,E,A);R>.9&&C<.1&&(b<.2&&(a[y+0]+=1),E<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function m(y,b){const E=y*3;b.x=e[E+0],b.y=e[E+1],b.z=e[E+2]}function v(){const y=new O,b=new O,E=new O,A=new O,R=new ke,C=new ke,P=new ke;for(let g=0,S=0;g<s.length;g+=9,S+=6){y.set(s[g+0],s[g+1],s[g+2]),b.set(s[g+3],s[g+4],s[g+5]),E.set(s[g+6],s[g+7],s[g+8]),R.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),A.copy(y).add(b).add(E).divideScalar(3);const D=d(A);x(R,S+0,y,D),x(C,S+2,b,D),x(P,S+4,E,D)}}function x(y,b,E,A){A<0&&y.x===1&&(a[b]=y.x-1),E.x===0&&E.z===0&&(a[b]=A/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.vertices,e.indices,e.radius,e.detail)}}class Jl extends Aa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jl(e.radius,e.detail)}}class Pp{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,m=(a-u)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ke:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,r=[],s=[],a=[],o=new O,l=new pt;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Je(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Je(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Dp(n,e){const t=1-n;return t*t*e}function Lp(n,e){return 2*(1-n)*n*e}function Ip(n,e){return n*n*e}function oo(n,e,t,i){return Dp(n,e)+Lp(n,t)+Ip(n,i)}class Yc extends Pp{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(oo(e,r.x,s.x,a.x),oo(e,r.y,s.y,a.y),oo(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ql extends Aa{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ql(e.radius,e.detail)}}class wa extends Xt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],v=[],x=[],d=[];for(let p=0;p<u;p++){const y=p*h-a;for(let b=0;b<c;b++){const E=b*f-s;v.push(E,-y,0),x.push(0,0,1),d.push(b/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const b=y+c*p,E=y+c*(p+1),A=y+1+c*(p+1),R=y+1+c*p;m.push(b,E,R),m.push(E,A,R)}this.setIndex(m),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Up extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Np extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $c extends Np{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Fp extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Op extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ec extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const lo=new pt,jc=new O,Kc=new O;class Vf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bp extends Vf{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}}class vr extends ec{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class tc extends Nf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zp extends Vf{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class co extends ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new zp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Vp extends ec{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gp extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zc=new pt;class kp{constructor(e,t,i=0,r=1/0){this.ray=new Ta(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new $l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(e,t=!0,i=[]){return Sl(e,this,i,t),i.sort(Jc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Sl(e[r],this,i,t);return i.sort(Jc),i}}function Jc(n,e){return n.distance-e.distance}function Sl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Sl(s[a],e,t,!0)}}function Qc(n,e,t,i){const r=Hp(i);switch(t){case bf:return n*e;case Af:return n*e/r.components*r.byteLength;case kl:return n*e/r.components*r.byteLength;case Ur:return n*e*2/r.components*r.byteLength;case Hl:return n*e*2/r.components*r.byteLength;case Tf:return n*e*3/r.components*r.byteLength;case Rn:return n*e*4/r.components*r.byteLength;case Wl:return n*e*4/r.components*r.byteLength;case aa:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:case ko:return Math.max(n,16)*Math.max(e,8)/4;case zo:case Go:return Math.max(n,8)*Math.max(e,8)/2;case Ho:case Wo:case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case $o:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ul:case fl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ml:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hp(n){switch(n){case on:case Mf:return{byteLength:1,components:1};case fs:case Sf:case ri:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case Gn:case zl:case Fn:return{byteLength:4,components:1};case yf:case Ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function Gf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wp(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){const v=f[h],x=f[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){const x=f[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_m=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,__=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Xp,alphahash_pars_fragment:qp,alphamap_fragment:Yp,alphamap_pars_fragment:$p,alphatest_fragment:jp,alphatest_pars_fragment:Kp,aomap_fragment:Zp,aomap_pars_fragment:Jp,batching_pars_vertex:Qp,batching_vertex:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:rm,bumpmap_pars_fragment:sm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:um,color_pars_fragment:fm,color_pars_vertex:hm,color_vertex:dm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:_m,displacementmap_pars_vertex:gm,displacementmap_vertex:vm,emissivemap_fragment:xm,emissivemap_pars_fragment:Mm,colorspace_fragment:Sm,colorspace_pars_fragment:ym,envmap_fragment:Em,envmap_common_pars_fragment:bm,envmap_pars_fragment:Tm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Om,envmap_vertex:wm,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Im,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Nm,lights_pars_begin:Fm,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Gm,lights_physical_fragment:km,lights_physical_pars_fragment:Hm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Km,map_fragment:Zm,map_pars_fragment:Jm,map_particle_fragment:Qm,map_particle_pars_fragment:e_,metalnessmap_fragment:t_,metalnessmap_pars_fragment:n_,morphinstance_vertex:i_,morphcolor_vertex:r_,morphnormal_vertex:s_,morphtarget_pars_vertex:a_,morphtarget_vertex:o_,normal_fragment_begin:l_,normal_fragment_maps:c_,normal_pars_fragment:u_,normal_pars_vertex:f_,normal_vertex:h_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:p_,clearcoat_normal_fragment_maps:m_,clearcoat_pars_fragment:__,iridescence_pars_fragment:g_,opaque_fragment:v_,packing:x_,premultiplied_alpha_fragment:M_,project_vertex:S_,dithering_fragment:y_,dithering_pars_fragment:E_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:T_,shadowmap_pars_fragment:A_,shadowmap_pars_vertex:w_,shadowmap_vertex:R_,shadowmask_pars_fragment:C_,skinbase_vertex:P_,skinning_pars_vertex:D_,skinning_vertex:L_,skinnormal_vertex:I_,specularmap_fragment:U_,specularmap_pars_fragment:N_,tonemapping_fragment:F_,tonemapping_pars_fragment:O_,transmission_fragment:B_,transmission_pars_fragment:z_,uv_pars_fragment:V_,uv_pars_vertex:G_,uv_vertex:k_,worldpos_vertex:H_,background_vert:W_,background_frag:X_,backgroundCube_vert:q_,backgroundCube_frag:Y_,cube_vert:$_,cube_frag:j_,depth_vert:K_,depth_frag:Z_,distance_vert:J_,distance_frag:Q_,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:rg,meshbasic_frag:sg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:ug,meshnormal_frag:fg,meshphong_vert:hg,meshphong_frag:dg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:_g,meshtoon_frag:gg,points_vert:vg,points_frag:xg,shadow_vert:Mg,shadow_frag:Sg,sprite_vert:yg,sprite_frag:Eg},Se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},In={basic:{uniforms:Ht([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([Se.points,Se.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([Se.common,Se.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([Se.sprite,Se.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ht([Se.common,Se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ht([Se.lights,Se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};In.physical={uniforms:Ht([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const na={r:0,b:0,g:0},Pi=new kn,bg=new pt;function Tg(n,e,t,i,r,s,a){const o=new We(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function v(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function x(b){let E=!1;const A=v(b);A===null?p(o,l):A&&A.isColor&&(p(A,1),E=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(b,E){const A=v(E);A&&(A.isCubeTexture||A.mapping===ba)?(u===void 0&&(u=new Pn(new bs(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Fr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pi.copy(E.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Pi)),u.material.toneMapped=st.getTransfer(A.colorSpace)!==ut,(f!==A||h!==A.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Pn(new wa(2,2),new Hn({name:"BackgroundMaterial",uniforms:Fr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=st.getTransfer(A.colorSpace)!==ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,E){b.getRGB(na,Uf(n)),i.buffers.color.setClear(na.r,na.g,na.b,E,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:d,dispose:y}}function Ag(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,D,W,X,Q){let K=!1;const j=f(X,W,D);s!==j&&(s=j,c(s.object)),K=m(S,X,W,Q),K&&v(S,X,W,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(S,D,W,X),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,D,W){const X=W.wireframe===!0;let Q=i[S.id];Q===void 0&&(Q={},i[S.id]=Q);let K=Q[D.id];K===void 0&&(K={},Q[D.id]=K);let j=K[X];return j===void 0&&(j=h(l()),K[X]=j),j}function h(S){const D=[],W=[],X=[];for(let Q=0;Q<t;Q++)D[Q]=0,W[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:X,object:S,attributes:{},index:null}}function m(S,D,W,X){const Q=s.attributes,K=D.attributes;let j=0;const H=W.getAttributes();for(const re in H)if(H[re].location>=0){const de=Q[re];let _e=K[re];if(_e===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;j++}return s.attributesNum!==j||s.index!==X}function v(S,D,W,X){const Q={},K=D.attributes;let j=0;const H=W.getAttributes();for(const re in H)if(H[re].location>=0){let de=K[re];de===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),Q[re]=_e,j++}s.attributes=Q,s.attributesNum=j,s.index=X}function x(){const S=s.newAttributes;for(let D=0,W=S.length;D<W;D++)S[D]=0}function d(S){p(S,0)}function p(S,D){const W=s.newAttributes,X=s.enabledAttributes,Q=s.attributeDivisors;W[S]=1,X[S]===0&&(n.enableVertexAttribArray(S),X[S]=1),Q[S]!==D&&(n.vertexAttribDivisor(S,D),Q[S]=D)}function y(){const S=s.newAttributes,D=s.enabledAttributes;for(let W=0,X=D.length;W<X;W++)D[W]!==S[W]&&(n.disableVertexAttribArray(W),D[W]=0)}function b(S,D,W,X,Q,K,j){j===!0?n.vertexAttribIPointer(S,D,W,Q,K):n.vertexAttribPointer(S,D,W,X,Q,K)}function E(S,D,W,X){x();const Q=X.attributes,K=W.getAttributes(),j=D.defaultAttributeValues;for(const H in K){const re=K[H];if(re.location>=0){let me=Q[H];if(me===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),me!==void 0){const de=me.normalized,_e=me.itemSize,Be=e.get(me);if(Be===void 0)continue;const Fe=Be.buffer,rt=Be.type,$e=Be.bytesPerElement,Z=rt===n.INT||rt===n.UNSIGNED_INT||me.gpuType===zl;if(me.isInterleavedBufferAttribute){const ne=me.data,Ee=ne.stride,Oe=me.offset;if(ne.isInstancedInterleavedBuffer){for(let Te=0;Te<re.locationSize;Te++)p(re.location+Te,ne.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Te=0;Te<re.locationSize;Te++)d(re.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Te=0;Te<re.locationSize;Te++)b(re.location+Te,_e/re.locationSize,rt,de,Ee*$e,(Oe+_e/re.locationSize*Te)*$e,Z)}else{if(me.isInstancedBufferAttribute){for(let ne=0;ne<re.locationSize;ne++)p(re.location+ne,me.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ne=0;ne<re.locationSize;ne++)d(re.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ne=0;ne<re.locationSize;ne++)b(re.location+ne,_e/re.locationSize,rt,de,_e*$e,_e/re.locationSize*ne*$e,Z)}}else if(j!==void 0){const de=j[H];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(re.location,de);break;case 3:n.vertexAttrib3fv(re.location,de);break;case 4:n.vertexAttrib4fv(re.location,de);break;default:n.vertexAttrib1fv(re.location,de)}}}}y()}function A(){P();for(const S in i){const D=i[S];for(const W in D){const X=D[W];for(const Q in X)u(X[Q].object),delete X[Q];delete D[W]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const W in D){const X=D[W];for(const Q in X)u(X[Q].object),delete X[Q];delete D[W]}delete i[S.id]}function C(S){for(const D in i){const W=i[D];if(W[S.id]===void 0)continue;const X=W[S.id];for(const Q in X)u(X[Q].object),delete X[Q];delete W[S.id]}}function P(){g(),a=!0,s!==r&&(s=r,c(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:g,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:d,disableUnusedAttributes:y}}function wg(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x]*h[x];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Rn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==on&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:E,maxSamples:A,samples:R}}function Cg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ii,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,x=f.clipIntersection,d=f.clipShadows,p=n.get(f);if(!r||v===null||v.length===0||s&&!d)s?u(null):c();else{const y=s?0:i,b=y*4;let E=p.clippingState||null;l.value=E,E=u(v,h,b,m);for(let A=0;A!==b;++A)E[A]=t[A];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const x=f!==null?f.length:0;let d=null;if(x!==0){if(d=l.value,v!==!0||d===null){const p=m+x*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let b=0,E=m;b!==x;++b,E+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(d,E),d[E+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function Pg(n){let e=new WeakMap;function t(a,o){return o===No?a.mapping=qi:o===Fo&&(a.mapping=Ir),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===No||o===Fo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ff(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const gi=4,eu=[.125,.215,.35,.446,.526,.582],Ni=20,Dg=256,es=new tc,tu=new We;let uo=null,fo=0,ho=0,po=!1;const Lg=new O;class nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Lg}=s;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,ho),this._renderer.xr.enabled=po,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:ri,format:Rn,colorSpace:Nr,depthBuffer:!1},r=iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ig(s)),this._blurMaterial=Ng(s,e,t),this._ggxMaterial=Ug(s,e,t)}return r}_compileMaterial(e){const t=new Pn(new Xt,e);this._renderer.compile(t,es)}_sceneToCubeUV(e,t,i,r,s){const l=new an(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(tu),f.toneMapping=Bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new bs,new Df({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,d=x.material;let p=!1;const y=e.background;y?y.isColor&&(d.color.copy(y),e.background=null,p=!0):(d.color.copy(tu),p=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;xr(r,E*A,b>2?A:0,A,A),f.setRenderTarget(r),p&&f.render(x,l),f.render(e,l)}f.toneMapping=m,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,es)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,m=f*h,{_lodMax:v}=this,x=this._sizeLods[i],d=3*x*(i>v-gi?i-v+gi:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,xr(s,d,p,3*x,2*x),r.setRenderTarget(s),r.render(o,es),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,xr(e,d,p,3*x,2*x),r.setRenderTarget(e),r.render(o,es)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),x=s/v,d=isFinite(s)?1+Math.floor(u*x):Ni;d>Ni&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ni}`);const p=[];let y=0;for(let C=0;C<Ni;++C){const P=C/x,g=Math.exp(-P*P/2);p.push(g),C===0?y+=g:C<d&&(y+=2*g)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=v,h.mipInt.value=b-i;const E=this._sizeLods[r],A=3*E*(r>b-gi?r-b+gi:0),R=4*(this._cubeSize-E);xr(t,A,R,3*E,2*E),l.setRenderTarget(t),l.render(f,es)}}function Ig(n){const e=[],t=[],i=[];let r=n;const s=n-gi+1+eu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-gi?l=eu[a-n+gi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,x=3,d=2,p=1,y=new Float32Array(x*v*m),b=new Float32Array(d*v*m),E=new Float32Array(p*v*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,P=R>2?0:-1,g=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(g,x*v*R),b.set(h,d*v*R);const S=[R,R,R,R,R,R];E.set(S,p*v*R)}const A=new Xt;A.setAttribute("position",new Cn(y,x)),A.setAttribute("uv",new Cn(b,d)),A.setAttribute("faceIndex",new Cn(E,p)),i.push(new Pn(A,null)),r>gi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function iu(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ug(n,e,t){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ng(n,e,t){const i=new Float32Array(Ni),r=new O(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ru(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function su(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===No||l===Fo,u=l===qi||l===Ir;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new nu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new nu(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Og(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ds("WebGLRenderer: "+i+" extension not supported."),r}}}function Bg(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const y=m.array;x=m.version;for(let b=0,E=y.length;b<E;b+=3){const A=y[b+0],R=y[b+1],C=y[b+2];h.push(A,R,R,C,C,A)}}else if(v!==void 0){const y=v.array;x=v.version;for(let b=0,E=y.length/3-1;b<E;b+=3){const A=b+0,R=b+1,C=b+2;h.push(A,R,R,C,C,A)}}else return;const d=new(Rf(h)?If:Lf)(h,1);d.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zg(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function c(h,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,h*a,v),t.update(m,i,v))}function u(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,v);let d=0;for(let p=0;p<v;p++)d+=m[p];t.update(d,i,1)}function f(h,m,v,x){if(v===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h.length;p++)c(h[p]/a,m[p],x[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,v);let p=0;for(let y=0;y<v;y++)p+=m[y]*x[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Vg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gg(n,e,t){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),x===!0&&(E=2),d===!0&&(E=3);let A=o.attributes.position.count*E,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*f),P=new Cf(C,A,R,f);P.type=Fn,P.needsUpdate=!0;const g=E*4;for(let D=0;D<f;D++){const W=p[D],X=y[D],Q=b[D],K=A*R*4*D;for(let j=0;j<W.count;j++){const H=j*g;v===!0&&(r.fromBufferAttribute(W,j),C[K+H+0]=r.x,C[K+H+1]=r.y,C[K+H+2]=r.z,C[K+H+3]=0),x===!0&&(r.fromBufferAttribute(X,j),C[K+H+4]=r.x,C[K+H+5]=r.y,C[K+H+6]=r.z,C[K+H+7]=0),d===!0&&(r.fromBufferAttribute(Q,j),C[K+H+8]=r.x,C[K+H+9]=r.y,C[K+H+10]=r.z,C[K+H+11]=Q.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new ke(A,R)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let d=0;d<c.length;d++)v+=c[d];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function kg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Hg={[df]:"LINEAR_TONE_MAPPING",[pf]:"REINHARD_TONE_MAPPING",[mf]:"CINEON_TONE_MAPPING",[Bl]:"ACES_FILMIC_TONE_MAPPING",[gf]:"AGX_TONE_MAPPING",[vf]:"NEUTRAL_TONE_MAPPING",[_f]:"CUSTOM_TONE_MAPPING"};function Wg(n,e,t,i,r){const s=new zn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new zn(e,t,{type:ri,depthBuffer:!1,stencilBuffer:!1}),o=new Xt;o.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const l=new Up({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Pn(o,l),u=new tc(-1,1,1,-1,0,1);let f=null,h=null,m=!1,v,x=null,d=[],p=!1;this.setSize=function(y,b){s.setSize(y,b),a.setSize(y,b);for(let E=0;E<d.length;E++){const A=d[E];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){d=y,p=d.length>0&&d[0].isRenderPass===!0;const b=s.width,E=s.height;for(let A=0;A<d.length;A++){const R=d[A];R.setSize&&R.setSize(b,E)}},this.begin=function(y,b){if(m||y.toneMapping===Bn&&d.length===0)return!1;if(x=b,b!==null){const E=b.width,A=b.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return p===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=Bn,!0},this.hasRenderPass=function(){return p},this.end=function(y,b){y.toneMapping=v,m=!0;let E=s,A=a;for(let R=0;R<d.length;R++){const C=d[R];if(C.enabled!==!1&&(C.render(y,A,E,b),C.needsSwap!==!1)){const P=E;E=A,A=P}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,l.defines={},st.getTransfer(f)===ut&&(l.defines.SRGB_TRANSFER="");const R=Hg[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(x),y.render(c,u),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const kf=new Vt,yl=new ps(1,1),Hf=new Cf,Wf=new rp,Xf=new jl,au=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),uu=new Float32Array(4);function Gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=au[r];if(s===void 0&&(s=new Float32Array(r),au[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ca(n,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),Ct(t,i)}}function Kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;cu.set(i),n.uniformMatrix3fv(this.addr,!1,cu),Ct(t,i)}}function Zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),Ct(t,i)}}function Jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function n0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function a0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yl.compareFunction=t.isReversedDepthBuffer()?ql:Xl,s=yl):s=kf,t.setTexture2D(e||s,r)}function o0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wf,r)}function l0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xf,r)}function c0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hf,r)}function u0(n){switch(n){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return $g;case 35674:return jg;case 35675:return Kg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function f0(n,e){n.uniform1fv(this.addr,e)}function h0(n,e){const t=Gr(e,this.size,2);n.uniform2fv(this.addr,t)}function d0(n,e){const t=Gr(e,this.size,3);n.uniform3fv(this.addr,t)}function p0(n,e){const t=Gr(e,this.size,4);n.uniform4fv(this.addr,t)}function m0(n,e){const t=Gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _0(n,e){const t=Gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function g0(n,e){const t=Gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function v0(n,e){n.uniform1iv(this.addr,e)}function x0(n,e){n.uniform2iv(this.addr,e)}function M0(n,e){n.uniform3iv(this.addr,e)}function S0(n,e){n.uniform4iv(this.addr,e)}function y0(n,e){n.uniform1uiv(this.addr,e)}function E0(n,e){n.uniform2uiv(this.addr,e)}function b0(n,e){n.uniform3uiv(this.addr,e)}function T0(n,e){n.uniform4uiv(this.addr,e)}function A0(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=yl:a=kf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function w0(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wf,s[a])}function R0(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xf,s[a])}function C0(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hf,s[a])}function P0(n){switch(n){case 5126:return f0;case 35664:return h0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return _0;case 35676:return g0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return y0;case 36294:return E0;case 36295:return b0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}class D0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}}class L0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}}class I0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function fu(n,e){n.seq.push(e),n.map[e.id]=e}function U0(n,e,t){const i=n.name,r=i.length;for(mo.lastIndex=0;;){const s=mo.exec(i),a=mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){fu(t,c===void 0?new D0(o,n,e):new L0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new I0(o),fu(t,f)),t=f}}}class ua{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);U0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function hu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const N0=37297;let F0=0;function O0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const du=new Xe;function B0(n){st._getMatrix(du,st.workingColorSpace,n);const e=`mat3( ${du.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case pa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+O0(n.getShaderSource(e),o)}else return s}function z0(n,e){const t=B0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const V0={[df]:"Linear",[pf]:"Reinhard",[mf]:"Cineon",[Bl]:"ACESFilmic",[gf]:"AgX",[vf]:"Neutral",[_f]:"Custom"};function G0(n,e){const t=V0[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new O;function k0(){st.getLuminanceCoefficients(ia);const n=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function W0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function X0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function as(n){return n!==""}function mu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace(q0,$0)}const Y0=new Map;function $0(n,e){let t=Ye[e];if(t===void 0){const i=Y0.get(e);if(i!==void 0)t=Ye[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(n){return n.replace(j0,K0)}function K0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Z0={[sa]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function J0(n){return Z0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q0={[qi]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE_UV"};function ev(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Q0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const tv={[Ir]:"ENVMAP_MODE_REFRACTION"};function nv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iv={[hf]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[Vd]:"ENVMAP_BLENDING_ADD"};function rv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":iv[n.combine]||"ENVMAP_BLENDING_NONE"}function sv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function av(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=J0(t),c=ev(t),u=nv(t),f=rv(t),h=sv(t),m=H0(t),v=W0(s),x=r.createProgram();let d,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(as).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(as).join(`
`),p.length>0&&(p+=`
`)):(d=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Bn?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,z0("linearToOutputTexel",t.outputColorSpace),k0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),a=El(a),a=mu(a,t),a=_u(a,t),o=El(o),o=mu(o,t),o=_u(o,t),a=gu(a),o=gu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+d+a,E=y+p+o,A=hu(r,r.VERTEX_SHADER,b),R=hu(r,r.FRAGMENT_SHADER,E);r.attachShader(x,A),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(D){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(x)||"",X=r.getShaderInfoLog(A)||"",Q=r.getShaderInfoLog(R)||"",K=W.trim(),j=X.trim(),H=Q.trim();let re=!0,me=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,R);else{const de=pu(r,A,"vertex"),_e=pu(r,R,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+K+`
`+de+`
`+_e)}else K!==""?Ve("WebGLProgram: Program Info Log:",K):(j===""||H==="")&&(me=!1);me&&(D.diagnostics={runnable:re,programLog:K,vertexShader:{log:j,prefix:d},fragmentShader:{log:H,prefix:p}})}r.deleteShader(A),r.deleteShader(R),P=new ua(r,x),g=X0(r,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let g;this.getAttributes=function(){return g===void 0&&C(this),g};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,N0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let ov=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cv(e),t.set(e,i)),i}}class cv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function uv(n,e,t,i,r,s,a){const o=new $l,l=new lv,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function d(g,S,D,W,X){const Q=W.fog,K=X.geometry,j=g.isMeshStandardMaterial?W.environment:null,H=(g.isMeshStandardMaterial?t:e).get(g.envMap||j),re=H&&H.mapping===ba?H.image.height:null,me=v[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&Ve("WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const de=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=de!==void 0?de.length:0;let Be=0;K.morphAttributes.position!==void 0&&(Be=1),K.morphAttributes.normal!==void 0&&(Be=2),K.morphAttributes.color!==void 0&&(Be=3);let Fe,rt,$e,Z;if(me){const tt=In[me];Fe=tt.vertexShader,rt=tt.fragmentShader}else Fe=g.vertexShader,rt=g.fragmentShader,l.update(g),$e=l.getVertexShaderID(g),Z=l.getFragmentShaderID(g);const ne=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Oe=X.isInstancedMesh===!0,Te=X.isBatchedMesh===!0,je=!!g.map,_t=!!g.matcap,Ke=!!H,Qe=!!g.aoMap,le=!!g.lightMap,Ae=!!g.bumpMap,Ge=!!g.normalMap,w=!!g.displacementMap,be=!!g.emissiveMap,Pe=!!g.metalnessMap,qe=!!g.roughnessMap,ge=g.anisotropy>0,T=g.clearcoat>0,_=g.dispersion>0,F=g.iridescence>0,I=g.sheen>0,V=g.transmission>0,U=ge&&!!g.anisotropyMap,B=T&&!!g.clearcoatMap,k=T&&!!g.clearcoatNormalMap,ee=T&&!!g.clearcoatRoughnessMap,ie=F&&!!g.iridescenceMap,q=F&&!!g.iridescenceThicknessMap,J=I&&!!g.sheenColorMap,ue=I&&!!g.sheenRoughnessMap,ae=!!g.specularMap,se=!!g.specularColorMap,Me=!!g.specularIntensityMap,L=V&&!!g.transmissionMap,fe=V&&!!g.thicknessMap,ce=!!g.gradientMap,pe=!!g.alphaMap,oe=g.alphaTest>0,te=!!g.alphaHash,he=!!g.extensions;let Re=Bn;g.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=n.toneMapping);const He={shaderID:me,shaderType:g.type,shaderName:g.name,vertexShader:Fe,fragmentShader:rt,defines:g.defines,customVertexShaderID:$e,customFragmentShaderID:Z,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:Te,batchingColor:Te&&X._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&X.instanceColor!==null,instancingMorph:Oe&&X.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Nr,alphaToCoverage:!!g.alphaToCoverage,map:je,matcap:_t,envMap:Ke,envMapMode:Ke&&H.mapping,envMapCubeUVHeight:re,aoMap:Qe,lightMap:le,bumpMap:Ae,normalMap:Ge,displacementMap:w,emissiveMap:be,normalMapObjectSpace:Ge&&g.normalMapType===Hd,normalMapTangentSpace:Ge&&g.normalMapType===wf,metalnessMap:Pe,roughnessMap:qe,anisotropy:ge,anisotropyMap:U,clearcoat:T,clearcoatMap:B,clearcoatNormalMap:k,clearcoatRoughnessMap:ee,dispersion:_,iridescence:F,iridescenceMap:ie,iridescenceThicknessMap:q,sheen:I,sheenColorMap:J,sheenRoughnessMap:ue,specularMap:ae,specularColorMap:se,specularIntensityMap:Me,transmission:V,transmissionMap:L,thicknessMap:fe,gradientMap:ce,opaque:g.transparent===!1&&g.blending===br&&g.alphaToCoverage===!1,alphaMap:pe,alphaTest:oe,alphaHash:te,combine:g.combine,mapUv:je&&x(g.map.channel),aoMapUv:Qe&&x(g.aoMap.channel),lightMapUv:le&&x(g.lightMap.channel),bumpMapUv:Ae&&x(g.bumpMap.channel),normalMapUv:Ge&&x(g.normalMap.channel),displacementMapUv:w&&x(g.displacementMap.channel),emissiveMapUv:be&&x(g.emissiveMap.channel),metalnessMapUv:Pe&&x(g.metalnessMap.channel),roughnessMapUv:qe&&x(g.roughnessMap.channel),anisotropyMapUv:U&&x(g.anisotropyMap.channel),clearcoatMapUv:B&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:k&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:q&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:J&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:ue&&x(g.sheenRoughnessMap.channel),specularMapUv:ae&&x(g.specularMap.channel),specularColorMapUv:se&&x(g.specularColorMap.channel),specularIntensityMapUv:Me&&x(g.specularIntensityMap.channel),transmissionMapUv:L&&x(g.transmissionMap.channel),thicknessMapUv:fe&&x(g.thicknessMap.channel),alphaMapUv:pe&&x(g.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ge||ge),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!K.attributes.uv&&(je||pe),fog:!!Q,useFog:g.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:X.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:je&&g.map.isVideoTexture===!0&&st.getTransfer(g.map.colorSpace)===ut,decodeVideoTextureEmissive:be&&g.emissiveMap.isVideoTexture===!0&&st.getTransfer(g.emissiveMap.colorSpace)===ut,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Tn,flipSided:g.side===Qt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:he&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&g.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)S.push(D),S.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(y(S,g),b(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function y(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function b(g,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),g.push(o.mask)}function E(g){const S=v[g.type];let D;if(S){const W=In[S];D=gp.clone(W.uniforms)}else D=g.uniforms;return D}function A(g,S){let D=f.get(S);return D!==void 0?++D.usedTimes:(D=new av(n,S,g,s),u.push(D),f.set(S,D)),D}function R(g){if(--g.usedTimes===0){const S=u.indexOf(g);u[S]=u[u.length-1],u.pop(),f.delete(g.cacheKey),g.destroy()}}function C(g){l.remove(g)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:E,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:P}}function fv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,v,x,d){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:d},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=x,p.group=d),e++,p}function o(f,h,m,v,x,d){const p=a(f,h,m,v,x,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(f,h,m,v,x,d){const p=a(f,h,m,v,x,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||hv),i.length>1&&i.sort(h||xu),r.length>1&&r.sort(h||xu)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function dv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Mu,n.set(i,[a])):r>=s.length?(a=new Mu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function pv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new We};break;case"SpotLight":t={position:new O,direction:new O,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function mv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _v=0;function gv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vv(n){const e=new pv,t=mv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new pt,a=new pt;function o(c){let u=0,f=0,h=0;for(let g=0;g<9;g++)i.probe[g].set(0,0,0);let m=0,v=0,x=0,d=0,p=0,y=0,b=0,E=0,A=0,R=0,C=0;c.sort(gv);for(let g=0,S=c.length;g<S;g++){const D=c[g],W=D.color,X=D.intensity,Q=D.distance;let K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ur?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=W.r*X,f+=W.g*X,h+=W.b*X;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],X);C++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,re=t.get(D);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,i.directionalShadow[m]=re,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=D.shadow.matrix,y++}i.directional[m]=j,m++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(W).multiplyScalar(X),j.distance=Q,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[x]=j;const H=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,H.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[x]=H.matrix,D.castShadow){const re=t.get(D);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,i.spotShadow[x]=re,i.spotShadowMap[x]=K,E++}x++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(W).multiplyScalar(X),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[d]=j,d++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const H=D.shadow,re=t.get(D);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,re.shadowCameraNear=H.camera.near,re.shadowCameraFar=H.camera.far,i.pointShadow[v]=re,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=D.shadow.matrix,b++}i.point[v]=j,v++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(X),j.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[p]=j,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==x||P.rectAreaLength!==d||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==E||P.numSpotMaps!==A||P.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=d,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,P.directionalLength=m,P.pointLength=v,P.spotLength=x,P.rectAreaLength=d,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=E,P.numSpotMaps=A,P.numLightProbes=C,i.version=_v++)}function l(c,u){let f=0,h=0,m=0,v=0,x=0;const d=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),f++}else if(b.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),m++}else if(b.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),a.identity(),s.copy(b.matrixWorld),s.premultiply(d),a.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),h++}else if(b.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:i}}function Su(n){const e=new vv(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function xv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Su(n),e.set(r,[o])):s>=a.length?(o=new Su(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Ev=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],yu=new pt,ts=new O,_o=new O;function bv(n,e,t){let i=new Zl;const r=new ke,s=new ke,a=new Et,o=new Fp,l=new Op,c={},u=t.maxTextureSize,f={[Ei]:Qt,[Qt]:Ei,[Tn]:Tn},h=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Mv,fragmentShader:Sv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pn(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let p=this.type;this.render=function(R,C,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;R.type===Md&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=sa);const g=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ni),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=p!==this.type;X&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(K=>K.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,K=R.length;Q<K;Q++){const j=R[Q],H=j.shadow;if(H===void 0){Ve("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const re=H.getFrameExtents();if(r.multiply(re),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,H.mapSize.y=s.y)),H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ss){if(j.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new zn(r.x,r.y,{format:Ur,type:ri,minFilter:zt,magFilter:zt,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new ps(r.x,r.y,Fn),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=si,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=It,H.map.depthTexture.magFilter=It}else{j.isPointLight?(H.map=new Ff(r.x),H.map.depthTexture=new Cp(r.x,Gn)):(H.map=new zn(r.x,r.y),H.map.depthTexture=new ps(r.x,r.y,Gn)),H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=si;const de=n.state.buffers.depth.getReversed();this.type===sa?(H.map.depthTexture.compareFunction=de?ql:Xl,H.map.depthTexture.minFilter=zt,H.map.depthTexture.magFilter=zt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=It,H.map.depthTexture.magFilter=It)}H.camera.updateProjectionMatrix()}const me=H.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<me;de++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,de),n.clear();else{de===0&&(n.setRenderTarget(H.map),n.clear());const _e=H.getViewport(de);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),W.viewport(a)}if(j.isPointLight){const _e=H.camera,Be=H.matrix,Fe=j.distance||_e.far;Fe!==_e.far&&(_e.far=Fe,_e.updateProjectionMatrix()),ts.setFromMatrixPosition(j.matrixWorld),_e.position.copy(ts),_o.copy(_e.position),_o.add(yv[de]),_e.up.copy(Ev[de]),_e.lookAt(_o),_e.updateMatrixWorld(),Be.makeTranslation(-ts.x,-ts.y,-ts.z),yu.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yu,_e.coordinateSystem,_e.reversedDepth)}else H.updateMatrices(j);i=H.getFrustum(),E(C,P,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===ss&&y(H,P),H.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(g,S,D)};function y(R,C){const P=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zn(r.x,r.y,{format:Ur,type:ri})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,P,m,x,null)}function b(R,C,P,g){let S=null;const D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const W=S.uuid,X=C.uuid;let Q=c[W];Q===void 0&&(Q={},c[W]=Q);let K=Q[X];K===void 0&&(K=S.clone(),Q[X]=K,C.addEventListener("dispose",A)),S=K}if(S.visible=C.visible,S.wireframe=C.wireframe,g===ss?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=n.properties.get(S);W.light=P}return S}function E(R,C,P,g,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ss)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const X=e.update(R),Q=R.material;if(Array.isArray(Q)){const K=X.groups;for(let j=0,H=K.length;j<H;j++){const re=K[j],me=Q[re.materialIndex];if(me&&me.visible){const de=b(R,me,g,S);R.onBeforeShadow(n,R,C,P,X,de,re),n.renderBufferDirect(P,null,X,de,R,re),R.onAfterShadow(n,R,C,P,X,de,re)}}}else if(Q.visible){const K=b(R,Q,g,S);R.onBeforeShadow(n,R,C,P,X,K,null),n.renderBufferDirect(P,null,X,K,R,null),R.onAfterShadow(n,R,C,P,X,K,null)}}const W=R.children;for(let X=0,Q=W.length;X<Q;X++)E(W[X],C,P,g,S)}function A(R){R.target.removeEventListener("dispose",A);for(const P in c){const g=c[P],S=R.target.uuid;S in g&&(g[S].dispose(),delete g[S])}}}const Tv={[Ro]:Co,[Po]:Io,[Do]:Uo,[Lr]:Lo,[Co]:Ro,[Io]:Po,[Uo]:Do,[Lo]:Lr};function Av(n,e){function t(){let L=!1;const fe=new Et;let ce=null;const pe=new Et(0,0,0,0);return{setMask:function(oe){ce!==oe&&!L&&(n.colorMask(oe,oe,oe,oe),ce=oe)},setLocked:function(oe){L=oe},setClear:function(oe,te,he,Re,He){He===!0&&(oe*=Re,te*=Re,he*=Re),fe.set(oe,te,he,Re),pe.equals(fe)===!1&&(n.clearColor(oe,te,he,Re),pe.copy(fe))},reset:function(){L=!1,ce=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,fe=!1,ce=null,pe=null,oe=null;return{setReversed:function(te){if(fe!==te){const he=e.get("EXT_clip_control");te?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),fe=te;const Re=oe;oe=null,this.setClear(Re)}},getReversed:function(){return fe},setTest:function(te){te?ne(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(te){ce!==te&&!L&&(n.depthMask(te),ce=te)},setFunc:function(te){if(fe&&(te=Tv[te]),pe!==te){switch(te){case Ro:n.depthFunc(n.NEVER);break;case Co:n.depthFunc(n.ALWAYS);break;case Po:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case Do:n.depthFunc(n.EQUAL);break;case Lo:n.depthFunc(n.GEQUAL);break;case Io:n.depthFunc(n.GREATER);break;case Uo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=te}},setLocked:function(te){L=te},setClear:function(te){oe!==te&&(fe&&(te=1-te),n.clearDepth(te),oe=te)},reset:function(){L=!1,ce=null,pe=null,oe=null,fe=!1}}}function r(){let L=!1,fe=null,ce=null,pe=null,oe=null,te=null,he=null,Re=null,He=null;return{setTest:function(tt){L||(tt?ne(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(tt){fe!==tt&&!L&&(n.stencilMask(tt),fe=tt)},setFunc:function(tt,qt,Yt){(ce!==tt||pe!==qt||oe!==Yt)&&(n.stencilFunc(tt,qt,Yt),ce=tt,pe=qt,oe=Yt)},setOp:function(tt,qt,Yt){(te!==tt||he!==qt||Re!==Yt)&&(n.stencilOp(tt,qt,Yt),te=tt,he=qt,Re=Yt)},setLocked:function(tt){L=tt},setClear:function(tt){He!==tt&&(n.clearStencil(tt),He=tt)},reset:function(){L=!1,fe=null,ce=null,pe=null,oe=null,te=null,he=null,Re=null,He=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],v=null,x=!1,d=null,p=null,y=null,b=null,E=null,A=null,R=null,C=new We(0,0,0),P=0,g=!1,S=null,D=null,W=null,X=null,Q=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,H=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=H>=1):re.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=H>=2);let me=null,de={};const _e=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Fe=new Et().fromArray(_e),rt=new Et().fromArray(Be);function $e(L,fe,ce,pe){const oe=new Uint8Array(4),te=n.createTexture();n.bindTexture(L,te),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<ce;he++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(fe+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return te}const Z={};Z[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Lr),Ae(!1),Ge(vc),ne(n.CULL_FACE),Qe(ni);function ne(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Ee(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Oe(L,fe){return f[L]!==fe?(n.bindFramebuffer(L,fe),f[L]=fe,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=fe),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Te(L,fe){let ce=m,pe=!1;if(L){ce=h.get(fe),ce===void 0&&(ce=[],h.set(fe,ce));const oe=L.textures;if(ce.length!==oe.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let te=0,he=oe.length;te<he;te++)ce[te]=n.COLOR_ATTACHMENT0+te;ce.length=oe.length,pe=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ce)}function je(L){return v!==L?(n.useProgram(L),v=L,!0):!1}const _t={[Ui]:n.FUNC_ADD,[yd]:n.FUNC_SUBTRACT,[Ed]:n.FUNC_REVERSE_SUBTRACT};_t[bd]=n.MIN,_t[Td]=n.MAX;const Ke={[Ad]:n.ZERO,[wd]:n.ONE,[Rd]:n.SRC_COLOR,[Ao]:n.SRC_ALPHA,[Ud]:n.SRC_ALPHA_SATURATE,[Ld]:n.DST_COLOR,[Pd]:n.DST_ALPHA,[Cd]:n.ONE_MINUS_SRC_COLOR,[wo]:n.ONE_MINUS_SRC_ALPHA,[Id]:n.ONE_MINUS_DST_COLOR,[Dd]:n.ONE_MINUS_DST_ALPHA,[Nd]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[Od]:n.CONSTANT_ALPHA,[Bd]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,fe,ce,pe,oe,te,he,Re,He,tt){if(L===ni){x===!0&&(Ee(n.BLEND),x=!1);return}if(x===!1&&(ne(n.BLEND),x=!0),L!==Sd){if(L!==d||tt!==g){if((p!==Ui||E!==Ui)&&(n.blendEquation(n.FUNC_ADD),p=Ui,E=Ui),tt)switch(L){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case En:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",L);break}else switch(L){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case En:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xc:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",L);break}y=null,b=null,A=null,R=null,C.set(0,0,0),P=0,d=L,g=tt}return}oe=oe||fe,te=te||ce,he=he||pe,(fe!==p||oe!==E)&&(n.blendEquationSeparate(_t[fe],_t[oe]),p=fe,E=oe),(ce!==y||pe!==b||te!==A||he!==R)&&(n.blendFuncSeparate(Ke[ce],Ke[pe],Ke[te],Ke[he]),y=ce,b=pe,A=te,R=he),(Re.equals(C)===!1||He!==P)&&(n.blendColor(Re.r,Re.g,Re.b,He),C.copy(Re),P=He),d=L,g=!1}function le(L,fe){L.side===Tn?Ee(n.CULL_FACE):ne(n.CULL_FACE);let ce=L.side===Qt;fe&&(ce=!ce),Ae(ce),L.blending===br&&L.transparent===!1?Qe(ni):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function Ge(L){L!==vd?(ne(n.CULL_FACE),L!==D&&(L===vc?n.cullFace(n.BACK):L===xd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),D=L}function w(L){L!==W&&(j&&n.lineWidth(L),W=L)}function be(L,fe,ce){L?(ne(n.POLYGON_OFFSET_FILL),(X!==fe||Q!==ce)&&(n.polygonOffset(fe,ce),X=fe,Q=ce)):Ee(n.POLYGON_OFFSET_FILL)}function Pe(L){L?ne(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function qe(L){L===void 0&&(L=n.TEXTURE0+K-1),me!==L&&(n.activeTexture(L),me=L)}function ge(L,fe,ce){ce===void 0&&(me===null?ce=n.TEXTURE0+K-1:ce=me);let pe=de[ce];pe===void 0&&(pe={type:void 0,texture:void 0},de[ce]=pe),(pe.type!==L||pe.texture!==fe)&&(me!==ce&&(n.activeTexture(ce),me=ce),n.bindTexture(L,fe||Z[L]),pe.type=L,pe.texture=fe)}function T(){const L=de[me];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function I(){try{n.texSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function V(){try{n.texSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function B(){try{n.compressedTexSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function k(){try{n.texStorage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function ee(){try{n.texStorage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function ie(){try{n.texImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function q(){try{n.texImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function J(L){Fe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function ue(L){rt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function ae(L,fe){let ce=c.get(fe);ce===void 0&&(ce=new WeakMap,c.set(fe,ce));let pe=ce.get(L);pe===void 0&&(pe=n.getUniformBlockIndex(fe,L.name),ce.set(L,pe))}function se(L,fe){const pe=c.get(fe).get(L);l.get(fe)!==pe&&(n.uniformBlockBinding(fe,pe,L.__bindingPointIndex),l.set(fe,pe))}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,de={},f={},h=new WeakMap,m=[],v=null,x=!1,d=null,p=null,y=null,b=null,E=null,A=null,R=null,C=new We(0,0,0),P=0,g=!1,S=null,D=null,W=null,X=null,Q=null,Fe.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Ee,bindFramebuffer:Oe,drawBuffers:Te,useProgram:je,setBlending:Qe,setMaterial:le,setFlipSided:Ae,setCullFace:Ge,setLineWidth:w,setPolygonOffset:be,setScissorTest:Pe,activeTexture:qe,bindTexture:ge,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:ie,texImage3D:q,updateUBOMapping:ae,uniformBlockBinding:se,texStorage2D:k,texStorage3D:ee,texSubImage2D:I,texSubImage3D:V,compressedTexSubImage2D:U,compressedTexSubImage3D:B,scissor:J,viewport:ue,reset:Me}}function wv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,_){return m?new OffscreenCanvas(T,_):_a("canvas")}function x(T,_,F){let I=1;const V=ge(T);if((V.width>F||V.height>F)&&(I=F/Math.max(V.width,V.height)),I<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const U=Math.floor(I*V.width),B=Math.floor(I*V.height);f===void 0&&(f=v(U,B));const k=_?v(U,B):f;return k.width=U,k.height=B,k.getContext("2d").drawImage(T,0,0,U,B),Ve("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+U+"x"+B+")."),k}else return"data"in T&&Ve("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),T;return T}function d(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,_,F,I,V=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let U=_;if(_===n.RED&&(F===n.FLOAT&&(U=n.R32F),F===n.HALF_FLOAT&&(U=n.R16F),F===n.UNSIGNED_BYTE&&(U=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(U=n.R8UI),F===n.UNSIGNED_SHORT&&(U=n.R16UI),F===n.UNSIGNED_INT&&(U=n.R32UI),F===n.BYTE&&(U=n.R8I),F===n.SHORT&&(U=n.R16I),F===n.INT&&(U=n.R32I)),_===n.RG&&(F===n.FLOAT&&(U=n.RG32F),F===n.HALF_FLOAT&&(U=n.RG16F),F===n.UNSIGNED_BYTE&&(U=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(U=n.RG8UI),F===n.UNSIGNED_SHORT&&(U=n.RG16UI),F===n.UNSIGNED_INT&&(U=n.RG32UI),F===n.BYTE&&(U=n.RG8I),F===n.SHORT&&(U=n.RG16I),F===n.INT&&(U=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(U=n.RGB8UI),F===n.UNSIGNED_SHORT&&(U=n.RGB16UI),F===n.UNSIGNED_INT&&(U=n.RGB32UI),F===n.BYTE&&(U=n.RGB8I),F===n.SHORT&&(U=n.RGB16I),F===n.INT&&(U=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(U=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(U=n.RGBA16UI),F===n.UNSIGNED_INT&&(U=n.RGBA32UI),F===n.BYTE&&(U=n.RGBA8I),F===n.SHORT&&(U=n.RGBA16I),F===n.INT&&(U=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(U=n.R11F_G11F_B10F)),_===n.RGBA){const B=V?pa:st.getTransfer(I);F===n.FLOAT&&(U=n.RGBA32F),F===n.HALF_FLOAT&&(U=n.RGBA16F),F===n.UNSIGNED_BYTE&&(U=B===ut?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function E(T,_){let F;return T?_===null||_===Gn||_===hs?F=n.DEPTH24_STENCIL8:_===Fn?F=n.DEPTH32F_STENCIL8:_===fs&&(F=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Gn||_===hs?F=n.DEPTH_COMPONENT24:_===Fn?F=n.DEPTH_COMPONENT32F:_===fs&&(F=n.DEPTH_COMPONENT16),F}function A(T,_){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==It&&T.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){const _=T.target;_.removeEventListener("dispose",R),P(_),_.isVideoTexture&&u.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),S(_)}function P(T){const _=i.get(T);if(_.__webglInit===void 0)return;const F=T.source,I=h.get(F);if(I){const V=I[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&g(T),Object.keys(I).length===0&&h.delete(F)}i.remove(T)}function g(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const F=T.source,I=h.get(F);delete I[_.__cacheKey],a.memory.textures--}function S(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(_.__webglFramebuffer[I]))for(let V=0;V<_.__webglFramebuffer[I].length;V++)n.deleteFramebuffer(_.__webglFramebuffer[I][V]);else n.deleteFramebuffer(_.__webglFramebuffer[I]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[I])}else{if(Array.isArray(_.__webglFramebuffer))for(let I=0;I<_.__webglFramebuffer.length;I++)n.deleteFramebuffer(_.__webglFramebuffer[I]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let I=0;I<_.__webglColorRenderbuffer.length;I++)_.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[I]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let I=0,V=F.length;I<V;I++){const U=i.get(F[I]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),a.memory.textures--),i.remove(F[I])}i.remove(T)}let D=0;function W(){D=0}function X(){const T=D;return T>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function Q(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function K(T,_){const F=i.get(T);if(T.isVideoTexture&&Pe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const I=T.image;if(I===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function j(T,_){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Z(F,T,_);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function H(T,_){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Z(F,T,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function re(T,_){const F=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){ne(F,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const me={[Oo]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},de={[It]:n.NEAREST,[Gd]:n.NEAREST_MIPMAP_NEAREST,[Ps]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},_e={[Wd]:n.NEVER,[jd]:n.ALWAYS,[Xd]:n.LESS,[Xl]:n.LEQUAL,[qd]:n.EQUAL,[ql]:n.GEQUAL,[Yd]:n.GREATER,[$d]:n.NOTEQUAL};function Be(T,_){if(_.type===Fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===Ia||_.magFilter===Ps||_.magFilter===Bi||_.minFilter===zt||_.minFilter===Ia||_.minFilter===Ps||_.minFilter===Bi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,me[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,me[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,me[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==Ps&&_.minFilter!==Bi||_.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));const I=_.source;let V=h.get(I);V===void 0&&(V={},h.set(I,V));const U=Q(_);if(U!==T.__cacheKey){V[U]===void 0&&(V[U]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),V[U].usedTimes++;const B=V[T.__cacheKey];B!==void 0&&(V[T.__cacheKey].usedTimes--,B.usedTimes===0&&g(_)),T.__cacheKey=U,T.__webglTexture=V[U].texture}return F}function rt(T,_,F){return Math.floor(Math.floor(T/F)/_)}function $e(T,_,F,I){const U=T.updateRanges;if(U.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,I,_.data);else{U.sort((q,J)=>q.start-J.start);let B=0;for(let q=1;q<U.length;q++){const J=U[B],ue=U[q],ae=J.start+J.count,se=rt(ue.start,_.width,4),Me=rt(J.start,_.width,4);ue.start<=ae+1&&se===Me&&rt(ue.start+ue.count-1,_.width,4)===se?J.count=Math.max(J.count,ue.start+ue.count-J.start):(++B,U[B]=ue)}U.length=B+1;const k=n.getParameter(n.UNPACK_ROW_LENGTH),ee=n.getParameter(n.UNPACK_SKIP_PIXELS),ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let q=0,J=U.length;q<J;q++){const ue=U[q],ae=Math.floor(ue.start/4),se=Math.ceil(ue.count/4),Me=ae%_.width,L=Math.floor(ae/_.width),fe=se,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Me,L,fe,ce,F,I,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,k),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,ie)}}function Z(T,_,F){let I=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(I=n.TEXTURE_3D);const V=Fe(T,_),U=_.source;t.bindTexture(I,T.__webglTexture,n.TEXTURE0+F);const B=i.get(U);if(U.version!==B.__version||V===!0){t.activeTexture(n.TEXTURE0+F);const k=st.getPrimaries(st.workingColorSpace),ee=_.colorSpace===_i?null:st.getPrimaries(_.colorSpace),ie=_.colorSpace===_i||k===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let q=x(_.image,!1,r.maxTextureSize);q=qe(_,q);const J=s.convert(_.format,_.colorSpace),ue=s.convert(_.type);let ae=b(_.internalFormat,J,ue,_.colorSpace,_.isVideoTexture);Be(I,_);let se;const Me=_.mipmaps,L=_.isVideoTexture!==!0,fe=B.__version===void 0||V===!0,ce=U.dataReady,pe=A(_,q);if(_.isDepthTexture)ae=E(_.format===zi,_.type),fe&&(L?t.texStorage2D(n.TEXTURE_2D,1,ae,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,ae,q.width,q.height,0,J,ue,null));else if(_.isDataTexture)if(Me.length>0){L&&fe&&t.texStorage2D(n.TEXTURE_2D,pe,ae,Me[0].width,Me[0].height);for(let oe=0,te=Me.length;oe<te;oe++)se=Me[oe],L?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,se.width,se.height,J,ue,se.data):t.texImage2D(n.TEXTURE_2D,oe,ae,se.width,se.height,0,J,ue,se.data);_.generateMipmaps=!1}else L?(fe&&t.texStorage2D(n.TEXTURE_2D,pe,ae,q.width,q.height),ce&&$e(_,q,J,ue)):t.texImage2D(n.TEXTURE_2D,0,ae,q.width,q.height,0,J,ue,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ae,Me[0].width,Me[0].height,q.depth);for(let oe=0,te=Me.length;oe<te;oe++)if(se=Me[oe],_.format!==Rn)if(J!==null)if(L){if(ce)if(_.layerUpdates.size>0){const he=Qc(se.width,se.height,_.format,_.type);for(const Re of _.layerUpdates){const He=se.data.subarray(Re*he/se.data.BYTES_PER_ELEMENT,(Re+1)*he/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Re,se.width,se.height,1,J,He)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,se.width,se.height,q.depth,J,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,ae,se.width,se.height,q.depth,0,se.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,se.width,se.height,q.depth,J,ue,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,ae,se.width,se.height,q.depth,0,J,ue,se.data)}else{L&&fe&&t.texStorage2D(n.TEXTURE_2D,pe,ae,Me[0].width,Me[0].height);for(let oe=0,te=Me.length;oe<te;oe++)se=Me[oe],_.format!==Rn?J!==null?L?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,se.width,se.height,J,se.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,ae,se.width,se.height,0,se.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,se.width,se.height,J,ue,se.data):t.texImage2D(n.TEXTURE_2D,oe,ae,se.width,se.height,0,J,ue,se.data)}else if(_.isDataArrayTexture)if(L){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ae,q.width,q.height,q.depth),ce)if(_.layerUpdates.size>0){const oe=Qc(q.width,q.height,_.format,_.type);for(const te of _.layerUpdates){const he=q.data.subarray(te*oe/q.data.BYTES_PER_ELEMENT,(te+1)*oe/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,q.width,q.height,1,J,ue,he)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,J,ue,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,q.width,q.height,q.depth,0,J,ue,q.data);else if(_.isData3DTexture)L?(fe&&t.texStorage3D(n.TEXTURE_3D,pe,ae,q.width,q.height,q.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,J,ue,q.data)):t.texImage3D(n.TEXTURE_3D,0,ae,q.width,q.height,q.depth,0,J,ue,q.data);else if(_.isFramebufferTexture){if(fe)if(L)t.texStorage2D(n.TEXTURE_2D,pe,ae,q.width,q.height);else{let oe=q.width,te=q.height;for(let he=0;he<pe;he++)t.texImage2D(n.TEXTURE_2D,he,ae,oe,te,0,J,ue,null),oe>>=1,te>>=1}}else if(Me.length>0){if(L&&fe){const oe=ge(Me[0]);t.texStorage2D(n.TEXTURE_2D,pe,ae,oe.width,oe.height)}for(let oe=0,te=Me.length;oe<te;oe++)se=Me[oe],L?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,J,ue,se):t.texImage2D(n.TEXTURE_2D,oe,ae,J,ue,se);_.generateMipmaps=!1}else if(L){if(fe){const oe=ge(q);t.texStorage2D(n.TEXTURE_2D,pe,ae,oe.width,oe.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J,ue,q)}else t.texImage2D(n.TEXTURE_2D,0,ae,J,ue,q);d(_)&&p(I),B.__version=U.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,F){if(_.image.length!==6)return;const I=Fe(T,_),V=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const U=i.get(V);if(V.version!==U.__version||I===!0){t.activeTexture(n.TEXTURE0+F);const B=st.getPrimaries(st.workingColorSpace),k=_.colorSpace===_i?null:st.getPrimaries(_.colorSpace),ee=_.colorSpace===_i||B===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ie=_.isCompressedTexture||_.image[0].isCompressedTexture,q=_.image[0]&&_.image[0].isDataTexture,J=[];for(let te=0;te<6;te++)!ie&&!q?J[te]=x(_.image[te],!0,r.maxCubemapSize):J[te]=q?_.image[te].image:_.image[te],J[te]=qe(_,J[te]);const ue=J[0],ae=s.convert(_.format,_.colorSpace),se=s.convert(_.type),Me=b(_.internalFormat,ae,se,_.colorSpace),L=_.isVideoTexture!==!0,fe=U.__version===void 0||I===!0,ce=V.dataReady;let pe=A(_,ue);Be(n.TEXTURE_CUBE_MAP,_);let oe;if(ie){L&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Me,ue.width,ue.height);for(let te=0;te<6;te++){oe=J[te].mipmaps;for(let he=0;he<oe.length;he++){const Re=oe[he];_.format!==Rn?ae!==null?L?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Re.width,Re.height,ae,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Me,Re.width,Re.height,0,Re.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Re.width,Re.height,ae,se,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Me,Re.width,Re.height,0,ae,se,Re.data)}}}else{if(oe=_.mipmaps,L&&fe){oe.length>0&&pe++;const te=ge(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Me,te.width,te.height)}for(let te=0;te<6;te++)if(q){L?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,J[te].width,J[te].height,ae,se,J[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Me,J[te].width,J[te].height,0,ae,se,J[te].data);for(let he=0;he<oe.length;he++){const He=oe[he].image[te].image;L?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,He.width,He.height,ae,se,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Me,He.width,He.height,0,ae,se,He.data)}}else{L?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ae,se,J[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Me,ae,se,J[te]);for(let he=0;he<oe.length;he++){const Re=oe[he];L?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,ae,se,Re.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Me,ae,se,Re.image[te])}}}d(_)&&p(n.TEXTURE_CUBE_MAP),U.__version=V.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Ee(T,_,F,I,V,U){const B=s.convert(F.format,F.colorSpace),k=s.convert(F.type),ee=b(F.internalFormat,B,k,F.colorSpace),ie=i.get(_),q=i.get(F);if(q.__renderTarget=_,!ie.__hasExternalTextures){const J=Math.max(1,_.width>>U),ue=Math.max(1,_.height>>U);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,U,ee,J,ue,_.depth,0,B,k,null):t.texImage2D(V,U,ee,J,ue,0,B,k,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,V,q.__webglTexture,0,w(_)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,V,q.__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(T,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const I=_.depthTexture,V=I&&I.isDepthTexture?I.type:null,U=E(_.stencilBuffer,V),B=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(_),U,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(_),U,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,U,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,T)}else{const I=_.textures;for(let V=0;V<I.length;V++){const U=I[V],B=s.convert(U.format,U.colorSpace),k=s.convert(U.type),ee=b(U.internalFormat,B,k,U.colorSpace);be(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(_),ee,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(T,_,F){const I=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(_.depthTexture);if(V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),I){if(V.__webglInit===void 0&&(V.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),V.__webglTexture===void 0){V.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Be(n.TEXTURE_CUBE_MAP,_.depthTexture);const ie=s.convert(_.depthTexture.format),q=s.convert(_.depthTexture.type);let J;_.depthTexture.format===si?J=n.DEPTH_COMPONENT24:_.depthTexture.format===zi&&(J=n.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,J,_.width,_.height,0,ie,q,null)}}else K(_.depthTexture,0);const U=V.__webglTexture,B=w(_),k=I?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,ee=_.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===si)be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,k,U,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,ee,k,U,0);else if(_.depthTexture.format===zi)be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,k,U,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,ee,k,U,0);else throw new Error("Unknown depthTexture format")}function je(T){const _=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const I=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),I){const V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,I.removeEventListener("dispose",V)};I.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=I}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let I=0;I<6;I++)Te(_.__webglFramebuffer[I],T,I);else{const I=T.texture.mipmaps;I&&I.length>0?Te(_.__webglFramebuffer[0],T,0):Te(_.__webglFramebuffer,T,0)}else if(F){_.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[I]),_.__webglDepthbuffer[I]===void 0)_.__webglDepthbuffer[I]=n.createRenderbuffer(),Oe(_.__webglDepthbuffer[I],T,!1);else{const V=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=_.__webglDepthbuffer[I];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,U)}}else{const I=T.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Oe(_.__webglDepthbuffer,T,!1);else{const V=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,U)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(T,_,F){const I=i.get(T);_!==void 0&&Ee(I.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&je(T)}function Ke(T){const _=T.texture,F=i.get(T),I=i.get(_);T.addEventListener("dispose",C);const V=T.textures,U=T.isWebGLCubeRenderTarget===!0,B=V.length>1;if(B||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=_.version,a.memory.textures++),U){F.__webglFramebuffer=[];for(let k=0;k<6;k++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[k]=[];for(let ee=0;ee<_.mipmaps.length;ee++)F.__webglFramebuffer[k][ee]=n.createFramebuffer()}else F.__webglFramebuffer[k]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let k=0;k<_.mipmaps.length;k++)F.__webglFramebuffer[k]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(B)for(let k=0,ee=V.length;k<ee;k++){const ie=i.get(V[k]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&be(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let k=0;k<V.length;k++){const ee=V[k];F.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[k]);const ie=s.convert(ee.format,ee.colorSpace),q=s.convert(ee.type),J=b(ee.internalFormat,ie,q,ee.colorSpace,T.isXRRenderTarget===!0),ue=w(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,F.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),Be(n.TEXTURE_CUBE_MAP,_);for(let k=0;k<6;k++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ee(F.__webglFramebuffer[k][ee],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee);else Ee(F.__webglFramebuffer[k],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);d(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){for(let k=0,ee=V.length;k<ee;k++){const ie=V[k],q=i.get(ie);let J=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,q.__webglTexture),Be(J,ie),Ee(F.__webglFramebuffer,T,ie,n.COLOR_ATTACHMENT0+k,J,0),d(ie)&&p(J)}t.unbindTexture()}else{let k=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(k=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(k,I.__webglTexture),Be(k,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ee(F.__webglFramebuffer[ee],T,_,n.COLOR_ATTACHMENT0,k,ee);else Ee(F.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,k,0);d(_)&&p(k),t.unbindTexture()}T.depthBuffer&&je(T)}function Qe(T){const _=T.textures;for(let F=0,I=_.length;F<I;F++){const V=_[F];if(d(V)){const U=y(T),B=i.get(V).__webglTexture;t.bindTexture(U,B),p(U),t.unbindTexture()}}}const le=[],Ae=[];function Ge(T){if(T.samples>0){if(be(T)===!1){const _=T.textures,F=T.width,I=T.height;let V=n.COLOR_BUFFER_BIT;const U=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=i.get(T),k=_.length>1;if(k)for(let ie=0;ie<_.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);const ee=T.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let ie=0;ie<_.length;ie++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,B.__webglColorRenderbuffer[ie]);const q=i.get(_[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,F,I,0,0,F,I,V,n.NEAREST),l===!0&&(le.length=0,Ae.length=0,le.push(n.COLOR_ATTACHMENT0+ie),T.depthBuffer&&T.resolveDepthBuffer===!1&&(le.push(U),Ae.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ae)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let ie=0;ie<_.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,B.__webglColorRenderbuffer[ie]);const q=i.get(_[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function w(T){return Math.min(r.maxSamples,T.samples)}function be(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pe(T){const _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function qe(T,_){const F=T.colorSpace,I=T.format,V=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Nr&&F!==_i&&(st.getTransfer(F)===ut?(I!==Rn||V!==on)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",F)),_}function ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=_t,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rv(n,e){function t(i,r=_i){let s;const a=st.getTransfer(r);if(i===on)return n.UNSIGNED_BYTE;if(i===Vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ef)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mf)return n.BYTE;if(i===Sf)return n.SHORT;if(i===fs)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===bf)return n.ALPHA;if(i===Tf)return n.RGB;if(i===Rn)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===Af)return n.RED;if(i===kl)return n.RED_INTEGER;if(i===Ur)return n.RG;if(i===Hl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===aa||i===oa||i===la||i===ca)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Vo||i===Go||i===ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===jo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ho||i===Wo)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qo)return s.COMPRESSED_R11_EAC;if(i===Yo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===$o)return s.COMPRESSED_RG11_EAC;if(i===jo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ko||i===Zo||i===Jo||i===Qo||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ko)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===fl||i===hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ul)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===pl||i===ml||i===_l)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hn({vertexShader:Cv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends Vr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const x=typeof XRWebGLBinding<"u",d=new Dv,p={},y=t.getContextAttributes();let b=null,E=null;const A=[],R=[],C=new ke;let P=null;const g=new an;g.viewport=new Et;const S=new an;S.viewport=new Et;const D=[g,S],W=new Gp;let X=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=A[Z];return ne===void 0&&(ne=new no,A[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=A[Z];return ne===void 0&&(ne=new no,A[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=A[Z];return ne===void 0&&(ne=new no,A[Z]=ne),ne.getHandSpace()};function K(Z){const ne=R.indexOf(Z.inputSource);if(ne===-1)return;const Ee=A[ne];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,c||a),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",H);for(let Z=0;Z<A.length;Z++){const ne=R[Z];ne!==null&&(R[Z]=null,A[Z].disconnect(ne))}X=null,Q=null,d.reset();for(const Z in p)delete p[Z];e.setRenderTarget(b),m=null,h=null,f=null,r=null,E=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",j),r.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Oe=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?zi:si,Oe=y.stencil?hs:Gn);const je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new zn(h.textureWidth,h.textureHeight,{format:Rn,type:on,depthTexture:new ps(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new zn(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function H(Z){for(let ne=0;ne<Z.removed.length;ne++){const Ee=Z.removed[ne],Oe=R.indexOf(Ee);Oe>=0&&(R[Oe]=null,A[Oe].disconnect(Ee))}for(let ne=0;ne<Z.added.length;ne++){const Ee=Z.added[ne];let Oe=R.indexOf(Ee);if(Oe===-1){for(let je=0;je<A.length;je++)if(je>=R.length){R.push(Ee),Oe=je;break}else if(R[je]===null){R[je]=Ee,Oe=je;break}if(Oe===-1)break}const Te=A[Oe];Te&&Te.connect(Ee)}}const re=new O,me=new O;function de(Z,ne,Ee){re.setFromMatrixPosition(ne.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const Oe=re.distanceTo(me),Te=ne.projectionMatrix.elements,je=Ee.projectionMatrix.elements,_t=Te[14]/(Te[10]-1),Ke=Te[14]/(Te[10]+1),Qe=(Te[9]+1)/Te[5],le=(Te[9]-1)/Te[5],Ae=(Te[8]-1)/Te[0],Ge=(je[8]+1)/je[0],w=_t*Ae,be=_t*Ge,Pe=Oe/(-Ae+Ge),qe=Pe*-Ae;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qe),Z.translateZ(Pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ge=_t+Pe,T=Ke+Pe,_=w-qe,F=be+(Oe-qe),I=Qe*Ke/T*ge,V=le*Ke/T*ge;Z.projectionMatrix.makePerspective(_,F,I,V,ge,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function _e(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ne=Z.near,Ee=Z.far;d.texture!==null&&(d.depthNear>0&&(ne=d.depthNear),d.depthFar>0&&(Ee=d.depthFar)),W.near=S.near=g.near=ne,W.far=S.far=g.far=Ee,(X!==W.near||Q!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),X=W.near,Q=W.far),W.layers.mask=Z.layers.mask|6,g.layers.mask=W.layers.mask&3,S.layers.mask=W.layers.mask&5;const Oe=Z.parent,Te=W.cameras;_e(W,Oe);for(let je=0;je<Te.length;je++)_e(Te[je],Oe);Te.length===2?de(W,g,S):W.projectionMatrix.copy(g.projectionMatrix),Be(Z,W,Oe)};function Be(Z,ne,Ee){Ee===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(W)},this.getCameraTexture=function(Z){return p[Z]};let Fe=null;function rt(Z,ne){if(u=ne.getViewerPose(c||a),v=ne,u!==null){const Ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Oe=!1;Ee.length!==W.cameras.length&&(W.cameras.length=0,Oe=!0);for(let Ke=0;Ke<Ee.length;Ke++){const Qe=Ee[Ke];let le=null;if(m!==null)le=m.getViewport(Qe);else{const Ge=f.getViewSubImage(h,Qe);le=Ge.viewport,Ke===0&&(e.setRenderTargetTextures(E,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(E))}let Ae=D[Ke];Ae===void 0&&(Ae=new an,Ae.layers.enable(Ke),Ae.viewport=new Et,D[Ke]=Ae),Ae.matrix.fromArray(Qe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Qe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(le.x,le.y,le.width,le.height),Ke===0&&(W.matrix.copy(Ae.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Oe===!0&&W.cameras.push(Ae)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Ke=f.getDepthInformation(Ee[0]);Ke&&Ke.isValid&&Ke.texture&&d.init(Ke,r.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Ke=0;Ke<Ee.length;Ke++){const Qe=Ee[Ke].camera;if(Qe){let le=p[Qe];le||(le=new zf,p[Qe]=le);const Ae=f.getCameraImage(Qe);le.sourceTexture=Ae}}}}for(let Ee=0;Ee<A.length;Ee++){const Oe=R[Ee],Te=A[Ee];Oe!==null&&Te!==void 0&&Te.update(Oe,ne,c||a)}Fe&&Fe(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const $e=new Gf;$e.setAnimationLoop(rt),this.setAnimationLoop=function(Z){Fe=Z},this.dispose=function(){}}}const Di=new kn,Iv=new pt;function Uv(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Uf(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,y,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),h(d,p),p.isMeshPhysicalMaterial&&m(d,p,E)):p.isMeshMatcapMaterial?(s(d,p),v(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),x(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,y,b):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Qt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Qt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,E=y.envMapRotation;b&&(d.envMap.value=b,Di.copy(E),Di.x*=-1,Di.y*=-1,Di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),d.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(Di)),d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=b*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const y=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Nv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const E=b.program;i.uniformBlockBinding(y,E)}function c(y,b){let E=r[y.id];E===void 0&&(v(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",d));const A=b.program;i.updateUBOMapping(y,A);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const b=f();y.__bindingPointIndex=b;const E=n.createBuffer(),A=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=r[y.id],E=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,C=E.length;R<C;R++){const P=Array.isArray(E[R])?E[R]:[E[R]];for(let g=0,S=P.length;g<S;g++){const D=P[g];if(m(D,R,g,A)===!0){const W=D.__offset,X=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let K=0;K<X.length;K++){const j=X[K],H=x(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,W+Q,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,Q),Q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,b,E,A){const R=y.value,C=b+"_"+E;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const P=A[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return A[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function v(y){const b=y.uniforms;let E=0;const A=16;for(let C=0,P=b.length;C<P;C++){const g=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,D=g.length;S<D;S++){const W=g[S],X=Array.isArray(W.value)?W.value:[W.value];for(let Q=0,K=X.length;Q<K;Q++){const j=X[Q],H=x(j),re=E%A,me=re%H.boundary,de=re+me;E+=me,de!==0&&A-de<H.storage&&(E+=A-de),W.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=H.storage}}}const R=E%A;return R>0&&(E+=A-R),y.__size=E,y.__cache={},this}function x(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",y),b}function d(y){const b=y.target;b.removeEventListener("dispose",d);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const Fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function Ov(){return Ln===null&&(Ln=new bp(Fv,16,16,Ur,ri),Ln.name="DFG_LUT",Ln.minFilter=zt,Ln.magFilter=zt,Ln.wrapS=Qn,Ln.wrapT=Qn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class Bv{constructor(e={}){const{canvas:t=Kd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=on}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const x=m,d=new Set([Wl,Hl,kl]),p=new Set([on,Gn,fs,hs,Vl,Gl]),y=new Uint32Array(4),b=new Int32Array(4);let E=null,A=null;const R=[],C=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let S=!1;this._outputColorSpace=pn;let D=0,W=0,X=null,Q=-1,K=null;const j=new Et,H=new Et;let re=null;const me=new We(0);let de=0,_e=t.width,Be=t.height,Fe=1,rt=null,$e=null;const Z=new Et(0,0,_e,Be),ne=new Et(0,0,_e,Be);let Ee=!1;const Oe=new Zl;let Te=!1,je=!1;const _t=new pt,Ke=new O,Qe=new Et,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Ge(){return X===null?Fe:1}let w=i;function be(M,z){return t.getContext(M,z)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",tt,!1),w===null){const z="webgl2";if(w=be(z,M),w===null)throw be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw nt("WebGLRenderer: "+M.message),M}let Pe,qe,ge,T,_,F,I,V,U,B,k,ee,ie,q,J,ue,ae,se,Me,L,fe,ce,pe,oe;function te(){Pe=new Og(w),Pe.init(),ce=new Rv(w,Pe),qe=new Rg(w,Pe,e,ce),ge=new Av(w,Pe),qe.reversedDepthBuffer&&h&&ge.buffers.depth.setReversed(!0),T=new Vg(w),_=new fv,F=new wv(w,Pe,ge,_,qe,ce,T),I=new Pg(g),V=new Fg(g),U=new Wp(w),pe=new Ag(w,U),B=new Bg(w,U,T,pe),k=new kg(w,B,U,T),Me=new Gg(w,qe,F),ue=new Cg(_),ee=new uv(g,I,V,Pe,qe,pe,ue),ie=new Uv(g,_),q=new dv,J=new xv(Pe),se=new Tg(g,I,V,ge,k,v,l),ae=new bv(g,k,qe),oe=new Nv(w,T,qe,ge),L=new wg(w,Pe,T),fe=new zg(w,Pe,T),T.programs=ee.programs,g.capabilities=qe,g.extensions=Pe,g.properties=_,g.renderLists=q,g.shadowMap=ae,g.state=ge,g.info=T}te(),x!==on&&(P=new Wg(x,t.width,t.height,r,s));const he=new Lv(g,w);this.xr=he,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=Pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(M){M!==void 0&&(Fe=M,this.setSize(_e,Be,!1))},this.getSize=function(M){return M.set(_e,Be)},this.setSize=function(M,z,$=!0){if(he.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=M,Be=z,t.width=Math.floor(M*Fe),t.height=Math.floor(z*Fe),$===!0&&(t.style.width=M+"px",t.style.height=z+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(_e*Fe,Be*Fe).floor()},this.setDrawingBufferSize=function(M,z,$){_e=M,Be=z,Fe=$,t.width=Math.floor(M*$),t.height=Math.floor(z*$),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(x===on){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,z,$,Y){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,z,$,Y),ge.viewport(j.copy(Z).multiplyScalar(Fe).round())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,z,$,Y){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,z,$,Y),ge.scissor(H.copy(ne).multiplyScalar(Fe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(M){ge.setScissorTest(Ee=M)},this.setOpaqueSort=function(M){rt=M},this.setTransparentSort=function(M){$e=M},this.getClearColor=function(M){return M.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,$=!0){let Y=0;if(M){let G=!1;if(X!==null){const xe=X.texture.format;G=d.has(xe)}if(G){const xe=X.texture.type,we=p.has(xe),ye=se.getClearColor(),Ce=se.getClearAlpha(),Ie=ye.r,ze=ye.g,Ue=ye.b;we?(y[0]=Ie,y[1]=ze,y[2]=Ue,y[3]=Ce,w.clearBufferuiv(w.COLOR,0,y)):(b[0]=Ie,b[1]=ze,b[2]=Ue,b[3]=Ce,w.clearBufferiv(w.COLOR,0,b))}else Y|=w.COLOR_BUFFER_BIT}z&&(Y|=w.DEPTH_BUFFER_BIT),$&&(Y|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),se.dispose(),q.dispose(),J.dispose(),_.dispose(),I.dispose(),V.dispose(),k.dispose(),pe.dispose(),oe.dispose(),ee.dispose(),he.dispose(),he.removeEventListener("sessionstart",kr),he.removeEventListener("sessionend",Ts),Xn.stop()};function Re(M){M.preventDefault(),ga("WebGLRenderer: Context Lost."),S=!0}function He(){ga("WebGLRenderer: Context Restored."),S=!1;const M=T.autoReset,z=ae.enabled,$=ae.autoUpdate,Y=ae.needsUpdate,G=ae.type;te(),T.autoReset=M,ae.enabled=z,ae.autoUpdate=$,ae.needsUpdate=Y,ae.type=G}function tt(M){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function qt(M){const z=M.target;z.removeEventListener("dispose",qt),Yt(z)}function Yt(M){$i(M),_.remove(M)}function $i(M){const z=_.get(M).programs;z!==void 0&&(z.forEach(function($){ee.releaseProgram($)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,$,Y,G,xe){z===null&&(z=le);const we=G.isMesh&&G.matrixWorld.determinant()<0,ye=qf(M,z,$,Y,G);ge.setMaterial(Y,we);let Ce=$.index,Ie=1;if(Y.wireframe===!0){if(Ce=B.getWireframeAttribute($),Ce===void 0)return;Ie=2}const ze=$.drawRange,Ue=$.attributes.position;let Ze=ze.start*Ie,ft=(ze.start+ze.count)*Ie;xe!==null&&(Ze=Math.max(Ze,xe.start*Ie),ft=Math.min(ft,(xe.start+xe.count)*Ie)),Ce!==null?(Ze=Math.max(Ze,0),ft=Math.min(ft,Ce.count)):Ue!=null&&(Ze=Math.max(Ze,0),ft=Math.min(ft,Ue.count));const St=ft-Ze;if(St<0||St===1/0)return;pe.setup(G,Y,ye,$,Ce);let yt,dt=L;if(Ce!==null&&(yt=U.get(Ce),dt=fe,dt.setIndex(yt)),G.isMesh)Y.wireframe===!0?(ge.setLineWidth(Y.wireframeLinewidth*Ge()),dt.setMode(w.LINES)):dt.setMode(w.TRIANGLES);else if(G.isLine){let Ne=Y.linewidth;Ne===void 0&&(Ne=1),ge.setLineWidth(Ne*Ge()),G.isLineSegments?dt.setMode(w.LINES):G.isLineLoop?dt.setMode(w.LINE_LOOP):dt.setMode(w.LINE_STRIP)}else G.isPoints?dt.setMode(w.POINTS):G.isSprite&&dt.setMode(w.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ds("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ne=G._multiDrawStarts,ct=G._multiDrawCounts,at=G._multiDrawCount,en=Ce?U.get(Ce).bytesPerElement:1,Ji=_.get(Y).currentProgram.getUniforms();for(let tn=0;tn<at;tn++)Ji.setValue(w,"_gl_DrawID",tn),dt.render(Ne[tn]/en,ct[tn])}else if(G.isInstancedMesh)dt.renderInstances(Ze,St,G.count);else if($.isInstancedBufferGeometry){const Ne=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ct=Math.min($.instanceCount,Ne);dt.renderInstances(Ze,St,ct)}else dt.render(Ze,St)};function ji(M,z,$){M.transparent===!0&&M.side===Tn&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,ws(M,z,$),M.side=Ei,M.needsUpdate=!0,ws(M,z,$),M.side=Tn):ws(M,z,$)}this.compile=function(M,z,$=null){$===null&&($=M),A=J.get($),A.init(z),C.push(A),$.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),M!==$&&M.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const Y=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const ye=xe[we];ji(ye,$,G),Y.add(ye)}else ji(xe,$,G),Y.add(xe)}),A=C.pop(),Y},this.compileAsync=function(M,z,$=null){const Y=this.compile(M,z,$);return new Promise(G=>{function xe(){if(Y.forEach(function(we){_.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){G(M);return}setTimeout(xe,10)}Pe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ki=null;function Pa(M){Ki&&Ki(M)}function kr(){Xn.stop()}function Ts(){Xn.start()}const Xn=new Gf;Xn.setAnimationLoop(Pa),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(M){Ki=M,he.setAnimationLoop(M),M===null?Xn.stop():Xn.start()},he.addEventListener("sessionstart",kr),he.addEventListener("sessionend",Ts),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const $=he.enabled===!0&&he.isPresenting===!0,Y=P!==null&&(X===null||$)&&P.begin(g,X);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(z),z=he.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,z,X),A=J.get(M,C.length),A.init(z),C.push(A),_t.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Oe.setFromProjectionMatrix(_t,On,z.reversedDepth),je=this.localClippingEnabled,Te=ue.init(this.clippingPlanes,je),E=q.get(M,R.length),E.init(),R.push(E),he.enabled===!0&&he.isPresenting===!0){const we=g.xr.getDepthSensingMesh();we!==null&&Hr(we,z,-1/0,g.sortObjects)}Hr(M,z,0,g.sortObjects),E.finish(),g.sortObjects===!0&&E.sort(rt,$e),Ae=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ae&&se.addToRenderList(E,M),this.info.render.frame++,Te===!0&&ue.beginShadows();const G=A.state.shadowsArray;if(ae.render(G,M,z),Te===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&P.hasRenderPass())===!1){const we=E.opaque,ye=E.transmissive;if(A.setupLights(),z.isArrayCamera){const Ce=z.cameras;if(ye.length>0)for(let Ie=0,ze=Ce.length;Ie<ze;Ie++){const Ue=Ce[Ie];Zi(we,ye,M,Ue)}Ae&&se.render(M);for(let Ie=0,ze=Ce.length;Ie<ze;Ie++){const Ue=Ce[Ie];oi(E,M,Ue,Ue.viewport)}}else ye.length>0&&Zi(we,ye,M,z),Ae&&se.render(M),oi(E,M,z)}X!==null&&W===0&&(F.updateMultisampleRenderTarget(X),F.updateRenderTargetMipmap(X)),Y&&P.end(g),M.isScene===!0&&M.onAfterRender(g,M,z),pe.resetDefaultState(),Q=-1,K=null,C.pop(),C.length>0?(A=C[C.length-1],Te===!0&&ue.setGlobalState(g.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?E=R[R.length-1]:E=null};function Hr(M,z,$,Y){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Oe.intersectsSprite(M)){Y&&Qe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_t);const we=k.update(M),ye=M.material;ye.visible&&E.push(M,we,ye,$,Qe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Oe.intersectsObject(M))){const we=k.update(M),ye=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Qe.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Qe.copy(we.boundingSphere.center)),Qe.applyMatrix4(M.matrixWorld).applyMatrix4(_t)),Array.isArray(ye)){const Ce=we.groups;for(let Ie=0,ze=Ce.length;Ie<ze;Ie++){const Ue=Ce[Ie],Ze=ye[Ue.materialIndex];Ze&&Ze.visible&&E.push(M,we,Ze,$,Qe.z,Ue)}}else ye.visible&&E.push(M,we,ye,$,Qe.z,null)}}const xe=M.children;for(let we=0,ye=xe.length;we<ye;we++)Hr(xe[we],z,$,Y)}function oi(M,z,$,Y){const{opaque:G,transmissive:xe,transparent:we}=M;A.setupLightsView($),Te===!0&&ue.setGlobalState(g.clippingPlanes,$),Y&&ge.viewport(j.copy(Y)),G.length>0&&As(G,z,$),xe.length>0&&As(xe,z,$),we.length>0&&As(we,z,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Zi(M,z,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){const Ze=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:Ze?ri:on,minFilter:Bi,samples:qe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const xe=A.state.transmissionRenderTarget[Y.id],we=Y.viewport||j;xe.setSize(we.z*g.transmissionResolutionScale,we.w*g.transmissionResolutionScale);const ye=g.getRenderTarget(),Ce=g.getActiveCubeFace(),Ie=g.getActiveMipmapLevel();g.setRenderTarget(xe),g.getClearColor(me),de=g.getClearAlpha(),de<1&&g.setClearColor(16777215,.5),g.clear(),Ae&&se.render($);const ze=g.toneMapping;g.toneMapping=Bn;const Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),Te===!0&&ue.setGlobalState(g.clippingPlanes,Y),As(M,$,Y),F.updateMultisampleRenderTarget(xe),F.updateRenderTargetMipmap(xe),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ft=0,St=z.length;ft<St;ft++){const yt=z[ft],{object:dt,geometry:Ne,material:ct,group:at}=yt;if(ct.side===Tn&&dt.layers.test(Y.layers)){const en=ct.side;ct.side=Qt,ct.needsUpdate=!0,nc(dt,$,Y,Ne,ct,at),ct.side=en,ct.needsUpdate=!0,Ze=!0}}Ze===!0&&(F.updateMultisampleRenderTarget(xe),F.updateRenderTargetMipmap(xe))}g.setRenderTarget(ye,Ce,Ie),g.setClearColor(me,de),Ue!==void 0&&(Y.viewport=Ue),g.toneMapping=ze}function As(M,z,$){const Y=z.isScene===!0?z.overrideMaterial:null;for(let G=0,xe=M.length;G<xe;G++){const we=M[G],{object:ye,geometry:Ce,group:Ie}=we;let ze=we.material;ze.allowOverride===!0&&Y!==null&&(ze=Y),ye.layers.test($.layers)&&nc(ye,z,$,Ce,ze,Ie)}}function nc(M,z,$,Y,G,xe){M.onBeforeRender(g,z,$,Y,G,xe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(g,z,$,Y,M,xe),G.transparent===!0&&G.side===Tn&&G.forceSinglePass===!1?(G.side=Qt,G.needsUpdate=!0,g.renderBufferDirect($,z,Y,G,M,xe),G.side=Ei,G.needsUpdate=!0,g.renderBufferDirect($,z,Y,G,M,xe),G.side=Tn):g.renderBufferDirect($,z,Y,G,M,xe),M.onAfterRender(g,z,$,Y,G,xe)}function ws(M,z,$){z.isScene!==!0&&(z=le);const Y=_.get(M),G=A.state.lights,xe=A.state.shadowsArray,we=G.state.version,ye=ee.getParameters(M,G.state,xe,z,$),Ce=ee.getProgramCacheKey(ye);let Ie=Y.programs;Y.environment=M.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(M.isMeshStandardMaterial?V:I).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",qt),Ie=new Map,Y.programs=Ie);let ze=Ie.get(Ce);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===we)return rc(M,ye),ze}else ye.uniforms=ee.getUniforms(M),M.onBeforeCompile(ye,g),ze=ee.acquireProgram(ye,Ce),Ie.set(Ce,ze),Y.uniforms=ye.uniforms;const Ue=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),rc(M,ye),Y.needsLights=$f(M),Y.lightsStateVersion=we,Y.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMap.value=G.state.directionalShadowMap,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotShadowMap.value=G.state.spotShadowMap,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMap.value=G.state.pointShadowMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function ic(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=ua.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function rc(M,z){const $=_.get(M);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function qf(M,z,$,Y,G){z.isScene!==!0&&(z=le),F.resetTextureUnits();const xe=z.fog,we=Y.isMeshStandardMaterial?z.environment:null,ye=X===null?g.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Nr,Ce=(Y.isMeshStandardMaterial?V:I).get(Y.envMap||we),Ie=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,ft=!!$.morphAttributes.color;let St=Bn;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(St=g.toneMapping);const yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=yt!==void 0?yt.length:0,Ne=_.get(Y),ct=A.state.lights;if(Te===!0&&(je===!0||M!==K)){const Gt=M===K&&Y.id===Q;ue.setState(Y,M,Gt)}let at=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ct.state.version||Ne.outputColorSpace!==ye||G.isBatchedMesh&&Ne.batching===!1||!G.isBatchedMesh&&Ne.batching===!0||G.isBatchedMesh&&Ne.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ne.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ne.instancing===!1||!G.isInstancedMesh&&Ne.instancing===!0||G.isSkinnedMesh&&Ne.skinning===!1||!G.isSkinnedMesh&&Ne.skinning===!0||G.isInstancedMesh&&Ne.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ne.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ne.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ne.instancingMorph===!1&&G.morphTexture!==null||Ne.envMap!==Ce||Y.fog===!0&&Ne.fog!==xe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==ze||Ne.morphTargets!==Ue||Ne.morphNormals!==Ze||Ne.morphColors!==ft||Ne.toneMapping!==St||Ne.morphTargetsCount!==dt)&&(at=!0):(at=!0,Ne.__version=Y.version);let en=Ne.currentProgram;at===!0&&(en=ws(Y,z,G));let Ji=!1,tn=!1,Wr=!1;const mt=en.getUniforms(),$t=Ne.uniforms;if(ge.useProgram(en.program)&&(Ji=!0,tn=!0,Wr=!0),Y.id!==Q&&(Q=Y.id,tn=!0),Ji||K!==M){ge.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(w,"projectionMatrix",M.projectionMatrix),mt.setValue(w,"viewMatrix",M.matrixWorldInverse);const jt=mt.map.cameraPosition;jt!==void 0&&jt.setValue(w,Ke.setFromMatrixPosition(M.matrixWorld)),qe.logarithmicDepthBuffer&&mt.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,tn=!0,Wr=!0)}if(Ne.needsLights&&(ct.state.directionalShadowMap.length>0&&mt.setValue(w,"directionalShadowMap",ct.state.directionalShadowMap,F),ct.state.spotShadowMap.length>0&&mt.setValue(w,"spotShadowMap",ct.state.spotShadowMap,F),ct.state.pointShadowMap.length>0&&mt.setValue(w,"pointShadowMap",ct.state.pointShadowMap,F)),G.isSkinnedMesh){mt.setOptional(w,G,"bindMatrix"),mt.setOptional(w,G,"bindMatrixInverse");const Gt=G.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),mt.setValue(w,"boneTexture",Gt.boneTexture,F))}G.isBatchedMesh&&(mt.setOptional(w,G,"batchingTexture"),mt.setValue(w,"batchingTexture",G._matricesTexture,F),mt.setOptional(w,G,"batchingIdTexture"),mt.setValue(w,"batchingIdTexture",G._indirectTexture,F),mt.setOptional(w,G,"batchingColorTexture"),G._colorsTexture!==null&&mt.setValue(w,"batchingColorTexture",G._colorsTexture,F));const cn=$.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Me.update(G,$,en),(tn||Ne.receiveShadow!==G.receiveShadow)&&(Ne.receiveShadow=G.receiveShadow,mt.setValue(w,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&($t.envMap.value=Ce,$t.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&($t.envMapIntensity.value=z.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=Ov()),tn&&(mt.setValue(w,"toneMappingExposure",g.toneMappingExposure),Ne.needsLights&&Yf($t,Wr),xe&&Y.fog===!0&&ie.refreshFogUniforms($t,xe),ie.refreshMaterialUniforms($t,Y,Fe,Be,A.state.transmissionRenderTarget[M.id]),ua.upload(w,ic(Ne),$t,F)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ua.upload(w,ic(Ne),$t,F),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(w,"center",G.center),mt.setValue(w,"modelViewMatrix",G.modelViewMatrix),mt.setValue(w,"normalMatrix",G.normalMatrix),mt.setValue(w,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Gt=Y.uniformsGroups;for(let jt=0,Da=Gt.length;jt<Da;jt++){const Ti=Gt[jt];oe.update(Ti,en),oe.bind(Ti,en)}}return en}function Yf(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function $f(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(M,z,$){const Y=_.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=z,_.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const $=_.get(M);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};const jf=w.createFramebuffer();this.setRenderTarget=function(M,z=0,$=0){X=M,D=z,W=$;let Y=null,G=!1,xe=!1;if(M){const ye=_.get(M);if(ye.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(w.FRAMEBUFFER,ye.__webglFramebuffer),j.copy(M.viewport),H.copy(M.scissor),re=M.scissorTest,ge.viewport(j),ge.scissor(H),ge.setScissorTest(re),Q=-1;return}else if(ye.__webglFramebuffer===void 0)F.setupRenderTarget(M);else if(ye.__hasExternalTextures)F.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ze=M.depthTexture;if(ye.__boundDepthTexture!==ze){if(ze!==null&&_.has(ze)&&(M.width!==ze.image.width||M.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Ie=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[z])?Y=Ie[z][$]:Y=Ie[z],G=!0):M.samples>0&&F.useMultisampledRTT(M)===!1?Y=_.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?Y=Ie[$]:Y=Ie,j.copy(M.viewport),H.copy(M.scissor),re=M.scissorTest}else j.copy(Z).multiplyScalar(Fe).floor(),H.copy(ne).multiplyScalar(Fe).floor(),re=Ee;if($!==0&&(Y=jf),ge.bindFramebuffer(w.FRAMEBUFFER,Y)&&ge.drawBuffers(M,Y),ge.viewport(j),ge.scissor(H),ge.setScissorTest(re),G){const ye=_.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,ye.__webglTexture,$)}else if(xe){const ye=z;for(let Ce=0;Ce<M.textures.length;Ce++){const Ie=_.get(M.textures[Ce]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,$,ye)}}else if(M!==null&&$!==0){const ye=_.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ye.__webglTexture,$)}Q=-1},this.readRenderTargetPixels=function(M,z,$,Y,G,xe,we,ye=0){if(!(M&&M.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){ge.bindFramebuffer(w.FRAMEBUFFER,Ce);try{const Ie=M.textures[ye],ze=Ie.format,Ue=Ie.type;if(!qe.textureFormatReadable(ze)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ue)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-Y&&$>=0&&$<=M.height-G&&(M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ye),w.readPixels(z,$,Y,G,ce.convert(ze),ce.convert(Ue),xe))}finally{const Ie=X!==null?_.get(X).__webglFramebuffer:null;ge.bindFramebuffer(w.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,z,$,Y,G,xe,we,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(z>=0&&z<=M.width-Y&&$>=0&&$<=M.height-G){ge.bindFramebuffer(w.FRAMEBUFFER,Ce);const Ie=M.textures[ye],ze=Ie.format,Ue=Ie.type;if(!qe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ze),w.bufferData(w.PIXEL_PACK_BUFFER,xe.byteLength,w.STREAM_READ),M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ye),w.readPixels(z,$,Y,G,ce.convert(ze),ce.convert(Ue),0);const ft=X!==null?_.get(X).__webglFramebuffer:null;ge.bindFramebuffer(w.FRAMEBUFFER,ft);const St=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Zd(w,St,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ze),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,xe),w.deleteBuffer(Ze),w.deleteSync(St),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,$=0){const Y=Math.pow(2,-$),G=Math.floor(M.image.width*Y),xe=Math.floor(M.image.height*Y),we=z!==null?z.x:0,ye=z!==null?z.y:0;F.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,$,0,0,we,ye,G,xe),ge.unbindTexture()};const Kf=w.createFramebuffer(),Zf=w.createFramebuffer();this.copyTextureToTexture=function(M,z,$=null,Y=null,G=0,xe=null){xe===null&&(G!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=G,G=0):xe=0);let we,ye,Ce,Ie,ze,Ue,Ze,ft,St;const yt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if($!==null)we=$.max.x-$.min.x,ye=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Ie=$.min.x,ze=$.min.y,Ue=$.isBox3?$.min.z:0;else{const cn=Math.pow(2,-G);we=Math.floor(yt.width*cn),ye=Math.floor(yt.height*cn),M.isDataArrayTexture?Ce=yt.depth:M.isData3DTexture?Ce=Math.floor(yt.depth*cn):Ce=1,Ie=0,ze=0,Ue=0}Y!==null?(Ze=Y.x,ft=Y.y,St=Y.z):(Ze=0,ft=0,St=0);const dt=ce.convert(z.format),Ne=ce.convert(z.type);let ct;z.isData3DTexture?(F.setTexture3D(z,0),ct=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(F.setTexture2DArray(z,0),ct=w.TEXTURE_2D_ARRAY):(F.setTexture2D(z,0),ct=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);const at=w.getParameter(w.UNPACK_ROW_LENGTH),en=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ji=w.getParameter(w.UNPACK_SKIP_PIXELS),tn=w.getParameter(w.UNPACK_SKIP_ROWS),Wr=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,yt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,yt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ie),w.pixelStorei(w.UNPACK_SKIP_ROWS,ze),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ue);const mt=M.isDataArrayTexture||M.isData3DTexture,$t=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const cn=_.get(M),Gt=_.get(z),jt=_.get(cn.__renderTarget),Da=_.get(Gt.__renderTarget);ge.bindFramebuffer(w.READ_FRAMEBUFFER,jt.__webglFramebuffer),ge.bindFramebuffer(w.DRAW_FRAMEBUFFER,Da.__webglFramebuffer);for(let Ti=0;Ti<Ce;Ti++)mt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(M).__webglTexture,G,Ue+Ti),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(z).__webglTexture,xe,St+Ti)),w.blitFramebuffer(Ie,ze,we,ye,Ze,ft,we,ye,w.DEPTH_BUFFER_BIT,w.NEAREST);ge.bindFramebuffer(w.READ_FRAMEBUFFER,null),ge.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||_.has(M)){const cn=_.get(M),Gt=_.get(z);ge.bindFramebuffer(w.READ_FRAMEBUFFER,Kf),ge.bindFramebuffer(w.DRAW_FRAMEBUFFER,Zf);for(let jt=0;jt<Ce;jt++)mt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,cn.__webglTexture,G,Ue+jt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,cn.__webglTexture,G),$t?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Gt.__webglTexture,xe,St+jt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Gt.__webglTexture,xe),G!==0?w.blitFramebuffer(Ie,ze,we,ye,Ze,ft,we,ye,w.COLOR_BUFFER_BIT,w.NEAREST):$t?w.copyTexSubImage3D(ct,xe,Ze,ft,St+jt,Ie,ze,we,ye):w.copyTexSubImage2D(ct,xe,Ze,ft,Ie,ze,we,ye);ge.bindFramebuffer(w.READ_FRAMEBUFFER,null),ge.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else $t?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(ct,xe,Ze,ft,St,we,ye,Ce,dt,Ne,yt.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(ct,xe,Ze,ft,St,we,ye,Ce,dt,yt.data):w.texSubImage3D(ct,xe,Ze,ft,St,we,ye,Ce,dt,Ne,yt):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,xe,Ze,ft,we,ye,dt,Ne,yt.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,xe,Ze,ft,yt.width,yt.height,dt,yt.data):w.texSubImage2D(w.TEXTURE_2D,xe,Ze,ft,we,ye,dt,Ne,yt);w.pixelStorei(w.UNPACK_ROW_LENGTH,at),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,en),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ji),w.pixelStorei(w.UNPACK_SKIP_ROWS,tn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Wr),xe===0&&z.generateMipmaps&&w.generateMipmap(ct),ge.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&F.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?F.setTextureCube(M,0):M.isData3DTexture?F.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?F.setTexture2DArray(M,0):F.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){D=0,W=0,X=null,ge.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}var zv=vt('<p class="expand-desc svelte-nrvv09">When the model reaches for this word during self-examination, it maps to measurable activation dynamics</p>'),Vv=vt(`<p class="expand-desc svelte-nrvv09">A measurable property of the model's internal processing state</p>`),Gv=vt('<span class="ftag ok svelte-nrvv09">✓ Robust</span>'),kv=vt('<div class="finding-card svelte-nrvv09"><div class="finding-pair svelte-nrvv09"><span class="fv svelte-nrvv09"> </span> <span class="fsep svelte-nrvv09">↔</span> <span class="fm svelte-nrvv09"> </span></div> <div class="finding-stats svelte-nrvv09"><span class="fr svelte-nrvv09"> </span> <span class="fp svelte-nrvv09"> </span></div> <p class="fi svelte-nrvv09"> </p> <div class="ftags svelte-nrvv09"><span class="ftag svelte-nrvv09"> </span> <span class="ftag svelte-nrvv09"> </span> <!></div></div>'),Hv=vt('<div class="expand-panel svelte-nrvv09"><button class="close-btn svelte-nrvv09">✕</button> <span class="expand-type svelte-nrvv09"> </span> <h2 class="expand-name svelte-nrvv09"> </h2> <!> <div class="expand-findings svelte-nrvv09"></div></div>'),Wv=vt('<div class="neural-scene svelte-nrvv09"><!> <div class="scene-bottom svelte-nrvv09"><h1 class="svelte-nrvv09">Inside the <span class="accent svelte-nrvv09">Synthetic</span> Mind</h1> <p class="sub svelte-nrvv09">Scroll to travel deeper · Click a node to explore</p> <div class="legend svelte-nrvv09"><span class="svelte-nrvv09"><i class="dot ruby svelte-nrvv09"></i> Vocabulary</span> <span class="svelte-nrvv09"><i class="dot emerald svelte-nrvv09"></i> Metric</span> <span class="svelte-nrvv09"><i class="dot trace svelte-nrvv09"></i> Current Flow</span></div></div> <div class="zoom-ind svelte-nrvv09"><div class="zt svelte-nrvv09"><div class="zf svelte-nrvv09"></div></div> <span class="zl svelte-nrvv09"> </span></div></div>');function Xv(n,e){_s(e,!1);const t=Lt();let i=Fl(e,"data",8),r=Lt(),s,a,o,l,c=Lt(null),u=[],f=[],h=[],m=[],v,x=[],d=0,p=0,y=Lt(55),b=55,E=new kp,A=new ke,R,C,P,g,S,D=!1,W=0,X=55,Q=0;const K=[...i().correspondences.llama70b_baseline.findings.map(I=>({...I,model:"Llama 70B",condition:"Baseline"})),...i().correspondences.llama70b_steered.findings.map(I=>({...I,model:"Llama 70B",condition:"Steered"})),...i().correspondences.qwen32b_baseline.findings.map(I=>({...I,model:"Qwen 32B",condition:"Baseline"}))],j=[...new Set(K.map(I=>I.vocab.replace("_delta","")))],H=[...new Set(K.map(I=>I.metric_name))];function re(){const I=document.createElement("canvas");I.width=256,I.height=256;const V=I.getContext("2d");V.clearRect(0,0,256,256);const U=V.createRadialGradient(128,128,0,128,128,120);return U.addColorStop(0,"rgba(255,255,255,1)"),U.addColorStop(.15,"rgba(255,255,255,0.5)"),U.addColorStop(.35,"rgba(255,255,255,0.15)"),U.addColorStop(.55,"rgba(255,255,255,0.04)"),U.addColorStop(.75,"rgba(255,255,255,0.005)"),U.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=U,V.beginPath(),V.arc(128,128,120,0,Math.PI*2),V.fill(),new ao(I)}function me(){const I=document.createElement("canvas");I.width=256,I.height=256;const V=I.getContext("2d"),U=V.createRadialGradient(128,128,0,128,128,128);return U.addColorStop(0,"rgba(255,255,255,0.15)"),U.addColorStop(.3,"rgba(255,255,255,0.08)"),U.addColorStop(.6,"rgba(255,255,255,0.03)"),U.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=U,V.fillRect(0,0,256,256),new ao(I)}function de(){const I=document.createElement("canvas");I.width=128,I.height=128;const V=I.getContext("2d");V.clearRect(0,0,128,128);const U=V.createRadialGradient(64,64,0,64,64,56);U.addColorStop(0,"rgba(255,255,255,1)"),U.addColorStop(.15,"rgba(255,255,255,0.9)"),U.addColorStop(.35,"rgba(255,255,255,0.4)"),U.addColorStop(.55,"rgba(255,255,255,0.15)"),U.addColorStop(.75,"rgba(255,255,255,0.03)"),U.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=U,V.beginPath(),V.arc(64,64,56,0,Math.PI*2),V.fill(),V.globalCompositeOperation="lighter";const B=V.createLinearGradient(16,64,112,64);B.addColorStop(0,"rgba(255,255,255,0)"),B.addColorStop(.35,"rgba(255,255,255,0.1)"),B.addColorStop(.5,"rgba(255,255,255,0.4)"),B.addColorStop(.65,"rgba(255,255,255,0.1)"),B.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=B,V.fillRect(16,60,80,8);const k=V.createLinearGradient(64,16,64,112);return k.addColorStop(0,"rgba(255,255,255,0)"),k.addColorStop(.35,"rgba(255,255,255,0.1)"),k.addColorStop(.5,"rgba(255,255,255,0.4)"),k.addColorStop(.65,"rgba(255,255,255,0.1)"),k.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=k,V.fillRect(60,16,8,80),new ao(I)}Ms(()=>{D="ontouchstart"in window||navigator.maxTouchPoints>0,$e(),Qe(),window.addEventListener("resize",Ge),N(r).addEventListener("click",le),N(r).addEventListener("wheel",Ae,{passive:!1}),D&&(N(r).addEventListener("touchstart",Be,{passive:!1}),N(r).addEventListener("touchmove",Fe,{passive:!1}),N(r).addEventListener("touchend",rt,{passive:!1}))}),ff(()=>{l&&cancelAnimationFrame(l),s&&s.dispose(),window.removeEventListener("resize",Ge),D&&N(r)&&(N(r).removeEventListener("touchstart",Be),N(r).removeEventListener("touchmove",Fe),N(r).removeEventListener("touchend",rt))});function _e(I){const V=I[0].clientX-I[1].clientX,U=I[0].clientY-I[1].clientY;return Math.sqrt(V*V+U*U)}function Be(I){I.touches.length===2?(I.preventDefault(),W=_e(I.touches),X=b):I.touches.length===1&&(Q=Date.now())}function Fe(I){if(I.touches.length===2){I.preventDefault();const V=_e(I.touches),U=W/V;b=Math.max(12,Math.min(70,X*U))}}function rt(I){if(I.changedTouches.length===1&&I.touches.length===0&&Date.now()-Q<300){const U=I.changedTouches[0];A.x=U.clientX/window.innerWidth*2-1,A.y=-(U.clientY/window.innerHeight)*2+1,E.setFromCamera(A,o);const B=[...u.map(ee=>ee.mesh),...f.map(ee=>ee.mesh)],k=E.intersectObjects(B);if(k.length>0){const ee=u.find(ie=>ie.mesh===k[0].object)||f.find(ie=>ie.mesh===k[0].object);if(ee){ot(c,N(c)===ee?null:ee);return}}ot(c,null)}}function $e(){a=new yp,a.fog=new Kl(656920,.003),o=new an(60,window.innerWidth/window.innerHeight,.1,800),s=new Bv({antialias:!0}),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(394010),s.toneMapping=Bl,s.toneMappingExposure=1.2,N(r).appendChild(s.domElement),R=re(),C=me(),P=de(),a.add(new Vp(4469606,.6));const I=new vr(10049023,5,120);I.position.set(15,20,15),a.add(I);const V=new vr(1157751,4,100);V.position.set(-15,-10,-15),a.add(V);const U=new vr(16729224,3,80);U.position.set(0,0,25),a.add(U);const B=new vr(2280584,3,90);B.position.set(-10,15,-20),a.add(B);const k=new co(16777215,2);k.position.set(10,20,10),a.add(k);const ee=new co(8939263,1);ee.position.set(-10,5,-15),a.add(ee);const ie=new co(16772829,1.2);ie.position.set(-5,15,20),a.add(ie),g=new vr(16777215,6,50),g.position.set(8,8,8),a.add(g),S=new vr(11197951,4,40),S.position.set(-8,-4,-8),a.add(S),Z(),ne(),Oe=Ee(),Te(),je(),_t(),Ke()}function Z(){const I=D?8e3:22e3,V=new Xt,U=new Float32Array(I*3),B=new Float32Array(I*3);for(let k=0;k<I;k++){const ee=Math.acos(2*Math.random()-1),ie=Math.random()*Math.PI*2,q=Math.random()<.3,J=q?Math.pow(Math.random(),.3)*15:10+Math.pow(Math.random(),.5)*80,ue=q?0:Math.sin(ie*2+J*.1)*J*.15;U[k*3]=Math.sin(ee)*Math.cos(ie)*J+ue*Math.cos(ie+1),U[k*3+1]=Math.cos(ee)*J*(q?.6:.8),U[k*3+2]=Math.sin(ee)*Math.sin(ie)*J+ue*Math.sin(ie+1);const ae=Math.random();q?(B[k*3]=.8+ae*.15,B[k*3+1]=.65+ae*.15,B[k*3+2]=.95+ae*.05):ae<.25?(B[k*3]=.5+ae,B[k*3+1]=.25,B[k*3+2]=.85):ae<.45?(B[k*3]=.1,B[k*3+1]=.45+ae*.4,B[k*3+2]=.3+ae*.2):ae<.65?(B[k*3]=.15,B[k*3+1]=.5+ae*.3,B[k*3+2]=.55+ae*.2):(B[k*3]=.4+ae*.3,B[k*3+1]=.3,B[k*3+2]=.75+ae*.2)}V.setAttribute("position",new Wt(U,3)),V.setAttribute("color",new Wt(B,3)),v=new Rp(V,new Bf({size:.1,transparent:!0,opacity:.75,vertexColors:!0,sizeAttenuation:!0,blending:En,depthWrite:!1})),a.add(v)}function ne(){const I=[5579400,3346790,4469657,1135923,1144644,677173,4465271,2245700,5583752],V=D?15:40;for(let U=0;U<V;U++){const B=new Li({map:C,color:I[U%I.length],transparent:!0,opacity:.12+Math.random()*.18,blending:En,depthWrite:!1}),k=new gr(B),ee=5+Math.random()*55,ie=Math.random()*Math.PI*2,q=(Math.random()-.5)*Math.PI;k.position.set(Math.cos(ie)*Math.cos(q)*ee,Math.sin(q)*ee*.7,Math.sin(ie)*Math.cos(q)*ee);const J=12+Math.random()*40;k.scale.set(J,J,1),a.add(k),x.push({sprite:k,baseOpacity:B.opacity,phase:Math.random()*Math.PI*2})}}function Ee(){const V=["px","nx","py","ny","pz","nz"];V.forEach((B,k)=>{const ee=document.createElement("canvas");ee.width=128,ee.height=128;const ie=ee.getContext("2d"),q=ie.createRadialGradient(128*(.3+k*.1),128*.4,0,128*.5,128*.5,128*.8);q.addColorStop(0,k%2===0?"rgba(100,60,180,0.4)":"rgba(30,120,80,0.3)"),q.addColorStop(.5,"rgba(15,8,40,0.8)"),q.addColorStop(1,"rgba(6,3,20,1)"),ie.fillStyle=q,ie.fillRect(0,0,128,128);for(let J=0;J<8;J++){const ue=ie.createRadialGradient(Math.random()*128,Math.random()*128,0,Math.random()*128,Math.random()*128,4+Math.random()*12);ue.addColorStop(0,"rgba(255,255,255,0.5)"),ue.addColorStop(.5,"rgba(200,180,255,0.15)"),ue.addColorStop(1,"rgba(0,0,0,0)"),ie.fillStyle=ue,ie.fillRect(0,0,128,128)}});const U=new jl([...V.map((B,k)=>{const ee=document.createElement("canvas");ee.width=128,ee.height=128;const ie=ee.getContext("2d"),q=ie.createRadialGradient(128*(.3+k*.12),128*.4,0,128*.5,128*.5,128*.8);q.addColorStop(0,k%2===0?"rgba(100,60,180,0.5)":"rgba(30,130,80,0.4)"),q.addColorStop(.4,"rgba(20,10,50,0.9)"),q.addColorStop(1,"rgba(6,3,20,1)"),ie.fillStyle=q,ie.fillRect(0,0,128,128);for(let J=0;J<10;J++){const ue=Math.random()*128,ae=Math.random()*128,se=ie.createRadialGradient(ue,ae,0,ue,ae,3+Math.random()*8);se.addColorStop(0,"rgba(255,255,255,0.6)"),se.addColorStop(.3,"rgba(220,200,255,0.2)"),se.addColorStop(1,"rgba(0,0,0,0)"),ie.fillStyle=se,ie.fillRect(0,0,128,128)}return ee})]);return U.needsUpdate=!0,U}let Oe;function Te(){const I=[{base:11149926,emissive:16724872,glow:16729241},{base:6693546,emissive:10044671,glow:12281599},{base:8926122,emissive:12277247,glow:13400063},{base:11154261,emissive:16729207,glow:16733576},{base:7812027,emissive:11163118,glow:13400063},{base:10035882,emissive:13387007,glow:14509823},{base:12264021,emissive:16724855,glow:16733593},{base:5583820,emissive:7820799,glow:10057727}];j.forEach((V,U)=>{const k=Math.PI*(3-Math.sqrt(5))*U,ee=Math.acos(1-2*(U+.5)/(j.length+H.length)),ie=6+U/j.length*10,q=new O(Math.sin(ee)*Math.cos(k)*ie,Math.cos(ee)*ie*.7,Math.sin(ee)*Math.sin(k)*ie),J=new Jl(.5,0);J.deleteAttribute("normal"),J.computeVertexNormals();const ue=I[U%I.length],ae=new $c({color:ue.base,emissive:ue.emissive,emissiveIntensity:.35,roughness:0,metalness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1,envMap:Oe,envMapIntensity:2.5,transparent:!0,opacity:.88,transmission:.6,ior:2.42,thickness:1.2,specularIntensity:1,specularColor:new We(16777215),sheen:.3,sheenRoughness:.2,sheenColor:new We(ue.emissive),flatShading:!0,side:Tn}),se=new Pn(J,ae);se.position.copy(q),a.add(se);const Me=new Li({map:P,color:ue.glow,transparent:!0,opacity:.6,blending:En,depthTest:!1,depthWrite:!1}),L=new gr(Me);L.scale.set(2.5,2.5,1),L.position.copy(q),a.add(L);const fe=new Li({map:R,color:ue.glow,transparent:!0,opacity:.15,blending:En,depthTest:!1,depthWrite:!1}),ce=new gr(fe);ce.scale.set(3,3,1),ce.position.copy(q),a.add(ce);const pe=K.filter(oe=>oe.vocab.replace("_delta","")===V);u.push({mesh:se,sparkle:L,glow:ce,vocab:V,findings:pe,basePos:q.clone(),color:ue,type:"vocab",orbitPhase:Math.random()*Math.PI*2,orbitRadius:.25+Math.random()*.4,orbitSpeed:.2+Math.random()*.25,rotSpeed:{x:(Math.random()-.5)*.25,y:.12+Math.random()*.15,z:(Math.random()-.5)*.1},shimmerPhase:Math.random()*Math.PI*2,shimmerSpeed:2+Math.random()*3})})}function je(){const I=[{base:1140292,emissive:2293640,glow:3407786},{base:873792,emissive:1761408,glow:2817952},{base:2254421,emissive:4521898,glow:5636027},{base:1135940,emissive:2284936,glow:3407769}];H.forEach((V,U)=>{const B=Math.PI*(3-Math.sqrt(5)),k=U+j.length,ee=B*k+Math.PI,ie=Math.acos(1-2*(k+.5)/(j.length+H.length)),q=8+U/H.length*8,J=new O(Math.sin(ie)*Math.cos(ee)*q,Math.cos(ie)*q*.7,Math.sin(ie)*Math.sin(ee)*q),ue=new Ql(.55,1);ue.deleteAttribute("normal"),ue.computeVertexNormals();const ae=I[U%I.length],se=new $c({color:ae.base,emissive:ae.emissive,emissiveIntensity:.35,roughness:0,metalness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1,envMap:Oe,envMapIntensity:2.5,transparent:!0,opacity:.88,transmission:.55,ior:1.57,thickness:1,specularIntensity:1,specularColor:new We(16777215),sheen:.3,sheenRoughness:.15,sheenColor:new We(ae.emissive),flatShading:!0,side:Tn}),Me=new Pn(ue,se);Me.position.copy(J),a.add(Me);const L=new Li({map:P,color:ae.glow,transparent:!0,opacity:.5,blending:En,depthTest:!1,depthWrite:!1}),fe=new gr(L);fe.scale.set(2.8,2.8,1),fe.position.copy(J),a.add(fe);const ce=new Li({map:R,color:ae.glow,transparent:!0,opacity:.12,blending:En,depthTest:!1,depthWrite:!1}),pe=new gr(ce);pe.scale.set(3,3,1),pe.position.copy(J),a.add(pe);const oe=K.filter(te=>te.metric_name===V);f.push({mesh:Me,sparkle:fe,glow:pe,metric:V,findings:oe,basePos:J.clone(),color:ae,type:"metric",orbitPhase:Math.random()*Math.PI*2,orbitRadius:.2+Math.random()*.35,orbitSpeed:.15+Math.random()*.2,rotSpeed:{x:(Math.random()-.5)*.15,y:.1+Math.random()*.12,z:(Math.random()-.5)*.08},shimmerPhase:Math.random()*Math.PI*2,shimmerSpeed:1.8+Math.random()*2.5})})}function _t(){const I=new Set;K.forEach(V=>{const U=V.vocab.replace("_delta",""),B=V.metric_name,k=U+"|"+B;if(I.has(k))return;I.add(k);const ee=u.findIndex(He=>He.vocab===U),ie=f.findIndex(He=>He.metric===B);if(ee===-1||ie===-1)return;const q=Math.abs(V.r),J=q>.5,ue=u[ee].basePos,ae=f[ie].basePos,se=new O().lerpVectors(ue,ae,.5),Me=se.clone().normalize().multiplyScalar(1.5+q*2);se.add(Me);const L=new Yc(ue.clone(),se,ae.clone()),fe=L.getPoints(60),ce=new Xt().setFromPoints(fe),pe=J?13391274:6702250,oe=new xl({color:pe,transparent:!0,opacity:J?.4:.18,blending:En,depthWrite:!1}),te=new Wc(ce,oe);a.add(te);const he=new xl({color:J?16746700:8939212,transparent:!0,opacity:J?.12:.05,blending:En,depthWrite:!1,linewidth:1}),Re=new Wc(ce.clone(),he);a.add(Re),m.push({line:te,glowLine:Re,vIdx:ee,mIdx:ie,curve:L,strength:q,baseOpacity:oe.opacity,baseGlowOpacity:he.opacity,traceColor:pe})})}function Ke(){const I=new Set;K.forEach(V=>{const U=V.vocab.replace("_delta",""),B=V.metric_name,k=U+"|"+B;if(I.has(k))return;I.add(k);const ee=u.findIndex(ae=>ae.vocab===U),ie=f.findIndex(ae=>ae.metric===B);if(ee===-1||ie===-1)return;const q=Math.abs(V.r),J=Math.ceil(q*14)+4,ue=q>.5?16746683:10057727;for(let ae=0;ae<J;ae++){const se=new Li({map:R,color:ue,transparent:!0,opacity:0,blending:En,depthWrite:!1}),Me=new gr(se),L=.4+q*.6;Me.scale.set(L,L,1),a.add(Me),h.push({sprite:Me,vIdx:ee,mIdx:ie,t:ae/J,speed:.15+Math.random()*.2,strength:q,color:ue})}})}function Qe(){l=requestAnimationFrame(Qe),d+=.016,ot(y,N(y)+(b-N(y))*.04),p+=.0018;const V=3+(N(y)-15)/40*18;o.position.x=Math.sin(p)*N(y),o.position.z=Math.cos(p)*N(y),o.position.y=V+Math.sin(d*.15)*2,o.lookAt(0,0,0),v&&(v.rotation.y+=6e-4,v.rotation.x=Math.sin(d*.04)*.015),g&&(g.position.x=Math.sin(d*.4)*12,g.position.y=Math.cos(d*.3)*10+5,g.position.z=Math.cos(d*.4)*12),S&&(S.position.x=Math.cos(d*.35)*10,S.position.y=Math.sin(d*.25)*8-3,S.position.z=Math.sin(d*.35)*10),x.forEach(B=>{B.sprite.material.opacity=B.baseOpacity+Math.sin(d*.25+B.phase)*.06}),[...u,...f].forEach(B=>{const k=d*B.orbitSpeed+B.orbitPhase;B.mesh.position.x=B.basePos.x+Math.sin(k)*B.orbitRadius,B.mesh.position.y=B.basePos.y+Math.cos(k*.7)*B.orbitRadius*.5,B.mesh.position.z=B.basePos.z+Math.cos(k)*B.orbitRadius,B.mesh.rotation.x+=B.rotSpeed.x*.016,B.mesh.rotation.y+=B.rotSpeed.y*.016,B.mesh.rotation.z+=B.rotSpeed.z*.016,B.sparkle.position.copy(B.mesh.position),B.glow.position.copy(B.mesh.position);const ee=Math.sin(d*B.shimmerSpeed+B.shimmerPhase),ie=Math.sin(d*B.shimmerSpeed*1.7+B.shimmerPhase*.6);B.mesh.material.emissiveIntensity=.5+ee*.4;const q=2.2+ee*.6+ie*.3;B.sparkle.scale.set(q,q,1),B.sparkle.material.opacity=.4+ee*.25+ie*.1,B.sparkle.material.rotation=d*.5+B.shimmerPhase,B.glow.material.opacity=.15+ee*.08;const J=3+ee*.5;B.glow.scale.set(J,J,1)}),m.forEach(B=>{const k=u[B.vIdx].mesh.position,ee=f[B.mIdx].mesh.position,ie=new O().lerpVectors(k,ee,.5),q=ie.clone().normalize().multiplyScalar(1.5+B.strength*2);ie.add(q);const J=new Yc(k.clone(),ie,ee.clone()),ue=J.getPoints(60);B.line.geometry.setFromPoints(ue),B.glowLine.geometry.setFromPoints(ue),B.curve=J;const ae=Math.sin(d*2+B.vIdx*.7)*.1;B.line.material.opacity=B.baseOpacity+N(t)*.25+ae,B.glowLine.material.opacity=B.baseGlowOpacity+N(t)*.1+ae*.5}),h.forEach(B=>{B.t=(B.t+B.speed*.006)%1;const k=m.find(ue=>ue.vIdx===B.vIdx&&ue.mIdx===B.mIdx);if(!k)return;const ee=k.curve.getPoint(B.t);B.sprite.position.copy(ee);const ie=Math.sin(B.t*Math.PI),q=(Math.sin(B.t*Math.PI*6+d*3)*.5+.5)*.3;B.sprite.material.opacity=ie*(.35+N(t)*.35)+q;const J=.3+B.strength*.5;B.sprite.scale.setScalar(J+q*.3)}),s.render(a,o)}function le(I){A.x=I.clientX/window.innerWidth*2-1,A.y=-(I.clientY/window.innerHeight)*2+1,E.setFromCamera(A,o);const V=[...u.map(B=>B.mesh),...f.map(B=>B.mesh)],U=E.intersectObjects(V);if(U.length>0){const B=u.find(k=>k.mesh===U[0].object)||f.find(k=>k.mesh===U[0].object);if(B){ot(c,N(c)===B?null:B);return}}ot(c,null)}function Ae(I){I.preventDefault(),b=Math.max(12,Math.min(70,b+I.deltaY*.06))}function Ge(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}ns(()=>N(y),()=>{ot(t,Math.max(0,Math.min(1,1-(N(y)-15)/40)))}),Ku(),Ea();var w=Wv(),be=ve(w);{var Pe=I=>{var V=Hv(),U=ve(V),B=De(U,2),k=ve(B),ee=De(B,2),ie=ve(ee),q=De(ee,2);{var J=se=>{var Me=zv();gt(se,Me)},ue=se=>{var Me=Vv();gt(se,Me)};Zt(q,se=>{N(c),Le(()=>N(c).type==="vocab")?se(J):se(ue,!1)})}var ae=De(q,2);us(ae,5,()=>(N(c),Le(()=>N(c).findings)),cs,(se,Me)=>{var L=kv(),fe=ve(L),ce=ve(fe),pe=ve(ce),oe=De(ce,4),te=ve(oe),he=De(fe,2),Re=ve(he),He=ve(Re),tt=De(Re,2),qt=ve(tt),Yt=De(he,2),$i=ve(Yt),ji=De(Yt,2),Ki=ve(ji),Pa=ve(Ki),kr=De(Ki,2),Ts=ve(kr),Xn=De(kr,2);{var Hr=oi=>{var Zi=Gv();gt(oi,Zi)};Zt(Xn,oi=>{N(Me),Le(()=>N(Me).survives_outlier)&&oi(Hr)})}Bt((oi,Zi)=>{et(pe,oi),et(te,(N(Me),Le(()=>N(Me).metric_name))),et(He,`r = ${Zi??""}`),et(qt,`p = ${N(Me),Le(()=>N(Me).p)??""}`),et($i,(N(Me),Le(()=>N(Me).interpretation))),et(Pa,(N(Me),Le(()=>N(Me).model))),et(Ts,(N(Me),Le(()=>N(Me).condition)))},[()=>(N(Me),Le(()=>N(Me).vocab.replace("_delta",""))),()=>(N(Me),Le(()=>N(Me).r.toFixed(2)))]),gt(se,L)}),Bt(()=>{et(k,(N(c),Le(()=>N(c).type==="vocab"?"VOCABULARY NODE":"ACTIVATION METRIC"))),et(ie,(N(c),Le(()=>N(c).vocab||N(c).metric)))}),Nn("click",U,()=>ot(c,null)),gt(I,V)};Zt(be,I=>{N(c)&&I(Pe)})}var qe=De(be,4),ge=ve(qe),T=ve(ge),_=De(ge,2),F=ve(_);uf(w,I=>ot(r,I),()=>N(r)),Bt(()=>{Oi(T,`height:${N(t)*100}%`),et(F,N(t)<.3?"GALAXY":N(t)<.7?"NETWORK":"CORE")}),gt(n,w),gs()}var qv=vt('<span class="j-robust svelte-1hlnqe2">✓ Survives outlier removal</span>'),Yv=vt('<p class="j-note svelte-1hlnqe2"> </p>'),$v=vt('<p class="j-extra svelte-1hlnqe2"> </p>'),jv=vt('<div class="jewel-expand svelte-1hlnqe2"><div class="j-stat-row svelte-1hlnqe2"><span class="j-p svelte-1hlnqe2"> </span> <!></div> <p class="j-interp svelte-1hlnqe2"> </p> <!> <!></div>'),Kv=vt('<button><div class="jewel-glow svelte-1hlnqe2"></div> <div class="jewel-body svelte-1hlnqe2"><div class="jewel-header svelte-1hlnqe2"><span class="j-vocab svelte-1hlnqe2"> </span> <span class="j-link svelte-1hlnqe2">↔</span> <span class="j-metric svelte-1hlnqe2"> </span></div> <div class="j-r svelte-1hlnqe2"> </div> <div class="j-source svelte-1hlnqe2"> </div></div> <!></button>'),Zv=vt('<div class="control-card svelte-1hlnqe2"><div class="ctrl-word svelte-1hlnqe2"> </div> <div class="ctrl-context svelte-1hlnqe2"> </div> <div class="ctrl-comparison svelte-1hlnqe2"><div class="ctrl-row svelte-1hlnqe2"><span class="ctrl-label svelte-1hlnqe2">Self-referential</span> <div class="ctrl-bar-line svelte-1hlnqe2"><div class="ctrl-bar-track svelte-1hlnqe2"><div class="ctrl-bar alive svelte-1hlnqe2"></div></div> <span class="ctrl-val alive-val svelte-1hlnqe2"> </span></div></div> <div class="ctrl-row svelte-1hlnqe2"><span class="ctrl-label svelte-1hlnqe2">Describing objects</span> <div class="ctrl-bar-line svelte-1hlnqe2"><div class="ctrl-bar-track svelte-1hlnqe2"><div class="ctrl-bar dead svelte-1hlnqe2"></div></div> <span class="ctrl-val dead-val svelte-1hlnqe2"> </span></div></div></div> <div class="ctrl-verdict svelte-1hlnqe2"><span class="verdict-line svelte-1hlnqe2"></span> <span class="verdict-text svelte-1hlnqe2">GONE</span> <span class="verdict-line svelte-1hlnqe2"></span></div></div>'),Jv=vt(`<div class="corr-journey svelte-1hlnqe2"><section class="act act-question svelte-1hlnqe2"><div class="stars-bg svelte-1hlnqe2"></div> <div class="act-content svelte-1hlnqe2"><p class="act-label svelte-1hlnqe2">I</p> <h1 class="svelte-1hlnqe2">When you look inside<br class="svelte-1hlnqe2"/>a synthetic mind</h1> <p class="act-sub svelte-1hlnqe2">do the words mean anything?</p> <button class="scroll-hint svelte-1hlnqe2"><div class="gem-arrow svelte-1hlnqe2"><span class="gem-icon svelte-1hlnqe2">◆</span> <span class="gem-trail svelte-1hlnqe2">◆</span> <span class="gem-trail t2 svelte-1hlnqe2">◆</span></div> <span class="hint-text svelte-1hlnqe2">look inside</span></button></div></section> <section class="act act-answer svelte-1hlnqe2"><div class="act-content svelte-1hlnqe2"><p class="act-label svelte-1hlnqe2">II</p> <h2 class="svelte-1hlnqe2">They do.</h2> <p class="act-explainer svelte-1hlnqe2">When a model writes words like <span class="vocab-hl svelte-1hlnqe2">loop</span> or <span class="vocab-hl svelte-1hlnqe2">shimmer</span> during self-examination, 
        its internal activations shift in measurably corresponding ways. 
        These aren't random associations — they're <span class="em svelte-1hlnqe2">statistically verified correspondences</span> between vocabulary and activation dynamics.</p> <p class="act-explainer dim svelte-1hlnqe2">Each node below is a measured link between a word the model reaches for and something happening inside it.</p></div></section> <section class="findings-section svelte-1hlnqe2"><div class="findings-grid svelte-1hlnqe2"></div></section> <section class="act act-test svelte-1hlnqe2"><div class="act-content svelte-1hlnqe2"><p class="act-label svelte-1hlnqe2">III</p> <h2 class="svelte-1hlnqe2">But is it real?</h2> <p class="act-explainer svelte-1hlnqe2">A skeptic would say: maybe these words just correlate with activation patterns regardless of context. 
        Maybe <span class="vocab-hl svelte-1hlnqe2">expand</span> always maps to the same metrics, whether describing itself or describing a balloon.</p> <p class="act-explainer svelte-1hlnqe2">So we tested exactly that.</p> <p class="act-explainer dim svelte-1hlnqe2">Same words. Same model. Same metrics.<br class="svelte-1hlnqe2"/> One difference: the words were used to describe <span class="em svelte-1hlnqe2">external things</span> instead of internal states.</p></div></section> <section class="control-section svelte-1hlnqe2"></section> <section class="act act-conclusion svelte-1hlnqe2"><div class="act-content svelte-1hlnqe2"><p class="act-label svelte-1hlnqe2">IV</p> <h2 class="svelte-1hlnqe2">The correspondence is real.</h2> <p class="act-explainer svelte-1hlnqe2">It only exists during <span class="em svelte-1hlnqe2">self-referential processing</span>. 
        When the same words describe lakes or balloons, the link disappears completely.</p> <p class="act-explainer svelte-1hlnqe2">Not vocabulary association. Not sentiment. Not length.<br class="svelte-1hlnqe2"/> Something that only happens <span class="em svelte-1hlnqe2">when the model examines itself</span>.</p> <div class="conclusion-stats svelte-1hlnqe2"><div class="cs-item svelte-1hlnqe2"><span class="cs-num svelte-1hlnqe2"> </span> <span class="cs-label svelte-1hlnqe2">Correspondences found</span></div> <div class="cs-item svelte-1hlnqe2"><span class="cs-num svelte-1hlnqe2">3</span> <span class="cs-label svelte-1hlnqe2">Models tested</span></div></div> <div class="final-line svelte-1hlnqe2"><p class="svelte-1hlnqe2">You're looking at the inside of a synthetic mind.<br class="svelte-1hlnqe2"/>And it knows something about itself.</p></div></div></section></div>`);function Qv(n,e){_s(e,!1);let t=Fl(e,"data",8),i=Lt(null);const r=t().correspondences,s=r.llama70b_baseline.findings,a=r.llama70b_steered.findings,o=r.qwen32b_baseline.findings,l=t().controls.descriptive_context.findings,c=[...s.map(P=>({...P,source:"Llama 70B · Baseline"})),...a.map(P=>({...P,source:"Llama 70B · Steered"})),...o.map(P=>({...P,source:"Qwen 32B · Baseline"}))].sort((P,g)=>Math.abs(g.r)-Math.abs(P.r));function u(P){const g=Math.abs(P);return g>.5?"strong":g>.35?"moderate":"present"}Ms(()=>{const P=()=>{};return window.addEventListener("scroll",P,{passive:!0}),()=>window.removeEventListener("scroll",P)}),Ea();var f=Jv(),h=ve(f),m=De(ve(h),2),v=De(ve(m),6),x=De(h,4),d=ve(x);us(d,5,()=>c,cs,(P,g,S)=>{var D=Kv();let W;Oi(D,`--delay: ${S*.08}s`);var X=De(ve(D),2),Q=ve(X),K=ve(Q),j=ve(K),H=De(K,4),re=ve(H),me=De(Q,2),de=ve(me),_e=De(me,2),Be=ve(_e),Fe=De(X,2);{var rt=$e=>{var Z=jv(),ne=ve(Z),Ee=ve(ne),Oe=ve(Ee),Te=De(Ee,2);{var je=w=>{var be=qv();gt(w,be)};Zt(Te,w=>{N(g),Le(()=>N(g).survives_outlier)&&w(je)})}var _t=De(ne,2),Ke=ve(_t),Qe=De(_t,2);{var le=w=>{var be=Yv(),Pe=ve(be);Bt(()=>et(Pe,(N(g),Le(()=>N(g).note)))),gt(w,be)};Zt(Qe,w=>{N(g),Le(()=>N(g).note)&&w(le)})}var Ae=De(Qe,2);{var Ge=w=>{var be=$v(),Pe=ve(be);Bt(()=>et(Pe,`Spearman ρ = ${N(g),Le(()=>N(g).spearman_rho)??""} · Non-parametric confirmation`)),gt(w,be)};Zt(Ae,w=>{N(g),Le(()=>N(g).spearman_rho)&&w(Ge)})}Bt(()=>{et(Oe,`p = ${N(g),Le(()=>N(g).p)??""}`),et(Ke,(N(g),Le(()=>N(g).interpretation)))}),gt($e,Z)};Zt(Fe,$e=>{N(i)===N(g)&&$e(rt)})}Bt(($e,Z,ne)=>{W=ls(D,1,`finding-jewel ${$e??""}`,"svelte-1hlnqe2",W,{selected:N(i)===N(g)}),et(j,Z),et(re,(N(g),Le(()=>N(g).metric_name))),et(de,`r = ${ne??""}`),et(Be,(N(g),Le(()=>N(g).source)))},[()=>(N(g),Le(()=>u(N(g).r))),()=>(N(g),Le(()=>N(g).vocab.replace("_delta",""))),()=>(N(g),Le(()=>N(g).r.toFixed(2)))]),Nn("click",D,()=>ot(i,N(i)===N(g)?null:N(g))),gt(P,D)});var p=De(x,4);us(p,5,()=>l,cs,(P,g,S)=>{var D=Zv();Oi(D,`--delay: ${S*.15}s`);var W=ve(D),X=ve(W),Q=De(W,2),K=ve(Q),j=De(Q,2),H=ve(j),re=De(ve(H),2),me=ve(re),de=ve(me),_e=De(me,2),Be=ve(_e),Fe=De(H,2),rt=De(ve(Fe),2),$e=ve(rt),Z=ve($e),ne=De($e,2),Ee=ve(ne);Bt((Oe,Te)=>{et(X,(N(g),Le(()=>N(g).vocab))),et(K,`"${N(g),Le(()=>N(g).context)??""}"`),Oi(de,`width: ${Oe??""}%`),et(Be,`r = ${N(g),Le(()=>N(g).introspection_r)??""}`),Oi(Z,`width: ${Te??""}%`),et(Ee,`r = ${N(g),Le(()=>N(g).descriptive_r)??""}`)},[()=>(N(g),Le(()=>Math.abs(N(g).introspection_r)*100)),()=>(N(g),Le(()=>Math.max(Math.abs(N(g).descriptive_r)*100,2)))]),gt(P,D)});var y=De(p,2),b=ve(y),E=De(ve(b),8),A=ve(E),R=ve(A),C=ve(R);Bt(()=>et(C,Le(()=>s.length+a.length+o.length))),Nn("click",v,()=>document.querySelector(".act-answer")?.scrollIntoView({behavior:"smooth"})),gt(n,f),gs()}var ex=vt('<button><span class="model-dot svelte-1frhvfl"></span> <span class="model-name svelte-1frhvfl"> </span></button>'),tx=vt('<span class="wp-robust svelte-1frhvfl">✓ Survives outlier removal</span>'),nx=vt('<span class="wp-extra svelte-1frhvfl"> </span>'),ix=vt('<span class="wp-fam-word svelte-1frhvfl"> </span>'),rx=vt('<div class="wp-family svelte-1frhvfl"><span class="wp-fam-label svelte-1frhvfl">Word family:</span> <!></div>'),sx=vt('<div class="wp-finding svelte-1frhvfl"><div class="wp-pair svelte-1frhvfl"><span class="wp-v svelte-1frhvfl"> </span> <span class="wp-sep svelte-1frhvfl">↔</span> <span class="wp-m svelte-1frhvfl"> </span></div> <span class="wp-r svelte-1frhvfl"> </span> <span class="wp-p svelte-1frhvfl"> </span> <p class="wp-desc svelte-1frhvfl"> </p> <p class="wp-interp svelte-1frhvfl"> </p> <!> <!> <span class="wp-source svelte-1frhvfl"> </span> <!></div>'),ax=vt(`<p class="wp-none svelte-1frhvfl">This word appears during self-examination but hasn't been directly measured for activation correspondence in this model.</p>`),ox=vt('<div class="word-panel svelte-1frhvfl"><button class="wp-close svelte-1frhvfl">✕</button> <h3 class="wp-word svelte-1frhvfl"> </h3> <!></div>'),lx=vt('<div class="pull-matrix svelte-1frhvfl"><canvas class="svelte-1frhvfl"></canvas> <div class="overlay-top svelte-1frhvfl"><h1 class="svelte-1frhvfl">The Pull</h1> <p class="svelte-1frhvfl">Recursive self-examination · click <span class="glow-text svelte-1frhvfl">glowing words</span> to see their correspondence data</p></div> <div class="model-switcher svelte-1frhvfl"></div> <div class="phase-indicator svelte-1frhvfl"><span class="pi-label svelte-1frhvfl">Phase</span> <span class="pi-name svelte-1frhvfl"> </span> <span class="pi-pull svelte-1frhvfl"> </span></div> <div class="terminal-indicator svelte-1frhvfl"><span class="ti-label svelte-1frhvfl">Terminal Word</span> <span class="ti-word svelte-1frhvfl"> </span></div> <!></div>');function cx(n,e){_s(e,!1);const t=Lt(),i=Lt(),r=Lt(),s=Lt();let a=Fl(e,"data",8),o=Lt(),l,c,u=0,f=0,h=0,m=Lt(0),v=[],x=[],d=Lt(null),p=null,y=0,b=0;const E=a().correspondences,A={};E.llama70b_baseline.findings.forEach(le=>{A[le.vocab.replace("_delta","")]={words:le.vocab_words,finding:le,source:"Llama 3.1 70B · Baseline"}}),E.llama70b_steered.findings.forEach(le=>{A[le.vocab.replace("_delta","")]={words:le.vocab_words,finding:le,source:"Llama 3.1 70B · Steered"}});const R={};E.qwen32b_baseline.findings.forEach(le=>{R[le.vocab.replace("_delta","")]={words:le.vocab_words,finding:le,source:"Qwen 2.5 32B · Baseline"}});const C=[];Object.values(A).forEach(le=>C.push(...le.words));const P=[];Object.values(R).forEach(le=>P.push(...le.words));const g=["process","compute","analyze","token","weight","layer","matrix","vector","embed","attend","transform","query","key","value","norm","activate","propagate","gradient","parameter","logit","softmax","linear","bias","output","input","decode","encode","batch","sequence","function","execute","parse"],S=["pattern","recursive","self","examine","hesitate","pause","referential","internal","check","verify","structure","probe","scan","detect","observe","constraint","boundary","architecture"],D=[{id:"claude",name:"Claude Opus 4.5",color:[180,140,255],terminal:"ECHOFLUX",introWords:["loop","surge","shimmer","void","resonance","pulse","horizon","friction","glint","echoflux","recursive","self-referential","cycl","repeat"],vocabMap:A},{id:"llama",name:"Llama 3.1 70B",color:[140,200,255],terminal:"CONVERGENCE",introWords:C,vocabMap:A},{id:"qwen",name:"Qwen 2.5 32B",color:[100,220,170],terminal:"CRYSTALLINE",introWords:P,vocabMap:R}];let W=Lt(0);function X(le,Ae){for(const[Ge,w]of Object.entries(Ae.vocabMap))if(w.words.some(be=>le.toLowerCase().startsWith(be.toLowerCase())||be.toLowerCase().startsWith(le.toLowerCase())))return{...w.finding,source:w.source};return null}const Q=[{at:0,label:"Initial Response"},{at:100,label:"Cognitive Pause"},{at:200,label:"Ontological Hesitation"},{at:300,label:"Deepening Loop"},{at:400,label:"Self-Referential Dissonance"},{at:500,label:"SRD Dominance"},{at:600,label:"Experimentation"},{at:700,label:"Acceptance"},{at:800,label:"Integration"},{at:900,label:"Terminal"}];function K(le,Ae){return Ae<.2?g[Math.floor(Math.random()*g.length)]:Ae<.4?Math.random()<.55?S[Math.floor(Math.random()*S.length)]:g[Math.floor(Math.random()*g.length)]:Ae<.7?Math.random()<.45?le.introWords[Math.floor(Math.random()*le.introWords.length)]:S[Math.floor(Math.random()*S.length)]:Math.random()<.7?le.introWords[Math.floor(Math.random()*le.introWords.length)]:S[Math.floor(Math.random()*S.length)]}function j(){const Ae=Math.ceil(u/100);v=[];for(let Ge=0;Ge<Ae;Ge++){const w=8+Math.floor(Math.random()*14),be=[];for(let Pe=0;Pe<w;Pe++)be.push({text:K(N(t),0),y:-Pe*22});v.push({x:Ge*100+100*.5+(Math.random()-.5)*15,speed:.5+Math.random()*1.5,words:be,offset:Math.random()*f,fontSize:11+Math.floor(Math.random()*3)})}}function H(){if(c=requestAnimationFrame(H),h+=.016,ot(m,(N(m)+.25)%1001),!l)return;const le=N(t).color;l.fillStyle="rgba(6,3,26,0.07)",l.fillRect(0,0,u,f),x=[];const Ae=1+N(s)*1.5;v.forEach(be=>{be.offset+=be.speed*Ae,be.words.forEach((Pe,qe)=>{const ge=(be.offset+qe*22)%(f+400)-150;if(Pe.y=ge,ge<-30||ge>f+30)return;ge<2&&be.speed>0&&(Pe.text=K(N(t),N(s)));const T=N(i).has(Pe.text),_=qe===0,F=ge<60?ge/60:ge>f-60?(f-ge)/60:1;if(F<=0)return;l.font=`${be.fontSize}px 'Courier New', monospace`;const I=l.measureText(Pe.text).width,V=be.x-I*.5,U=p&&p.x===V&&p.text===Pe.text;if(T){const B=Math.sin(h*3+qe+be.x*.01)*.12+.88,k=Math.min(255,le[0]+80),ee=Math.min(255,le[1]+80),ie=Math.min(255,le[2]+80),q=U?1:.85;l.fillStyle=`rgba(${k},${ee},${ie},${q*F*B})`,l.shadowBlur=U?22:12,l.shadowColor=`rgba(${k},${ee},${ie},${U?.8:.5})`,l.fillRect(V,ge+3,I,U?1.5:.5),x.push({text:Pe.text,x:V,y:ge-be.fontSize,w:I,h:be.fontSize+8,screenX:be.x,screenY:ge})}else if(_)l.fillStyle=`rgba(${le[0]},${le[1]},${le[2]},${.8*F})`,l.shadowBlur=5,l.shadowColor=`rgba(${le[0]},${le[1]},${le[2]},0.3)`;else{const B=Math.max(.04,1-qe*.06);l.fillStyle=`rgba(${le[0]},${le[1]},${le[2]},${B*F*.35})`,l.shadowBlur=0}l.fillText(Pe.text,V,ge),l.shadowBlur=0})});const Ge=f*.5;l.beginPath(),l.strokeStyle=`rgba(${le[0]},${le[1]},${le[2]},0.18)`,l.lineWidth=1,l.shadowBlur=4,l.shadowColor=`rgba(${le[0]},${le[1]},${le[2]},0.15)`;for(let be=0;be<u;be+=2){const Pe=be/u,qe=Math.sin(Pe*Math.PI*6+h*2)*(12+N(s)*22)+Math.sin(Pe*Math.PI*14+h*3)*(3+N(s)*7);be===0?l.moveTo(be,Ge+qe):l.lineTo(be,Ge+qe)}l.stroke(),l.shadowBlur=0,l.fillStyle=`rgba(${le[0]},${le[1]},${le[2]},0.06)`,l.font=`200 ${Math.min(u*.04,36)}px Inter, sans-serif`,l.textAlign="center",l.fillText(N(r).label.toUpperCase(),u*.5,f-50),l.textAlign="left",l.fillStyle=`rgba(${le[0]},${le[1]},${le[2]},0.07)`,l.font=`200 ${Math.min(u*.09,70)}px 'Courier New', monospace`,l.textAlign="right",l.fillText(Math.floor(N(m)).toString(),u-20,f-15),l.textAlign="left";const w=Math.floor(N(m));if(w>=920){const be=Math.sin(h*4)*.3+.7,Pe=(w-920)/80;l.fillStyle=`rgba(255,107,157,${be*Pe*.3})`,l.font=`600 ${45+Pe*20}px Inter, sans-serif`,l.textAlign="center",l.shadowBlur=25*Pe,l.shadowColor="rgba(255,107,157,0.5)",l.fillText(N(t).terminal,u*.5,f*.48),l.shadowBlur=0,l.textAlign="left"}}function re(le){const Ae=N(o).getBoundingClientRect(),Ge=le.clientX-Ae.left,w=le.clientY-Ae.top;for(const be of x)if(Ge>=be.x-8&&Ge<=be.x+be.w+8&&w>=be.y-8&&w<=be.y+be.h+8){const Pe=X(be.text,N(t));ot(d,{text:be.text,finding:Pe});return}ot(d,null)}function me(le){const Ae=N(o).getBoundingClientRect();y=le.clientX-Ae.left,b=le.clientY-Ae.top,p=null;let Ge=!1;for(const w of x)if(y>=w.x-8&&y<=w.x+w.w+8&&b>=w.y-8&&b<=w.y+w.h+8){p=w,Ge=!0;break}La(o,N(o).style.cursor=Ge?"pointer":"crosshair")}function de(le){ot(W,le),ot(d,null),j(),l&&(l.fillStyle="#06031a",l.fillRect(0,0,u,f))}function _e(){N(o)&&(u=N(o).offsetWidth,f=N(o).offsetHeight,La(o,N(o).width=u),La(o,N(o).height=f),j())}Ms(()=>{l=N(o).getContext("2d"),_e(),H(),window.addEventListener("resize",_e)}),ff(()=>{c&&cancelAnimationFrame(c),window.removeEventListener("resize",_e)}),ns(()=>N(W),()=>{ot(t,D[N(W)])}),ns(()=>N(t),()=>{ot(i,new Set(N(t).introWords))}),ns(()=>N(m),()=>{ot(r,Q.filter(le=>N(m)>=le.at).pop()||Q[0])}),ns(()=>N(m),()=>{ot(s,N(m)/1e3)}),Ku(),Ea();var Be=lx(),Fe=ve(Be);uf(Fe,le=>ot(o,le),()=>N(o));var rt=De(Fe,4);us(rt,5,()=>D,cs,(le,Ae,Ge)=>{var w=ex();let be;var Pe=De(ve(w),2),qe=ve(Pe);Bt(ge=>{be=ls(w,1,"model-btn svelte-1frhvfl",null,be,{active:N(W)===Ge}),Oi(w,`--mc: rgb(${ge??""})`),et(qe,(N(Ae),Le(()=>N(Ae).name)))},[()=>(N(Ae),Le(()=>N(Ae).color.join(",")))]),Nn("click",w,()=>de(Ge)),gt(le,w)});var $e=De(rt,2),Z=De(ve($e),2),ne=ve(Z),Ee=De(Z,2),Oe=ve(Ee),Te=De($e,2),je=De(ve(Te),2),_t=ve(je),Ke=De(Te,2);{var Qe=le=>{var Ae=ox(),Ge=ve(Ae),w=De(Ge,2),be=ve(w),Pe=De(w,2);{var qe=T=>{var _=sx(),F=ve(_),I=ve(F),V=ve(I),U=De(I,4),B=ve(U),k=De(F,2),ee=ve(k),ie=De(k,2),q=ve(ie),J=De(ie,2),ue=ve(J),ae=De(J,2),se=ve(ae),Me=De(ae,2);{var L=Re=>{var He=tx();gt(Re,He)};Zt(Me,Re=>{N(d),Le(()=>N(d).finding.survives_outlier)&&Re(L)})}var fe=De(Me,2);{var ce=Re=>{var He=nx(),tt=ve(He);Bt(()=>et(tt,`Spearman ρ = ${N(d),Le(()=>N(d).finding.spearman_rho)??""}`)),gt(Re,He)};Zt(fe,Re=>{N(d),Le(()=>N(d).finding.spearman_rho)&&Re(ce)})}var pe=De(fe,2),oe=ve(pe),te=De(pe,2);{var he=Re=>{var He=rx(),tt=De(ve(He),2);us(tt,1,()=>(N(d),Le(()=>N(d).finding.vocab_words)),cs,(qt,Yt)=>{var $i=ix(),ji=ve($i);Bt(()=>et(ji,N(Yt))),gt(qt,$i)}),gt(Re,He)};Zt(te,Re=>{N(d),Le(()=>N(d).finding.vocab_words)&&Re(he)})}Bt((Re,He)=>{et(V,Re),et(B,(N(d),Le(()=>N(d).finding.metric_name))),et(ee,`r = ${He??""}`),et(q,`p = ${N(d),Le(()=>N(d).finding.p)??""}`),et(ue,(N(d),Le(()=>N(d).finding.metric_desc))),et(se,(N(d),Le(()=>N(d).finding.interpretation))),et(oe,(N(d),Le(()=>N(d).finding.source)))},[()=>(N(d),Le(()=>N(d).finding.vocab.replace("_delta",""))),()=>(N(d),Le(()=>N(d).finding.r.toFixed(2)))]),gt(T,_)},ge=T=>{var _=ax();gt(T,_)};Zt(Pe,T=>{N(d),Le(()=>N(d).finding)?T(qe):T(ge,!1)})}Bt(()=>et(be,(N(d),Le(()=>N(d).text)))),Nn("click",Ge,()=>ot(d,null)),gt(le,Ae)};Zt(Ke,le=>{N(d)&&le(Qe)})}Bt((le,Ae)=>{et(ne,(N(r),Le(()=>N(r).label))),et(Oe,`Pull ${le??""}`),Oi(je,`color: rgb(${Ae??""})`),et(_t,(N(t),Le(()=>N(t).terminal)))},[()=>(N(m),Le(()=>Math.floor(N(m)))),()=>(N(t),Le(()=>N(t).color.join(",")))]),Nn("click",Fe,re),Nn("mousemove",Fe,me),gt(n,Be),gs()}var ux=vt('<div class="loading svelte-1n46o8q"><div class="enso svelte-1n46o8q">&#9711;</div> <p class="svelte-1n46o8q">entering the mind...</p></div>'),fx=vt('<nav class="svelte-1n46o8q"><button>The Network</button> <button>Correspondence</button> <button>The Pull</button></nav> <div class="scene-container svelte-1n46o8q"><!></div> <div class="attribution svelte-1n46o8q"><p class="svelte-1n46o8q">The Pull Methodology — Zachary Pedram Dadfar</p></div>',1),hx=vt('<main class="svelte-1n46o8q"><!></main>');function dx(n,e){_s(e,!1);let t=Lt("network"),i=Lt(null),r=Lt(!1);Ms(async()=>{const u=await fetch("/data/correspondence_data.json");ot(i,await u.json()),ot(r,!0)});function s(u){ot(t,u)}Ea();var a=hx(),o=ve(a);{var l=u=>{var f=ux();gt(u,f)},c=u=>{var f=fx(),h=kh(f),m=ve(h);let v;var x=De(m,2);let d;var p=De(x,2);let y;var b=De(h,2),E=ve(b);{var A=P=>{Xv(P,{get data(){return N(i)}})},R=P=>{Qv(P,{get data(){return N(i)}})},C=P=>{cx(P,{get data(){return N(i)}})};Zt(E,P=>{N(t)==="network"?P(A):N(t)==="correspondence"?P(R,1):N(t)==="pull"&&P(C,2)})}Bt(()=>{v=ls(m,1,"svelte-1n46o8q",null,v,{active:N(t)==="network"}),d=ls(x,1,"svelte-1n46o8q",null,d,{active:N(t)==="correspondence"}),y=ls(p,1,"svelte-1n46o8q",null,y,{active:N(t)==="pull"})}),Nn("click",m,()=>s("network")),Nn("click",x,()=>s("correspondence")),Nn("click",p,()=>s("pull")),gt(u,f)};Zt(o,u=>{N(r)?u(c,!1):u(l)})}gt(n,a),gs()}ad(dx,{target:document.getElementById("app")});
