import{j as e,r as l,b as d,a}from"./vendor.0a8597db.js";import{R as c,L as p,X as x,Y as m,T as h,a as f,b}from"./LineChart.58ddd8ce.js";const y=({sensorName:r="Generic Sensor",sensorData:s,lines:i,xKey:n,yKey:o})=>e(l.exports.Suspense,{fallback:e(d,{}),children:a("div",{className:`h-[530px] min-w-fit max-w-[800px] rounded-xl bg-slate-300 dark:bg-secondary-dark-bg p-10
        flex items-center justify-center flex-wrap`,children:[a("p",{className:"mb-5 capitalize text-xl text-slate-700 dark:text-slate-400",children:[r," chart"]}),e(c,{height:400,width:"99%",children:a(p,{data:s,margin:{top:5,right:0,left:-25,bottom:5},children:[e(x,{dataKey:n}),e(m,{dataKey:o}),e(h,{}),e(f,{}),i.map(t=>e(b,{type:"monotone",dataKey:t[0],stroke:t[1]},"val"))]})})]})});export{y as default};
