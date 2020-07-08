const home__data={navID:"nav-home",page_loc_text:"Home",template:'\n\t\t<div class="landing full-page-height">\n\t\t\t<div class="parallax-container fixed" style="height:100%">\n\t\t\t\t<div class="parallax">\n\t\t\t\t\t<picture>\n\t\t\t\t\t\t<source media="(max-aspect-ratio:832/736)" srcset="/media/walls/713476.webp">\n\t\t\t\t\t\t<source media="(max-aspect-ratio:1189/736)" srcset="/media/walls/913696.webp">\n\t\t\t\t\t\t<img loading="lazy" id="parallax-container-img" alt="parallax image" src="/media/walls/16.webp" class="hero_image">\n\t\t\t\t\t</picture>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="parallax-container">\n\t\t\t\t<div class="parallax">\n\t\t\t\t\t<div class="parallax-content">\n\t\t\t\t\t\t<h1>Ankur\'s Little Playground</h1>\n\t\t\t\t\t\t<span class="subtext">I use this portal to display my work although not all and provide various resources like projects, notes, codes, course contents etc. that are availabe to public.</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="landing__content"></div>\n\t\t</div>\n\t',data:{ribbon_items:[{id:"recent",name:"Recent Uploads",timeID:"home--recent-time",lastUpdate:1567616993081,items:[{href:"/res-iitr",title:"Previous Years' content uploaded",imgsrc:"/media/iitr/sh.webp",imgalt:"IITR Resources",subtitle:"IITR Resources"},{href:"/res-iitr?tab=timetable",title:"IITR Time-Table",imgsrc:"/media/iitr/iitr.webp",imgalt:"IITR Time-Table",subtitle:"IITR Resources"},{href:"/res-iitr?tab=6-2",title:"Principles of Programming Languages Notes",imgsrc:"/media/iitr/princi_of_prog_lang.webp",imgalt:"Principles of programming languages",subtitle:"IITR Resources"},{href:"/res-iitr?tab=6-6",title:"Machine Learning Slides",imgsrc:"/media/iitr/machine_learning.webp",imgalt:"Machine Learning",subtitle:"IITR Resources"},{href:"/res-iitr?tab=6-6",title:"Image Captioning Assignment",imgsrc:"/media/iitr/machine_learning.webp",imgalt:"Image Captioning",subtitle:"IITR Resources"},{href:"/res-iitr?tab=6-5",title:"Goa Trip Photos",imgsrc:"/media/iitr/goa.webp",imgalt:"Goa trip image",subtitle:"IITR Resources"},{href:"/res-iitr?tab=6-4",title:"Compiler Lab Codes",imgsrc:"/media/iitr/compiler_lab.webp",imgalt:"Compiler lab",subtitle:"IITR Resources"},{href:"/res-iitr?tab=6-3",title:"Compiler Design Notes",imgsrc:"/media/iitr/compiler_design.webp",imgalt:"Compiler Design",subtitle:"IITR Resources"},{href:"/res-iitr?tab=6-0",title:"Fractal Notes",imgsrc:"/media/iitr/fractals.webp",imgalt:"fractals and applications",subtitle:"IITR Resources"}]},{id:"showcase",name:"Showcase",timeID:"home--showcase-time",lastUpdate:1593349628043,url:void 0,items:[{href:"/projects/Alpino",title:"Alpino",imgsrc:"/media/projects/alpino-vert.webp",imgalt:"alpino image",subtitle:"Live Demo"},{href:"/projects/fractal-generator",title:"Fractal generator",imgsrc:"/media/projects/Sierpinski_triangle-card.webp",imgalt:"fractal image",subtitle:"Live Demo"},{href:"https://github.com/ankurparihar/git-ddb-docs",title:"Git-DDB",imgsrc:"/media/projects/oauth.webp",imgalt:"oauth image",subtitle:"WebD Project"},{href:"/projects/time-table",title:"Time-Table Generator",imgsrc:"/media/projects/time-table-card.webp",imgalt:"Time-Table Generator",subtitle:"Live Demo"}]}]},apply:(t,e)=>{if(!t)return void console.log("Error: missing argument - root");t.innerHTML=home__data.template;const a=t.querySelector(".landing__content");home__data.data.ribbon_items.forEach(t=>{const e=document.createElement("div");e.setAttribute("class","htv-carousel noselect mb-5"),e.setAttribute("data-ribbon",t.id),e.innerHTML='\n\t\t\t<div class="htv-carousel__header flex row justify-left align-center wrap mb-3">\n\t\t\t\t<div class="htv-carousel__header__title flex column">\n\t\t\t\t\t<span>'+t.name+'</span>\n\t\t\t\t\t<span id="'+t.timeID+'" class="htv-carousel__header__title__subtitle">'+home__getDayHourString((new Date).getTime()-t.lastUpdate)+'</span>\n\t\t\t\t</div>\n\t\t\t\t<button type="button" aria-label="'+t.name+' all" class="htv-carousel__header__all btn btn--large btn--outline btn--depressed">\n\t\t\t\t\t<div class="btn__content">ALL</div>\n\t\t\t\t</button>\n\t\t\t\t<div class="htv-carousel__header__nav_container">\n\t\t\t\t\t<button type="button" aria-label="'+t.name+' move left" class="htv-carousel__header__nav-arrow htv-carousel__header__nav-arrow-left btn btn--large btn--outline btn--depressed">\n\t\t\t\t\t\t<div class="btn__content">\n\t\t\t\t\t\t\t<svg style="width:32px;height:32px" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/></svg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type="button" aria-label="'+t.name+' move right" class="htv-carousel__header__nav-arrow htv-carousel__header__nav-arrow-right btn btn--large btn--outline btn--depressed">\n\t\t\t\t\t\t<div class="btn__content">\n\t\t\t\t\t\t\t<svg style="width:32px;height:32px" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="htv-carousel__scrolls htv-carousel__desktop">\n\t\t\t\t<div class="htv-carousel__slider" style="transition: all 0.3s ease 0s">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t';const i=e.querySelector(".htv-carousel__slider");t.items.forEach(t=>{var e=document.createElement("div");e.setAttribute("class","elevation-3 mb-3 hvc item card"),e.setAttribute("style","height:auto"),e.innerHTML='\n\t\t\t\t<a href="'+t.href+'" draggable="false" title="'+t.title+'" ondragstart="return false" class="no-touch">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class="hvc__media card__media" style="height:auto">\n\t\t\t\t\t\t\t<div class="card__media__content">\n\t\t\t\t\t\t\t\t<div class="hvc__media__cover-container">\n\t\t\t\t\t\t\t\t\t<div class="hvc__media__cover-aspect-ratio">\n\t\t\t\t\t\t\t\t\t\t<div class="lazy hvc__media__cover">\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<img loading="lazy" src="'+t.imgsrc+'" alt="'+t.imgalt+'" title="'+t.title+'" draggable="false" class="hvc__media__cover__image">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="hvc__media__cover-glass"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="card__title">\n\t\t\t\t\t\t\t<div class="hvc__content flex column justify-center align-center">\n\t\t\t\t\t\t\t\t<div class="spacer"></div>\n\t\t\t\t\t\t\t\t<div class="hv-title">'+t.title+'</div>\n\t\t\t\t\t\t\t\t<div class="hv-subtitle">'+t.subtitle+'</div>\n\t\t\t\t\t\t\t\t<div class="spacer"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t\t',i.appendChild(e)}),a.appendChild(e)}),home__data.onStaticLoad(t,e)},onStaticLoad:(t,e)=>{if(!t)return void console.log("Error: missing argument - root");const a=document.getElementById("parallax-container-img");window.addEventListener("scroll",()=>{var t=(document.body.scrollHeight-window.innerHeight)/(a.height-window.innerHeight);t>0&&(t<3&&(t=3),a.style.transform="translateY("+-(document.body.scrollTop||document.documentElement.scrollTop)/t+"px)")}),home__data.data.ribbon_items.forEach(e=>{t.querySelector("#"+e.timeID).innerHTML=home__getDayHourString((new Date).getTime()-e.lastUpdate)}),t.querySelectorAll(".landing__content button").forEach(t=>{t.addEventListener("click",e=>{showRippleEffect(e,t)})}),t.querySelectorAll(".htv-carousel__scrolls a").forEach(t=>{t.addEventListener("click",e=>{e.ctrlKey?window.open(t.href):spa.navigate(t.href),e.preventDefault()})}),t.querySelectorAll(".htv-carousel").forEach(t=>{const e=t.getAttribute("data-ribbon");home__data.data.ribbon_items.forEach(a=>{if(a.id==e){var i=a.url;if(null!=i){i=window.location.origin+i,t.querySelector(".htv-carousel__header__all").addEventListener("click",t=>{t.ctrlKey?window.open(i):spa.navigate(i)})}}})}),home__data.applyInlineStyle(t,!0),t.querySelectorAll(".landing__content button.htv-carousel__header__nav-arrow-left").forEach(t=>{t.disabled=!0,t.classList.add("btn--disabled"),t.addEventListener("click",e=>{var a=t;const i=a.parentElement.querySelector(".htv-carousel__header__nav-arrow-right"),l=i.parentElement.parentElement,r=l.getBoundingClientRect().left+parseInt(window.getComputedStyle(l,null).getPropertyValue("padding-left"))-1;var n=window.innerWidth/1.5;const s=l.parentElement.querySelector(".htv-carousel__slider"),o=s.lastElementChild,d=s.firstElementChild,c=d.getBoundingClientRect().left;o.getBoundingClientRect().right;if(c>=r)return a.disabled=!0,void a.classList.add("btn--disabled");c+n>=r&&(a.disabled=!0,a.classList.add("btn--disabled"),n=r-c),s.style.transform="translateX("+(c-parseInt(window.getComputedStyle(d,null).getPropertyValue("margin-left"))+n)+"px)",i.disabled=!1,i.classList.remove("btn--disabled")})}),t.querySelectorAll(".landing__content button.htv-carousel__header__nav-arrow-right").forEach(t=>{const e=t.parentElement.parentElement,a=e.getBoundingClientRect().right-parseInt(window.getComputedStyle(e,null).getPropertyValue("padding-right"))+1;e.parentElement.querySelector(".htv-carousel__slider").lastElementChild.getBoundingClientRect().right<=a&&(t.disabled=!0,t.classList.add("btn--disabled")),t.addEventListener("click",e=>{var a=t;const i=a.parentElement.querySelector(".htv-carousel__header__nav-arrow-left"),l=a.parentElement.parentElement,r=l.getBoundingClientRect().right-parseInt(window.getComputedStyle(l,null).getPropertyValue("padding-right"))+1;var n=window.innerWidth/1.5;const s=l.parentElement.querySelector(".htv-carousel__slider"),o=s.lastElementChild,d=s.firstElementChild,c=d.getBoundingClientRect().left,h=o.getBoundingClientRect().right;if(h<=r)return a.disabled=!0,void a.classList.add("btn--disabled");h-n<=r&&(a.disabled=!0,a.classList.add("btn--disabled"),n=h-r),s.style.transform="translateX("+(c-parseInt(window.getComputedStyle(d,null).getPropertyValue("margin-left"))-n)+"px)",i.disabled=!1,i.classList.remove("btn--disabled")})}),home__data.applyInlineStyle(t)},applyInlineStyle:(t,e)=>{if(1==e){const e=window.innerWidth;e>=1264?t.querySelectorAll(".htv-carousel .htv-carousel__slider .item").forEach(t=>{t.style.display="inline-block",t.style.verticalAlign="top",t.style.width="264px"}):e>=960?t.querySelectorAll(".htv-carousel .htv-carousel__slider .item").forEach(t=>{t.style.display="inline-block",t.style.verticalAlign="top",t.style.width="210px"}):e>=600?t.querySelectorAll(".htv-carousel .htv-carousel__slider .item").forEach(t=>{t.style.display="inline-block",t.style.verticalAlign="top",t.style.width="164px"}):t.querySelectorAll(".htv-carousel .htv-carousel__slider .item").forEach(t=>{t.style.display="inline-block",t.style.verticalAlign="top",t.style.width="128px"}),t.querySelectorAll(".hvc").forEach(t=>{t.style.margin="0 4px 0 0"}),t.querySelectorAll(".htv-carousel .htv-carousel__scrolls").forEach(t=>{t.style.whiteSpace="nowrap"})}else{window.innerWidth;t.querySelectorAll(".htv-carousel .htv-carousel__slider .item").forEach(t=>{t.setAttribute("style","height:auto")})}}};function home__getDayHourString(t){var e=Math.floor(t/864e5);if(e>365){var a=Math.floor(4*e/1461);return a+(a>1?" years":" year")+" ago"}if(e>30){var i=Math.floor(2*e/61);return i+(i>1?" months ":" month ")+(0==(e=Math.floor(e-61*i/2))?"ago":e+(e>1?" days":" day")+" ago")}if(e>6){var l=Math.floor(e/7);return l+(l>1?" weeks ":" week ")+(0==(e-=7*l)?"ago":e+(e>1?" days":" day")+" ago")}var r=Math.floor((t-864e5*e)/36e5);return 0==e?0==r?"Less than an hour ago":r+(r>1?" hours":" hour")+" ago":e+(e>1?" days ":" day ")+(0==r?"ago":r+(r>1?" hours ":" hour ")+"ago")}spa.register("/",home__data);