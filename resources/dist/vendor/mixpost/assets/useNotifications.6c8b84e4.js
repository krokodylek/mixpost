import{q as n}from"./app.b3b20422.js";const j=()=>({notify:(o,t,i)=>{if(typeof t!="object"&&n.emit("notify",{variant:o,message:t,button:i}),typeof t=="object"){const f=Object.keys(t).map(e=>t[e].join(`
`)).join(`
`);n.emit("notify",{variant:o,message:f,button:i})}}});export{j as u};
