import { Selector, t } from "testcafe";

class SearchResultsPage {
    constructor() {
        this.resultsTitle = Selector('.h2')
    }
}

export default SearchResultsPage