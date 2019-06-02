class UI {
    constructor() {
        // app inicialization
        this.init();
    }
    // method when the app starts
    init() {
        // display categories in <select>
        this.printCategories();
    }
    // Print the categories
    printCategories() {
        const categoriesList = eventbrite.getCategoriesAPI();
    }
}