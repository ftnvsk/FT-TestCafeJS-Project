import { Selector, t } from "testcafe";

class SignInPage {
    loginForm: Selector = Selector('section.login-form')
    emailInput: Selector = Selector('#field-email')
    passwordInput: Selector = Selector('#field-password')
    signInButto: Selector = Selector('#submit-login')
    signInErrorMessag: Selector = Selector('li.alert-danger')
}

export default SignInPage