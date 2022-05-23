1. Project Title:

Project title is "WEBDRIVERIO".

2. Project Description:

My project helps in creating advertisements and edit those advertisements successfully for the Herokuapp page. 

3. Technologies and Frameworks used:

Test Automation Framework used -> WebdriverIO
WebdriverIO is a automation framework built to automate modern web and mobile applications in Javascript. 
WebDriverIO is built on Node.js engine and Uses JavaScript to code the Automation.
It uses Selenium under hood. All the great things about Selenium are available in WebDriverIO with additional advantage of exclusive assertions for Test Validations.

Language used -> Javascript

Framework Used for assertions -> Mocha framework (JavaScript test framework running on node.js)
I have also included chai assertions. Testcases are arranged in Page Object Model (POM)

Editor used -> Visual Studio Code.

4. System Requirements -> node.js and npm.

To install node.js in windows/mac/linux -> Refer this page 'https://nodejs.org/en/download/'.
Set the path NODE_HOME in your environment variables.

5. Include Testcases:
Testcases are as below:
1. Validate the title of the advertisement page.
2. Validate the fields present on the create advertisement page.
3. Verify the mandatory fields present on the create advertisement page.
4. Create new advertisements succesfully using Json file.
5. Verify the advertisementa are displayed successfully after creation.
6. Edit the existing advertisement.
7. Verify if the list of advertisements are getting sorted successfully.
8. Verify the format of price that it accepts only integer values.
9. Verify on what condition, the save button is getting enabled??

6. Setuo of project: After checkout of project from github, run the below command to reinstall the executable files,packages and its dependencies. 
Command is: npm install

7. To run the tests -> npx wdio run wdio.conf.js 
To run all the testcases at one shot, please execute the above command.
If you want to exclude any specific testcase then add letter 'x' to the 'it' statement in the spec file. That testcase will be excluded from the execution. For example:

xit('8.Verify the format of price that it accepts only integer values', async() => {
    await browser.url("/advertisements");
    browser.maximizeWindow();
    await homePage.clickButton();
    await createAdvPage.verifyPriceFormat();
});
Testcase 8 will not be executed.

8. To open the reports -> I have used Allure Reports to see the execution details.
         1. npm install -g allure-commandline --save-dev -> this will install the allure commandline.
         2. allure generate allure-results && allure open -> this will open the reports in the browser after execution.
(If the above command doesn't run in VSCode terminal then run it in cmd prompt)



 

