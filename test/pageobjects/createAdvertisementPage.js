const homepage = require("./homepage");
const expectchai = require('chai').expect;

class CreateAdvertisementPage {

    get title() {
        return $("//div[@class='md-subhead']");
    }

    get advName() {
        return $("//input[@name='name']");
    }

    get streetName() {
        return $("//input[@name='street']");
    }

    get rooms() {
        return $("//input[@name='rooms']");
    }

    get price() {
        return $("//input[@name='price']");
    }

    get status() {
        return $("//div[@class='md-container']");
    }

    get btnCancel() {
        return $("//button[@class='md-primary md-button'][1]");
    }

    get btnSave() {
        return $("//button[@class='md-primary md-button'][2]");
    }

    get requiredAdvText() {
        return $("(//div[@class='md-input-message-animation ng-scope'][normalize-space()='This is required'])[1]");
    }

    get requiredPriceText() {
        return $("(//div[@class='md-input-message-animation ng-scope'][normalize-space()='This is required'])[2]");
    }

    get firstAdvName() {
        return $("(//td[@class='md-cell ng-binding'][normalize-space()='Hotel Taj'])[1]");
    }

    get sortIcon() {
        return $("//md-icon[@md-svg-icon='arrow-up.svg']");
    }

    get priceFormatText() {
        return $("//div[contains(text(),'Invalid price(Valid currency in euros: 12,12)')]");
    }

    async validateAllElementsOnThePage() {

        const titlePage = await this.title.getText();
        await expect(titlePage).toEqual("Advertisement");
        await this.advName.isDisplayed();
        await this.streetName.isDisplayed();
        await this.rooms.isDisplayed();
        await this.price.isDisplayed();
        await this.status.isClickable();
        await this.btnCancel.isExisting();
        await this.btnSave.isExisting();
    }

    async validateMandatoryFieldsOnThePage() {
        await this.advName.click();
        await this.streetName.click();
        await browser.pause(2000);
        await this.requiredAdvText.isDisplayed();
        (await this.price).click();
        (await this.rooms).click();
        await this.requiredPriceText.waitForExist({ timeout: 2000 });
        await this.requiredPriceText.isDisplayed();
    }

    async createAdvertisement(name, street, rooms, price) {
        await this.advName.setValue(name);
        await this.streetName.setValue(street);
        await this.rooms.setValue(rooms);
        await this.price.setValue(price);
        await this.status.isClickable();
        await this.status.click();
        await this.status.isSelected();
        await this.btnSave.waitForEnabled();
        await this.btnSave.click();
    }

    async sortingFunctionality() {
        (await this.sortIcon).click();
        const allAdvertisementNames = await $$("tr td:nth-child(1)");
        const allAdvertisementsOrigNames = await allAdvertisementNames.map(async names => await names.getText());
        const sortedNames = allAdvertisementsOrigNames.sort();
        await expectchai(allAdvertisementsOrigNames).to.equal(sortedNames);
        await browser.pause(1000);
    }

    async verifyPriceFormat() {
        await this.price.setValue("ABC");
        await browser.keys("Tab");
        await browser.pause(2000);
        (await this.priceFormatText).isDisplayed();
    }

    async verifySaveBtnEnableFunctionality(name, street, rooms, price) {
        await this.advName.setValue(name);
        (await this.btnSave).isEnabled();
        await this.streetName.setValue(street);
        (await this.btnSave).isEnabled();
        await this.rooms.setValue(rooms);
        (await this.btnSave).isEnabled();
        await this.price.setValue(price);
        (await this.btnSave).isEnabled();
        (await this.btnSave).click();
        await browser.pause(2000);
    }

    async verifyAdvCreatedSuccessfully() {
        (await $("//tbody/tr/td[1]")).isDisplayed(), "Advertisement Name is displayed";
        (await $("//tbody/tr/td[2]")).isDisplayed(), "Street name is displayed";
        (await $("//tbody/tr/td[3]")).isDisplayed(), "Rooms are displayed";
        (await $("//tbody/tr/td[4]")).isDisplayed(), "Price is displayed";
        (await $("//tbody/tr/td[5]")).isDisplayed(), "Status is displayed";
    }
}

module.exports = new CreateAdvertisementPage();

