function send() {
  var template_params = {
}

var service_id = "default_service";
var template_id = "ira";
emailjs.send(service_id, template_id, template_params);
  
  alert("Thanks for downloading!");
}
