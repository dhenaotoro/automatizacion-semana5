'use strict';

const properties = require('../../../../properties.json');

module.exports = class SigninPage {

	constructor(driver) {
		this.driver = driver;
	}

	async EnterLoginCredentials() {
		let emailElement = await this.driver.$('input[name="identification"]');
		await emailElement.setValue(properties.USERNAME1);

		let passwordElement = await this.driver.$('input[name="password"]');
		await passwordElement.setValue(properties.PASSWORD1);

		this.driver.takeScreenshot();

		let submitElement = await this.driver.$('button[type="submit"]');
		await submitElement.click();

		return new Promise(r => setTimeout(r, 2000));
	}
};