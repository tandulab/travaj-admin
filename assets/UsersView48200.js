import{o as P,F as $,c as C,a as B,m as p,_ as K,r as _,p as E,b as h,e as b,f as r,w as m,g as w,h as x,q as F,i as U,s as R,v as z}from"../index48200.js";import{u as V}from"./user48200.js";import{b as T,c as A,e as I}from"./helpers48200.js";import{u as k,f as j,a as q}from"./formatData48200.js";const L={setup(){P(()=>{d.value=!0,l.value={first:0,rows:y.value.rows,sortField:null,sortOrder:null,filters:i.value},$.register("myfilter",(a,u)=>a===u),s()});const f=V(),o=k(),v=C(()=>f.responseUsers),t=B(),y=p(),g=p(),i=p({global:{value:null,matchMode:"contains"},full_name:{value:"",matchMode:"contains"},email:{value:"",matchMode:"contains"},phone_number:{value:"",matchMode:"contains"},created_at:{value:"",matchMode:"contains"},role:{value:"",matchMode:"contains"}}),d=p(!0),l=p(),M=p(0),S=p([{label:"Attivo",value:"true"},{label:"Disattivo",value:"false"}]),D=p([{label:"Utente",value:"user"},{label:"Admin",value:"admin"}]),e=p([{label:"My Filter",value:"myfilter"}]);function s(){d.value=!0;const a=new Map;Object.entries(i.value).forEach(([u,c])=>{if(u=="created_at"){if(c.value){let O=j(c==null?void 0:c.value);T(a,u,O)}}else u=="global"?(u="full_name",T(a,u,c==null?void 0:c.value)):A(a,u,c==null?void 0:c.value)}),a.set("page",l.value.page+1),a.set("per_page",l.value.rows),l.value.sortField&&(l.value.sortOrder==1?a.set("sorted_by",l.value.sortField+"_asc"):a.set("sorted_by",l.value.sortField+"_desc")),setTimeout(()=>{n(a)},Math.random()*1e3+250)}const n=async function(a){await f.fetchAllUsers(a).then(()=>{d.value=!1}).catch(u=>{d.value=!1,I(t,u)})};return{dt:y,responseUsers:v,filters:i,loading:d,totalRecords:M,lazyParams:l,matchModes:e,status:S,roles:D,currentUser:g,onPage:a=>{l.value=a,s()},onSort:a=>{l.value=a,s()},onFilter:()=>{l.value.page=0,l.value.filters=i.value,s()},showSidebar:function(a){o.setDetailType("user",!1,"Dettaglio utente",a.id),o.updateSidebar(!0)},loadLazyData:s,formatDataFromUnixTimestamps:q}},components:{}};const N={class:"flex justify-content-between align-items-center"},J={class:"p-input-icon-left w-full mr-3 py-2"},G=w("i",{class:"pi pi-search"},null,-1),H={key:0};function Q(f,o,v,t,y,g){const i=_("InputText"),d=_("Column"),l=_("Calendar"),M=_("Button"),S=_("DataTable"),D=E("tooltip");return h(),b("div",null,[r(S,{value:t.responseUsers.users,totalRecords:t.responseUsers.total,lazy:!0,paginator:!0,rows:30,filters:t.filters,"onUpdate:filters":o[2]||(o[2]=e=>t.filters=e),ref:"dt",dataKey:"id",loading:t.loading,onPage:o[3]||(o[3]=e=>t.onPage(e)),onSort:o[4]||(o[4]=e=>t.onSort(e)),onFilter:o[5]||(o[5]=e=>t.onFilter()),filterDisplay:"row",removableSort:"",stripedRows:""},{header:m(()=>[w("div",N,[w("span",J,[G,r(i,{modelValue:t.filters.global.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.filters.global.value=e),placeholder:"Ricerca utente",class:"border-none w-full",onChange:o[1]||(o[1]=e=>t.onFilter())},null,8,["modelValue"])])])]),empty:m(()=>[x(" Nessun utente trovato. ")]),default:m(()=>[r(d,{field:"full_name",header:"Nome Cognome",filterMatchMode:"contains",ref:"full_name",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,sortable:""},{filter:m(({filterModel:e,filterCallback:s})=>[r(i,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:F(n=>s(),["enter"]),class:"p-column-filter",placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(d,{field:"email",header:"Email",filterMatchMode:"contains",ref:"email",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:m(({filterModel:e,filterCallback:s})=>[r(i,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:F(n=>s(),["enter"]),class:"p-column-filter",placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(d,{field:"phone_number",header:"Telefono",filterMatchMode:"contains",ref:"phone_number",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:m(({data:e})=>[x(" +"+U(e.prefix_number)+" "+U(e.phone_number),1)]),filter:m(({filterModel:e,filterCallback:s})=>[r(i,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:F(n=>s(),["enter"]),class:"p-column-filter",placeholder:"Filtra"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(d,{field:"created_at",header:"Data di creazione",sortable:"",ref:"created_at",filterField:"created_at",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:m(({data:e})=>[e.created_at?(h(),b("div",H,U(t.formatDataFromUnixTimestamps(e.created_at)),1)):R("",!0)]),filter:m(({filterModel:e,filterCallback:s})=>[r(l,{inputId:"dateformat",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,dateFormat:"dd/mm/yy",onKeydown:F(n=>s(),["enter"]),manualInput:!0,placeholder:"Filtra",onDateSelect:n=>s()},null,8,["modelValue","onUpdate:modelValue","onKeydown","onDateSelect"])]),_:1},512),r(d,{header:"",style:{width:"4rem"}},{body:m(({data:e})=>[z(r(M,{type:"button",onClick:s=>t.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[D,"Edit",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading"])])}const W=K(L,[["render",Q]]),X={setup(){const f=V(),o=C(()=>f.getTotalUsers),v=k();return{totalUser:o,showSidebar:function(){v.setDetailType("user",!0,"Nuovo utente",null),v.updateSidebar(!0),v.setShowDetail(!0)}}},components:{UsersTable:W}},Y={class:"flex justify-content-between align-items-center"},Z={class:""},ee={key:0},te={key:1};function oe(f,o,v,t,y,g){const i=_("UsersTable");return h(),b("div",null,[w("div",Y,[w("h1",Z,[t.totalUser==1?(h(),b("span",ee," 1 Utente")):(h(),b("span",te,U(t.totalUser)+" Utenti",1))])]),r(i)])}const ce=K(X,[["render",oe]]);export{ce as default};
