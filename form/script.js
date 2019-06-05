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

var web_hostname = window.location.hostname;
console.log(web_hostname);



var template_params = {
   "site": "amundsonfamilymusic.com",
   "subject": subject,
   "name": name,
   "email": email,
   "comment": comment
}

var service_id = "default_service";
var template_id = "amundson_family_music_form";
emailjs.send(service_id, template_id, template_params);


