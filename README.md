# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, unit tests are best for testing individual units of code. Messaging is the main feature of a messaging application and likely requires the majority of the code for the application.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, this max message length feature is a small part of the code, which makes it easier to test as an individual component.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

The tests will be run without the browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500/#settings');
    await page.waitForTimeout(500);
  });