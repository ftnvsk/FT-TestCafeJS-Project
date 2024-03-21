import { Selector, t } from "testcafe";

class NavBar {
    constructor() {
        // here go all the selector for the navbar
        this.signInLink = Selector('div.user-info>a')
        this.contactUsLink = Selector('#contact-link>a')
        this.searchBox = Selector('input.ui-autocomplete-input')
        this.linkToStoreHomePage = Selector('#_desktop_logo>a')
    }

    async goToSignInPage() {
        await t.click(this.signInLink)
    }

    async searchForText(searchText) {
        await t.click(this.searchBox)
        await t.typeText(this.searchBox, searchText, { replace: true })
        await t.pressKey('enter')
    }

}

export default NavBar