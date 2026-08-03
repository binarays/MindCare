document.addEventListener("DOMContentLoaded", function () {
    let signup = document.querySelector(".btn-signup");
    let login = document.querySelector(".btn-login");
    let login_here = document.querySelector(".btn-login-here");
    let new_account = document.querySelector(".account");
    let slider = document.querySelector(".slider");
    let formSection = document.querySelector(".form-section");

    // Event listener for the Signup button
    signup.addEventListener("click", () => {
        slider.classList.add("moveslider");
        formSection.classList.add("form-section-move");
    });

    // Event listener for the Login button
    login.addEventListener("click", () => {
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
    });

    // Event listener for the Login button
    login_here.addEventListener("click", () => {
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
    });

    // Event listener for the Signup button
    new_account.addEventListener("click", () => {
        slider.classList.add("moveslider");
        formSection.classList.add("form-section-move");
    });
})
