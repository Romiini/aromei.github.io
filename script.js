
(function(){
  const key='ar-theme';
  const apply = (m)=>{ document.documentElement.dataset.theme = m; };
  const stored = localStorage.getItem(key);
  if(stored){ apply(stored); }
  const btn = document.querySelector('[data-theme-toggle]');
  if(btn){
    btn.addEventListener('click', ()=>{
      const cur = document.documentElement.dataset.theme || '';
      const next = cur==='dark' ? '' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem(key, next);
    });
  }
})();
