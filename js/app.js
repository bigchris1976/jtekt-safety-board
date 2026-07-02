(function(){
  const INTERVAL = 10000; // 10 seconds
  const slides = Array.from(document.querySelectorAll('.slide'));
  const live = document.getElementById('live');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const pauseBtn = document.getElementById('pause');

  let index = 0;
  let timer = null;
  let paused = false;

  function updateLive() {
    const title = slides[index].dataset.title || `Slide ${index+1}`;
    live.textContent = `Showing: ${title}`;
  }

  function show(n){
    slides.forEach((s,i)=>{
      const hidden = i!==n;
      s.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    });
    index = n;
    updateLive();
  }

  function next(){
    show((index+1) % slides.length);
  }
  function prev(){
    show((index-1 + slides.length) % slides.length);
  }

  function startTimer(){
    stopTimer();
    timer = setInterval(()=>{ if(!paused) next(); }, INTERVAL);
  }
  function stopTimer(){ if(timer){ clearInterval(timer); timer=null; } }

  prevBtn.addEventListener('click', ()=>{ prev(); restartOnInteraction(); });
  nextBtn.addEventListener('click', ()=>{ next(); restartOnInteraction(); });
  pauseBtn.addEventListener('click', ()=>{ paused = !paused; pauseBtn.textContent = paused ? 'Resume' : 'Pause'; pauseBtn.setAttribute('aria-pressed', String(paused)); });

  // Keyboard support
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight') { next(); restartOnInteraction(); }
    if(e.key === 'ArrowLeft') { prev(); restartOnInteraction(); }
    if(e.key === ' ') { paused = !paused; pauseBtn.textContent = paused ? 'Resume' : 'Pause'; pauseBtn.setAttribute('aria-pressed', String(paused)); e.preventDefault(); }
  });

  // Pause when tab is hidden to save CPU
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden){ stopTimer(); } else { startTimer(); }
  });

  function restartOnInteraction(){
    // reset interval so users have time before it auto-advances again
    if(!paused){ startTimer(); }
  }

  // Initialize
  if(slides.length === 0) return;
  show(0);
  startTimer();
})();
