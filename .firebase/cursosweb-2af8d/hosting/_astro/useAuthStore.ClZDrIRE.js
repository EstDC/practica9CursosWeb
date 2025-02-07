import{R as _}from"./index.D15Q2Owl.js";const H=t=>{let r;const e=new Set,o=(i,h)=>{const g=typeof i=="function"?i(r):i;if(!Object.is(g,r)){const S=r;r=h??(typeof g!="object"||g===null)?g:Object.assign({},r,g),e.forEach(f=>f(r,S))}},a=()=>r,c={setState:o,getState:a,getInitialState:()=>d,subscribe:i=>(e.add(i),()=>e.delete(i))},d=r=t(o,a,c);return c},R=t=>t?H(t):H,j=t=>t;function w(t,r=j){const e=_.useSyncExternalStore(t.subscribe,()=>r(t.getState()),()=>r(t.getInitialState()));return _.useDebugValue(e),e}const E=t=>{const r=R(t),e=o=>w(r,o);return Object.assign(e,r),e},x=t=>E(t);function F(t,r){let e;try{e=t()}catch{return}return{getItem:a=>{var s;const m=d=>d===null?null:JSON.parse(d,void 0),c=(s=e.getItem(a))!=null?s:null;return c instanceof Promise?c.then(m):m(c)},setItem:(a,s)=>e.setItem(a,JSON.stringify(s,void 0)),removeItem:a=>e.removeItem(a)}}const b=t=>r=>{try{const e=t(r);return e instanceof Promise?e:{then(o){return b(o)(e)},catch(o){return this}}}catch(e){return{then(o){return this},catch(o){return b(o)(e)}}}},J=(t,r)=>(e,o,a)=>{let s={storage:F(()=>localStorage),partialize:n=>n,version:0,merge:(n,v)=>({...v,...n}),...r},m=!1;const c=new Set,d=new Set;let i=s.storage;if(!i)return t((...n)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),e(...n)},o,a);const h=()=>{const n=s.partialize({...o()});return i.setItem(s.name,{state:n,version:s.version})},g=a.setState;a.setState=(n,v)=>{g(n,v),h()};const S=t((...n)=>{e(...n),h()},o,a);a.getInitialState=()=>S;let f;const I=()=>{var n,v;if(!i)return;m=!1,c.forEach(u=>{var l;return u((l=o())!=null?l:S)});const y=((v=s.onRehydrateStorage)==null?void 0:v.call(s,(n=o())!=null?n:S))||void 0;return b(i.getItem.bind(i))(s.name).then(u=>{if(u)if(typeof u.version=="number"&&u.version!==s.version){if(s.migrate){const l=s.migrate(u.state,u.version);return l instanceof Promise?l.then(p=>[!0,p]):[!0,l]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,u.state];return[!1,void 0]}).then(u=>{var l;const[p,O]=u;if(f=s.merge(O,(l=o())!=null?l:S),e(f,!0),p)return h()}).then(()=>{y?.(f,void 0),f=o(),m=!0,d.forEach(u=>u(f))}).catch(u=>{y?.(void 0,u)})};return a.persist={setOptions:n=>{s={...s,...n},n.storage&&(i=n.storage)},clearStorage:()=>{i?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>I(),hasHydrated:()=>m,onHydrate:n=>(c.add(n),()=>{c.delete(n)}),onFinishHydration:n=>(d.add(n),()=>{d.delete(n)})},s.skipHydration||I(),f||S},N=J,k=x(N(t=>({user:null,login:r=>t({user:r}),logout:()=>t({user:null}),updateUser:r=>t({user:r})}),{name:"auth-store",getStorage:()=>localStorage}));export{k as u};
