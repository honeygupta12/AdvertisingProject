

class HomePage {

    get title() {
        return $("//h2[contains(text(),'Advertisements')]");
    }

    get plusButton() {
        return $("//md-icon[@class='al-add__icon ng-scope material-icons']");
    }

    async validateTitle() {
        const text = await this.title.getText();
        await expect(text).toEqual("Advertisements");
    }

    async clickButton() {
        await this.plusButton.click();
    }

}

module.exports = new HomePage();
