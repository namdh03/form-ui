const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formLogin = $(".form--login");
const loginNav = $(".login__signup--link");
const loginHeading = $(".login__heading");
const loginInput = $$(".section-input");
const loginCheck = $(".login__checkbox");
const loginBtn = $(".login__btn");
const loginSignup = $(".login__signup");

const formSignUp = $(".form__sign-up");
const SignUpHeading = $(".form__heading");
const formGroup = $$(".form__sign-up .form__group");

if (loginNav) {
    loginNav.onclick = function () {
        loginHeading.style.visibility = "hidden";

        for (let i = 0; i < loginInput.length; i++) {
            loginInput[i].style.visibility = "hidden";
        }

        loginCheck.style.visibility = "hidden";
        loginBtn.style.visibility = "hidden";
        loginSignup.style.visibility = "hidden";
        formLogin.style.width = "0";
        formLogin.style.opacity = "0%";

        formSignUp.style.width = "100%";
        formSignUp.style.opacity = "1";
        formSignUp.style.visibility = "visible";

        SignUpHeading.style.opacity = "1";
        SignUpHeading.style.visibility = "visible";

        for (let i = 0; i < formGroup.length; i++) {
            formGroup[i].style.visibility = "visible";
            formGroup[i].style.opacity = "1";
        }
    };
}
