const d=KS_DATA;
document.getElementById('app').innerHTML=`${KS.header()}<main>
<section class="hero layered-hero">
  ${KS.img(d.hero.image,'Editorial hero',d.hero.fallback,'hero-bg')}
  <div class="hero-shade"></div>
  <div class="hero-copy"><div>${ksLocal(d.hero.eyebrow)}</div><h1>${ksLocal(d.hero.title)}</h1><p>${ksLocal(d.hero.body)}</p><a class="pill" href="category.html">${ksT('shop')}</a></div>
</section>
<section class="intro"><h2>${ksLocal(d.feature.title)}</h2><p>${ksLocal(d.feature.body)}</p><div class="hash">${d.feature.hashtag}</div><div class="date">${ksLocal(d.feature.date)}</div></section>
<section class="campaign">${KS.img(d.feature.image,'Campaign',d.feature.fallback,'campaign-image')}<div class="campaign-copy"><small>${ksT('campaignLabel')}</small><h2>${ksLocal(d.products[0].name)}</h2><a href="product.html?p=rugby-sweater">${ksT('shopSweater')} →</a></div></section>
<section class="section"><div class="section-head"><h2>${ksT('all')}</h2><a href="category.html">${ksT('viewAll')} →</a></div><div class="product-grid">${d.products.slice(0,4).map(KS.productCard).join('')}</div></section>
<section class="dream-parallax" id="dreamParallax">
  ${KS.img(d.layered.background,'Dream background',d.layered.backgroundFallback,'dream-bg')}
  <div class="dream-word">${d.layered.word}</div>
  <div class="dream-orb orb-a"></div><div class="dream-orb orb-b"></div><div class="dream-orb orb-c"></div>
  <div class="dream-person-wrap">${KS.img(d.layered.foreground,'Editorial model',d.layered.foregroundFallback,'dream-person')}</div>
  <div class="dream-caption"><small>EDITORIAL STUDY</small><strong>${ksLocal(d.feature.title)}</strong></div>
</section>
<section class="section"><div class="section-head"><h2>${ksT('collectionHeading')}</h2></div><div class="collection-grid">${d.collections.map(c=>`<a class="collection-card" href="category.html">${KS.img(c.image,c.name,c.fallback,'collection-img')}<span>${c.name}</span></a>`).join('')}</div></section>
</main>${KS.footer()}`;
KS.bind();

const parallax=document.querySelector('#dreamParallax');
if(parallax){
  const word=parallax.querySelector('.dream-word');
  const person=parallax.querySelector('.dream-person-wrap');
  const bg=parallax.querySelector('.dream-bg');
  const orbs=[...parallax.querySelectorAll('.dream-orb')];
  const tick=()=>{
    const r=parallax.getBoundingClientRect();
    const vh=window.innerHeight||1;
    const progress=Math.max(-1,Math.min(1,(vh-r.top)/(vh+r.height)));
    if(bg) bg.style.transform=`scale(1.05) translate3d(0,${progress*-26}px,0)`;
    if(word) word.style.transform=`translate3d(0,${progress*-72}px,0)`;
    if(person) person.style.transform=`translate3d(0,${progress*-135}px,0) rotate(${progress*-1.8}deg)`;
    orbs.forEach((o,i)=>o.style.transform=`translate3d(0,${progress*(26+i*18)}px,0)`);
  };
  let raf=0; const onScroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(tick)};
  addEventListener('scroll',onScroll,{passive:true}); addEventListener('resize',onScroll); tick();
}
