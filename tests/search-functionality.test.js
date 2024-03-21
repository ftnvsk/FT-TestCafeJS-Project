import { Selector, t } from "testcafe";
import NavBar from "../page-object/components/NavBar";
import SearchResultsPage from "../page-object/pages/SearchResultsPage";

const navbar = new NavBar()
const searchResultsPage = new SearchResultsPage()

fixture `Search Functionality Test`
    .page("https://www.automationtesting.co.uk/")
    .before(async t => {
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })  
    .beforeEach(async t => {
        // Runs before each test
        await t.maximizeWindow()
        // await t.setTestSpeed(0.2)
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //Runs after each test
    })

test('User can perform a search by typing text in the search field', async t => {
    // here goes testcafe code
    const link_to_Store_HomePage = Selector('a').withText('TEST STORE')

    await t.scrollIntoView(link_to_Store_HomePage)
           .click(link_to_Store_HomePage)

    await navbar.searchForText('mug')
    
    await t.expect(searchResultsPage.resultsTitle.visible).ok()

})
