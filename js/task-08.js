const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;

  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Value is undifine");

    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  event.currentTarget.reset();
}
