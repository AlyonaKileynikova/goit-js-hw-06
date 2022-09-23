const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    
    const {
      elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
      alert ("Все поля должны быть заполнены!");
    }
    
    const data = {
      email: email.value,
      password: password.value
    };
    console.log(data);

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}


