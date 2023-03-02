import{r as u,o as _,m as d,w as e,b as s,a as t,f as l,d as f}from"./app.f7b5907c.js";import{u as h}from"./useNotifications.f75a94ae.js";import{a as v,_ as x}from"./PrimaryButton.20a6ca15.js";import{_ as U}from"./Input.1f9c9072.js";import{U as k}from"./Services.937ac75c.js";import{H as y}from"./HorizontalGroup.cea9d404.js";import{_ as V,a as b}from"./ReadDocHelp.4ddf1b7f.js";import"./PageHeader.1402fc0c.js";import"./Tab.03defd7b.js";import"./Facebook.631ebe24.js";const g={class:"flex items-center"},$={class:"mr-xs"},N=s("span",null,"Unsplash",-1),S=s("p",null,"With Unsplash you can use external stock photos directly in Mixpost.",-1),w=s("p",null,[s("a",{href:"https://unsplash.com/oauth/applications",class:"link",target:"_blank"},"Create an App on Unsplash"),l(". ")],-1),B=l("API Key"),C={class:"w-full"},I=l("Save"),O={__name:"UnsplashServiceForm",props:{form:{required:!0,type:Object}},setup(a){const i=a,{notify:c}=h(),o=u({}),p=()=>{o.value={},f.Inertia.put(route("mixpost.services.update",{service:"unsplash"}),i.form,{preserveScroll:!0,onSuccess(){c("success","Unsplash credentials have been saved")},onError:n=>{o.value=n}})};return(n,r)=>(_(),d(x,null,{title:e(()=>[s("div",g,[s("span",$,[t(k,{class:"text-black"})]),N])]),description:e(()=>[S,w,t(V,{href:"https://mixpost.app/docs/1.0.0/unsplash",class:"mt-xs"})]),default:e(()=>[t(y,{class:"mt-lg"},{title:e(()=>[B]),default:e(()=>[s("div",C,[t(U,{modelValue:a.form.client_id,"onUpdate:modelValue":r[0]||(r[0]=m=>a.form.client_id=m),type:"text",autocomplete:"off"},null,8,["modelValue"]),t(b,{message:o.value.client_id},null,8,["message"])])]),_:1}),t(v,{onClick:p,class:"mt-lg"},{default:e(()=>[I]),_:1})]),_:1}))}};export{O as default};