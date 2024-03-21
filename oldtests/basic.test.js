import { Selector, t } from "testcafe";

fixture `Getting started with testCafe`
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

test.skip('Filip First TestCafe Test.... Oh yea!! ....', async t => {
    // here goes testcafe code
    const link_to_Store_HomePage = Selector('a').withText('TEST STORE')

    await t.scrollIntoView(link_to_Store_HomePage)
    await t.click(link_to_Store_HomePage);

    
})
