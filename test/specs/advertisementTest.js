const homePage = require('../pageobjects/homepage');
const createAdvPage = require('../pageobjects/createAdvertisementPage');
const editAdvPage = require('../pageobjects/editAdvertisementPage');
const fs = require('fs');
let advertisementData = JSON.parse(fs.readFileSync('test/testData/advData.json'));

describe('Herokuapp Advertisement App', async () => {

    it('1.Validate the title of the advertisement page', async () => {
        await browser.url("/advertisements");
        browser.maximizeWindow();
        await homePage.validateTitle();
    });

    it('2.Validate the fields present on the create advertisement page', async () => {
        await browser.url("/advertisements");
        browser.maximizeWindow();
        await homePage.clickButton();
        await createAdvPage.validateAllElementsOnThePage();
    });

    it('3.Verify the mandatory fields present on the create advertisement page', async () => {
        await browser.url("/advertisements");
        browser.maximizeWindow();
        await homePage.clickButton();
        await createAdvPage.validateMandatoryFieldsOnThePage();
    });


    advertisementData.forEach(({ advertisement }) => { 
        it('4.Create new advertisements succesfully using Json file', async () => {
            await browser.url("/advertisements");
            browser.maximizeWindow();
            await homePage.clickButton();
            await createAdvPage.createAdvertisement(advertisement.name,
                advertisement.street, advertisement.rooms, advertisement.price, advertisement.status);
            console.log(advertisement.name);
            await browser.pause(1000);
        });
    });

    it('5.Verify the advertisementa are displayed successfully after creation', async () => {
        await browser.url("/advertisements");
        browser.maximizeWindow();
        await createAdvPage.verifyAdvCreatedSuccessfully();
    });

    it('6.Edit the existing advertisement', async () => {
        await browser.url("/advertisements");
        browser.maximizeWindow();
        await browser.pause(1000);
        await editAdvPage.editAdvertisement();
    });

    it('7.Verify if the list of advertisements are getting sorted successfully', async () => {
        await browser.url("/advertisements");
        browser.maximizeWindow();
        await createAdvPage.sortingFunctionality();
    });

    it('8.Verify the format of price that it accepts only integer values', async () => {
        await browser.url("/advertisements");
        browser.maximizeWindow();
        await homePage.clickButton();
        await createAdvPage.verifyPriceFormat();
    });

    it('9.Verify on what condition, the save button is getting enabled??', async () => {
        await browser.url("/advertisements");
        browser.maximizeWindow();
        await homePage.clickButton();
        await createAdvPage.verifySaveBtnEnableFunctionality("My Taj", "Raj Road", "5", "100");
    });


});