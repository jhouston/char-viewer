function sendEvent(event, value) {
  console.log("sendEvent: " + event + "," + value);
  chrome.extension.sendMessage({eventName: event, eventValue: value});
}

$(document).ready(function(e) {
    $('a').click(function(e) {
         var href = this.href;
         var isHar = ((href.length > 4) && (href.indexOf(".har") == (href.length-4)));
         var isNarc = ((href.length > 5) && (href.indexOf(".char") == (href.length-5)))
         if (isHar || isNarc) {
             sendEvent("openHar", this.href);
             return true;
         }
    });
});
