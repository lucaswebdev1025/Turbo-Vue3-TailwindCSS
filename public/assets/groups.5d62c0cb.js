var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,t=(a,r,n)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n;import{$ as i,_ as s}from"./drop.cce90c26.js";import{c}from"./index.8fc70fb6.js";import{H as l,a as d,c as f}from"./vendor.36c281f3.js";const g=c("crud finances"),u=l({raw:[],pages:100,page:1,pending:!1});var w={state:d(u),load:async()=>{g&&(u.raw=await i.finance_groups())},addGroup:e=>{const a=u.raw.findIndex((({id:a})=>(null==e?void 0:e.id)==a));a<0?u.raw.push(e):u.raw[a]=e},fill:async e=>{var s,c,l;if(u.pending)return;if(!g)return;if(u.page>u.pages)return;u.pending=!0;const d=await i((f=((e,a)=>{for(var r in a||(a={}))o.call(a,r)&&t(e,r,a[r]);if(n)for(var r of n(a))p.call(a,r)&&t(e,r,a[r]);return e})({key:"finance_groups"},e),w={page:u.page},a(f,r(w))));var f,w;u.raw=u.raw.concat(null!=(s=null==d?void 0:d.finance_groups)?s:[]),u.pages=null!=(l=null==(c=null==d?void 0:d.meta)?void 0:c.last_page)?l:100,u.page+=1,u.pending=!1},drop:async e=>s.finance_group(e,(e=>{u.raw.deleteById(e)})),reset:()=>{u.raw=[],u.pages=100,u.page=1},options:f((()=>u.raw.map((({id:e,name:a})=>({value:e,label:a})))))};export{w as s};