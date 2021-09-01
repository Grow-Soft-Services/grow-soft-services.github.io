const BASE_URL = "https://growsoft.services/api";
// ...

function submitSendMessage() {
  var name_ = document.getElementById("name").value;
  var email_ = document.getElementById("email").value;
  var message_ = document.getElementById("message").value;
  var subject_ = document.getElementById("subject").value;
  var object = {
    name: name_,
    email: email_,
    message: message_,
    subject: subject_,
  };
  // alert(` ${object.name} \n${object.email}\n${object.message}\n${object.subject}`)
  try {
    const response = axios.post(`${BASE_URL}/send-message/mail`, object);
    const data = response.data;
    alert(`${BASE_URL}/send-message/mail`)
    //  alert(`sent a mail message \nand here is the response:\n${data}`)

    return data;
  } catch (errors) {
    console.error(errors);
    alert(errors)
  }
}
// document.getElementById ("submitBtn").addEventListener ("click", function(){
//   submitSendMessage()
// }, true);

document.getElementById("msgForm").addEventListener(
  "submit",
  (e) => {
    // e.preventDefault();
    submitSendMessage();
  },
  true
);
