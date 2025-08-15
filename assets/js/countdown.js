(function(){
  function updateCountdown() {
    var deadline = new Date("{{ site.event.countdown_deadline }}").getTime();
    var now = new Date().getTime();
    var diff = Math.max(0, deadline - now);
    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    var mins = Math.floor((diff%(1000*60*60))/(1000*60));
    var secs = Math.floor((diff%(1000*60))/1000);
    function set(id,val){ var el=document.getElementById(id); if(el) el.textContent = val; }
    set('cd-days', days); set('cd-hours', hours); set('cd-mins', mins); set('cd-secs', secs);
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();