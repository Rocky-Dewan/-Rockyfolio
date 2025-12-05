(function () {
  emailjs.init("6qsAV6YtixfxtqEWS"); // 👈 Replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const messageDiv = document.getElementById("form-message");

  emailjs.sendForm("service_ida14ya", "template_31qlc4t", form)
    .then(function () {
      messageDiv.innerHTML = "<div class='alert alert-success'>Message sent successfully!</div>";
      form.reset();
    }, function (error) {
      messageDiv.innerHTML = "<div class='alert alert-danger'>Failed to send message. Please try again!</div>";
      console.error("EmailJS Error:", error);
    });
});
