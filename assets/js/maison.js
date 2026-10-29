/* Maison: progressive cinematic choreography, optimised for motion preference */
(()=>{const root=document.querySelector('.maison');if(!root)return;
const gs=window.gsap, ST=window.ScrollTrigger;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!gs||!ST||reduce)return;gs.registerPlugin(ST);
const start=gs.timeline({defaults:{ease:'power3.out'}});
start.from('.maison-hero h1 span',{y:100,opacity:0,duration:1.2}).from('.maison-hero h1 em',{y:85,opacity:0,duration:1.25},'-=.9').from('.maison-hero__description,.maison-hero__actions',{opacity:0,y:25,stagger:.1,duration:.8},'-=.7');
gs.to('.maison-hero__image img',{scale:1.19,yPercent:9,ease:'none',scrollTrigger:{trigger:'.maison-hero',start:'top top',end:'bottom top',scrub:1}});
gs.to('.maison-hero__center',{opacity:.45,yPercent:-12,ease:'none',scrollTrigger:{trigger:'.maison-hero',start:'top top',end:'bottom top',scrub:1}});
const el=root.querySelector('.maison-reveal__stage');
gs.fromTo(el,{width:'72vw',height:'72vh',borderRadius:'2px'},{width:'100vw',height:'100vh',borderRadius:'0px',ease:'none',scrollTrigger:{trigger:'.maison-reveal',start:'top top',end:'bottom bottom',scrub:1.2}});
gs.to('.maison-reveal__stage img',{scale:1.2,ease:'none',scrollTrigger:{trigger:'.maison-reveal',start:'top top',end:'bottom bottom',scrub:1.1}});
gs.utils.toArray('.maison-letter h2,.maison-services__head h2,.maison-place h2,.maison-end h2,.maison-cover h2').forEach(x=>gs.from(x,{y:55,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:x,start:'top 88%',once:true}}));
gs.to('.maison-imagebreak>img',{scale:1.12,ease:'none',scrollTrigger:{trigger:'.maison-imagebreak',start:'top bottom',end:'bottom top',scrub:1}});
window.addEventListener('load',()=>ST.refresh(),{once:true});
})();