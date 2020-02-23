function createAlert(alertType, descriptionn){
    return('<div class="alert alert-'+alertType+'" role="alert">'+descriptionn+'</div>');
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/serviceWorker.js").then(console.log("service worker registered")).catch(err => console.log("service worker not registered", err));
    online = window.navigator.onLine;
    if(online){
        document.body.innerHTML = createAlert('success','Hey! You can now use this app offline!') + document.body.innerHTML;
    }else{
        document.body.innerHTML = createAlert('info','Hey! You are currently using an offline version of this app') + document.body.innerHTML;
    }
  })
}