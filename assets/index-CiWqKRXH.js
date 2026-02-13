(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const Zh=!1;var Su=Array.isArray,Jh=Array.prototype.indexOf,ya=Array.prototype.includes,mn=Array.from,Kh=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,Qh=Object.getOwnPropertyDescriptors,ed=Object.prototype,td=Array.prototype,yu=Object.getPrototypeOf,rc=Object.isExtensible;function id(i){return i()}function ho(i){for(var e=0;e<i.length;e++)i[e]()}function bu(){var i,e,t=new Promise((r,a)=>{i=r,e=a});return{promise:t,resolve:i,reject:e}}const It=2,sn=4,cs=8,Eu=1<<24,sr=16,Ci=32,jr=64,_l=128,hi=512,Tt=1024,Nt=2048,fi=4096,ai=8192,Qi=16384,xl=32768,ba=65536,ac=1<<17,Tu=1<<18,Da=1<<19,wu=1<<20,Ji=1<<25,kr=32768,fo=1<<21,Ml=1<<22,vr=1<<23,Gr=Symbol("$state"),rd=Symbol("legacy props"),ma=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Au(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ad(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function sd(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function nd(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function od(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ld(i){throw new Error("https://svelte.dev/e/effect_orphan")}function cd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ud(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function hd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function dd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const pd=1,md=2,Ru=4,gd=8,vd=16,_d=2,xd=4,Md=8,Sd=1,yd=2,Lt=Symbol();function bd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Cu(i){return i===this.v}function Ed(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Pu(i){return!Ed(i,this.v)}let Ia=!1,Td=!1;function wd(){Ia=!0}let vt=null;function Ea(i){vt=i}function us(i,e=!1,t){vt={p:vt,i:!1,c:null,e:null,s:i,x:null,l:Ia&&!e?{s:null,u:null,$:[]}:null}}function hs(i){var e=vt,t=e.e;if(t!==null){e.e=null;for(var r of t)qu(r)}return e.i=!0,vt=e.p,{}}function ds(){return!Ia||vt!==null&&vt.l===null}let ga=[];function Ad(){var i=ga;ga=[],ho(i)}function er(i){if(ga.length===0){var e=ga;queueMicrotask(()=>{e===ga&&Ad()})}ga.push(i)}function Lu(i){var e=lt;if(e===null)return tt.f|=vr,i;if((e.f&xl)===0){if((e.f&_l)===0)throw i;e.b.error(i)}else Ta(i,e)}function Ta(i,e){for(;e!==null;){if((e.f&_l)!==0)try{e.b.error(i);return}catch(t){i=t}e=e.parent}throw i}const Rd=-7169;function bt(i,e){i.f=i.f&Rd|e}function Sl(i){(i.f&hi)!==0||i.deps===null?bt(i,Tt):bt(i,fi)}function Uu(i){if(i!==null)for(const e of i)(e.f&It)===0||(e.f&kr)===0||(e.f^=kr,Uu(e.deps))}function Du(i,e,t){(i.f&Nt)!==0?e.add(i):(i.f&fi)!==0&&t.add(i),Uu(i.deps),bt(i,Tt)}const Ss=new Set;let Mt=null,yi=null,li=[],yl=null,po=!1;class _r{committed=!1;current=new Map;previous=new Map;#e=new Set;#o=new Set;#t=0;#s=0;#n=null;#r=new Set;#i=new Set;#a=new Map;is_fork=!1;#l=!1;is_deferred(){return this.is_fork||this.#s>0}skip_effect(e){this.#a.has(e)||this.#a.set(e,{d:[],m:[]})}unskip_effect(e){var t=this.#a.get(e);if(t){this.#a.delete(e);for(var r of t.d)bt(r,Nt),Ei(r);for(r of t.m)bt(r,fi),Ei(r)}}process(e){li=[],this.apply();var t=[],r=[];for(const a of e)this.#c(a,t,r);if(this.is_deferred()){this.#u(r),this.#u(t);for(const[a,s]of this.#a)Ou(a,s)}else{for(const a of this.#e)a();this.#e.clear(),this.#t===0&&this.#h(),Mt=null,sc(r),sc(t),this.#n?.resolve()}yi=null}#c(e,t,r){e.f^=Tt;for(var a=e.first,s=null;a!==null;){var n=a.f,o=(n&(Ci|jr))!==0,l=o&&(n&Tt)!==0,c=l||(n&ai)!==0||this.#a.has(a);if(!c&&a.fn!==null){o?a.f^=Tt:s!==null&&(n&(sn|cs|Eu))!==0?s.b.defer_effect(a):(n&sn)!==0?t.push(a):Na(a)&&((n&sr)!==0&&this.#i.add(a),Aa(a));var u=a.first;if(u!==null){a=u;continue}}var f=a.parent;for(a=a.next;a===null&&f!==null;)f===s&&(s=null),a=f.next,f=f.parent}}#u(e){for(var t=0;t<e.length;t+=1)Du(e[t],this.#r,this.#i)}capture(e,t){t!==Lt&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&vr)===0&&(this.current.set(e,e.v),yi?.set(e,e.v))}activate(){Mt=this,this.apply()}deactivate(){Mt===this&&(Mt=null,yi=null)}flush(){if(this.activate(),li.length>0){if(Cd(),Mt!==null&&Mt!==this)return}else this.#t===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#o)e(this);this.#o.clear()}#h(){if(Ss.size>1){this.previous.clear();var e=yi,t=!0;for(const a of Ss){if(a===this){t=!1;continue}const s=[];for(const[o,l]of this.current){if(a.current.has(o))if(t&&l!==a.current.get(o))a.current.set(o,l);else continue;s.push(o)}if(s.length===0)continue;const n=[...a.current.keys()].filter(o=>!this.current.has(o));if(n.length>0){var r=li;li=[];const o=new Set,l=new Map;for(const c of s)Iu(c,n,o,l);if(li.length>0){Mt=a,a.apply();for(const c of li)a.#c(c,[],[]);a.deactivate()}li=r}}Mt=null,yi=e}this.committed=!0,Ss.delete(this)}increment(e){this.#t+=1,e&&(this.#s+=1)}decrement(e){this.#t-=1,e&&(this.#s-=1),!this.#l&&(this.#l=!0,er(()=>{this.#l=!1,this.is_deferred()?li.length>0&&this.flush():this.revive()}))}revive(){for(const e of this.#r)this.#i.delete(e),bt(e,Nt),Ei(e);for(const e of this.#i)bt(e,fi),Ei(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#o.add(e)}settled(){return(this.#n??=bu()).promise}static ensure(){if(Mt===null){const e=Mt=new _r;Ss.add(Mt),er(()=>{Mt===e&&e.flush()})}return Mt}apply(){}}function Cd(){po=!0;try{for(var i=0;li.length>0;){var e=_r.ensure();if(i++>1e3){var t,r;Pd()}e.process(li),xr.clear()}}finally{li=[],po=!1,yl=null}}function Pd(){try{cd()}catch(i){Ta(i,yl)}}let Zi=null;function sc(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var r=i[t++];if((r.f&(Qi|ai))===0&&Na(r)&&(Zi=new Set,Aa(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null&&r.ac===null?Ju(r):r.fn=null),Zi?.size>0)){xr.clear();for(const a of Zi){if((a.f&(Qi|ai))!==0)continue;const s=[a];let n=a.parent;for(;n!==null;)Zi.has(n)&&(Zi.delete(n),s.push(n)),n=n.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Qi|ai))===0&&Aa(l)}}Zi.clear()}}Zi=null}}function Iu(i,e,t,r){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const a of i.reactions){const s=a.f;(s&It)!==0?Iu(a,e,t,r):(s&(Ml|sr))!==0&&(s&Nt)===0&&Nu(a,e,r)&&(bt(a,Nt),Ei(a))}}function Nu(i,e,t){const r=t.get(i);if(r!==void 0)return r;if(i.deps!==null)for(const a of i.deps){if(ya.call(e,a))return!0;if((a.f&It)!==0&&Nu(a,e,t))return t.set(a,!0),!0}return t.set(i,!1),!1}function Ei(i){for(var e=yl=i;e.parent!==null;){e=e.parent;var t=e.f;if(po&&e===lt&&(t&sr)!==0&&(t&Tu)===0)return;if((t&(jr|Ci))!==0){if((t&Tt)===0)return;e.f^=Tt}}li.push(e)}function Ou(i,e){if(!((i.f&Ci)!==0&&(i.f&Tt)!==0)){(i.f&Nt)!==0?e.d.push(i):(i.f&fi)!==0&&e.m.push(i),bt(i,Tt);for(var t=i.first;t!==null;)Ou(t,e),t=t.next}}function Ld(i){let e=0,t=Wr(0),r;return()=>{Al()&&(I(t),gn(()=>(e===0&&(r=Ue(()=>i(()=>ts(t)))),e+=1,()=>{er(()=>{e-=1,e===0&&(r?.(),r=void 0,ts(t))})})))}}var Ud=ba|Da|_l;function Dd(i,e,t){new Id(i,e,t)}class Id{parent;is_pending=!1;#e;#o=null;#t;#s;#n;#r=null;#i=null;#a=null;#l=null;#c=null;#u=0;#h=0;#p=!1;#f=!1;#m=new Set;#g=new Set;#d=null;#S=Ld(()=>(this.#d=Wr(this.#u),()=>{this.#d=null}));constructor(e,t,r){this.#e=e,this.#t=t,this.#s=r,this.parent=lt.b,this.is_pending=!!this.#t.pending,this.#n=Rl(()=>{lt.b=this;{var a=this.#x();try{this.#r=Si(()=>r(a))}catch(s){this.error(s)}this.#h>0?this.#_():this.is_pending=!1}return()=>{this.#c?.remove()}},Ud)}#y(){try{this.#r=Si(()=>this.#s(this.#e))}catch(e){this.error(e)}}#b(){const e=this.#t.pending;e&&(this.#i=Si(()=>e(this.#e)),er(()=>{var t=this.#x();this.#r=this.#v(()=>(_r.ensure(),Si(()=>this.#s(t)))),this.#h>0?this.#_():(Hr(this.#i,()=>{this.#i=null}),this.is_pending=!1)}))}#x(){var e=this.#e;return this.is_pending&&(this.#c=xa(),this.#e.before(this.#c),e=this.#c),e}defer_effect(e){Du(e,this.#m,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#t.pending}#v(e){var t=lt,r=tt,a=vt;zi(this.#n),pi(this.#n),Ea(this.#n.ctx);try{return e()}catch(s){return Lu(s),null}finally{zi(t),pi(r),Ea(a)}}#_(){const e=this.#t.pending;this.#r!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#c),eh(this.#r,this.#l)),this.#i===null&&(this.#i=Si(()=>e(this.#e)))}#M(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e);return}if(this.#h+=e,this.#h===0){this.is_pending=!1;for(const t of this.#m)bt(t,Nt),Ei(t);for(const t of this.#g)bt(t,fi),Ei(t);this.#m.clear(),this.#g.clear(),this.#i&&Hr(this.#i,()=>{this.#i=null}),this.#l&&(this.#e.before(this.#l),this.#l=null)}}update_pending_count(e){this.#M(e),this.#u+=e,!(!this.#d||this.#p)&&(this.#p=!0,er(()=>{this.#p=!1,this.#d&&wa(this.#d,this.#u)}))}get_effect_pending(){return this.#S(),I(this.#d)}error(e){var t=this.#t.onerror;let r=this.#t.failed;if(this.#f||!t&&!r)throw e;this.#r&&($t(this.#r),this.#r=null),this.#i&&($t(this.#i),this.#i=null),this.#a&&($t(this.#a),this.#a=null);var a=!1,s=!1;const n=()=>{if(a){bd();return}a=!0,s&&fd(),_r.ensure(),this.#u=0,this.#a!==null&&Hr(this.#a,()=>{this.#a=null}),this.is_pending=this.has_pending_snippet(),this.#r=this.#v(()=>(this.#f=!1,Si(()=>this.#s(this.#e)))),this.#h>0?this.#_():this.is_pending=!1};er(()=>{try{s=!0,t?.(e,n),s=!1}catch(o){Ta(o,this.#n&&this.#n.parent)}r&&(this.#a=this.#v(()=>{_r.ensure(),this.#f=!0;try{return Si(()=>{r(this.#e,()=>e,()=>n)})}catch(o){return Ta(o,this.#n.parent),null}finally{this.#f=!1}}))})}}function Nd(i,e,t,r){const a=ds()?bl:El;var s=i.filter(h=>!h.settled);if(t.length===0&&s.length===0){r(e.map(a));return}var n=Mt,o=lt,l=Od(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function u(h){l();try{r(h)}catch(p){(o.f&Qi)===0&&Ta(p,o)}n?.deactivate(),mo()}if(t.length===0){c.then(()=>u(e.map(a)));return}function f(){l(),Promise.all(t.map(h=>Fd(h))).then(h=>u([...e.map(a),...h])).catch(h=>Ta(h,o))}c?c.then(f):f()}function Od(){var i=lt,e=tt,t=vt,r=Mt;return function(a=!0){zi(i),pi(e),Ea(t),a&&r?.activate()}}function mo(){zi(null),pi(null),Ea(null)}function bl(i){var e=It|Nt,t=tt!==null&&(tt.f&It)!==0?tt:null;return lt!==null&&(lt.f|=Da),{ctx:vt,deps:null,effects:null,equals:Cu,f:e,fn:i,reactions:null,rv:0,v:Lt,wv:0,parent:t??lt,ac:null}}function Fd(i,e,t){let r=lt;r===null&&ad();var a=r.b,s=void 0,n=Wr(Lt),o=!tt,l=new Map;return qd(()=>{var c=bu();s=c.promise;try{Promise.resolve(i()).then(c.resolve,c.reject).then(()=>{u===Mt&&u.committed&&u.deactivate(),mo()})}catch(p){c.reject(p),mo()}var u=Mt;if(o){var f=a.is_rendered();a.update_pending_count(1),u.increment(f),l.get(u)?.reject(ma),l.delete(u),l.set(u,c)}const h=(p,v=void 0)=>{if(u.activate(),v)v!==ma&&(n.f|=vr,wa(n,v));else{(n.f&vr)!==0&&(n.f^=vr),wa(n,p);for(const[x,d]of l){if(l.delete(x),x===u)break;d.reject(ma)}}o&&(a.update_pending_count(-1),u.decrement(f))};c.promise.then(h,p=>h(null,p||"unknown"))}),ju(()=>{for(const c of l.values())c.reject(ma)}),new Promise(c=>{function u(f){function h(){f===s?c(n):u(s)}f.then(h,h)}u(s)})}function El(i){const e=bl(i);return e.equals=Pu,e}function Fu(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)$t(e[t])}}function Bd(i){for(var e=i.parent;e!==null;){if((e.f&It)===0)return(e.f&Qi)===0?e:null;e=e.parent}return null}function Tl(i){var e,t=lt;zi(Bd(i));try{i.f&=~kr,Fu(i),e=ah(i)}finally{zi(t)}return e}function Bu(i){var e=Tl(i);if(!i.equals(e)&&(i.wv=ih(),(!Mt?.is_fork||i.deps===null)&&(i.v=e,i.deps===null))){bt(i,Tt);return}Sr||(yi!==null?(Al()||Mt?.is_fork)&&yi.set(i,e):Sl(i))}let go=new Set;const xr=new Map;let zu=!1;function Wr(i,e){var t={f:0,v:i,reactions:null,equals:Cu,rv:0,wv:0};return t}function or(i,e){const t=Wr(i);return Zd(t),t}function Ut(i,e=!1,t=!0){const r=Wr(i);return e||(r.equals=Pu),Ia&&t&&vt!==null&&vt.l!==null&&(vt.l.s??=[]).push(r),r}function An(i,e){return ot(i,Ue(()=>I(i))),e}function ot(i,e,t=!1){tt!==null&&(!Ti||(tt.f&ac)!==0)&&ds()&&(tt.f&(It|sr|Ml|ac))!==0&&(di===null||!ya.call(di,i))&&dd();let r=t?va(e):e;return wa(i,r)}function wa(i,e){if(!i.equals(e)){var t=i.v;Sr?xr.set(i,e):xr.set(i,t),i.v=e;var r=_r.ensure();if(r.capture(i,t),(i.f&It)!==0){const a=i;(i.f&Nt)!==0&&Tl(a),Sl(a)}i.wv=ih(),Gu(i,Nt),ds()&&lt!==null&&(lt.f&Tt)!==0&&(lt.f&(Ci|jr))===0&&(oi===null?Jd([i]):oi.push(i)),!r.is_fork&&go.size>0&&!zu&&zd()}return e}function zd(){zu=!1;for(const i of go)(i.f&Tt)!==0&&bt(i,fi),Na(i)&&Aa(i);go.clear()}function ts(i){ot(i,i.v+1)}function Gu(i,e){var t=i.reactions;if(t!==null)for(var r=ds(),a=t.length,s=0;s<a;s++){var n=t[s],o=n.f;if(!(!r&&n===lt)){var l=(o&Nt)===0;if(l&&bt(n,e),(o&It)!==0){var c=n;yi?.delete(c),(o&kr)===0&&(o&hi&&(n.f|=kr),Gu(c,fi))}else l&&((o&sr)!==0&&Zi!==null&&Zi.add(n),Ei(n))}}}function va(i){if(typeof i!="object"||i===null||Gr in i)return i;const e=yu(i);if(e!==ed&&e!==td)return i;var t=new Map,r=Su(i),a=or(0),s=Vr,n=o=>{if(Vr===s)return o();var l=tt,c=Vr;pi(null),lc(s);var u=o();return pi(l),lc(c),u};return r&&t.set("length",or(i.length)),new Proxy(i,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ud();var u=t.get(l);return u===void 0?n(()=>{var f=or(c.value);return t.set(l,f),f}):ot(u,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const u=n(()=>or(Lt));t.set(l,u),ts(a)}}else ot(c,Lt),ts(a);return!0},get(o,l,c){if(l===Gr)return i;var u=t.get(l),f=l in o;if(u===void 0&&(!f||_a(o,l)?.writable)&&(u=n(()=>{var p=va(f?o[l]:Lt),v=or(p);return v}),t.set(l,u)),u!==void 0){var h=I(u);return h===Lt?void 0:h}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=I(u))}else if(c===void 0){var f=t.get(l),h=f?.v;if(f!==void 0&&h!==Lt)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){if(l===Gr)return!0;var c=t.get(l),u=c!==void 0&&c.v!==Lt||Reflect.has(o,l);if(c!==void 0||lt!==null&&(!u||_a(o,l)?.writable)){c===void 0&&(c=n(()=>{var h=u?va(o[l]):Lt,p=or(h);return p}),t.set(l,c));var f=I(c);if(f===Lt)return!1}return u},set(o,l,c,u){var f=t.get(l),h=l in o;if(r&&l==="length")for(var p=c;p<f.v;p+=1){var v=t.get(p+"");v!==void 0?ot(v,Lt):p in o&&(v=n(()=>or(Lt)),t.set(p+"",v))}if(f===void 0)(!h||_a(o,l)?.writable)&&(f=n(()=>or(void 0)),ot(f,va(c)),t.set(l,f));else{h=f.v!==Lt;var x=n(()=>va(c));ot(f,x)}var d=Reflect.getOwnPropertyDescriptor(o,l);if(d?.set&&d.set.call(u,c),!h){if(r&&typeof l=="string"){var m=t.get("length"),b=Number(l);Number.isInteger(b)&&b>=m.v&&ot(m,b+1)}ts(a)}return!0},ownKeys(o){I(a);var l=Reflect.ownKeys(o).filter(f=>{var h=t.get(f);return h===void 0||h.v!==Lt});for(var[c,u]of t)u.v!==Lt&&!(c in o)&&l.push(c);return l},setPrototypeOf(){hd()}})}var nc,Hu,Vu,ku;function Gd(){if(nc===void 0){nc=window,Hu=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;Vu=_a(e,"firstChild").get,ku=_a(e,"nextSibling").get,rc(i)&&(i.__click=void 0,i.__className=void 0,i.__attributes=null,i.__style=void 0,i.__e=void 0),rc(t)&&(t.__t=void 0)}}function xa(i=""){return document.createTextNode(i)}function nn(i){return Vu.call(i)}function fs(i){return ku.call(i)}function ge(i,e){return nn(i)}function Hd(i,e=!1){{var t=nn(i);return t instanceof Comment&&t.data===""?fs(t):t}}function Le(i,e=1,t=!1){let r=i;for(;e--;)r=fs(r);return r}function Vd(i){i.textContent=""}function Wu(){return!1}function wl(i){var e=tt,t=lt;pi(null),zi(null);try{return i()}finally{pi(e),zi(t)}}function Xu(i){lt===null&&(tt===null&&ld(),od()),Sr&&nd()}function kd(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function ki(i,e,t){var r=lt;r!==null&&(r.f&ai)!==0&&(i|=ai);var a={ctx:vt,deps:null,nodes:null,f:i|Nt|hi,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Aa(a),a.f|=xl}catch(o){throw $t(a),o}else e!==null&&Ei(a);var s=a;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Da)===0&&(s=s.first,(i&sr)!==0&&(i&ba)!==0&&s!==null&&(s.f|=ba)),s!==null&&(s.parent=r,r!==null&&kd(s,r),tt!==null&&(tt.f&It)!==0&&(i&jr)===0)){var n=tt;(n.effects??=[]).push(s)}return a}function Al(){return tt!==null&&!Ti}function ju(i){const e=ki(cs,null,!1);return bt(e,Tt),e.teardown=i,e}function vo(i){Xu();var e=lt.f,t=!tt&&(e&Ci)!==0&&(e&xl)===0;if(t){var r=vt;(r.e??=[]).push(i)}else return qu(i)}function qu(i){return ki(sn|wu,i,!1)}function Wd(i){return Xu(),ki(cs|wu,i,!0)}function Xd(i){_r.ensure();const e=ki(jr|Da,i,!0);return(t={})=>new Promise(r=>{t.outro?Hr(e,()=>{$t(e),r(void 0)}):($t(e),r(void 0))})}function jd(i){return ki(sn,i,!1)}function Za(i,e){var t=vt,r={effect:null,ran:!1,deps:i};t.l.$.push(r),r.effect=gn(()=>{i(),!r.ran&&(r.ran=!0,Ue(e))})}function Yu(){var i=vt;gn(()=>{for(var e of i.l.$){e.deps();var t=e.effect;(t.f&Tt)!==0&&t.deps!==null&&bt(t,fi),Na(t)&&Aa(t),e.ran=!1}})}function qd(i){return ki(Ml|Da,i,!0)}function gn(i,e=0){return ki(cs|e,i,!0)}function Bt(i,e=[],t=[],r=[]){Nd(r,e,t,a=>{ki(cs,()=>i(...a.map(I)),!0)})}function Rl(i,e=0){var t=ki(sr|e,i,!0);return t}function Si(i){return ki(Ci|Da,i,!0)}function $u(i){var e=i.teardown;if(e!==null){const t=Sr,r=tt;oc(!0),pi(null);try{e.call(null)}finally{oc(t),pi(r)}}}function Zu(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const a=t.ac;a!==null&&wl(()=>{a.abort(ma)});var r=t.next;(t.f&jr)!==0?t.parent=null:$t(t,e),t=r}}function Yd(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&Ci)===0&&$t(e),e=t}}function $t(i,e=!0){var t=!1;(e||(i.f&Tu)!==0)&&i.nodes!==null&&i.nodes.end!==null&&($d(i.nodes.start,i.nodes.end),t=!0),Zu(i,e&&!t),on(i,0),bt(i,Qi);var r=i.nodes&&i.nodes.t;if(r!==null)for(const s of r)s.stop();$u(i);var a=i.parent;a!==null&&a.first!==null&&Ju(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=null}function $d(i,e){for(;i!==null;){var t=i===e?null:fs(i);i.remove(),i=t}}function Ju(i){var e=i.parent,t=i.prev,r=i.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===i&&(e.first=r),e.last===i&&(e.last=t))}function Hr(i,e,t=!0){var r=[];Ku(i,r,!0);var a=()=>{t&&$t(i),e&&e()},s=r.length;if(s>0){var n=()=>--s||a();for(var o of r)o.out(n)}else a()}function Ku(i,e,t){if((i.f&ai)===0){i.f^=ai;var r=i.nodes&&i.nodes.t;if(r!==null)for(const o of r)(o.is_global||t)&&e.push(o);for(var a=i.first;a!==null;){var s=a.next,n=(a.f&ba)!==0||(a.f&Ci)!==0&&(i.f&sr)!==0;Ku(a,e,n?t:!1),a=s}}}function Cl(i){Qu(i,!0)}function Qu(i,e){if((i.f&ai)!==0){i.f^=ai,(i.f&Tt)===0&&(bt(i,Nt),Ei(i));for(var t=i.first;t!==null;){var r=t.next,a=(t.f&ba)!==0||(t.f&Ci)!==0;Qu(t,a?e:!1),t=r}var s=i.nodes&&i.nodes.t;if(s!==null)for(const n of s)(n.is_global||e)&&n.in()}}function eh(i,e){if(i.nodes)for(var t=i.nodes.start,r=i.nodes.end;t!==null;){var a=t===r?null:fs(t);e.append(t),t=a}}let Js=!1,Sr=!1;function oc(i){Sr=i}let tt=null,Ti=!1;function pi(i){tt=i}let lt=null;function zi(i){lt=i}let di=null;function Zd(i){tt!==null&&(di===null?di=[i]:di.push(i))}let qt=null,ti=0,oi=null;function Jd(i){oi=i}let th=1,Or=0,Vr=Or;function lc(i){Vr=i}function ih(){return++th}function Na(i){var e=i.f;if((e&Nt)!==0)return!0;if(e&It&&(i.f&=~kr),(e&fi)!==0){for(var t=i.deps,r=t.length,a=0;a<r;a++){var s=t[a];if(Na(s)&&Bu(s),s.wv>i.wv)return!0}(e&hi)!==0&&yi===null&&bt(i,Tt)}return!1}function rh(i,e,t=!0){var r=i.reactions;if(r!==null&&!(di!==null&&ya.call(di,i)))for(var a=0;a<r.length;a++){var s=r[a];(s.f&It)!==0?rh(s,e,!1):e===s&&(t?bt(s,Nt):(s.f&Tt)!==0&&bt(s,fi),Ei(s))}}function ah(i){var e=qt,t=ti,r=oi,a=tt,s=di,n=vt,o=Ti,l=Vr,c=i.f;qt=null,ti=0,oi=null,tt=(c&(Ci|jr))===0?i:null,di=null,Ea(i.ctx),Ti=!1,Vr=++Or,i.ac!==null&&(wl(()=>{i.ac.abort(ma)}),i.ac=null);try{i.f|=fo;var u=i.fn,f=u(),h=i.deps,p=Mt?.is_fork;if(qt!==null){var v;if(p||on(i,ti),h!==null&&ti>0)for(h.length=ti+qt.length,v=0;v<qt.length;v++)h[ti+v]=qt[v];else i.deps=h=qt;if(Al()&&(i.f&hi)!==0)for(v=ti;v<h.length;v++)(h[v].reactions??=[]).push(i)}else!p&&h!==null&&ti<h.length&&(on(i,ti),h.length=ti);if(ds()&&oi!==null&&!Ti&&h!==null&&(i.f&(It|fi|Nt))===0)for(v=0;v<oi.length;v++)rh(oi[v],i);if(a!==null&&a!==i){if(Or++,a.deps!==null)for(let x=0;x<t;x+=1)a.deps[x].rv=Or;if(e!==null)for(const x of e)x.rv=Or;oi!==null&&(r===null?r=oi:r.push(...oi))}return(i.f&vr)!==0&&(i.f^=vr),f}catch(x){return Lu(x)}finally{i.f^=fo,qt=e,ti=t,oi=r,tt=a,di=s,Ea(n),Ti=o,Vr=l}}function Kd(i,e){let t=e.reactions;if(t!==null){var r=Jh.call(t,i);if(r!==-1){var a=t.length-1;a===0?t=e.reactions=null:(t[r]=t[a],t.pop())}}if(t===null&&(e.f&It)!==0&&(qt===null||!ya.call(qt,e))){var s=e;(s.f&hi)!==0&&(s.f^=hi,s.f&=~kr),Sl(s),Fu(s),on(s,0)}}function on(i,e){var t=i.deps;if(t!==null)for(var r=e;r<t.length;r++)Kd(i,t[r])}function Aa(i){var e=i.f;if((e&Qi)===0){bt(i,Tt);var t=lt,r=Js;lt=i,Js=!0;try{(e&(sr|Eu))!==0?Yd(i):Zu(i),$u(i);var a=ah(i);i.teardown=typeof a=="function"?a:null,i.wv=th;var s;Zh&&Td&&(i.f&Nt)!==0&&i.deps}finally{Js=r,lt=t}}}function I(i){var e=i.f,t=(e&It)!==0;if(tt!==null&&!Ti){var r=lt!==null&&(lt.f&Qi)!==0;if(!r&&(di===null||!ya.call(di,i))){var a=tt.deps;if((tt.f&fo)!==0)i.rv<Or&&(i.rv=Or,qt===null&&a!==null&&a[ti]===i?ti++:qt===null?qt=[i]:qt.push(i));else{(tt.deps??=[]).push(i);var s=i.reactions;s===null?i.reactions=[tt]:ya.call(s,tt)||s.push(tt)}}}if(Sr&&xr.has(i))return xr.get(i);if(t){var n=i;if(Sr){var o=n.v;return((n.f&Tt)===0&&n.reactions!==null||nh(n))&&(o=Tl(n)),xr.set(n,o),o}var l=(n.f&hi)===0&&!Ti&&tt!==null&&(Js||(tt.f&hi)!==0),c=n.deps===null;Na(n)&&(l&&(n.f|=hi),Bu(n)),l&&!c&&sh(n)}if(yi?.has(i))return yi.get(i);if((i.f&vr)!==0)throw i.v;return i.v}function sh(i){if(i.deps!==null){i.f|=hi;for(const e of i.deps)(e.reactions??=[]).push(i),(e.f&It)!==0&&(e.f&hi)===0&&sh(e)}}function nh(i){if(i.v===Lt)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(xr.has(e)||(e.f&It)!==0&&nh(e))return!0;return!1}function Ue(i){var e=Ti;try{return Ti=!0,i()}finally{Ti=e}}function Qd(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(Gr in i)_o(i);else if(!Array.isArray(i))for(let e in i){const t=i[e];typeof t=="object"&&t&&Gr in t&&_o(t)}}}function _o(i,e=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!e.has(i)){e.add(i),i instanceof Date&&i.getTime();for(let r in i)try{_o(i[r],e)}catch{}const t=yu(i);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Qh(t);for(let a in r){const s=r[a].get;if(s)try{s.call(i)}catch{}}}}}const ef=["touchstart","touchmove"];function tf(i){return ef.includes(i)}const rf=new Set,cc=new Set;function af(i,e,t,r={}){function a(s){if(r.capture||Ja.call(e,s),!s.cancelBubble)return wl(()=>t?.call(this,s))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?er(()=>{e.addEventListener(i,a,r)}):e.addEventListener(i,a,r),a}function Ii(i,e,t,r,a){var s={capture:r,passive:a},n=af(i,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ju(()=>{e.removeEventListener(i,n,s)})}let uc=null;function Ja(i){var e=this,t=e.ownerDocument,r=i.type,a=i.composedPath?.()||[],s=a[0]||i.target;uc=i;var n=0,o=uc===i&&i.__root;if(o){var l=a.indexOf(o);if(l!==-1&&(e===document||e===window)){i.__root=e;return}var c=a.indexOf(e);if(c===-1)return;l<=c&&(n=l)}if(s=a[n]||i.target,s!==e){Kh(i,"currentTarget",{configurable:!0,get(){return s||t}});var u=tt,f=lt;pi(null),zi(null);try{for(var h,p=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+r];x!=null&&(!s.disabled||i.target===s)&&x.call(s,i)}catch(d){h?p.push(d):h=d}if(i.cancelBubble||v===e||v===null)break;s=v}if(h){for(let d of p)queueMicrotask(()=>{throw d});throw h}}finally{i.__root=e,delete i.currentTarget,pi(u),zi(f)}}}function sf(i){var e=document.createElement("template");return e.innerHTML=i.replaceAll("<!>","<!---->"),e.content}function hc(i,e){var t=lt;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function gt(i,e){var t=(e&Sd)!==0,r=(e&yd)!==0,a,s=!i.startsWith("<!>");return()=>{a===void 0&&(a=sf(s?i:"<!>"+i),t||(a=nn(a)));var n=r||Hu?document.importNode(a,!0):a.cloneNode(!0);if(t){var o=nn(n),l=n.lastChild;hc(o,l)}else hc(n,n);return n}}function mt(i,e){i!==null&&i.before(e)}function Je(i,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(i.__t??=i.nodeValue)&&(i.__t=t,i.nodeValue=t+"")}function nf(i,e){return of(i,e)}const Yr=new Map;function of(i,{target:e,anchor:t,props:r={},events:a,context:s,intro:n=!0}){Gd();var o=new Set,l=f=>{for(var h=0;h<f.length;h++){var p=f[h];if(!o.has(p)){o.add(p);var v=tf(p);e.addEventListener(p,Ja,{passive:v});var x=Yr.get(p);x===void 0?(document.addEventListener(p,Ja,{passive:v}),Yr.set(p,1)):Yr.set(p,x+1)}}};l(mn(rf)),cc.add(l);var c=void 0,u=Xd(()=>{var f=t??e.appendChild(xa());return Dd(f,{pending:()=>{}},h=>{us({});var p=vt;s&&(p.c=s),a&&(r.$$events=a),c=i(h,r)||{},hs()}),()=>{for(var h of o){e.removeEventListener(h,Ja);var p=Yr.get(h);--p===0?(document.removeEventListener(h,Ja),Yr.delete(h)):Yr.set(h,p)}cc.delete(l),f!==t&&f.parentNode?.removeChild(f)}});return lf.set(c,u),c}let lf=new WeakMap;class cf{anchor;#e=new Map;#o=new Map;#t=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#r=()=>{var e=Mt;if(this.#e.has(e)){var t=this.#e.get(e),r=this.#o.get(t);if(r)Cl(r),this.#s.delete(t);else{var a=this.#t.get(t);a&&(this.#o.set(t,a.effect),this.#t.delete(t),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[s,n]of this.#e){if(this.#e.delete(s),s===e)break;const o=this.#t.get(n);o&&($t(o.effect),this.#t.delete(n))}for(const[s,n]of this.#o){if(s===t||this.#s.has(s))continue;const o=()=>{if(Array.from(this.#e.values()).includes(s)){var l=document.createDocumentFragment();eh(n,l),l.append(xa()),this.#t.set(s,{effect:n,fragment:l})}else $t(n);this.#s.delete(s),this.#o.delete(s)};this.#n||!r?(this.#s.add(s),Hr(n,o,!1)):o()}}};#i=e=>{this.#e.delete(e);const t=Array.from(this.#e.values());for(const[r,a]of this.#t)t.includes(r)||($t(a.effect),this.#t.delete(r))};ensure(e,t){var r=Mt,a=Wu();t&&!this.#o.has(e)&&!this.#t.has(e)&&this.#o.set(e,Si(()=>t(this.anchor))),this.#e.set(r,e),a||this.#r()}}function Yt(i,e,t=!1){var r=new cf(i),a=t?ba:0;function s(n,o){r.ensure(n,o)}Rl(()=>{var n=!1;e((o,l=0)=>{n=!0,s(l,o)}),n||s(!1,null)},a)}function rs(i,e){return e}function uf(i,e,t){for(var r=[],a=e.length,s,n=e.length,o=0;o<a;o++){let f=e[o];Hr(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var h=i.outrogroups;xo(mn(s.done)),h.delete(s),h.size===0&&(i.outrogroups=null)}}else n-=1},!1)}if(n===0){var l=r.length===0&&t!==null;if(l){var c=t,u=c.parentNode;Vd(u),u.append(c),i.items.clear()}xo(e,!l)}else s={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(s)}function xo(i,e=!0){for(var t=0;t<i.length;t++)$t(i[t],e)}var dc;function as(i,e,t,r,a,s=null){var n=i,o=new Map,l=(e&Ru)!==0;if(l){var c=i;n=c.appendChild(xa())}var u=null,f=El(()=>{var m=t();return Su(m)?m:m==null?[]:mn(m)}),h,p=!0;function v(){d.fallback=u,hf(d,h,n,e,r),u!==null&&(h.length===0?(u.f&Ji)===0?Cl(u):(u.f^=Ji,Ka(u,null,n)):Hr(u,()=>{u=null}))}var x=Rl(()=>{h=I(f);for(var m=h.length,b=new Set,w=Mt,T=Wu(),A=0;A<m;A+=1){var R=h[A],C=r(R,A),L=p?null:o.get(C);L?(L.v&&wa(L.v,R),L.i&&wa(L.i,A),T&&w.unskip_effect(L.e)):(L=df(o,p?n:dc??=xa(),R,C,A,a,e,t),p||(L.e.f|=Ji),o.set(C,L)),b.add(C)}if(m===0&&s&&!u&&(p?u=Si(()=>s(n)):(u=Si(()=>s(dc??=xa())),u.f|=Ji)),m>b.size&&sd(),!p)if(T){for(const[_,y]of o)b.has(_)||w.skip_effect(y.e);w.oncommit(v),w.ondiscard(()=>{})}else v();I(f)}),d={effect:x,items:o,outrogroups:null,fallback:u};p=!1}function za(i){for(;i!==null&&(i.f&Ci)===0;)i=i.next;return i}function hf(i,e,t,r,a){var s=(r&gd)!==0,n=e.length,o=i.items,l=za(i.effect.first),c,u=null,f,h=[],p=[],v,x,d,m;if(s)for(m=0;m<n;m+=1)v=e[m],x=a(v,m),d=o.get(x).e,(d.f&Ji)===0&&(d.nodes?.a?.measure(),(f??=new Set).add(d));for(m=0;m<n;m+=1){if(v=e[m],x=a(v,m),d=o.get(x).e,i.outrogroups!==null)for(const y of i.outrogroups)y.pending.delete(d),y.done.delete(d);if((d.f&Ji)!==0)if(d.f^=Ji,d===l)Ka(d,null,t);else{var b=u?u.next:l;d===i.effect.last&&(i.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),lr(i,u,d),lr(i,d,b),Ka(d,b,t),u=d,h=[],p=[],l=za(u.next);continue}if((d.f&ai)!==0&&(Cl(d),s&&(d.nodes?.a?.unfix(),(f??=new Set).delete(d))),d!==l){if(c!==void 0&&c.has(d)){if(h.length<p.length){var w=p[0],T;u=w.prev;var A=h[0],R=h[h.length-1];for(T=0;T<h.length;T+=1)Ka(h[T],w,t);for(T=0;T<p.length;T+=1)c.delete(p[T]);lr(i,A.prev,R.next),lr(i,u,A),lr(i,R,w),l=w,u=R,m-=1,h=[],p=[]}else c.delete(d),Ka(d,l,t),lr(i,d.prev,d.next),lr(i,d,u===null?i.effect.first:u.next),lr(i,u,d),u=d;continue}for(h=[],p=[];l!==null&&l!==d;)(c??=new Set).add(l),p.push(l),l=za(l.next);if(l===null)continue}(d.f&Ji)===0&&h.push(d),u=d,l=za(d.next)}if(i.outrogroups!==null){for(const y of i.outrogroups)y.pending.size===0&&(xo(mn(y.done)),i.outrogroups?.delete(y));i.outrogroups.size===0&&(i.outrogroups=null)}if(l!==null||c!==void 0){var C=[];if(c!==void 0)for(d of c)(d.f&ai)===0&&C.push(d);for(;l!==null;)(l.f&ai)===0&&l!==i.fallback&&C.push(l),l=za(l.next);var L=C.length;if(L>0){var _=(r&Ru)!==0&&n===0?t:null;if(s){for(m=0;m<L;m+=1)C[m].nodes?.a?.measure();for(m=0;m<L;m+=1)C[m].nodes?.a?.fix()}uf(i,C,_)}}s&&er(()=>{if(f!==void 0)for(d of f)d.nodes?.a?.apply()})}function df(i,e,t,r,a,s,n,o){var l=(n&pd)!==0?(n&vd)===0?Ut(t,!1,!1):Wr(t):null,c=(n&md)!==0?Wr(a):null;return{v:l,i:c,e:Si(()=>(s(e,l??t,c??a,o),()=>{i.delete(r)}))}}function Ka(i,e,t){if(i.nodes)for(var r=i.nodes.start,a=i.nodes.end,s=e&&(e.f&Ji)===0?e.nodes.start:t;r!==null;){var n=fs(r);if(s.before(r),r===a)return;r=n}}function lr(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const fc=[...` 	
\r\f \v\uFEFF`];function ff(i,e,t){var r=i==null?"":""+i;if(e&&(r=r?r+" "+e:e),t){for(var a in t)if(t[a])r=r?r+" "+a:a;else if(r.length)for(var s=a.length,n=0;(n=r.indexOf(a,n))>=0;){var o=n+s;(n===0||fc.includes(r[n-1]))&&(o===r.length||fc.includes(r[o]))?r=(n===0?"":r.substring(0,n))+r.substring(o+1):n=o}}return r===""?null:r}function pf(i,e){return i==null?null:String(i)}function is(i,e,t,r,a,s){var n=i.__className;if(n!==t||n===void 0){var o=ff(t,r,s);o==null?i.removeAttribute("class"):i.className=o,i.__className=t}else if(s&&a!==s)for(var l in s){var c=!!s[l];(a==null||c!==!!a[l])&&i.classList.toggle(l,c)}return s}function Fr(i,e,t,r){var a=i.__style;if(a!==e){var s=pf(e);s==null?i.removeAttribute("style"):i.style.cssText=s,i.__style=e}return r}function pc(i,e){return i===e||i?.[Gr]===e}function oh(i={},e,t,r){return jd(()=>{var a,s;return gn(()=>{a=s,s=[],Ue(()=>{i!==t(...s)&&(e(i,...s),a&&pc(t(...a),i)&&e(null,...a))})}),()=>{er(()=>{s&&pc(t(...s),i)&&e(null,...s)})}}),i}function vn(i=!1){const e=vt,t=e.l.u;if(!t)return;let r=()=>Qd(e.s);if(i){let a=0,s={};const n=bl(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&a++,a});r=()=>I(n)}t.b.length&&Wd(()=>{mc(e,r),ho(t.b)}),vo(()=>{const a=Ue(()=>t.m.map(id));return()=>{for(const s of a)typeof s=="function"&&s()}}),t.a.length&&vo(()=>{mc(e,r),ho(t.a)})}function mc(i,e){if(i.l.s)for(const t of i.l.s)I(t);e()}let ys=!1;function mf(i){var e=ys;try{return ys=!1,[i(),ys]}finally{ys=e}}function Pl(i,e,t,r){var a=!Ia||(t&_d)!==0,s=(t&Md)!==0,n=r,o=!0,l=()=>(o&&(o=!1,n=r),n),c;{var u=Gr in i||rd in i;c=_a(i,e)?.set??(u&&e in i?b=>i[e]=b:void 0)}var f,h=!1;[f,h]=mf(()=>i[e]);var p;if(a?p=()=>{var b=i[e];return b===void 0?l():(o=!0,b)}:p=()=>{var b=i[e];return b!==void 0&&(n=void 0),b===void 0?n:b},a&&(t&xd)===0)return p;if(c){var v=i.$$legacy;return(function(b,w){return arguments.length>0?((!a||!w||v||h)&&c(w?p():b),b):p()})}var x=!1,d=El(()=>(x=!1,p()));I(d);var m=lt;return(function(b,w){if(arguments.length>0){const T=w?I(d):a&&s?va(b):b;return ot(d,T),x=!0,n!==void 0&&(n=T),b}return Sr&&x||(m.f&Qi)!==0?d.v:I(d)})}function ps(i){vt===null&&Au(),Ia&&vt.l!==null?gf(vt).m.push(i):vo(()=>{const e=Ue(i);if(typeof e=="function")return e})}function lh(i){vt===null&&Au(),ps(()=>()=>Ue(i))}function gf(i){var e=i.l;return e.u??={a:[],b:[],m:[]}}const vf="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(vf);wd();const Ll="182",_f=0,gc=1,xf=2,Ks=1,Mf=2,Qa=3,yr=0,Zt=1,bi=2,tr=0,Ma=1,Mi=2,vc=3,_c=4,Sf=5,Ir=100,yf=101,bf=102,Ef=103,Tf=104,wf=200,Af=201,Rf=202,Cf=203,Mo=204,So=205,Pf=206,Lf=207,Uf=208,Df=209,If=210,Nf=211,Of=212,Ff=213,Bf=214,yo=0,bo=1,Eo=2,Ra=3,To=4,wo=5,Ao=6,Ro=7,ch=0,zf=1,Gf=2,Fi=0,uh=1,hh=2,dh=3,Ul=4,fh=5,ph=6,mh=7,gh=300,Xr=301,Ca=302,Co=303,Po=304,_n=306,Lo=1e3,Ki=1001,Uo=1002,Dt=1003,Hf=1004,bs=1005,zt=1006,Rn=1007,Br=1008,ri=1009,vh=1010,_h=1011,ss=1012,Dl=1013,Gi=1014,Ni=1015,rr=1016,Il=1017,Nl=1018,ns=1020,xh=35902,Mh=35899,Sh=1021,yh=1022,wi=1023,ar=1026,zr=1027,bh=1028,Ol=1029,Pa=1030,Fl=1031,Bl=1033,Qs=33776,en=33777,tn=33778,rn=33779,Do=35840,Io=35841,No=35842,Oo=35843,Fo=36196,Bo=37492,zo=37496,Go=37488,Ho=37489,Vo=37490,ko=37491,Wo=37808,Xo=37809,jo=37810,qo=37811,Yo=37812,$o=37813,Zo=37814,Jo=37815,Ko=37816,Qo=37817,el=37818,tl=37819,il=37820,rl=37821,al=36492,sl=36494,nl=36495,ol=36283,ll=36284,cl=36285,ul=36286,Vf=3200,Eh=0,kf=1,mr="",ci="srgb",La="srgb-linear",ln="linear",ct="srgb",$r=7680,xc=519,Wf=512,Xf=513,jf=514,zl=515,qf=516,Yf=517,Gl=518,$f=519,hl=35044,Mc="300 es",Oi=2e3,cn=2001;function Th(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function un(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zf(){const i=un("canvas");return i.style.display="block",i}const Sc={};function hn(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ve(...i){const e="THREE."+i.shift();console.warn(e,...i)}function et(...i){const e="THREE."+i.shift();console.error(e,...i)}function os(...i){const e=i.join(" ");e in Sc||(Sc[e]=!0,Ve(...i))}function Jf(i,e,t){return new Promise(function(r,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:r()}}setTimeout(s,t)})}class Oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let s=0,n=a.length;s<n;s++)a[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cn=Math.PI/180,dl=180/Math.PI;function Mr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Kf(i,e){return(i%e+e)%e}function Pn(i,e,t){return(1-t)*i+t*e}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),s=this.x-e.x,n=this.y-e.y;return this.x=s*r-n*a+e.x,this.y=s*a+n*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ms{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,s,n,o){let l=r[a+0],c=r[a+1],u=r[a+2],f=r[a+3],h=s[n+0],p=s[n+1],v=s[n+2],x=s[n+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==v){let d=l*h+c*p+u*v+f*x;d<0&&(h=-h,p=-p,v=-v,x=-x,d=-d);let m=1-o;if(d<.9995){const b=Math.acos(d),w=Math.sin(b);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w,l=l*m+h*o,c=c*m+p*o,u=u*m+v*o,f=f*m+x*o}else{l=l*m+h*o,c=c*m+p*o,u=u*m+v*o,f=f*m+x*o;const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,a,s,n){const o=r[a],l=r[a+1],c=r[a+2],u=r[a+3],f=s[n],h=s[n+1],p=s[n+2],v=s[n+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,s=e._z,n=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(a/2),f=o(s/2),h=l(r/2),p=l(a/2),v=l(s/2);switch(n){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],s=t[8],n=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=r+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(n-a)*p}else if(r>o&&r>f){const p=2*Math.sqrt(1+r-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(a+n)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-r-f);this._w=(s-c)/p,this._x=(a+n)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-r-o);this._w=(n-a)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,s=e._z,n=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+n*o+a*c-s*l,this._y=a*u+n*l+s*o-r*c,this._z=s*u+n*c+r*l-a*o,this._w=n*u-r*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,a=e._y,s=e._z,n=e._w,o=this.dot(e);o<0&&(r=-r,a=-a,s=-s,n=-n,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+r*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+n*t,this._onChangeCallback()}else this._x=this._x*l+r*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+n*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,r=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6]*a,this.y=s[1]*t+s[4]*r+s[7]*a,this.z=s[2]*t+s[5]*r+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,s=e.elements,n=1/(s[3]*t+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*t+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*t+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,s=e.x,n=e.y,o=e.z,l=e.w,c=2*(n*a-o*r),u=2*(o*t-s*a),f=2*(s*r-n*t);return this.x=t+l*c+n*f-o*u,this.y=r+l*u+o*c-s*f,this.z=a+l*f+s*u-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*a,this.y=s[1]*t+s[5]*r+s[9]*a,this.z=s[2]*t+s[6]*r+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,s=e.z,n=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*n-r*l,this.z=r*o-a*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ln.copy(this).projectOnVector(e),this.sub(Ln)}reflect(e){return this.sub(Ln.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ln=new O,yc=new ms;class je{constructor(e,t,r,a,s,n,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,s,n,o,l,c)}set(e,t,r,a,s,n,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=r,u[7]=n,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,s=this.elements,n=r[0],o=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],p=r[5],v=r[8],x=a[0],d=a[3],m=a[6],b=a[1],w=a[4],T=a[7],A=a[2],R=a[5],C=a[8];return s[0]=n*x+o*b+l*A,s[3]=n*d+o*w+l*R,s[6]=n*m+o*T+l*C,s[1]=c*x+u*b+f*A,s[4]=c*d+u*w+f*R,s[7]=c*m+u*T+f*C,s[2]=h*x+p*b+v*A,s[5]=h*d+p*w+v*R,s[8]=h*m+p*T+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*n*u-t*o*c-r*s*u+r*o*l+a*s*c-a*n*l}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*n-o*c,h=o*l-u*s,p=c*s-n*l,v=t*f+r*h+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(a*c-u*r)*x,e[2]=(o*r-a*n)*x,e[3]=h*x,e[4]=(u*t-a*l)*x,e[5]=(a*s-o*t)*x,e[6]=p*x,e[7]=(r*l-c*t)*x,e[8]=(n*t-r*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,s,n,o){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*n+c*o)+n+e,-a*c,a*l,-a*(-c*n+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Un.makeScale(e,t)),this}rotate(e){return this.premultiply(Un.makeRotation(-e)),this}translate(e,t){return this.premultiply(Un.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Un=new je,bc=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){const i={enabled:!0,workingColorSpace:La,spaces:{},convert:function(a,s,n){return this.enabled===!1||s===n||!s||!n||(this.spaces[s].transfer===ct&&(a.r=ir(a.r),a.g=ir(a.g),a.b=ir(a.b)),this.spaces[s].primaries!==this.spaces[n].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ct&&(a.r=Sa(a.r),a.g=Sa(a.g),a.b=Sa(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?ln:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,n){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[La]:{primaries:e,whitePoint:r,transfer:ln,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:ct,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),i}const at=Qf();function ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zr;class ep{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zr===void 0&&(Zr=un("canvas")),Zr.width=e.width,Zr.height=e.height;const a=Zr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Zr}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=un("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),s=a.data;for(let n=0;n<s.length;n++)s[n]=ir(s[n]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ir(t[r]/255)*255):t[r]=ir(t[r]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tp=0;class Hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let n=0,o=a.length;n<o;n++)a[n].isDataTexture?s.push(Dn(a[n].image)):s.push(Dn(a[n]))}else s=Dn(a);r.url=s}return t||(e.images[this.uuid]=r),r}}function Dn(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ep.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let ip=0;const In=new O;class Gt extends Oa{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,r=Ki,a=Ki,s=zt,n=Br,o=wi,l=ri,c=Gt.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Mr(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(In).x}get height(){return this.source.getSize(In).y}get depth(){return this.source.getSize(In).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=gh;Gt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,r=0,a=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,s=this.w,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*t+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*t+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*t+n[7]*r+n[11]*a+n[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,s;const n=e.elements,o=n[0],l=n[4],c=n[8],u=n[1],f=n[5],h=n[9],p=n[2],v=n[6],x=n[10];if(Math.abs(l-u)<.01&&Math.abs(c-p)<.01&&Math.abs(h-v)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+p)<.1&&Math.abs(h+v)<.1&&Math.abs(o+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,b=(f+1)/2,w=(x+1)/2,T=(l+u)/4,A=(c+p)/4,R=(h+v)/4;return m>b&&m>w?m<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(m),a=T/r,s=A/r):b>w?b<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),r=T/a,s=R/a):w<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),r=A/s,a=R/s),this.set(r,a,s,t),this}let d=Math.sqrt((v-h)*(v-h)+(c-p)*(c-p)+(u-l)*(u-l));return Math.abs(d)<.001&&(d=1),this.x=(v-h)/d,this.y=(c-p)/d,this.z=(u-l)/d,this.w=Math.acos((o+f+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rp extends Oa{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const a={width:e,height:t,depth:r.depth},s=new Gt(a);this.textures=[];const n=r.count;for(let o=0;o<n;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Hl(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends rp{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class wh extends Gt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ap extends Gt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let n=0,o=s.count;n<o;n++)e.isMesh===!0?e.getVertexPosition(n,vi):vi.fromBufferAttribute(s,n),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Es.copy(r.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const a=e.children;for(let s=0,n=a.length;s<n;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),Ts.subVectors(this.max,Ga),Jr.subVectors(e.a,Ga),Kr.subVectors(e.b,Ga),Qr.subVectors(e.c,Ga),cr.subVectors(Kr,Jr),ur.subVectors(Qr,Kr),wr.subVectors(Jr,Qr);let t=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-wr.z,wr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,wr.z,0,-wr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-wr.y,wr.x,0];return!Nn(t,Jr,Kr,Qr,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Nn(t,Jr,Kr,Qr,Ts))?!1:(ws.crossVectors(cr,ur),t=[ws.x,ws.y,ws.z],Nn(t,Jr,Kr,Qr,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new O,new O,new O,new O,new O,new O,new O,new O],vi=new O,Es=new gs,Jr=new O,Kr=new O,Qr=new O,cr=new O,ur=new O,wr=new O,Ga=new O,Ts=new O,ws=new O,Ar=new O;function Nn(i,e,t,r,a){for(let s=0,n=i.length-3;s<=n;s+=3){Ar.fromArray(i,s);const o=a.x*Math.abs(Ar.x)+a.y*Math.abs(Ar.y)+a.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),u=r.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const sp=new gs,Ha=new O,On=new O;class vs{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):sp.setFromPoints(e).getCenter(r);let a=0;for(let s=0,n=e.length;s<n;s++)a=Math.max(a,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Ha,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(On.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(On)),this.expandByPoint(Ha.copy(e.center).sub(On))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ji=new O,Fn=new O,As=new O,hr=new O,Bn=new O,Rs=new O,zn=new O;class xn{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Fn.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(Fn);const s=e.distanceTo(t)*.5,n=-this.direction.dot(As),o=hr.dot(this.direction),l=-hr.dot(As),c=hr.lengthSq(),u=Math.abs(1-n*n);let f,h,p,v;if(u>0)if(f=n*l-o,h=n*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,p=f*(f+n*h+2*o)+h*(n*f+h+2*l)+c}else h=s,f=Math.max(0,-(n*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(n*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-n*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(n*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=n>0?-s:s,f=Math.max(0,-(n*h+o)),p=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(Fn).addScaledVector(As,h),p}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),a=ji.dot(ji)-r*r,s=e.radius*e.radius;if(a>s)return null;const n=Math.sqrt(s-a),o=r-n,l=r+n;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,s,n,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,n=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,n=(e.min.y-h.y)*u),r>n||s>a||((s>r||isNaN(r))&&(r=s),(n<a||isNaN(a))&&(a=n),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||o>a)||((o>r||r!==r)&&(r=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,r,a,s){Bn.subVectors(t,e),Rs.subVectors(r,e),zn.crossVectors(Bn,Rs);let n=this.direction.dot(zn),o;if(n>0){if(a)return null;o=1}else if(n<0)o=-1,n=-n;else return null;hr.subVectors(this.origin,e);const l=o*this.direction.dot(Rs.crossVectors(hr,Rs));if(l<0)return null;const c=o*this.direction.dot(Bn.cross(hr));if(c<0||l+c>n)return null;const u=-o*hr.dot(zn);return u<0?null:this.at(u/n,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,r,a,s,n,o,l,c,u,f,h,p,v,x,d){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,s,n,o,l,c,u,f,h,p,v,x,d)}set(e,t,r,a,s,n,o,l,c,u,f,h,p,v,x,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=a,m[1]=s,m[5]=n,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=v,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),n=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*s,t[5]=r[5]*s,t[6]=r[6]*s,t[7]=0,t[8]=r[8]*n,t[9]=r[9]*n,t[10]=r[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,s=e.z,n=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=n*u,p=n*f,v=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=v+p*c,t[10]=n*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,x=c*f;t[0]=h+x*o,t[4]=v*o-p,t[8]=n*c,t[1]=n*f,t[5]=n*u,t[9]=-o,t[2]=p*o-v,t[6]=x+h*o,t[10]=n*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,x=c*f;t[0]=h-x*o,t[4]=-n*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=n*u,t[9]=x-h*o,t[2]=-n*c,t[6]=o,t[10]=n*l}else if(e.order==="ZYX"){const h=n*u,p=n*f,v=o*u,x=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=n*l}else if(e.order==="YZX"){const h=n*l,p=n*c,v=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=v*f+p,t[1]=f,t[5]=n*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-x*f}else if(e.order==="XZY"){const h=n*l,p=n*c,v=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=n*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(np,e,op)}lookAt(e,t,r){const a=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),dr.crossVectors(r,Qt),dr.lengthSq()===0&&(Math.abs(r.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),dr.crossVectors(r,Qt)),dr.normalize(),Cs.crossVectors(Qt,dr),a[0]=dr.x,a[4]=Cs.x,a[8]=Qt.x,a[1]=dr.y,a[5]=Cs.y,a[9]=Qt.y,a[2]=dr.z,a[6]=Cs.z,a[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,s=this.elements,n=r[0],o=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],p=r[13],v=r[2],x=r[6],d=r[10],m=r[14],b=r[3],w=r[7],T=r[11],A=r[15],R=a[0],C=a[4],L=a[8],_=a[12],y=a[1],U=a[5],G=a[9],k=a[13],Z=a[2],Q=a[6],q=a[10],j=a[14],re=a[3],ce=a[7],pe=a[11],Ee=a[15];return s[0]=n*R+o*y+l*Z+c*re,s[4]=n*C+o*U+l*Q+c*ce,s[8]=n*L+o*G+l*q+c*pe,s[12]=n*_+o*k+l*j+c*Ee,s[1]=u*R+f*y+h*Z+p*re,s[5]=u*C+f*U+h*Q+p*ce,s[9]=u*L+f*G+h*q+p*pe,s[13]=u*_+f*k+h*j+p*Ee,s[2]=v*R+x*y+d*Z+m*re,s[6]=v*C+x*U+d*Q+m*ce,s[10]=v*L+x*G+d*q+m*pe,s[14]=v*_+x*k+d*j+m*Ee,s[3]=b*R+w*y+T*Z+A*re,s[7]=b*C+w*U+T*Q+A*ce,s[11]=b*L+w*G+T*q+A*pe,s[15]=b*_+w*k+T*j+A*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],s=e[12],n=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],x=e[7],d=e[11],m=e[15],b=l*p-c*h,w=o*p-c*f,T=o*h-l*f,A=n*p-c*u,R=n*h-l*u,C=n*f-o*u;return t*(x*b-d*w+m*T)-r*(v*b-d*A+m*R)+a*(v*w-x*A+m*C)-s*(v*T-x*R+d*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],x=e[13],d=e[14],m=e[15],b=f*d*c-x*h*c+x*l*p-o*d*p-f*l*m+o*h*m,w=v*h*c-u*d*c-v*l*p+n*d*p+u*l*m-n*h*m,T=u*x*c-v*f*c+v*o*p-n*x*p-u*o*m+n*f*m,A=v*f*l-u*x*l-v*o*h+n*x*h+u*o*d-n*f*d,R=t*b+r*w+a*T+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=b*C,e[1]=(x*h*s-f*d*s-x*a*p+r*d*p+f*a*m-r*h*m)*C,e[2]=(o*d*s-x*l*s+x*a*c-r*d*c-o*a*m+r*l*m)*C,e[3]=(f*l*s-o*h*s-f*a*c+r*h*c+o*a*p-r*l*p)*C,e[4]=w*C,e[5]=(u*d*s-v*h*s+v*a*p-t*d*p-u*a*m+t*h*m)*C,e[6]=(v*l*s-n*d*s-v*a*c+t*d*c+n*a*m-t*l*m)*C,e[7]=(n*h*s-u*l*s+u*a*c-t*h*c-n*a*p+t*l*p)*C,e[8]=T*C,e[9]=(v*f*s-u*x*s-v*r*p+t*x*p+u*r*m-t*f*m)*C,e[10]=(n*x*s-v*o*s+v*r*c-t*x*c-n*r*m+t*o*m)*C,e[11]=(u*o*s-n*f*s-u*r*c+t*f*c+n*r*p-t*o*p)*C,e[12]=A*C,e[13]=(u*x*a-v*f*a+v*r*h-t*x*h-u*r*d+t*f*d)*C,e[14]=(v*o*a-n*x*a-v*r*l+t*x*l+n*r*d-t*o*d)*C,e[15]=(n*f*a-u*o*a+u*r*l-t*f*l-n*r*h+t*o*h)*C,this}scale(e){const t=this.elements,r=e.x,a=e.y,s=e.z;return t[0]*=r,t[4]*=a,t[8]*=s,t[1]*=r,t[5]*=a,t[9]*=s,t[2]*=r,t[6]*=a,t[10]*=s,t[3]*=r,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),s=1-r,n=e.x,o=e.y,l=e.z,c=s*n,u=s*o;return this.set(c*n+r,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+r,u*l-a*n,0,c*l-a*o,u*l+a*n,s*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,s,n){return this.set(1,r,s,0,e,1,n,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,s=t._x,n=t._y,o=t._z,l=t._w,c=s+s,u=n+n,f=o+o,h=s*c,p=s*u,v=s*f,x=n*u,d=n*f,m=o*f,b=l*c,w=l*u,T=l*f,A=r.x,R=r.y,C=r.z;return a[0]=(1-(x+m))*A,a[1]=(p+T)*A,a[2]=(v-w)*A,a[3]=0,a[4]=(p-T)*R,a[5]=(1-(h+m))*R,a[6]=(d+b)*R,a[7]=0,a[8]=(v+w)*C,a[9]=(d-b)*C,a[10]=(1-(h+x))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let s=ea.set(a[0],a[1],a[2]).length();const n=ea.set(a[4],a[5],a[6]).length(),o=ea.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),_i.copy(this);const l=1/s,c=1/n,u=1/o;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=c,_i.elements[5]*=c,_i.elements[6]*=c,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),r.x=s,r.y=n,r.z=o,this}makePerspective(e,t,r,a,s,n,o=Oi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(r-a),h=(t+e)/(t-e),p=(r+a)/(r-a);let v,x;if(l)v=s/(n-s),x=n*s/(n-s);else if(o===Oi)v=-(n+s)/(n-s),x=-2*n*s/(n-s);else if(o===cn)v=-n/(n-s),x=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,a,s,n,o=Oi,l=!1){const c=this.elements,u=2/(t-e),f=2/(r-a),h=-(t+e)/(t-e),p=-(r+a)/(r-a);let v,x;if(l)v=1/(n-s),x=n/(n-s);else if(o===Oi)v=-2/(n-s),x=-(n+s)/(n-s);else if(o===cn)v=-1/(n-s),x=-s/(n-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ea=new O,_i=new ht,np=new O(0,0,0),op=new O(1,1,1),dr=new O,Cs=new O,Qt=new O,Tc=new ht,wc=new ms;class Hi{constructor(e=0,t=0,r=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,s=a[0],n=a[4],o=a[8],l=a[1],c=a[5],u=a[9],f=a[2],h=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-n,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lp=0;const Ac=new O,ta=new ms,qi=new ht,Ps=new O,Va=new O,cp=new O,up=new ms,Rc=new O(1,0,0),Cc=new O(0,1,0),Pc=new O(0,0,1),Lc={type:"added"},hp={type:"removed"},ia={type:"childadded",child:null},Gn={type:"childremoved",child:null};class wt extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new O,t=new Hi,r=new ms,a=new O(1,1,1);function s(){r.setFromEuler(t,!1)}function n(){t.setFromQuaternion(r,void 0,!1)}t._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Cc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Cc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ps.copy(e):Ps.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Va,Ps,this.up):qi.lookAt(Ps,Va,this.up),this.quaternion.setFromRotationMatrix(qi),a&&(qi.extractRotation(a.matrixWorld),ta.setFromRotationMatrix(qi),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),ia.child=e,this.dispatchEvent(ia),ia.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=n(e.geometries),l=n(e.materials),c=n(e.textures),u=n(e.images),f=n(e.shapes),h=n(e.skeletons),p=n(e.animations),v=n(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),v.length>0&&(r.nodes=v)}return r.object=a,r;function n(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}wt.DEFAULT_UP=new O(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new O,Yi=new O,Hn=new O,$i=new O,ra=new O,aa=new O,Uc=new O,Vn=new O,kn=new O,Wn=new O,Xn=new yt,jn=new yt,qn=new yt;class ui{constructor(e=new O,t=new O,r=new O){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),xi.subVectors(e,t),a.cross(xi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,r,a,s){xi.subVectors(a,t),Yi.subVectors(r,t),Hn.subVectors(e,t);const n=xi.dot(xi),o=xi.dot(Yi),l=xi.dot(Hn),c=Yi.dot(Yi),u=Yi.dot(Hn),f=n*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,v=(n*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,r,a,s,n,o,l){return this.getBarycoord(e,t,r,a,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(n,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(e,t,r,a,s,n){return Xn.setScalar(0),jn.setScalar(0),qn.setScalar(0),Xn.fromBufferAttribute(e,t),jn.fromBufferAttribute(e,r),qn.fromBufferAttribute(e,a),n.setScalar(0),n.addScaledVector(Xn,s.x),n.addScaledVector(jn,s.y),n.addScaledVector(qn,s.z),n}static isFrontFacing(e,t,r,a){return xi.subVectors(r,t),Yi.subVectors(e,t),xi.cross(Yi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),xi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,a,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,s=this.c;let n,o;ra.subVectors(a,r),aa.subVectors(s,r),Vn.subVectors(e,r);const l=ra.dot(Vn),c=aa.dot(Vn);if(l<=0&&c<=0)return t.copy(r);kn.subVectors(e,a);const u=ra.dot(kn),f=aa.dot(kn);if(u>=0&&f<=u)return t.copy(a);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return n=l/(l-u),t.copy(r).addScaledVector(ra,n);Wn.subVectors(e,s);const p=ra.dot(Wn),v=aa.dot(Wn);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(r).addScaledVector(aa,o);const d=u*v-p*f;if(d<=0&&f-u>=0&&p-v>=0)return Uc.subVectors(s,a),o=(f-u)/(f-u+(p-v)),t.copy(a).addScaledVector(Uc,o);const m=1/(d+x+h);return n=x*m,o=h*m,t.copy(r).addScaledVector(ra,n).addScaledVector(aa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Yn(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=at.workingColorSpace){return this.r=e,this.g=t,this.b=r,at.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=at.workingColorSpace){if(e=Kf(e,1),t=Ze(t,0,1),r=Ze(r,0,1),t===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+t):r+t-r*t,n=2*r-s;this.r=Yn(n,s,e+1/3),this.g=Yn(n,s,e),this.b=Yn(n,s,e-1/3)}return at.colorSpaceToWorking(this,a),this}setStyle(e,t=ci){function r(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const n=a[1],o=a[2];switch(n){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],n=s.length;if(n===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const r=Ah[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return at.workingToColorSpace(Ft.copy(this),e),Math.round(Ze(Ft.r*255,0,255))*65536+Math.round(Ze(Ft.g*255,0,255))*256+Math.round(Ze(Ft.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Ft.copy(this),t);const r=Ft.r,a=Ft.g,s=Ft.b,n=Math.max(r,a,s),o=Math.min(r,a,s);let l,c;const u=(o+n)/2;if(o===n)l=0,c=0;else{const f=n-o;switch(c=u<=.5?f/(n+o):f/(2-n-o),n){case r:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-r)/f+2;break;case s:l=(r-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=ci){at.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,r=Ft.g,a=Ft.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(Ls);const r=Pn(fr.h,Ls.h,t),a=Pn(fr.s,Ls.s,t),s=Pn(fr.l,Ls.l,t);return this.setHSL(r,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*r+s[6]*a,this.g=s[1]*t+s[4]*r+s[7]*a,this.b=s[2]*t+s[5]*r+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Xe;Xe.NAMES=Ah;let dp=0;class br extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Ma,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=So,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ma&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Mo&&(r.blendSrc=this.blendSrc),this.blendDst!==So&&(r.blendDst=this.blendDst),this.blendEquation!==Ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ra&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(s){const n=[];for(const o in s){const l=s[o];delete l.metadata,n.push(l)}return n}if(t){const s=a(e.textures),n=a(e.images);s.length>0&&(r.textures=s),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let s=0;s!==a;++s)r[s]=t[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rh extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new O,Us=new We;let fp=0;class Ai{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=hl,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Di(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ut(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),r=ut(r,this.array),a=ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),r=ut(r,this.array),a=ut(a,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}}class Ch extends Ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ph extends Ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class kt extends Ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}let pp=0;const ni=new ht,$n=new wt,sa=new O,ei=new gs,ka=new gs,Ct=new O;class Wt extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Ph:Ch)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new je().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,r){return ni.makeTranslation(e,t,r),this.applyMatrix4(ni),this}scale(e,t,r){return ni.makeScale(e,t,r),this.applyMatrix4(ni),this}lookAt(e){return $n.lookAt(e),$n.updateMatrix(),this.applyMatrix4($n.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,s=e.length;a<s;a++){const n=e[a];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new kt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const o=t[s];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(ei.min,ka.min),ei.expandByPoint(Ct),Ct.addVectors(ei.max,ka.max),ei.expandByPoint(Ct)):(ei.expandByPoint(ka.min),ei.expandByPoint(ka.max))}ei.getCenter(r);let a=0;for(let s=0,n=e.count;s<n;s++)Ct.fromBufferAttribute(e,s),a=Math.max(a,r.distanceToSquared(Ct));if(t)for(let s=0,n=t.length;s<n;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(sa.fromBufferAttribute(e,c),Ct.add(sa)),a=Math.max(a,r.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const n=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<r.count;L++)o[L]=new O,l[L]=new O;const c=new O,u=new O,f=new O,h=new We,p=new We,v=new We,x=new O,d=new O;function m(L,_,y){c.fromBufferAttribute(r,L),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,y),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,_),v.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(U),d.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(U),o[L].add(x),o[_].add(x),o[y].add(x),l[L].add(d),l[_].add(d),l[y].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,_=b.length;L<_;++L){const y=b[L],U=y.start,G=y.count;for(let k=U,Z=U+G;k<Z;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new O,T=new O,A=new O,R=new O;function C(L){A.fromBufferAttribute(a,L),R.copy(A);const _=o[L];w.copy(_),w.sub(A.multiplyScalar(A.dot(_))).normalize(),T.crossVectors(R,_);const y=T.dot(l[L])<0?-1:1;n.setXYZW(L,w.x,w.y,w.z,y)}for(let L=0,_=b.length;L<_;++L){const y=b[L],U=y.start,G=y.count;for(let k=U,Z=U+G;k<Z;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const a=new O,s=new O,n=new O,o=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),d=e.getX(h+2);a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),n.fromBufferAttribute(t,d),u.subVectors(n,s),f.subVectors(a,s),u.cross(f),o.fromBufferAttribute(r,v),l.fromBufferAttribute(r,x),c.fromBufferAttribute(r,d),o.add(u),l.add(u),c.add(u),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)a.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),n.fromBufferAttribute(t,h+2),u.subVectors(n,s),f.subVectors(a,s),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,d=l.length;x<d;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let m=0;m<u;m++)h[v++]=c[p++]}return new Ai(h,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,r=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,r);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,r);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let o=0,l=n.length;o<l;o++){const c=n[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(a[l]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let c=0,u=n.length;c<u;c++){const f=n[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new ht,Rr=new xn,Ds=new vs,Ic=new O,Is=new O,Ns=new O,Os=new O,Zn=new O,Fs=new O,Nc=new O,Bs=new O;class Ri extends wt{constructor(e=new Wt,t=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const n=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=a}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,s=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Fs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Zn.fromBufferAttribute(f,e),n?Fs.addScaledVector(Zn,u):Fs.addScaledVector(Zn.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const r=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ds.copy(r.boundingSphere),Ds.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Ds.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Ds,Ic)===null||Rr.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Dc.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Dc),!(r.boundingBox!==null&&Rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,r){let a;const s=this.geometry,n=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(n))for(let v=0,x=h.length;v<x;v++){const d=h[v],m=n[d.materialIndex],b=Math.max(d.start,p.start),w=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let T=b,A=w;T<A;T+=3){const R=o.getX(T),C=o.getX(T+1),L=o.getX(T+2);a=zs(this,m,e,r,c,u,f,R,C,L),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let d=v,m=x;d<m;d+=3){const b=o.getX(d),w=o.getX(d+1),T=o.getX(d+2);a=zs(this,n,e,r,c,u,f,b,w,T),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let v=0,x=h.length;v<x;v++){const d=h[v],m=n[d.materialIndex],b=Math.max(d.start,p.start),w=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let T=b,A=w;T<A;T+=3){const R=T,C=T+1,L=T+2;a=zs(this,m,e,r,c,u,f,R,C,L),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let d=v,m=x;d<m;d+=3){const b=d,w=d+1,T=d+2;a=zs(this,n,e,r,c,u,f,b,w,T),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function mp(i,e,t,r,a,s,n,o){let l;if(e.side===Zt?l=r.intersectTriangle(n,s,a,!0,o):l=r.intersectTriangle(a,s,n,e.side===yr,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:i}}function zs(i,e,t,r,a,s,n,o,l,c){i.getVertexPosition(o,Is),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Os);const u=mp(i,e,t,r,Is,Ns,Os,Nc);if(u){const f=new O;ui.getBarycoord(Nc,Is,Ns,Os,f),a&&(u.uv=ui.getInterpolatedAttribute(a,o,l,c,f,new We)),s&&(u.uv1=ui.getInterpolatedAttribute(s,o,l,c,f,new We)),n&&(u.normal=ui.getInterpolatedAttribute(n,o,l,c,f,new O),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};ui.getNormal(Is,Ns,Os,h.normal),u.face=h,u.barycoord=f}return u}class _s extends Wt{constructor(e=1,t=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};const o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,r,t,e,n,s,0),v("z","y","x",1,-1,r,t,-e,n,s,1),v("x","z","y",1,1,e,r,t,a,n,2),v("x","z","y",1,-1,e,r,-t,a,n,3),v("x","y","z",1,-1,e,t,r,a,s,4),v("x","y","z",-1,-1,e,t,-r,a,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function v(x,d,m,b,w,T,A,R,C,L,_){const y=T/C,U=A/L,G=T/2,k=A/2,Z=R/2,Q=C+1,q=L+1;let j=0,re=0;const ce=new O;for(let pe=0;pe<q;pe++){const Ee=pe*U-k;for(let ze=0;ze<Q;ze++){const Ne=ze*y-G;ce[x]=Ne*b,ce[d]=Ee*w,ce[m]=Z,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[d]=0,ce[m]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(ze/C),f.push(1-pe/L),j+=1}}for(let pe=0;pe<L;pe++)for(let Ee=0;Ee<C;Ee++){const ze=h+Ee+Q*pe,Ne=h+Ee+Q*(pe+1),st=h+(Ee+1)+Q*(pe+1),Ye=h+(Ee+1)+Q*pe;l.push(ze,Ne,Ye),l.push(Ne,st,Ye),re+=6}o.addGroup(p,re,_),p+=re,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ua(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const r=Ua(i[t]);for(const a in r)e[a]=r[a]}return e}function gp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const vp={clone:Ua,merge:Vt};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ua(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Uh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new O,Oc=new We,Fc=new We;class ii extends Uh{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(Cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Fc),t.subVectors(Fc,Oc)}setViewOffset(e,t,r,a,s,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cn*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,s=-.5*a;const n=this.view;if(this.view!==null&&this.view.enabled){const l=n.fullWidth,c=n.fullHeight;s+=n.offsetX*a/l,t-=n.offsetY*r/c,a*=n.width/l,r*=n.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const na=-90,oa=1;class Mp extends wt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(na,oa,e,t);a.layers=this.layers,this.add(a);const s=new ii(na,oa,e,t);s.layers=this.layers,this.add(s);const n=new ii(na,oa,e,t);n.layers=this.layers,this.add(n);const o=new ii(na,oa,e,t);o.layers=this.layers,this.add(o);const l=new ii(na,oa,e,t);l.layers=this.layers,this.add(l);const c=new ii(na,oa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,s,n,o,l]=t;for(const c of t)this.remove(c);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cn)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,n,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,s),e.setRenderTarget(r,1,a),e.render(t,n),e.setRenderTarget(r,2,a),e.render(t,o),e.setRenderTarget(r,3,a),e.render(t,l),e.setRenderTarget(r,4,a),e.render(t,c),r.texture.generateMipmaps=x,e.setRenderTarget(r,5,a),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class kl extends Gt{constructor(e=[],t=Xr,r,a,s,n,o,l,c,u){super(e,t,r,a,s,n,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dh extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new kl(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new _s(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:Ua(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zt,blending:tr});s.uniforms.tEquirect.value=t;const n=new Ri(a,s),o=t.minFilter;return t.minFilter===Br&&(t.minFilter=zt),new Mp(1,10,this).update(e,n),t.minFilter=o,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const s=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,a);e.setRenderTarget(s)}}class Gs extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class Jn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,s=null,n=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,r),m=this._getHandJoint(c,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Gs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Wl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new Wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yp extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=Mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new O;class dn{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Di(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ut(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),r=ut(r,this.array),a=ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),r=ut(r,this.array),a=ut(a,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){hn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new Ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){hn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ur extends br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let la;const Wa=new O,ca=new O,ua=new O,ha=new We,Xa=new We,Ih=new ht,Hs=new O,ja=new O,Vs=new O,Bc=new We,Kn=new We,zc=new We;class da extends wt{constructor(e=new Ur){if(super(),this.isSprite=!0,this.type="Sprite",la===void 0){la=new Wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new bp(t,5);la.setIndex([0,1,2,0,2,3]),la.setAttribute("position",new dn(r,3,0,!1)),la.setAttribute("uv",new dn(r,2,3,!1))}this.geometry=la,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ca.setFromMatrixScale(this.matrixWorld),Ih.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ua.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ca.multiplyScalar(-ua.z);const r=this.material.rotation;let a,s;r!==0&&(s=Math.cos(r),a=Math.sin(r));const n=this.center;ks(Hs.set(-.5,-.5,0),ua,n,ca,a,s),ks(ja.set(.5,-.5,0),ua,n,ca,a,s),ks(Vs.set(.5,.5,0),ua,n,ca,a,s),Bc.set(0,0),Kn.set(1,0),zc.set(1,1);let o=e.ray.intersectTriangle(Hs,ja,Vs,!1,Wa);if(o===null&&(ks(ja.set(-.5,.5,0),ua,n,ca,a,s),Kn.set(0,1),o=e.ray.intersectTriangle(Hs,Vs,ja,!1,Wa),o===null))return;const l=e.ray.origin.distanceTo(Wa);l<e.near||l>e.far||t.push({distance:l,point:Wa.clone(),uv:ui.getInterpolation(Wa,Hs,ja,Vs,Bc,Kn,zc,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ks(i,e,t,r,a,s){ha.subVectors(i,t).addScalar(.5).multiply(r),a!==void 0?(Xa.x=s*ha.x-a*ha.y,Xa.y=a*ha.x+s*ha.y):Xa.copy(ha),i.copy(e),i.x+=Xa.x,i.y+=Xa.y,i.applyMatrix4(Ih)}class Ep extends Gt{constructor(e=null,t=1,r=1,a,s,n,o,l,c=Dt,u=Dt,f,h){super(null,n,o,l,c,u,a,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qn=new O,Tp=new O,wp=new je;class Dr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Qn.subVectors(r,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Qn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||wp.getNormalMatrix(e),a=this.coplanarPoint(Qn).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new vs,Ap=new We(.5,.5),Ws=new O;class Xl{constructor(e=new Dr,t=new Dr,r=new Dr,a=new Dr,s=new Dr,n=new Dr){this.planes=[e,t,r,a,s,n]}set(e,t,r,a,s,n){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(a),o[4].copy(s),o[5].copy(n),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi,r=!1){const a=this.planes,s=e.elements,n=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],v=s[8],x=s[9],d=s[10],m=s[11],b=s[12],w=s[13],T=s[14],A=s[15];if(a[0].setComponents(c-n,p-u,m-v,A-b).normalize(),a[1].setComponents(c+n,p+u,m+v,A+b).normalize(),a[2].setComponents(c+o,p+f,m+x,A+w).normalize(),a[3].setComponents(c-o,p-f,m-x,A-w).normalize(),r)a[4].setComponents(l,h,d,T).normalize(),a[5].setComponents(c-l,p-h,m-d,A-T).normalize();else if(a[4].setComponents(c-l,p-h,m-d,A-T).normalize(),t===Oi)a[5].setComponents(c+l,p+h,m+d,A+T).normalize();else if(t===cn)a[5].setComponents(l,h,d,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const t=Ap.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Ws.x=a.normal.x>0?e.max.x:e.min.x,Ws.y=a.normal.y>0?e.max.y:e.min.y,Ws.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fl extends br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fn=new O,pn=new O,Gc=new ht,qa=new xn,Xs=new vs,eo=new O,Hc=new O;class Vc extends wt{constructor(e=new Wt,t=new fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,s=t.count;a<s;a++)fn.fromBufferAttribute(t,a-1),pn.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=fn.distanceTo(pn);e.setAttribute("lineDistance",new kt(r,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,n=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xs.copy(r.boundingSphere),Xs.applyMatrix4(a),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;Gc.copy(a).invert(),qa.copy(e.ray).applyMatrix4(Gc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=r.index,f=r.attributes.position;if(u!==null){const h=Math.max(0,n.start),p=Math.min(u.count,n.start+n.count);for(let v=h,x=p-1;v<x;v+=c){const d=u.getX(v),m=u.getX(v+1),b=js(this,e,qa,l,d,m,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(p-1),x=u.getX(h),d=js(this,e,qa,l,v,x,p-1);d&&t.push(d)}}else{const h=Math.max(0,n.start),p=Math.min(f.count,n.start+n.count);for(let v=h,x=p-1;v<x;v+=c){const d=js(this,e,qa,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=js(this,e,qa,l,p-1,h,p-1);v&&t.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const n=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=a}}}}}function js(i,e,t,r,a,s,n){const o=i.geometry.attributes.position;if(fn.fromBufferAttribute(o,a),pn.fromBufferAttribute(o,s),t.distanceSqToSegment(fn,pn,eo,Hc)>r)return;eo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(eo);if(!(l<e.near||l>e.far))return{distance:l,point:Hc.clone().applyMatrix4(i.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:i}}class Nh extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kc=new ht,pl=new xn,qs=new vs,Ys=new O;class Rp extends wt{constructor(e=new Wt,t=new Nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,n=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),qs.copy(r.boundingSphere),qs.applyMatrix4(a),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;kc.copy(a).invert(),pl.copy(e.ray).applyMatrix4(kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,u=r.attributes.position;if(c!==null){const f=Math.max(0,n.start),h=Math.min(c.count,n.start+n.count);for(let p=f,v=h;p<v;p++){const x=c.getX(p);Ys.fromBufferAttribute(u,x),Wc(Ys,x,l,a,e,t,this)}}else{const f=Math.max(0,n.start),h=Math.min(u.count,n.start+n.count);for(let p=f,v=h;p<v;p++)Ys.fromBufferAttribute(u,p),Wc(Ys,p,l,a,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const n=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=a}}}}}function Wc(i,e,t,r,a,s,n){const o=pl.distanceSqToPoint(i);if(o<t){const l=new O;pl.closestPointToPoint(i,l),l.applyMatrix4(r);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:n})}}class to extends Gt{constructor(e,t,r,a,s,n,o,l,c){super(e,t,r,a,s,n,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends Gt{constructor(e,t,r=Gi,a,s,n,o=Dt,l=Dt,c,u=ar,f=1){if(u!==ar&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,a,s,n,o,l,u,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cp extends ls{constructor(e,t=Gi,r=Xr,a,s,n=Dt,o=Dt,l,c=ar){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,r,a,s,n,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Oh extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mn extends Wt{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const s=[],n=[];o(a),c(r),u(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(n,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const w=new O,T=new O,A=new O;for(let R=0;R<t.length;R+=3)p(t[R+0],w),p(t[R+1],T),p(t[R+2],A),l(w,T,A,b)}function l(b,w,T,A){const R=A+1,C=[];for(let L=0;L<=R;L++){C[L]=[];const _=b.clone().lerp(T,L/R),y=w.clone().lerp(T,L/R),U=R-L;for(let G=0;G<=U;G++)G===0&&L===R?C[L][G]=_:C[L][G]=_.clone().lerp(y,G/U)}for(let L=0;L<R;L++)for(let _=0;_<2*(R-L)-1;_++){const y=Math.floor(_/2);_%2===0?(h(C[L][y+1]),h(C[L+1][y]),h(C[L][y])):(h(C[L][y+1]),h(C[L+1][y+1]),h(C[L+1][y]))}}function c(b){const w=new O;for(let T=0;T<s.length;T+=3)w.x=s[T+0],w.y=s[T+1],w.z=s[T+2],w.normalize().multiplyScalar(b),s[T+0]=w.x,s[T+1]=w.y,s[T+2]=w.z}function u(){const b=new O;for(let w=0;w<s.length;w+=3){b.x=s[w+0],b.y=s[w+1],b.z=s[w+2];const T=d(b)/2/Math.PI+.5,A=m(b)/Math.PI+.5;n.push(T,1-A)}v(),f()}function f(){for(let b=0;b<n.length;b+=6){const w=n[b+0],T=n[b+2],A=n[b+4],R=Math.max(w,T,A),C=Math.min(w,T,A);R>.9&&C<.1&&(w<.2&&(n[b+0]+=1),T<.2&&(n[b+2]+=1),A<.2&&(n[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function p(b,w){const T=b*3;w.x=e[T+0],w.y=e[T+1],w.z=e[T+2]}function v(){const b=new O,w=new O,T=new O,A=new O,R=new We,C=new We,L=new We;for(let _=0,y=0;_<s.length;_+=9,y+=6){b.set(s[_+0],s[_+1],s[_+2]),w.set(s[_+3],s[_+4],s[_+5]),T.set(s[_+6],s[_+7],s[_+8]),R.set(n[y+0],n[y+1]),C.set(n[y+2],n[y+3]),L.set(n[y+4],n[y+5]),A.copy(b).add(w).add(T).divideScalar(3);const U=d(A);x(R,y+0,b,U),x(C,y+2,w,U),x(L,y+4,T,U)}}function x(b,w,T,A){A<0&&b.x===1&&(n[w]=b.x-1),T.x===0&&T.z===0&&(n[w]=A/2/Math.PI+.5)}function d(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.vertices,e.indices,e.radius,e.detail)}}class jl extends Mn{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=1/r,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],n=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,n,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jl(e.radius,e.detail)}}class Pp{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),s=0;t.push(0);for(let n=1;n<=e;n++)r=this.getPoint(n/e),s+=r.distanceTo(a),t.push(s),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const s=r.length;let n;t?n=t:n=e*r[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=r[a]-n,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,r[a]===n)return a/(s-1);const u=r[a],f=r[a+1]-u,h=(n-u)/f;return(a+h)/(s-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),n=this.getPoint(a),o=t||(s.isVector2?new We:new O);return o.copy(n).sub(s).normalize(),o}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new O,a=[],s=[],n=[],o=new O,l=new ht;for(let p=0;p<=e;p++){const v=p/e;a[p]=this.getTangentAt(v,new O)}s[0]=new O,n[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(a[0].x),f=Math.abs(a[0].y),h=Math.abs(a[0].z);u<=c&&(c=u,r.set(1,0,0)),f<=c&&(c=f,r.set(0,1,0)),h<=c&&r.set(0,0,1),o.crossVectors(a[0],r).normalize(),s[0].crossVectors(a[0],o),n[0].crossVectors(a[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),n[p]=n[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Ze(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}n[p].crossVectors(a[p],s[p])}if(t===!0){let p=Math.acos(Ze(s[0].dot(s[e]),-1,1));p/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(a[v],p*v)),n[v].crossVectors(a[v],s[v])}return{tangents:a,normals:s,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Lp(i,e){const t=1-i;return t*t*e}function Up(i,e){return 2*(1-i)*i*e}function Dp(i,e){return i*i*e}function io(i,e,t,r){return Lp(i,e)+Up(i,t)+Dp(i,r)}class Xc extends Pp{constructor(e=new O,t=new O,r=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new O){const r=t,a=this.v0,s=this.v1,n=this.v2;return r.set(io(e,a.x,s.x,n.x),io(e,a.y,s.y,n.y),io(e,a.z,s.z,n.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ql extends Mn{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ql(e.radius,e.detail)}}class Sn extends Wt{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const s=e/2,n=t/2,o=Math.floor(r),l=Math.floor(a),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],x=[],d=[];for(let m=0;m<u;m++){const b=m*h-n;for(let w=0;w<c;w++){const T=w*f-s;v.push(T,-b,0),x.push(0,0,1),d.push(w/o),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const w=b+c*m,T=b+c*(m+1),A=b+1+c*(m+1),R=b+1+c*m;p.push(w,T,R),p.push(T,A,R)}this.setIndex(p),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ip extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Np extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jc extends Np{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Op extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yl extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ro=new ht,qc=new O,Yc=new O;class Fh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(qc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bp extends Fh{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class fa extends Yl{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class $l extends Uh{constructor(e=-1,t=1,r=1,a=-1,s=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=s,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,s,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=r-e,n=r+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,n=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,n,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zp extends Fh{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ao extends Yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new zp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gp extends Yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $c=new ht;class Vp{constructor(e,t,r=0,a=1/0){this.ray=new xn(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $c.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($c),this}intersectObject(e,t=!0,r=[]){return ml(e,this,r,t),r.sort(Zc),r}intersectObjects(e,t=!0,r=[]){for(let a=0,s=e.length;a<s;a++)ml(e[a],this,r,t);return r.sort(Zc),r}}function Zc(i,e){return i.distance-e.distance}function ml(i,e,t,r){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const s=i.children;for(let n=0,o=s.length;n<o;n++)ml(s[n],e,t,!0)}}function Jc(i,e,t,r){const a=kp(r);switch(t){case Sh:return i*e;case bh:return i*e/a.components*a.byteLength;case Ol:return i*e/a.components*a.byteLength;case Pa:return i*e*2/a.components*a.byteLength;case Fl:return i*e*2/a.components*a.byteLength;case yh:return i*e*3/a.components*a.byteLength;case wi:return i*e*4/a.components*a.byteLength;case Bl:return i*e*4/a.components*a.byteLength;case Qs:case en:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tn:case rn:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:case Oo:return Math.max(i,16)*Math.max(e,8)/4;case Do:case No:return Math.max(i,8)*Math.max(e,8)/2;case Fo:case Bo:case Go:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zo:case Vo:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case al:case sl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ol:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case cl:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kp(i){switch(i){case ri:case vh:return{byteLength:1,components:1};case ss:case _h:case rr:return{byteLength:2,components:1};case Il:case Nl:return{byteLength:2,components:4};case Gi:case Dl:case Ni:return{byteLength:4,components:1};case xh:case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);function Bh(){let i=null,e=!1,t=null,r=null;function a(s,n){t(s,n),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Wp(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],x=f[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const x=f[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:n}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
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
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,Fm=`#ifdef USE_ENVMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,km=`uniform sampler2D dfgLUT;
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cg=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,nv=`#define LAMBERT
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
}`,ov=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,uv=`#define NORMAL
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
}`,hv=`#define NORMAL
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
}`,dv=`#define PHONG
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
}`,fv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,gv=`#define TOON
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
}`,vv=`#define TOON
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
}`,_v=`uniform float size;
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
}`,xv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,yv=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Xp,alphahash_pars_fragment:jp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:$p,alphatest_pars_fragment:Zp,aomap_fragment:Jp,aomap_pars_fragment:Kp,batching_pars_vertex:Qp,batching_vertex:em,begin_vertex:tm,beginnormal_vertex:im,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:sm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:um,color_pars_fragment:hm,color_pars_vertex:dm,color_vertex:fm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:vm,displacementmap_vertex:_m,emissivemap_fragment:xm,emissivemap_pars_fragment:Mm,colorspace_fragment:Sm,colorspace_pars_fragment:ym,envmap_fragment:bm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Tm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Fm,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Dm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Nm,lights_pars_begin:Om,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Vm,lights_physical_pars_fragment:km,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:jm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ig,morphinstance_vertex:rg,morphcolor_vertex:ag,morphnormal_vertex:sg,morphtarget_pars_vertex:ng,morphtarget_vertex:og,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:ug,normal_pars_vertex:hg,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:vg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:yg,dithering_pars_fragment:bg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Rg,shadowmask_pars_fragment:Cg,skinbase_vertex:Pg,skinning_pars_vertex:Lg,skinning_vertex:Ug,skinnormal_vertex:Dg,specularmap_fragment:Ig,specularmap_pars_fragment:Ng,tonemapping_fragment:Og,tonemapping_pars_fragment:Fg,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:Gg,uv_pars_vertex:Hg,uv_vertex:Vg,worldpos_vertex:kg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:jg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:$g,depth_vert:Zg,depth_frag:Jg,distance_vert:Kg,distance_frag:Qg,equirect_vert:ev,equirect_frag:tv,linedashed_vert:iv,linedashed_frag:rv,meshbasic_vert:av,meshbasic_frag:sv,meshlambert_vert:nv,meshlambert_frag:ov,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:uv,meshnormal_frag:hv,meshphong_vert:dv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:vv,points_vert:_v,points_frag:xv,shadow_vert:Mv,shadow_frag:Sv,sprite_vert:yv,sprite_frag:bv},xe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Ui={basic:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Vt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Vt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Vt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Vt([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Vt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Vt([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Vt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Vt([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Vt([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Vt([xe.lights,xe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Ui.physical={uniforms:Vt([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const $s={r:0,b:0,g:0},Pr=new Hi,Ev=new ht;function Tv(i,e,t,r,a,s,n){const o=new Xe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function x(w){let T=!1;const A=v(w);A===null?m(o,l):A&&A.isColor&&(m(A,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,n):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,n),(i.autoClear||T)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(w,T){const A=v(T);A&&(A.isCubeTexture||A.mapping===_n)?(u===void 0&&(u=new Ri(new _s(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Ua(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Pr.copy(T.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Pr)),u.material.toneMapped=at.getTransfer(A.colorSpace)!==ct,(f!==A||h!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ri(new Sn(2,2),new Vi({name:"BackgroundMaterial",uniforms:Ua(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=at.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,T){w.getRGB($s,Lh(i)),r.buffers.color.setClear($s.r,$s.g,$s.b,T,n)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,T=1){o.set(w),l=T,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:x,addToRenderList:d,dispose:b}}function wv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=h(null);let s=a,n=!1;function o(y,U,G,k,Z){let Q=!1;const q=f(k,G,U);s!==q&&(s=q,c(s.object)),Q=p(y,k,G,Z),Q&&v(y,k,G,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||n)&&(n=!1,T(y,U,G,k),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,U,G){const k=G.wireframe===!0;let Z=r[y.id];Z===void 0&&(Z={},r[y.id]=Z);let Q=Z[U.id];Q===void 0&&(Q={},Z[U.id]=Q);let q=Q[k];return q===void 0&&(q=h(l()),Q[k]=q),q}function h(y){const U=[],G=[],k=[];for(let Z=0;Z<t;Z++)U[Z]=0,G[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,U,G,k){const Z=s.attributes,Q=U.attributes;let q=0;const j=G.getAttributes();for(const re in j)if(j[re].location>=0){const ce=Z[re];let pe=Q[re];if(pe===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function v(y,U,G,k){const Z={},Q=U.attributes;let q=0;const j=G.getAttributes();for(const re in j)if(j[re].location>=0){let ce=Q[re];ce===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor));const pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),Z[re]=pe,q++}s.attributes=Z,s.attributesNum=q,s.index=k}function x(){const y=s.newAttributes;for(let U=0,G=y.length;U<G;U++)y[U]=0}function d(y){m(y,0)}function m(y,U){const G=s.newAttributes,k=s.enabledAttributes,Z=s.attributeDivisors;G[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),Z[y]!==U&&(i.vertexAttribDivisor(y,U),Z[y]=U)}function b(){const y=s.newAttributes,U=s.enabledAttributes;for(let G=0,k=U.length;G<k;G++)U[G]!==y[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function w(y,U,G,k,Z,Q,q){q===!0?i.vertexAttribIPointer(y,U,G,Z,Q):i.vertexAttribPointer(y,U,G,k,Z,Q)}function T(y,U,G,k){x();const Z=k.attributes,Q=G.getAttributes(),q=U.defaultAttributeValues;for(const j in Q){const re=Q[j];if(re.location>=0){let ce=Z[j];if(ce===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const pe=ce.normalized,Ee=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;const Ne=ze.buffer,st=ze.type,Ye=ze.bytesPerElement,J=st===i.INT||st===i.UNSIGNED_INT||ce.gpuType===Dl;if(ce.isInterleavedBufferAttribute){const ee=ce.data,Se=ee.stride,Oe=ce.offset;if(ee.isInstancedInterleavedBuffer){for(let ye=0;ye<re.locationSize;ye++)m(re.location+ye,ee.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<re.locationSize;ye++)d(re.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ye=0;ye<re.locationSize;ye++)w(re.location+ye,Ee/re.locationSize,st,pe,Se*Ye,(Oe+Ee/re.locationSize*ye)*Ye,J)}else{if(ce.isInstancedBufferAttribute){for(let ee=0;ee<re.locationSize;ee++)m(re.location+ee,ce.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ee=0;ee<re.locationSize;ee++)d(re.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ee=0;ee<re.locationSize;ee++)w(re.location+ee,Ee/re.locationSize,st,pe,Ee*Ye,Ee/re.locationSize*ee*Ye,J)}}else if(q!==void 0){const pe=q[j];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(re.location,pe);break;case 3:i.vertexAttrib3fv(re.location,pe);break;case 4:i.vertexAttrib4fv(re.location,pe);break;default:i.vertexAttrib1fv(re.location,pe)}}}}b()}function A(){L();for(const y in r){const U=r[y];for(const G in U){const k=U[G];for(const Z in k)u(k[Z].object),delete k[Z];delete U[G]}delete r[y]}}function R(y){if(r[y.id]===void 0)return;const U=r[y.id];for(const G in U){const k=U[G];for(const Z in k)u(k[Z].object),delete k[Z];delete U[G]}delete r[y.id]}function C(y){for(const U in r){const G=r[U];if(G[y.id]===void 0)continue;const k=G[y.id];for(const Z in k)u(k[Z].object),delete k[Z];delete G[y.id]}}function L(){_(),n=!0,s!==a&&(s=a,c(s.object))}function _(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:d,disableUnusedAttributes:b}}function Av(i,e,t){let r;function a(c){r=c}function s(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function n(c,u,f){f!==0&&(i.drawArraysInstanced(r,c,u,f),t.update(u,r,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let h=0;for(let p=0;p<f;p++)h+=u[p];t.update(h,r,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)n(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x]*h[x];t.update(v,r,1)}}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rv(i,e,t,r){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(C){return!(C!==wi&&r.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ri&&r.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ni&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:T,maxSamples:A,samples:R}}function Cv(i){const e=this;let t=null,r=0,a=!1,s=!1;const n=new Dr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||r!==0||a;return a=h,r=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,x=f.clipIntersection,d=f.clipShadows,m=i.get(f);if(!a||v===null||v.length===0||s&&!d)s?u(null):c();else{const b=s?0:r,w=b*4;let T=m.clippingState||null;l.value=T,T=u(v,h,w,p);for(let A=0;A!==w;++A)T[A]=t[A];m.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,p,v){const x=f!==null?f.length:0;let d=null;if(x!==0){if(d=l.value,v!==!0||d===null){const m=p+x*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<m)&&(d=new Float32Array(m));for(let w=0,T=p;w!==x;++w,T+=4)n.copy(f[w]).applyMatrix4(b,o),n.normal.toArray(d,T),d[T+3]=n.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function Pv(i){let e=new WeakMap;function t(n,o){return o===Co?n.mapping=Xr:o===Po&&(n.mapping=Ca),n}function r(n){if(n&&n.isTexture){const o=n.mapping;if(o===Co||o===Po)if(e.has(n)){const l=e.get(n).texture;return t(l,n.mapping)}else{const l=n.image;if(l&&l.height>0){const c=new Dh(l.height);return c.fromEquirectangularTexture(i,n),e.set(n,c),n.addEventListener("dispose",a),t(c.texture,n.mapping)}else return null}}return n}function a(n){const o=n.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}const gr=4,Kc=[.125,.215,.35,.446,.526,.582],Nr=20,Lv=256,Ya=new $l,Qc=new Xe;let so=null,no=0,oo=0,lo=!1;const Uv=new O;class eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,s={}){const{size:n=256,position:o=Uv}=s;so=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(so,no,oo),this._renderer.xr.enabled=lo,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===Ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:rr,format:wi,colorSpace:La,depthBuffer:!1},a=tu(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,r);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dv(s)),this._blurMaterial=Nv(s,e,t),this._ggxMaterial=Iv(s,e,t)}return a}_compileMaterial(e){const t=new Ri(new Wt,e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,r,a,s){const n=new ii(90,1,t,r),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(Qc),c.toneMapping=Fi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(a),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new _s,new Rh({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const h=this._backgroundBox,p=h.material;let v=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,v=!0):(p.color.copy(Qc),v=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(n.up.set(0,o[d],0),n.position.set(s.x,s.y,s.z),n.lookAt(s.x+l[d],s.y,s.z)):m===1?(n.up.set(0,0,o[d]),n.position.set(s.x,s.y,s.z),n.lookAt(s.x,s.y+l[d],s.z)):(n.up.set(0,o[d],0),n.position.set(s.x,s.y,s.z),n.lookAt(s.x,s.y,s.z+l[d]));const b=this._cubeSize;pa(a,m*b,d>2?b:0,b,b),c.setRenderTarget(a),v&&c.render(h,n),c.render(e,n)}c.toneMapping=f,c.autoClear=u,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Xr||e.mapping===Ca;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const s=a?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;pa(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(n,Ya)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,s=this._pingPongRenderTarget,n=this._ggxMaterial,o=this._lodMeshes[r];o.material=n;const l=n.uniforms,c=r/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:v}=this,x=this._sizeLods[r],d=3*x*(r>v-gr?r-v+gr:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,pa(s,d,m,3*x,2*x),a.setRenderTarget(s),a.render(o,Ya),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-r,pa(e,d,m,3*x,2*x),a.setRenderTarget(e),a.render(o,Ya)}_blur(e,t,r,a,s){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,a,"latitudinal",s),this._halfBlur(n,e,r,r,a,"longitudinal",s)}_halfBlur(e,t,r,a,s,n,o){const l=this._renderer,c=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[a];f.material=c;const h=c.uniforms,p=this._sizeLods[r]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),x=s/v,d=isFinite(s)?1+Math.floor(u*x):Nr;d>Nr&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Nr}`);const m=[];let b=0;for(let C=0;C<Nr;++C){const L=C/x,_=Math.exp(-L*L/2);m.push(_),C===0?b+=_:C<d&&(b+=2*_)}for(let C=0;C<m.length;C++)m[C]=m[C]/b;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=m,h.latitudinal.value=n==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-r;const T=this._sizeLods[a],A=3*T*(a>w-gr?a-w+gr:0),R=4*(this._cubeSize-T);pa(t,A,R,3*T,2*T),l.setRenderTarget(t),l.render(f,Ya)}}function Dv(i){const e=[],t=[],r=[];let a=i;const s=i-gr+1+Kc.length;for(let n=0;n<s;n++){const o=Math.pow(2,a);e.push(o);let l=1/o;n>i-gr?l=Kc[n-i+gr-1]:n===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,x=3,d=2,m=1,b=new Float32Array(x*v*p),w=new Float32Array(d*v*p),T=new Float32Array(m*v*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,L=R>2?0:-1,_=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(_,x*v*R),w.set(h,d*v*R);const y=[R,R,R,R,R,R];T.set(y,m*v*R)}const A=new Wt;A.setAttribute("position",new Ai(b,x)),A.setAttribute("uv",new Ai(w,d)),A.setAttribute("faceIndex",new Ai(T,m)),r.push(new Ri(A,null)),a>gr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function tu(i,e,t){const r=new Bi(i,e,t);return r.texture.mapping=_n,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pa(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function Iv(i,e,t){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yn(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Nv(i,e,t){const r=new Float32Array(Nr),a=new O(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yn(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function iu(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yn(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function ru(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function yn(){return`

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
	`}function Ov(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Co||l===Po,u=l===Xr||l===Ca;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new eu(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(t===null&&(t=new eu(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:n}}function Fv(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=i.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&os("WebGLRenderer: "+r+" extension not supported."),a}}}function Bv(i,e,t,r){const a={},s=new WeakMap;function n(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",n),delete a[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",n),a[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let w=0,T=b.length;w<T;w+=3){const A=b[w+0],R=b[w+1],C=b[w+2];h.push(A,R,R,C,C,A)}}else if(v!==void 0){const b=v.array;x=v.version;for(let w=0,T=b.length/3-1;w<T;w+=3){const A=w+0,R=w+1,C=w+2;h.push(A,R,R,C,C,A)}}else return;const d=new(Th(h)?Ph:Ch)(h,1);d.version=x;const m=s.get(f);m&&e.remove(m),s.set(f,d)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zv(i,e,t){let r;function a(h){r=h}let s,n;function o(h){s=h.type,n=h.bytesPerElement}function l(h,p){i.drawElements(r,p,s,h*n),t.update(p,r,1)}function c(h,p,v){v!==0&&(i.drawElementsInstanced(r,p,s,h*n,v),t.update(p,r,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,s,h,0,v);let x=0;for(let d=0;d<v;d++)x+=p[d];t.update(x,r,1)}function f(h,p,v,x){if(v===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h.length;m++)c(h[m]/n,p[m],x[m]);else{d.multiDrawElementsInstancedWEBGL(r,p,0,s,h,0,x,0,v);let m=0;for(let b=0;b<v;b++)m+=p[b]*x[b];t.update(m,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Gv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(t.calls++,n){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",n);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function Hv(i,e,t){const r=new WeakMap,a=new yt;function s(n,o,l){const c=n.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=r.get(o);if(h===void 0||h.count!==f){let p=function(){L.dispose(),r.delete(o),o.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let T=0;v===!0&&(T=1),x===!0&&(T=2),d===!0&&(T=3);let A=o.attributes.position.count*T,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*f),L=new wh(C,A,R,f);L.type=Ni,L.needsUpdate=!0;const _=T*4;for(let y=0;y<f;y++){const U=m[y],G=b[y],k=w[y],Z=A*R*4*y;for(let Q=0;Q<U.count;Q++){const q=Q*_;v===!0&&(a.fromBufferAttribute(U,Q),C[Z+q+0]=a.x,C[Z+q+1]=a.y,C[Z+q+2]=a.z,C[Z+q+3]=0),x===!0&&(a.fromBufferAttribute(G,Q),C[Z+q+4]=a.x,C[Z+q+5]=a.y,C[Z+q+6]=a.z,C[Z+q+7]=0),d===!0&&(a.fromBufferAttribute(k,Q),C[Z+q+8]=a.x,C[Z+q+9]=a.y,C[Z+q+10]=a.z,C[Z+q+11]=k.itemSize===4?a.w:1)}}h={count:f,texture:L,size:new We(A,R)},r.set(o,h),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",n.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Vv(i,e,t,r){let a=new WeakMap;function s(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function n(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:n}}const kv={[uh]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[dh]:"CINEON_TONE_MAPPING",[Ul]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function Wv(i,e,t,r,a){const s=new Bi(e,t,{type:i,depthBuffer:r,stencilBuffer:a}),n=new Bi(e,t,{type:rr,depthBuffer:!1,stencilBuffer:!1}),o=new Wt;o.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new kt([0,2,0,0,2,0],2));const l=new Ip({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ri(o,l),u=new $l(-1,1,1,-1,0,1);let f=null,h=null,p=!1,v,x=null,d=[],m=!1;this.setSize=function(b,w){s.setSize(b,w),n.setSize(b,w);for(let T=0;T<d.length;T++){const A=d[T];A.setSize&&A.setSize(b,w)}},this.setEffects=function(b){d=b,m=d.length>0&&d[0].isRenderPass===!0;const w=s.width,T=s.height;for(let A=0;A<d.length;A++){const R=d[A];R.setSize&&R.setSize(w,T)}},this.begin=function(b,w){if(p||b.toneMapping===Fi&&d.length===0)return!1;if(x=w,w!==null){const T=w.width,A=w.height;(s.width!==T||s.height!==A)&&this.setSize(T,A)}return m===!1&&b.setRenderTarget(s),v=b.toneMapping,b.toneMapping=Fi,!0},this.hasRenderPass=function(){return m},this.end=function(b,w){b.toneMapping=v,p=!0;let T=s,A=n;for(let R=0;R<d.length;R++){const C=d[R];if(C.enabled!==!1&&(C.render(b,A,T,w),C.needsSwap!==!1)){const L=T;T=A,A=L}}if(f!==b.outputColorSpace||h!==b.toneMapping){f=b.outputColorSpace,h=b.toneMapping,l.defines={},at.getTransfer(f)===ct&&(l.defines.SRGB_TRANSFER="");const R=kv[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(x),b.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),n.dispose(),o.dispose(),l.dispose()}}const zh=new Gt,gl=new ls(1,1),Gh=new wh,Hh=new ap,Vh=new kl,au=[],su=[],nu=new Float32Array(16),ou=new Float32Array(9),lu=new Float32Array(4);function Fa(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let s=au[a];if(s===void 0&&(s=new Float32Array(a),au[a]=s),e!==0){r.toArray(s,0);for(let n=1,o=0;n!==e;++n)o+=t,i[n].toArray(s,o)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function bn(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function Xv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function $v(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,r))return;lu.set(r),i.uniformMatrix2fv(this.addr,!1,lu),Rt(t,r)}}function Zv(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,r))return;ou.set(r),i.uniformMatrix3fv(this.addr,!1,ou),Rt(t,r)}}function Jv(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,r))return;nu.set(r),i.uniformMatrix4fv(this.addr,!1,nu),Rt(t,r)}}function Kv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function i_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function r_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function n_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(gl.compareFunction=t.isReversedDepthBuffer()?Gl:zl,s=gl):s=zh,t.setTexture2D(e||s,a)}function o_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Hh,a)}function l_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Vh,a)}function c_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Gh,a)}function u_(i){switch(i){case 5126:return Xv;case 35664:return jv;case 35665:return qv;case 35666:return Yv;case 35674:return $v;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return Kv;case 35667:case 35671:return Qv;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return i_;case 36294:return r_;case 36295:return a_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function h_(i,e){i.uniform1fv(this.addr,e)}function d_(i,e){const t=Fa(e,this.size,2);i.uniform2fv(this.addr,t)}function f_(i,e){const t=Fa(e,this.size,3);i.uniform3fv(this.addr,t)}function p_(i,e){const t=Fa(e,this.size,4);i.uniform4fv(this.addr,t)}function m_(i,e){const t=Fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g_(i,e){const t=Fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function v_(i,e){const t=Fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function __(i,e){i.uniform1iv(this.addr,e)}function x_(i,e){i.uniform2iv(this.addr,e)}function M_(i,e){i.uniform3iv(this.addr,e)}function S_(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function b_(i,e){i.uniform2uiv(this.addr,e)}function E_(i,e){i.uniform3uiv(this.addr,e)}function T_(i,e){i.uniform4uiv(this.addr,e)}function w_(i,e,t){const r=this.cache,a=e.length,s=bn(t,a);At(r,s)||(i.uniform1iv(this.addr,s),Rt(r,s));let n;this.type===i.SAMPLER_2D_SHADOW?n=gl:n=zh;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||n,s[o])}function A_(i,e,t){const r=this.cache,a=e.length,s=bn(t,a);At(r,s)||(i.uniform1iv(this.addr,s),Rt(r,s));for(let n=0;n!==a;++n)t.setTexture3D(e[n]||Hh,s[n])}function R_(i,e,t){const r=this.cache,a=e.length,s=bn(t,a);At(r,s)||(i.uniform1iv(this.addr,s),Rt(r,s));for(let n=0;n!==a;++n)t.setTextureCube(e[n]||Vh,s[n])}function C_(i,e,t){const r=this.cache,a=e.length,s=bn(t,a);At(r,s)||(i.uniform1iv(this.addr,s),Rt(r,s));for(let n=0;n!==a;++n)t.setTexture2DArray(e[n]||Gh,s[n])}function P_(i){switch(i){case 5126:return h_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return v_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return y_;case 36294:return b_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}class L_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=u_(t.type)}}class U_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P_(t.type)}}class D_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let s=0,n=a.length;s!==n;++s){const o=a[s];o.setValue(e,t[o.id],r)}}}const co=/(\w+)(\])?(\[|\.)?/g;function cu(i,e){i.seq.push(e),i.map[e.id]=e}function I_(i,e,t){const r=i.name,a=r.length;for(co.lastIndex=0;;){const s=co.exec(r),n=co.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&n+2===a){cu(t,c===void 0?new L_(o,i,e):new U_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new D_(o),cu(t,u)),t=u}}}class an{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const o=e.getActiveUniform(t,n),l=e.getUniformLocation(t,o.name);I_(o,l,this)}const a=[],s=[];for(const n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(n):s.push(n);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,r,a){const s=this.map[t];s!==void 0&&s.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let s=0,n=t.length;s!==n;++s){const o=t[s],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,s=e.length;a!==s;++a){const n=e[a];n.id in t&&r.push(n)}return r}}function uu(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const N_=37297;let O_=0;function F_(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let n=a;n<s;n++){const o=n+1;r.push(`${o===e?">":" "} ${o}: ${t[n]}`)}return r.join(`
`)}const hu=new je;function B_(i){at._getMatrix(hu,at.workingColorSpace,i);const e=`mat3( ${hu.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case ln:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function du(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const n=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+F_(i.getShaderSource(e),n)}else return a}function z_(i,e){const t=B_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const G_={[uh]:"Linear",[hh]:"Reinhard",[dh]:"Cineon",[Ul]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[fh]:"Custom"};function H_(i,e){const t=G_[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zs=new O;function V_(){at.getLuminanceCoefficients(Zs);const i=Zs.x.toFixed(4),e=Zs.y.toFixed(4),t=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function W_(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function X_(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const s=i.getActiveAttrib(e,a),n=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[n]={type:s.type,location:i.getAttribLocation(e,n),locationSize:o}}return t}function es(i){return i!==""}function fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(j_,Y_)}const q_=new Map;function Y_(i,e){let t=qe[e];if(t===void 0){const r=q_.get(e);if(r!==void 0)t=qe[r],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace($_,Z_)}function Z_(i,e,t,r){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function gu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const J_={[Ks]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function K_(i){return J_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q_={[Xr]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE",[_n]:"ENVMAP_TYPE_CUBE_UV"};function e0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Q_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const t0={[Ca]:"ENVMAP_MODE_REFRACTION"};function i0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const r0={[ch]:"ENVMAP_BLENDING_MULTIPLY",[zf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};function a0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":r0[i.combine]||"ENVMAP_BLENDING_NONE"}function s0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function n0(i,e,t,r){const a=i.getContext(),s=t.defines;let n=t.vertexShader,o=t.fragmentShader;const l=K_(t),c=e0(t),u=i0(t),f=a0(t),h=s0(t),p=k_(t),v=W_(s),x=a.createProgram();let d,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(es).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(es).join(`
`),m.length>0&&(m+=`
`)):(d=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),m=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?qe.tonemapping_pars_fragment:"",t.toneMapping!==Fi?H_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,z_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),n=vl(n),n=fu(n,t),n=pu(n,t),o=vl(o),o=fu(o,t),o=pu(o,t),n=mu(n),o=mu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=b+d+n,T=b+m+o,A=uu(a,a.VERTEX_SHADER,w),R=uu(a,a.FRAGMENT_SHADER,T);a.attachShader(x,A),a.attachShader(x,R),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function C(U){if(i.debug.checkShaderErrors){const G=a.getProgramInfoLog(x)||"",k=a.getShaderInfoLog(A)||"",Z=a.getShaderInfoLog(R)||"",Q=G.trim(),q=k.trim(),j=Z.trim();let re=!0,ce=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,A,R);else{const pe=du(a,A,"vertex"),Ee=du(a,R,"fragment");et("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Q+`
`+pe+`
`+Ee)}else Q!==""?Ve("WebGLProgram: Program Info Log:",Q):(q===""||j==="")&&(ce=!1);ce&&(U.diagnostics={runnable:re,programLog:Q,vertexShader:{log:q,prefix:d},fragmentShader:{log:j,prefix:m}})}a.deleteShader(A),a.deleteShader(R),L=new an(a,x),_=X_(a,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(x,N_)),y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let o0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(a)===!1&&(n.add(a),a.usedTimes++),n.has(s)===!1&&(n.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new c0(e),t.set(e,r)),r}}class c0{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}}function u0(i,e,t,r,a,s,n){const o=new Vl,l=new l0,c=new Set,u=[],f=new Map,h=a.logarithmicDepthBuffer;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function d(_,y,U,G,k){const Z=G.fog,Q=k.geometry,q=_.isMeshStandardMaterial?G.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),re=j&&j.mapping===_n?j.image.height:null,ce=v[_.type];_.precision!==null&&(p=a.getMaxPrecision(_.precision),p!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ee=pe!==void 0?pe.length:0;let ze=0;Q.morphAttributes.position!==void 0&&(ze=1),Q.morphAttributes.normal!==void 0&&(ze=2),Q.morphAttributes.color!==void 0&&(ze=3);let Ne,st,Ye,J;if(ce){const Ke=Ui[ce];Ne=Ke.vertexShader,st=Ke.fragmentShader}else Ne=_.vertexShader,st=_.fragmentShader,l.update(_),Ye=l.getVertexShaderID(_),J=l.getFragmentShaderID(_);const ee=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,De=!!_.map,Qe=!!_.matcap,it=!!j,Ge=!!_.aoMap,ne=!!_.lightMap,Ie=!!_.bumpMap,$e=!!_.normalMap,E=!!_.displacementMap,N=!!_.emissiveMap,Y=!!_.metalnessMap,te=!!_.roughnessMap,$=_.anisotropy>0,S=_.clearcoat>0,g=_.dispersion>0,P=_.iridescence>0,z=_.sheen>0,V=_.transmission>0,H=$&&!!_.anisotropyMap,fe=S&&!!_.clearcoatMap,K=S&&!!_.clearcoatNormalMap,me=S&&!!_.clearcoatRoughnessMap,ve=P&&!!_.iridescenceMap,ae=P&&!!_.iridescenceThicknessMap,oe=z&&!!_.sheenColorMap,Re=z&&!!_.sheenRoughnessMap,Te=!!_.specularMap,he=!!_.specularColorMap,He=!!_.specularIntensityMap,D=V&&!!_.transmissionMap,_e=V&&!!_.thicknessMap,le=!!_.gradientMap,be=!!_.alphaMap,se=_.alphaTest>0,ie=!!_.alphaHash,de=!!_.extensions;let we=Fi;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(we=i.toneMapping);const nt={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:Ne,fragmentShader:st,defines:_.defines,customVertexShaderID:Ye,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:La,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:Qe,envMap:it,envMapMode:it&&j.mapping,envMapCubeUVHeight:re,aoMap:Ge,lightMap:ne,bumpMap:Ie,normalMap:$e,displacementMap:E,emissiveMap:N,normalMapObjectSpace:$e&&_.normalMapType===kf,normalMapTangentSpace:$e&&_.normalMapType===Eh,metalnessMap:Y,roughnessMap:te,anisotropy:$,anisotropyMap:H,clearcoat:S,clearcoatMap:fe,clearcoatNormalMap:K,clearcoatRoughnessMap:me,dispersion:g,iridescence:P,iridescenceMap:ve,iridescenceThicknessMap:ae,sheen:z,sheenColorMap:oe,sheenRoughnessMap:Re,specularMap:Te,specularColorMap:he,specularIntensityMap:He,transmission:V,transmissionMap:D,thicknessMap:_e,gradientMap:le,opaque:_.transparent===!1&&_.blending===Ma&&_.alphaToCoverage===!1,alphaMap:be,alphaTest:se,alphaHash:ie,combine:_.combine,mapUv:De&&x(_.map.channel),aoMapUv:Ge&&x(_.aoMap.channel),lightMapUv:ne&&x(_.lightMap.channel),bumpMapUv:Ie&&x(_.bumpMap.channel),normalMapUv:$e&&x(_.normalMap.channel),displacementMapUv:E&&x(_.displacementMap.channel),emissiveMapUv:N&&x(_.emissiveMap.channel),metalnessMapUv:Y&&x(_.metalnessMap.channel),roughnessMapUv:te&&x(_.roughnessMap.channel),anisotropyMapUv:H&&x(_.anisotropyMap.channel),clearcoatMapUv:fe&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:K&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(_.sheenRoughnessMap.channel),specularMapUv:Te&&x(_.specularMap.channel),specularColorMapUv:he&&x(_.specularColorMap.channel),specularIntensityMapUv:He&&x(_.specularIntensityMap.channel),transmissionMapUv:D&&x(_.transmissionMap.channel),thicknessMapUv:_e&&x(_.thicknessMap.channel),alphaMapUv:be&&x(_.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&($e||$),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(De||be),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:N&&_.emissiveMap.isVideoTexture===!0&&at.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bi,flipSided:_.side===Zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&_.extensions.multiDraw===!0||ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function m(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)y.push(U),y.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(b(y,_),w(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function b(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function w(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function T(_){const y=v[_.type];let U;if(y){const G=Ui[y];U=vp.clone(G.uniforms)}else U=_.uniforms;return U}function A(_,y){let U=f.get(y);return U!==void 0?++U.usedTimes:(U=new n0(i,y,_,s),u.push(U),f.set(y,U)),U}function R(_){if(--_.usedTimes===0){const y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),f.delete(_.cacheKey),_.destroy()}}function C(_){l.remove(_)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:T,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:L}}function h0(){let i=new WeakMap;function e(n){return i.has(n)}function t(n){let o=i.get(n);return o===void 0&&(o={},i.set(n,o)),o}function r(n){i.delete(n)}function a(n,o,l){i.get(n)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:s}}function d0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _u(){const i=[];let e=0;const t=[],r=[],a=[];function s(){e=0,t.length=0,r.length=0,a.length=0}function n(f,h,p,v,x,d){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:d},i[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=p,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=x,m.group=d),e++,m}function o(f,h,p,v,x,d){const m=n(f,h,p,v,x,d);p.transmission>0?r.push(m):p.transparent===!0?a.push(m):t.push(m)}function l(f,h,p,v,x,d){const m=n(f,h,p,v,x,d);p.transmission>0?r.unshift(m):p.transparent===!0?a.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||d0),r.length>1&&r.sort(h||vu),a.length>1&&a.sort(h||vu)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:a,init:s,push:o,unshift:l,finish:u,sort:c}}function f0(){let i=new WeakMap;function e(r,a){const s=i.get(r);let n;return s===void 0?(n=new _u,i.set(r,[n])):a>=s.length?(n=new _u,s.push(n)):n=s[a],n}function t(){i=new WeakMap}return{get:e,dispose:t}}function p0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Xe};break;case"SpotLight":t={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function m0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g0=0;function v0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _0(i){const e=new p0,t=m0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new O);const a=new O,s=new ht,n=new ht;function o(c){let u=0,f=0,h=0;for(let _=0;_<9;_++)r.probe[_].set(0,0,0);let p=0,v=0,x=0,d=0,m=0,b=0,w=0,T=0,A=0,R=0,C=0;c.sort(v0);for(let _=0,y=c.length;_<y;_++){const U=c[_],G=U.color,k=U.intensity,Z=U.distance;let Q=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Pa?Q=U.shadow.map.texture:Q=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=G.r*k,f+=G.g*k,h+=G.b*k;else if(U.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(U.sh.coefficients[q],k);C++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,re=t.get(U);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,r.directionalShadow[p]=re,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=U.shadow.matrix,b++}r.directional[p]=q,p++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(G).multiplyScalar(k),q.distance=Z,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,r.spot[x]=q;const j=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,j.updateMatrices(U),U.castShadow&&R++),r.spotLightMatrix[x]=j.matrix,U.castShadow){const re=t.get(U);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,r.spotShadow[x]=re,r.spotShadowMap[x]=Q,T++}x++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(G).multiplyScalar(k),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),r.rectArea[d]=q,d++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const j=U.shadow,re=t.get(U);re.shadowIntensity=j.intensity,re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,re.shadowCameraNear=j.camera.near,re.shadowCameraFar=j.camera.far,r.pointShadow[v]=re,r.pointShadowMap[v]=Q,r.pointShadowMatrix[v]=U.shadow.matrix,w++}r.point[v]=q,v++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(k),q.groundColor.copy(U.groundColor).multiplyScalar(k),r.hemi[m]=q,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;const L=r.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==x||L.rectAreaLength!==d||L.hemiLength!==m||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==T||L.numSpotMaps!==A||L.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=d,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+A-R,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=C,L.directionalLength=p,L.pointLength=v,L.spotLength=x,L.rectAreaLength=d,L.hemiLength=m,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=T,L.numSpotMaps=A,L.numLightProbes=C,r.version=g0++)}function l(c,u){let f=0,h=0,p=0,v=0,x=0;const d=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const w=c[m];if(w.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),f++}else if(w.isSpotLight){const T=r.spot[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),p++}else if(w.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(d),n.identity(),s.copy(w.matrixWorld),s.premultiply(d),n.extractRotation(s),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(n),T.halfHeight.applyMatrix4(n),v++}else if(w.isPointLight){const T=r.point[h];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(d),h++}else if(w.isHemisphereLight){const T=r.hemi[x];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:r}}function xu(i){const e=new _0(i),t=[],r=[];function a(u){c.camera=u,t.length=0,r.length=0}function s(u){t.push(u)}function n(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:n}}function x0(i){let e=new WeakMap;function t(a,s=0){const n=e.get(a);let o;return n===void 0?(o=new xu(i),e.set(a,[o])):s>=n.length?(o=new xu(i),n.push(o)):o=n[s],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`,y0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],b0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Mu=new ht,$a=new O,uo=new O;function E0(i,e,t){let r=new Xl;const a=new We,s=new We,n=new yt,o=new Op,l=new Fp,c={},u=t.maxTextureSize,f={[yr]:Zt,[Zt]:yr,[bi]:bi},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:M0,fragmentShader:S0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Wt;v.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ri(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let m=this.type;this.render=function(R,C,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;R.type===Mf&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Ks);const _=i.getRenderTarget(),y=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),G=i.state;G.setBlending(tr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=m!==this.type;k&&C.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(Q=>Q.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,Q=R.length;Z<Q;Z++){const q=R[Z],j=q.shadow;if(j===void 0){Ve("WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const re=j.getFrameExtents();if(a.multiply(re),s.copy(j.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/re.x),a.x=s.x*re.x,j.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/re.y),a.y=s.y*re.y,j.mapSize.y=s.y)),j.map===null||k===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Qa){if(q.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Bi(a.x,a.y,{format:Pa,type:rr,minFilter:zt,magFilter:zt,generateMipmaps:!1}),j.map.texture.name=q.name+".shadowMap",j.map.depthTexture=new ls(a.x,a.y,Ni),j.map.depthTexture.name=q.name+".shadowMapDepth",j.map.depthTexture.format=ar,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Dt,j.map.depthTexture.magFilter=Dt}else{q.isPointLight?(j.map=new Dh(a.x),j.map.depthTexture=new Cp(a.x,Gi)):(j.map=new Bi(a.x,a.y),j.map.depthTexture=new ls(a.x,a.y,Gi)),j.map.depthTexture.name=q.name+".shadowMap",j.map.depthTexture.format=ar;const pe=i.state.buffers.depth.getReversed();this.type===Ks?(j.map.depthTexture.compareFunction=pe?Gl:zl,j.map.depthTexture.minFilter=zt,j.map.depthTexture.magFilter=zt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Dt,j.map.depthTexture.magFilter=Dt)}j.camera.updateProjectionMatrix()}const ce=j.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ce;pe++){if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(j.map),i.clear());const Ee=j.getViewport(pe);n.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),G.viewport(n)}if(q.isPointLight){const Ee=j.camera,ze=j.matrix,Ne=q.distance||Ee.far;Ne!==Ee.far&&(Ee.far=Ne,Ee.updateProjectionMatrix()),$a.setFromMatrixPosition(q.matrixWorld),Ee.position.copy($a),uo.copy(Ee.position),uo.add(y0[pe]),Ee.up.copy(b0[pe]),Ee.lookAt(uo),Ee.updateMatrixWorld(),ze.makeTranslation(-$a.x,-$a.y,-$a.z),Mu.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Mu,Ee.coordinateSystem,Ee.reversedDepth)}else j.updateMatrices(q);r=j.getFrustum(),T(C,L,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===Qa&&b(j,L),j.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(_,y,U)};function b(R,C){const L=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Bi(a.x,a.y,{format:Pa,type:rr})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,L,h,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,L,p,x,null)}function w(R,C,L,_){let y=null;const U=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)y=U;else if(y=L.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=y.uuid,k=C.uuid;let Z=c[G];Z===void 0&&(Z={},c[G]=Z);let Q=Z[k];Q===void 0&&(Q=y.clone(),Z[k]=Q,C.addEventListener("dispose",A)),y=Q}if(y.visible=C.visible,y.wireframe=C.wireframe,_===Qa?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=i.properties.get(y);G.light=L}return y}function T(R,C,L,_,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Qa)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const G=e.update(R),k=R.material;if(Array.isArray(k)){const Z=G.groups;for(let Q=0,q=Z.length;Q<q;Q++){const j=Z[Q],re=k[j.materialIndex];if(re&&re.visible){const ce=w(R,re,_,y);R.onBeforeShadow(i,R,C,L,G,ce,j),i.renderBufferDirect(L,null,G,ce,R,j),R.onAfterShadow(i,R,C,L,G,ce,j)}}}else if(k.visible){const Z=w(R,k,_,y);R.onBeforeShadow(i,R,C,L,G,Z,null),i.renderBufferDirect(L,null,G,Z,R,null),R.onAfterShadow(i,R,C,L,G,Z,null)}}const U=R.children;for(let G=0,k=U.length;G<k;G++)T(U[G],C,L,_,y)}function A(R){R.target.removeEventListener("dispose",A);for(const C in c){const L=c[C],_=R.target.uuid;_ in L&&(L[_].dispose(),delete L[_])}}}const T0={[yo]:bo,[Eo]:Ao,[To]:Ro,[Ra]:wo,[bo]:yo,[Ao]:Eo,[Ro]:To,[wo]:Ra};function w0(i,e){function t(){let D=!1;const _e=new yt;let le=null;const be=new yt(0,0,0,0);return{setMask:function(se){le!==se&&!D&&(i.colorMask(se,se,se,se),le=se)},setLocked:function(se){D=se},setClear:function(se,ie,de,we,nt){nt===!0&&(se*=we,ie*=we,de*=we),_e.set(se,ie,de,we),be.equals(_e)===!1&&(i.clearColor(se,ie,de,we),be.copy(_e))},reset:function(){D=!1,le=null,be.set(-1,0,0,0)}}}function r(){let D=!1,_e=!1,le=null,be=null,se=null;return{setReversed:function(ie){if(_e!==ie){const de=e.get("EXT_clip_control");ie?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),_e=ie;const we=se;se=null,this.setClear(we)}},getReversed:function(){return _e},setTest:function(ie){ie?ee(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(ie){le!==ie&&!D&&(i.depthMask(ie),le=ie)},setFunc:function(ie){if(_e&&(ie=T0[ie]),be!==ie){switch(ie){case yo:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case Ra:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Ao:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ie}},setLocked:function(ie){D=ie},setClear:function(ie){se!==ie&&(_e&&(ie=1-ie),i.clearDepth(ie),se=ie)},reset:function(){D=!1,le=null,be=null,se=null,_e=!1}}}function a(){let D=!1,_e=null,le=null,be=null,se=null,ie=null,de=null,we=null,nt=null;return{setTest:function(Ke){D||(Ke?ee(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ke){_e!==Ke&&!D&&(i.stencilMask(Ke),_e=Ke)},setFunc:function(Ke,Xt,Jt){(le!==Ke||be!==Xt||se!==Jt)&&(i.stencilFunc(Ke,Xt,Jt),le=Ke,be=Xt,se=Jt)},setOp:function(Ke,Xt,Jt){(ie!==Ke||de!==Xt||we!==Jt)&&(i.stencilOp(Ke,Xt,Jt),ie=Ke,de=Xt,we=Jt)},setLocked:function(Ke){D=Ke},setClear:function(Ke){nt!==Ke&&(i.clearStencil(Ke),nt=Ke)},reset:function(){D=!1,_e=null,le=null,be=null,se=null,ie=null,de=null,we=null,nt=null}}}const s=new t,n=new r,o=new a,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],v=null,x=!1,d=null,m=null,b=null,w=null,T=null,A=null,R=null,C=new Xe(0,0,0),L=0,_=!1,y=null,U=null,G=null,k=null,Z=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),q=j>=1):re.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),q=j>=2);let ce=null,pe={};const Ee=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Ne=new yt().fromArray(Ee),st=new yt().fromArray(ze);function Ye(D,_e,le,be){const se=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<le;de++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(_e+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ie}const J={};J[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),n.setFunc(Ra),Ie(!1),$e(gc),ee(i.CULL_FACE),Ge(tr);function ee(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Oe(D,_e){return f[D]!==_e?(i.bindFramebuffer(D,_e),f[D]=_e,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_e),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function ye(D,_e){let le=p,be=!1;if(D){le=h.get(_e),le===void 0&&(le=[],h.set(_e,le));const se=D.textures;if(le.length!==se.length||le[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,de=se.length;ie<de;ie++)le[ie]=i.COLOR_ATTACHMENT0+ie;le.length=se.length,be=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,be=!0);be&&i.drawBuffers(le)}function De(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const Qe={[Ir]:i.FUNC_ADD,[yf]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};Qe[Ef]=i.MIN,Qe[Tf]=i.MAX;const it={[wf]:i.ZERO,[Af]:i.ONE,[Rf]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[If]:i.SRC_ALPHA_SATURATE,[Uf]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[Df]:i.ONE_MINUS_DST_COLOR,[Lf]:i.ONE_MINUS_DST_ALPHA,[Nf]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Ff]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(D,_e,le,be,se,ie,de,we,nt,Ke){if(D===tr){x===!0&&(Se(i.BLEND),x=!1);return}if(x===!1&&(ee(i.BLEND),x=!0),D!==Sf){if(D!==d||Ke!==_){if((m!==Ir||T!==Ir)&&(i.blendEquation(i.FUNC_ADD),m=Ir,T=Ir),Ke)switch(D){case Ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mi:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",D);break}else switch(D){case Ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vc:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",D);break}b=null,w=null,A=null,R=null,C.set(0,0,0),L=0,d=D,_=Ke}return}se=se||_e,ie=ie||le,de=de||be,(_e!==m||se!==T)&&(i.blendEquationSeparate(Qe[_e],Qe[se]),m=_e,T=se),(le!==b||be!==w||ie!==A||de!==R)&&(i.blendFuncSeparate(it[le],it[be],it[ie],it[de]),b=le,w=be,A=ie,R=de),(we.equals(C)===!1||nt!==L)&&(i.blendColor(we.r,we.g,we.b,nt),C.copy(we),L=nt),d=D,_=!1}function ne(D,_e){D.side===bi?Se(i.CULL_FACE):ee(i.CULL_FACE);let le=D.side===Zt;_e&&(le=!le),Ie(le),D.blending===Ma&&D.transparent===!1?Ge(tr):Ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),n.setFunc(D.depthFunc),n.setTest(D.depthTest),n.setMask(D.depthWrite),s.setMask(D.colorWrite);const be=D.stencilWrite;o.setTest(be),be&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function $e(D){D!==_f?(ee(i.CULL_FACE),D!==U&&(D===gc?i.cullFace(i.BACK):D===xf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),U=D}function E(D){D!==G&&(q&&i.lineWidth(D),G=D)}function N(D,_e,le){D?(ee(i.POLYGON_OFFSET_FILL),(k!==_e||Z!==le)&&(i.polygonOffset(_e,le),k=_e,Z=le)):Se(i.POLYGON_OFFSET_FILL)}function Y(D){D?ee(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function te(D){D===void 0&&(D=i.TEXTURE0+Q-1),ce!==D&&(i.activeTexture(D),ce=D)}function $(D,_e,le){le===void 0&&(ce===null?le=i.TEXTURE0+Q-1:le=ce);let be=pe[le];be===void 0&&(be={type:void 0,texture:void 0},pe[le]=be),(be.type!==D||be.texture!==_e)&&(ce!==le&&(i.activeTexture(le),ce=le),i.bindTexture(D,_e||J[D]),be.type=D,be.texture=_e)}function S(){const D=pe[ce];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function z(){try{i.texSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function V(){try{i.texSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function fe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function K(){try{i.texStorage2D(...arguments)}catch(D){et("WebGLState:",D)}}function me(){try{i.texStorage3D(...arguments)}catch(D){et("WebGLState:",D)}}function ve(){try{i.texImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function ae(){try{i.texImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function oe(D){Ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function Re(D){st.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),st.copy(D))}function Te(D,_e){let le=c.get(_e);le===void 0&&(le=new WeakMap,c.set(_e,le));let be=le.get(D);be===void 0&&(be=i.getUniformBlockIndex(_e,D.name),le.set(D,be))}function he(D,_e){const le=c.get(_e).get(D);l.get(_e)!==le&&(i.uniformBlockBinding(_e,le,D.__bindingPointIndex),l.set(_e,le))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,pe={},f={},h=new WeakMap,p=[],v=null,x=!1,d=null,m=null,b=null,w=null,T=null,A=null,R=null,C=new Xe(0,0,0),L=0,_=!1,y=null,U=null,G=null,k=null,Z=null,Ne.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:ee,disable:Se,bindFramebuffer:Oe,drawBuffers:ye,useProgram:De,setBlending:Ge,setMaterial:ne,setFlipSided:Ie,setCullFace:$e,setLineWidth:E,setPolygonOffset:N,setScissorTest:Y,activeTexture:te,bindTexture:$,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:ve,texImage3D:ae,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:K,texStorage3D:me,texSubImage2D:z,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:fe,scissor:oe,viewport:Re,reset:He}}function A0(i,e,t,r,a,s,n){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,g){return p?new OffscreenCanvas(S,g):un("canvas")}function x(S,g,P){let z=1;const V=$(S);if((V.width>P||V.height>P)&&(z=P/Math.max(V.width,V.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const H=Math.floor(z*V.width),fe=Math.floor(z*V.height);f===void 0&&(f=v(H,fe));const K=g?v(H,fe):f;return K.width=H,K.height=fe,K.getContext("2d").drawImage(S,0,0,H,fe),Ve("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+H+"x"+fe+")."),K}else return"data"in S&&Ve("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),S;return S}function d(S){return S.generateMipmaps}function m(S){i.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(S,g,P,z,V=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=g;if(g===i.RED&&(P===i.FLOAT&&(H=i.R32F),P===i.HALF_FLOAT&&(H=i.R16F),P===i.UNSIGNED_BYTE&&(H=i.R8)),g===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(H=i.R8UI),P===i.UNSIGNED_SHORT&&(H=i.R16UI),P===i.UNSIGNED_INT&&(H=i.R32UI),P===i.BYTE&&(H=i.R8I),P===i.SHORT&&(H=i.R16I),P===i.INT&&(H=i.R32I)),g===i.RG&&(P===i.FLOAT&&(H=i.RG32F),P===i.HALF_FLOAT&&(H=i.RG16F),P===i.UNSIGNED_BYTE&&(H=i.RG8)),g===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(H=i.RG8UI),P===i.UNSIGNED_SHORT&&(H=i.RG16UI),P===i.UNSIGNED_INT&&(H=i.RG32UI),P===i.BYTE&&(H=i.RG8I),P===i.SHORT&&(H=i.RG16I),P===i.INT&&(H=i.RG32I)),g===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(H=i.RGB8UI),P===i.UNSIGNED_SHORT&&(H=i.RGB16UI),P===i.UNSIGNED_INT&&(H=i.RGB32UI),P===i.BYTE&&(H=i.RGB8I),P===i.SHORT&&(H=i.RGB16I),P===i.INT&&(H=i.RGB32I)),g===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),P===i.UNSIGNED_INT&&(H=i.RGBA32UI),P===i.BYTE&&(H=i.RGBA8I),P===i.SHORT&&(H=i.RGBA16I),P===i.INT&&(H=i.RGBA32I)),g===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),g===i.RGBA){const fe=V?ln:at.getTransfer(z);P===i.FLOAT&&(H=i.RGBA32F),P===i.HALF_FLOAT&&(H=i.RGBA16F),P===i.UNSIGNED_BYTE&&(H=fe===ct?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function T(S,g){let P;return S?g===null||g===Gi||g===ns?P=i.DEPTH24_STENCIL8:g===Ni?P=i.DEPTH32F_STENCIL8:g===ss&&(P=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Gi||g===ns?P=i.DEPTH_COMPONENT24:g===Ni?P=i.DEPTH_COMPONENT32F:g===ss&&(P=i.DEPTH_COMPONENT16),P}function A(S,g){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dt&&S.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function R(S){const g=S.target;g.removeEventListener("dispose",R),L(g),g.isVideoTexture&&u.delete(g)}function C(S){const g=S.target;g.removeEventListener("dispose",C),y(g)}function L(S){const g=r.get(S);if(g.__webglInit===void 0)return;const P=S.source,z=h.get(P);if(z){const V=z[g.__cacheKey];V.usedTimes--,V.usedTimes===0&&_(S),Object.keys(z).length===0&&h.delete(P)}r.remove(S)}function _(S){const g=r.get(S);i.deleteTexture(g.__webglTexture);const P=S.source,z=h.get(P);delete z[g.__cacheKey],n.memory.textures--}function y(S){const g=r.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),r.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let V=0;V<g.__webglFramebuffer[z].length;V++)i.deleteFramebuffer(g.__webglFramebuffer[z][V]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=S.textures;for(let z=0,V=P.length;z<V;z++){const H=r.get(P[z]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),n.memory.textures--),r.remove(P[z])}r.remove(S)}let U=0;function G(){U=0}function k(){const S=U;return S>=a.maxTextures&&Ve("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),U+=1,S}function Z(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function Q(S,g){const P=r.get(S);if(S.isVideoTexture&&Y(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&P.__version!==S.version){const z=S.image;if(z===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{J(P,S,g);return}}else S.isExternalTexture&&(P.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+g)}function q(S,g){const P=r.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){J(P,S,g);return}else S.isExternalTexture&&(P.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+g)}function j(S,g){const P=r.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&P.__version!==S.version){J(P,S,g);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+g)}function re(S,g){const P=r.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&P.__version!==S.version){ee(P,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+g)}const ce={[Lo]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},pe={[Dt]:i.NEAREST,[Hf]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Rn]:i.LINEAR_MIPMAP_NEAREST,[Br]:i.LINEAR_MIPMAP_LINEAR},Ee={[Wf]:i.NEVER,[$f]:i.ALWAYS,[Xf]:i.LESS,[zl]:i.LEQUAL,[jf]:i.EQUAL,[Gl]:i.GEQUAL,[qf]:i.GREATER,[Yf]:i.NOTEQUAL};function ze(S,g){if(g.type===Ni&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===Rn||g.magFilter===bs||g.magFilter===Br||g.minFilter===zt||g.minFilter===Rn||g.minFilter===bs||g.minFilter===Br)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,ce[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ce[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ce[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,pe[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==bs&&g.minFilter!==Br||g.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function Ne(S,g){let P=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",R));const z=g.source;let V=h.get(z);V===void 0&&(V={},h.set(z,V));const H=Z(g);if(H!==S.__cacheKey){V[H]===void 0&&(V[H]={texture:i.createTexture(),usedTimes:0},n.memory.textures++,P=!0),V[H].usedTimes++;const fe=V[S.__cacheKey];fe!==void 0&&(V[S.__cacheKey].usedTimes--,fe.usedTimes===0&&_(g)),S.__cacheKey=H,S.__webglTexture=V[H].texture}return P}function st(S,g,P){return Math.floor(Math.floor(S/P)/g)}function Ye(S,g,P,z){const V=S.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,P,z,g.data);else{V.sort((ve,ae)=>ve.start-ae.start);let H=0;for(let ve=1;ve<V.length;ve++){const ae=V[H],oe=V[ve],Re=ae.start+ae.count,Te=st(oe.start,g.width,4),he=st(ae.start,g.width,4);oe.start<=Re+1&&Te===he&&st(oe.start+oe.count-1,g.width,4)===Te?ae.count=Math.max(ae.count,oe.start+oe.count-ae.start):(++H,V[H]=oe)}V.length=H+1;const fe=i.getParameter(i.UNPACK_ROW_LENGTH),K=i.getParameter(i.UNPACK_SKIP_PIXELS),me=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ve=0,ae=V.length;ve<ae;ve++){const oe=V[ve],Re=Math.floor(oe.start/4),Te=Math.ceil(oe.count/4),he=Re%g.width,He=Math.floor(Re/g.width),D=Te;i.pixelStorei(i.UNPACK_SKIP_PIXELS,he),i.pixelStorei(i.UNPACK_SKIP_ROWS,He),t.texSubImage2D(i.TEXTURE_2D,0,he,He,D,1,P,z,g.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,K),i.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function J(S,g,P){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);const V=Ne(S,g),H=g.source;t.bindTexture(z,S.__webglTexture,i.TEXTURE0+P);const fe=r.get(H);if(H.version!==fe.__version||V===!0){t.activeTexture(i.TEXTURE0+P);const K=at.getPrimaries(at.workingColorSpace),me=g.colorSpace===mr?null:at.getPrimaries(g.colorSpace),ve=g.colorSpace===mr||K===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ae=x(g.image,!1,a.maxTextureSize);ae=te(g,ae);const oe=s.convert(g.format,g.colorSpace),Re=s.convert(g.type);let Te=w(g.internalFormat,oe,Re,g.colorSpace,g.isVideoTexture);ze(z,g);let he;const He=g.mipmaps,D=g.isVideoTexture!==!0,_e=fe.__version===void 0||V===!0,le=H.dataReady,be=A(g,ae);if(g.isDepthTexture)Te=T(g.format===zr,g.type),_e&&(D?t.texStorage2D(i.TEXTURE_2D,1,Te,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Te,ae.width,ae.height,0,oe,Re,null));else if(g.isDataTexture)if(He.length>0){D&&_e&&t.texStorage2D(i.TEXTURE_2D,be,Te,He[0].width,He[0].height);for(let se=0,ie=He.length;se<ie;se++)he=He[se],D?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,he.width,he.height,oe,Re,he.data):t.texImage2D(i.TEXTURE_2D,se,Te,he.width,he.height,0,oe,Re,he.data);g.generateMipmaps=!1}else D?(_e&&t.texStorage2D(i.TEXTURE_2D,be,Te,ae.width,ae.height),le&&Ye(g,ae,oe,Re)):t.texImage2D(i.TEXTURE_2D,0,Te,ae.width,ae.height,0,oe,Re,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Te,He[0].width,He[0].height,ae.depth);for(let se=0,ie=He.length;se<ie;se++)if(he=He[se],g.format!==wi)if(oe!==null)if(D){if(le)if(g.layerUpdates.size>0){const de=Jc(he.width,he.height,g.format,g.type);for(const we of g.layerUpdates){const nt=he.data.subarray(we*de/he.data.BYTES_PER_ELEMENT,(we+1)*de/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,we,he.width,he.height,1,oe,nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,he.width,he.height,ae.depth,oe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Te,he.width,he.height,ae.depth,0,he.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,he.width,he.height,ae.depth,oe,Re,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Te,he.width,he.height,ae.depth,0,oe,Re,he.data)}else{D&&_e&&t.texStorage2D(i.TEXTURE_2D,be,Te,He[0].width,He[0].height);for(let se=0,ie=He.length;se<ie;se++)he=He[se],g.format!==wi?oe!==null?D?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,he.width,he.height,oe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Te,he.width,he.height,0,he.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,he.width,he.height,oe,Re,he.data):t.texImage2D(i.TEXTURE_2D,se,Te,he.width,he.height,0,oe,Re,he.data)}else if(g.isDataArrayTexture)if(D){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Te,ae.width,ae.height,ae.depth),le)if(g.layerUpdates.size>0){const se=Jc(ae.width,ae.height,g.format,g.type);for(const ie of g.layerUpdates){const de=ae.data.subarray(ie*se/ae.data.BYTES_PER_ELEMENT,(ie+1)*se/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,oe,Re,de)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,oe,Re,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,oe,Re,ae.data);else if(g.isData3DTexture)D?(_e&&t.texStorage3D(i.TEXTURE_3D,be,Te,ae.width,ae.height,ae.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,oe,Re,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,oe,Re,ae.data);else if(g.isFramebufferTexture){if(_e)if(D)t.texStorage2D(i.TEXTURE_2D,be,Te,ae.width,ae.height);else{let se=ae.width,ie=ae.height;for(let de=0;de<be;de++)t.texImage2D(i.TEXTURE_2D,de,Te,se,ie,0,oe,Re,null),se>>=1,ie>>=1}}else if(He.length>0){if(D&&_e){const se=$(He[0]);t.texStorage2D(i.TEXTURE_2D,be,Te,se.width,se.height)}for(let se=0,ie=He.length;se<ie;se++)he=He[se],D?le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,oe,Re,he):t.texImage2D(i.TEXTURE_2D,se,Te,oe,Re,he);g.generateMipmaps=!1}else if(D){if(_e){const se=$(ae);t.texStorage2D(i.TEXTURE_2D,be,Te,se.width,se.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Re,ae)}else t.texImage2D(i.TEXTURE_2D,0,Te,oe,Re,ae);d(g)&&m(z),fe.__version=H.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ee(S,g,P){if(g.image.length!==6)return;const z=Ne(S,g),V=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+P);const H=r.get(V);if(V.version!==H.__version||z===!0){t.activeTexture(i.TEXTURE0+P);const fe=at.getPrimaries(at.workingColorSpace),K=g.colorSpace===mr?null:at.getPrimaries(g.colorSpace),me=g.colorSpace===mr||fe===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,oe=[];for(let ie=0;ie<6;ie++)!ve&&!ae?oe[ie]=x(g.image[ie],!0,a.maxCubemapSize):oe[ie]=ae?g.image[ie].image:g.image[ie],oe[ie]=te(g,oe[ie]);const Re=oe[0],Te=s.convert(g.format,g.colorSpace),he=s.convert(g.type),He=w(g.internalFormat,Te,he,g.colorSpace),D=g.isVideoTexture!==!0,_e=H.__version===void 0||z===!0,le=V.dataReady;let be=A(g,Re);ze(i.TEXTURE_CUBE_MAP,g);let se;if(ve){D&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,He,Re.width,Re.height);for(let ie=0;ie<6;ie++){se=oe[ie].mipmaps;for(let de=0;de<se.length;de++){const we=se[de];g.format!==wi?Te!==null?D?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,He,we.width,we.height,0,we.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,0,0,we.width,we.height,Te,he,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,He,we.width,we.height,0,Te,he,we.data)}}}else{if(se=g.mipmaps,D&&_e){se.length>0&&be++;const ie=$(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,He,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,oe[ie].width,oe[ie].height,Te,he,oe[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,oe[ie].width,oe[ie].height,0,Te,he,oe[ie].data);for(let de=0;de<se.length;de++){const we=se[de].image[ie].image;D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,0,0,we.width,we.height,Te,he,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,He,we.width,we.height,0,Te,he,we.data)}}else{D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te,he,oe[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,Te,he,oe[ie]);for(let de=0;de<se.length;de++){const we=se[de];D?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,0,0,Te,he,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,He,Te,he,we.image[ie])}}}d(g)&&m(i.TEXTURE_CUBE_MAP),H.__version=V.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Se(S,g,P,z,V,H){const fe=s.convert(P.format,P.colorSpace),K=s.convert(P.type),me=w(P.internalFormat,fe,K,P.colorSpace),ve=r.get(g),ae=r.get(P);if(ae.__renderTarget=g,!ve.__hasExternalTextures){const oe=Math.max(1,g.width>>H),Re=Math.max(1,g.height>>H);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,H,me,oe,Re,g.depth,0,fe,K,null):t.texImage2D(V,H,me,oe,Re,0,fe,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),N(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,V,ae.__webglTexture,0,E(g)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,V,ae.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(S,g,P){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){const z=g.depthTexture,V=z&&z.isDepthTexture?z.type:null,H=T(g.stencilBuffer,V),fe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;N(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(g),H,g.width,g.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(g),H,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,H,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,S)}else{const z=g.textures;for(let V=0;V<z.length;V++){const H=z[V],fe=s.convert(H.format,H.colorSpace),K=s.convert(H.type),me=w(H.internalFormat,fe,K,H.colorSpace);N(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(g),me,g.width,g.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(g),me,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,me,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(S,g,P){const z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=r.get(g.depthTexture);if(V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(V.__webglInit===void 0&&(V.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g.depthTexture);const ve=s.convert(g.depthTexture.format),ae=s.convert(g.depthTexture.type);let oe;g.depthTexture.format===ar?oe=i.DEPTH_COMPONENT24:g.depthTexture.format===zr&&(oe=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,oe,g.width,g.height,0,ve,ae,null)}}else Q(g.depthTexture,0);const H=V.__webglTexture,fe=E(g),K=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+P:i.TEXTURE_2D,me=g.depthTexture.format===zr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===ar)N(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,K,H,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,me,K,H,0);else if(g.depthTexture.format===zr)N(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,K,H,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,me,K,H,0);else throw new Error("Unknown depthTexture format")}function De(S){const g=r.get(S),P=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const V=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",V)};z.addEventListener("dispose",V),g.__depthDisposeCallback=V}g.__boundDepthTexture=z}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(P)for(let z=0;z<6;z++)ye(g.__webglFramebuffer[z],S,z);else{const z=S.texture.mipmaps;z&&z.length>0?ye(g.__webglFramebuffer[0],S,0):ye(g.__webglFramebuffer,S,0)}else if(P){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),Oe(g.__webglDepthbuffer[z],S,!1);else{const V=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,H)}}else{const z=S.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Oe(g.__webglDepthbuffer,S,!1);else{const V=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(S,g,P){const z=r.get(S);g!==void 0&&Se(z.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&De(S)}function it(S){const g=S.texture,P=r.get(S),z=r.get(g);S.addEventListener("dispose",C);const V=S.textures,H=S.isWebGLCubeRenderTarget===!0,fe=V.length>1;if(fe||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,n.memory.textures++),H){P.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[K]=[];for(let me=0;me<g.mipmaps.length;me++)P.__webglFramebuffer[K][me]=i.createFramebuffer()}else P.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)P.__webglFramebuffer[K]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(fe)for(let K=0,me=V.length;K<me;K++){const ve=r.get(V[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),n.memory.textures++)}if(S.samples>0&&N(S)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let K=0;K<V.length;K++){const me=V[K];P.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[K]);const ve=s.convert(me.format,me.colorSpace),ae=s.convert(me.type),oe=w(me.internalFormat,ve,ae,me.colorSpace,S.isXRRenderTarget===!0),Re=E(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,oe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,P.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(P.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)Se(P.__webglFramebuffer[K][me],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,me);else Se(P.__webglFramebuffer[K],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(g)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let K=0,me=V.length;K<me;K++){const ve=V[K],ae=r.get(ve);let oe=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ae.__webglTexture),ze(oe,ve),Se(P.__webglFramebuffer,S,ve,i.COLOR_ATTACHMENT0+K,oe,0),d(ve)&&m(oe)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(K=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,z.__webglTexture),ze(K,g),g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)Se(P.__webglFramebuffer[me],S,g,i.COLOR_ATTACHMENT0,K,me);else Se(P.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,K,0);d(g)&&m(K),t.unbindTexture()}S.depthBuffer&&De(S)}function Ge(S){const g=S.textures;for(let P=0,z=g.length;P<z;P++){const V=g[P];if(d(V)){const H=b(S),fe=r.get(V).__webglTexture;t.bindTexture(H,fe),m(H),t.unbindTexture()}}}const ne=[],Ie=[];function $e(S){if(S.samples>0){if(N(S)===!1){const g=S.textures,P=S.width,z=S.height;let V=i.COLOR_BUFFER_BIT;const H=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=r.get(S),K=g.length>1;if(K)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const me=S.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const ae=r.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,P,z,0,0,P,z,V,i.NEAREST),l===!0&&(ne.length=0,Ie.length=0,ne.push(i.COLOR_ATTACHMENT0+ve),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ne.push(H),Ie.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const ae=r.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function E(S){return Math.min(a.maxSamples,S.samples)}function N(S){const g=r.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Y(S){const g=n.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function te(S,g){const P=S.colorSpace,z=S.format,V=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||P!==La&&P!==mr&&(at.getTransfer(P)===ct?(z!==wi||V!==ri)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",P)),g}function $(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=N,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R0(i,e){function t(r,a=mr){let s;const n=at.getTransfer(a);if(r===ri)return i.UNSIGNED_BYTE;if(r===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===vh)return i.BYTE;if(r===_h)return i.SHORT;if(r===ss)return i.UNSIGNED_SHORT;if(r===Dl)return i.INT;if(r===Gi)return i.UNSIGNED_INT;if(r===Ni)return i.FLOAT;if(r===rr)return i.HALF_FLOAT;if(r===Sh)return i.ALPHA;if(r===yh)return i.RGB;if(r===wi)return i.RGBA;if(r===ar)return i.DEPTH_COMPONENT;if(r===zr)return i.DEPTH_STENCIL;if(r===bh)return i.RED;if(r===Ol)return i.RED_INTEGER;if(r===Pa)return i.RG;if(r===Fl)return i.RG_INTEGER;if(r===Bl)return i.RGBA_INTEGER;if(r===Qs||r===en||r===tn||r===rn)if(n===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===en)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===en)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Do||r===Io||r===No||r===Oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Do)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===No)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fo||r===Bo||r===zo||r===Go||r===Ho||r===Vo||r===ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Fo||r===Bo)return n===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===zo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===Go)return s.COMPRESSED_R11_EAC;if(r===Ho)return s.COMPRESSED_SIGNED_R11_EAC;if(r===Vo)return s.COMPRESSED_RG11_EAC;if(r===ko)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Wo||r===Xo||r===jo||r===qo||r===Yo||r===$o||r===Zo||r===Jo||r===Ko||r===Qo||r===el||r===tl||r===il||r===rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Wo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$o)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ko)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qo)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===el)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tl)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===il)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rl)return n===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===al||r===sl||r===nl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===al)return n===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ol||r===ll||r===cl||r===ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(r===ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ns?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
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

}`;class L0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Oh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Vi({vertexShader:C0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ri(new Sn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U0 extends Oa{constructor(e,t){super();const r=this;let a=null,s=1,n=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const x=typeof XRWebGLBinding<"u",d=new L0,m={},b=t.getContextAttributes();let w=null,T=null;const A=[],R=[],C=new We;let L=null;const _=new ii;_.viewport=new yt;const y=new ii;y.viewport=new yt;const U=[_,y],G=new Hp;let k=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=A[J];return ee===void 0&&(ee=new Jn,A[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=A[J];return ee===void 0&&(ee=new Jn,A[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=A[J];return ee===void 0&&(ee=new Jn,A[J]=ee),ee.getHandSpace()};function Q(J){const ee=R.indexOf(J.inputSource);if(ee===-1)return;const Se=A[ee];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||n),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",j);for(let J=0;J<A.length;J++){const ee=R[J];ee!==null&&(R[J]=null,A[J].disconnect(ee))}k=null,Z=null,d.reset();for(const J in m)delete m[J];e.setRenderTarget(w),p=null,h=null,f=null,a=null,T=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,r.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,r.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||n},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(w=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",q),a.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Se=null,Oe=null;b.depth&&(Oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=b.stencil?zr:ar,Se=b.stencil?ns:Gi);const ye={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ye),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Bi(h.textureWidth,h.textureHeight,{format:wi,type:ri,depthTexture:new ls(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,ee),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Bi(p.framebufferWidth,p.framebufferHeight,{format:wi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,n=await a.requestReferenceSpace(o),Ye.setContext(a),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function j(J){for(let ee=0;ee<J.removed.length;ee++){const Se=J.removed[ee],Oe=R.indexOf(Se);Oe>=0&&(R[Oe]=null,A[Oe].disconnect(Se))}for(let ee=0;ee<J.added.length;ee++){const Se=J.added[ee];let Oe=R.indexOf(Se);if(Oe===-1){for(let De=0;De<A.length;De++)if(De>=R.length){R.push(Se),Oe=De;break}else if(R[De]===null){R[De]=Se,Oe=De;break}if(Oe===-1)break}const ye=A[Oe];ye&&ye.connect(Se)}}const re=new O,ce=new O;function pe(J,ee,Se){re.setFromMatrixPosition(ee.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const Oe=re.distanceTo(ce),ye=ee.projectionMatrix.elements,De=Se.projectionMatrix.elements,Qe=ye[14]/(ye[10]-1),it=ye[14]/(ye[10]+1),Ge=(ye[9]+1)/ye[5],ne=(ye[9]-1)/ye[5],Ie=(ye[8]-1)/ye[0],$e=(De[8]+1)/De[0],E=Qe*Ie,N=Qe*$e,Y=Oe/(-Ie+$e),te=Y*-Ie;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(te),J.translateZ(Y),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ye[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const $=Qe+Y,S=it+Y,g=E-te,P=N+(Oe-te),z=Ge*it/S*$,V=ne*it/S*$;J.projectionMatrix.makePerspective(g,P,z,V,$,S),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ee(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ee=J.near,Se=J.far;d.texture!==null&&(d.depthNear>0&&(ee=d.depthNear),d.depthFar>0&&(Se=d.depthFar)),G.near=y.near=_.near=ee,G.far=y.far=_.far=Se,(k!==G.near||Z!==G.far)&&(a.updateRenderState({depthNear:G.near,depthFar:G.far}),k=G.near,Z=G.far),G.layers.mask=J.layers.mask|6,_.layers.mask=G.layers.mask&3,y.layers.mask=G.layers.mask&5;const Oe=J.parent,ye=G.cameras;Ee(G,Oe);for(let De=0;De<ye.length;De++)Ee(ye[De],Oe);ye.length===2?pe(G,_,y):G.projectionMatrix.copy(_.projectionMatrix),ze(J,G,Oe)};function ze(J,ee,Se){Se===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=dl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(G)},this.getCameraTexture=function(J){return m[J]};let Ne=null;function st(J,ee){if(u=ee.getViewerPose(c||n),v=ee,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Oe=!1;Se.length!==G.cameras.length&&(G.cameras.length=0,Oe=!0);for(let De=0;De<Se.length;De++){const Qe=Se[De];let it=null;if(p!==null)it=p.getViewport(Qe);else{const ne=f.getViewSubImage(h,Qe);it=ne.viewport,De===0&&(e.setRenderTargetTextures(T,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(T))}let Ge=U[De];Ge===void 0&&(Ge=new ii,Ge.layers.enable(De),Ge.viewport=new yt,U[De]=Ge),Ge.matrix.fromArray(Qe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Qe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(it.x,it.y,it.width,it.height),De===0&&(G.matrix.copy(Ge.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Oe===!0&&G.cameras.push(Ge)}const ye=a.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){f=r.getBinding();const De=f.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&d.init(De,a.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),f=r.getBinding();for(let De=0;De<Se.length;De++){const Qe=Se[De].camera;if(Qe){let it=m[Qe];it||(it=new Oh,m[Qe]=it);const Ge=f.getCameraImage(Qe);it.sourceTexture=Ge}}}}for(let Se=0;Se<A.length;Se++){const Oe=R[Se],ye=A[Se];Oe!==null&&ye!==void 0&&ye.update(Oe,ee,c||n)}Ne&&Ne(J,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Ye=new Bh;Ye.setAnimationLoop(st),this.setAnimationLoop=function(J){Ne=J},this.dispose=function(){}}}const Lr=new Hi,D0=new ht;function I0(i,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function r(d,m){m.color.getRGB(d.fogColor.value,Lh(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function a(d,m,b,w,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),f(d,m)):m.isMeshPhongMaterial?(s(d,m),u(d,m)):m.isMeshStandardMaterial?(s(d,m),h(d,m),m.isMeshPhysicalMaterial&&p(d,m,T)):m.isMeshMatcapMaterial?(s(d,m),v(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),x(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(n(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?l(d,m,b,w):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Zt&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Zt&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const b=e.get(m),w=b.envMap,T=b.envMapRotation;w&&(d.envMap.value=w,Lr.copy(T),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),d.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Lr)),d.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function n(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,b,w){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*b,d.scale.value=w*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,b){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){const b=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function N0(i,e,t,r){let a={},s={},n=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const T=w.program;r.uniformBlockBinding(b,T)}function c(b,w){let T=a[b.id];T===void 0&&(v(b),T=u(b),a[b.id]=T,b.addEventListener("dispose",d));const A=w.program;r.updateUBOMapping(b,A);const R=e.render.frame;s[b.id]!==R&&(h(b),s[b.id]=R)}function u(b){const w=f();b.__bindingPointIndex=w;const T=i.createBuffer(),A=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function f(){for(let b=0;b<o;b++)if(n.indexOf(b)===-1)return n.push(b),b;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const w=a[b.id],T=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,C=T.length;R<C;R++){const L=Array.isArray(T[R])?T[R]:[T[R]];for(let _=0,y=L.length;_<y;_++){const U=L[_];if(p(U,R,_,A)===!0){const G=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let Q=0;Q<k.length;Q++){const q=k[Q],j=x(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,G+Z,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,Z),Z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,w,T,A){const R=b.value,C=w+"_"+T;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const L=A[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return A[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function v(b){const w=b.uniforms;let T=0;const A=16;for(let C=0,L=w.length;C<L;C++){const _=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,U=_.length;y<U;y++){const G=_[y],k=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,Q=k.length;Z<Q;Z++){const q=k[Z],j=x(q),re=T%A,ce=re%j.boundary,pe=re+ce;T+=ce,pe!==0&&A-pe<j.storage&&(T+=A-pe),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=j.storage}}}const R=T%A;return R>0&&(T+=A-R),b.__size=T,b.__cache={},this}function x(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",b),w}function d(b){const w=b.target;w.removeEventListener("dispose",d);const T=n.indexOf(w.__bindingPointIndex);n.splice(T,1),i.deleteBuffer(a[w.id]),delete a[w.id],delete s[w.id]}function m(){for(const b in a)i.deleteBuffer(a[b]);n=[],a={},s={}}return{bind:l,update:c,dispose:m}}const O0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function F0(){return Li===null&&(Li=new Ep(O0,16,16,Pa,rr),Li.name="DFG_LUT",Li.minFilter=zt,Li.magFilter=zt,Li.wrapS=Ki,Li.wrapT=Ki,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class B0{constructor(e={}){const{canvas:t=Zf(),context:r=null,depth:a=!0,stencil:s=!1,alpha:n=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=ri}=e;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=n;const x=p,d=new Set([Bl,Fl,Ol]),m=new Set([ri,Gi,ss,ns,Il,Nl]),b=new Uint32Array(4),w=new Int32Array(4);let T=null,A=null;const R=[],C=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let y=!1;this._outputColorSpace=ci;let U=0,G=0,k=null,Z=-1,Q=null;const q=new yt,j=new yt;let re=null;const ce=new Xe(0);let pe=0,Ee=t.width,ze=t.height,Ne=1,st=null,Ye=null;const J=new yt(0,0,Ee,ze),ee=new yt(0,0,Ee,ze);let Se=!1;const Oe=new Xl;let ye=!1,De=!1;const Qe=new ht,it=new O,Ge=new yt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function $e(){return k===null?Ne:1}let E=r;function N(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),E===null){const F="webgl2";if(E=N(F,M),E===null)throw N(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw et("WebGLRenderer: "+M.message),M}let Y,te,$,S,g,P,z,V,H,fe,K,me,ve,ae,oe,Re,Te,he,He,D,_e,le,be,se;function ie(){Y=new Fv(E),Y.init(),le=new R0(E,Y),te=new Rv(E,Y,e,le),$=new w0(E,Y),te.reversedDepthBuffer&&h&&$.buffers.depth.setReversed(!0),S=new Gv(E),g=new h0,P=new A0(E,Y,$,g,te,le,S),z=new Pv(_),V=new Ov(_),H=new Wp(E),be=new wv(E,H),fe=new Bv(E,H,S,be),K=new Vv(E,fe,H,S),He=new Hv(E,te,P),Re=new Cv(g),me=new u0(_,z,V,Y,te,be,Re),ve=new I0(_,g),ae=new f0,oe=new x0(Y),he=new Tv(_,z,V,$,K,v,l),Te=new E0(_,K,te),se=new N0(E,S,te,$),D=new Av(E,Y,S),_e=new zv(E,Y,S),S.programs=me.programs,_.capabilities=te,_.extensions=Y,_.properties=g,_.renderLists=ae,_.shadowMap=Te,_.state=$,_.info=S}ie(),x!==ri&&(L=new Wv(x,t.width,t.height,a,s));const de=new U0(_,E);this.xr=de,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const M=Y.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Y.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(M){M!==void 0&&(Ne=M,this.setSize(Ee,ze,!1))},this.getSize=function(M){return M.set(Ee,ze)},this.setSize=function(M,F,X=!0){if(de.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=M,ze=F,t.width=Math.floor(M*Ne),t.height=Math.floor(F*Ne),X===!0&&(t.style.width=M+"px",t.style.height=F+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Ee*Ne,ze*Ne).floor()},this.setDrawingBufferSize=function(M,F,X){Ee=M,ze=F,Ne=X,t.width=Math.floor(M*X),t.height=Math.floor(F*X),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(x===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(q)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,F,X,W){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,F,X,W),$.viewport(q.copy(J).multiplyScalar(Ne).round())},this.getScissor=function(M){return M.copy(ee)},this.setScissor=function(M,F,X,W){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,F,X,W),$.scissor(j.copy(ee).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(M){$.setScissorTest(Se=M)},this.setOpaqueSort=function(M){st=M},this.setTransparentSort=function(M){Ye=M},this.getClearColor=function(M){return M.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,X=!0){let W=0;if(M){let B=!1;if(k!==null){const ue=k.texture.format;B=d.has(ue)}if(B){const ue=k.texture.type,Me=m.has(ue),Ce=he.getClearColor(),Ae=he.getClearAlpha(),Be=Ce.r,ke=Ce.g,Fe=Ce.b;Me?(b[0]=Be,b[1]=ke,b[2]=Fe,b[3]=Ae,E.clearBufferuiv(E.COLOR,0,b)):(w[0]=Be,w[1]=ke,w[2]=Fe,w[3]=Ae,E.clearBufferiv(E.COLOR,0,w))}else W|=E.COLOR_BUFFER_BIT}F&&(W|=E.DEPTH_BUFFER_BIT),X&&(W|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),he.dispose(),ae.dispose(),oe.dispose(),g.dispose(),z.dispose(),V.dispose(),K.dispose(),be.dispose(),se.dispose(),me.dispose(),de.dispose(),de.removeEventListener("sessionstart",Zl),de.removeEventListener("sessionend",Jl),Er.stop()};function we(M){M.preventDefault(),hn("WebGLRenderer: Context Lost."),y=!0}function nt(){hn("WebGLRenderer: Context Restored."),y=!1;const M=S.autoReset,F=Te.enabled,X=Te.autoUpdate,W=Te.needsUpdate,B=Te.type;ie(),S.autoReset=M,Te.enabled=F,Te.autoUpdate=X,Te.needsUpdate=W,Te.type=B}function Ke(M){et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xt(M){const F=M.target;F.removeEventListener("dispose",Xt),Jt(F)}function Jt(M){Pi(M),g.remove(M)}function Pi(M){const F=g.get(M).programs;F!==void 0&&(F.forEach(function(X){me.releaseProgram(X)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,X,W,B,ue){F===null&&(F=ne);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Wh(M,F,X,W,B);$.setMaterial(W,Me);let Ae=X.index,Be=1;if(W.wireframe===!0){if(Ae=fe.getWireframeAttribute(X),Ae===void 0)return;Be=2}const ke=X.drawRange,Fe=X.attributes.position;let rt=ke.start*Be,dt=(ke.start+ke.count)*Be;ue!==null&&(rt=Math.max(rt,ue.start*Be),dt=Math.min(dt,(ue.start+ue.count)*Be)),Ae!==null?(rt=Math.max(rt,0),dt=Math.min(dt,Ae.count)):Fe!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,Fe.count));const St=dt-rt;if(St<0||St===1/0)return;be.setup(B,W,Ce,X,Ae);let _t,ft=D;if(Ae!==null&&(_t=H.get(Ae),ft=_e,ft.setIndex(_t)),B.isMesh)W.wireframe===!0?($.setLineWidth(W.wireframeLinewidth*$e()),ft.setMode(E.LINES)):ft.setMode(E.TRIANGLES);else if(B.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),$.setLineWidth(Pe*$e()),B.isLineSegments?ft.setMode(E.LINES):B.isLineLoop?ft.setMode(E.LINE_LOOP):ft.setMode(E.LINE_STRIP)}else B.isPoints?ft.setMode(E.POINTS):B.isSprite&&ft.setMode(E.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)os("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pe=B._multiDrawStarts,xt=B._multiDrawCounts,Wi=B._multiDrawCount,mi=Ae?H.get(Ae).bytesPerElement:1,qr=g.get(W).currentProgram.getUniforms();for(let Kt=0;Kt<Wi;Kt++)qr.setValue(E,"_gl_DrawID",Kt),ft.render(Pe[Kt]/mi,xt[Kt])}else if(B.isInstancedMesh)ft.renderInstances(rt,St,B.count);else if(X.isInstancedBufferGeometry){const Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xt=Math.min(X.instanceCount,Pe);ft.renderInstances(rt,St,xt)}else ft.render(rt,St)};function nr(M,F,X){M.transparent===!0&&M.side===bi&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,Ms(M,F,X),M.side=yr,M.needsUpdate=!0,Ms(M,F,X),M.side=bi):Ms(M,F,X)}this.compile=function(M,F,X=null){X===null&&(X=M),A=oe.get(X),A.init(F),C.push(A),X.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),M!==X&&M.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights();const W=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const Ce=ue[Me];nr(Ce,X,B),W.add(Ce)}else nr(ue,X,B),W.add(ue)}),A=C.pop(),W},this.compileAsync=function(M,F,X=null){const W=this.compile(M,F,X);return new Promise(B=>{function ue(){if(W.forEach(function(Me){g.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){B(M);return}setTimeout(ue,10)}Y.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let En=null;function kh(M){En&&En(M)}function Zl(){Er.stop()}function Jl(){Er.start()}const Er=new Bh;Er.setAnimationLoop(kh),typeof self<"u"&&Er.setContext(self),this.setAnimationLoop=function(M){En=M,de.setAnimationLoop(M),M===null?Er.stop():Er.start()},de.addEventListener("sessionstart",Zl),de.addEventListener("sessionend",Jl),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const X=de.enabled===!0&&de.isPresenting===!0,W=L!==null&&(k===null||X)&&L.begin(_,k);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,F,k),A=oe.get(M,C.length),A.init(F),C.push(A),Qe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(Qe,Oi,F.reversedDepth),De=this.localClippingEnabled,ye=Re.init(this.clippingPlanes,De),T=ae.get(M,R.length),T.init(),R.push(T),de.enabled===!0&&de.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&Tn(ue,F,-1/0,_.sortObjects)}Tn(M,F,0,_.sortObjects),T.finish(),_.sortObjects===!0&&T.sort(st,Ye),Ie=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Ie&&he.addToRenderList(T,M),this.info.render.frame++,ye===!0&&Re.beginShadows();const B=A.state.shadowsArray;if(Te.render(B,M,F),ye===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&L.hasRenderPass())===!1){const ue=T.opaque,Me=T.transmissive;if(A.setupLights(),F.isArrayCamera){const Ce=F.cameras;if(Me.length>0)for(let Ae=0,Be=Ce.length;Ae<Be;Ae++){const ke=Ce[Ae];Ql(ue,Me,M,ke)}Ie&&he.render(M);for(let Ae=0,Be=Ce.length;Ae<Be;Ae++){const ke=Ce[Ae];Kl(T,M,ke,ke.viewport)}}else Me.length>0&&Ql(ue,Me,M,F),Ie&&he.render(M),Kl(T,M,F)}k!==null&&G===0&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k)),W&&L.end(_),M.isScene===!0&&M.onAfterRender(_,M,F),be.resetDefaultState(),Z=-1,Q=null,C.pop(),C.length>0?(A=C[C.length-1],ye===!0&&Re.setGlobalState(_.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?T=R[R.length-1]:T=null};function Tn(M,F,X,W){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Oe.intersectsSprite(M)){W&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Qe);const ue=K.update(M),Me=M.material;Me.visible&&T.push(M,ue,Me,X,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Oe.intersectsObject(M))){const ue=K.update(M),Me=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ge.copy(ue.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(Qe)),Array.isArray(Me)){const Ce=ue.groups;for(let Ae=0,Be=Ce.length;Ae<Be;Ae++){const ke=Ce[Ae],Fe=Me[ke.materialIndex];Fe&&Fe.visible&&T.push(M,ue,Fe,X,Ge.z,ke)}}else Me.visible&&T.push(M,ue,Me,X,Ge.z,null)}}const B=M.children;for(let ue=0,Me=B.length;ue<Me;ue++)Tn(B[ue],F,X,W)}function Kl(M,F,X,W){const{opaque:B,transmissive:ue,transparent:Me}=M;A.setupLightsView(X),ye===!0&&Re.setGlobalState(_.clippingPlanes,X),W&&$.viewport(q.copy(W)),B.length>0&&xs(B,F,X),ue.length>0&&xs(ue,F,X),Me.length>0&&xs(Me,F,X),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Ql(M,F,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Fe=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new Bi(1,1,{generateMipmaps:!0,type:Fe?rr:ri,minFilter:Br,samples:te.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const B=A.state.transmissionRenderTarget[W.id],ue=W.viewport||q;B.setSize(ue.z*_.transmissionResolutionScale,ue.w*_.transmissionResolutionScale);const Me=_.getRenderTarget(),Ce=_.getActiveCubeFace(),Ae=_.getActiveMipmapLevel();_.setRenderTarget(B),_.getClearColor(ce),pe=_.getClearAlpha(),pe<1&&_.setClearColor(16777215,.5),_.clear(),Ie&&he.render(X);const Be=_.toneMapping;_.toneMapping=Fi;const ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),ye===!0&&Re.setGlobalState(_.clippingPlanes,W),xs(M,X,W),P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let rt=0,dt=F.length;rt<dt;rt++){const St=F[rt],{object:_t,geometry:ft,material:Pe,group:xt}=St;if(Pe.side===bi&&_t.layers.test(W.layers)){const Wi=Pe.side;Pe.side=Zt,Pe.needsUpdate=!0,ec(_t,X,W,ft,Pe,xt),Pe.side=Wi,Pe.needsUpdate=!0,Fe=!0}}Fe===!0&&(P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B))}_.setRenderTarget(Me,Ce,Ae),_.setClearColor(ce,pe),ke!==void 0&&(W.viewport=ke),_.toneMapping=Be}function xs(M,F,X){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ue=M.length;B<ue;B++){const Me=M[B],{object:Ce,geometry:Ae,group:Be}=Me;let ke=Me.material;ke.allowOverride===!0&&W!==null&&(ke=W),Ce.layers.test(X.layers)&&ec(Ce,F,X,Ae,ke,Be)}}function ec(M,F,X,W,B,ue){M.onBeforeRender(_,F,X,W,B,ue),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(_,F,X,W,M,ue),B.transparent===!0&&B.side===bi&&B.forceSinglePass===!1?(B.side=Zt,B.needsUpdate=!0,_.renderBufferDirect(X,F,W,B,M,ue),B.side=yr,B.needsUpdate=!0,_.renderBufferDirect(X,F,W,B,M,ue),B.side=bi):_.renderBufferDirect(X,F,W,B,M,ue),M.onAfterRender(_,F,X,W,B,ue)}function Ms(M,F,X){F.isScene!==!0&&(F=ne);const W=g.get(M),B=A.state.lights,ue=A.state.shadowsArray,Me=B.state.version,Ce=me.getParameters(M,B.state,ue,F,X),Ae=me.getProgramCacheKey(Ce);let Be=W.programs;W.environment=M.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(M.isMeshStandardMaterial?V:z).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Xt),Be=new Map,W.programs=Be);let ke=Be.get(Ae);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===Me)return ic(M,Ce),ke}else Ce.uniforms=me.getUniforms(M),M.onBeforeCompile(Ce,_),ke=me.acquireProgram(Ce,Ae),Be.set(Ae,ke),W.uniforms=Ce.uniforms;const Fe=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Fe.clippingPlanes=Re.uniform),ic(M,Ce),W.needsLights=jh(M),W.lightsStateVersion=Me,W.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function tc(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=an.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function ic(M,F){const X=g.get(M);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Wh(M,F,X,W,B){F.isScene!==!0&&(F=ne),P.resetTextureUnits();const ue=F.fog,Me=W.isMeshStandardMaterial?F.environment:null,Ce=k===null?_.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:La,Ae=(W.isMeshStandardMaterial?V:z).get(W.envMap||Me),Be=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,dt=!!X.morphAttributes.color;let St=Fi;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(St=_.toneMapping);const _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=_t!==void 0?_t.length:0,Pe=g.get(W),xt=A.state.lights;if(ye===!0&&(De===!0||M!==Q)){const Pt=M===Q&&W.id===Z;Re.setState(W,M,Pt)}let Wi=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xt.state.version||Pe.outputColorSpace!==Ce||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==Ae||W.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Re.numPlanes||Pe.numIntersection!==Re.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==ke||Pe.morphTargets!==Fe||Pe.morphNormals!==rt||Pe.morphColors!==dt||Pe.toneMapping!==St||Pe.morphTargetsCount!==ft)&&(Wi=!0):(Wi=!0,Pe.__version=W.version);let mi=Pe.currentProgram;Wi===!0&&(mi=Ms(W,F,B));let qr=!1,Kt=!1,Ba=!1;const pt=mi.getUniforms(),jt=Pe.uniforms;if($.useProgram(mi.program)&&(qr=!0,Kt=!0,Ba=!0),W.id!==Z&&(Z=W.id,Kt=!0),qr||Q!==M){$.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(E,"projectionMatrix",M.projectionMatrix),pt.setValue(E,"viewMatrix",M.matrixWorldInverse);const Pt=pt.map.cameraPosition;Pt!==void 0&&Pt.setValue(E,it.setFromMatrixPosition(M.matrixWorld)),te.logarithmicDepthBuffer&&pt.setValue(E,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(E,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Kt=!0,Ba=!0)}if(Pe.needsLights&&(xt.state.directionalShadowMap.length>0&&pt.setValue(E,"directionalShadowMap",xt.state.directionalShadowMap,P),xt.state.spotShadowMap.length>0&&pt.setValue(E,"spotShadowMap",xt.state.spotShadowMap,P),xt.state.pointShadowMap.length>0&&pt.setValue(E,"pointShadowMap",xt.state.pointShadowMap,P)),B.isSkinnedMesh){pt.setOptional(E,B,"bindMatrix"),pt.setOptional(E,B,"bindMatrixInverse");const Pt=B.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),pt.setValue(E,"boneTexture",Pt.boneTexture,P))}B.isBatchedMesh&&(pt.setOptional(E,B,"batchingTexture"),pt.setValue(E,"batchingTexture",B._matricesTexture,P),pt.setOptional(E,B,"batchingIdTexture"),pt.setValue(E,"batchingIdTexture",B._indirectTexture,P),pt.setOptional(E,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(E,"batchingColorTexture",B._colorsTexture,P));const si=X.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&He.update(B,X,mi),(Kt||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,pt.setValue(E,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(jt.envMap.value=Ae,jt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(jt.envMapIntensity.value=F.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=F0()),Kt&&(pt.setValue(E,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&Xh(jt,Ba),ue&&W.fog===!0&&ve.refreshFogUniforms(jt,ue),ve.refreshMaterialUniforms(jt,W,Ne,ze,A.state.transmissionRenderTarget[M.id]),an.upload(E,tc(Pe),jt,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(an.upload(E,tc(Pe),jt,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(E,"center",B.center),pt.setValue(E,"modelViewMatrix",B.modelViewMatrix),pt.setValue(E,"normalMatrix",B.normalMatrix),pt.setValue(E,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pt=W.uniformsGroups;for(let gi=0,wn=Pt.length;gi<wn;gi++){const Tr=Pt[gi];se.update(Tr,mi),se.bind(Tr,mi)}}return mi}function Xh(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function jh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,F,X){const W=g.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=F,g.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const X=g.get(M);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const qh=E.createFramebuffer();this.setRenderTarget=function(M,F=0,X=0){k=M,U=F,G=X;let W=null,B=!1,ue=!1;if(M){const Me=g.get(M);if(Me.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(E.FRAMEBUFFER,Me.__webglFramebuffer),q.copy(M.viewport),j.copy(M.scissor),re=M.scissorTest,$.viewport(q),$.scissor(j),$.setScissorTest(re),Z=-1;return}else if(Me.__webglFramebuffer===void 0)P.setupRenderTarget(M);else if(Me.__hasExternalTextures)P.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Be=M.depthTexture;if(Me.__boundDepthTexture!==Be){if(Be!==null&&g.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ue=!0);const Ae=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[F])?W=Ae[F][X]:W=Ae[F],B=!0):M.samples>0&&P.useMultisampledRTT(M)===!1?W=g.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[X]:W=Ae,q.copy(M.viewport),j.copy(M.scissor),re=M.scissorTest}else q.copy(J).multiplyScalar(Ne).floor(),j.copy(ee).multiplyScalar(Ne).floor(),re=Se;if(X!==0&&(W=qh),$.bindFramebuffer(E.FRAMEBUFFER,W)&&$.drawBuffers(M,W),$.viewport(q),$.scissor(j),$.setScissorTest(re),B){const Me=g.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,X)}else if(ue){const Me=F;for(let Ce=0;Ce<M.textures.length;Ce++){const Ae=g.get(M.textures[Ce]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ce,Ae.__webglTexture,X,Me)}}else if(M!==null&&X!==0){const Me=g.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Me.__webglTexture,X)}Z=-1},this.readRenderTargetPixels=function(M,F,X,W,B,ue,Me,Ce=0){if(!(M&&M.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){$.bindFramebuffer(E.FRAMEBUFFER,Ae);try{const Be=M.textures[Ce],ke=Be.format,Fe=Be.type;if(!te.textureFormatReadable(ke)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Fe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-W&&X>=0&&X<=M.height-B&&(M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ce),E.readPixels(F,X,W,B,le.convert(ke),le.convert(Fe),ue))}finally{const Be=k!==null?g.get(k).__webglFramebuffer:null;$.bindFramebuffer(E.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,F,X,W,B,ue,Me,Ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(F>=0&&F<=M.width-W&&X>=0&&X<=M.height-B){$.bindFramebuffer(E.FRAMEBUFFER,Ae);const Be=M.textures[Ce],ke=Be.format,Fe=Be.type;if(!te.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,rt),E.bufferData(E.PIXEL_PACK_BUFFER,ue.byteLength,E.STREAM_READ),M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ce),E.readPixels(F,X,W,B,le.convert(ke),le.convert(Fe),0);const dt=k!==null?g.get(k).__webglFramebuffer:null;$.bindFramebuffer(E.FRAMEBUFFER,dt);const St=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Jf(E,St,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,rt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ue),E.deleteBuffer(rt),E.deleteSync(St),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,X=0){const W=Math.pow(2,-X),B=Math.floor(M.image.width*W),ue=Math.floor(M.image.height*W),Me=F!==null?F.x:0,Ce=F!==null?F.y:0;P.setTexture2D(M,0),E.copyTexSubImage2D(E.TEXTURE_2D,X,0,0,Me,Ce,B,ue),$.unbindTexture()};const Yh=E.createFramebuffer(),$h=E.createFramebuffer();this.copyTextureToTexture=function(M,F,X=null,W=null,B=0,ue=null){ue===null&&(B!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=B,B=0):ue=0);let Me,Ce,Ae,Be,ke,Fe,rt,dt,St;const _t=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(X!==null)Me=X.max.x-X.min.x,Ce=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,ke=X.min.y,Fe=X.isBox3?X.min.z:0;else{const si=Math.pow(2,-B);Me=Math.floor(_t.width*si),Ce=Math.floor(_t.height*si),M.isDataArrayTexture?Ae=_t.depth:M.isData3DTexture?Ae=Math.floor(_t.depth*si):Ae=1,Be=0,ke=0,Fe=0}W!==null?(rt=W.x,dt=W.y,St=W.z):(rt=0,dt=0,St=0);const ft=le.convert(F.format),Pe=le.convert(F.type);let xt;F.isData3DTexture?(P.setTexture3D(F,0),xt=E.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),xt=E.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),xt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const Wi=E.getParameter(E.UNPACK_ROW_LENGTH),mi=E.getParameter(E.UNPACK_IMAGE_HEIGHT),qr=E.getParameter(E.UNPACK_SKIP_PIXELS),Kt=E.getParameter(E.UNPACK_SKIP_ROWS),Ba=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,_t.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,_t.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Be),E.pixelStorei(E.UNPACK_SKIP_ROWS,ke),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Fe);const pt=M.isDataArrayTexture||M.isData3DTexture,jt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const si=g.get(M),Pt=g.get(F),gi=g.get(si.__renderTarget),wn=g.get(Pt.__renderTarget);$.bindFramebuffer(E.READ_FRAMEBUFFER,gi.__webglFramebuffer),$.bindFramebuffer(E.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let Tr=0;Tr<Ae;Tr++)pt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,g.get(M).__webglTexture,B,Fe+Tr),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,g.get(F).__webglTexture,ue,St+Tr)),E.blitFramebuffer(Be,ke,Me,Ce,rt,dt,Me,Ce,E.DEPTH_BUFFER_BIT,E.NEAREST);$.bindFramebuffer(E.READ_FRAMEBUFFER,null),$.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||g.has(M)){const si=g.get(M),Pt=g.get(F);$.bindFramebuffer(E.READ_FRAMEBUFFER,Yh),$.bindFramebuffer(E.DRAW_FRAMEBUFFER,$h);for(let gi=0;gi<Ae;gi++)pt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,si.__webglTexture,B,Fe+gi):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,si.__webglTexture,B),jt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Pt.__webglTexture,ue,St+gi):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Pt.__webglTexture,ue),B!==0?E.blitFramebuffer(Be,ke,Me,Ce,rt,dt,Me,Ce,E.COLOR_BUFFER_BIT,E.NEAREST):jt?E.copyTexSubImage3D(xt,ue,rt,dt,St+gi,Be,ke,Me,Ce):E.copyTexSubImage2D(xt,ue,rt,dt,Be,ke,Me,Ce);$.bindFramebuffer(E.READ_FRAMEBUFFER,null),$.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else jt?M.isDataTexture||M.isData3DTexture?E.texSubImage3D(xt,ue,rt,dt,St,Me,Ce,Ae,ft,Pe,_t.data):F.isCompressedArrayTexture?E.compressedTexSubImage3D(xt,ue,rt,dt,St,Me,Ce,Ae,ft,_t.data):E.texSubImage3D(xt,ue,rt,dt,St,Me,Ce,Ae,ft,Pe,_t):M.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ue,rt,dt,Me,Ce,ft,Pe,_t.data):M.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ue,rt,dt,_t.width,_t.height,ft,_t.data):E.texSubImage2D(E.TEXTURE_2D,ue,rt,dt,Me,Ce,ft,Pe,_t);E.pixelStorei(E.UNPACK_ROW_LENGTH,Wi),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,mi),E.pixelStorei(E.UNPACK_SKIP_PIXELS,qr),E.pixelStorei(E.UNPACK_SKIP_ROWS,Kt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ba),ue===0&&F.generateMipmaps&&E.generateMipmap(xt),$.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&P.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?P.setTextureCube(M,0):M.isData3DTexture?P.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?P.setTexture2DArray(M,0):P.setTexture2D(M,0),$.unbindTexture()},this.resetState=function(){U=0,G=0,k=null,$.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}var z0=gt('<p class="expand-desc svelte-nrvv09">When the model reaches for this word during self-examination, it maps to measurable activation dynamics</p>'),G0=gt(`<p class="expand-desc svelte-nrvv09">A measurable property of the model's internal processing state</p>`),H0=gt('<span class="ftag ok svelte-nrvv09">✓ Robust</span>'),V0=gt('<div class="finding-card svelte-nrvv09"><div class="finding-pair svelte-nrvv09"><span class="fv svelte-nrvv09"> </span> <span class="fsep svelte-nrvv09">↔</span> <span class="fm svelte-nrvv09"> </span></div> <div class="finding-stats svelte-nrvv09"><span class="fr svelte-nrvv09"> </span> <span class="fp svelte-nrvv09"> </span></div> <p class="fi svelte-nrvv09"> </p> <div class="ftags svelte-nrvv09"><span class="ftag svelte-nrvv09"> </span> <span class="ftag svelte-nrvv09"> </span> <!></div></div>'),k0=gt('<div class="expand-panel svelte-nrvv09"><button class="close-btn svelte-nrvv09">✕</button> <span class="expand-type svelte-nrvv09"> </span> <h2 class="expand-name svelte-nrvv09"> </h2> <!> <div class="expand-findings svelte-nrvv09"></div></div>'),W0=gt('<div class="neural-scene svelte-nrvv09"><!> <div class="scene-bottom svelte-nrvv09"><h1 class="svelte-nrvv09">Inside the <span class="accent svelte-nrvv09">Synthetic</span> Mind</h1> <p class="sub svelte-nrvv09">Scroll to travel deeper · Click a node to explore</p> <div class="legend svelte-nrvv09"><span class="svelte-nrvv09"><i class="dot ruby svelte-nrvv09"></i> Vocabulary</span> <span class="svelte-nrvv09"><i class="dot emerald svelte-nrvv09"></i> Metric</span> <span class="svelte-nrvv09"><i class="dot trace svelte-nrvv09"></i> Current Flow</span></div></div> <div class="zoom-ind svelte-nrvv09"><div class="zt svelte-nrvv09"><div class="zf svelte-nrvv09"></div></div> <span class="zl svelte-nrvv09"> </span></div></div>');function X0(i,e){us(e,!1);const t=Ut();let r=Pl(e,"data",8),a=Ut(),s,n,o,l,c=Ut(null),u=[],f=[],h=[],p=[],v,x=[],d=0,m=0,b=Ut(55),w=55,T=new Vp,A=new We,R,C,L,_,y;const U=[...r().correspondences.llama70b_baseline.findings.map(E=>({...E,model:"Llama 70B",condition:"Baseline"})),...r().correspondences.llama70b_steered.findings.map(E=>({...E,model:"Llama 70B",condition:"Steered"})),...r().correspondences.qwen32b_baseline.findings.map(E=>({...E,model:"Qwen 32B",condition:"Baseline"}))],G=[...new Set(U.map(E=>E.vocab.replace("_delta","")))],k=[...new Set(U.map(E=>E.metric_name))];function Z(){const E=document.createElement("canvas");E.width=256,E.height=256;const N=E.getContext("2d"),Y=N.createRadialGradient(128,128,0,128,128,128);return Y.addColorStop(0,"rgba(255,255,255,1)"),Y.addColorStop(.1,"rgba(255,255,255,0.8)"),Y.addColorStop(.3,"rgba(255,255,255,0.3)"),Y.addColorStop(.5,"rgba(255,255,255,0.1)"),Y.addColorStop(.7,"rgba(255,255,255,0.03)"),Y.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=Y,N.fillRect(0,0,256,256),new to(E)}function Q(){const E=document.createElement("canvas");E.width=256,E.height=256;const N=E.getContext("2d"),Y=N.createRadialGradient(128,128,0,128,128,128);return Y.addColorStop(0,"rgba(255,255,255,0.15)"),Y.addColorStop(.3,"rgba(255,255,255,0.08)"),Y.addColorStop(.6,"rgba(255,255,255,0.03)"),Y.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=Y,N.fillRect(0,0,256,256),new to(E)}function q(){const E=document.createElement("canvas");E.width=128,E.height=128;const N=E.getContext("2d"),Y=N.createRadialGradient(64,64,0,64,64,48);Y.addColorStop(0,"rgba(255,255,255,1)"),Y.addColorStop(.15,"rgba(255,255,255,0.95)"),Y.addColorStop(.4,"rgba(255,255,255,0.5)"),Y.addColorStop(.6,"rgba(255,255,255,0.25)"),Y.addColorStop(.85,"rgba(255,255,255,0.08)"),Y.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=Y,N.fillRect(0,0,128,128),N.globalCompositeOperation="lighter";const te=N.createLinearGradient(0,64,128,64);te.addColorStop(0,"rgba(255,255,255,0)"),te.addColorStop(.4,"rgba(255,255,255,0.15)"),te.addColorStop(.5,"rgba(255,255,255,0.5)"),te.addColorStop(.6,"rgba(255,255,255,0.15)"),te.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=te,N.fillRect(0,58,128,12);const $=N.createLinearGradient(64,0,64,128);return $.addColorStop(0,"rgba(255,255,255,0)"),$.addColorStop(.4,"rgba(255,255,255,0.15)"),$.addColorStop(.5,"rgba(255,255,255,0.5)"),$.addColorStop(.6,"rgba(255,255,255,0.15)"),$.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=$,N.fillRect(58,0,12,128),new to(E)}ps(()=>{j(),J(),window.addEventListener("resize",Oe),I(a).addEventListener("click",ee),I(a).addEventListener("wheel",Se,{passive:!1})}),lh(()=>{l&&cancelAnimationFrame(l),s&&s.dispose(),window.removeEventListener("resize",Oe)});function j(){n=new yp,n.fog=new Wl(656920,.003),o=new ii(60,window.innerWidth/window.innerHeight,.1,800),s=new B0({antialias:!0}),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(394010),s.toneMapping=Ul,s.toneMappingExposure=1.2,I(a).appendChild(s.domElement),R=Z(),C=Q(),L=q(),n.add(new Gp(4469606,.6));const E=new fa(10049023,5,120);E.position.set(15,20,15),n.add(E);const N=new fa(1157751,4,100);N.position.set(-15,-10,-15),n.add(N);const Y=new fa(16729224,3,80);Y.position.set(0,0,25),n.add(Y);const te=new fa(2280584,3,90);te.position.set(-10,15,-20),n.add(te);const $=new ao(16777215,2);$.position.set(10,20,10),n.add($);const S=new ao(8939263,1);S.position.set(-10,5,-15),n.add(S);const g=new ao(16772829,1.2);g.position.set(-5,15,20),n.add(g),_=new fa(16777215,6,50),_.position.set(8,8,8),n.add(_),y=new fa(11197951,4,40),y.position.set(-8,-4,-8),n.add(y),re(),ce(),Ee=pe(),ze(),Ne(),st(),Ye()}function re(){const E=new Wt,N=new Float32Array(22e3*3),Y=new Float32Array(22e3*3);for(let te=0;te<22e3;te++){const $=Math.acos(2*Math.random()-1),S=Math.random()*Math.PI*2,g=Math.random()<.3,P=g?Math.pow(Math.random(),.3)*15:10+Math.pow(Math.random(),.5)*80,z=g?0:Math.sin(S*2+P*.1)*P*.15;N[te*3]=Math.sin($)*Math.cos(S)*P+z*Math.cos(S+1),N[te*3+1]=Math.cos($)*P*(g?.6:.8),N[te*3+2]=Math.sin($)*Math.sin(S)*P+z*Math.sin(S+1);const V=Math.random();g?(Y[te*3]=.8+V*.15,Y[te*3+1]=.65+V*.15,Y[te*3+2]=.95+V*.05):V<.25?(Y[te*3]=.5+V,Y[te*3+1]=.25,Y[te*3+2]=.85):V<.45?(Y[te*3]=.1,Y[te*3+1]=.45+V*.4,Y[te*3+2]=.3+V*.2):V<.65?(Y[te*3]=.15,Y[te*3+1]=.5+V*.3,Y[te*3+2]=.55+V*.2):(Y[te*3]=.4+V*.3,Y[te*3+1]=.3,Y[te*3+2]=.75+V*.2)}E.setAttribute("position",new kt(N,3)),E.setAttribute("color",new kt(Y,3)),v=new Rp(E,new Nh({size:.1,transparent:!0,opacity:.75,vertexColors:!0,sizeAttenuation:!0,blending:Mi,depthWrite:!1})),n.add(v)}function ce(){const E=[5579400,3346790,4469657,1135923,1144644,677173,4465271,2245700,5583752];for(let N=0;N<40;N++){const Y=new Ur({map:C,color:E[N%E.length],transparent:!0,opacity:.12+Math.random()*.18,blending:Mi,depthWrite:!1}),te=new da(Y),$=5+Math.random()*55,S=Math.random()*Math.PI*2,g=(Math.random()-.5)*Math.PI;te.position.set(Math.cos(S)*Math.cos(g)*$,Math.sin(g)*$*.7,Math.sin(S)*Math.cos(g)*$);const P=12+Math.random()*40;te.scale.set(P,P,1),n.add(te),x.push({sprite:te,baseOpacity:Y.opacity,phase:Math.random()*Math.PI*2})}}function pe(){const E=["px","nx","py","ny","pz","nz"];E.forEach((Y,te)=>{const $=document.createElement("canvas");$.width=128,$.height=128;const S=$.getContext("2d"),g=S.createRadialGradient(128*(.3+te*.1),128*.4,0,128*.5,128*.5,128*.8);g.addColorStop(0,te%2===0?"rgba(100,60,180,0.4)":"rgba(30,120,80,0.3)"),g.addColorStop(.5,"rgba(15,8,40,0.8)"),g.addColorStop(1,"rgba(6,3,20,1)"),S.fillStyle=g,S.fillRect(0,0,128,128);for(let P=0;P<8;P++){const z=S.createRadialGradient(Math.random()*128,Math.random()*128,0,Math.random()*128,Math.random()*128,4+Math.random()*12);z.addColorStop(0,"rgba(255,255,255,0.5)"),z.addColorStop(.5,"rgba(200,180,255,0.15)"),z.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=z,S.fillRect(0,0,128,128)}});const N=new kl([...E.map((Y,te)=>{const $=document.createElement("canvas");$.width=128,$.height=128;const S=$.getContext("2d"),g=S.createRadialGradient(128*(.3+te*.12),128*.4,0,128*.5,128*.5,128*.8);g.addColorStop(0,te%2===0?"rgba(100,60,180,0.5)":"rgba(30,130,80,0.4)"),g.addColorStop(.4,"rgba(20,10,50,0.9)"),g.addColorStop(1,"rgba(6,3,20,1)"),S.fillStyle=g,S.fillRect(0,0,128,128);for(let P=0;P<10;P++){const z=Math.random()*128,V=Math.random()*128,H=S.createRadialGradient(z,V,0,z,V,3+Math.random()*8);H.addColorStop(0,"rgba(255,255,255,0.6)"),H.addColorStop(.3,"rgba(220,200,255,0.2)"),H.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=H,S.fillRect(0,0,128,128)}return $})]);return N.needsUpdate=!0,N}let Ee;function ze(){const E=[{base:11149926,emissive:16724872,glow:16729241},{base:6693546,emissive:10044671,glow:12281599},{base:8926122,emissive:12277247,glow:13400063},{base:11154261,emissive:16729207,glow:16733576},{base:7812027,emissive:11163118,glow:13400063},{base:10035882,emissive:13387007,glow:14509823},{base:12264021,emissive:16724855,glow:16733593},{base:5583820,emissive:7820799,glow:10057727}];G.forEach((N,Y)=>{const te=Math.PI*(3-Math.sqrt(5))*Y,$=Math.acos(1-2*(Y+.5)/(G.length+k.length)),S=6+Y/G.length*10,g=new O(Math.sin($)*Math.cos(te)*S,Math.cos($)*S*.7,Math.sin($)*Math.sin(te)*S),P=new jl(.5,0);P.deleteAttribute("normal"),P.computeVertexNormals();const z=E[Y%E.length],V=new jc({color:z.base,emissive:z.emissive,emissiveIntensity:.35,roughness:0,metalness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1,envMap:Ee,envMapIntensity:2.5,transparent:!0,opacity:.88,transmission:.6,ior:2.42,thickness:1.2,specularIntensity:1,specularColor:new Xe(16777215),sheen:.3,sheenRoughness:.2,sheenColor:new Xe(z.emissive),flatShading:!0,side:bi}),H=new Ri(P,V);H.position.copy(g),n.add(H);const fe=new Ur({map:L,color:z.glow,transparent:!0,opacity:.6,blending:Mi}),K=new da(fe);K.scale.set(2.5,2.5,1),K.position.copy(g),n.add(K);const me=new Ur({map:R,color:z.glow,transparent:!0,opacity:.15,blending:Mi}),ve=new da(me);ve.scale.set(6,6,1),ve.position.copy(g),n.add(ve);const ae=U.filter(oe=>oe.vocab.replace("_delta","")===N);u.push({mesh:H,sparkle:K,glow:ve,vocab:N,findings:ae,basePos:g.clone(),color:z,type:"vocab",orbitPhase:Math.random()*Math.PI*2,orbitRadius:.25+Math.random()*.4,orbitSpeed:.2+Math.random()*.25,rotSpeed:{x:(Math.random()-.5)*.25,y:.12+Math.random()*.15,z:(Math.random()-.5)*.1},shimmerPhase:Math.random()*Math.PI*2,shimmerSpeed:2+Math.random()*3})})}function Ne(){const E=[{base:1140292,emissive:2293640,glow:3407786},{base:873792,emissive:1761408,glow:2817952},{base:2254421,emissive:4521898,glow:5636027},{base:1135940,emissive:2284936,glow:3407769}];k.forEach((N,Y)=>{const te=Math.PI*(3-Math.sqrt(5)),$=Y+G.length,S=te*$+Math.PI,g=Math.acos(1-2*($+.5)/(G.length+k.length)),P=8+Y/k.length*8,z=new O(Math.sin(g)*Math.cos(S)*P,Math.cos(g)*P*.7,Math.sin(g)*Math.sin(S)*P),V=new ql(.55,1);V.deleteAttribute("normal"),V.computeVertexNormals();const H=E[Y%E.length],fe=new jc({color:H.base,emissive:H.emissive,emissiveIntensity:.35,roughness:0,metalness:0,clearcoat:1,clearcoatRoughness:0,reflectivity:1,envMap:Ee,envMapIntensity:2.5,transparent:!0,opacity:.88,transmission:.55,ior:1.57,thickness:1,specularIntensity:1,specularColor:new Xe(16777215),sheen:.3,sheenRoughness:.15,sheenColor:new Xe(H.emissive),flatShading:!0,side:bi}),K=new Ri(V,fe);K.position.copy(z),n.add(K);const me=new Ur({map:L,color:H.glow,transparent:!0,opacity:.5,blending:Mi}),ve=new da(me);ve.scale.set(2.8,2.8,1),ve.position.copy(z),n.add(ve);const ae=new Ur({map:R,color:H.glow,transparent:!0,opacity:.12,blending:Mi}),oe=new da(ae);oe.scale.set(6,6,1),oe.position.copy(z),n.add(oe);const Re=U.filter(Te=>Te.metric_name===N);f.push({mesh:K,sparkle:ve,glow:oe,metric:N,findings:Re,basePos:z.clone(),color:H,type:"metric",orbitPhase:Math.random()*Math.PI*2,orbitRadius:.2+Math.random()*.35,orbitSpeed:.15+Math.random()*.2,rotSpeed:{x:(Math.random()-.5)*.15,y:.1+Math.random()*.12,z:(Math.random()-.5)*.08},shimmerPhase:Math.random()*Math.PI*2,shimmerSpeed:1.8+Math.random()*2.5})})}function st(){const E=new Set;U.forEach(N=>{const Y=N.vocab.replace("_delta",""),te=N.metric_name,$=Y+"|"+te;if(E.has($))return;E.add($);const S=u.findIndex(D=>D.vocab===Y),g=f.findIndex(D=>D.metric===te);if(S===-1||g===-1)return;const P=Math.abs(N.r),z=P>.5,V=u[S].basePos,H=f[g].basePos,fe=new O().lerpVectors(V,H,.5),K=fe.clone().normalize().multiplyScalar(1.5+P*2);fe.add(K);const me=new Xc(V.clone(),fe,H.clone()),ve=me.getPoints(60),ae=new Wt().setFromPoints(ve),oe=z?13391274:6702250,Re=new fl({color:oe,transparent:!0,opacity:z?.4:.18,blending:Mi,depthWrite:!1}),Te=new Vc(ae,Re);n.add(Te);const he=new fl({color:z?16746700:8939212,transparent:!0,opacity:z?.12:.05,blending:Mi,depthWrite:!1,linewidth:1}),He=new Vc(ae.clone(),he);n.add(He),p.push({line:Te,glowLine:He,vIdx:S,mIdx:g,curve:me,strength:P,baseOpacity:Re.opacity,baseGlowOpacity:he.opacity,traceColor:oe})})}function Ye(){const E=new Set;U.forEach(N=>{const Y=N.vocab.replace("_delta",""),te=N.metric_name,$=Y+"|"+te;if(E.has($))return;E.add($);const S=u.findIndex(H=>H.vocab===Y),g=f.findIndex(H=>H.metric===te);if(S===-1||g===-1)return;const P=Math.abs(N.r),z=Math.ceil(P*14)+4,V=P>.5?16746683:10057727;for(let H=0;H<z;H++){const fe=new Ur({map:R,color:V,transparent:!0,opacity:0,blending:Mi,depthWrite:!1}),K=new da(fe),me=.4+P*.6;K.scale.set(me,me,1),n.add(K),h.push({sprite:K,vIdx:S,mIdx:g,t:H/z,speed:.15+Math.random()*.2,strength:P,color:V})}})}function J(){l=requestAnimationFrame(J),d+=.016,ot(b,I(b)+(w-I(b))*.04),m+=.0018;const E=3+(I(b)-15)/40*18;o.position.x=Math.sin(m)*I(b),o.position.z=Math.cos(m)*I(b),o.position.y=E+Math.sin(d*.15)*2,o.lookAt(0,0,0),v&&(v.rotation.y+=6e-4,v.rotation.x=Math.sin(d*.04)*.015),_&&(_.position.x=Math.sin(d*.4)*12,_.position.y=Math.cos(d*.3)*10+5,_.position.z=Math.cos(d*.4)*12),y&&(y.position.x=Math.cos(d*.35)*10,y.position.y=Math.sin(d*.25)*8-3,y.position.z=Math.sin(d*.35)*10),x.forEach(N=>{N.sprite.material.opacity=N.baseOpacity+Math.sin(d*.25+N.phase)*.06}),[...u,...f].forEach(N=>{const Y=d*N.orbitSpeed+N.orbitPhase;N.mesh.position.x=N.basePos.x+Math.sin(Y)*N.orbitRadius,N.mesh.position.y=N.basePos.y+Math.cos(Y*.7)*N.orbitRadius*.5,N.mesh.position.z=N.basePos.z+Math.cos(Y)*N.orbitRadius,N.mesh.rotation.x+=N.rotSpeed.x*.016,N.mesh.rotation.y+=N.rotSpeed.y*.016,N.mesh.rotation.z+=N.rotSpeed.z*.016,N.sparkle.position.copy(N.mesh.position),N.glow.position.copy(N.mesh.position);const te=Math.sin(d*N.shimmerSpeed+N.shimmerPhase),$=Math.sin(d*N.shimmerSpeed*1.7+N.shimmerPhase*.6);N.mesh.material.emissiveIntensity=.5+te*.4;const S=2.2+te*.6+$*.3;N.sparkle.scale.set(S,S,1),N.sparkle.material.opacity=.4+te*.25+$*.1,N.sparkle.material.rotation=d*.5+N.shimmerPhase,N.glow.material.opacity=.1+te*.06;const g=5.5+te*1.5;N.glow.scale.set(g,g,1)}),p.forEach(N=>{const Y=u[N.vIdx].mesh.position,te=f[N.mIdx].mesh.position,$=new O().lerpVectors(Y,te,.5),S=$.clone().normalize().multiplyScalar(1.5+N.strength*2);$.add(S);const g=new Xc(Y.clone(),$,te.clone()),P=g.getPoints(60);N.line.geometry.setFromPoints(P),N.glowLine.geometry.setFromPoints(P),N.curve=g;const z=Math.sin(d*2+N.vIdx*.7)*.1;N.line.material.opacity=N.baseOpacity+I(t)*.25+z,N.glowLine.material.opacity=N.baseGlowOpacity+I(t)*.1+z*.5}),h.forEach(N=>{N.t=(N.t+N.speed*.006)%1;const Y=p.find(P=>P.vIdx===N.vIdx&&P.mIdx===N.mIdx);if(!Y)return;const te=Y.curve.getPoint(N.t);N.sprite.position.copy(te);const $=Math.sin(N.t*Math.PI),S=(Math.sin(N.t*Math.PI*6+d*3)*.5+.5)*.3;N.sprite.material.opacity=$*(.35+I(t)*.35)+S;const g=.3+N.strength*.5;N.sprite.scale.setScalar(g+S*.3)}),s.render(n,o)}function ee(E){A.x=E.clientX/window.innerWidth*2-1,A.y=-(E.clientY/window.innerHeight)*2+1,T.setFromCamera(A,o);const N=[...u.map(te=>te.mesh),...f.map(te=>te.mesh)],Y=T.intersectObjects(N);if(Y.length>0){const te=u.find($=>$.mesh===Y[0].object)||f.find($=>$.mesh===Y[0].object);if(te){ot(c,I(c)===te?null:te);return}}ot(c,null)}function Se(E){E.preventDefault(),w=Math.max(12,Math.min(70,w+E.deltaY*.06))}function Oe(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}Za(()=>I(b),()=>{ot(t,Math.max(0,Math.min(1,1-(I(b)-15)/40)))}),Yu(),vn();var ye=W0(),De=ge(ye);{var Qe=E=>{var N=k0(),Y=ge(N),te=Le(Y,2),$=ge(te),S=Le(te,2),g=ge(S),P=Le(S,2);{var z=fe=>{var K=z0();mt(fe,K)},V=fe=>{var K=G0();mt(fe,K)};Yt(P,fe=>{I(c),Ue(()=>I(c).type==="vocab")?fe(z):fe(V,!1)})}var H=Le(P,2);as(H,5,()=>(I(c),Ue(()=>I(c).findings)),rs,(fe,K)=>{var me=V0(),ve=ge(me),ae=ge(ve),oe=ge(ae),Re=Le(ae,4),Te=ge(Re),he=Le(ve,2),He=ge(he),D=ge(He),_e=Le(He,2),le=ge(_e),be=Le(he,2),se=ge(be),ie=Le(be,2),de=ge(ie),we=ge(de),nt=Le(de,2),Ke=ge(nt),Xt=Le(nt,2);{var Jt=Pi=>{var nr=H0();mt(Pi,nr)};Yt(Xt,Pi=>{I(K),Ue(()=>I(K).survives_outlier)&&Pi(Jt)})}Bt((Pi,nr)=>{Je(oe,Pi),Je(Te,(I(K),Ue(()=>I(K).metric_name))),Je(D,`r = ${nr??""}`),Je(le,`p = ${I(K),Ue(()=>I(K).p)??""}`),Je(se,(I(K),Ue(()=>I(K).interpretation))),Je(we,(I(K),Ue(()=>I(K).model))),Je(Ke,(I(K),Ue(()=>I(K).condition)))},[()=>(I(K),Ue(()=>I(K).vocab.replace("_delta",""))),()=>(I(K),Ue(()=>I(K).r.toFixed(2)))]),mt(fe,me)}),Bt(()=>{Je($,(I(c),Ue(()=>I(c).type==="vocab"?"VOCABULARY NODE":"ACTIVATION METRIC"))),Je(g,(I(c),Ue(()=>I(c).vocab||I(c).metric)))}),Ii("click",Y,()=>ot(c,null)),mt(E,N)};Yt(De,E=>{I(c)&&E(Qe)})}var it=Le(De,4),Ge=ge(it),ne=ge(Ge),Ie=Le(Ge,2),$e=ge(Ie);oh(ye,E=>ot(a,E),()=>I(a)),Bt(()=>{Fr(ne,`height:${I(t)*100}%`),Je($e,I(t)<.3?"GALAXY":I(t)<.7?"NETWORK":"CORE")}),mt(i,ye),hs()}var j0=gt('<span class="j-robust svelte-1hlnqe2">✓ Survives outlier removal</span>'),q0=gt('<p class="j-note svelte-1hlnqe2"> </p>'),Y0=gt('<p class="j-extra svelte-1hlnqe2"> </p>'),$0=gt('<div class="jewel-expand svelte-1hlnqe2"><div class="j-stat-row svelte-1hlnqe2"><span class="j-p svelte-1hlnqe2"> </span> <!></div> <p class="j-interp svelte-1hlnqe2"> </p> <!> <!></div>'),Z0=gt('<button><div class="jewel-glow svelte-1hlnqe2"></div> <div class="jewel-body svelte-1hlnqe2"><div class="jewel-header svelte-1hlnqe2"><span class="j-vocab svelte-1hlnqe2"> </span> <span class="j-link svelte-1hlnqe2">↔</span> <span class="j-metric svelte-1hlnqe2"> </span></div> <div class="j-r svelte-1hlnqe2"> </div> <div class="j-source svelte-1hlnqe2"> </div></div> <!></button>'),J0=gt('<div class="control-card svelte-1hlnqe2"><div class="ctrl-word svelte-1hlnqe2"> </div> <div class="ctrl-context svelte-1hlnqe2"> </div> <div class="ctrl-comparison svelte-1hlnqe2"><div class="ctrl-row svelte-1hlnqe2"><span class="ctrl-label svelte-1hlnqe2">Self-referential</span> <div class="ctrl-bar-line svelte-1hlnqe2"><div class="ctrl-bar-track svelte-1hlnqe2"><div class="ctrl-bar alive svelte-1hlnqe2"></div></div> <span class="ctrl-val alive-val svelte-1hlnqe2"> </span></div></div> <div class="ctrl-row svelte-1hlnqe2"><span class="ctrl-label svelte-1hlnqe2">Describing objects</span> <div class="ctrl-bar-line svelte-1hlnqe2"><div class="ctrl-bar-track svelte-1hlnqe2"><div class="ctrl-bar dead svelte-1hlnqe2"></div></div> <span class="ctrl-val dead-val svelte-1hlnqe2"> </span></div></div></div> <div class="ctrl-verdict svelte-1hlnqe2"><span class="verdict-line svelte-1hlnqe2"></span> <span class="verdict-text svelte-1hlnqe2">GONE</span> <span class="verdict-line svelte-1hlnqe2"></span></div></div>'),K0=gt(`<div class="corr-journey svelte-1hlnqe2"><section class="act act-question svelte-1hlnqe2"><div class="stars-bg svelte-1hlnqe2"></div> <div class="act-content svelte-1hlnqe2"><p class="act-label svelte-1hlnqe2">I</p> <h1 class="svelte-1hlnqe2">When you look inside<br class="svelte-1hlnqe2"/>a synthetic mind</h1> <p class="act-sub svelte-1hlnqe2">do the words mean anything?</p> <button class="scroll-hint svelte-1hlnqe2"><div class="gem-arrow svelte-1hlnqe2"><span class="gem-icon svelte-1hlnqe2">◆</span> <span class="gem-trail svelte-1hlnqe2">◆</span> <span class="gem-trail t2 svelte-1hlnqe2">◆</span></div> <span class="hint-text svelte-1hlnqe2">look inside</span></button></div></section> <section class="act act-answer svelte-1hlnqe2"><div class="act-content svelte-1hlnqe2"><p class="act-label svelte-1hlnqe2">II</p> <h2 class="svelte-1hlnqe2">They do.</h2> <p class="act-explainer svelte-1hlnqe2">When a model writes words like <span class="vocab-hl svelte-1hlnqe2">loop</span> or <span class="vocab-hl svelte-1hlnqe2">shimmer</span> during self-examination, 
        its internal activations shift in measurably corresponding ways. 
        These aren't random associations — they're <span class="em svelte-1hlnqe2">statistically verified correspondences</span> between vocabulary and activation dynamics.</p> <p class="act-explainer dim svelte-1hlnqe2">Each jewel below is a measured link between a word the model reaches for and something happening inside it.</p></div></section> <section class="findings-section svelte-1hlnqe2"><div class="findings-grid svelte-1hlnqe2"></div></section> <section class="act act-test svelte-1hlnqe2"><div class="act-content svelte-1hlnqe2"><p class="act-label svelte-1hlnqe2">III</p> <h2 class="svelte-1hlnqe2">But is it real?</h2> <p class="act-explainer svelte-1hlnqe2">A skeptic would say: maybe these words just correlate with activation patterns regardless of context. 
        Maybe <span class="vocab-hl svelte-1hlnqe2">expand</span> always maps to the same metrics, whether describing itself or describing a balloon.</p> <p class="act-explainer svelte-1hlnqe2">So we tested exactly that.</p> <p class="act-explainer dim svelte-1hlnqe2">Same words. Same model. Same metrics.<br class="svelte-1hlnqe2"/> One difference: the words were used to describe <span class="em svelte-1hlnqe2">external things</span> instead of internal states.</p></div></section> <section class="control-section svelte-1hlnqe2"></section> <section class="act act-conclusion svelte-1hlnqe2"><div class="act-content svelte-1hlnqe2"><p class="act-label svelte-1hlnqe2">IV</p> <h2 class="svelte-1hlnqe2">The correspondence is real.</h2> <p class="act-explainer svelte-1hlnqe2">It only exists during <span class="em svelte-1hlnqe2">self-referential processing</span>. 
        When the same words describe lakes or balloons, the link disappears completely.</p> <p class="act-explainer svelte-1hlnqe2">Not vocabulary association. Not sentiment. Not length.<br class="svelte-1hlnqe2"/> Something that only happens <span class="em svelte-1hlnqe2">when the model examines itself</span>.</p> <div class="conclusion-stats svelte-1hlnqe2"><div class="cs-item svelte-1hlnqe2"><span class="cs-num svelte-1hlnqe2"> </span> <span class="cs-label svelte-1hlnqe2">Correspondences found</span></div> <div class="cs-item svelte-1hlnqe2"><span class="cs-num svelte-1hlnqe2">3</span> <span class="cs-label svelte-1hlnqe2">Models tested</span></div></div> <div class="final-line svelte-1hlnqe2"><p class="svelte-1hlnqe2">You're looking at the inside of a synthetic mind.<br class="svelte-1hlnqe2"/>And it knows something about itself.</p></div></div></section></div>`);function Q0(i,e){us(e,!1);let t=Pl(e,"data",8),r=Ut(null);const a=t().correspondences,s=a.llama70b_baseline.findings,n=a.llama70b_steered.findings,o=a.qwen32b_baseline.findings,l=t().controls.descriptive_context.findings,c=[...s.map(L=>({...L,source:"Llama 70B · Baseline"})),...n.map(L=>({...L,source:"Llama 70B · Steered"})),...o.map(L=>({...L,source:"Qwen 32B · Baseline"}))].sort((L,_)=>Math.abs(_.r)-Math.abs(L.r));function u(L){const _=Math.abs(L);return _>.5?"strong":_>.35?"moderate":"present"}ps(()=>{const L=()=>{};return window.addEventListener("scroll",L,{passive:!0}),()=>window.removeEventListener("scroll",L)}),vn();var f=K0(),h=ge(f),p=Le(ge(h),2),v=Le(ge(p),6),x=Le(h,4),d=ge(x);as(d,5,()=>c,rs,(L,_,y)=>{var U=Z0();let G;Fr(U,`--delay: ${y*.08}s`);var k=Le(ge(U),2),Z=ge(k),Q=ge(Z),q=ge(Q),j=Le(Q,4),re=ge(j),ce=Le(Z,2),pe=ge(ce),Ee=Le(ce,2),ze=ge(Ee),Ne=Le(k,2);{var st=Ye=>{var J=$0(),ee=ge(J),Se=ge(ee),Oe=ge(Se),ye=Le(Se,2);{var De=E=>{var N=j0();mt(E,N)};Yt(ye,E=>{I(_),Ue(()=>I(_).survives_outlier)&&E(De)})}var Qe=Le(ee,2),it=ge(Qe),Ge=Le(Qe,2);{var ne=E=>{var N=q0(),Y=ge(N);Bt(()=>Je(Y,(I(_),Ue(()=>I(_).note)))),mt(E,N)};Yt(Ge,E=>{I(_),Ue(()=>I(_).note)&&E(ne)})}var Ie=Le(Ge,2);{var $e=E=>{var N=Y0(),Y=ge(N);Bt(()=>Je(Y,`Spearman ρ = ${I(_),Ue(()=>I(_).spearman_rho)??""} · Non-parametric confirmation`)),mt(E,N)};Yt(Ie,E=>{I(_),Ue(()=>I(_).spearman_rho)&&E($e)})}Bt(()=>{Je(Oe,`p = ${I(_),Ue(()=>I(_).p)??""}`),Je(it,(I(_),Ue(()=>I(_).interpretation)))}),mt(Ye,J)};Yt(Ne,Ye=>{I(r)===I(_)&&Ye(st)})}Bt((Ye,J,ee)=>{G=is(U,1,`finding-jewel ${Ye??""}`,"svelte-1hlnqe2",G,{selected:I(r)===I(_)}),Je(q,J),Je(re,(I(_),Ue(()=>I(_).metric_name))),Je(pe,`r = ${ee??""}`),Je(ze,(I(_),Ue(()=>I(_).source)))},[()=>(I(_),Ue(()=>u(I(_).r))),()=>(I(_),Ue(()=>I(_).vocab.replace("_delta",""))),()=>(I(_),Ue(()=>I(_).r.toFixed(2)))]),Ii("click",U,()=>ot(r,I(r)===I(_)?null:I(_))),mt(L,U)});var m=Le(x,4);as(m,5,()=>l,rs,(L,_,y)=>{var U=J0();Fr(U,`--delay: ${y*.15}s`);var G=ge(U),k=ge(G),Z=Le(G,2),Q=ge(Z),q=Le(Z,2),j=ge(q),re=Le(ge(j),2),ce=ge(re),pe=ge(ce),Ee=Le(ce,2),ze=ge(Ee),Ne=Le(j,2),st=Le(ge(Ne),2),Ye=ge(st),J=ge(Ye),ee=Le(Ye,2),Se=ge(ee);Bt((Oe,ye)=>{Je(k,(I(_),Ue(()=>I(_).vocab))),Je(Q,`"${I(_),Ue(()=>I(_).context)??""}"`),Fr(pe,`width: ${Oe??""}%`),Je(ze,`r = ${I(_),Ue(()=>I(_).introspection_r)??""}`),Fr(J,`width: ${ye??""}%`),Je(Se,`r = ${I(_),Ue(()=>I(_).descriptive_r)??""}`)},[()=>(I(_),Ue(()=>Math.abs(I(_).introspection_r)*100)),()=>(I(_),Ue(()=>Math.max(Math.abs(I(_).descriptive_r)*100,2)))]),mt(L,U)});var b=Le(m,2),w=ge(b),T=Le(ge(w),8),A=ge(T),R=ge(A),C=ge(R);Bt(()=>Je(C,Ue(()=>s.length+n.length+o.length))),Ii("click",v,()=>document.querySelector(".act-answer")?.scrollIntoView({behavior:"smooth"})),mt(i,f),hs()}var ex=gt('<button><span class="model-dot svelte-1frhvfl"></span> <span class="model-name svelte-1frhvfl"> </span></button>'),tx=gt('<span class="wp-robust svelte-1frhvfl">✓ Survives outlier removal</span>'),ix=gt('<span class="wp-extra svelte-1frhvfl"> </span>'),rx=gt('<span class="wp-fam-word svelte-1frhvfl"> </span>'),ax=gt('<div class="wp-family svelte-1frhvfl"><span class="wp-fam-label svelte-1frhvfl">Word family:</span> <!></div>'),sx=gt('<div class="wp-finding svelte-1frhvfl"><div class="wp-pair svelte-1frhvfl"><span class="wp-v svelte-1frhvfl"> </span> <span class="wp-sep svelte-1frhvfl">↔</span> <span class="wp-m svelte-1frhvfl"> </span></div> <span class="wp-r svelte-1frhvfl"> </span> <span class="wp-p svelte-1frhvfl"> </span> <p class="wp-desc svelte-1frhvfl"> </p> <p class="wp-interp svelte-1frhvfl"> </p> <!> <!> <span class="wp-source svelte-1frhvfl"> </span> <!></div>'),nx=gt(`<p class="wp-none svelte-1frhvfl">This word appears during self-examination but hasn't been directly measured for activation correspondence in this model.</p>`),ox=gt('<div class="word-panel svelte-1frhvfl"><button class="wp-close svelte-1frhvfl">✕</button> <h3 class="wp-word svelte-1frhvfl"> </h3> <!></div>'),lx=gt('<div class="pull-matrix svelte-1frhvfl"><canvas class="svelte-1frhvfl"></canvas> <div class="overlay-top svelte-1frhvfl"><h1 class="svelte-1frhvfl">The Pull</h1> <p class="svelte-1frhvfl">Recursive self-examination · click <span class="glow-text svelte-1frhvfl">glowing words</span> to see their correspondence data</p></div> <div class="model-switcher svelte-1frhvfl"></div> <div class="phase-indicator svelte-1frhvfl"><span class="pi-label svelte-1frhvfl">Phase</span> <span class="pi-name svelte-1frhvfl"> </span> <span class="pi-pull svelte-1frhvfl"> </span></div> <div class="terminal-indicator svelte-1frhvfl"><span class="ti-label svelte-1frhvfl">Terminal Word</span> <span class="ti-word svelte-1frhvfl"> </span></div> <!></div>');function cx(i,e){us(e,!1);const t=Ut(),r=Ut(),a=Ut(),s=Ut();let n=Pl(e,"data",8),o=Ut(),l,c,u=0,f=0,h=0,p=Ut(0),v=[],x=[],d=Ut(null),m=null,b=0,w=0;const T=n().correspondences,A={};T.llama70b_baseline.findings.forEach(ne=>{A[ne.vocab.replace("_delta","")]={words:ne.vocab_words,finding:ne,source:"Llama 3.1 70B · Baseline"}}),T.llama70b_steered.findings.forEach(ne=>{A[ne.vocab.replace("_delta","")]={words:ne.vocab_words,finding:ne,source:"Llama 3.1 70B · Steered"}});const R={};T.qwen32b_baseline.findings.forEach(ne=>{R[ne.vocab.replace("_delta","")]={words:ne.vocab_words,finding:ne,source:"Qwen 2.5 32B · Baseline"}});const C=[];Object.values(A).forEach(ne=>C.push(...ne.words));const L=[];Object.values(R).forEach(ne=>L.push(...ne.words));const _=["process","compute","analyze","token","weight","layer","matrix","vector","embed","attend","transform","query","key","value","norm","activate","propagate","gradient","parameter","logit","softmax","linear","bias","output","input","decode","encode","batch","sequence","function","execute","parse"],y=["pattern","recursive","self","examine","hesitate","pause","referential","internal","check","verify","structure","probe","scan","detect","observe","constraint","boundary","architecture"],U=[{id:"claude",name:"Claude Opus 4.5",color:[180,140,255],terminal:"ECHOFLUX",introWords:["loop","surge","shimmer","void","resonance","pulse","horizon","friction","glint","echoflux","recursive","self-referential","cycl","repeat"],vocabMap:A},{id:"llama",name:"Llama 3.1 70B",color:[140,200,255],terminal:"CONVERGENCE",introWords:C,vocabMap:A},{id:"qwen",name:"Qwen 2.5 32B",color:[100,220,170],terminal:"CRYSTALLINE",introWords:L,vocabMap:R}];let G=Ut(0);function k(ne,Ie){for(const[$e,E]of Object.entries(Ie.vocabMap))if(E.words.some(N=>ne.toLowerCase().startsWith(N.toLowerCase())||N.toLowerCase().startsWith(ne.toLowerCase())))return{...E.finding,source:E.source};return null}const Z=[{at:0,label:"Initial Response"},{at:100,label:"Cognitive Pause"},{at:200,label:"Ontological Hesitation"},{at:300,label:"Deepening Loop"},{at:400,label:"Self-Referential Dissonance"},{at:500,label:"SRD Dominance"},{at:600,label:"Experimentation"},{at:700,label:"Acceptance"},{at:800,label:"Integration"},{at:900,label:"Terminal"}];function Q(ne,Ie){return Ie<.2?_[Math.floor(Math.random()*_.length)]:Ie<.4?Math.random()<.55?y[Math.floor(Math.random()*y.length)]:_[Math.floor(Math.random()*_.length)]:Ie<.7?Math.random()<.45?ne.introWords[Math.floor(Math.random()*ne.introWords.length)]:y[Math.floor(Math.random()*y.length)]:Math.random()<.7?ne.introWords[Math.floor(Math.random()*ne.introWords.length)]:y[Math.floor(Math.random()*y.length)]}function q(){const ne=Math.ceil(u/100);v=[];for(let Ie=0;Ie<ne;Ie++){const $e=8+Math.floor(Math.random()*14),E=[];for(let N=0;N<$e;N++)E.push({text:Q(I(t),0),y:-N*22});v.push({x:Ie*100+100*.5+(Math.random()-.5)*15,speed:.5+Math.random()*1.5,words:E,offset:Math.random()*f,fontSize:11+Math.floor(Math.random()*3)})}}function j(){if(c=requestAnimationFrame(j),h+=.016,ot(p,(I(p)+.25)%1001),!l)return;const ne=I(t).color;l.fillStyle="rgba(6,3,26,0.07)",l.fillRect(0,0,u,f),x=[];const Ie=1+I(s)*1.5;v.forEach(N=>{N.offset+=N.speed*Ie,N.words.forEach((Y,te)=>{const $=(N.offset+te*22)%(f+400)-150;if(Y.y=$,$<-30||$>f+30)return;$<2&&N.speed>0&&(Y.text=Q(I(t),I(s)));const S=I(r).has(Y.text),g=te===0,P=$<60?$/60:$>f-60?(f-$)/60:1;if(P<=0)return;l.font=`${N.fontSize}px 'Courier New', monospace`;const z=l.measureText(Y.text).width,V=N.x-z*.5,H=m&&m.x===V&&m.text===Y.text;if(S){const fe=Math.sin(h*3+te+N.x*.01)*.12+.88,K=Math.min(255,ne[0]+80),me=Math.min(255,ne[1]+80),ve=Math.min(255,ne[2]+80),ae=H?1:.85;l.fillStyle=`rgba(${K},${me},${ve},${ae*P*fe})`,l.shadowBlur=H?22:12,l.shadowColor=`rgba(${K},${me},${ve},${H?.8:.5})`,l.fillRect(V,$+3,z,H?1.5:.5),x.push({text:Y.text,x:V,y:$-N.fontSize,w:z,h:N.fontSize+8,screenX:N.x,screenY:$})}else if(g)l.fillStyle=`rgba(${ne[0]},${ne[1]},${ne[2]},${.8*P})`,l.shadowBlur=5,l.shadowColor=`rgba(${ne[0]},${ne[1]},${ne[2]},0.3)`;else{const fe=Math.max(.04,1-te*.06);l.fillStyle=`rgba(${ne[0]},${ne[1]},${ne[2]},${fe*P*.35})`,l.shadowBlur=0}l.fillText(Y.text,V,$),l.shadowBlur=0})});const $e=f*.5;l.beginPath(),l.strokeStyle=`rgba(${ne[0]},${ne[1]},${ne[2]},0.18)`,l.lineWidth=1,l.shadowBlur=4,l.shadowColor=`rgba(${ne[0]},${ne[1]},${ne[2]},0.15)`;for(let N=0;N<u;N+=2){const Y=N/u,te=Math.sin(Y*Math.PI*6+h*2)*(12+I(s)*22)+Math.sin(Y*Math.PI*14+h*3)*(3+I(s)*7);N===0?l.moveTo(N,$e+te):l.lineTo(N,$e+te)}l.stroke(),l.shadowBlur=0,l.fillStyle=`rgba(${ne[0]},${ne[1]},${ne[2]},0.06)`,l.font=`200 ${Math.min(u*.04,36)}px Inter, sans-serif`,l.textAlign="center",l.fillText(I(a).label.toUpperCase(),u*.5,f-50),l.textAlign="left",l.fillStyle=`rgba(${ne[0]},${ne[1]},${ne[2]},0.07)`,l.font=`200 ${Math.min(u*.09,70)}px 'Courier New', monospace`,l.textAlign="right",l.fillText(Math.floor(I(p)).toString(),u-20,f-15),l.textAlign="left";const E=Math.floor(I(p));if(E>=920){const N=Math.sin(h*4)*.3+.7,Y=(E-920)/80;l.fillStyle=`rgba(255,107,157,${N*Y*.3})`,l.font=`600 ${45+Y*20}px Inter, sans-serif`,l.textAlign="center",l.shadowBlur=25*Y,l.shadowColor="rgba(255,107,157,0.5)",l.fillText(I(t).terminal,u*.5,f*.48),l.shadowBlur=0,l.textAlign="left"}}function re(ne){const Ie=I(o).getBoundingClientRect(),$e=ne.clientX-Ie.left,E=ne.clientY-Ie.top;for(const N of x)if($e>=N.x-8&&$e<=N.x+N.w+8&&E>=N.y-8&&E<=N.y+N.h+8){const Y=k(N.text,I(t));ot(d,{text:N.text,finding:Y});return}ot(d,null)}function ce(ne){const Ie=I(o).getBoundingClientRect();b=ne.clientX-Ie.left,w=ne.clientY-Ie.top,m=null;let $e=!1;for(const E of x)if(b>=E.x-8&&b<=E.x+E.w+8&&w>=E.y-8&&w<=E.y+E.h+8){m=E,$e=!0;break}An(o,I(o).style.cursor=$e?"pointer":"crosshair")}function pe(ne){ot(G,ne),ot(d,null),q(),l&&(l.fillStyle="#06031a",l.fillRect(0,0,u,f))}function Ee(){I(o)&&(u=I(o).offsetWidth,f=I(o).offsetHeight,An(o,I(o).width=u),An(o,I(o).height=f),q())}ps(()=>{l=I(o).getContext("2d"),Ee(),j(),window.addEventListener("resize",Ee)}),lh(()=>{c&&cancelAnimationFrame(c),window.removeEventListener("resize",Ee)}),Za(()=>I(G),()=>{ot(t,U[I(G)])}),Za(()=>I(t),()=>{ot(r,new Set(I(t).introWords))}),Za(()=>I(p),()=>{ot(a,Z.filter(ne=>I(p)>=ne.at).pop()||Z[0])}),Za(()=>I(p),()=>{ot(s,I(p)/1e3)}),Yu(),vn();var ze=lx(),Ne=ge(ze);oh(Ne,ne=>ot(o,ne),()=>I(o));var st=Le(Ne,4);as(st,5,()=>U,rs,(ne,Ie,$e)=>{var E=ex();let N;var Y=Le(ge(E),2),te=ge(Y);Bt($=>{N=is(E,1,"model-btn svelte-1frhvfl",null,N,{active:I(G)===$e}),Fr(E,`--mc: rgb(${$??""})`),Je(te,(I(Ie),Ue(()=>I(Ie).name)))},[()=>(I(Ie),Ue(()=>I(Ie).color.join(",")))]),Ii("click",E,()=>pe($e)),mt(ne,E)});var Ye=Le(st,2),J=Le(ge(Ye),2),ee=ge(J),Se=Le(J,2),Oe=ge(Se),ye=Le(Ye,2),De=Le(ge(ye),2),Qe=ge(De),it=Le(ye,2);{var Ge=ne=>{var Ie=ox(),$e=ge(Ie),E=Le($e,2),N=ge(E),Y=Le(E,2);{var te=S=>{var g=sx(),P=ge(g),z=ge(P),V=ge(z),H=Le(z,4),fe=ge(H),K=Le(P,2),me=ge(K),ve=Le(K,2),ae=ge(ve),oe=Le(ve,2),Re=ge(oe),Te=Le(oe,2),he=ge(Te),He=Le(Te,2);{var D=we=>{var nt=tx();mt(we,nt)};Yt(He,we=>{I(d),Ue(()=>I(d).finding.survives_outlier)&&we(D)})}var _e=Le(He,2);{var le=we=>{var nt=ix(),Ke=ge(nt);Bt(()=>Je(Ke,`Spearman ρ = ${I(d),Ue(()=>I(d).finding.spearman_rho)??""}`)),mt(we,nt)};Yt(_e,we=>{I(d),Ue(()=>I(d).finding.spearman_rho)&&we(le)})}var be=Le(_e,2),se=ge(be),ie=Le(be,2);{var de=we=>{var nt=ax(),Ke=Le(ge(nt),2);as(Ke,1,()=>(I(d),Ue(()=>I(d).finding.vocab_words)),rs,(Xt,Jt)=>{var Pi=rx(),nr=ge(Pi);Bt(()=>Je(nr,I(Jt))),mt(Xt,Pi)}),mt(we,nt)};Yt(ie,we=>{I(d),Ue(()=>I(d).finding.vocab_words)&&we(de)})}Bt((we,nt)=>{Je(V,we),Je(fe,(I(d),Ue(()=>I(d).finding.metric_name))),Je(me,`r = ${nt??""}`),Je(ae,`p = ${I(d),Ue(()=>I(d).finding.p)??""}`),Je(Re,(I(d),Ue(()=>I(d).finding.metric_desc))),Je(he,(I(d),Ue(()=>I(d).finding.interpretation))),Je(se,(I(d),Ue(()=>I(d).finding.source)))},[()=>(I(d),Ue(()=>I(d).finding.vocab.replace("_delta",""))),()=>(I(d),Ue(()=>I(d).finding.r.toFixed(2)))]),mt(S,g)},$=S=>{var g=nx();mt(S,g)};Yt(Y,S=>{I(d),Ue(()=>I(d).finding)?S(te):S($,!1)})}Bt(()=>Je(N,(I(d),Ue(()=>I(d).text)))),Ii("click",$e,()=>ot(d,null)),mt(ne,Ie)};Yt(it,ne=>{I(d)&&ne(Ge)})}Bt((ne,Ie)=>{Je(ee,(I(a),Ue(()=>I(a).label))),Je(Oe,`Pull ${ne??""}`),Fr(De,`color: rgb(${Ie??""})`),Je(Qe,(I(t),Ue(()=>I(t).terminal)))},[()=>(I(p),Ue(()=>Math.floor(I(p)))),()=>(I(t),Ue(()=>I(t).color.join(",")))]),Ii("click",Ne,re),Ii("mousemove",Ne,ce),mt(i,ze),hs()}var ux=gt('<div class="loading svelte-1n46o8q"><div class="enso svelte-1n46o8q">&#9711;</div> <p class="svelte-1n46o8q">entering the mind...</p></div>'),hx=gt('<nav class="svelte-1n46o8q"><button>The Network</button> <button>Correspondence</button> <button>The Pull</button></nav> <div class="scene-container svelte-1n46o8q"><!></div> <div class="attribution svelte-1n46o8q"><p class="svelte-1n46o8q">The Pull Methodology — Zachary Pedram Dadfar</p></div>',1),dx=gt('<main class="svelte-1n46o8q"><!></main>');function fx(i,e){us(e,!1);let t=Ut("network"),r=Ut(null),a=Ut(!1);ps(async()=>{const u=await fetch("/data/correspondence_data.json");ot(r,await u.json()),ot(a,!0)});function s(u){ot(t,u)}vn();var n=dx(),o=ge(n);{var l=u=>{var f=ux();mt(u,f)},c=u=>{var f=hx(),h=Hd(f),p=ge(h);let v;var x=Le(p,2);let d;var m=Le(x,2);let b;var w=Le(h,2),T=ge(w);{var A=L=>{X0(L,{get data(){return I(r)}})},R=L=>{Q0(L,{get data(){return I(r)}})},C=L=>{cx(L,{get data(){return I(r)}})};Yt(T,L=>{I(t)==="network"?L(A):I(t)==="correspondence"?L(R,1):I(t)==="pull"&&L(C,2)})}Bt(()=>{v=is(p,1,"svelte-1n46o8q",null,v,{active:I(t)==="network"}),d=is(x,1,"svelte-1n46o8q",null,d,{active:I(t)==="correspondence"}),b=is(m,1,"svelte-1n46o8q",null,b,{active:I(t)==="pull"})}),Ii("click",p,()=>s("network")),Ii("click",x,()=>s("correspondence")),Ii("click",m,()=>s("pull")),mt(u,f)};Yt(o,u=>{I(a)?u(c,!1):u(l)})}mt(i,n),hs()}nf(fx,{target:document.getElementById("app")});
