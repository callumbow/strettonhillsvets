/* Stretton Hills Vets — lean, progressive enhancement. No analytics / third-party scripts. */
(() => {
  'use strict';
  const header = document.getElementById('site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function closeMenu(){
    if(!menuButton || !mobileNav)return;
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Open menu');
    mobileNav.setAttribute('inert','');
    document.body.classList.remove('menu-is-open');
  }
  if(menuButton && mobileNav){
    menuButton.addEventListener('click',()=>{
      const open = menuButton.getAttribute('aria-expanded')!=='true';
      menuButton.setAttribute('aria-expanded',String(open));
      menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');
      if(open)mobileNav.removeAttribute('inert');else mobileNav.setAttribute('inert','');
      document.body.classList.toggle('menu-is-open',open);
    });
    mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
    document.addEventListener('click',e=>{if(!header.contains(e.target))closeMenu();});
    window.matchMedia('(min-width:951px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
  }
  let scheduled=false;
  function updateScroll(){
    if(header)header.classList.toggle('is-scrolled',window.scrollY>15);
    scheduled=false;
  }
  window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll);}}, {passive:true});
  updateScroll();
  if(!reduceMotion && 'IntersectionObserver' in window){
    const elements=[...document.querySelectorAll('.reveal')];
    if(elements.length){
      // Activate only after the observer is ready, so a blocked script never hides content.
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
        });
      },{rootMargin:'0px 0px -6% 0px',threshold:.06});
      elements.forEach(el=>observer.observe(el));
      document.documentElement.classList.add('has-motion');
    }
  }
  // Details/summary is natively keyboard accessible; close adjacent FAQs after opening one.
  document.querySelectorAll('.faq-stack').forEach(stack=>{
    stack.querySelectorAll('details').forEach(item=>{
      item.addEventListener('toggle',()=>{
        if(item.open)stack.querySelectorAll('details').forEach(other=>{if(other!==item)other.open=false;});
      });
    });
  });
})();
