import{c as e,e as t,i as a,v as s,a as o,p as i,b as l,d as r,f as n,o as c,g as m,h as p,w as u,j as d,k as g,l as f,t as h,m as b,r as x,n as y,q as v,s as w,F as z,u as k}from"./vendor.516e2fd8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,i)=>{const l=new URL(e,s);if(self[t].moduleMap[l])return a(self[t].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),n=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){i(new Error(`Failed to import: ${e}`)),o(n)},onload(){a(self[t].moduleMap[l]),o(n)}});document.head.appendChild(n)})),self[t].moduleMap={}}}("/webpage/assets/");const M={},q=e('<section class="container mx-auto pt-32 px-8 text-black grid grid-cols-8 gap-x-8"><h2 class="decorated col-span-full self-start mb-5 2xl:mb-0 2xl:col-span-3 2xl:sticky 2xl:top-16"> Poznaj stowarzyszenie </h2><div class="col-span-full lg:col-span-5"><h3>Dlaczego istniejemy?</h3><p class="opacity-80"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores aut ab alias iusto quibusdam. Distinctio eaque facilis vitae cum fugiat, rem sit amet architecto sed obcaecati facere animi est at delectus adipisci fugit dolores corrupti quisquam velit ad, esse qui! Eos necessitatibus nemo laborum voluptate hic, fugit culpa? Dicta delectus mollitia magnam eveniet. </p><h3>Nasz cel</h3><p class="opacity-80"> Voluptates accusantium maiores harum, laudantium molestias repudiandae assumenda quo molestiae praesentium cupiditate nobis, veniam nemo, facere nihil alias voluptatibus dolores vitae fuga exercitationem? Soluta atque nesciunt at autem vel labore ex debitis aspernatur culpa corporis. Molestiae dolore at ipsum vel culpa facilis totam temporibus quis iste voluptatem. Perspiciatis at a adipisci aut. Asperiores officia nesciunt praesentium dolor ad dignissimos, nostrum doloribus maiores eligendi error officiis accusantium id corporis molestiae iusto nobis doloremque explicabo nulla a vel ipsam voluptas obcaecati! Non odit nam ipsum animi beatae commodi repudiandae alias qui odio cupiditate omnis quos consequatur, at hic, facere quibusdam! Accusamus praesentium eligendi autem quae eaque, nisi accusantium similique tempore laudantium nam quo aut quisquam. </p></div></section><section class="bg mt-16 lg:mt-32 bg-black"><div class="container mx-auto px-8 py-16 lg:py-48 text-white"><h2 class="mb-12 lg:mb-36">Nasze wartości</h2><div class="grid grid-cols-3 gap-16"><div class="value mx-auto col-span-full lg:col-span-1"><h3 class="text-underline">Nasza siła to nasza wiara</h3><p class="mt-12 opacity-80"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsam provident ut illo perspiciatis dolorum voluptate. </p></div><div class="value mx-auto col-span-full lg:col-span-1"><h3 class="text-underline"> Pomaganie w dążeniu do wolności </h3><p class="mt-12 opacity-80"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsam provident ut illo perspiciatis dolorum voluptate. </p></div><div class="value mx-auto col-span-full lg:col-span-1"><h3 class="text-underline">Człowiek jest ważny</h3><p class="mt-12 opacity-80"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsam provident ut illo perspiciatis dolorum voluptate. </p></div></div></div></section>',2);M.render=function(e,t,a,s,o,i){return q},t.extend({isEmail:a});const C=s.create("contactForm",((e={},a)=>{s.only(a),o("username","Pole imię jest puste.",(()=>{t(e.username).isNotEmpty().longerThanOrEquals(3)})),o("username","Pole imię zawiera nieprawidłowe znaki.",(()=>{t(e.username).matches(/[a-zA-ZąęśćółńżźĄĘŚĆÓŁŃŻŹ\-]/).notMatches(/[0-9]/)})),o("email","Pole email jest puste.",(()=>{t(e.email).isNotEmpty()})),o("email","Adres email nie jest poprawny.",(()=>{t(e.email).isEmail()})),o("message","Wiadomość jest pusta.",(()=>{t(e.message).isNotEmpty()}))}));const S={data:()=>({username:"",email:"",message:"",res:C.get()}),computed:{classes(){return r(this.res,{valid:"valid",invalid:"invalid",warning:"warning"})}},methods:{capitalizeUsername(e){return this.username=e.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")},normalizeEmail(e){return this.email=e.toLowerCase()},validate(e){this.res=C({username:this.username,email:this.email,message:this.message},e)},sendEmail(e){this.res.hasErrors()||(alert("wysłano email!"),n.sendForm("service_2069sdl","contact_5nJrN11kkcmV8F",e.target,"user_Bfq46wonmFAdmyH3hZM9a").then((e=>{console.log("SUCCESS!",e.status,e.text)}),(e=>{console.log("FAILED...",e)})))}}},j=f();i("data-v-6627e518");const E={class:"bg"},_={class:"container mx-auto py-16 lg:py-32 text-white"},T={class:"max-w-3xl mx-auto"},D=p("div",{class:"px-8"},[p("h2",{class:"text-4xl text-center"},"Bądźmy w kontakcie"),p("p",{class:"opacity-85 mt-8 mb-16 mx-auto text-center text-lg lg:text-base"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi fugit sequi autem nam dolor sapiente mollitia veritatis! ")],-1),U={class:"bg-white p-8 lg:p-16 mt-8 text-black lg:shadow-2xl"},L={class:"flex flex-col"},V=p("p",{"data-required":"",class:"mb-3"},"Imię",-1),N={class:"flex flex-col mt-7"},A=p("p",{"data-required":"",class:"mb-3"},"Email",-1),F={class:"flex flex-col mt-7"},I=p("p",{"data-required":"",class:"mb-3"}," Twoja wiadomość ",-1),R=p("input",{class:"w-full sm:w-max mt-8 lg:mt-12 px-12 py-4 bg-primary-600 text-white tracking-wide font-primary font-medium hover:bg-primary-200 hover:text-primary-800 cursor-pointer",type:"submit",value:"Wyślij nam wiadomość"},null,-1);l();const $=j(((e,t,a,s,o,i)=>(c(),m("div",E,[p("section",_,[p("div",T,[D,p("div",U,[p("form",{class:"contact-form",onSubmit:t[7]||(t[7]=u(((...e)=>i.sendEmail&&i.sendEmail(...e)),["prevent"]))},[p("div",L,[p("label",{for:"user_name",class:"relative mb-2 font-primary font-bold","data-msg":o.res.getErrors("username")[0]},[V,d(p("input",{class:["mt-0 pl-3 block w-full px-0.5 border-0 border-b-2 border-gray-400 bg-gray-50 focus:ring-0 focus:border-black",i.classes("username")],onInput:t[1]||(t[1]=e=>(i.validate("username"),i.capitalizeUsername(e.target.value))),type:"text",id:"user_name",name:"user_name",placeholder:"Jan","onUpdate:modelValue":t[2]||(t[2]=e=>o.username=e),required:""},null,34),[[g,o.username,void 0,{trim:!0}]])],8,["data-msg"])]),p("div",N,[p("label",{for:"user_email",class:"relative mb-2 font-primary font-bold","data-msg":o.res.getErrors("email")[0]},[A,d(p("input",{class:["mt-0 pl-3 block w-full px-0.5 border-0 border-b-2 border-gray-400 bg-gray-50 focus:ring-0 focus:border-black",i.classes("email")],onInput:t[3]||(t[3]=e=>(i.validate("email"),i.normalizeEmail(e.target.value))),type:"email",id:"user_email",name:"user_email",placeholder:"jan.doe@gmail.com","onUpdate:modelValue":t[4]||(t[4]=e=>o.email=e),required:""},null,34),[[g,o.email,void 0,{trim:!0}]])],8,["data-msg"])]),p("div",F,[p("label",{for:"message",class:"relative mb-2 font-primary font-bold","data-msg":o.res.getErrors("message")},[I,d(p("textarea",{class:["w-full pl-3 border-0 border-b-2 border-gray-400 bg-gray-50 focus:ring-0 focus:border-black",i.classes("message")],"data-msg":o.res.getErrors("message"),onInput:t[5]||(t[5]=e=>i.validate("message")),id:"message",name:"message",rows:"4",placeholder:"Tutaj zostaw nam swoją wiadomość...","onUpdate:modelValue":t[6]||(t[6]=e=>o.message=e),required:""},"\r\n\t\t\t\t\t\t\t\t",42,["data-msg"]),[[g,o.message]])],8,["data-msg"])]),R],32)])])])]))));S.render=$,S.__scopeId="data-v-6627e518";const P={props:["copyTarget","copyMsg","copiedMsg"],data(){return{copyContent:"",showMsg:this.copyMsg}},mounted(){this.$nextTick((function(){this.copyContent=this.copyTarget.textContent.trim()}))},methods:{copyToClipboard(){const e=this.$refs["copy-btn"],t=document.createElement("textarea");t.classList.add("sr-only"),t.setAttribute("readonly",""),e.appendChild(t),t.value=this.copyContent,t.select();const a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),e.removeChild(t),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a)),this.showMsg=this.copiedMsg},setCopyMsg(){this.showMsg=this.copyMsg}}},B=p("i",{class:"copy-btn cursor-pointer h-8 w-8 text-primary flex justify-center items-center hover:bg-primary hover:text-white active:bg-white active:text-primary"},[p("svg",{class:"h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})])],-1),G={class:"copy-text absolute z-10 bg-primary-200 text-primary-800 pointer-events-none select-none text-xs p-2 uppercase tracking-widest"};P.render=function(e,t,a,s,o,i){return c(),m("button",{ref:"copy-btn",class:"copy-box relative flex items-center select-none",onClick:t[1]||(t[1]=(...e)=>i.copyToClipboard&&i.copyToClipboard(...e)),onKeydown:t[2]||(t[2]=b(((...e)=>i.copyToClipboard&&i.copyToClipboard(...e)),["space"])),onMouseenter:t[3]||(t[3]=(...e)=>i.setCopyMsg&&i.setCopyMsg(...e))},[B,p("p",G,h(o.showMsg),1)],544)};const O={components:{BaseCopy:P},data:()=>({accountNumber:"",transferTitle:"",associationData:""}),mounted(){this.accountNumber=this.$refs["account-number"],this.transferTitle=this.$refs["transfer-title"],this.associationData=this.$refs["association-data"]}},H={class:"container mx-auto pt-16 lg:pt-32 text-black grid grid-cols-8 gap-x-8"},W={class:"col-span-full lg:col-span-5"},J=p("div",{class:"px-8 lg:px-0"},[p("h2",{class:"decorated"},"Wesprzyj nas!"),p("p",{class:"opacity-80 mt-4"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veniam harum explicabo eaque dolor. Earum optio sunt molestiae doloremque, totam libero fugiat ut eaque, blanditiis magnam nisi dicta id dolorem! ")],-1),K={class:"flex flex-col p-8 mt-16 bg-black text-white w-full lg:max-w-max sm:mb-16 lg:mb-32"},Z={class:"donate-data w-full justify-between"},Q={class:"mb-2 font-primary font-bold text-primary text-sm tracking-widest uppercase"},Y=y(" Nasz numer konta "),X={class:"block font-primary font-bold text-base text-white lg:text-3xl",ref:"account-number"},ee={class:"donate-data mt-8 w-full"},te={class:"font-primary font-bold text-primary text-sm tracking-widest uppercase"},ae=y(" Tytuł przelewu: "),se={ref:"transfer-title",class:"block text-xs lg:text-lg text-white mt-1"},oe={class:"donate-data mt-8 w-full justify-between"},ie={class:"font-primary font-bold text-primary text-sm tracking-widest uppercase"},le=y(" Dane Stowarzyszenia: "),re={ref:"association-data",class:"block text-xs lg:text-lg text-white mt-1"},ne=p("div",{class:"col-span-3 hidden lg:flex"},[p("img",{class:"self-end",src:"/webpage/assets/dd-boy.ceeab223.png"})],-1);O.render=function(e,t,a,s,o,i){const l=x("base-copy");return c(),m("section",H,[p("div",W,[J,p("div",K,[p("div",Z,[p("p",Q,[Y,p("span",X," 00 0000 0000 0000 0000 0000 0001 ",512)]),p(l,{"copy-target":o.accountNumber,"copy-msg":"Skopiuj numer konta","copied-msg":"Skopiowano!"},null,8,["copy-target"])]),p("div",ee,[p("p",te,[ae,p("span",se,"Darowizna na cele statutowe Stowarzyszenia Dobre Dzieła",512)]),p(l,{"copy-target":o.transferTitle,"copy-msg":"Skopiuj tytuł przelewu","copied-msg":"Skopiowano!"},null,8,["copy-target"])]),p("div",oe,[p("p",ie,[le,p("span",re,"Stowarzyszenie Dobre Dzieła, ul. Magiczna 13, Kraków 21-370",512)]),p(l,{"copy-target":o.associationData,"copy-msg":"Skopiuj dane stowarzyszenia","copied-msg":"Skopiowano!"},null,8,["copy-target"])])])]),ne])};const ce={data:()=>({date:(new Date).getFullYear()})},me={class:"p-2 bg-primary-600 font-primary text-white text-center"};ce.render=function(e,t,a,s,o,i){return c(),m("footer",me," © Stowarzyszenie Dobre Dzieła "+h(o.date),1)};const pe={},ue={class:"header bg flex overflow-x gap-8"},de=p("div",{class:"header-box container mx-auto px-8 flex flex-col relative md:flex-row md:justify-between lg:items-center"},[p("div",{class:"relative z-30 flex flex-col items-center text-white text-center w-full md:text-left md:items-start"},[p("p",{class:"text-line mb-8 font-text text-primary text-sm max-w-prose uppercase tracking-widest"}," Stowarzyszenie dla ludzi "),p("h1",{class:"hero-headline font-primary font-bold leading-snug text-4xl xl:text-6xl 2xl:text-7xl mb-16 lg:mb-24"},[y(" Realizujemy wyłącznie "),p("span",{class:"mx-auto block sm:mt-4 text-underline md:mr-0 md:ml-0"},"dobre dzieła!")]),p("button",{class:"button px-12 py-4 bg-primary-600 text-white text-xl font-primary font-medium hover:bg-primary-200 hover:text-primary-800"}," Poznaj nas teraz! ")]),p("img",{src:"/webpage/assets/check.2c6446ce.png",class:"absolute z-20 -bottom-12 left-1/2 w-5/6 transform -translate-x-1/2 sm:-bottom-16 md:max-w-lg lg:transform-none lg:static lg:max-h-96 xl:max-w-max xl:max-h-full"})],-1),ge=p("div",{class:"w-full h-full z-0 absolute pointer-events-none overflow-hidden"},[p("img",{src:"/webpage/assets/check-outline.0a2dd8be.svg",class:"check-outline absolute bottom-24 left-1/2 transform -translate-x-1/2 opacity-30 md:-bottom-8 lg:transform-none lg:opacity-80 lg:bottom-16"})],-1);pe.render=function(e,t,a,s,o,i){return c(),m("header",ue,[de,ge])};const fe={};fe.render=function(e,t,a,s,o,i){return c(),m("main",null,[v(e.$slots,"default")])};const he={},be={class:"py-4 absolute top-0 left-0 z-10 w-full"},xe=p("div",{class:"container mx-auto px-8"},[p("div",{class:"nav-logo"},[p("svg",{class:"h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 186.41 44.91"},[p("defs"),p("g",{id:"dd-logo"},[p("g",null,[p("linearGradient",{id:"SVGID_1_",x1:"2.2099",x2:"38.8433",y1:"31.379",y2:"5.4034",gradientUnits:"userSpaceOnUse"},[p("stop",{offset:"0","stop-color":"#1cb24a"}),p("stop",{offset:"1","stop-color":"#9f0"})]),p("path",{fill:"url(#SVGID_1_)",d:"M22.45 44.91H0V0h22.45C34.83 0 44.9 10.07 44.9 22.45S34.84 44.91 22.45 44.91zM6.23 38.68h16.22c8.95 0 16.22-7.28 16.22-16.22S31.4 6.23 22.45 6.23H6.23v32.45z"}),p("g",null,[p("linearGradient",{id:"SVGID_2_",x1:"10.5422",x2:"31.3835",y1:"23.3339",y2:"23.3339",gradientUnits:"userSpaceOnUse"},[p("stop",{offset:"0","stop-color":"#1cb24a"}),p("stop",{offset:"1","stop-color":"#9f0"})]),p("polygon",{fill:"url(#SVGID_2_)",points:"19.21 31.62 10.54 23.12 14.91 18.67 19.17 22.85 26.98 15.04 31.38 19.45"})])])]),p("g",{id:"dd-text",fill:"#fff"},[p("path",{d:"M68.15 28.52l.3 1.52h2.44V14.61h-2.74v6.26c-.37-.54-.86-.96-1.46-1.26-.6-.3-1.3-.45-2.1-.45-1 0-1.89.24-2.68.72-.79.48-1.41 1.14-1.87 1.97s-.69 1.79-.69 2.86c0 1.07.23 2.03.69 2.87.46.84 1.08 1.51 1.87 1.99.79.49 1.68.73 2.68.73.9 0 1.63-.18 2.2-.54.57-.35 1.02-.77 1.36-1.24zM63.01 27c-.57-.6-.86-1.37-.86-2.29s.29-1.69.86-2.27c.57-.59 1.29-.88 2.17-.88.89 0 1.61.3 2.18.89.56.59.85 1.35.85 2.28s-.28 1.69-.85 2.28c-.56.59-1.29.89-2.18.89-.88 0-1.6-.3-2.17-.9zM81.6 19.86c-.82-.47-1.74-.71-2.75-.71-1.03 0-1.95.24-2.78.71s-1.48 1.12-1.96 1.96-.73 1.8-.73 2.91.24 2.07.72 2.9c.48.84 1.13 1.49 1.95 1.96s1.75.71 2.78.71c1.01 0 1.94-.24 2.77-.71.83-.47 1.48-1.13 1.96-1.96.48-.84.72-1.8.72-2.9s-.24-2.07-.72-2.91c-.48-.83-1.13-1.49-1.96-1.96zm-.91 7.26c-.53.54-1.15.8-1.87.8-.71 0-1.33-.27-1.85-.8-.52-.54-.78-1.33-.78-2.39s.26-1.85.78-2.39 1.15-.8 1.88-.8c.7 0 1.31.27 1.84.8.53.54.79 1.33.79 2.39s-.26 1.85-.79 2.39zM97.58 27.61c.46-.84.69-1.79.69-2.86 0-1.07-.23-2.03-.69-2.87-.46-.84-1.08-1.51-1.87-1.99-.79-.49-1.68-.73-2.68-.73-.9 0-1.63.18-2.2.54s-1.02.77-1.36 1.24v-6.32h-2.74v15.44h2.44l.3-1.46c.37.54.86.96 1.46 1.26.6.3 1.3.45 2.1.45 1 0 1.89-.24 2.68-.72.79-.49 1.41-1.14 1.87-1.98zm-2.96-.59c-.57.59-1.29.88-2.16.88-.89 0-1.61-.3-2.18-.89s-.85-1.35-.85-2.28.28-1.69.85-2.28 1.29-.89 2.18-.89c.87 0 1.59.3 2.16.9.57.6.86 1.37.86 2.29s-.29 1.68-.86 2.27zM103.51 25.2c0-.81.13-1.45.4-1.91.26-.46.63-.78 1.1-.96.47-.19 1.01-.28 1.61-.28h.77v-2.89c-.9 0-1.68.2-2.35.61-.66.41-1.19.95-1.58 1.64l-.26-1.99h-2.44v10.63h2.74V25.2zM117.18 19.84c-.8-.46-1.72-.69-2.77-.69-1.11 0-2.08.24-2.9.72-.82.48-1.46 1.15-1.93 2s-.7 1.84-.7 2.94c0 1.09.24 2.04.71 2.87.47.83 1.12 1.47 1.95 1.93.83.46 1.78.69 2.85.69.86 0 1.63-.16 2.3-.47.68-.31 1.25-.75 1.72-1.3.46-.55.8-1.16 1-1.83h-2.79c-.19.4-.47.73-.85.98s-.85.38-1.4.38c-.74 0-1.38-.24-1.9-.71s-.81-1.12-.87-1.95h8.08c.01-.19.02-.36.03-.54.01-.17.01-.34.01-.49 0-.97-.23-1.85-.68-2.65-.43-.8-1.06-1.42-1.86-1.88zm-5.53 3.84c.14-.77.47-1.35.99-1.73s1.11-.57 1.78-.57c.7 0 1.29.21 1.76.62.47.41.73.97.77 1.67h-5.3zM138.34 14.61h-2.74v6.26c-.37-.54-.86-.96-1.46-1.26-.6-.3-1.3-.45-2.1-.45-1 0-1.89.24-2.68.72-.79.48-1.41 1.14-1.87 1.97s-.69 1.79-.69 2.86c0 1.07.23 2.03.69 2.87.46.84 1.08 1.51 1.87 1.99s1.68.73 2.68.73c.9 0 1.63-.18 2.2-.54.56-.36 1.02-.77 1.36-1.24l.3 1.52h2.44V14.61zm-3.55 12.4c-.56.59-1.29.89-2.18.89-.87 0-1.59-.3-2.17-.9-.57-.6-.86-1.37-.86-2.29s.29-1.69.86-2.27c.57-.59 1.29-.88 2.17-.88.89 0 1.61.3 2.18.89s.85 1.35.85 2.28-.28 1.69-.85 2.28z",class:"st2"}),p("polygon",{points:"149.13 21.62 149.13 19.41 140.65 19.41 140.65 21.68 146 21.68 140.58 27.84 140.58 30.04 149.24 30.04 149.24 27.77 143.63 27.77",class:"st2"}),p("rect",{width:"2.74",height:"10.63",x:"151.58",y:"19.41",class:"st2"}),p("path",{d:"M152.96 14.61c-.5 0-.91.15-1.23.44-.32.29-.48.67-.48 1.13s.16.84.48 1.14c.32.3.73.45 1.23.45s.91-.15 1.23-.45c.32-.3.48-.68.48-1.14s-.16-.83-.48-1.13-.73-.44-1.23-.44zM165.14 19.84c-.8-.46-1.72-.69-2.77-.69-1.11 0-2.08.24-2.9.72-.82.48-1.46 1.15-1.93 2s-.7 1.84-.7 2.94c0 1.09.24 2.04.71 2.87.47.83 1.12 1.47 1.95 1.93.83.46 1.78.69 2.85.69.86 0 1.63-.16 2.3-.47.68-.31 1.25-.75 1.72-1.3.46-.55.8-1.16 1-1.83h-2.79c-.19.4-.47.73-.85.98s-.85.38-1.4.38c-.74 0-1.38-.24-1.9-.71s-.81-1.12-.87-1.95h8.08c.01-.19.02-.36.03-.54.01-.17.01-.34.01-.49 0-.97-.23-1.85-.68-2.65-.44-.8-1.06-1.42-1.86-1.88zm-5.53 3.84c.14-.77.47-1.35.99-1.73s1.11-.57 1.78-.57c.7 0 1.29.21 1.76.62.47.41.73.97.77 1.67h-5.3z",class:"st2"}),p("polygon",{points:"173.42 14.61 170.68 14.61 170.68 20.95 169.2 21.47 169.2 23.76 170.68 23.25 170.68 30.04 173.42 30.04 173.42 22.28 174.92 21.77 174.92 19.47 173.42 20.01",class:"st2"}),p("path",{d:"M185.08 20.29c-.87-.76-2.07-1.14-3.58-1.14-.89 0-1.69.15-2.4.46-.71.31-1.3.75-1.75 1.32-.45.57-.71 1.24-.78 2.02h2.68c.1-.51.36-.9.77-1.17.42-.26.9-.4 1.46-.4.61 0 1.13.17 1.54.51.41.34.62.88.62 1.61v.26h-2.7c-1.54 0-2.7.31-3.47.92s-1.16 1.42-1.16 2.4c0 .59.14 1.12.43 1.61s.72.88 1.31 1.17c.59.29 1.34.44 2.25.44.89 0 1.61-.19 2.18-.56.56-.37 1-.84 1.32-1.42l.26 1.71h2.34v-6.54c-.01-1.37-.45-2.44-1.32-3.2zm-2.32 7.1c-.44.51-1.05.77-1.83.77-.51 0-.93-.11-1.24-.34s-.47-.55-.47-.96c0-.39.16-.71.47-.98.31-.26.84-.4 1.57-.4h2.34c-.13.75-.41 1.39-.84 1.91z",class:"st2"})])])])],-1);he.render=function(e,t,a,s,o,i){return c(),m("nav",be,[xe])};const ye={name:"App",components:{TheHero:pe,TheNavbar:he,TheMainContainer:fe,TheAboutSection:M,TheDonateSection:O,TheContactSection:S,TheFooter:ce}};ye.render=function(e,t,a,s,o,i){const l=x("the-navbar"),r=x("the-hero"),n=x("the-about-section"),u=x("the-donate-section"),d=x("the-contact-section"),g=x("the-main-container"),f=x("the-footer");return c(),m(z,null,[p(l),p(r),p(g,null,{default:w((()=>[p(n),p(u),p(d)])),_:1}),p(f)],64)};k(ye).mount("#app");
