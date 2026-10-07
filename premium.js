/* Cosmetic only: feeds cursor position to CSS for the glass spotlight. No data, DOM or logic changes. */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||matchMedia('(pointer: coarse)').matches)return;
  var sel='.kpi,.workspace,.overview-card,.focus-card,.report-panel,.report-card,.settings-card,.interview-stat,.calendar-panel,.interview-table-wrap',raf=0;
  document.addEventListener('pointermove',function(e){
    var el=e.target.closest&&e.target.closest(sel);if(!el)return;
    cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){
      var r=el.getBoundingClientRect();
      el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px');
    });
  },{passive:true});
})();
