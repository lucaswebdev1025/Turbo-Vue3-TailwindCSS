import{V as a,o as e,f as s,u as r,S as t,c as o,H as n,I as i,ag as m,J as l,j as c,l as d,t as u,aJ as p,a1 as f}from"./vendor.36c281f3.js";import{u as j}from"./useSuspense.29183c13.js";import{_ as b}from"./Link.4e9a6f0f.js";import{c as v,s as _}from"./useAvatar.7737e550.js";import{$ as w}from"./drop.cce90c26.js";import{b as y}from"./index.8fc70fb6.js";import{a as h}from"./why.059bca86.js";import{u as g}from"./useModalForm.1c23c14e.js";import{_ as $}from"./Input.b03a61c6.js";import{w as D}from"./process.a2988830.js";import{_ as k}from"./Table.ec42ea9a.js";import{_ as B}from"./Office.55bfbecd.js";import{_ as C}from"./Button.4b020695.js";import"./Spinner.2e0ab286.js";import"./useConfirmDialog.ba73d887.js";import"./Dialog.b36041f9.js";import"./headlessui.esm.b519f347.js";import"./FormActions.47218f8a.js";import"./ExclamationCircleIcon.22c0ccb9.js";import"./Dropdown.df5c89e3.js";import"./Th.32cd08d3.js";import"./useIntersectionObserver.7ad3d6a4.js";import"./Avatar.4eeca634.js";import"./NavBar.2f63176e.js";import"./departments.4f88a00d.js";import"./meta.48f5205a.js";const I={async setup(t){let o,n;const{why:i,atMounted:m,v$:l}=F();return[o,n]=a((()=>m())),o=await o,n(),(a,t)=>{var o;return e(),s($,{label:"Название",modelValue:r(i).name,"onUpdate:modelValue":t[0]||(t[0]=a=>r(i).name=a),required:!0,error:null==(o=r(l).name.$errors[0])?void 0:o.$message,onBlured:r(l).name.$touch},null,8,["modelValue","error","onBlured"])}}},{add:M}=h,S=y();let V,x;const A=async()=>{if(!(await x.value.$validate()))return;x.value.$reset();const{message:a,success:e,data:s}=await _.appeal_reason(V);try{return{message:a,success:e}}finally{e&&(M(s.appeal_reason),S.success(a))}},E=async()=>{const{id:a}=V;if(a){((a={})=>{V.id=a.id,V.name=a.name})(await w.appeal_reason(a)||{})}};function F(){return{render:(...a)=>{const e=t();e.run((()=>{const s=o((()=>!!V.id)),{render:r}=g({title:o((()=>v.modal[s.value?"update":"create"].appeal_reason)),RawForm:I,atSubmit:A,atClose:()=>e.stop(),atOpen:a=>{V=n({id:null!=a?a:"",name:""}),x=i(D(),V,{$lazy:!0})}});r(...a),m((()=>{V=void 0,x=void 0}))}))},why:V,atMounted:E,v$:x}}const O={async setup(t){let o,n;const{state:i,drop:m,reset:p,fill:f}=h,{render:j}=F(),v=[{label:"Название",key:"name"},{label:"Дата создания",key:"created_at"}],_=async(a=!1)=>{a&&p(),await f()};return[o,n]=a((()=>_(!0))),o=await o,n(),(a,t)=>(e(),s(k,{onBottomTouched:t[0]||(t[0]=()=>_()),fields:v,items:r(i).raw,onDelete:r(m),onEdit:r(j)},{"td-name":l((({value:a,item:{id:e,name:s}})=>[c(b,{href:{name:"Processes",params:{why:e,appeal_reason:s}}},{default:l((()=>[d(u(a),1)])),_:2},1032,["href"])])),"td-created_at":l((({value:a})=>{var e;return[d(u(null!=(e=null==a?void 0:a.split(" ")[0])?e:"_"),1)]})),_:1},8,["items","onDelete","onEdit"]))}},T=d("Шаблоны диагностических карт "),J=d("Создать "),q={setup(a){const{render:t}=F(),o=j(O);return(a,n)=>(e(),s(B,{title:"Причины обращения"},{actions:l((()=>[c(C,{type:"secondary",link:{name:"DiagnosticCard"}},{default:l((()=>[c(r(p),{class:"w-5 h-5 mr-1"}),T])),_:1}),c(C,{color:"blue",onClick:n[0]||(n[0]=()=>r(t)())},{default:l((()=>[c(r(f),{class:"w-5 h-5 mr-1"}),J])),_:1})])),default:l((()=>[c(r(o),{loadingMsg:"Получение причин обращения..."})])),_:1}))}};export{q as default};