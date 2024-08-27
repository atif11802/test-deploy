const Handlebars = require("handlebars");
const fs = require("fs");
const puppeteer = require("puppeteer");
const playwright = require("playwright");

const generateQRCode = require("./generateQrCode");
const path = require("path");

const templateSource = fs.readFileSync(
	path.join(__dirname, "template.hbs"),
	"utf8"
);
const template = Handlebars.compile(templateSource);
Handlebars.registerHelper("incrementedIndex", function (index) {
	return index + 1;
});
async function generatePDFfromHTML(htmlContent, outputPath) {
	const browser = await playwright.chromium.launch();
	const page = await browser.newPage();

	await page.setContent(htmlContent, {
		waitUntil: "load",
	});
	await page.pdf({
		path: outputPath,
		// format: "A4",
		height: "31.9cm",
		width: "21.6cm",
		printBackground: true,
		preferCSSPageSize: true,
	});
	await browser.close();

	console.log("PDF generated successfully");
	await browser.close();
}

const test = async () => {
	try {
		let qrPath = "";

		const outputPath = await generateQRCode(
			"https://www.example.com",
			"./images",
			"myQRCode"
		);

		qrPath = outputPath;

		let data = {
			course_title: "PHP laravel",
			batch_code: "BATCH-123",
			qr_code: qrPath,
			learner_name: "John Doe",
			batch_start_date: "2021-07-01",
			grade: "A",
			instructors_name: "Jane Doe, Alice",
			technical_skills: [
				{
					skill_name: "Node.js",
					skill_level: "Intermediate",
					skill_marks: 90,
				},
				{
					skill_name: "React",
					skill_level: "Intermediate",
					skill_marks: 80,
				},
			],
			problem_solving_skills: [
				{
					skill_name: "html",
					skill_level: "Intermediate",
					skill_marks: 90,
				},
				{
					skill_name: "css",
					skill_level: "Intermediate",
					skill_marks: 80,
				},
			],
			soft_skills: [
				{
					skill_name: "html",
					skill_level: "Intermediate",
					skill_marks: 90,
				},
			],
			recommended_posts: [
				"Introduction to Handlebars",
				"Advanced Handlebars Techniques",
				"Handlebars with Node.js",
			],
		};

		const renderedTemplate = template(data);

		generatePDFfromHTML(renderedTemplate, "custom.pdf");
	} catch (error) {
		console.log(error);
	}
};

test();
