import"./hoisted.1a56ad47.js";const a=document.getElementById("title");let l=500,t=0;const e=["Chat View Talk","Cha Vie Talk","Ch Vi Talk","C V Talk","CVTalk"];a.textContent=e[0];const n=()=>{setTimeout(()=>{a.textContent=e[t],t++,l-=100,t<e.length&&n()},l)};setTimeout(()=>{n()},5e3);