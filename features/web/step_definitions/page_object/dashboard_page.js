'use strict';

const properties = require('../../../../properties.json');

module.exports = class DashboardPage {

	constructor(driver) {
		this.driver = driver;
	}

	async ClickPagesLink() {
		let element = await this.driver.$('a[href="#/pages/"]');
    	return await element.click();
	}
};