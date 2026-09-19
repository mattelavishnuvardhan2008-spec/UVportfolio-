(function(){
  var pages={home:1,about:1,services:1};
  var menu=document.getElementById('menu'),mb=document.querySelector('.menu-btn');
  function show(){
    var h=(location.hash||'#home').slice(1);
    var target=h;
    if(h==='work') target='home';
    else if(h==='contact'){ if(!document.querySelector('.page.on')) target='home'; else target=null; }
    else if(!pages[h]) target='home';
    if(target){
      document.querySelectorAll('.page').forEach(function(p){p.classList.toggle('on',p.id==='page-'+target)});
      document.querySelectorAll('nav a.link').forEach(function(a){
        var on=a.getAttribute('href')==='#'+target; a.classList.toggle('on',on); if(on)a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
      });
      if(h!=='work') window.scrollTo(0,0);
    }
    if(h==='contact'||h==='work'){
      var el=document.getElementById(h); if(el) setTimeout(function(){el.scrollIntoView({behavior:'smooth'})},30);
    }
    menu.classList.remove('open'); mb.setAttribute('aria-expanded','false');
  }
  window.addEventListener('hashchange',show); show();
  mb.addEventListener('click',function(){var o=menu.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
  document.getElementById('cform').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target,n=f.name.value.trim(),m=f.email.value.trim(),d=f.msg.value.trim(),note=document.getElementById('fnote');
    if(!n||!m||!d){note.textContent='Please fill in your name, email and project details.';return;}
    var body='Name: '+n+'\nEmail: '+m+'\nService: '+f.type.value+'\n\n'+d;
    location.href='mailto:your.email@example.com?subject='+encodeURIComponent('Project enquiry from '+n)+'&body='+encodeURIComponent(body);
    note.textContent='Opening your email app…';
  });
})();
