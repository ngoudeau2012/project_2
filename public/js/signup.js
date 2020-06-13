$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstNameInput = $("input#firstNameInput");
  const lastNameInput = $("input#lastNameInput");
  const usernameInput = $("input#usernameInput");
  const emailInput = $("input#emailInput");
  const passwordInput = $("input#passwordInput");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      user_name: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    // if (
    //   !userData.first_name ||
    //   !userData.last_name ||
    //   !userData.username ||
    //   !userData.email ||
    //   !userData.password
    // ) {
    //   return;
    // }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.first_name,
      userData.last_name,
      userData.user_name,
      userData.email,
      userData.password
    );

    firstNameInput.val(""),
      lastNameInput.val(""),
      usernameInput.val(""),
      emailInput.val(""),
      passwordInput.val("");
  });

  function signUpUser(first_name, last_name, user_name, email, password) {
    console.log(first_name, last_name, user_name, email, password);
  }

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first_name, last_name, username, email, password) {
    $.post("/api/signup", {
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/home");
        console.log(first_name, last_name, username, email, password);

        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
