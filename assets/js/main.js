const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formLogin = $(".form--login");
const loginHeading = $(".login__heading");
const loginInput = $$(".section-input");
const loginCheck = $(".login__checkbox");
const loginBtn = $(".login__btn");
const loginSignup = $(".login__signup");
const loginNav = $(".login__signup--link");

const formSignUp = $(".form__sign-up");
const SignUpHeading = $(".form__heading");
const SignUpFormGroup = $$(".form__sign-up .form__group");
const SignUpLabel = $$(".form__label");
const SignUpInput = $$(".form__input:not(.form__input[type=checkbox])");
const SignUpText = $(".form__text");
const signInNav = $(".form__btn--sign-in");

if (loginNav) {
    loginNav.onclick = function () {
        // Login Form
        loginHeading.classList.remove("typewriter");
        loginHeading.style.opacity = "0";
        loginHeading.style.visibility = "hidden";
        loginHeading.style.transition = "all linear 0.1s";

        Array.from(loginInput).forEach((input) => {
            input.style.opacity = "0";
            input.style.visibility = "hidden";
            input.style.transition = "all linear 0.1s";
        });

        loginCheck.style.opacity = "0";
        loginCheck.style.visibility = "hidden";
        loginCheck.style.transition = "all linear 0.1s";

        loginBtn.style.opacity = "0";
        loginCheck.style.visibility = "hidden";
        loginCheck.style.transition = "all linear 0.1s";

        loginSignup.style.opacity = "0";
        loginSignup.style.visibility = "hidden";
        loginSignup.style.transition = "all linear 0.1s";

        formLogin.style.width = "0";
        formLogin.style.opacity = "0";
        formLogin.style.visibility = "hidden";
        formLogin.style.transition = "all linear 0.3s";

        // Register Form
        formSignUp.style.width = "100%";
        formSignUp.style.opacity = "1";
        formSignUp.style.visibility = "visible";
        formSignUp.style.transition = "all linear 0.3s 0.3s";

        setTimeout(() => {
            SignUpHeading.classList.add("typewriter");

            Array.from(SignUpLabel).forEach((label) => {
                label.classList.add("typewriter");
            });

            Array.from(SignUpInput).forEach((input) => {
                input.style.width = "100%";
                input.style.transition = "all linear 0.6s 0.6s";
            });

            SignUpText.classList.add("typewriter");
        }, 600);

        SignUpHeading.style.opacity = "1";
        SignUpHeading.style.visibility = "visible";
        SignUpHeading.style.transition = "all linear 0.3s 0.6s";

        Array.from(SignUpFormGroup).forEach((input) => {
            input.style.opacity = "1";
            input.style.visibility = "visible";
            input.style.transition = "all linear 0.3s 0.6s";
        });
    };
}

if (signInNav) {
    signInNav.onclick = function () {
        // Register Form
        SignUpHeading.classList.remove("typewriter");
        SignUpHeading.style.opacity = "0";
        SignUpHeading.style.visibility = "hidden";
        SignUpHeading.style.transition = "all linear 0.1s";

        Array.from(SignUpFormGroup).forEach((input) => {
            input.style.opacity = "0";
            input.style.visibility = "hidden";
            input.style.transition = "all linear 0.1s";
        });

        Array.from(SignUpLabel).forEach((label) => {
            label.classList.remove("typewriter");
        });

        SignUpText.classList.remove("typewriter");

        Array.from(SignUpInput).forEach((input) => {
            input.style.width = "0";
            input.style.transition = "all linear 0.1s";
        });

        formSignUp.style.width = "0";
        formSignUp.style.opacity = "0";
        formSignUp.style.visibility = "hidden";
        formSignUp.style.transition = "all linear 0.3s";

        // Login Form
        formLogin.style.width = "100%";
        formLogin.style.opacity = "1";
        formLogin.style.visibility = "visible";
        formLogin.style.transition = "all linear 0.3s 0.3s";

        setTimeout(() => {
            loginHeading.classList.add("typewriter");
        }, 600);
        loginHeading.style.opacity = "1";
        loginHeading.style.visibility = "visible";
        loginHeading.style.transition = "all linear 0.3s 0.6s";

        Array.from(loginInput).forEach((input) => {
            input.style.opacity = "1";
            input.style.visibility = "visible";
            input.style.transition = "all linear 0.3s 0.6s";
        });

        loginCheck.style.opacity = "1";
        loginCheck.style.visibility = "visible";
        loginCheck.style.transition = "all linear 0.3s 0.6s";

        loginBtn.style.opacity = "1";
        loginCheck.style.visibility = "visible";
        loginCheck.style.transition = "all linear 0.3s 0.6s";

        loginSignup.style.opacity = "1";
        loginSignup.style.visibility = "visible";
        loginSignup.style.transition = "all linear 0.3s 0.6s";
    };
}
