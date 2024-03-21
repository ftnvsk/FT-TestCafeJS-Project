import { Selector, t } from "testcafe";

class SignInPage {
    constructor() {
        this.loginForm = Selector('section.login-form')
        this.emailInput = Selector('#field-email')
        this.passwordInput = Selector('#field-password')
        this.signInButton = Selector('#submit-login')
        this.signInErrorMessage = Selector('li.alert-danger')
    }

    async isLoginFormPresent() {
        return await this.loginForm.exists && await this.loginForm.visible
    }

    async enterLoginEmail(loginEmail) {
        await t.typeText(this.emailInput, loginEmail, { replace: true })
    }

    async enterLoginPassowrd(loginPwd) {
        await t.typeText(this.passwordInput, loginPwd, { replace: true })
    }

    async clickOnLoginButton() {
        await t.click(this.signInButton)
    }

    async doInvalidLogin(enterEmail, enterPassword) {
        await this.enterLoginEmail(enterEmail)
        await this.enterLoginPassowrd(enterPassword)
        await this.clickOnLoginButton()
    }

    async getSignInErrorMessageText() {
        const signInErrMsg = await this.signInErrorMessage.innerText
        return signInErrMsg
    }

}

export default SignInPage