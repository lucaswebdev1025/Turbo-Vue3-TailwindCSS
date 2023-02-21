import{o as e,d as t,i as s,e as r,t as l,h as a,n as d,c as i,u as o,W as p,X as u,f as y,J as m,l as n}from"./vendor.36c281f3.js";import{_ as c}from"./Badge.4bd69676.js";const g={class:"flex items-center justify-between px-4 py-5 sm:px-6"},x={key:0},b={key:0,class:"text-lg leading-6 font-medium text-gray-900"},f={key:0,class:"mt-1 max-w-2xl text-sm text-gray-500"},v={props:{title:{type:String,required:!1},subtitle:{type:String,required:!1},type:{type:String,required:!1,default:"rows"},bordered:{type:Boolean,required:!1,default:!0}},setup(i){const o=i,p=["px-4"];return o.bordered&&p.push("border-t border-gray-200 py-5"),"columns"===o.type?p.push("sm:px-6"):p.push("sm:p-0"),(i,u)=>(e(),t("div",{class:d(["bg-white overflow-hidden sm:rounded-lg",{shadow:o.bordered}])},[s(i.$slots,"header",{},(()=>[r("header",g,[o.title||o.subtitle?(e(),t("div",x,[s(i.$slots,"title",{},(()=>[o.title?(e(),t("h3",b,l(o.title),1)):a("",!0)])),s(i.$slots,"subtitle",{},(()=>[o.subtitle?(e(),t("p",f,l(o.subtitle),1)):a("",!0)]))])):a("",!0),s(i.$slots,"right-title")])])),r("div",{class:d(p)},[s(i.$slots,"default")])],2))}},h={key:0,class:"text-sm font-medium text-gray-500"},$={key:0,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},q={key:0},k={key:1},S={key:0,class:"mt-1 text-sm text-gray-500 sm:mt-0 sm:col-span-3"},w={props:{label:{type:String,required:!1},value:{type:[String,Array],required:!1},text:{type:String,required:!1},type:{type:String,required:!1,default:"rows"},cols:{type:String,required:!1,default:"1"}},setup(r){const g=r,x=i((()=>Array.isArray(g.value)));return(r,i)=>(e(),t("div",{class:d(["columns"===g.type?`sm:col-span-${g.cols}`:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6","col-span-1"])},[s(r.$slots,"label",{},(()=>[g.label?(e(),t("div",h,l(g.label),1)):a("",!0)])),s(r.$slots,"default",{},(()=>[g.value?(e(),t("div",$,[o(x)?(e(),t("span",q,[(e(!0),t(p,null,u(g.value,(t=>(e(),y(c,{point:!0,color:"blue",key:t,style:{}},{default:m((()=>[n(l(t),1)])),_:2},1024)))),128))])):(e(),t("span",k,l(g.value),1))])):a("",!0)])),s(r.$slots,"text",{},(()=>[g.text?(e(),t("span",S,l(g.text),1)):a("",!0)]))],2))}},j={props:{type:{type:String,required:!1,default:"rows"},cols:{type:Number,default:2}},setup(r){const l=r,a=[];return"columns"===l.type?a.push("grid grid-cols-1 gap-x-4 gap-y-8",`sm:grid-cols-${l.cols}`):a.push("sm:divide-y sm:divide-gray-200"),(r,l)=>{var i;return e(),t("dl",{class:d(null!=(i=r.$attrs.class)?i:a)},[s(r.$slots,"default")],2)}}};export{j as _,v as a,w as b};