var ye=Object.defineProperty;var Te=e=>ye(e,"__esModule",{value:!0});var Fe=(e,t)=>{Te(e);for(var n in t)ye(e,n,{get:t[n],enumerable:!0})};var fe={};Fe(fe,{MODE:()=>Ne,NODE_ENV:()=>Re,SSR:()=>Ce});var Ne="production",Re="production",Ce=!1;function M(){}function ke(e){return e()}function ve(){return Object.create(null)}function oe(e){e.forEach(ke)}function Oe(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function De(e){return Object.keys(e).length===0}function X(e,...t){if(e==null)return M;let n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function se(e,t,n){e.$$.on_destroy.push(X(t,n))}function ie(e){return e==null?"":e}function de(e,t,n=t){return e.set(n),t}function s(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function v(){return m(" ")}function Z(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function j(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ie(e){return Array.from(e.childNodes)}function E(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}var ue;function ce(e){ue=e}function Ye(){if(!ue)throw new Error("Function called outside component initialization");return ue}function $(e){Ye().$$.on_mount.push(e)}var ee=[],je=[],le=[],Pe=[],Le=Promise.resolve(),me=!1;function Ue(){me||(me=!0,Le.then(Se))}function pe(e){le.push(e)}var _e=!1,be=new Set;function Se(){if(!_e){_e=!0;do{for(let e=0;e<ee.length;e+=1){let t=ee[e];ce(t),Ve(t.$$)}for(ce(null),ee.length=0;je.length;)je.pop()();for(let e=0;e<le.length;e+=1){let t=le[e];be.has(t)||(be.add(t),t())}le.length=0}while(ee.length);for(;Pe.length;)Pe.pop()();me=!1,_e=!1,be.clear()}}function Ve(e){if(e.fragment!==null){e.update(),oe(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pe)}}var ae=new Set,ze;function L(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function G(e,t,n,o){if(e&&e.o){if(ae.has(e))return;ae.add(e),ze.c.push(()=>{ae.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function H(e){e&&e.c()}function U(e,t,n){let{fragment:o,on_mount:l,on_destroy:c,after_update:p}=e.$$;o&&o.m(t,n),pe(()=>{let u=l.map(ke).filter(Oe);c?c.push(...u):oe(u),e.$$.on_mount=[]}),p.forEach(pe)}function V(e,t){let n=e.$$;n.fragment!==null&&(oe(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(e,t){e.$$.dirty[0]===-1&&(ee.push(e),Ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,o,l,c,p=[-1]){let u=ue;ce(e);let f=t.props||{},r=e.$$={fragment:null,ctx:null,props:c,update:M,not_equal:l,bound:ve(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:ve(),dirty:p,skip_bound:!1},b=!1;if(r.ctx=n?n(e,f,(a,P,...T)=>{let S=T.length?T[0]:P;return r.ctx&&l(r.ctx[a],r.ctx[a]=S)&&(!r.skip_bound&&r.bound[a]&&r.bound[a](S),b&&Ge(e,a)),P}):[],r.update(),b=!0,oe(r.before_update),r.fragment=o?o(r.ctx):!1,t.target){if(t.hydrate){let a=Ie(t.target);r.fragment&&r.fragment.l(a),a.forEach(Y)}else r.fragment&&r.fragment.c();t.intro&&L(e.$$.fragment),U(e,t.target,t.anchor),Se()}ce(u)}var K=class{$destroy(){V(this,1),this.$destroy=M}$on(t,n){let o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{let l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(t){this.$$set&&!De(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var W=[];function C(e,t=M){let n,o=[];function l(u){if(I(e,u)&&(e=u,n)){let f=!W.length;for(let r=0;r<o.length;r+=1){let b=o[r];b[1](),W.push(b,e)}if(f){for(let r=0;r<W.length;r+=2)W[r][0](W[r+1]);W.length=0}}}function c(u){l(u(e))}function p(u,f=M){let r=[u,f];return o.push(r),o.length===1&&(n=t(l)||M),u(e),()=>{let b=o.indexOf(r);b!==-1&&o.splice(b,1),o.length===0&&(n(),n=null)}}return{set:l,update:c,subscribe:p}}var J=C(20),ge=C(0);var we=C(0),he=C(0),xe=C(0),qe=C(0);var He=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),Ke=e=>He.format(e),ne=(e,t)=>t>1?`${e}s`:e,O=Ke;function We(e){let t,n,o,l,c,p,u,f,r,b,a,P,T,S=(e[4]>1?"buildings":"building")+"",d,A,F=O(e[3])+"",k,N,h,R,w,D,q,i;return{c(){t=g("div"),n=g("button"),o=m("Buy "),l=m(e[0]),p=v(),u=g("div"),f=g("h3"),r=m(e[0]),b=v(),a=g("p"),P=m(e[4]),T=v(),d=m(S),A=m(" bought, next one cost "),k=m(F),N=v(),h=g("p"),R=m("You are currently generating "),w=m(e[6]),D=m(" per tick"),n.disabled=e[5],j(n,"class",c=""+(ie(e[5]?"btn cantBuy":"btn")+" svelte-18fh0d9")),j(u,"class","button-flag svelte-18fh0d9"),j(t,"class","btn-wrapper svelte-18fh0d9")},m(y,B){z(y,t,B),s(t,n),s(n,o),s(n,l),s(t,p),s(t,u),s(u,f),s(f,r),s(u,b),s(u,a),s(a,P),s(a,T),s(a,d),s(a,A),s(a,k),s(u,N),s(u,h),s(h,R),s(h,w),s(h,D),q||(i=Z(n,"click",e[7]),q=!0)},p(y,[B]){B&1&&E(l,y[0]),B&32&&(n.disabled=y[5]),B&32&&c!==(c=""+(ie(y[5]?"btn cantBuy":"btn")+" svelte-18fh0d9"))&&j(n,"class",c),B&1&&E(r,y[0]),B&16&&E(P,y[4]),B&16&&S!==(S=(y[4]>1?"buildings":"building")+"")&&E(d,S),B&8&&F!==(F=O(y[3])+"")&&E(k,F),B&64&&E(w,y[6])},i:M,o:M,d(y){y&&Y(t),q=!1,i()}}}function Je(e,t,n){let o,l,c,p,u,f,r=M,b=()=>(r(),r=X(d,i=>n(4,f=i)),d),a,P=M,T=()=>(P(),P=X(N,i=>n(14,a=i)),N);e.$$.on_destroy.push(()=>r()),e.$$.on_destroy.push(()=>P());let{name:S}=t,{buildings:d}=t;b();let{costMultiplier:A=5}=t,{costPerBuildingSum:F=1}=t,{currencyProduced:k=J}=t,{currencyRequired:N=J}=t;T();let{tickSpeed:h=1e3}=t,{buildingProduction:R=1}=t,{formatProduction:w=O}=t,D=()=>{a>=o&&(N.update(i=>i-o),d.update(i=>i+1))},q=()=>{k.update(i=>i+c),setTimeout(q,h)};return $(()=>{q()}),e.$$set=i=>{"name"in i&&n(0,S=i.name),"buildings"in i&&b(n(1,d=i.buildings)),"costMultiplier"in i&&n(8,A=i.costMultiplier),"costPerBuildingSum"in i&&n(9,F=i.costPerBuildingSum),"currencyProduced"in i&&n(10,k=i.currencyProduced),"currencyRequired"in i&&T(n(2,N=i.currencyRequired)),"tickSpeed"in i&&n(11,h=i.tickSpeed),"buildingProduction"in i&&n(12,R=i.buildingProduction),"formatProduction"in i&&n(13,w=i.formatProduction)},e.$$.update=()=>{if(e.$$.dirty&784){e:n(3,o=(f+F)*A)}if(e.$$.dirty&16392){e:n(5,l=o>a)}if(e.$$.dirty&4112){e:n(15,c=f*R)}if(e.$$.dirty&1024){e:p=O(k)}if(e.$$.dirty&40960){e:n(6,u=w(c))}},[S,d,N,o,f,l,u,D,A,F,k,h,R,w,a,c]}var Be=class extends K{constructor(t){super();te(this,t,Je,We,I,{name:0,buildings:1,costMultiplier:8,costPerBuildingSum:9,currencyProduced:10,currencyRequired:2,tickSpeed:11,buildingProduction:12,formatProduction:13})}},re=Be;function Me(e){let t,n,o,l,c=ne("corpse",e[2])+"",p;return{c(){t=g("p"),n=m("You currently have: "),o=m(e[2]),l=v(),p=m(c),j(t,"class","svelte-r5o1jd")},m(u,f){z(u,t,f),s(t,n),s(t,o),s(t,l),s(t,p)},p(u,f){f&4&&E(o,u[2]),f&4&&c!==(c=ne("corpse",u[2])+"")&&E(p,c)},d(u){u&&Y(t)}}}function Qe(e){let t,n,o,l,c,p,u,f,r,b,a=O(e[1])+"",P,T,S,d,A,F,k,N,h,R,w,D,q,i,y,B,x=e[2]>0&&Me(e);return k=new re({props:{name:"Hot Dog Stand",buildings:we}}),h=new re({props:{name:"Taco Truck",buildings:he,buildingProduction:"2",costMultiplier:"10"}}),w=new re({props:{name:"Mortuary",buildings:xe,currencyProduced:ge,costMultiplier:"15",formatProduction:e[4]}}),q=new re({props:{name:"Taco Franchise",buildings:qe,currencyProduced:he,costMultiplier:"18",costPerBuildingSum:"5",formatProduction:e[5]}}),{c(){t=g("div"),n=g("header"),o=g("p"),l=m("Page has been open for "),c=g("code"),p=m(e[0]),u=m(" seconds."),f=v(),r=g("p"),b=m("You currently have: "),P=m(a),T=v(),x&&x.c(),S=v(),d=g("div"),A=g("button"),A.textContent="Add money",F=v(),H(k.$$.fragment),N=v(),H(h.$$.fragment),R=v(),H(w.$$.fragment),D=v(),H(q.$$.fragment),j(c,"class","svelte-r5o1jd"),j(o,"class","svelte-r5o1jd"),j(r,"class","svelte-r5o1jd"),j(A,"class","btn svelte-r5o1jd"),j(d,"class","container svelte-r5o1jd"),j(n,"class","App-header svelte-r5o1jd"),j(t,"class","App svelte-r5o1jd")},m(_,Q){z(_,t,Q),s(t,n),s(n,o),s(o,l),s(o,c),s(c,p),s(o,u),s(n,f),s(n,r),s(r,b),s(r,P),s(n,T),x&&x.m(n,null),s(n,S),s(n,d),s(d,A),s(d,F),U(k,d,null),s(d,N),U(h,d,null),s(d,R),U(w,d,null),s(d,D),U(q,d,null),i=!0,y||(B=Z(A,"click",e[3]),y=!0)},p(_,[Q]){(!i||Q&1)&&E(p,_[0]),(!i||Q&2)&&a!==(a=O(_[1])+"")&&E(P,a),_[2]>0?x?x.p(_,Q):(x=Me(_),x.c(),x.m(n,S)):x&&(x.d(1),x=null)},i(_){i||(L(k.$$.fragment,_),L(h.$$.fragment,_),L(w.$$.fragment,_),L(q.$$.fragment,_),i=!0)},o(_){G(k.$$.fragment,_),G(h.$$.fragment,_),G(w.$$.fragment,_),G(q.$$.fragment,_),i=!1},d(_){_&&Y(t),x&&x.d(),V(k),V(h),V(w),V(q),y=!1,B()}}}function Xe(e,t,n){let o,l;se(e,J,r=>n(1,o=r)),se(e,ge,r=>n(2,l=r));let c=0,p=()=>de(J,o+=1,o);return $(()=>{let r=setInterval(()=>n(0,c++,c),1e3);return()=>{clearInterval(r)}}),[c,o,l,p,r=>`${r} ${ne("corpse",r)}`,r=>`${r} ${ne("taco truck",r)}`]}var Ee=class extends K{constructor(t){super();te(this,t,Xe,Qe,I,{})}},Ae=Ee;var Ze={};Ze.env=fe;var $e=new Ae({target:document.body}),et=$e;export{et as default};
