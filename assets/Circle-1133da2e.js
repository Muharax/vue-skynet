import{d as _,r as v,o as f,c as b,a as t,b as p,v as c,p as x,e as I,_ as w}from"./index-bdd35d87.js";const a=l=>(x("data-v-8fb26978"),l=l(),I(),l),y={class:"circle-calculator"},P=a(()=>t("div",{class:"image-container"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"200",height:"200"},[t("circle",{cx:"50",cy:"50",r:"40",stroke:"green","stroke-width":"2",fill:"none"}),t("text",{x:"50",y:"55",fill:"white","text-anchor":"middle"},"r")])],-1)),h={class:"circle-results"},M={class:"input-group"},g=a(()=>t("label",{for:"radius"},"Promień (r):",-1)),k={class:"input-group"},C=a(()=>t("label",{for:"area"},"Pole powierzchni (P):",-1)),B={class:"input-group"},F=a(()=>t("label",{for:"circumference"},"Obwód:",-1)),U={class:"input-group"},$=a(()=>t("label",{for:"diameter"},"Średnica:",-1)),S=_({__name:"Circle",setup(l){const u=v(0),n=v(0),r=v(0),s=v(0);function d(i){const e=i==="radius"?u.value:i==="area"?Math.sqrt(n.value/Math.PI):i==="circumference"?r.value/(2*Math.PI):s.value/2;i!=="radius"&&(u.value=e),i!=="area"&&(n.value=Math.PI*e*e),i!=="circumference"&&(r.value=2*Math.PI*e),i!=="diameter"&&(s.value=2*e),u.value=+u.value.toFixed(2),n.value=+n.value.toFixed(2),r.value=+r.value.toFixed(2),s.value=+s.value.toFixed(2)}function m(){u.value=0,n.value=0,r.value=0,s.value=0}return(i,e)=>(f(),b("div",y,[P,t("div",h,[t("div",M,[g,p(t("input",{type:"number",id:"radius","onUpdate:modelValue":e[0]||(e[0]=o=>u.value=o),onInput:e[1]||(e[1]=o=>d("radius"))},null,544),[[c,u.value,void 0,{number:!0}]])]),t("div",k,[C,p(t("input",{type:"number",id:"area","onUpdate:modelValue":e[2]||(e[2]=o=>n.value=o),onInput:e[3]||(e[3]=o=>d("area"))},null,544),[[c,n.value,void 0,{number:!0}]])]),t("div",B,[F,p(t("input",{type:"number",id:"circumference","onUpdate:modelValue":e[4]||(e[4]=o=>r.value=o),onInput:e[5]||(e[5]=o=>d("circumference"))},null,544),[[c,r.value,void 0,{number:!0}]])]),t("div",U,[$,p(t("input",{type:"number",id:"diameter","onUpdate:modelValue":e[6]||(e[6]=o=>s.value=o),onInput:e[7]||(e[7]=o=>d("diameter"))},null,544),[[c,s.value,void 0,{number:!0}]])]),t("button",{type:"button",onClick:m},"Wyczyść")])]))}});const q=w(S,[["__scopeId","data-v-8fb26978"]]);export{q as default};
