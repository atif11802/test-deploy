// const playwright = require("playwright");
// const Handlebars = require("handlebars");

// const fs = require("fs");

// const templateSource = fs.readFileSync("invoice-template.hbs", "utf8");

// const template = Handlebars.compile(templateSource);

// const data = {
// 	bookingIdx: "BOOKING_IDX",
// 	learnerName: "Atif",
// 	phone: "01763973727",
// 	dueDate: "05 September 2024",
// 	email: "email@learner.com",

// 	bookingIdx: 1223,
// 	booking_date: "07 July 2024",
// 	booking_time: "12:18 PM",

// 	course_title: "WordPress Theme Development",
// 	batch_code: "wordpress-001",

// 	subtotal: "৳ 8000",
// 	promo: "EIDERKHUSHI",
// 	discount: "৳ 2000",
// 	total: "৳ 6000",
// 	paid: "৳ 6000",
// 	totalDue: "৳ 0",
// 	transactions: [
// 		{ date: "07 July 2024", method: "BKASH", amount: "৳ 2000" },
// 		{ date: "18 July 2024", method: "CUSTOM", amount: "৳ 1000" },
// 		{ date: "05 August 2024", method: "SSLCOMMERZ", amount: "৳ 3000" },
// 	],
// 	generationDate: "August 13, 2024",
// 	generationTime: "12:18 PM",
// };

// const renderedTemplate = template(data);

// fs.writeFileSync("dhoom.html", renderedTemplate);

// const htmlContent = fs.readFileSync("dhoom.html", "utf8");

// const generatePDFfromHTML = async (htmlContent, outputPath) => {
// 	const browser = await playwright.chromium.launch();
// 	const page = await browser.newPage();
// 	await page.setContent(htmlContent);
// 	await page.pdf({
// 		path: outputPath,

// 		format: "A4",
// 		height: "29.7cm",
// 		width: "21cm",
// 	});
// 	await browser.close();
// 	console.log("PDF generated successfully");
// };

// generatePDFfromHTML(htmlContent, "custom.pdf");

const playwright = require("playwright");
const Handlebars = require("handlebars");
const fs = require("fs");

const templateSource = fs.readFileSync("invoice-template.hbs", "utf8");
const template = Handlebars.compile(templateSource);

const data = {
	bookingIdx: "BOOKING_IDX",
	learnerName: "Atif 1",
	phone: "01763973727",
	dueDate: "05 September 2024",
	email: "email@learner.com",

	bookingIdx: 1223,
	booking_date: "07 July 2024",
	booking_time: "12:18 PM",

	course_title: "WordPress Theme Development",
	batch_code: "wordpress-001",

	subtotal: "৳ 8000",
	promo: "EIDERKHUSHI",
	discount: "৳ 2000",
	total: "৳ 6000",
	paid: "৳ 6000",
	totalDue: "৳ 0",
	transactions: [
		{ date: "07 July 2024", method: "BKASH", amount: "৳ 2000" },
		{ date: "18 July 2024", method: "CUSTOM", amount: "৳ 1000" },
		{ date: "05 August 2024", method: "SSLCOMMERZ", amount: "৳ 3000" },
	],
	generationDate: "August 13, 2024",
	generationTime: "12:18 PM",
};

const renderedTemplate = template(data);

const generatePDFfromHTML = async (htmlContent, outputPath) => {
	const browser = await playwright.chromium.launch();
	const page = await browser.newPage();
	await page.setContent(htmlContent);
	await page.pdf({
		path: outputPath,
		format: "A4",
		height: "29.7cm",
		width: "21cm",
	});
	await browser.close();
	console.log("PDF generated successfully");
};

generatePDFfromHTML(renderedTemplate, "custom.pdf");
