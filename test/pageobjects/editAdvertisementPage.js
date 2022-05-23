const homepage = require("./homepage");
const expectchai = require('chai').expect;

class EditAdvertisementPage {

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

    async editAdvertisement() {
        const firstAdvRecords = await $$("//tr/td[1]");
        const firstRecord = await firstAdvRecords[0].doubleClick();
        await browser.pause(1000);
        await this.status.click();
        await this.btnSave.waitForEnabled();
        await this.btnSave.click();
    }


}
module.exports = new EditAdvertisementPage();