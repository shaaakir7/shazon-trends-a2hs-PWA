$(document).ready(function () {
  // modal popup
  $("#myModal").modal("show");

  $("#shortKey").on("click", function () {
    $("#alert").css("display", "block");
    $('#alert').fadeIn('slow').delay(3000).fadeOut('slow'); //-------this is for alert section when we click okay btn
  });

  // remind me later pop up
  $("#later").on("click", function () {   
    setTimeout(function () {
      $("#myModal").modal("show");
    }, 30000);
  });
});

// installation process starts here
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function () {
    console.log('Service Worker Registered');
  });
}

// Code to handle install short cut on desktop
let deferredPrompt;
var addBtn = document.querySelector('#shortKey');

window.addEventListener('beforeinstallprompt', function (e) {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.addEventListener('click', function () {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function (choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});
