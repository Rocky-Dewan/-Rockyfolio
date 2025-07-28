(function () {
  emailjs.init("9IUoGOMBtjPC1rvRZ"); // 👈 Replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const messageDiv = document.getElementById("form-message");

  emailjs.sendForm("service_l15veol", "template_7oserw4", form)
    .then(function () {
      messageDiv.innerHTML = "<div class='alert alert-success'>Message sent successfully!</div>";
      form.reset();
    }, function (error) {
      messageDiv.innerHTML = "<div class='alert alert-danger'>Failed to send message. Please try again!</div>";
      console.error("EmailJS Error:", error);
    });
});
