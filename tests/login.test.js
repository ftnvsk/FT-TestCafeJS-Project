import { Selector, t } from "testcafe";
import NavBar from "../page-object/components/NavBar";
import SignInPage from "../page-object/pages/SignInPage";

const navbar = new NavBar()
const signinpage = new SignInPage()

fixture `Login Test`
    .page("https://www.automationtesting.co.uk/")
    .before(async t => {
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })  
    .beforeEach(async t => {
        // Runs before each test
        await t.maximizeWindow()
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //Runs after each test
    })

test('User cannot login with invalid credentials', async t => {
    // here goes testcafe code
    const link_to_Store_HomePage = Selector('a').withText('TEST STORE')

    await t.scrollIntoView(link_to_Store_HomePage)
           .click(link_to_Store_HomePage);

    await navbar.goToSignInPage()

    // const isLoginFormPresent = await signinpage.isLoginFormPresent()
    await t.expect(await signinpage.isLoginFormPresent()).ok()

    await signinpage.doInvalidLogin("randomem@asd.com", "asdasd@asdasd11")

    // const signInErrorMessage = await signinpage.getSignInErrorMessageText()
    await t.expect(await signinpage.getSignInErrorMessageText()).eql("Authentication failed.")
    
})
