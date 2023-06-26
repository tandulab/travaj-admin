import{o as P,F as $,c as V,a as I,m as p,x as W,_ as U,r as w,p as j,b as i,e as d,f as l,w as s,h as C,i as m,s as E,q as T,g as f,n as G,v as H}from"../index29412.js";import{u as x}from"./order29412.js";import{g as J,e as Q,t as X,d as Y,i as Z}from"./helpers29412.js";import{u as D}from"./sidebar29412.js";import{u as ee}from"./user29412.js";import{u as oe}from"./workarea29412.js";const te={setup(){P(()=>{y.value=!0,e.value={first:0,rows:_.value.rows,sortField:null,sortOrder:null,filters:b.value},$.register("myfilter",(t,v)=>t===v),F()});const h=x(),n=D(),u=ee(),o=oe(),k=V(()=>h.responseOrders),S=V(()=>u.allUsers),g=V(()=>o.allWorkarea),c=I(),_=p(),M=p(),O=p([{name:"Carta di credito",value:"credit_card"},{name:"Satispay",value:"Satispay"},{name:"Stripe",value:"stripe"}]),b=p({coupon_code:{value:"",matchMode:"eq"},user_id:{value:"",matchMode:"eq"},typology:{value:"",matchMode:"eq"},workarea_id:{value:"",matchMode:"eq"},created_at:{value:"",matchMode:"like"},payment_method:{value:"",matchMode:"eq"},invoice_number:{value:"",matchMode:"eq"}}),y=p(!0),e=p(),r=p(0),a=p([{label:"My Filter",value:"myfilter"}]);function F(){y.value=!0;let t=new Map;t=J(b,t),t.set("page",e.value.page+1),t.set("per_page",e.value.rows),e.value.sortField&&(e.value.sortOrder==1?t.set("sorted_by",e.value.sortField+"_asc"):t.set("sorted_by",e.value.sortField+"_desc")),setTimeout(()=>{K(t)},Math.random()*1e3+250)}const A=async function(){const t=new Map;await u.fetchAllUsers(t).catch(v=>{})},K=async function(t){await h.fetchAllOrders(t).then(()=>{y.value=!1}).catch(v=>{y.value=!1,Q(c,v)})},N=t=>{e.value=t,F()},q=t=>{e.value=t,F()},R=()=>{e.value.page=0,e.value.filters=b.value,F()},z=function(t){n.setDetailType("order",!1,"Dettaglio ordine",t.id),n.updateSidebar(!0)},B=async function(){await o.fetchAllWorkarea()},L=function(t){var v;return(v=t==null?void 0:t.workarea)!=null&&v.typology?t.workarea.typology:""};return W(async()=>{A(),B()}),{dt:_,responseOrders:k,filters:b,loading:y,totalRecords:r,lazyParams:e,matchModes:a,currentOrder:M,orderStore:h,users:S,workareas:g,payment_methods:O,onPage:N,onSort:q,onFilter:R,showSidebar:z,loadLazyData:F,translateTypology:X,getRowClass:L,formatDataFromUnixTimestamps:Y,formatNumber:Z}},components:{}};const ae={class:"order"},re={key:0},le={key:0},se=f("br",null,null,-1),ne={key:1},ie=f("div",{class:"flex justify-content-end w-full"},"Totale",-1),de={class:"flex justify-content-end"},ce={key:0},ue={key:1},pe={key:0},me={key:1,class:"capitalize"},fe={key:0,class:"pi pi-check-circle text-green-600"},he={key:1};function _e(h,n,u,o,k,S){const g=w("Calendar"),c=w("Column"),_=w("Dropdown"),M=w("InputText"),O=w("Button"),b=w("DataTable"),y=j("tooltip");return i(),d("div",ae,[l(b,{value:o.responseOrders.orders,totalRecords:o.responseOrders.total,lazy:!0,paginator:!0,rows:30,filters:o.filters,"onUpdate:filters":n[0]||(n[0]=e=>o.filters=e),ref:"dt",dataKey:"id",loading:o.loading,onPage:n[1]||(n[1]=e=>o.onPage(e)),onSort:n[2]||(n[2]=e=>o.onSort(e)),onFilter:n[3]||(n[3]=e=>o.onFilter()),filterDisplay:"row",removableSort:"",stripedRows:"",rowClass:o.getRowClass},{empty:s(()=>[C(" Nessun ordine trovato. ")]),default:s(()=>[l(c,{field:"created_at",header:"Data ordine",ref:"created_at",filterField:"created_at",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:"",removableSort:"",style:{width:"160px"}},{body:s(({data:e})=>[e.created_at?(i(),d("div",re,m(o.formatDataFromUnixTimestamps(e.created_at)),1)):E("",!0)]),filter:s(({filterModel:e,filterCallback:r})=>[l(g,{inputId:"dateformat",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,dateFormat:"dd/mm/yy",onKeydown:T(a=>r(),["enter"]),manualInput:!0,placeholder:"Filtra",onDateSelect:a=>r()},null,8,["modelValue","onUpdate:modelValue","onKeydown","onDateSelect"])]),_:1},512),l(c,{field:"workarea_id",header:"Area di lavoro",filterMatchMode:"contains",ref:"workarea_id",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:s(({data:e})=>{var r;return[f("div",{class:G(e.workarea.name)},[f("span",null,m(((r=e.workarea)==null?void 0:r.name)||"-"),1)],2)]}),filter:s(({filterModel:e,filterCallback:r})=>[l(_,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:o.workareas,optionLabel:"name",optionValue:"id",onChange:a=>r(),placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),l(c,{field:"typology",header:"Tipologia",filterMatchMode:"contains",ref:"typology",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:s(({data:e})=>[f("span",null,m(o.translateTypology(e.typology)||"-"),1)]),filter:s(({filterModel:e,filterCallback:r})=>[l(_,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:o.orderStore.orderTypology,optionLabel:"name",optionValue:"value",onChange:a=>r(),placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),l(c,{field:"user_id",header:"Utente",filterMatchMode:"contains",ref:"user_id",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:s(({data:e})=>[e.user?(i(),d("span",le,[C(m(e.user.full_name)+" ",1),se,C(" "+m(e.user.email),1)])):(i(),d("span",ne,"-"))]),filter:s(({filterModel:e,filterCallback:r})=>[l(_,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:o.users,optionLabel:"email",optionValue:"id",onChange:a=>r(),placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),l(c,{field:"coupon_code",header:"Coupon",filterMatchMode:"contains",ref:"coupon_code",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:s(({filterModel:e,filterCallback:r})=>[l(M,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:T(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),l(c,{field:"total"},{header:s(()=>[ie]),body:s(({data:e})=>[f("div",de,[e.total?(i(),d("span",ce," € "+m(o.formatNumber(e.total)+""),1)):(i(),d("span",ue,"-"))])]),_:1}),l(c,{field:"payment_method",header:"Pagamento",filterMatchMode:"contains",ref:"payment_method",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:s(({data:e})=>[e.payment_method&&e.payment_method=="credit_card"?(i(),d("span",pe,"Carta di credito")):(i(),d("span",me,m(e.payment_method||"-"),1))]),filter:s(({filterModel:e,filterCallback:r})=>[l(_,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:o.payment_methods,optionLabel:"name",optionValue:"value",onChange:a=>r(),placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),l(c,{field:"invoice_number",header:"Fattura",filterMatchMode:"contains",ref:"invoice_number",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:s(({data:e})=>[e.invoice_number?(i(),d("i",fe)):(i(),d("span",he,"-"))]),filter:s(({filterModel:e,filterCallback:r})=>[l(M,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onKeydown:T(a=>r(),["enter"]),class:"p-column-filter",placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),l(c,{header:"",style:{width:"4rem"}},{body:s(({data:e})=>[H(l(O,{type:"button",onClick:r=>o.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[y,"Dettaglio",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading","rowClass"])])}const ye=U(te,[["render",_e]]),ve={setup(){const h=x(),n=V(()=>h.getTotalOrders),u=D();return{totalOrder:n,showSidebar:function(){u.setDetailType("order",!0,"Nuovo ordine",null),u.updateSidebar(!0),u.setShowDetail(!0)}}},components:{OrdersTable:ye}},we={class:"flex justify-content-between align-items-center"},be={class:""},ge={key:0},Fe={key:1};function Me(h,n,u,o,k,S){const g=w("OrdersTable");return i(),d("div",null,[f("div",we,[f("h1",be,[o.totalOrder==1?(i(),d("span",ge," 1 Ordine")):(i(),d("span",Fe,m(o.totalOrder)+" Ordini",1))])]),l(g)])}const Ue=U(ve,[["render",Me]]);export{Ue as default};
