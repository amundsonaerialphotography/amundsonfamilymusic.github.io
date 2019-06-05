var url_string = window.location.href;
var url = new URL(url_string);

var name = url.searchParams.get("name");
console.log(name);

var email = url.searchParams.get("email");
console.log(email);

var subject = url.searchParams.get("subject");
console.log(subject);

var comment = url.searchParams.get("comment");
console.log(comment);

alert(`${name}, ${email}, ${subject}, ${comment}.`);
var template_params = {
}

var service_id = "default_service";
var template_id = "ira";
emailjs.send(service_id, template_id, template_params);


