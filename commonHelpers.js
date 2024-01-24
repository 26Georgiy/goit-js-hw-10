import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i,f}from"./assets/vendor-77e16229.js";i.settings({position:"topRight",timeout:4e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"});let d;const c=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]");n.addEventListener("click",t=>{r.start(d),o("On")});function o(t="Off"){let e=n.classList.contains("btn-disabled");t==="On"&&e?(n.classList.remove("btn-disabled"),c.classList.remove("input-disabled")):e||(n.classList.add("btn-disabled"),c.classList.add("input-disabled"))}f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,dateFormat:"Y-m-d H:i",minuteIncrement:1,onClose(t){const e=new Date,s=e.setSeconds(0,0),a=Date.parse(t[0]);s<a?(d=a,o("On"),i.success({message:"You have selected a correct date in the future!"})):(r.stop(),this.setDate(e),o("Off"),i.error({message:"Please choose a date in the future!"}))}});const r={intervalId:null,intervalMs:1e3,dtObj:{},selectedTime:0,pageElems:{},init(t,e=null){this.pageElems=t,e&&(this.finishFnc=e)},start(t){if(this.intervalId){i.info({message:"Timer in progress! To restart, refresh this page."});return}this.selectedTime=t;const e=t-Date.now();if(e<=0){i.error({message:"Please choose a date in the future!"});return}this.dtObj=this.millisToObj(e),Object.keys(this.dtObj).forEach(s=>{this.pageElems[s].textContent=this.dtObj[s].toString().padStart(2,"0")}),this.intervalId=setInterval(()=>this.updValues(),this.intervalMs)},updValues(){const t=this.selectedTime-Date.now();if(t<=0){this.stop(),this.finishFnc();return}const e=this.millisToObj(t);Object.keys(this.dtObj).forEach(s=>{this.dtObj[s]!=e[s]&&(this.dtObj[s]=e[s],this.pageElems[s].textContent=e[s].toString().padStart(2,"0"))})},stop(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=0)},millisToObj(t){const l=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:u,minutes:h,seconds:m}},finishFnc:()=>{i.success({message:"FINISH: Object INTERNAL function invoked!"})}},p={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};r.init(p,b);function b(){i.success({message:"FINISH: EXTERNAL function invoked!"})}
//# sourceMappingURL=commonHelpers.js.map