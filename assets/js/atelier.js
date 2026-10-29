/* Art-directed motion, with non-animated fallback */
(()=>{const root=document.querySelector('.atelier-main');if(!root||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const gs=window.gsap,st=window.ScrollTrigger;if(!gs||!st)return;gs.registerPlugin(st);
const horse=root.querySelector('.atelier-hero__cutout');
const halo=root.querySelector('.atelier-hero__halo');
const lines=root.querySelectorAll('.atelier-hero h1>span');
const titleEm=root.querySelector('.atelier-hero h1 em');
const tl=gs.timeline({defaults:{ease:'power3.out'}});
tl.from(lines,{yPercent:110,opacity:0,stagger:.16,duration:1.1}).from(horse,{xPercent:20,yPercent:11,opacity:0,rotate:4,duration:1.6},'-=1.15').from(titleEm,{y:35,opacity:0,duration:.85},'-=.6');
gs.to(horse,{yPercent:13,rotation:-2,ease:'none',scrollTrigger:{trigger:'.atelier-hero',start:'top top',end:'bottom top',scrub:.8}});
gs.to(halo,{scale:1.22,ease:'none',scrollTrigger:{trigger:'.atelier-hero',start:'top top',end:'bottom top',scrub:.8}});
gs.to('.atelier-portrait__photo img',{scale:1.16,yPercent:8,ease:'none',scrollTrigger:{trigger:'.atelier-portrait',start:'top bottom',end:'bottom top',scrub:1}});
gs.utils.toArray('.atelier-manifesto h2,.atelier-services__intro h2,.atelier-final h2,.atelier-editorial h2').forEach(el=>gs.from(el,{y:55,opacity:0,duration:1.15,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 89%',once:true}}));
})();