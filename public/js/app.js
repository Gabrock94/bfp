function createAlert(alertType, descriptionn){
    return('<div class="alert alert-'+alertType+'" role="alert">'+descriptionn+'</div>');
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/serviceWorker.js").then(console.log("service worker registered")).catch(err => console.log("service worker not registered", err));
    document.body.innerHTML = createAlert('success','Hey! You can now use this app offline!') + document.body.innerHTML;
  })
}
