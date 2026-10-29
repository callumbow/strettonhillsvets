/* Cinematic scroll direction with progressive fallback. */
(()=>{
const root=document.querySelector('.cinema-main');if(!root)return;
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP=typeof window.gsap!=='undefined' && typeof window.ScrollTrigger!=='undefined';
if(reduce||!hasGSAP)return;
const g=window.gsap,ST=window.ScrollTrigger;g.registerPlugin(ST);
const intro=root.querySelector('.film-intro');
const introPhoto=root.querySelector('.film-intro__still img');
const title=root.querySelectorAll('.film-word');
const opening=g.timeline({defaults:{ease:'power3.out'}});
opening.from(title,{yPercent:110,opacity:0,stagger:.14,duration:1.3})
 .from('.film-intro__bottom',{y:40,opacity:0,duration:.8},'-=.7');
g.to(introPhoto,{scale:1.02,yPercent:9,ease:'none',scrollTrigger:{trigger:intro,start:'top top',end:'bottom top',scrub:1}});
g.to('.film-intro__copy',{yPercent:-12,opacity:.15,ease:'none',scrollTrigger:{trigger:intro,start:'top top',end:'bottom top',scrub:1}});
const story=root.querySelector('.film-scroll');
const scenes=[...root.querySelectorAll('.film-scroll__scene')];
const images=[...root.querySelectorAll('.film-scroll__image')];
g.set(scenes.slice(1),{autoAlpha:0,y:80});
g.set(images.slice(1),{autoAlpha:0});
g.set(images[0],{autoAlpha:1});
const film=g.timeline({scrollTrigger:{trigger:story,start:'top top',end:'bottom bottom',scrub:1.1,invalidateOnRefresh:true,onUpdate(self){const el=root.querySelector('[data-film-number]');if(el)el.textContent=String(Math.min(3,Math.floor(self.progress*3)+1)).padStart(2,'0')}}});
film.to('.film-scroll__image--first',{scale:.96,duration:.5,ease:'none'},0)
.to('.film-scroll__scene--one',{y:-130,autoAlpha:0,duration:.42},.55)
.to('.film-scroll__image--second',{autoAlpha:1,duration:.4},.67)
.to('.film-scroll__scene--two',{y:0,autoAlpha:1,duration:.55},.75)
.to('.film-scroll__scene--two',{y:-130,autoAlpha:0,duration:.4},1.55)
.to('.film-scroll__image--third',{autoAlpha:1,duration:.4},1.65)
.to('.film-scroll__scene--three',{y:0,autoAlpha:1,duration:.5},1.75)
.to('.film-scroll__meter-fill',{width:'100%',duration:2.4,ease:'none'},0);
g.utils.toArray('.film-statement h2,.film-services__heading h2,.film-local h2,.film-ending h2,.film-quote blockquote').forEach(el=>{
g.from(el,{y:90,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}});
});
g.utils.toArray('.film-quote__photo img,.film-local__picture img').forEach(img=>{
g.fromTo(img,{scale:1.13},{scale:1,ease:'none',scrollTrigger:{trigger:img.parentElement,start:'top bottom',end:'bottom top',scrub:true}});
});
const track=root.querySelector('.film-services__track');
const region=root.querySelector('.film-services');
const mq=g.matchMedia();
mq.add('(min-width: 851px)',()=>{
 const distance=()=>Math.max(0,track.scrollWidth-document.documentElement.clientWidth+parseFloat(getComputedStyle(track.parentElement).paddingLeft||0));
 const tween=g.to(track,{x:()=>-distance(),ease:'none',scrollTrigger:{trigger:region,start:'top top',end:()=>'+='+Math.max(650,distance()),pin:true,scrub:1.1,invalidateOnRefresh:true,anticipatePin:1}});
 return ()=>tween.kill();
});
mq.add('(max-width: 850px)',()=>{track.style.overflowX='auto';track.style.width='100%';track.style.scrollSnapType='x mandatory';return ()=>{track.style.overflowX='';track.style.width='';track.style.scrollSnapType=''}});
window.addEventListener('load',()=>ST.refresh(),{once:true});
})();