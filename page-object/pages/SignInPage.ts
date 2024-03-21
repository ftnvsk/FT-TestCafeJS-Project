import { Selector, t } from "testcafe";

class SignInPage {
    loginForm: Selector('section.login-form')
    emailInput: Selector('#field-email')
    passwordInput: Selector('#field-password')
    signInButto: Selector('#submit-login')
    signInErrorMessag: Selector('li.alert-danger')
}

export default SignInPage